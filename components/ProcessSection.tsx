import Image from "next/image";
import Icon from "./icons";
import { DotGrid, Lines, SectionHeading, SectionLabel } from "./ui";
import { site } from "@/data";

const { label, headingLines, descriptionLines, steps } = site.process;

export default function ProcessSection() {
  return (
    <section className="relative overflow-hidden px-20 py-32 sm:px-32 sm:py-40 xl:h-747 xl:p-0">
      {/* Decorations */}
      <DotGrid cols={5} rows={4} gap={22.5} gapY={20} className="absolute left-63 top-137 hidden animate-float xl:block" />
      <DotGrid cols={4} rows={4} gap={24} gapY={20.5} className="absolute left-1599 top-642 hidden animate-float [animation-delay:-3s] xl:block" />
      <span className="absolute animate-float-slow -right-110 -top-150 size-300 rounded-full border-[3.25rem] border-[#fbf1f0] xl:-top-158 xl:left-1447 xl:right-auto xl:size-392 xl:border-[4.75rem]" aria-hidden="true" />
      <span className="absolute animate-float-slow [animation-delay:-5s] -bottom-150 -left-130 hidden size-300 rounded-full xl:block border-[3.25rem] border-[#fbf1f0] xl:bottom-auto xl:-left-125 xl:top-577 xl:size-320 xl:border-[4rem]" aria-hidden="true" />

      <div data-reveal-group="up" className="relative flex flex-col items-center text-center xl:pt-48">
        <SectionLabel text={label} tracking="tracking-[0.25em]" />
        <SectionHeading lines={headingLines} className="mt-18 fs-28 leading-[1.08] sm:fs-52 xl:mt-20 xl:fs-68 xl:leading-62 xl:tracking-[0.01em]" />
        <p className="mt-18 max-w-640 font-text fs-16 font-medium leading-[1.7] text-body sm:fs-18 xl:mt-11 xl:max-w-none xl:fs-19 xl:leading-29 xl:tracking-[0.015em]">
          <Lines lines={descriptionLines} />
        </p>
      </div>

      <ol data-reveal-group="up" className="relative mt-48 grid gap-x-24 gap-y-52 sm:grid-cols-2 xl:absolute xl:left-63 xl:top-294 xl:mt-0 xl:w-1571 xl:grid-cols-4 xl:gap-0">
        {steps.map((step) => (
          <li key={step.number} className="group flex flex-col items-center text-center">
            <div className="relative size-200 transition-transform duration-500 group-hover:-translate-y-8 sm:size-250 xl:mt-18">
              <span className="absolute -left-30 -top-15 size-230 rounded-full bg-[#fbf1f0] sm:-left-50 sm:-top-17 sm:size-270" aria-hidden="true" />
              <div className="relative size-200 overflow-hidden rounded-full sm:size-250">
                <Image src={step.image.src} alt={step.image.alt} fill sizes="(min-width: 40rem) 250px, 200px" className="object-cover" />
              </div>
              <span className="absolute -left-28 -top-12 z-10 fs-48 font-extrabold leading-none tracking-[-0.03em] text-[#6e0a12] sm:-left-48 sm:-top-14 sm:fs-57">{step.number}</span>
              <span className="absolute -bottom-4 -right-10 z-10 flex size-76 items-center justify-center rounded-full border-[0.3125rem] border-white bg-[#7b0d10] text-white transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110 sm:bottom-4 sm:-right-19 sm:size-94">
                <Icon name={step.icon} className="size-34 sm:size-42" />
              </span>
            </div>
            <h3 className="relative mt-24 fs-23 font-bold leading-none tracking-[-0.005em] text-ink sm:mt-28 xl:mt-7 xl:fs-26 xl:leading-30">{step.title}</h3>
            <span className="mt-16 block h-3 w-40 bg-accent transition-[width] duration-500 group-hover:w-72 xl:mt-13" aria-hidden="true" />
            <p className="mt-14 max-w-320 font-text fs-16 font-medium leading-[1.55] text-body xl:mt-9 xl:max-w-none xl:fs-18 xl:leading-25 xl:tracking-[0.02em]">
              <Lines lines={step.descriptionLines} />
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}
