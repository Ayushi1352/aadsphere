import Image from "next/image";
import Link from "next/link";
import Icon from "./icons";
import { DotGrid, Lines } from "./ui";
import { site } from "@/data";

const { tagline, headingLines, descriptionLines, images, experience } = site.about;

/**
 * `compact` is the version used on inner pages: it sits closer to the page banner
 * and has no "Read More" link (the visitor is already on the About page).
 */
export default function AboutSection({ compact = false }: { compact?: boolean }) {
  return (
    <section className={`relative px-20 pt-56 sm:px-32 sm:pt-72 xl:p-0 ${compact ? "xl:h-849" : "xl:h-893"}`}>
      <div className={compact ? "xl:absolute xl:inset-x-0 xl:-top-44 xl:h-893" : "contents"}>
        <div className="lg:flex lg:items-center lg:gap-40 xl:block">
          {/* Text */}
          <div className="lg:w-1/2 xl:w-auto">
            <p className="flex flex-wrap items-center gap-x-18 fs-13 font-semibold uppercase leading-none tracking-[0.3em] text-[#222222] xl:absolute xl:left-64 xl:top-191 xl:fs-16 xl:font-medium">
              {tagline.map((word, i) => (
                <span key={word} className="flex items-center gap-18">
                  {i > 0 && <span className="-ml-[0.3em] h-12 w-2 bg-accent xl:h-11" aria-hidden="true" />}
                  {word}
                </span>
              ))}
            </p>

            {/* On desktop every line sits on a white strip that overlaps the photo. */}
            <h2 className="mt-20 fs-36 leading-[1.14] tracking-[-0.03em] text-ink sm:fs-52 xl:absolute xl:left-64 xl:top-233 xl:z-20 xl:mt-0 xl:fs-70 xl:leading-73 xl:tracking-[-0.004em]">
              {headingLines.map((line, i) => (
                <span key={i} className={`xl:block xl:w-fit xl:min-w-639 xl:whitespace-nowrap xl:bg-white xl:pr-21 ${i === 0 ? "xl:pt-8" : ""}`}>
                  {line.map((part) => (
                    <span key={part.text} className={part.highlight ? "font-extrabold text-brand" : "font-normal"}>
                      {part.text}
                    </span>
                  ))}{" "}
                </span>
              ))}
            </h2>

            <span className="mt-24 block h-3 w-70 bg-accent xl:absolute xl:left-64 xl:top-557 xl:mt-0" aria-hidden="true" />

            <p className="mt-22 max-w-540 font-text fs-16 leading-[1.75] text-body sm:fs-18 xl:absolute xl:left-64 xl:top-586 xl:mt-0 xl:max-w-none xl:whitespace-nowrap xl:fs-21 xl:leading-35 xl:tracking-[0.03em]">
              <Lines lines={descriptionLines} />
            </p>
          </div>

          {/* Photos */}
          <div className="mt-40 lg:mt-0 lg:w-1/2 xl:w-auto">
            <div className="relative mx-auto aspect-458/680 w-full max-w-420 xl:absolute xl:left-598 xl:top-128 xl:mx-0 xl:h-680 xl:w-458 xl:max-w-none">
              <span className="absolute left-[12%] top-0 h-[14.3%] w-[34.5%] bg-[#650f0e]" aria-hidden="true" />
              <div className="absolute left-[19.65%] top-[4.1%] h-[67.95%] w-[80.35%]">
                <Image src={images.primary.src} alt={images.primary.alt} fill sizes="(min-width: 80rem) 22vw, 340px" className="object-cover" />
              </div>
              <span className="absolute left-0 top-[56.8%] h-[19.4%] w-[17.9%] bg-[#7a1a1c]" aria-hidden="true" />
              <DotGrid cols={4} rows={4} gap={22} className="absolute -left-43 top-[85.6%] hidden xl:block" />
              <div className="absolute left-[6.35%] top-[60.4%] h-[39.6%] w-[77.7%] border-2 border-white bg-white">
                <div className="relative size-full">
                  <Image src={images.secondary.src} alt={images.secondary.alt} fill sizes="(min-width: 80rem) 21vw, 330px" className="object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 10 years experience panel */}
        <div className="relative -mx-20 mt-56 overflow-hidden bg-panel px-20 py-56 sm:-mx-32 sm:px-32 sm:py-72 xl:absolute xl:right-0 xl:top-58 xl:mx-0 xl:mt-0 xl:h-800 xl:w-606 xl:p-0">
          <span
            aria-hidden="true"
            className="absolute left-118 top-125 hidden size-410 rounded-full border-[0.5rem] border-transparent border-r-[#f6e6e4] border-t-[#f8ecea] xl:block"
            style={{ transform: "rotate(8deg)" }}
          />
          <div className="relative mx-auto max-w-540 xl:mx-0 xl:max-w-none">
            <div className="flex items-center gap-24 xl:block">
              <p
                className="fs-150 font-black leading-[0.8] tracking-[-0.04em] text-[#660e0d] sm:fs-200 xl:absolute xl:left-58 xl:top-253 xl:origin-left xl:scale-x-[0.93] xl:fs-262 xl:leading-205"
                style={{ WebkitBoxReflect: "below -0.06em linear-gradient(transparent 70%, rgba(255,255,255,0.09))" }}
              >
                {experience.number}
              </p>
              <div className="xl:absolute xl:left-339 xl:top-345">
                <p className="fs-15 font-medium uppercase leading-[1.7] tracking-[0.47em] text-[#222222] sm:fs-18 xl:fs-20 xl:leading-34">
                  {experience.labelLines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </p>
                <span className="mt-14 block h-3 w-69 bg-accent xl:mt-12" aria-hidden="true" />
              </div>
            </div>

            <h3 className="mt-44 fs-21 font-bold leading-[1.2] text-ink sm:fs-25 xl:absolute xl:left-63 xl:top-508 xl:mt-0 xl:whitespace-nowrap">{experience.title}</h3>
            <p className="mt-14 font-text fs-16 leading-[1.7] text-body sm:fs-18 xl:absolute xl:left-63 xl:top-548 xl:mt-0 xl:whitespace-nowrap xl:fs-21 xl:leading-32 xl:tracking-[0.005em]">
              <Lines lines={experience.descriptionLines} />
            </p>
            {!compact && (
              <Link
                href={experience.link.href}
                className="group mt-28 flex items-center justify-between border-b border-[#d9818a] pb-10 fs-18 font-semibold text-brand xl:absolute xl:left-63 xl:top-681 xl:mt-0 xl:h-36 xl:w-475 xl:items-start xl:pb-0 xl:fs-20 xl:leading-28"
              >
                {experience.link.label}
                <Icon name="arrow-up-right" className="size-26 transition-transform duration-200 group-hover:-translate-y-2 group-hover:translate-x-2 xl:mt-2" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
