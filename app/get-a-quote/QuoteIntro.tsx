import Icon from "@/components/icons";
import { Lines } from "@/components/ui";
import { site } from "@/data";

const { label, headingLines, descriptionLines, features } = site.quote;

/** Left side of the quote page: heading, short text and three promises. */
export default function QuoteIntro() {
  return (
    <div data-reveal-group="left" className="lg:ml-[calc(118*var(--unit))] lg:w-[calc(702*var(--unit))] lg:shrink-0 lg:pt-[calc(3*var(--unit))]">
      <p className="flex items-center gap-[calc(16*var(--unit))] font-(family-name:--font-inter-face) text-[calc(13*var(--unit))] font-bold uppercase leading-none tracking-[0.24em] text-[#5a5f6b] lg:gap-[calc(23*var(--unit))] lg:text-[calc(15*var(--unit))]">
        <span className="h-[calc(2*var(--unit))] w-[calc(36*var(--unit))] bg-[#6e0c12] lg:w-[calc(47*var(--unit))]" aria-hidden="true" />
        {label}
      </p>
      <h2 className="mt-[calc(18*var(--unit))] text-[calc(38*var(--unit))] font-black leading-[1.06] tracking-[-0.015em] text-[#0e1118] sm:text-[calc(56*var(--unit))] lg:ml-[calc(3*var(--unit))] lg:mt-[calc(23*var(--unit))] lg:text-[calc(72*var(--unit))] lg:leading-[calc(75*var(--unit))]">
        {headingLines.map((line) => (
          <span key={line.text} className={`block ${line.highlight ? "text-[#6e0c12]" : ""}`}>
            {line.text}
          </span>
        ))}
      </h2>
      <p className="mt-[calc(16*var(--unit))] max-w-[calc(560*var(--unit))] text-[calc(17*var(--unit))] leading-[1.6] text-[#5f6470] sm:text-[calc(19*var(--unit))] lg:ml-[calc(3*var(--unit))] lg:mt-[calc(17*var(--unit))] lg:max-w-none lg:whitespace-nowrap lg:text-[calc(24*var(--unit))] lg:leading-[calc(36*var(--unit))] lg:tracking-[0.02em]">
        <Lines lines={descriptionLines} />
      </p>

      <ul className="mt-[calc(30*var(--unit))] space-y-[calc(22*var(--unit))] lg:mt-[calc(35*var(--unit))] lg:space-y-[calc(34*var(--unit))]">
        {features.map((feature) => (
          <li key={feature.title} className="flex items-center gap-[calc(20*var(--unit))] lg:gap-[calc(37*var(--unit))]">
            <span className="flex size-[calc(88*var(--unit))] shrink-0 items-center justify-center rounded-[calc(14*var(--unit))] bg-[#fbeeee] text-[#6e0c12] lg:h-[calc(118*var(--unit))] lg:w-[calc(121*var(--unit))] lg:rounded-[calc(18*var(--unit))]">
              <Icon name={feature.icon} className="size-[calc(44*var(--unit))] lg:size-[calc(62*var(--unit))]" />
            </span>
            <span className="block">
              <span className="block text-[calc(21*var(--unit))] font-extrabold leading-[1.2] text-[#0e1118] lg:text-[calc(27*var(--unit))] lg:leading-[calc(32*var(--unit))]">{feature.title}</span>
              <span className="mt-[calc(4*var(--unit))] block text-[calc(16*var(--unit))] leading-[1.4] text-[#5f6470] sm:text-[calc(18*var(--unit))] lg:mt-[calc(3*var(--unit))] lg:whitespace-nowrap lg:text-[calc(24*var(--unit))] lg:leading-[calc(31*var(--unit))] lg:tracking-[0.012em]">
                <Lines lines={feature.lines} />
              </span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
