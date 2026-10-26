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
    <section className="relative px-[calc(20*var(--unit))] py-[calc(32*var(--unit))] sm:px-[calc(32*var(--unit))] sm:py-[calc(40*var(--unit))] lg:h-[calc(769*var(--unit))] lg:p-0">
      <div className="lg:items-center lg:gap-[calc(48*var(--unit))] lg:block">
        <div data-reveal-group="left" className="lg:w-auto">
          <SectionLabel text={label} tracking="tracking-[0.34em]" className="lg:absolute lg:left-[calc(112*var(--unit))] lg:top-[calc(48*var(--unit))]" />
          <SectionHeading lines={headingLines} className="mt-[calc(18*var(--unit))] text-[calc(28*var(--unit))] leading-[1.08] sm:text-[calc(52*var(--unit))] lg:absolute lg:left-[calc(112*var(--unit))] lg:top-[calc(85*var(--unit))] lg:mt-0 lg:whitespace-nowrap lg:text-[calc(74*var(--unit))] lg:leading-[calc(70*var(--unit))]" />
          <p className="mt-[calc(16*var(--unit))] max-w-[calc(620*var(--unit))] font-text text-[calc(17*var(--unit))] leading-[1.5] text-[#6a7080] sm:text-[calc(20*var(--unit))] lg:absolute lg:left-[calc(112*var(--unit))] lg:top-[calc(236*var(--unit))] lg:mt-0 lg:max-w-none lg:whitespace-nowrap lg:text-[calc(25*var(--unit))] lg:leading-[calc(33*var(--unit))] lg:tracking-[0.01em]">
            <Lines lines={descriptionLines} />
          </p>

          {/* Quote card */}
          <div
            className="relative mt-[calc(32*var(--unit))] rounded-[calc(28*var(--unit))] bg-[#f6f6f8] px-[calc(22*var(--unit))] pb-[calc(26*var(--unit))] pt-[calc(24*var(--unit))] sm:px-[calc(32*var(--unit))] sm:pb-[calc(32*var(--unit))] sm:pt-[calc(30*var(--unit))] lg:absolute lg:left-[calc(112*var(--unit))] lg:top-[calc(339*var(--unit))] lg:mt-0 lg:h-[calc(335*var(--unit))] lg:w-[calc(803*var(--unit))] lg:rounded-[calc(36*var(--unit))] lg:p-0"
            {...slider.swipe}
          >
            <span className="flex size-[calc(60*var(--unit))] items-center justify-center rounded-full bg-accent-tint-9 text-primary lg:absolute lg:left-[calc(31*var(--unit))] lg:top-[calc(22*var(--unit))] lg:size-[calc(76*var(--unit))]">
              <Icon name="quote" className="size-[calc(38*var(--unit))] lg:size-[calc(50*var(--unit))]" />
            </span>

            <div key={slider.index} className="translate-y-0 transition-[opacity,translate] duration-450 ease-out starting:translate-y-[calc(8*var(--unit))] starting:opacity-0 motion-reduce:transition-none">
              <blockquote className="mt-[calc(18*var(--unit))] font-text text-[calc(17*var(--unit))] leading-[1.6] tracking-[-0.01em] text-[#333333] sm:text-[calc(20*var(--unit))] lg:absolute lg:left-[calc(139*var(--unit))] lg:top-[calc(51*var(--unit))] lg:mt-0 lg:whitespace-nowrap lg:text-[calc(24*var(--unit))] lg:leading-[calc(32*var(--unit))] lg:tracking-[0.005em]">
                <Lines lines={current.quoteLines} />
              </blockquote>

              <span className="mt-[calc(22*var(--unit))] block h-px bg-[#e2e2e6] lg:absolute lg:left-[calc(139*var(--unit))] lg:top-[calc(205*var(--unit))] lg:mt-0 lg:w-[calc(616*var(--unit))]" aria-hidden="true" />

              <div className="mt-[calc(20*var(--unit))] flex items-center gap-[calc(16*var(--unit))] sm:pr-[calc(130*var(--unit))] lg:absolute lg:left-[calc(139*var(--unit))] lg:top-[calc(224*var(--unit))] lg:mt-0 lg:gap-[calc(25*var(--unit))] lg:pr-0">
                {current.avatar ? (
                  <Image src={current.avatar} alt={current.name} width={74} height={74} className="size-[calc(60*var(--unit))] shrink-0 rounded-full object-cover lg:size-[calc(76*var(--unit))]" />
                ) : (
                  <span className="flex size-[calc(60*var(--unit))] shrink-0 items-center justify-center rounded-full bg-primary text-[calc(20*var(--unit))] font-bold text-white lg:size-[calc(76*var(--unit))] lg:text-[calc(24*var(--unit))]" aria-hidden="true">
                    {initials(current.name)}
                  </span>
                )}
                <div>
                  <p className="text-[calc(19*var(--unit))] font-bold leading-[1.2] tracking-[-0.01em] text-ink lg:text-[calc(24*var(--unit))] lg:leading-[calc(28*var(--unit))]">{current.name}</p>
                  <p className="mt-[calc(4*var(--unit))] font-text text-[calc(14*var(--unit))] leading-[1.3] text-[#6f6f6f] lg:mt-[calc(5*var(--unit))] lg:text-[calc(17*var(--unit))] lg:leading-[calc(22*var(--unit))]">{current.role}</p>
                </div>
              </div>
            </div>

            <div className="mt-[calc(20*var(--unit))] flex gap-[calc(12*var(--unit))] sm:absolute sm:bottom-[calc(36*var(--unit))] sm:right-[calc(32*var(--unit))] sm:mt-0 lg:bottom-auto lg:left-[calc(632*var(--unit))] lg:right-auto lg:top-[calc(236*var(--unit))] lg:gap-[calc(15*var(--unit))]">
              <button
                type="button"
                onClick={slider.prev}
                aria-label={carouselText.previous}
                className="flex size-[calc(46*var(--unit))] cursor-pointer items-center justify-center rounded-full bg-[#e9eaec] text-[#333333] transition-colors duration-200 hover:bg-ink hover:text-white lg:size-[calc(54*var(--unit))]"
              >
                <Icon name="chevron-left" className="size-[calc(22*var(--unit))] lg:size-[calc(26*var(--unit))]" />
              </button>
              <button
                type="button"
                onClick={slider.next}
                aria-label={carouselText.next}
                className="flex size-[calc(46*var(--unit))] cursor-pointer items-center justify-center rounded-full bg-primary text-white transition-colors duration-200 hover:bg-ink lg:size-[calc(54*var(--unit))]"
              >
                <Icon name="chevron-right" className="size-[calc(22*var(--unit))] lg:size-[calc(26*var(--unit))]" />
              </button>
            </div>
          </div>

          <SliderDots
            count={testimonials.length}
            active={slider.index}
            onSelect={slider.goTo}
            className="mt-[calc(18*var(--unit))] lg:absolute lg:left-[calc(112*var(--unit))] lg:top-[calc(693*var(--unit))] lg:mt-0 lg:w-[calc(803*var(--unit))]"
          />
        </div>

        {/* Photo */}
        <div className="mt-[calc(48*var(--unit))] lg:grow lg:mt-0">
          <div data-reveal="right" className="relative mx-auto aspect-712/624 w-full max-w-[calc(520*var(--unit))] lg:absolute lg:left-[calc(946*var(--unit))] lg:top-[calc(72*var(--unit))] lg:mx-0 lg:h-[calc(624*var(--unit))] lg:w-[calc(688*var(--unit))] lg:max-w-none">
            <span className="absolute right-0 top-0 h-[75.6%] w-[63.5%] rounded-[9%/8.5%] bg-primary" aria-hidden="true" />
            <DotGrid cols={4} rows={4} gap={21} size={5} color="var(--color-primary-tint-26)" data-float="6000" className="absolute right-[5.6%] top-[6%] hidden sm:block" />
            <div className="absolute left-0 top-[9%] h-[91%] w-[85.25%] overflow-hidden rounded-[7.5%_7.5%_7.5%_22%/8%_8%_8%_23.5%]">
              {/* Each testimonial has its own photo, so it changes together with the name. */}
              <div key={slider.index} className="absolute inset-0 translate-y-0 transition-[opacity,translate] duration-450 ease-out starting:translate-y-[calc(8*var(--unit))] starting:opacity-0 motion-reduce:transition-none">
                <Image src={current.image.src} alt={current.image.alt} fill sizes="(min-width: 80rem) 36vw, 450px" className="object-cover transition-transform duration-700 hover:scale-105" />
              </div>
            </div>
            <div data-float="6000" className="absolute bottom-[5.3%] right-[3.5%] min-w-[40%] rounded-[calc(16*var(--unit))] bg-white px-[calc(16*var(--unit))] py-[calc(12*var(--unit))] shadow-[0_calc(8*var(--unit))_calc(28*var(--unit))_color-mix(in_srgb,var(--color-ink)_12%,transparent)] sm:px-[calc(24*var(--unit))] sm:py-[calc(16*var(--unit))] lg:h-[calc(91*var(--unit))] lg:w-[calc(285*var(--unit))] lg:rounded-[calc(22*var(--unit))] lg:px-[calc(31*var(--unit))] lg:py-0 lg:pt-[calc(19*var(--unit))]">
              <p className="flex gap-[calc(6*var(--unit))] text-primary lg:-ml-[calc(2*var(--unit))] lg:gap-[calc(5*var(--unit))]" aria-label={`${badge.stars}/5`}>
                {Array.from({ length: badge.stars }, (_, i) => (
                  <Icon key={i} name="star" className="size-[calc(16*var(--unit))] lg:size-[calc(24*var(--unit))]" />
                ))}
              </p>
              <p className="mt-[calc(6*var(--unit))] whitespace-nowrap text-[calc(13*var(--unit))] font-semibold leading-[1.3] tracking-[-0.01em] text-ink sm:text-[calc(15*var(--unit))] lg:mt-[calc(8*var(--unit))] lg:text-[calc(18*var(--unit))] lg:leading-[calc(22*var(--unit))]">{badge.text}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
