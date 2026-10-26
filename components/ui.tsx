import type { HeadingLine } from "@/data";

/**
 * Text that keeps the exact line breaks of the design on desktop
 * and flows naturally (no forced breaks) on smaller screens.
 */
export function Lines({ lines }: { lines: string[] }) {
  return (
    <>
      {lines.map((line, i) => (
        <span key={i} className="lg:block">
          {line}
          {i < lines.length - 1 ? " " : ""}
        </span>
      ))}
    </>
  );
}

/** Small uppercase label with a red line on both sides ("—— OUR SERVICES ——"). */
export function SectionLabel({ text, tracking = "tracking-[0.27em]", className = "" }: { text: string; tracking?: string; className?: string }) {
  return (
    <p className={`flex items-center gap-[calc(14*var(--unit))] lg:gap-[calc(22*var(--unit))] ${className}`}>
      <span className="h-[calc(2*var(--unit))] w-[calc(32*var(--unit))] bg-[#6e0c12] lg:w-[calc(52*var(--unit))]" aria-hidden="true" />
      <span className={`font-(family-name:--font-inter-face) text-[calc(13*var(--unit))] font-medium uppercase leading-none text-[#3d4350] lg:text-[calc(16*var(--unit))] ${tracking}`}>
        {text}
      </span>
      <span className="h-[calc(2*var(--unit))] w-[calc(32*var(--unit))] bg-[#6e0c12] lg:w-[calc(52*var(--unit))]" aria-hidden="true" />
    </p>
  );
}

/** Two-line section heading: black first line, maroon second line. */
export function SectionHeading({ lines, className = "" }: { lines: HeadingLine[]; className?: string }) {
  return (
    <h2 className={`font-bold text-[#141414] ${className}`}>
      {lines.map((line, i) => (
        <span key={i} className={`block ${line.highlight ? "text-[#6e0c12]" : ""}`}>
          {line.text}
        </span>
      ))}
    </h2>
  );
}

/**
 * Decorative grid of small dots. `gap` is the distance between dots in design pixels.
 * data-float / data-float-delay are passed on so the grid can drift (see ScrollReveal).
 */
export function DotGrid({
  cols,
  rows,
  gap = 22,
  gapY = gap,
  size = 6,
  color = "#6e0c12",
  className = "",
  ...floatProps
}: {
  cols: number;
  rows: number;
  gap?: number;
  gapY?: number;
  size?: number;
  color?: string;
  className?: string;
  "data-float"?: string;
  "data-float-delay"?: string;
}) {
  const px = (n: number) => `calc(${n} * var(--unit, 1px))`;
  return (
    <span
      {...floatProps}
      aria-hidden="true"
      className={`pointer-events-none block ${className}`}
      style={{
        width: px((cols - 1) * gap + size),
        height: px((rows - 1) * gapY + size),
        backgroundImage: `radial-gradient(circle, ${color} ${px(size / 2 - 0.4)}, transparent ${px(size / 2)})`,
        backgroundSize: `${px(gap)} ${px(gapY)}`,
        backgroundPosition: `${px(-(gap - size) / 2)} ${px(-(gapY - size) / 2)}`,
      }}
    />
  );
}
