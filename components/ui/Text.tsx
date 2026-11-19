import type { HeadingPart } from '@/types/templates.types';

/** Fills the {placeholders} of a text from templates.json, e.g. fill("Go to slide {n}", { n: 2 }). */
export const fill = (template: string, values: Record<string, string | number>): string =>
  template.replace(/\{(\w+)\}/g, (match, key) => (key in values ? String(values[key]) : match));

/** The lines of a templates.json text; "\n" in the text starts a new line. */
export function lines(text: string) {
  return text.split('\n');
}

/**
 * Lines of a heading with coloured words: title, then highlight, then end.
 * A "\n" in any of them starts a new line, so the coloured words can sit anywhere.
 */
export function headingLines(title: string, highlight = '', end = ''): HeadingPart[][] {
  const result: HeadingPart[][] = [[]];
  [
    { text: title, highlight: false },
    { text: highlight, highlight: true },
    { text: end, highlight: false },
  ].forEach((part) => {
    lines(part.text).forEach((text, i) => {
      if (i > 0) result.push([]);
      if (text) result[result.length - 1].push({ text, highlight: part.highlight });
    });
  });
  return result;
}

/**
 * Text that keeps the exact line breaks of the design on desktop
 * and flows naturally (no forced breaks) on smaller screens.
 */
export const Lines = ({ text }: { text: string }) => {
  const items = lines(text);
  return (
    <>
      {items.map((line, i) => (
          <span key={i} className="lg:block">
          {line}
          {i < items.length - 1 ? ' ' : ''}
        </span>
      ))}
    </>
  );
};

/** Small uppercase label with a red line on both sides ("—— OUR SERVICES ——"). */
export const SectionLabel = ({ text, tracking = 'tracking-[0.27em]', className = '' }: { text: string; tracking?: string; className?: string }) => {
  return (
    <p className={`flex items-center gap-[calc(14*var(--unit))] lg:gap-[calc(22*var(--unit))] ${className}`}>
      <span className="h-[calc(2*var(--unit))] w-[calc(32*var(--unit))] bg-[var(--color-primary)] lg:w-[calc(52*var(--unit))]" aria-hidden="true" />
      <span className={`font-ui text-[calc(13*var(--unit))] font-medium uppercase leading-none text-[var(--color-section-label)] lg:text-[calc(16*var(--unit))] ${tracking}`}>
        {text}
      </span>
      <span className="h-[calc(2*var(--unit))] w-[calc(32*var(--unit))] bg-[var(--color-primary)] lg:w-[calc(52*var(--unit))]" aria-hidden="true" />
    </p>
  );
};

/** Section heading: the title lines in black, then the highlight on its own line in maroon. */
export const SectionHeading = ({ title, highlight, className = '' }: { title: string; highlight: string; className?: string }) => {
  const items: HeadingPart[] = [...lines(title).map((text) => ({ text, highlight: false })), { text: highlight, highlight: true }];
  return (
    <h2 className={`font-bold text-[var(--color-heading)] ${className}`}>
      {items.map((line, i) => (
        <span key={i} className={`block ${line.highlight ? 'text-[var(--color-primary)]' : ''}`}>
          {line.text}
        </span>
      ))}
    </h2>
  );
};

/**
 * Decorative grid of small dots. `gap` is the distance between dots in design pixels.
 * data-float / data-float-delay are passed on so the grid can drift (see ScrollReveal).
 */
export const DotGrid = ({
  cols,
  rows,
  gap = 22,
  gapY = gap,
  size = 6,
  color = 'var(--color-primary)',
  className = '',
  ...floatProps
}: {
  cols: number;
  rows: number;
  gap?: number;
  gapY?: number;
  size?: number;
  color?: string;
  className?: string;
  'data-float'?: string;
  'data-float-delay'?: string;
}) => {
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
};
