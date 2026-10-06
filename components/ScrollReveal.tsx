"use client";

import { useEffect } from "react";

const TARGETS = "[data-reveal], [data-reveal-group] > *";
const STAGGER_MS = 110;
const MAX_STAGGER_STEPS = 6;

/**
 * Plays the scroll animations of the whole site.
 *
 * Mark an element with data-reveal="up | down | left | right | zoom | fade | line",
 * or mark a parent with data-reveal-group="..." to animate each of its children.
 * The element stays hidden (see globals.css) until it scrolls into view; this
 * component then sets data-shown on it, which starts the CSS animation.
 * Elements that come into view together are staggered one after another.
 */
export default function ScrollReveal() {
  useEffect(() => {
    const root = document.documentElement;
    const seen = new WeakSet<Element>();

    const show = (el: HTMLElement, delay = 0) => {
      const extra = Number(el.dataset.revealDelay ?? 0);
      el.style.setProperty("--reveal-delay", `${delay + extra}ms`);
      el.dataset.shown = "";
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
          show(el, passed ? 0 : Math.min(step, MAX_STAGGER_STEPS) * STAGGER_MS);
        }
      },
      { rootMargin: "0px 0px -6% 0px", threshold: 0.05 },
    );

    const scan = () => {
      document.querySelectorAll<HTMLElement>(TARGETS).forEach((el) => {
        if (seen.has(el) || "shown" in el.dataset) return;
        seen.add(el);
        io.observe(el);
      });
    };

    // New elements appear when the visitor opens another page or moves a slider.
    let frame = 0;
    const mo = new MutationObserver(() => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(scan);
    });

    scan();
    mo.observe(document.body, { childList: true, subtree: true });
    root.dataset.revealReady = "";

    return () => {
      cancelAnimationFrame(frame);
      mo.disconnect();
      io.disconnect();
    };
  }, []);

  return null;
}
