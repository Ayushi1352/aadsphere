import { fill } from '@/components/ui/Text';
import type { PaginationProps } from '@/types/templates.types';

// Full class names per colour, so Tailwind finds them in this file.
const tones = {
  primary: {
    arrow: 'hover:bg-[var(--color-primary)]',
    active: 'bg-[var(--color-primary)] text-[var(--color-white)]',
    idle: 'bg-[var(--color-white)] text-[var(--color-heading)] hover:bg-[var(--color-primary)] hover:text-[var(--color-white)]',
  },
  accent: {
    arrow: 'hover:bg-[var(--color-accent)]',
    active: 'bg-[var(--color-accent)] text-[var(--color-white)]',
    idle: 'bg-[var(--color-white)] text-[var(--color-heading)] hover:bg-[var(--color-accent)] hover:text-[var(--color-white)]',
  },
};

/** Previous / page numbers / next under a paged grid (Services, Blog and Portfolio pages). */
export const Pagination = ({ page, pageCount, onChange, labels, tone = 'primary' }: PaginationProps) => {
  const style = tones[tone];
  const arrowClass = `h-[calc(44*var(--unit))] rounded-full bg-[var(--color-white)] px-[calc(16*var(--unit))] text-[calc(14*var(--unit))] font-semibold text-[var(--color-heading)] transition-colors ${style.arrow} hover:text-[var(--color-white)] disabled:cursor-not-allowed disabled:opacity-40`;

  return (
    <nav aria-label={labels.label} className="mt-[calc(40*var(--unit))] flex flex-wrap items-center justify-center gap-[calc(8*var(--unit))]">
      <button type="button" onClick={() => onChange(Math.max(1, page - 1))} disabled={page === 1} className={arrowClass}>
        {labels.previousLabel}
      </button>
      {Array.from({ length: pageCount }, (_, i) => i + 1).map((number) => (
        <button
          key={number}
          type="button"
          onClick={() => onChange(number)}
          aria-label={fill(labels.pageLabel, { n: number })}
          aria-current={page === number ? 'page' : undefined}
          className={`size-[calc(44*var(--unit))] rounded-full text-[calc(14*var(--unit))] font-semibold transition-colors ${page === number ? style.active : style.idle}`}
        >
          {number}
        </button>
      ))}
      <button type="button" onClick={() => onChange(Math.min(pageCount, page + 1))} disabled={page === pageCount} className={arrowClass}>
        {labels.nextLabel}
      </button>
    </nav>
  );
};
