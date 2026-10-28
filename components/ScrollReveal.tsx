"use client";

import { useEffect } from "react";

const TARGETS = "[data-reveal], [data-reveal-group] > *";
const STAGGER_MS = 110;
const MAX_STAGGER_STEPS = 6;
const DESIGN_WIDTH = 1686;
const DESKTOP_MIN = 1024;
const MAX_WIDTH = 1920;

/** Starting point of each animation, in design pixels (see --unit in app/layout.tsx). */
const FROM: Record<string, (u: number) => Keyframe> = {
  up: (u) => ({ opacity: 0, translate: `0 ${40 * u}px` }),
  down: (u) => ({ opacity: 0, translate: `0 ${-40 * u}px` }),
  left: (u) => ({ opacity: 0, translate: `${-56 * u}px 0` }),
  right: (u) => ({ opacity: 0, translate: `${56 * u}px 0` }),
  zoom: () => ({ opacity: 0, scale: "0.9" }),
  fade: () => ({ opacity: 0 }),
  line: () => ({ opacity: 0, scale: "0 1" }),
};

/**
 * Plays the scroll animations of the whole site.
 *
 * Mark an element with data-reveal="up | down | left | right | zoom | fade | line",
 * or mark a parent with data-reveal-group="..." to animate each of its children.
 * "left" means the element comes in from the left side, "right" from the right.
 * Elements that come into view together are staggered one after another.
 *
 * Decorative shapes marked with data-float="<duration in ms>" drift up and down
 * forever; data-float-delay="<ms>" (may be negative) offsets them from each other.
 *
 * Everything runs through the Web Animations API, so no CSS is needed. Without
 * JavaScript, or with reduced motion turned on, every element is simply visible
 * and nothing moves.
 */
export default function ScrollReveal() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const seen = new WeakSet<Element>();
    // Same value as --unit in app/layout.tsx: from 1024px the design follows the screen, up to 1920px.
    const unit = () => (window.innerWidth >= DESKTOP_MIN ? Math.min(window.innerWidth, MAX_WIDTH) / DESIGN_WIDTH : 1);

    // Elements waiting below the fold are hidden by a held animation, never by a style
    // attribute: React may still be hydrating them (streamed pages hydrate in pieces, and
    // can start again), and any attribute changed before then is reported as a mismatch.
    const hidden = new Map<Element, Animation>();
    const hide = (el: HTMLElement) => hidden.set(el, el.animate([{ opacity: 0 }, { opacity: 0 }], { duration: 1, fill: "forwards" }));
    const show = (el: HTMLElement) => {
      hidden.get(el)?.cancel();
      hidden.delete(el);
    };

    const play = (el: HTMLElement, delay = 0) => {
      const kind = el.dataset.reveal || el.parentElement?.dataset.revealGroup || "up";
      const from = (FROM[kind] ?? FROM.up)(unit());
      el.animate([{ offset: 0, ...from }], {
        duration: 800,
        easing: "cubic-bezier(0.22, 1, 0.36, 1)",
        delay: delay + Number(el.dataset.revealDelay ?? 0),
        fill: "backwards",
      });
      show(el);
    };

    const io = new IntersectionObserver(
      (entries) => {
        const perParent = new Map<Element | null, number>();
        for (const entry of entries) {
          const el = entry.target as HTMLElement;
          // Already scrolled past (page opened half way down): show it without waiting.
          const passed = entry.boundingClientRect.bottom < 0;
          if (!entry.isIntersecting && !passed) continue;
          io.unobserve(el);
          const step = perParent.get(el.parentElement) ?? 0;
          perParent.set(el.parentElement, step + 1);
          play(el, passed ? 0 : Math.min(step, MAX_STAGGER_STEPS) * STAGGER_MS);
        }
      },
      { rootMargin: "0px 0px -6% 0px", threshold: 0.05 },
    );

    // On the first scan the page is already painted, so whatever is on screen
    // stays as it is. Everything below the fold is hidden until it scrolls in.
    // Later scans (another page opened, a slider moved) run before the browser
    // paints the new elements, so those can all be hidden and animated.
    const float = (el: HTMLElement) => {
      const lift = { translate: `0 ${-12 * unit()}px`, easing: "ease-in-out" };
      el.animate([{ translate: "0 0", easing: "ease-in-out" }, lift, { translate: "0 0" }], {
        duration: Number(el.dataset.float) || 6000,
        delay: Number(el.dataset.floatDelay ?? 0),
        iterations: Infinity,
      });
    };

    let firstScan = true;
    const scan = () => {
      document.querySelectorAll<HTMLElement>("[data-float]").forEach((el) => {
        if (seen.has(el)) return;
        seen.add(el);
        float(el);
      });
      document.querySelectorAll<HTMLElement>(TARGETS).forEach((el) => {
        if (seen.has(el)) return;
        seen.add(el);
        if (firstScan && el.getBoundingClientRect().top < window.innerHeight) return;
        hide(el);
        io.observe(el);
      });
      firstScan = false;
    };

    let frame = 0;

    const mo = new MutationObserver(() => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(scan);
    });

    scan();
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      cancelAnimationFrame(frame);
      mo.disconnect();
      io.disconnect();
      hidden.forEach((animation) => animation.cancel());
    };
  }, []);

  return null;
}
