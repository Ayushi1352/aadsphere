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
      <h2 className="fs-24 font-extrabold leading-[1.2] tracking-[-0.013em] text-[#0b0d10] sm:fs-32 xl:fs-54 xl:leading-56">{block.title}</h2>
      <p className="mt-12 fs-16 font-medium leading-[1.75] text-[#3d424c] sm:fs-19 xl:mt-25 xl:whitespace-nowrap xl:fs-31 xl:leading-[3.15625rem] xl:tracking-[-0.005em]">
        <Lines lines={block.lines} />
      </p>
    </div>
  );
}

/** Full article of one service: photo, intro, text blocks and two feature cards. */
export default function ServiceContent({ heading }: { heading: HeadingLine[] }) {
  return (
    <section className="px-20 py-48 font-montserrat sm:px-32 sm:py-64 xl:px-0 xl:pb-129 xl:pt-104">
      <div className="relative aspect-1566/612 overflow-hidden r-14 xl:ml-63 xl:w-1571 xl:r-24">
        <Image src={image.src} alt={image.alt} fill preload sizes="(min-width: 80rem) 93vw, 100vw" className="object-cover" />
      </div>

      <div className="xl:pl-63 xl:pr-52">
        <p className="mt-32 flex items-center gap-14 fs-15 font-semibold uppercase leading-none tracking-[0.2em] text-[#2a2a2c] sm:fs-19 xl:mt-68 xl:gap-22 xl:fs-26 xl:leading-30">
          <span className="h-2 w-44 bg-[#e02630] xl:h-3 xl:w-80" aria-hidden="true" />
          {label}
        </p>
        <h1 className="mt-14 fs-36 font-extrabold leading-[1.15] tracking-[-0.02em] text-[#0b0d10] sm:fs-56 xl:mt-29 xl:fs-89 xl:leading-96">
          {heading.map((part) => (
            <span key={part.text} className={part.highlight ? "text-[#d6101d]" : ""}>
              {part.text}
            </span>
          ))}
        </h1>
        <p className="mt-14 fs-16 font-medium leading-[1.75] text-[#3d424c] sm:fs-19 xl:mt-24 xl:whitespace-nowrap xl:fs-31 xl:leading-52 xl:tracking-[0.004em]">
          <Lines lines={introLines} />
        </p>

        {sections.map((block, i) => (
          <Block key={block.title} block={block} className={`mt-36 sm:mt-48 ${i === 0 ? "xl:mt-89" : "xl:mt-74"}`} />
        ))}
      </div>

      <ul className="mt-36 grid gap-20 lg:grid-cols-2 xl:ml-63 xl:mt-64 xl:w-1571 xl:grid-cols-[768fr_765fr] xl:gap-33">
        {features.map((feature) => (
          <li key={feature.title} className="flex gap-18 r-18 bg-[#fdf3f4] p-22 sm:gap-28 sm:p-32 xl:relative xl:block xl:h-292 xl:r-26 xl:p-0">
            <span className="flex size-80 shrink-0 items-center justify-center r-18 bg-linear-to-b from-[#fdeef0] to-[#fbdfe2] text-[#d6101d] shadow-[0_0.5rem_1.25rem_rgba(214,16,29,0.1)] sm:size-120 xl:absolute xl:left-54 xl:top-47 xl:size-165 xl:r-30">
              <Icon name={feature.icon} className="size-44 sm:size-64 xl:size-100" />
            </span>
            <div className="xl:absolute xl:left-271 xl:top-54">
              <h3 className="fs-20 font-extrabold leading-[1.2] tracking-[-0.03em] text-[#0b0d10] sm:fs-26 xl:whitespace-nowrap xl:fs-37 xl:leading-48">{feature.title}</h3>
              <p className="mt-8 fs-16 font-medium leading-[1.65] text-[#3d424c] sm:fs-19 xl:mt-10 xl:whitespace-nowrap xl:fs-27 xl:leading-45 xl:tracking-[-0.005em]">
                <Lines lines={feature.lines} />
              </p>
            </div>
          </li>
        ))}
      </ul>

      <div className="xl:pl-63 xl:pr-52">
        {closingSections.map((block, i) => (
          <Block key={block.title} block={block} className={`mt-36 sm:mt-48 ${i === 0 ? "xl:mt-92" : "xl:mt-74"}`} />
        ))}
      </div>
    </section>
  );
}
