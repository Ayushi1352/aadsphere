"use client";

import { useState } from "react";
import Icon from "@/components/icons";
import { site } from "@/data";

const { faqs } = site.faq;

/** Accordion of questions: one answer is open at a time. */
export default function FaqList() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <ul data-reveal-group="up" className="mx-auto mt-[calc(36*var(--unit))] max-w-[calc(1240*var(--unit))] space-y-[calc(14*var(--unit))] lg:mt-[calc(56*var(--unit))] lg:space-y-[calc(18*var(--unit))]">
      {faqs.map((faq, i) => {
        const isOpen = open === i;
        return (
          <li key={faq.question} className={`rounded-[calc(14*var(--unit))] border transition-colors duration-200 ${isOpen ? "border-accent-tint-21 bg-accent-tint-5" : "border-[#ececef] bg-[#f9f9fb]"}`}>
            <h3>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                aria-controls={`faq-${i}`}
                className="flex w-full cursor-pointer items-center justify-between gap-[calc(16*var(--unit))] px-[calc(20*var(--unit))] py-[calc(18*var(--unit))] text-left text-[calc(17*var(--unit))] font-bold leading-[1.35] text-ink sm:px-[calc(28*var(--unit))] sm:text-[calc(20*var(--unit))] lg:px-[calc(36*var(--unit))] lg:py-[calc(26*var(--unit))] lg:text-[calc(23*var(--unit))]"
              >
                {faq.question}
                <span
                  className={`flex size-[calc(38*var(--unit))] shrink-0 items-center justify-center rounded-full transition-colors duration-200 lg:size-[calc(46*var(--unit))] ${
                    isOpen ? "bg-primary text-white" : "bg-accent-tint-9 text-primary"
                  }`}
                >
                  {isOpen ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-[calc(18*var(--unit))] lg:size-[calc(20*var(--unit))]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                  ) : (
                    <Icon name="plus" className="size-[calc(18*var(--unit))] lg:size-[calc(20*var(--unit))]" />
                  )}
                </span>
              </button>
            </h3>
            {isOpen && (
              <p id={`faq-${i}`} className="translate-y-0 transition-[opacity,translate] duration-450 ease-out starting:translate-y-[calc(8*var(--unit))] starting:opacity-0 motion-reduce:transition-none px-[calc(20*var(--unit))] pb-[calc(22*var(--unit))] font-text text-[calc(16*var(--unit))] leading-[1.7] text-body sm:px-[calc(28*var(--unit))] sm:text-[calc(18*var(--unit))] lg:px-[calc(36*var(--unit))] lg:pb-[calc(30*var(--unit))] lg:pr-[calc(110*var(--unit))] lg:text-[calc(20*var(--unit))] lg:leading-[calc(34*var(--unit))]">
                {faq.answer}
              </p>
            )}
          </li>
        );
      })}
    </ul>
  );
}
