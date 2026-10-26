"use client";

import ServiceCard from "./ServiceCard";
import { Lines, SectionHeading, SectionLabel } from "./ui";
import { ArrowButton, SliderDots, rotate, useSlider } from "./slider";
import { site } from "@/data";

const { label, headingLines, descriptionLines, services } = site.services;

export default function ServicesSection() {
  const slider = useSlider(services.length);
  const ordered = rotate(services, slider.index);

  return (
    <section className="relative px-[calc(20*var(--unit))] py-[calc(32*var(--unit))] sm:px-[calc(32*var(--unit))] sm:py-[calc(40*var(--unit))] lg:h-[calc(803*var(--unit))] lg:p-0">
      <div data-reveal-group="up" className="flex flex-col items-center text-center lg:pt-[calc(48*var(--unit))]">
        <SectionLabel text={label} />
        <SectionHeading lines={headingLines} className="mt-[calc(18*var(--unit))] text-[calc(28*var(--unit))] leading-[1.08] sm:text-[calc(52*var(--unit))] lg:mt-[calc(20*var(--unit))] lg:text-[calc(68*var(--unit))] lg:leading-[calc(65*var(--unit))]" />
        <p className="mt-[calc(18*var(--unit))] max-w-[calc(640*var(--unit))] font-ui text-[calc(16*var(--unit))] leading-[1.7] text-[#5f6779] sm:text-[calc(18*var(--unit))] lg:mt-[calc(13*var(--unit))] lg:max-w-none lg:text-[calc(20*var(--unit))] lg:leading-[calc(31*var(--unit))] lg:tracking-[0.025em]">
          <Lines lines={descriptionLines} />
        </p>
      </div>

      <div data-reveal="up" className="relative mt-[calc(36*var(--unit))] lg:absolute lg:left-[calc(81*var(--unit))] lg:top-[calc(323*var(--unit))] lg:mt-0 lg:w-[calc(1533*var(--unit))]">
        {/* Only as many cards as fit are visible; the arrows rotate the list. */}
        <div className="-m-[calc(12*var(--unit))] overflow-hidden p-[calc(12*var(--unit))]" {...slider.swipe}>
          <ul key={slider.index} className="flex translate-x-0 transition-[opacity,translate] duration-450 ease-out starting:translate-x-[calc(24*var(--unit))] starting:opacity-0 motion-reduce:transition-none gap-[calc(24*var(--unit))] lg:gap-[calc(23*var(--unit))]">
            {ordered.map((service) => (
              <li
                key={service.number}
                className="w-full shrink-0 sm:w-[calc((100%-calc(24*var(--unit)))/2)] lg:w-[calc(366*var(--unit))]"
              >
                <ServiceCard service={service} />
              </li>
            ))}
          </ul>
        </div>

        <ArrowButton direction="previous" icon="arrow-left" onClick={slider.prev} className="hidden md:flex absolute -left-[calc(14*var(--unit))] top-[38%] z-10 lg:-left-[calc(18*var(--unit))] lg:top-[calc(166*var(--unit))]" />
        <ArrowButton direction="next" icon="arrow-right" onClick={slider.next} className="hidden md:flex absolute -right-[calc(14*var(--unit))] top-[38%] z-10 lg:-right-[calc(20*var(--unit))] lg:top-[calc(166*var(--unit))]" />
      </div>

      <SliderDots count={services.length} active={slider.index} onSelect={slider.goTo} className="mt-[calc(24*var(--unit))] lg:absolute lg:inset-x-0 lg:top-[calc(735*var(--unit))] lg:mt-0" />
    </section>
  );
}
