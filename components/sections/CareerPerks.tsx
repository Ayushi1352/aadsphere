import { Icon } from "@/components/ui/Icon";
import { Lines, SectionHeading, SectionLabel } from "@/components/ui/Text";
import type { CareerPerksProps } from "@/types/templates.types";

/** Intro heading plus the four reasons to work at AdSphere. */
export const CareerPerks = ({ data }: CareerPerksProps) => {
  if (!data) return null;
  const { label, headingLines, descriptionLines, perks } = data;
  return (
    <section className="px-[calc(20*var(--unit))] py-[calc(32*var(--unit))] sm:px-[calc(32*var(--unit))] sm:py-[calc(40*var(--unit))] lg:py-[calc(48*var(--unit))] lg:pl-[calc(63*var(--unit))] lg:pr-[calc(52*var(--unit))]">
      <div data-reveal-group="up" className="flex flex-col items-center text-center">
        <SectionLabel text={label} />
        <SectionHeading lines={headingLines} className="mt-[calc(18*var(--unit))] text-[calc(28*var(--unit))] leading-[1.08] sm:text-[calc(52*var(--unit))] lg:mt-[calc(20*var(--unit))] lg:text-[calc(65*var(--unit))] lg:leading-[calc(64*var(--unit))]" />
        <p className="mt-[calc(18*var(--unit))] max-w-[calc(680*var(--unit))] font-text text-[calc(16*var(--unit))] font-medium leading-[1.7] text-[var(--color-text)] sm:text-[calc(18*var(--unit))] lg:mt-[calc(14*var(--unit))] lg:max-w-none lg:text-[calc(19*var(--unit))] lg:leading-[calc(29*var(--unit))]">
          <Lines lines={descriptionLines} />
        </p>
      </div>

      <ul data-reveal-group="up" className="mt-[calc(36*var(--unit))] grid gap-[calc(20*var(--unit))] sm:grid-cols-2 lg:mt-[calc(56*var(--unit))] lg:grid-cols-4 lg:gap-[calc(24*var(--unit))]">
        {perks.map((perk) => (
          <li key={perk.title} className="group relative overflow-hidden transition-[transform,box-shadow] duration-300 hover:-translate-y-[calc(6*var(--unit))] hover:[box-shadow:0_calc(14.4*var(--unit))_calc(32*var(--unit))_var(--color-primary-14)] rounded-[calc(14*var(--unit))] border border-[var(--color-primary-tint-9)] bg-[var(--color-white)] p-[calc(26*var(--unit))] [box-shadow:0_calc(4*var(--unit))_calc(20*var(--unit))_var(--color-primary-6)] lg:p-[calc(32*var(--unit))]">
            <span
              aria-hidden="true"
              className="absolute bottom-0 right-0 h-[calc(80*var(--unit))] w-[calc(110*var(--unit))] bg-gradient-to-tl from-[var(--color-accent-tint-13)] to-[var(--color-accent-tint-6)] [clip-path:polygon(100%_0,100%_100%,0_100%)]"
            />
            <span className="relative flex size-[calc(72*var(--unit))] items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6 rounded-[calc(14*var(--unit))] bg-[var(--color-accent-tint-7)] text-[var(--color-primary)] lg:size-[calc(88*var(--unit))]">
              <Icon name={perk.icon} className="size-[calc(40*var(--unit))] lg:size-[calc(50*var(--unit))]" />
            </span>
            <h3 className="relative mt-[calc(20*var(--unit))] text-[calc(21*var(--unit))] font-extrabold leading-[1.2] text-[var(--color-heading)] lg:mt-[calc(26*var(--unit))] lg:text-[calc(25*var(--unit))]">{perk.title}</h3>
            <p className="relative mt-[calc(8*var(--unit))] font-text text-[calc(16*var(--unit))] leading-[1.55] text-[var(--color-card-text)] lg:mt-[calc(10*var(--unit))] lg:text-[calc(18*var(--unit))] lg:leading-[calc(28*var(--unit))]">
              <Lines lines={perk.lines} />
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
};
