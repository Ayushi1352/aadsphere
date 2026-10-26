import Image from "next/image";
import Icon from "./icons";
import { DotGrid, Lines } from "./ui";
import CountUp from "./CountUp";
import { site } from "@/data";

const { label, headingLines, descriptionLines, image, stats } = site.impact;

export default function ImpactSection() {
  return (
    <section className="relative px-[calc(20*var(--unit))] py-[calc(32*var(--unit))] sm:px-[calc(32*var(--unit))] sm:py-[calc(40*var(--unit))] lg:h-[calc(800*var(--unit))] lg:p-0">
      <p data-reveal="left" className="flex items-center gap-[calc(20*var(--unit))] text-[calc(14*var(--unit))] font-medium uppercase leading-none tracking-[0.5em] text-[#222222] lg:absolute lg:left-[calc(98*var(--unit))] lg:top-[calc(48*var(--unit))] lg:gap-[calc(14*var(--unit))] lg:text-[calc(17*var(--unit))]">
        {label}
        <span className="h-[calc(3*var(--unit))] w-[calc(70*var(--unit))] bg-primary" aria-hidden="true" />
      </p>

      <h2 data-reveal="left" className="mt-[calc(20*var(--unit))] text-[calc(32*var(--unit))] font-medium leading-[1.15] tracking-[0.005em] text-ink sm:text-[calc(44*var(--unit))] lg:absolute lg:left-[calc(98*var(--unit))] lg:top-[calc(86*var(--unit))] lg:mt-0 lg:whitespace-nowrap lg:text-[calc(57*var(--unit))] lg:leading-[calc(59*var(--unit))]">
        {headingLines.map((line, i) => (
          <span key={i} className="lg:block">
            {line.map((part) => (
              <span key={part.text} className={part.highlight ? "font-extrabold text-primary" : ""}>
                {part.text}
              </span>
            ))}{" "}
          </span>
        ))}
      </h2>

      <div data-reveal="right" className="mt-[calc(22*var(--unit))] lg:absolute lg:left-[calc(977*var(--unit))] lg:top-[calc(126*var(--unit))] lg:mt-0">
        <p className="max-w-[calc(620*var(--unit))] font-alt text-[calc(16*var(--unit))] leading-[1.75] tracking-[0.015em] text-body sm:text-[calc(18*var(--unit))] lg:max-w-none lg:whitespace-nowrap lg:text-[calc(20*var(--unit))] lg:leading-[calc(31*var(--unit))]">
          <Lines lines={descriptionLines} />
        </p>
        <span className="mt-[calc(22*var(--unit))] block h-[calc(3*var(--unit))] w-[calc(78*var(--unit))] bg-primary lg:mt-[calc(27*var(--unit))]" aria-hidden="true" />
      </div>

      <div className="mt-[calc(44*var(--unit))] lg:items-center lg:gap-[calc(40*var(--unit))] lg:mt-0 lg:block">
        {/* Round photo with ring and dot */}
        <div className="lg:w-auto">
          <div data-reveal="zoom" className="relative mx-auto aspect-square w-[82%] max-w-[calc(420*var(--unit))] lg:absolute lg:left-[calc(248*var(--unit))] lg:top-[calc(325*var(--unit))] lg:mx-0 lg:size-[calc(427*var(--unit))] lg:max-w-none">
            <span data-float="10000" className="absolute -left-[16%] top-[23.7%] size-[30%] rounded-full bg-accent-tint-7" aria-hidden="true" />
            <DotGrid cols={5} rows={4} gap={23} className="absolute -left-[13%] top-[60%] lg:-left-[18.2%]" />
            <svg viewBox="0 0 520 520" className="absolute -inset-[5.1%] size-[110.2%] origin-[48.85%_48.85%] animate-spin [animation-duration:40s] motion-reduce:animate-none" aria-hidden="true">
              <circle
                cx="254"
                cy="254"
                r="251"
                fill="none"
                className="stroke-primary"
                strokeWidth="2.2"
                strokeLinecap="round"
                pathLength="360"
                strokeDasharray="140 100 90 30"
                transform="rotate(-105 254 254)"
              />
            </svg>
            <Image src={image.src} alt={image.alt} fill sizes="(min-width: 80rem) 28vw, 420px" className="rounded-full object-cover" />
            <span data-float="6000" className="absolute left-[81.8%] top-[-3.6%] size-[11.9%] rounded-full bg-primary" aria-hidden="true" />
          </div>
        </div>

        {/* Stats */}
        <ul data-reveal-group="up" className="mt-[calc(48*var(--unit))] grid gap-[calc(15*var(--unit))] sm:grid-cols-2 lg:mt-0 lg:grow lg:absolute lg:left-[calc(823*var(--unit))] lg:top-[calc(330*var(--unit))] lg:w-[calc(822*var(--unit))] lg:grid-cols-[395fr_413fr] lg:gap-x-[calc(14*var(--unit))] lg:gap-y-[calc(15*var(--unit))]">
          {stats.map((stat) => (
            <li
              key={stat.value}
              className="group relative flex items-center justify-between gap-[calc(16*var(--unit))] rounded-[calc(20*var(--unit))] transition-[translate,box-shadow] duration-300 hover:-translate-y-[calc(6*var(--unit))] hover:shadow-[0_calc(14.4*var(--unit))_calc(32*var(--unit))_color-mix(in_srgb,var(--color-primary)_12%,transparent)] bg-linear-to-br from-primary-tint-2 to-accent-tint-5 px-[calc(28*var(--unit))] py-[calc(30*var(--unit))] lg:block lg:h-[calc(200*var(--unit))] lg:p-0"
            >
              <div className="lg:absolute lg:left-[calc(42*var(--unit))] lg:top-[calc(33*var(--unit))]">
                <p className="font-alt text-[calc(48*var(--unit))] font-bold leading-none tracking-[-0.02em] text-primary lg:text-[calc(66*var(--unit))]"><CountUp value={stat.value} /></p>
                <p className="mt-[calc(16*var(--unit))] font-alt text-[calc(13*var(--unit))] uppercase leading-[1.55] tracking-[0.44em] text-[#3f3f3f] lg:mt-[calc(12*var(--unit))] lg:text-[calc(14*var(--unit))] lg:leading-[calc(21*var(--unit))]">
                  {stat.labelLines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </p>
                <span className="mt-[calc(16*var(--unit))] block h-[calc(3*var(--unit))] w-[calc(54*var(--unit))] bg-primary lg:mt-[calc(17*var(--unit))]" aria-hidden="true" />
              </div>
              <span className="flex size-[calc(84*var(--unit))] shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6 items-center justify-center rounded-full bg-accent-tint-10 text-primary shadow-[0_0_0_calc(4.8*var(--unit))_rgba(255,255,255,0.75),0_calc(6.4*var(--unit))_calc(16*var(--unit))_color-mix(in_srgb,var(--color-primary)_8%,transparent)] lg:absolute lg:right-[calc(49*var(--unit))] lg:top-[calc(51*var(--unit))] lg:size-[calc(98*var(--unit))]">
                <Icon name={stat.icon} className="size-[calc(38*var(--unit))] lg:size-[calc(44*var(--unit))]" />
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
