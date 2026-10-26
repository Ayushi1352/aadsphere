import Image from "next/image";
import Link from "next/link";
import Icon from "./icons";
import { DotGrid, Lines } from "./ui";
import CountUp from "./CountUp";
import { site } from "@/data";

const { tagline, headingLines, descriptionLines, images, experience } = site.about;

/**
 * `compact` is the version used on inner pages: it has no "Read More" link
 * (the visitor is already on the About page).
 */
export default function AboutSection({ compact = false }: { compact?: boolean }) {
  return (
    <section className="relative px-[calc(20*var(--unit))] py-[calc(32*var(--unit))] sm:px-[calc(32*var(--unit))] sm:py-[calc(40*var(--unit))] lg:h-[calc(776*var(--unit))] lg:p-0">
      <div className="contents">
        <div className="lg:items-center lg:gap-[calc(40*var(--unit))] lg:block">
          {/* Text */}
          <div className="lg:w-auto">
            <p data-reveal="left" className="flex flex-wrap items-center gap-x-[calc(18*var(--unit))] text-[calc(13*var(--unit))] font-semibold uppercase leading-none tracking-[0.3em] text-[#222222] lg:absolute lg:left-[calc(64*var(--unit))] lg:top-[calc(111*var(--unit))] lg:text-[calc(16*var(--unit))] lg:font-medium">
              {tagline.map((word, i) => (
                <span key={word} className="flex items-center gap-[calc(18*var(--unit))]">
                  {i > 0 && <span className="-ml-[0.3em] h-[calc(12*var(--unit))] w-[calc(2*var(--unit))] bg-primary lg:h-[calc(11*var(--unit))]" aria-hidden="true" />}
                  {word}
                </span>
              ))}
            </p>

            {/* On desktop every line sits on a white strip that overlaps the photo. */}
            <h2 data-reveal="left" className="mt-[calc(20*var(--unit))] text-[calc(36*var(--unit))] leading-[1.14] tracking-[-0.03em] text-ink sm:text-[calc(52*var(--unit))] lg:absolute lg:left-[calc(64*var(--unit))] lg:top-[calc(153*var(--unit))] lg:z-20 lg:mt-0 lg:text-[calc(70*var(--unit))] lg:leading-[calc(73*var(--unit))] lg:tracking-[-0.004em]">
              {headingLines.map((line, i) => (
                <span key={i} className={`lg:block lg:w-fit lg:min-w-[calc(639*var(--unit))] lg:whitespace-nowrap lg:bg-white lg:pr-[calc(21*var(--unit))] ${i === 0 ? "lg:pt-[calc(8*var(--unit))]" : ""}`}>
                  {line.map((part) => (
                    <span key={part.text} className={part.highlight ? "font-extrabold text-primary" : "font-normal"}>
                      {part.text}
                    </span>
                  ))}{" "}
                </span>
              ))}
            </h2>

            <span data-reveal="line" className="origin-left mt-[calc(24*var(--unit))] block h-[calc(3*var(--unit))] w-[calc(70*var(--unit))] bg-primary lg:absolute lg:left-[calc(64*var(--unit))] lg:top-[calc(477*var(--unit))] lg:mt-0" aria-hidden="true" />

            <p data-reveal="left" className="mt-[calc(22*var(--unit))] max-w-[calc(540*var(--unit))] font-text text-[calc(16*var(--unit))] leading-[1.75] text-body sm:text-[calc(18*var(--unit))] lg:absolute lg:left-[calc(64*var(--unit))] lg:top-[calc(506*var(--unit))] lg:mt-0 lg:max-w-none lg:whitespace-nowrap lg:text-[calc(21*var(--unit))] lg:leading-[calc(35*var(--unit))] lg:tracking-[0.03em]">
              <Lines lines={descriptionLines} />
            </p>
          </div>

          {/* Photos */}
          <div className="mt-[calc(40*var(--unit))] lg:mt-0 lg:w-auto">
            <div className="relative mx-auto aspect-458/680 w-full max-w-[calc(420*var(--unit))] lg:absolute lg:left-[calc(598*var(--unit))] lg:top-[calc(48*var(--unit))] lg:mx-0 lg:h-[calc(680*var(--unit))] lg:w-[calc(458*var(--unit))] lg:max-w-none">
              <span data-reveal="zoom" className="absolute left-[12%] top-0 h-[14.3%] w-[34.5%] bg-primary" aria-hidden="true" />
              <div data-reveal="down" className="absolute left-[19.65%] top-[4.1%] h-[67.95%] w-[80.35%] overflow-hidden">
                <Image src={images.primary.src} alt={images.primary.alt} fill sizes="(min-width: 80rem) 22vw, 340px" className="object-cover transition-transform duration-700 hover:scale-105" />
              </div>
              <span data-reveal="zoom" className="absolute left-0 top-[56.8%] h-[19.4%] w-[17.9%] bg-primary" aria-hidden="true" />
              <DotGrid cols={4} rows={4} gap={22} data-float="6000" className="absolute -left-[calc(43*var(--unit))] top-[85.6%] hidden lg:block" />
              <div data-reveal="left" data-reveal-delay="150" className="absolute left-[6.35%] top-[60.4%] h-[39.6%] w-[77.7%] border-2 border-white bg-white">
                <div className="relative size-full overflow-hidden">
                  <Image src={images.secondary.src} alt={images.secondary.alt} fill sizes="(min-width: 80rem) 21vw, 330px" className="object-cover transition-transform duration-700 hover:scale-105" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 10 years experience panel */}
        <div className="relative -mx-[calc(20*var(--unit))] mt-[calc(56*var(--unit))] overflow-hidden bg-primary-tint-4 px-[calc(20*var(--unit))] py-[calc(56*var(--unit))] sm:-mx-[calc(32*var(--unit))] sm:px-[calc(32*var(--unit))] sm:py-[calc(72*var(--unit))] lg:absolute lg:right-0 lg:top-[calc(48*var(--unit))] lg:mx-0 lg:mt-0 lg:h-[calc(680*var(--unit))] lg:w-[calc(606*var(--unit))] lg:p-0">
          <span
            aria-hidden="true"
            className="absolute left-[calc(118*var(--unit))] top-[calc(25*var(--unit))] hidden size-[calc(410*var(--unit))] rounded-full border-[calc(8*var(--unit))] border-transparent border-r-accent-tint-11 border-t-accent-tint-9 lg:block"
            style={{ transform: "rotate(8deg)" }}
          />
          <div className="relative mx-auto max-w-[calc(540*var(--unit))] lg:mx-0 lg:max-w-none">
            <div className="flex items-center gap-[calc(24*var(--unit))] lg:block">
              <p
                data-reveal="up"
                className="text-[calc(150*var(--unit))] font-black leading-[0.8] tracking-[-0.04em] text-primary sm:text-[calc(200*var(--unit))] lg:absolute lg:left-[calc(58*var(--unit))] lg:top-[calc(153*var(--unit))] lg:origin-left lg:scale-x-[0.93] lg:text-[calc(262*var(--unit))] lg:leading-[calc(205*var(--unit))]"
                style={{ WebkitBoxReflect: "below -0.06em linear-gradient(transparent 70%, rgba(255,255,255,0.09))" }}
              >
                <CountUp value={experience.number} />
              </p>
              <div data-reveal="right" className="lg:absolute lg:left-[calc(339*var(--unit))] lg:top-[calc(245*var(--unit))]">
                <p className="text-[calc(15*var(--unit))] font-medium uppercase leading-[1.7] tracking-[0.47em] text-[#222222] sm:text-[calc(18*var(--unit))] lg:text-[calc(20*var(--unit))] lg:leading-[calc(34*var(--unit))]">
                  {experience.labelLines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </p>
                <span className="mt-[calc(14*var(--unit))] block h-[calc(3*var(--unit))] w-[calc(69*var(--unit))] bg-primary lg:mt-[calc(12*var(--unit))]" aria-hidden="true" />
              </div>
            </div>

            <h3 data-reveal="up" className="mt-[calc(44*var(--unit))] text-[calc(21*var(--unit))] font-bold leading-[1.2] text-ink sm:text-[calc(25*var(--unit))] lg:absolute lg:left-[calc(63*var(--unit))] lg:top-[calc(408*var(--unit))] lg:mt-0 lg:whitespace-nowrap">{experience.title}</h3>
            <p data-reveal="up" className="mt-[calc(14*var(--unit))] font-text text-[calc(16*var(--unit))] leading-[1.7] text-body sm:text-[calc(18*var(--unit))] lg:absolute lg:left-[calc(63*var(--unit))] lg:top-[calc(448*var(--unit))] lg:mt-0 lg:whitespace-nowrap lg:text-[calc(21*var(--unit))] lg:leading-[calc(32*var(--unit))] lg:tracking-[0.005em]">
              <Lines lines={experience.descriptionLines} />
            </p>
            {!compact && (
              <Link
                href={experience.link.href}
                data-reveal="up"
                className="group mt-[calc(28*var(--unit))] flex items-center justify-between border-b border-accent-tint-55 pb-[calc(10*var(--unit))] text-[calc(18*var(--unit))] font-semibold text-primary lg:absolute lg:left-[calc(63*var(--unit))] lg:top-[calc(581*var(--unit))] lg:mt-0 lg:h-[calc(36*var(--unit))] lg:w-[calc(475*var(--unit))] lg:items-start lg:pb-0 lg:text-[calc(20*var(--unit))] lg:leading-[calc(28*var(--unit))]"
              >
                {experience.link.label}
                <Icon name="arrow-up-right" className="size-[calc(26*var(--unit))] transition-transform duration-200 group-hover:-translate-y-[calc(2*var(--unit))] group-hover:translate-x-[calc(2*var(--unit))] lg:mt-[calc(2*var(--unit))]" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
