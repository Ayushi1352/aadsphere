"use client";

import Image from "next/image";
import Icon from "./icons";
import { DotGrid, Lines, SectionHeading, SectionLabel } from "./ui";
import { SliderDots, useSlider } from "./slider";
import { site } from "@/data";

const { label, headingLines, descriptionLines, badge, testimonials } = site.testimonial;
const carouselText = site.siteMeta.text.Carousel;

function initials(name: string) {
  return name
    .split(" ")
    .map((word) => word[0])
    .slice(0, 2)
    .join("");
}

export default function TestimonialsSection() {
  const slider = useSlider(testimonials.length);
  const current = testimonials[slider.index];

  return (
    <section className="relative px-20 py-32 sm:px-32 sm:py-40 xl:h-769 xl:p-0">
      <div className="lg:flex lg:items-center lg:gap-48 xl:block">
        <div data-reveal-group="left" className="lg:w-[56%] xl:w-auto">
          <SectionLabel text={label} tracking="tracking-[0.34em]" className="xl:absolute xl:left-112 xl:top-48" />
          <SectionHeading lines={headingLines} className="mt-18 fs-28 leading-[1.08] sm:fs-52 xl:absolute xl:left-112 xl:top-85 xl:mt-0 xl:whitespace-nowrap xl:fs-74 xl:leading-70" />
          <p className="mt-16 max-w-620 font-text fs-17 leading-[1.5] text-[#6a7080] sm:fs-20 xl:absolute xl:left-112 xl:top-236 xl:mt-0 xl:max-w-none xl:whitespace-nowrap xl:fs-25 xl:leading-33 xl:tracking-[0.01em]">
            <Lines lines={descriptionLines} />
          </p>

          {/* Quote card */}
          <div
            className="relative mt-32 r-28 bg-[#f6f6f8] px-22 pb-26 pt-24 sm:px-32 sm:pb-32 sm:pt-30 xl:absolute xl:left-112 xl:top-339 xl:mt-0 xl:h-335 xl:w-803 xl:r-36 xl:p-0"
            {...slider.swipe}
          >
            <span className="flex size-60 items-center justify-center rounded-full bg-[#f7ddde] text-[#6e0a12] xl:absolute xl:left-31 xl:top-22 xl:size-76">
              <Icon name="quote" className="size-38 xl:size-50" />
            </span>

            <div key={slider.index} className="animate-fade-in">
              <blockquote className="mt-18 font-text fs-17 leading-[1.6] tracking-[-0.01em] text-[#333333] sm:fs-20 xl:absolute xl:left-139 xl:top-51 xl:mt-0 xl:whitespace-nowrap xl:fs-24 xl:leading-32 xl:tracking-[0.005em]">
                <Lines lines={current.quoteLines} />
              </blockquote>

              <span className="mt-22 block h-px bg-[#e2e2e6] xl:absolute xl:left-139 xl:top-205 xl:mt-0 xl:w-616" aria-hidden="true" />

              <div className="mt-20 flex items-center gap-16 sm:pr-130 xl:absolute xl:left-139 xl:top-224 xl:mt-0 xl:gap-25 xl:pr-0">
                {current.avatar ? (
                  <Image src={current.avatar} alt={current.name} width={74} height={74} className="size-60 shrink-0 rounded-full object-cover xl:size-76" />
                ) : (
                  <span className="flex size-60 shrink-0 items-center justify-center rounded-full bg-brand fs-20 font-bold text-white xl:size-76 xl:fs-24" aria-hidden="true">
                    {initials(current.name)}
                  </span>
                )}
                <div>
                  <p className="fs-19 font-bold leading-[1.2] tracking-[-0.01em] text-ink xl:fs-24 xl:leading-28">{current.name}</p>
                  <p className="mt-4 font-text fs-14 leading-[1.3] text-[#6f6f6f] xl:mt-5 xl:fs-17 xl:leading-22">{current.role}</p>
                </div>
              </div>
            </div>

            <div className="mt-20 flex gap-12 sm:absolute sm:bottom-36 sm:right-32 sm:mt-0 xl:bottom-auto xl:left-632 xl:right-auto xl:top-236 xl:gap-15">
              <button
                type="button"
                onClick={slider.prev}
                aria-label={carouselText.previous}
                className="flex size-46 cursor-pointer items-center justify-center rounded-full bg-[#e9eaec] text-[#333333] transition-colors duration-200 hover:bg-ink hover:text-white xl:size-54"
              >
                <Icon name="chevron-left" className="size-22 xl:size-26" />
              </button>
              <button
                type="button"
                onClick={slider.next}
                aria-label={carouselText.next}
                className="flex size-46 cursor-pointer items-center justify-center rounded-full bg-[#780309] text-white transition-colors duration-200 hover:bg-ink xl:size-54"
              >
                <Icon name="chevron-right" className="size-22 xl:size-26" />
              </button>
            </div>
          </div>

          <SliderDots
            count={testimonials.length}
            active={slider.index}
            onSelect={slider.goTo}
            className="mt-18 xl:absolute xl:left-112 xl:top-693 xl:mt-0 xl:w-803"
          />
        </div>

        {/* Photo */}
        <div className="mt-48 lg:mt-0 lg:grow xl:mt-0">
          <div data-reveal="right" className="relative mx-auto aspect-712/624 w-full max-w-520 xl:absolute xl:left-946 xl:top-72 xl:mx-0 xl:h-624 xl:w-688 xl:max-w-none">
            <span className="absolute right-0 top-0 h-[75.6%] w-[63.5%] rounded-[9%/8.5%] bg-[#6e0107]" aria-hidden="true" />
            <DotGrid cols={4} rows={4} gap={21} size={5} color="#e3b7ba" className="absolute right-[5.6%] top-[6%] hidden animate-float sm:block" />
            <div className="absolute left-0 top-[9%] h-[91%] w-[85.25%] overflow-hidden rounded-[7.5%_7.5%_7.5%_22%/8%_8%_8%_23.5%]">
              {/* Each testimonial has its own photo, so it changes together with the name. */}
              <div key={slider.index} className="absolute inset-0 animate-fade-in">
                <Image src={current.image.src} alt={current.image.alt} fill sizes="(min-width: 80rem) 36vw, 450px" className="object-cover transition-transform duration-700 hover:scale-105" />
              </div>
            </div>
            <div className="absolute bottom-[5.3%] right-[3.5%] min-w-[40%] animate-float r-16 bg-white px-16 py-12 shadow-[0_0.5rem_1.75rem_rgba(20,20,20,0.12)] sm:px-24 sm:py-16 xl:h-91 xl:w-285 xl:r-22 xl:px-31 xl:py-0 xl:pt-19">
              <p className="flex gap-6 text-[#c4012d] xl:-ml-2 xl:gap-5" aria-label={`${badge.stars}/5`}>
                {Array.from({ length: badge.stars }, (_, i) => (
                  <Icon key={i} name="star" className="size-16 xl:size-24" />
                ))}
              </p>
              <p className="mt-6 whitespace-nowrap fs-13 font-semibold leading-[1.3] tracking-[-0.01em] text-ink sm:fs-15 xl:mt-8 xl:fs-18 xl:leading-22">{badge.text}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
