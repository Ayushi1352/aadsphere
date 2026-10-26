"use client";

import { useCallback, useRef, useState } from "react";
import type { TouchEvent } from "react";
import Icon from "./icons";
import { fill, site } from "@/data";

const text = site.siteMeta.text.Carousel;

/** Index state for a looping slider, plus swipe handlers for touch screens. */
export function useSlider(count: number) {
  const [index, setIndex] = useState(0);
  const startX = useRef<number | null>(null);

  const goTo = useCallback((i: number) => setIndex(((i % count) + count) % count), [count]);
  const next = useCallback(() => setIndex((i) => (i + 1) % count), [count]);
  const prev = useCallback(() => setIndex((i) => (i - 1 + count) % count), [count]);

  const swipe = {
    onTouchStart: (e: TouchEvent) => {
      startX.current = e.touches[0].clientX;
    },
    onTouchEnd: (e: TouchEvent) => {
      if (startX.current === null) return;
      const dx = e.changedTouches[0].clientX - startX.current;
      startX.current = null;
      if (dx < -40) next();
      if (dx > 40) prev();
    },
  };

  return { index, goTo, next, prev, swipe };
}

/** Items starting from the active one, wrapping around (the active item comes first). */
export function rotate<T>(items: T[], start: number): T[] {
  return items.slice(start).concat(items.slice(0, start));
}

/** Round white arrow button used at the sides of the card carousels. */
export function ArrowButton({
  direction,
  icon,
  onClick,
  className = "",
}: {
  direction: "previous" | "next";
  icon: string;
  onClick: () => void;
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={text[direction]}
      className={`hidden md:flex size-[calc(44*var(--unit))] cursor-pointer items-center justify-center rounded-full bg-white text-[#6e0c12] shadow-[0_calc(4*var(--unit))_calc(16*var(--unit))_rgba(20,20,20,0.12)] transition-colors duration-200 hover:bg-[#6e0c12] hover:text-white lg:size-[calc(52*var(--unit))] ${className}`}
    >
      <Icon name={icon} className="size-[calc(20*var(--unit))] lg:size-[calc(22*var(--unit))]" />
    </button>
  );
}

/** Row of dots under a slider. */
export function SliderDots({
  count,
  active,
  onSelect,
  className = "",
}: {
  count: number;
  active: number;
  onSelect: (i: number) => void;
  className?: string;
}) {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      {Array.from({ length: count }, (_, i) => (
        <button
          key={i}
          type="button"
          onClick={() => onSelect(i)}
          aria-label={fill(text.goToSlideN, { n: i + 1 })}
          aria-current={i === active}
          className="flex size-[calc(28*var(--unit))] cursor-pointer items-center justify-center"
        >
          <span className={`block size-[calc(12*var(--unit))] rounded-full transition-colors duration-200 ${i === active ? "bg-[#6e0c12]" : "bg-[#dfe0e2]"}`} />
        </button>
      ))}
    </div>
  );
}
