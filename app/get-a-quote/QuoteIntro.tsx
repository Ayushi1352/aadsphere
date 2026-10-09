import Icon from "@/components/icons";
import { Lines } from "@/components/ui";
import { site } from "@/data";

const { label, headingLines, descriptionLines, features } = site.quote;

/** Left side of the quote page: heading, short text and three promises. */
export default function QuoteIntro() {
  return (
    <div data-reveal-group="left" className="lg:w-[46%] xl:ml-118 xl:w-702 xl:shrink-0 xl:pt-3">
      <p className="flex items-center gap-16 font-inter fs-13 font-bold uppercase leading-none tracking-[0.24em] text-[#5a5f6b] xl:gap-23 xl:fs-15">
        <span className="h-2 w-36 bg-accent xl:w-47" aria-hidden="true" />
        {label}
      </p>
      <h2 className="mt-18 fs-38 font-black leading-[1.06] tracking-[-0.015em] text-[#0e1118] sm:fs-56 xl:ml-3 xl:mt-23 xl:fs-72 xl:leading-75">
        {headingLines.map((line) => (
          <span key={line.text} className={`block ${line.highlight ? "text-brand" : ""}`}>
            {line.text}
          </span>
        ))}
      </h2>
      <p className="mt-16 max-w-560 fs-17 leading-[1.6] text-[#5f6470] sm:fs-19 xl:ml-3 xl:mt-17 xl:max-w-none xl:whitespace-nowrap xl:fs-24 xl:leading-36 xl:tracking-[0.02em]">
        <Lines lines={descriptionLines} />
      </p>

      <ul className="mt-30 space-y-22 xl:mt-35 xl:space-y-34">
        {features.map((feature) => (
          <li key={feature.title} className="flex items-center gap-20 xl:gap-37">
            <span className="flex size-88 shrink-0 items-center justify-center r-14 bg-[#fbeeee] text-brand xl:h-118 xl:w-121 xl:r-18">
              <Icon name={feature.icon} className="size-44 xl:size-62" />
            </span>
            <span className="block">
              <span className="block fs-21 font-extrabold leading-[1.2] text-[#0e1118] xl:fs-27 xl:leading-32">{feature.title}</span>
              <span className="mt-4 block fs-16 leading-[1.4] text-[#5f6470] sm:fs-18 xl:mt-3 xl:whitespace-nowrap xl:fs-24 xl:leading-31 xl:tracking-[0.012em]">
                <Lines lines={feature.lines} />
              </span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
