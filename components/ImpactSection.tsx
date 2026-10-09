import Image from "next/image";
import Icon from "./icons";
import { DotGrid, Lines } from "./ui";
import CountUp from "./CountUp";
import { site } from "@/data";

const { label, headingLines, descriptionLines, image, stats } = site.impact;

export default function ImpactSection() {
  return (
    <section className="relative px-20 py-32 sm:px-32 sm:py-40 xl:h-800 xl:p-0">
      <p data-reveal="left" className="flex items-center gap-20 fs-14 font-medium uppercase leading-none tracking-[0.5em] text-[#222222] xl:absolute xl:left-98 xl:top-48 xl:gap-14 xl:fs-17">
        {label}
        <span className="h-3 w-70 bg-accent" aria-hidden="true" />
      </p>

      <h2 data-reveal="left" className="mt-20 fs-32 font-medium leading-[1.15] tracking-[0.005em] text-ink sm:fs-44 xl:absolute xl:left-98 xl:top-86 xl:mt-0 xl:whitespace-nowrap xl:fs-57 xl:leading-59">
        {headingLines.map((line, i) => (
          <span key={i} className="xl:block">
            {line.map((part) => (
              <span key={part.text} className={part.highlight ? "font-extrabold text-brand" : ""}>
                {part.text}
              </span>
            ))}{" "}
          </span>
        ))}
      </h2>

      <div data-reveal="right" className="mt-22 xl:absolute xl:left-977 xl:top-126 xl:mt-0">
        <p className="max-w-620 font-poppins fs-16 leading-[1.75] tracking-[0.015em] text-body sm:fs-18 xl:max-w-none xl:whitespace-nowrap xl:fs-20 xl:leading-31">
          <Lines lines={descriptionLines} />
        </p>
        <span className="mt-22 block h-3 w-78 bg-accent xl:mt-27" aria-hidden="true" />
      </div>

      <div className="mt-44 lg:flex lg:items-center lg:gap-40 xl:mt-0 xl:block">
        {/* Round photo with ring and dot */}
        <div className="lg:w-[42%] xl:w-auto">
          <div data-reveal="zoom" className="relative mx-auto aspect-square w-[82%] max-w-420 xl:absolute xl:left-248 xl:top-325 xl:mx-0 xl:size-427 xl:max-w-none">
            <span className="absolute -left-[16%] top-[23.7%] size-[30%] animate-float-slow rounded-full bg-[#fbeeee]" aria-hidden="true" />
            <DotGrid cols={5} rows={4} gap={23} className="absolute -left-[13%] top-[60%] xl:-left-[18.2%]" />
            <svg viewBox="0 0 520 520" className="absolute -inset-[5.1%] size-[110.2%] origin-[48.85%_48.85%] animate-spin-slow" aria-hidden="true">
              <circle
                cx="254"
                cy="254"
                r="251"
                fill="none"
                stroke="#6e0c12"
                strokeWidth="2.2"
                strokeLinecap="round"
                pathLength="360"
                strokeDasharray="140 100 90 30"
                transform="rotate(-105 254 254)"
              />
            </svg>
            <Image src={image.src} alt={image.alt} fill sizes="(min-width: 80rem) 28vw, 420px" className="rounded-full object-cover" />
            <span className="absolute left-[81.8%] top-[-3.6%] size-[11.9%] animate-float rounded-full bg-brand" aria-hidden="true" />
          </div>
        </div>

        {/* Stats */}
        <ul data-reveal-group="up" className="mt-48 grid gap-15 sm:grid-cols-2 lg:mt-0 lg:grow xl:absolute xl:left-823 xl:top-330 xl:w-822 xl:grid-cols-[395fr_413fr] xl:gap-x-14 xl:gap-y-15">
          {stats.map((stat) => (
            <li
              key={stat.value}
              className="group relative flex items-center justify-between gap-16 r-20 transition-[translate,box-shadow] duration-300 hover:-translate-y-6 hover:shadow-[0_0.9rem_2rem_rgba(110,12,18,0.12)] bg-linear-to-br from-[#fbf9f9] to-[#fbf1f1] px-28 py-30 xl:block xl:h-200 xl:p-0"
            >
              <div className="xl:absolute xl:left-42 xl:top-33">
                <p className="font-poppins fs-48 font-bold leading-none tracking-[-0.02em] text-brand xl:fs-66"><CountUp value={stat.value} /></p>
                <p className="mt-16 font-poppins fs-13 uppercase leading-[1.55] tracking-[0.44em] text-[#3f3f3f] xl:mt-12 xl:fs-14 xl:leading-21">
                  {stat.labelLines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </p>
                <span className="mt-16 block h-3 w-54 bg-accent xl:mt-17" aria-hidden="true" />
              </div>
              <span className="flex size-84 shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6 items-center justify-center rounded-full bg-[#fce7e7] text-brand shadow-[0_0_0_0.3rem_rgba(255,255,255,0.75),0_0.4rem_1rem_rgba(110,12,18,0.08)] xl:absolute xl:right-49 xl:top-51 xl:size-98">
                <Icon name={stat.icon} className="size-38 xl:size-44" />
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
