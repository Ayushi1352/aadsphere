import Image from "next/image";
import CtaStrip from "@/components/CtaStrip";
import Icon from "@/components/icons";
import { Lines, SectionHeading, SectionLabel } from "@/components/ui";
import { site } from "@/data";

const { label, headingLines, descriptionLines, steps, cta } = site.howItWorks;

/** Each step of the process explained in detail, with a photo and a short checklist. */
export default function StepDetails() {
  return (
    <section className="my-[calc(32*var(--unit))] bg-[#fbf6f3] px-[calc(20*var(--unit))] py-[calc(64*var(--unit))] sm:my-[calc(40*var(--unit))] sm:px-[calc(32*var(--unit))] sm:py-[calc(80*var(--unit))] lg:my-[calc(48*var(--unit))] lg:px-[calc(98*var(--unit))] lg:py-[calc(96*var(--unit))]">
      <div data-reveal-group="up" className="flex flex-col items-center text-center">
        <SectionLabel text={label} />
        <SectionHeading lines={headingLines} className="mt-[calc(18*var(--unit))] text-[calc(28*var(--unit))] leading-[1.08] sm:text-[calc(52*var(--unit))] lg:mt-[calc(20*var(--unit))] lg:text-[calc(65*var(--unit))] lg:leading-[calc(64*var(--unit))]" />
        <p className="mt-[calc(18*var(--unit))] max-w-[calc(640*var(--unit))] font-(family-name:--font-red-hat-text) text-[calc(16*var(--unit))] font-medium leading-[1.7] text-[#5a5a5a] sm:text-[calc(18*var(--unit))] lg:mt-[calc(14*var(--unit))] lg:max-w-none lg:text-[calc(19*var(--unit))] lg:leading-[calc(29*var(--unit))]">
          <Lines lines={descriptionLines} />
        </p>
      </div>

      <ol className="mt-[calc(40*var(--unit))] space-y-[calc(40*var(--unit))] lg:mt-[calc(64*var(--unit))] lg:space-y-[calc(72*var(--unit))]">
        {steps.map((step, i) => (
          <li key={step.number} className={`flex flex-col gap-[calc(28*var(--unit))] lg:items-center lg:gap-[calc(90*var(--unit))] ${i % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"}`}>
            <div data-reveal={i % 2 === 1 ? "right" : "left"} className="group relative lg:w-1/2">
              <div className="relative aspect-366/264 overflow-hidden rounded-[calc(14*var(--unit))] lg:rounded-[calc(18*var(--unit))]">
                <Image src={step.image.src} alt={step.image.alt} fill sizes="(min-width: 64rem) 45vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <span className="absolute left-0 top-0 flex size-[calc(64*var(--unit))] items-center justify-center rounded-br-[calc(14*var(--unit))] rounded-tl-[calc(14*var(--unit))] bg-[#6e0c12] text-[calc(24*var(--unit))] font-bold leading-none text-white lg:size-[calc(84*var(--unit))] lg:text-[calc(32*var(--unit))]">
                {step.number}
              </span>
            </div>

            <div data-reveal={i % 2 === 1 ? "left" : "right"} data-reveal-delay="120" className="lg:w-1/2">
              <h3 className="text-[calc(26*var(--unit))] font-bold leading-[1.2] tracking-[-0.01em] text-[#141414] sm:text-[calc(34*var(--unit))] lg:text-[calc(44*var(--unit))]">{step.title}</h3>
              <span className="mt-[calc(16*var(--unit))] block h-[calc(3*var(--unit))] w-[calc(56*var(--unit))] bg-[#6e0c12] lg:mt-[calc(20*var(--unit))]" aria-hidden="true" />
              <p className="mt-[calc(16*var(--unit))] font-(family-name:--font-red-hat-text) text-[calc(16*var(--unit))] leading-[1.7] text-[#5a5a5a] sm:text-[calc(18*var(--unit))] lg:mt-[calc(22*var(--unit))] lg:text-[calc(20*var(--unit))] lg:leading-[calc(34*var(--unit))]">{step.description}</p>
              <ul className="mt-[calc(20*var(--unit))] space-y-[calc(12*var(--unit))] lg:mt-[calc(26*var(--unit))] lg:space-y-[calc(14*var(--unit))]">
                {step.points.map((point) => (
                  <li key={point} className="flex items-center gap-[calc(14*var(--unit))] text-[calc(16*var(--unit))] font-semibold text-[#141414] sm:text-[calc(18*var(--unit))] lg:text-[calc(20*var(--unit))]">
                    <span className="flex size-[calc(28*var(--unit))] shrink-0 items-center justify-center rounded-full bg-[#fbe9e9] text-[#6e0c12] lg:size-[calc(32*var(--unit))]">
                      <Icon name="check" className="size-[calc(16*var(--unit))] lg:size-[calc(18*var(--unit))]" />
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>

      <div className="mt-[calc(64*var(--unit))] sm:mt-[calc(80*var(--unit))] lg:mt-[calc(96*var(--unit))]">
        <CtaStrip cta={cta} />
      </div>
    </section>
  );
}
