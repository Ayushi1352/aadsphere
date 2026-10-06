"use client";

import { useState } from "react";
import Icon from "@/components/icons";
import { site } from "@/data";

const { faqs } = site.faq;

/** Accordion of questions: one answer is open at a time. */
export default function FaqList() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <ul className="mx-auto mt-36 max-w-1240 space-y-14 xl:mt-56 xl:space-y-18">
      {faqs.map((faq, i) => {
        const isOpen = open === i;
        return (
          <li key={faq.question} className={`r-14 border transition-colors duration-200 ${isOpen ? "border-[#f0cfd1] bg-[#fdf3f4]" : "border-[#ececef] bg-[#f9f9fb]"}`}>
            <h3>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                aria-controls={`faq-${i}`}
                className="flex w-full cursor-pointer items-center justify-between gap-16 px-20 py-18 text-left fs-17 font-bold leading-[1.35] text-ink sm:px-28 sm:fs-20 xl:px-36 xl:py-26 xl:fs-23"
              >
                {faq.question}
                <span
                  className={`flex size-38 shrink-0 items-center justify-center rounded-full transition-colors duration-200 xl:size-46 ${
                    isOpen ? "bg-[#790c0f] text-white" : "bg-blush text-brand"
                  }`}
                >
                  {isOpen ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-18 xl:size-20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                  ) : (
                    <Icon name="plus" className="size-18 xl:size-20" />
                  )}
                </span>
              </button>
            </h3>
            {isOpen && (
              <p id={`faq-${i}`} className="animate-fade-in px-20 pb-22 font-text fs-16 leading-[1.7] text-body sm:px-28 sm:fs-18 xl:px-36 xl:pb-30 xl:pr-110 xl:fs-20 xl:leading-34">
                {faq.answer}
              </p>
            )}
          </li>
        );
      })}
    </ul>
  );
}
