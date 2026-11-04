import { Icon } from "@/components/ui/Icon";
import { Lines } from "@/components/ui/Text";
import type { QuoteData } from "@/types/templates.types";

/** Left side of the quote page: heading, short text and three promises. */
export const QuoteIntro = ({ data }: { data?: QuoteData }) => {
  if (!data) return null;
  const { label, headingLines, descriptionLines, features } = data;
  return (
    <div data-reveal-group="left" className="lg:ml-[calc(118*var(--unit))] lg:w-[calc(702*var(--unit))] lg:shrink-0 lg:pt-[calc(3*var(--unit))]">
      <p className="flex items-center gap-[calc(16*var(--unit))] font-ui text-[calc(13*var(--unit))] font-bold uppercase leading-none tracking-[0.24em] text-[var(--color-quote-text)] lg:gap-[calc(23*var(--unit))] lg:text-[calc(15*var(--unit))]">
        <span className="h-[calc(2*var(--unit))] w-[calc(36*var(--unit))] bg-[var(--color-primary)] lg:w-[calc(47*var(--unit))]" aria-hidden="true" />
        {label}
      </p>
      <h2 className="mt-[calc(18*var(--unit))] text-[calc(38*var(--unit))] font-black leading-[1.06] tracking-[-0.015em] text-[var(--color-quote-heading)] sm:text-[calc(56*var(--unit))] lg:ml-[calc(3*var(--unit))] lg:mt-[calc(23*var(--unit))] lg:text-[calc(72*var(--unit))] lg:leading-[calc(75*var(--unit))]">
        {headingLines.map((line) => (
          <span key={line.text} className={`block ${line.highlight ? "text-[var(--color-primary)]" : ""}`}>
            {line.text}
          </span>
        ))}
      </h2>
      <p className="mt-[calc(16*var(--unit))] max-w-[calc(560*var(--unit))] text-[calc(17*var(--unit))] leading-[1.6] text-[var(--color-quote-text-soft)] sm:text-[calc(19*var(--unit))] lg:ml-[calc(3*var(--unit))] lg:mt-[calc(17*var(--unit))] lg:max-w-none lg:whitespace-nowrap lg:text-[calc(24*var(--unit))] lg:leading-[calc(36*var(--unit))] lg:tracking-[0.02em]">
        <Lines lines={descriptionLines} />
      </p>

      <ul className="mt-[calc(30*var(--unit))] space-y-[calc(22*var(--unit))] lg:mt-[calc(35*var(--unit))] lg:space-y-[calc(34*var(--unit))]">
        {features.map((feature) => (
          <li key={feature.title} className="flex items-center gap-[calc(20*var(--unit))] lg:gap-[calc(37*var(--unit))]">
            <span className="flex size-[calc(88*var(--unit))] shrink-0 items-center justify-center rounded-[calc(14*var(--unit))] bg-[var(--color-accent-tint-7)] text-[var(--color-primary)] lg:h-[calc(118*var(--unit))] lg:w-[calc(121*var(--unit))] lg:rounded-[calc(18*var(--unit))]">
              <Icon name={feature.icon} className="size-[calc(44*var(--unit))] lg:size-[calc(62*var(--unit))]" />
            </span>
            <span className="block">
              <span className="block text-[calc(21*var(--unit))] font-extrabold leading-[1.2] text-[var(--color-quote-heading)] lg:text-[calc(27*var(--unit))] lg:leading-[calc(32*var(--unit))]">{feature.title}</span>
              <span className="mt-[calc(4*var(--unit))] block text-[calc(16*var(--unit))] leading-[1.4] text-[var(--color-quote-text-soft)] sm:text-[calc(18*var(--unit))] lg:mt-[calc(3*var(--unit))] lg:whitespace-nowrap lg:text-[calc(24*var(--unit))] lg:leading-[calc(31*var(--unit))] lg:tracking-[0.012em]">
                <Lines lines={feature.lines} />
              </span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};
