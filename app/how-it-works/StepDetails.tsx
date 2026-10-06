import Image from "next/image";
import CtaStrip from "@/components/CtaStrip";
import Icon from "@/components/icons";
import { Lines, SectionHeading, SectionLabel } from "@/components/ui";
import { site } from "@/data";

const { label, headingLines, descriptionLines, steps, cta } = site.howItWorks;

/** Each step of the process explained in detail, with a photo and a short checklist. */
export default function StepDetails() {
  return (
    <section className="bg-panel px-20 py-56 sm:px-32 sm:py-72 xl:px-98 xl:py-100">
      <div className="flex flex-col items-center text-center">
        <SectionLabel text={label} />
        <SectionHeading lines={headingLines} className="mt-18 fs-28 leading-[1.08] sm:fs-52 xl:mt-20 xl:fs-65 xl:leading-64" />
        <p className="mt-18 max-w-640 font-text fs-16 font-medium leading-[1.7] text-body sm:fs-18 xl:mt-14 xl:max-w-none xl:fs-19 xl:leading-29">
          <Lines lines={descriptionLines} />
        </p>
      </div>

      <ol className="mt-40 space-y-40 xl:mt-64 xl:space-y-72">
        {steps.map((step, i) => (
          <li key={step.number} className={`flex flex-col gap-28 lg:items-center lg:gap-56 xl:gap-90 ${i % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"}`}>
            <div className="relative lg:w-1/2">
              <div className="relative aspect-366/264 overflow-hidden r-14 xl:r-18">
                <Image src={step.image.src} alt={step.image.alt} fill sizes="(min-width: 64rem) 45vw, 100vw" className="object-cover" />
              </div>
              <span className="absolute left-0 top-0 flex size-64 items-center justify-center rounded-br-[0.875rem] rounded-tl-[0.875rem] bg-[#74090d] fs-24 font-bold leading-none text-white xl:size-84 xl:fs-32">
                {step.number}
              </span>
            </div>

            <div className="lg:w-1/2">
              <h3 className="fs-26 font-bold leading-[1.2] tracking-[-0.01em] text-ink sm:fs-34 xl:fs-44">{step.title}</h3>
              <span className="mt-16 block h-3 w-56 bg-accent xl:mt-20" aria-hidden="true" />
              <p className="mt-16 font-text fs-16 leading-[1.7] text-body sm:fs-18 xl:mt-22 xl:fs-20 xl:leading-34">{step.description}</p>
              <ul className="mt-20 space-y-12 xl:mt-26 xl:space-y-14">
                {step.points.map((point) => (
                  <li key={point} className="flex items-center gap-14 fs-16 font-semibold text-ink sm:fs-18 xl:fs-20">
                    <span className="flex size-28 shrink-0 items-center justify-center rounded-full bg-blush text-brand xl:size-32">
                      <Icon name="check" className="size-16 xl:size-18" />
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>

      <div className="mt-56 xl:mt-96">
        <CtaStrip cta={cta} />
      </div>
    </section>
  );
}
