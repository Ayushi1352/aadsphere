/* One-off helper: cuts the photos out of the design screenshot and writes them to public/images as WebP.
   Usage: node scripts/extract-images.mjs <home.png> <logo.png> [service-detail.png] [portfolio.png] [blog-detail.png] */
import sharp from "sharp";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const [, , DESIGN, LOGO, DETAIL, PORTFOLIO, BLOG] = process.argv;
const OUT = path.join(__dirname, "..", "public", "images");

let img; // { data, w, h, c }
const idx = (x, y) => (y * img.w + x) * img.c;

/** Fill the masked pixels of a region from the pixels around them (simple diffusion inpaint). */
function inpaint(x0, y0, x1, y1, isMasked) {
  const w = x1 - x0, h = y1 - y0;
  const mask = new Uint8Array(w * h);
  for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) if (isMasked(x + x0, y + y0)) mask[y * w + x] = 1;
  const buf = new Float32Array(w * h * 3);
  for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) for (let k = 0; k < 3; k++) buf[(y * w + x) * 3 + k] = img.data[idx(x + x0, y + y0) + k];
  // start: interpolate along rows and columns between the nearest known pixels
  const init = new Float32Array(w * h * 3), wsum = new Float32Array(w * h);
  const run = (len, at) => {
    let i = 0;
    while (i < len) {
      if (!mask[at(i)]) { i++; continue; }
      let j = i; while (j < len && mask[at(j)]) j++;
      const a = i > 0 ? at(i - 1) : -1, b = j < len ? at(j) : -1;
      if (a >= 0 || b >= 0) for (let t = i; t < j; t++) {
        const f = a >= 0 && b >= 0 ? (t - i + 1) / (j - i + 1) : a >= 0 ? 0 : 1;
        const wgt = 1 / Math.max(1, Math.min(t - i + 1, j - t));
        for (let k = 0; k < 3; k++) {
          const va = a >= 0 ? buf[a * 3 + k] : buf[b * 3 + k], vb = b >= 0 ? buf[b * 3 + k] : va;
          init[at(t) * 3 + k] += (va * (1 - f) + vb * f) * wgt;
        }
        wsum[at(t)] += wgt;
      }
      i = j;
    }
  };
  for (let y = 0; y < h; y++) run(w, (i) => y * w + i);
  for (let x = 0; x < w; x++) run(h, (i) => i * w + x);
  for (let p = 0; p < w * h; p++) if (mask[p] && wsum[p]) for (let k = 0; k < 3; k++) buf[p * 3 + k] = init[p * 3 + k] / wsum[p];
  for (let it = 0; it < 60; it++)
    for (let y = 1; y < h - 1; y++) for (let x = 1; x < w - 1; x++) {
      const p = y * w + x; if (!mask[p]) continue;
      for (let k = 0; k < 3; k++) buf[p * 3 + k] = (buf[(p - 1) * 3 + k] + buf[(p + 1) * 3 + k] + buf[(p - w) * 3 + k] + buf[(p + w) * 3 + k]) / 4;
    }
  for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) if (mask[y * w + x]) for (let k = 0; k < 3; k++) img.data[idx(x + x0, y + y0) + k] = Math.round(buf[(y * w + x) * 3 + k]);
}

/** Mask of the bright pixels (overlaid white text) in a rectangle, grown by `grow` px. */
function brightMask(x0, y0, x1, y1, min, grow) {
  const w = x1 - x0, h = y1 - y0, m = new Uint8Array(w * h);
  for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
    const i = idx(x + x0, y + y0);
    if (Math.min(img.data[i], img.data[i + 1], img.data[i + 2]) > min) m[y * w + x] = 1;
  }
  const g = new Uint8Array(w * h);
  for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
    let hit = 0;
    for (let dy = -grow; dy <= grow && !hit; dy++) for (let dx = -grow; dx <= grow; dx++) {
      const yy = y + dy, xx = x + dx;
      if (yy >= 0 && yy < h && xx >= 0 && xx < w && m[yy * w + xx]) { hit = 1; break; }
    }
    g[y * w + x] = hit;
  }
  return (x, y) => g[(y - y0) * w + (x - x0)] === 1;
}

const save = (name, l, t, w, h, q = 92) =>
  sharp(img.data, { raw: { width: img.w, height: img.h, channels: img.c } })
    .extract({ left: l, top: t, width: w, height: h })
    .png().toBuffer()
    // 2x size with a light sharpen, so the photos stay crisp on high-density screens
    .then((buf) => sharp(buf).resize({ width: w * 2, kernel: "lanczos3" }).sharpen({ sigma: 1.1, m1: 0.7, m2: 2.2 })
      .webp({ quality: q }).toFile(path.join(OUT, name + ".webp")));

(async () => {
  const { data, info } = await sharp(DESIGN).raw().toBuffer({ resolveWithObject: true });
  img = { data, w: info.width, h: info.height, c: info.channels };

  // Hero: remove the headline / paragraph pixels that sit on top of the photo.
  for (const [a, b, c, d, min] of [[671, 262, 716, 378, 150], [671, 382, 846, 478, 150], [671, 500, 936, 612, 150], [671, 640, 806, 680, 150]])
    inpaint(a - 6, b - 6, c + 6, d + 6, brightMask(a, b, c, d, min, 5));
  await save("hero-office", 672, 108, 1122, 735, 90);

  // About photo 1: rebuild the corner that the white headline boxes cover.
  const hidden = (x, y) => (y >= 1136 && y < 1234 && x < 987) || (y >= 1226 && y < 1304 && x < 859) || (y >= 1300 && y < 1450 && x < 824);
  inpaint(800, 1130, 992, 1452, (x, y) => x >= 806 && hidden(x, y));
  await save("about-designer", 806, 1064, 366, 460);
  await save("about-team", 747, 1449, 352, 265);

  await save("impact-team", 579 - 236, 2384 - 236, 472, 472);

  [["seo", 198], ["branding", 588], ["performance", 977], ["consulting", 1366]].forEach(([n, x]) => save("service-" + n, x + 1, 3064, 364, 262));
  [["discover", 378], ["plan", 784], ["execute", 1183], ["deliver", 1584]].forEach(([n, x]) => save("process-" + n, x - 125, 4018 - 125, 250, 250));

  await save("testimonial-client", 1064, 4548, 606, 567);
  await save("testimonial-avatar", 369, 4983, 74, 74);
  [["digital-marketing", 195], ["data-driven", 715], ["social-media", 1235]].forEach(([n, x]) => save("blog-" + n, x + 1, 5497, 493, 221));

  // Photos that only exist on the inner-page designs.
  const load = async (file) => {
    const r = await sharp(file).raw().toBuffer({ resolveWithObject: true });
    img = { data: r.data, w: r.info.width, h: r.info.height, c: r.info.channels };
  };
  if (DETAIL) {
    await load(DETAIL);
    await save("service-detail", 177, 723, 1566, 612, 90);
  }
  if (PORTFOLIO) {
    await load(PORTFOLIO);
    const cols = [[258, 447], [732, 448], [1207, 447]];
    const names = [["brand-identity", "marketing-website", "mobile-app"], ["social-campaign", "product-branding", "trading-platform"]];
    const rows = [[918, 488], [1589, 458]];
    for (let r = 0; r < 2; r++) for (let c = 0; c < 3; c++) await save("portfolio-" + names[r][c], cols[c][0], rows[r][0], cols[c][1], rows[r][1]);
  }

  if (BLOG) {
    await load(BLOG);
    await save("blog-detail", 202, 707, 1042, 448, 90);
    await save("blog-recent-1", 1316, 1316, 136, 106);
    await save("blog-recent-2", 1316, 1465, 136, 111);
    await save("blog-recent-3", 1316, 1619, 136, 111);
  }

  // Logo: trimmed, plus a light version (dark lettering turned white) for the dark footer.
  const logo = await sharp(LOGO).trim().resize({ width: 900 }).raw().toBuffer({ resolveWithObject: true });
  const raw = { raw: { width: logo.info.width, height: logo.info.height, channels: 4 } };
  await sharp(logo.data, raw).webp({ quality: 95 }).toFile(path.join(OUT, "logo.webp"));
  const light = Buffer.from(logo.data);
  for (let i = 0; i < light.length; i += 4) {
    const [r, g, b] = [light[i], light[i + 1], light[i + 2]];
    if (Math.max(r, g, b) < 75 && r - Math.max(g, b) < 22) light[i] = light[i + 1] = light[i + 2] = 255;
  }
  await sharp(light, raw).webp({ quality: 95 }).toFile(path.join(OUT, "logo-light.webp"));
  // Browser tab icon: the "A" mark on its own.
  const markW = Math.round(logo.info.width * 0.335);
  await sharp(logo.data, raw).extract({ left: 0, top: 0, width: markW, height: logo.info.height })
    .resize(256, 256, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } }).png().toFile(path.join(__dirname, "..", "app", "icon.png"));
  console.log("done");
})();
