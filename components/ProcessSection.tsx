import Image from "next/image";
import Icon from "./icons";
import { DotGrid, Lines, SectionHeading, SectionLabel } from "./ui";
import { site } from "@/data";

const { label, headingLines, descriptionLines, steps } = site.process;

export default function ProcessSection() {
  return (
    <section className="relative overflow-hidden px-20 py-56 sm:px-32 sm:py-72 xl:h-830 xl:p-0">
      {/* Decorations */}
      <DotGrid cols={5} rows={4} gap={22.5} gapY={20} className="absolute left-63 top-137 hidden xl:block" />
      <DotGrid cols={4} rows={4} gap={24} gapY={20.5} className="absolute left-1599 top-725 hidden xl:block" />
      <span className="absolute -right-110 -top-150 size-300 rounded-full border-[3.25rem] border-[#fbf1f0] xl:-top-158 xl:left-1447 xl:right-auto xl:size-392 xl:border-[4.75rem]" aria-hidden="true" />
      <span className="absolute -bottom-150 -left-130 hidden size-300 rounded-full xl:block border-[3.25rem] border-[#fbf1f0] xl:bottom-auto xl:-left-125 xl:top-660 xl:size-320 xl:border-[4rem]" aria-hidden="true" />

      <div className="relative flex flex-col items-center text-center xl:pt-29">
        <SectionLabel text={label} tracking="tracking-[0.25em]" />
        <SectionHeading lines={headingLines} className="mt-18 fs-28 leading-[1.08] sm:fs-52 xl:mt-20 xl:fs-68 xl:leading-62 xl:tracking-[0.01em]" />
        <p className="mt-18 max-w-640 font-text fs-16 font-medium leading-[1.7] text-body sm:fs-18 xl:mt-11 xl:max-w-none xl:fs-19 xl:leading-29 xl:tracking-[0.015em]">
          <Lines lines={descriptionLines} />
        </p>
      </div>

      <ol className="relative mt-48 grid gap-x-24 gap-y-52 sm:grid-cols-2 xl:absolute xl:left-63 xl:top-275 xl:mt-0 xl:w-1571 xl:grid-cols-4 xl:gap-0">
        {steps.map((step) => (
          <li key={step.number} className="flex flex-col items-center text-center">
            <div className="relative size-250 xl:mt-18">
              <span className="absolute -left-50 -top-17 size-270 rounded-full bg-[#fbf1f0]" aria-hidden="true" />
              <Image src={step.image.src} alt={step.image.alt} fill sizes="250px" className="rounded-full object-cover" />
              <span className="absolute -left-48 -top-14 fs-57 font-extrabold leading-none tracking-[-0.03em] text-[#6e0a12]">{step.number}</span>
              <span className="absolute bottom-4 -right-19 flex size-94 items-center justify-center rounded-full border-[0.3125rem] border-white bg-[#7b0d10] text-white">
                <Icon name={step.icon} className="size-42" />
              </span>
            </div>
            <h3 className="relative mt-28 fs-23 font-bold leading-none tracking-[-0.005em] text-ink xl:mt-7 xl:fs-26 xl:leading-30">{step.title}</h3>
            <span className="mt-16 block h-3 w-40 bg-accent xl:mt-13" aria-hidden="true" />
            <p className="mt-14 max-w-320 font-text fs-16 font-medium leading-[1.55] text-body xl:mt-9 xl:max-w-none xl:fs-18 xl:leading-25 xl:tracking-[0.02em]">
              <Lines lines={step.descriptionLines} />
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}
