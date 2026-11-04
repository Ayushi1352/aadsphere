import { CtaStrip } from "@/components/sections/CtaStrip";
import { FaqList } from "@/components/sections/FaqList";
import { Lines, SectionHeading, SectionLabel } from "@/components/ui/Text";
import type { FaqData } from "@/types/templates.types";

/** FAQ page: heading, the accordion and a call to action. */
export const Faq = ({ data }: { data?: FaqData }) => {
  if (!data) return null;
  const { label, headingLines, descriptionLines, cta } = data;
  return (
    <section className="px-[calc(20*var(--unit))] py-[calc(32*var(--unit))] sm:px-[calc(32*var(--unit))] sm:py-[calc(40*var(--unit))] lg:px-[calc(76*var(--unit))] lg:py-[calc(48*var(--unit))]">
      <div data-reveal-group="up" className="flex flex-col items-center text-center">
        <SectionLabel text={label} />
        <SectionHeading lines={headingLines} className="mt-[calc(18*var(--unit))] text-[calc(28*var(--unit))] leading-[1.08] sm:text-[calc(52*var(--unit))] lg:mt-[calc(20*var(--unit))] lg:text-[calc(65*var(--unit))] lg:leading-[calc(64*var(--unit))]" />
        <p className="mt-[calc(18*var(--unit))] max-w-[calc(680*var(--unit))] font-text text-[calc(16*var(--unit))] font-medium leading-[1.7] text-[var(--color-text)] sm:text-[calc(18*var(--unit))] lg:mt-[calc(14*var(--unit))] lg:max-w-none lg:text-[calc(19*var(--unit))] lg:leading-[calc(29*var(--unit))]">
          <Lines lines={descriptionLines} />
        </p>
      </div>

      <FaqList data={data} />

      <div className="mx-auto mt-[calc(64*var(--unit))] max-w-[calc(1240*var(--unit))] sm:mt-[calc(80*var(--unit))] lg:mt-[calc(96*var(--unit))]">
        <CtaStrip cta={cta} />
      </div>
    </section>
  );
};
