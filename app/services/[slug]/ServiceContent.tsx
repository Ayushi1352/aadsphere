import Image from "next/image";
import Icon from "@/components/icons";
import { Lines } from "@/components/ui";
import { site } from "@/data";
import type { HeadingLine } from "@/data";

const { label, image, introLines, sections, features, closingSections } = site.serviceDetail;

type TextBlock = { title: string; lines: string[] };

/** A sub heading with its paragraph. */
function Block({ block, className }: { block: TextBlock; className: string }) {
  return (
    <div className={className}>
      <h2 className="text-[calc(21*var(--unit))] font-bold leading-[1.2] text-[#0b0d10] sm:text-[calc(25*var(--unit))] lg:text-[calc(30*var(--unit))] lg:leading-[calc(36*var(--unit))]">{block.title}</h2>
      <p className="mt-[calc(8*var(--unit))] text-[calc(16*var(--unit))] font-medium leading-[1.6] text-[#3d424c] sm:text-[calc(18*var(--unit))] lg:mt-[calc(9*var(--unit))] lg:whitespace-nowrap lg:text-[calc(22*var(--unit))] lg:leading-[calc(29.7*var(--unit))] lg:tracking-[-0.015em]">
        <Lines lines={block.lines} />
      </p>
    </div>
  );
}

/** Full article of one service: photo, intro, text blocks and two feature cards. */
export default function ServiceContent({ heading }: { heading: HeadingLine[] }) {
  return (
    <section className="px-[calc(20*var(--unit))] py-[calc(32*var(--unit))] font-(family-name:--font-montserrat-face) sm:px-[calc(32*var(--unit))] sm:py-[calc(40*var(--unit))] lg:px-0 lg:py-[calc(48*var(--unit))]">
      <div className="relative aspect-1566/612 overflow-hidden rounded-[calc(14*var(--unit))] lg:ml-[calc(63*var(--unit))] lg:w-[calc(1571*var(--unit))] lg:rounded-[calc(24*var(--unit))]">
        <Image src={image.src} alt={image.alt} fill preload sizes="(min-width: 80rem) 93vw, 100vw" className="scale-100 object-cover transition-[scale] duration-1600 ease-[cubic-bezier(0.22,1,0.36,1)] starting:scale-114 motion-reduce:transition-none" />
      </div>

      <div data-reveal-group="up" className="lg:mx-auto lg:w-fit lg:max-w-[calc(1571*var(--unit))]">
        <p className="mt-[calc(22*var(--unit))] flex items-center gap-[calc(14*var(--unit))] text-[calc(14*var(--unit))] font-semibold uppercase leading-none tracking-[0.2em] text-[#2a2a2c] sm:text-[calc(16*var(--unit))] lg:mt-[calc(34*var(--unit))] lg:gap-[calc(18*var(--unit))] lg:text-[calc(18*var(--unit))]">
          <span className="h-[calc(2*var(--unit))] w-[calc(44*var(--unit))] bg-[#d60c14] lg:w-[calc(56*var(--unit))]" aria-hidden="true" />
          {label}
        </p>
        <h1 className="mt-[calc(14*var(--unit))] text-[calc(32*var(--unit))] font-bold leading-[1.12] tracking-[-0.01em] text-[#0b0d10] sm:text-[calc(48*var(--unit))] lg:mt-[calc(20*var(--unit))] lg:text-[calc(67*var(--unit))] lg:leading-[calc(70*var(--unit))]">
          {heading.map((part) => (
            <span key={part.text} className={part.highlight ? "text-[#d60c14]" : ""}>
              {part.text}
            </span>
          ))}
        </h1>
        <p className="mt-[calc(16*var(--unit))] text-[calc(16*var(--unit))] font-medium leading-[1.65] text-[#3d424c] sm:text-[calc(18*var(--unit))] lg:mt-[calc(22*var(--unit))] lg:whitespace-nowrap lg:text-[calc(22*var(--unit))] lg:leading-[calc(32.5*var(--unit))] lg:tracking-[-0.015em]">
          <Lines lines={introLines} />
        </p>

        {sections.map((block, i) => (
          <Block key={block.title} block={block} className={`mt-[calc(28*var(--unit))] ${i === 0 ? "lg:mt-[calc(36*var(--unit))]" : "lg:mt-[calc(22*var(--unit))]"}`} />
        ))}
      </div>

      <ul className="mt-[calc(36*var(--unit))] grid gap-[calc(20*var(--unit))] lg:grid-cols-2 lg:mx-auto lg:mt-[calc(56*var(--unit))] lg:w-[calc(1360*var(--unit))] lg:gap-[calc(30*var(--unit))]">
        {features.map((feature, i) => (
          <li key={feature.title} data-reveal={i % 2 === 1 ? "right" : "left"} className="group flex gap-[calc(18*var(--unit))] rounded-[calc(18*var(--unit))] bg-[#fdf3f4] p-[calc(22*var(--unit))] sm:gap-[calc(28*var(--unit))] sm:p-[calc(32*var(--unit))] lg:items-center lg:gap-[calc(36*var(--unit))] lg:rounded-[calc(24*var(--unit))] lg:px-[calc(44*var(--unit))] lg:py-[calc(40*var(--unit))]">
            <span className="flex size-[calc(80*var(--unit))] shrink-0 transition-transform duration-300 group-hover:scale-105 group-hover:-rotate-3 items-center justify-center rounded-[calc(18*var(--unit))] bg-linear-to-b from-[#fdeef0] to-[#fbdfe2] text-[#d60c14] shadow-[0_calc(8*var(--unit))_calc(20*var(--unit))_rgba(110,12,29,0.1)] sm:size-[calc(120*var(--unit))] lg:size-[calc(130*var(--unit))] lg:rounded-[calc(24*var(--unit))]">
              <Icon name={feature.icon} className="size-[calc(44*var(--unit))] sm:size-[calc(64*var(--unit))] lg:size-[calc(76*var(--unit))]" />
            </span>
            <div>
              <h3 className="text-[calc(21*var(--unit))] font-bold leading-[1.2] text-[#0b0d10] sm:text-[calc(25*var(--unit))] lg:whitespace-nowrap lg:text-[calc(30*var(--unit))] lg:leading-[calc(36*var(--unit))]">{feature.title}</h3>
              <p className="mt-[calc(8*var(--unit))] text-[calc(16*var(--unit))] font-medium leading-[1.6] text-[#3d424c] sm:text-[calc(18*var(--unit))] lg:mt-[calc(9*var(--unit))] lg:whitespace-nowrap lg:text-[calc(22*var(--unit))] lg:leading-[calc(29.7*var(--unit))] lg:tracking-[-0.015em]">
                <Lines lines={feature.lines} />
              </p>
            </div>
          </li>
        ))}
      </ul>

      <div data-reveal-group="up" className="lg:mx-auto lg:w-fit lg:max-w-[calc(1571*var(--unit))]">
        {closingSections.map((block, i) => (
          <Block key={block.title} block={block} className={`mt-[calc(28*var(--unit))] ${i === 0 ? "lg:mt-[calc(36*var(--unit))]" : "lg:mt-[calc(22*var(--unit))]"}`} />
        ))}
      </div>
    </section>
  );
}
