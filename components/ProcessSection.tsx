import Image from "next/image";
import Icon from "./icons";
import { DotGrid, Lines, SectionHeading, SectionLabel } from "./ui";
import { site } from "@/data";

const { label, headingLines, descriptionLines, steps } = site.process;

export default function ProcessSection() {
  return (
    <section className="relative overflow-hidden px-[calc(20*var(--unit))] py-[calc(32*var(--unit))] sm:px-[calc(32*var(--unit))] sm:py-[calc(40*var(--unit))] lg:h-[calc(747*var(--unit))] lg:p-0">
      {/* Decorations */}
      <DotGrid cols={5} rows={4} gap={22.5} gapY={20} data-float="6000" className="absolute left-[calc(63*var(--unit))] top-[calc(137*var(--unit))] hidden lg:block" />
      <DotGrid cols={4} rows={4} gap={24} gapY={20.5} data-float="6000" data-float-delay="-3000" className="absolute left-[calc(1599*var(--unit))] top-[calc(642*var(--unit))] hidden lg:block" />
      <span data-float="10000" className="absolute -right-[calc(110*var(--unit))] -top-[calc(150*var(--unit))] size-[calc(300*var(--unit))] rounded-full border-[calc(52*var(--unit))] border-[#fbf1f0] lg:-top-[calc(158*var(--unit))] lg:left-[calc(1447*var(--unit))] lg:right-auto lg:size-[calc(392*var(--unit))] lg:border-[calc(76*var(--unit))]" aria-hidden="true" />
      <span data-float="10000" data-float-delay="-5000" className="absolute -bottom-[calc(150*var(--unit))] -left-[calc(130*var(--unit))] hidden size-[calc(300*var(--unit))] rounded-full lg:block border-[calc(52*var(--unit))] border-[#fbf1f0] lg:bottom-auto lg:-left-[calc(125*var(--unit))] lg:top-[calc(577*var(--unit))] lg:size-[calc(320*var(--unit))] lg:border-[calc(64*var(--unit))]" aria-hidden="true" />

      <div data-reveal-group="up" className="relative flex flex-col items-center text-center lg:pt-[calc(48*var(--unit))]">
        <SectionLabel text={label} tracking="tracking-[0.25em]" />
        <SectionHeading lines={headingLines} className="mt-[calc(18*var(--unit))] text-[calc(28*var(--unit))] leading-[1.08] sm:text-[calc(52*var(--unit))] lg:mt-[calc(20*var(--unit))] lg:text-[calc(68*var(--unit))] lg:leading-[calc(62*var(--unit))] lg:tracking-[0.01em]" />
        <p className="mt-[calc(18*var(--unit))] max-w-[calc(640*var(--unit))] font-(family-name:--font-red-hat-text) text-[calc(16*var(--unit))] font-medium leading-[1.7] text-[#5a5a5a] sm:text-[calc(18*var(--unit))] lg:mt-[calc(11*var(--unit))] lg:max-w-none lg:text-[calc(19*var(--unit))] lg:leading-[calc(29*var(--unit))] lg:tracking-[0.015em]">
          <Lines lines={descriptionLines} />
        </p>
      </div>

      <ol data-reveal-group="up" className="relative mt-[calc(48*var(--unit))] grid gap-x-[calc(24*var(--unit))] gap-y-[calc(52*var(--unit))] sm:grid-cols-2 lg:absolute lg:left-[calc(63*var(--unit))] lg:top-[calc(294*var(--unit))] lg:mt-0 lg:w-[calc(1571*var(--unit))] lg:grid-cols-4 lg:gap-0">
        {steps.map((step) => (
          <li key={step.number} className="group flex flex-col items-center text-center">
            <div className="relative size-[calc(200*var(--unit))] transition-transform duration-500 group-hover:-translate-y-[calc(8*var(--unit))] sm:size-[calc(250*var(--unit))] lg:mt-[calc(18*var(--unit))]">
              <span className="absolute -left-[calc(30*var(--unit))] -top-[calc(15*var(--unit))] size-[calc(230*var(--unit))] rounded-full bg-[#fbf1f0] sm:-left-[calc(50*var(--unit))] sm:-top-[calc(17*var(--unit))] sm:size-[calc(270*var(--unit))]" aria-hidden="true" />
              <div className="relative size-[calc(200*var(--unit))] overflow-hidden rounded-full sm:size-[calc(250*var(--unit))]">
                <Image src={step.image.src} alt={step.image.alt} fill sizes="(min-width: 40rem) 250px, 200px" className="object-cover" />
              </div>
              <span className="absolute -left-[calc(28*var(--unit))] -top-[calc(12*var(--unit))] z-10 text-[calc(48*var(--unit))] font-extrabold leading-none tracking-[-0.03em] text-[#6e0c12] sm:-left-[calc(48*var(--unit))] sm:-top-[calc(14*var(--unit))] sm:text-[calc(57*var(--unit))]">{step.number}</span>
              <span className="absolute -bottom-[calc(4*var(--unit))] -right-[calc(10*var(--unit))] z-10 flex size-[calc(76*var(--unit))] items-center justify-center rounded-full border-[calc(5*var(--unit))] border-white bg-[#6e0c12] text-white transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110 sm:bottom-[calc(4*var(--unit))] sm:-right-[calc(19*var(--unit))] sm:size-[calc(94*var(--unit))]">
                <Icon name={step.icon} className="size-[calc(34*var(--unit))] sm:size-[calc(42*var(--unit))]" />
              </span>
            </div>
            <h3 className="relative mt-[calc(24*var(--unit))] text-[calc(23*var(--unit))] font-bold leading-none tracking-[-0.005em] text-[#141414] sm:mt-[calc(28*var(--unit))] lg:mt-[calc(7*var(--unit))] lg:text-[calc(26*var(--unit))] lg:leading-[calc(30*var(--unit))]">{step.title}</h3>
            <span className="mt-[calc(16*var(--unit))] block h-[calc(3*var(--unit))] w-[calc(40*var(--unit))] bg-[#6e0c12] transition-[width] duration-500 group-hover:w-[calc(72*var(--unit))] lg:mt-[calc(13*var(--unit))]" aria-hidden="true" />
            <p className="mt-[calc(14*var(--unit))] max-w-[calc(320*var(--unit))] font-(family-name:--font-red-hat-text) text-[calc(16*var(--unit))] font-medium leading-[1.55] text-[#5a5a5a] lg:mt-[calc(9*var(--unit))] lg:max-w-none lg:text-[calc(18*var(--unit))] lg:leading-[calc(25*var(--unit))] lg:tracking-[0.02em]">
              <Lines lines={step.descriptionLines} />
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}
