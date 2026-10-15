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
      <h2 className="fs-21 font-bold leading-[1.2] text-[#0b0d10] sm:fs-25 xl:fs-30 xl:leading-36">{block.title}</h2>
      <p className="mt-8 fs-16 font-medium leading-[1.6] text-[#3d424c] sm:fs-18 xl:mt-9 xl:whitespace-nowrap xl:fs-22 xl:leading-[1.85625rem] xl:tracking-[-0.015em]">
        <Lines lines={block.lines} />
      </p>
    </div>
  );
}

/** Full article of one service: photo, intro, text blocks and two feature cards. */
export default function ServiceContent({ heading }: { heading: HeadingLine[] }) {
  return (
    <section className="px-20 py-32 font-montserrat sm:px-32 sm:py-40 xl:px-0 xl:py-48">
      <div className="relative aspect-1566/612 overflow-hidden r-14 xl:ml-63 xl:w-1571 xl:r-24">
        <Image src={image.src} alt={image.alt} fill preload sizes="(min-width: 80rem) 93vw, 100vw" className="animate-zoom-out object-cover" />
      </div>

      <div data-reveal-group="up" className="xl:mx-auto xl:w-fit xl:max-w-1571">
        <p className="mt-22 flex items-center gap-14 fs-14 font-semibold uppercase leading-none tracking-[0.2em] text-[#2a2a2c] sm:fs-16 xl:mt-34 xl:gap-18 xl:fs-18">
          <span className="h-2 w-44 bg-brand-red xl:w-56" aria-hidden="true" />
          {label}
        </p>
        <h1 className="mt-14 fs-32 font-bold leading-[1.12] tracking-[-0.01em] text-[#0b0d10] sm:fs-48 xl:mt-20 xl:fs-67 xl:leading-70">
          {heading.map((part) => (
            <span key={part.text} className={part.highlight ? "text-brand-red" : ""}>
              {part.text}
            </span>
          ))}
        </h1>
        <p className="mt-16 fs-16 font-medium leading-[1.65] text-[#3d424c] sm:fs-18 xl:mt-22 xl:whitespace-nowrap xl:fs-22 xl:leading-[2.03125rem] xl:tracking-[-0.015em]">
          <Lines lines={introLines} />
        </p>

        {sections.map((block, i) => (
          <Block key={block.title} block={block} className={`mt-28 ${i === 0 ? "xl:mt-36" : "xl:mt-22"}`} />
        ))}
      </div>

      <ul className="mt-36 grid gap-20 lg:grid-cols-2 xl:mx-auto xl:mt-56 xl:w-1360 xl:gap-30">
        {features.map((feature, i) => (
          <li key={feature.title} data-reveal={i % 2 === 1 ? "right" : "left"} className="group flex gap-18 r-18 bg-[#fdf3f4] p-22 sm:gap-28 sm:p-32 xl:items-center xl:gap-36 xl:r-24 xl:px-44 xl:py-40">
            <span className="flex size-80 shrink-0 transition-transform duration-300 group-hover:scale-105 group-hover:-rotate-3 items-center justify-center r-18 bg-linear-to-b from-[#fdeef0] to-[#fbdfe2] text-brand-red shadow-[0_0.5rem_1.25rem_rgba(110,12,29,0.1)] sm:size-120 xl:size-130 xl:r-24">
              <Icon name={feature.icon} className="size-44 sm:size-64 xl:size-76" />
            </span>
            <div>
              <h3 className="fs-21 font-bold leading-[1.2] text-[#0b0d10] sm:fs-25 xl:whitespace-nowrap xl:fs-30 xl:leading-36">{feature.title}</h3>
              <p className="mt-8 fs-16 font-medium leading-[1.6] text-[#3d424c] sm:fs-18 xl:mt-9 xl:whitespace-nowrap xl:fs-22 xl:leading-[1.85625rem] xl:tracking-[-0.015em]">
                <Lines lines={feature.lines} />
              </p>
            </div>
          </li>
        ))}
      </ul>

      <div data-reveal-group="up" className="xl:mx-auto xl:w-fit xl:max-w-1571">
        {closingSections.map((block, i) => (
          <Block key={block.title} block={block} className={`mt-28 ${i === 0 ? "xl:mt-36" : "xl:mt-22"}`} />
        ))}
      </div>
    </section>
  );
}
