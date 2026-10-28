"use client";

import { useEffect } from "react";

const TARGETS = "[data-reveal], [data-reveal-group] > *";
const STAGGER_MS = 110;
const MAX_STAGGER_STEPS = 6;
const DESIGN_WIDTH = 1686;
const DESKTOP_MIN = 1024;
const MAX_WIDTH = 1920;

// Streamed content lands in the DOM before React hydrates it, and changing it then
// makes hydration report a mismatch. So an element is only touched once React has
// attached its fiber to it (hydrated).
const isHydrated = (element: Element) => Object.keys(element).some((key) => key.startsWith("__reactFiber$"));

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

    const play = (el: HTMLElement, delay = 0) => {
      const kind = el.dataset.reveal || el.parentElement?.dataset.revealGroup || "up";
      const from = (FROM[kind] ?? FROM.up)(unit());
      el.animate([{ offset: 0, ...from }], {
        duration: 800,
        easing: "cubic-bezier(0.22, 1, 0.36, 1)",
        delay: delay + Number(el.dataset.revealDelay ?? 0),
        fill: "backwards",
      });
      el.style.opacity = "";
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

    // Elements React has not hydrated yet are left alone and picked up on the next frame.
    // Until the whole first page has hydrated, whatever is on screen is still left visible.
    let firstScan = true;
    let frame = 0;
    const scan = () => {
      let pending = false;
      document.querySelectorAll<HTMLElement>("[data-float]").forEach((el) => {
        if (seen.has(el)) return;
        if (!isHydrated(el)) return void (pending = true);
        seen.add(el);
        float(el);
      });
      document.querySelectorAll<HTMLElement>(TARGETS).forEach((el) => {
        if (seen.has(el)) return;
        if (!isHydrated(el)) return void (pending = true);
        seen.add(el);
        if (firstScan && el.getBoundingClientRect().top < window.innerHeight) return;
        el.style.opacity = "0";
        io.observe(el);
      });
      if (pending) frame = requestAnimationFrame(scan);
      else firstScan = false;
    };

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
    };
  }, []);

  return null;
}
