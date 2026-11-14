'use client';

import { useRef, useState } from 'react';
import { ServiceCard } from '@/components/ui/ServiceCard';
import { Lines, SectionHeading, SectionLabel } from '@/components/ui/Text';
import { fill } from '@/components/ui/fill';
import type { ServicesGridProps } from '@/types/templates.types';


/** Heading plus a paginated grid of service cards. */
export const ServicesGrid = ({ data }: ServicesGridProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const sectionRef = useRef<HTMLElement>(null);
  if (!data) return null;
  const { label, headingLines, descriptionLines, services, pagination, pageSize } = data;
  const pageCount = Math.ceil(services.length / pageSize);
  const visibleServices = services.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  const goToPage = (page: number) => {
    setCurrentPage(page);
    sectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section ref={sectionRef} className="scroll-mt-[calc(80*var(--unit))] px-[calc(20*var(--unit))] py-[calc(32*var(--unit))] sm:px-[calc(32*var(--unit))] sm:py-[calc(40*var(--unit))] lg:scroll-mt-[calc(120*var(--unit))] lg:px-0 lg:py-[calc(48*var(--unit))]">
      <div data-reveal-group="up" className="flex flex-col items-center text-center">
        <SectionLabel text={label} />
        <SectionHeading lines={headingLines} className="mt-[calc(18*var(--unit))] text-[calc(28*var(--unit))] leading-[1.08] sm:text-[calc(52*var(--unit))] lg:mt-[calc(20*var(--unit))] lg:text-[calc(68*var(--unit))] lg:leading-[calc(64*var(--unit))]" />
        <p className="mt-[calc(18*var(--unit))] max-w-[calc(640*var(--unit))] font-ui text-[calc(16*var(--unit))] leading-[1.7] text-[var(--color-section-text)] sm:text-[calc(18*var(--unit))] lg:mt-[calc(16*var(--unit))] lg:max-w-none lg:text-[calc(21*var(--unit))] lg:leading-[calc(31*var(--unit))] lg:tracking-[-0.005em]">
          <Lines lines={descriptionLines} />
        </p>
      </div>

      <ul data-reveal-group="up" className="mt-[calc(36*var(--unit))] grid gap-[calc(24*var(--unit))] sm:grid-cols-2 lg:ml-[calc(84*var(--unit))] lg:mt-[calc(42*var(--unit))] lg:w-[calc(1533*var(--unit))] lg:grid-cols-4 lg:gap-x-[calc(24*var(--unit))] lg:gap-y-[calc(53*var(--unit))]">
        {visibleServices.map((service) => (
          <li key={service.id}>
            <ServiceCard service={service} icon={data.cardIcon} className="overflow-hidden rounded-[calc(6*var(--unit))]" />
          </li>
        ))}
      </ul>

      {services.length > 0 && (
        <nav aria-label={pagination.label} className="mt-[calc(40*var(--unit))] flex flex-wrap items-center justify-center gap-[calc(8*var(--unit))]">
          <button
            type="button"
            onClick={() => goToPage(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            className="h-[calc(44*var(--unit))] rounded-full bg-[var(--color-white)] px-[calc(16*var(--unit))] text-[calc(14*var(--unit))] font-semibold text-[var(--color-heading)] transition-colors hover:bg-[var(--color-primary)] hover:text-[var(--color-white)] disabled:cursor-not-allowed disabled:opacity-40"
          >
            {pagination.previousLabel}
          </button>
          {Array.from({ length: pageCount }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              type="button"
              onClick={() => goToPage(page)}
              aria-label={fill(pagination.goToPageN, { n: page })}
              aria-current={currentPage === page ? 'page' : undefined}
              className={`size-[calc(44*var(--unit))] rounded-full text-[calc(14*var(--unit))] font-semibold transition-colors ${currentPage === page ? 'bg-[var(--color-primary)] text-[var(--color-white)]' : 'bg-[var(--color-white)] text-[var(--color-heading)] hover:bg-[var(--color-primary)] hover:text-[var(--color-white)]'}`}
            >
              {page}
            </button>
          ))}
          <button
            type="button"
            onClick={() => goToPage(Math.min(pageCount, currentPage + 1))}
            disabled={currentPage === pageCount}
            className="h-[calc(44*var(--unit))] rounded-full bg-[var(--color-white)] px-[calc(16*var(--unit))] text-[calc(14*var(--unit))] font-semibold text-[var(--color-heading)] transition-colors hover:bg-[var(--color-primary)] hover:text-[var(--color-white)] disabled:cursor-not-allowed disabled:opacity-40"
          >
            {pagination.nextLabel}
          </button>
        </nav>
      )}
    </section>
  );
};
