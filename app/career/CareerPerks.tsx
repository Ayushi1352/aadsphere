import Icon from "@/components/icons";
import { Lines, SectionHeading, SectionLabel } from "@/components/ui";
import { site } from "@/data";

const { label, headingLines, descriptionLines, perks } = site.career;

/** Intro heading plus the four reasons to work at AdSphere. */
export default function CareerPerks() {
  return (
    <section className="px-[calc(20*var(--unit))] py-[calc(32*var(--unit))] sm:px-[calc(32*var(--unit))] sm:py-[calc(40*var(--unit))] lg:py-[calc(48*var(--unit))] lg:pl-[calc(63*var(--unit))] lg:pr-[calc(52*var(--unit))]">
      <div data-reveal-group="up" className="flex flex-col items-center text-center">
        <SectionLabel text={label} />
        <SectionHeading lines={headingLines} className="mt-[calc(18*var(--unit))] text-[calc(28*var(--unit))] leading-[1.08] sm:text-[calc(52*var(--unit))] lg:mt-[calc(20*var(--unit))] lg:text-[calc(65*var(--unit))] lg:leading-[calc(64*var(--unit))]" />
        <p className="mt-[calc(18*var(--unit))] max-w-[calc(680*var(--unit))] font-(family-name:--font-red-hat-text) text-[calc(16*var(--unit))] font-medium leading-[1.7] text-[#5a5a5a] sm:text-[calc(18*var(--unit))] lg:mt-[calc(14*var(--unit))] lg:max-w-none lg:text-[calc(19*var(--unit))] lg:leading-[calc(29*var(--unit))]">
          <Lines lines={descriptionLines} />
        </p>
      </div>

      <ul data-reveal-group="up" className="mt-[calc(36*var(--unit))] grid gap-[calc(20*var(--unit))] sm:grid-cols-2 lg:mt-[calc(56*var(--unit))] lg:grid-cols-4 lg:gap-[calc(24*var(--unit))]">
        {perks.map((perk) => (
          <li key={perk.title} className="group relative overflow-hidden transition-[translate,box-shadow] duration-300 hover:-translate-y-[calc(6*var(--unit))] hover:shadow-[0_calc(14.4*var(--unit))_calc(32*var(--unit))_rgba(110,12,18,0.14)] rounded-[calc(14*var(--unit))] border border-[#f3e9ea] bg-white p-[calc(26*var(--unit))] shadow-[0_calc(4*var(--unit))_calc(20*var(--unit))_rgba(110,12,18,0.06)] lg:p-[calc(32*var(--unit))]">
            <span
              aria-hidden="true"
              className="absolute bottom-0 right-0 h-[calc(80*var(--unit))] w-[calc(110*var(--unit))] bg-linear-to-tl from-[#fadfe0] to-[#fdf1f1] [clip-path:polygon(100%_0,100%_100%,0_100%)]"
            />
            <span className="relative flex size-[calc(72*var(--unit))] items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6 rounded-[calc(14*var(--unit))] bg-[#fcefef] text-[#6e0c12] lg:size-[calc(88*var(--unit))]">
              <Icon name={perk.icon} className="size-[calc(40*var(--unit))] lg:size-[calc(50*var(--unit))]" />
            </span>
            <h3 className="relative mt-[calc(20*var(--unit))] text-[calc(21*var(--unit))] font-extrabold leading-[1.2] text-[#141414] lg:mt-[calc(26*var(--unit))] lg:text-[calc(25*var(--unit))]">{perk.title}</h3>
            <p className="relative mt-[calc(8*var(--unit))] font-(family-name:--font-red-hat-text) text-[calc(16*var(--unit))] leading-[1.55] text-[#555a62] lg:mt-[calc(10*var(--unit))] lg:text-[calc(18*var(--unit))] lg:leading-[calc(28*var(--unit))]">
              <Lines lines={perk.lines} />
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
