'use client';

import { useState } from 'react';
import { CtaStrip } from '@/components/ui/CtaStrip';
import { Icon } from '@/components/ui/Icon';
import { Lines, SectionHeading, SectionLabel } from '@/components/ui/Text';
import type { FaqData, FaqProps } from '@/types/templates.types';

/** Accordion of questions: one answer is open at a time. */
const FaqList = ({ data }: { data?: FaqData }) => {
  const [open, setOpen] = useState<number | null>(0);
  if (!data) return null;
  const { faqs } = data;

  return (
    <ul data-reveal-group="up" className="mx-auto mt-[calc(36*var(--unit))] max-w-[calc(1240*var(--unit))] space-y-[calc(14*var(--unit))] lg:mt-[calc(56*var(--unit))] lg:space-y-[calc(18*var(--unit))]">
      {faqs.map((faq, i) => {
        const isOpen = open === i;
        return (
          <li key={faq.id} className={`rounded-[calc(14*var(--unit))] border transition-colors duration-200 ${isOpen ? 'border-[var(--color-accent-tint-21)] bg-[var(--color-accent-tint-5)]' : 'border-[var(--color-border)] bg-[var(--color-surface)]'}`}>
            <h3>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                aria-controls={`faq-${i}`}
                className="flex w-full cursor-pointer items-center justify-between gap-[calc(16*var(--unit))] px-[calc(20*var(--unit))] py-[calc(18*var(--unit))] text-left text-[calc(17*var(--unit))] font-bold leading-[1.35] text-[var(--color-heading)] sm:px-[calc(28*var(--unit))] sm:text-[calc(20*var(--unit))] lg:px-[calc(36*var(--unit))] lg:py-[calc(26*var(--unit))] lg:text-[calc(23*var(--unit))]"
              >
                {faq.question}
                <span
                  className={`flex size-[calc(38*var(--unit))] shrink-0 items-center justify-center rounded-full transition-colors duration-200 lg:size-[calc(46*var(--unit))] ${
                    isOpen ? 'bg-[var(--color-primary)] text-[var(--color-white)]' : 'bg-[var(--color-accent-tint-9)] text-[var(--color-primary)]'
                  }`}
                >
                  {isOpen ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-[calc(18*var(--unit))] lg:size-[calc(20*var(--unit))]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                  ) : (
                    <Icon name={data.openIcon} className="size-[calc(18*var(--unit))] lg:size-[calc(20*var(--unit))]" />
                  )}
                </span>
              </button>
            </h3>
            {isOpen && (
              <p id={`faq-${i}`} className="translate-y-0 transition-[opacity,transform] duration-450 ease-out starting:translate-y-[calc(8*var(--unit))] starting:opacity-0 motion-reduce:transition-none px-[calc(20*var(--unit))] pb-[calc(22*var(--unit))] font-text text-[calc(16*var(--unit))] leading-[1.7] text-[var(--color-text)] sm:px-[calc(28*var(--unit))] sm:text-[calc(18*var(--unit))] lg:px-[calc(36*var(--unit))] lg:pb-[calc(30*var(--unit))] lg:pr-[calc(110*var(--unit))] lg:text-[calc(20*var(--unit))] lg:leading-[calc(34*var(--unit))]">
                {faq.answer}
              </p>
            )}
          </li>
        );
      })}
    </ul>
  );
};

/** FAQ page: heading, the accordion and a call to action. */
export const Faq = ({ data }: FaqProps) => {
  if (!data) return null;
  const { label, title, titleHighlight, description, cta } = data;
  return (
    <section className="px-[calc(20*var(--unit))] py-[calc(32*var(--unit))] sm:px-[calc(32*var(--unit))] sm:py-[calc(40*var(--unit))] lg:px-[calc(76*var(--unit))] lg:py-[calc(48*var(--unit))]">
      <div data-reveal-group="up" className="flex flex-col items-center text-center">
        <SectionLabel text={label} />
        <SectionHeading title={title} highlight={titleHighlight} className="mt-[calc(18*var(--unit))] text-[calc(28*var(--unit))] leading-[1.08] sm:text-[calc(52*var(--unit))] lg:mt-[calc(20*var(--unit))] lg:text-[calc(65*var(--unit))] lg:leading-[calc(64*var(--unit))]" />
        <p className="mt-[calc(18*var(--unit))] max-w-[calc(680*var(--unit))] font-text text-[calc(16*var(--unit))] font-medium leading-[1.7] text-[var(--color-text)] sm:text-[calc(18*var(--unit))] lg:mt-[calc(14*var(--unit))] lg:max-w-none lg:text-[calc(19*var(--unit))] lg:leading-[calc(29*var(--unit))]">
          <Lines text={description} />
        </p>
      </div>

      <FaqList data={data} />

      <div className="mx-auto mt-[calc(64*var(--unit))] max-w-[calc(1240*var(--unit))] sm:mt-[calc(80*var(--unit))] lg:mt-[calc(96*var(--unit))]">
        <CtaStrip cta={cta} />
      </div>
    </section>
  );
};
