import { Icon } from '@/components/ui/Icon';
import { Lines, SectionLabel } from '@/components/ui/Text';
import type { WhyChooseUsProps } from '@/types/templates.types';

/** "Why Choose Us": heading plus six reason cards (the featured one is solid red). */
export const WhyChooseUs = ({ data }: WhyChooseUsProps) => {
  if (!data) return null;
  const { label, headingLines, descriptionLines, reasons } = data;
  return (
    <section className="px-[calc(20*var(--unit))] py-[calc(32*var(--unit))] sm:px-[calc(32*var(--unit))] sm:py-[calc(40*var(--unit))] lg:h-[calc(800*var(--unit))] lg:p-0">
      <div data-reveal-group="up" className="flex flex-col items-center text-center lg:pt-[calc(48*var(--unit))]">
        <SectionLabel text={label} tracking="tracking-[0.24em]" className="[&>span:nth-child(2)]:font-bold [&>span:nth-child(odd)]:bg-[var(--color-accent)]" />
          <h2 className="mt-[calc(18*var(--unit))] text-[calc(28*var(--unit))] font-extrabold leading-[1.1] text-[var(--color-heading)] sm:text-[calc(52*var(--unit))] lg:mt-[calc(24*var(--unit))] lg:text-[calc(63*var(--unit))] lg:leading-[calc(60*var(--unit))]">
          {headingLines.map((line, i) => (
            <span key={i} className="block">
              {line.map((part) => (
                <span key={part.text} className={part.highlight ? 'text-[var(--color-accent)]' : ''}>
                  {part.text}
                </span>
              ))}
            </span>
          ))}
        </h2>
        <p className="mt-[calc(18*var(--unit))] max-w-[calc(680*var(--unit))] font-ui text-[calc(16*var(--unit))] leading-[1.7] text-[var(--color-section-text)] sm:text-[calc(18*var(--unit))] lg:mt-[calc(14*var(--unit))] lg:max-w-none lg:text-[calc(23*var(--unit))] lg:leading-[calc(28*var(--unit))] lg:tracking-[-0.012em]">
          <Lines lines={descriptionLines} />
        </p>
      </div>

      <ul data-reveal-group="up" className="mt-[calc(36*var(--unit))] grid gap-[calc(20*var(--unit))] md:grid-cols-2 lg:ml-[calc(63*var(--unit))] lg:mt-[calc(23*var(--unit))] lg:h-[calc(451*var(--unit))] lg:w-[calc(1571*var(--unit))] lg:grid-cols-[515fr_507fr_512fr] lg:grid-rows-[218fr_212fr] lg:gap-x-[calc(22*var(--unit))] lg:gap-y-[calc(23*var(--unit))]">
        {reasons.map((reason) => (
          <li
            key={reason.id}
            className={`group relative flex gap-[calc(18*var(--unit))] overflow-hidden rounded-[calc(14*var(--unit))] p-[calc(22*var(--unit))] transition-[transform,box-shadow] duration-300 hover:-translate-y-[calc(6*var(--unit))] sm:gap-[calc(24*var(--unit))] sm:p-[calc(28*var(--unit))] lg:block lg:p-0 ${
              reason.featured
                ? 'bg-[linear-gradient(45deg,var(--color-accent)_0%,var(--color-primary)_50%,var(--color-accent)_100%)] text-[var(--color-white)] [box-shadow:0_calc(12*var(--unit))_calc(28*var(--unit))_var(--color-accent-22)]'
                : 'border border-[var(--color-primary-tint-9)] bg-[var(--color-white)] [box-shadow:0_calc(4*var(--unit))_calc(20*var(--unit))_var(--color-primary-6)]'
            }`}
          >
            {!reason.featured && (
              <span
                aria-hidden="true"
                className="absolute bottom-0 right-0 h-[calc(96*var(--unit))] w-[calc(132*var(--unit))] bg-gradient-to-tl from-[var(--color-accent-tint-13)] to-[var(--color-accent-tint-6)] [clip-path:polygon(100%_0,100%_100%,0_100%)]"
              />
            )}

            <span
              className={`relative flex size-[calc(76*var(--unit))] shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6 items-center justify-center rounded-[calc(14*var(--unit))] sm:size-[calc(96*var(--unit))] lg:absolute lg:top-[calc(36*var(--unit))] lg:size-[calc(113*var(--unit))] lg:rounded-[calc(16*var(--unit))] ${reason.featured ? 'lg:left-[calc(31*var(--unit))]' : 'lg:left-[calc(29*var(--unit))]'} ${
                reason.featured ? 'bg-[var(--color-white-13)] text-[var(--color-white)]' : 'bg-[var(--color-accent-tint-7)] text-[var(--color-accent)]'
              }`}
            >
              <Icon name={reason.icon} className="size-[calc(44*var(--unit))] sm:size-[calc(56*var(--unit))] lg:size-[calc(70*var(--unit))]" />
            </span>

            <div className={`relative lg:absolute lg:top-[calc(30*var(--unit))] ${reason.featured ? 'lg:left-[calc(179*var(--unit))]' : 'lg:left-[calc(169*var(--unit))]'}`}>
              <p className={`flex items-center gap-[calc(12*var(--unit))] text-[calc(18*var(--unit))] font-extrabold leading-none tracking-[0.04em] lg:text-[calc(21*var(--unit))] lg:leading-[calc(26*var(--unit))] ${reason.featured ? 'text-[var(--color-accent-tint-40)]' : 'text-[var(--color-accent-tint-28)]'}`}>
                {reason.number}
                <span
                  aria-hidden="true"
                  className={`h-[calc(2*var(--unit))] w-[calc(86*var(--unit))] bg-gradient-to-r to-transparent ${reason.featured ? 'from-[var(--color-accent)]' : 'from-[var(--color-accent-tint-43)]'}`}
                />
              </p>
              <h3 className={`mt-[calc(12*var(--unit))] text-[calc(20*var(--unit))] font-extrabold leading-[1.2] tracking-[-0.01em] sm:text-[calc(23*var(--unit))] lg:mt-[calc(14*var(--unit))] lg:whitespace-nowrap lg:text-[calc(25*var(--unit))] lg:leading-[calc(30*var(--unit))] ${reason.featured ? 'text-[var(--color-white)]' : 'text-[var(--color-heading)]'}`}>
                {reason.title}
              </h3>
              <p className={`mt-[calc(8*var(--unit))] font-text text-[calc(16*var(--unit))] leading-[1.5] sm:text-[calc(18*var(--unit))] lg:mt-[calc(7*var(--unit))] lg:whitespace-nowrap lg:text-[calc(20*var(--unit))] lg:leading-[calc(25.5*var(--unit))] ${reason.featured ? 'text-[var(--color-white-90)]' : 'text-[var(--color-card-text)]'}`}>
                <Lines lines={reason.descriptionLines} />
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};
