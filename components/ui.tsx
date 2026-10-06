import type { HeadingLine } from "@/data";

/**
 * Text that keeps the exact line breaks of the design on desktop
 * and flows naturally (no forced breaks) on smaller screens.
 */
export function Lines({ lines }: { lines: string[] }) {
  return (
    <>
      {lines.map((line, i) => (
        <span key={i} className="xl:block">
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
    <p className={`flex items-center gap-14 xl:gap-22 ${className}`}>
      <span className="h-2 w-32 bg-accent xl:w-52" aria-hidden="true" />
      <span className={`font-inter fs-13 font-medium uppercase leading-none text-[#3d4350] xl:fs-16 ${tracking}`}>
        {text}
      </span>
      <span className="h-2 w-32 bg-accent xl:w-52" aria-hidden="true" />
    </p>
  );
}

/** Two-line section heading: black first line, maroon second line. */
export function SectionHeading({ lines, className = "" }: { lines: HeadingLine[]; className?: string }) {
  return (
    <h2 className={`font-bold text-ink ${className}`}>
      {lines.map((line, i) => (
        <span key={i} className={`block ${line.highlight ? "text-brand" : ""}`}>
          {line.text}
        </span>
      ))}
    </h2>
  );
}

/** Decorative grid of small dots. `gap` is the distance between dots in design pixels. */
export function DotGrid({
  cols,
  rows,
  gap = 22,
  gapY = gap,
  size = 6,
  color = "#9a1a22",
  className = "",
}: {
  cols: number;
  rows: number;
  gap?: number;
  gapY?: number;
  size?: number;
  color?: string;
  className?: string;
}) {
  const rem = (px: number) => `${px / 16}rem`;
  return (
    <span
      aria-hidden="true"
      className={`pointer-events-none block ${className}`}
      style={{
        width: rem((cols - 1) * gap + size),
        height: rem((rows - 1) * gapY + size),
        backgroundImage: `radial-gradient(circle, ${color} ${rem(size / 2 - 0.4)}, transparent ${rem(size / 2)})`,
        backgroundSize: `${rem(gap)} ${rem(gapY)}`,
        backgroundPosition: `${rem(-(gap - size) / 2)} ${rem(-(gapY - size) / 2)}`,
      }}
    />
  );
}
