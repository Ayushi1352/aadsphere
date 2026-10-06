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
    <section className="relative px-20 py-32 sm:px-32 sm:py-40 xl:h-803 xl:p-0">
      <div data-reveal-group="up" className="flex flex-col items-center text-center xl:pt-48">
        <SectionLabel text={label} />
        <SectionHeading lines={headingLines} className="mt-18 fs-28 leading-[1.08] sm:fs-52 xl:mt-20 xl:fs-68 xl:leading-65" />
        <p className="mt-18 max-w-640 font-inter fs-16 leading-[1.7] text-slate sm:fs-18 xl:mt-13 xl:max-w-none xl:fs-20 xl:leading-31 xl:tracking-[0.025em]">
          <Lines lines={descriptionLines} />
        </p>
      </div>

      <div data-reveal="up" className="relative mt-36 xl:absolute xl:left-81 xl:top-323 xl:mt-0 xl:w-1533">
        {/* Only as many cards as fit are visible; the arrows rotate the list. */}
        <div className="-m-12 overflow-hidden p-12" {...slider.swipe}>
          <ul key={slider.index} className="flex animate-slide-in gap-24 xl:gap-23">
            {ordered.map((service) => (
              <li
                key={service.number}
                className="w-full shrink-0 sm:w-[calc((100%-1.5rem)/2)] lg:w-[calc((100%-3rem)/3)] xl:w-366"
              >
                <ServiceCard service={service} />
              </li>
            ))}
          </ul>
        </div>

        <ArrowButton direction="previous" icon="arrow-left" onClick={slider.prev} className="absolute -left-14 top-[38%] z-10 xl:-left-18 xl:top-166" />
        <ArrowButton direction="next" icon="arrow-right" onClick={slider.next} className="absolute -right-14 top-[38%] z-10 xl:-right-20 xl:top-166" />
      </div>

      <SliderDots count={services.length} active={slider.index} onSelect={slider.goTo} className="mt-24 xl:absolute xl:inset-x-0 xl:top-735 xl:mt-0" />
    </section>
  );
}
