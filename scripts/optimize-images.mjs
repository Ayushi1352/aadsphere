import sharp from "sharp";
import path from "path";
import fs from "fs";

const mapping = [
  {
    src: "C:\\Users\\aayus\\.gemini\\antigravity-ide\\brain\\afcb4e44-59a4-4c45-946e-99286e8ae9fc\\clean_service_seo_1791282515703.jpg",
    dest: "service-seo.webp"
  },
  {
    src: "C:\\Users\\aayus\\.gemini\\antigravity-ide\\brain\\afcb4e44-59a4-4c45-946e-99286e8ae9fc\\clean_service_branding_1791282559984.jpg",
    dest: "service-branding.webp"
  },
  {
    src: "C:\\Users\\aayus\\.gemini\\antigravity-ide\\brain\\afcb4e44-59a4-4c45-946e-99286e8ae9fc\\clean_service_perf_1791282591065.jpg",
    dest: "service-performance.webp"
  },
  {
    src: "C:\\Users\\aayus\\.gemini\\antigravity-ide\\brain\\afcb4e44-59a4-4c45-946e-99286e8ae9fc\\clean_service_cons_1791282625520.jpg",
    dest: "service-consulting.webp"
  },
  {
    src: "C:\\Users\\aayus\\.gemini\\antigravity-ide\\brain\\afcb4e44-59a4-4c45-946e-99286e8ae9fc\\clean_proc_discover_1791282671298.jpg",
    dest: "process-discover.webp"
  },
  {
    src: "C:\\Users\\aayus\\.gemini\\antigravity-ide\\brain\\afcb4e44-59a4-4c45-946e-99286e8ae9fc\\clean_proc_plan_1791282703988.jpg",
    dest: "process-plan.webp"
  },
  {
    src: "C:\\Users\\aayus\\.gemini\\antigravity-ide\\brain\\afcb4e44-59a4-4c45-946e-99286e8ae9fc\\clean_proc_exec_1791282742871.jpg",
    dest: "process-execute.webp"
  },
  {
    src: "C:\\Users\\aayus\\.gemini\\antigravity-ide\\brain\\afcb4e44-59a4-4c45-946e-99286e8ae9fc\\clean_proc_deliv_1791282790001.jpg",
    dest: "process-deliver.webp"
  },
  {
    src: "C:\\Users\\aayus\\.gemini\\antigravity-ide\\brain\\afcb4e44-59a4-4c45-946e-99286e8ae9fc\\clean_testim_client_1791282836125.jpg",
    dest: "testimonial-client.webp"
  },
  {
    src: "C:\\Users\\aayus\\.gemini\\antigravity-ide\\brain\\afcb4e44-59a4-4c45-946e-99286e8ae9fc\\clean_blog_digimkt_1791282891576.jpg",
    dest: "blog-digital-marketing.webp"
  },
  {
    src: "C:\\Users\\aayus\\.gemini\\antigravity-ide\\brain\\afcb4e44-59a4-4c45-946e-99286e8ae9fc\\clean_blog_datadriven_1791282933139.jpg",
    dest: "blog-data-driven.webp"
  },
  {
    src: "C:\\Users\\aayus\\.gemini\\antigravity-ide\\brain\\afcb4e44-59a4-4c45-946e-99286e8ae9fc\\clean_blog_social_1791283026872.jpg",
    dest: "blog-social-media.webp"
  },
  {
    src: "C:\\Users\\aayus\\.gemini\\antigravity-ide\\brain\\afcb4e44-59a4-4c45-946e-99286e8ae9fc\\clean_hero_office_1791283098620.jpg",
    dest: "hero-office.webp"
  }
];

const targetDir = "c:\\Users\\aayus\\aadsphere\\public\\images";

async function run() {
  for (const item of mapping) {
    if (!fs.existsSync(item.src)) {
      console.error(`Source not found: ${item.src}`);
      continue;
    }
    const destPath = path.join(targetDir, item.dest);
    await sharp(item.src)
      .webp({ quality: 92 })
      .toFile(destPath);
    console.log(`Converted & replaced: ${item.dest}`);
  }
  console.log("All images successfully replaced with clean, high-resolution versions!");
}

run().catch(console.error);
