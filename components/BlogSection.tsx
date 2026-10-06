"use client";

import BlogCard from "./BlogCard";
import { Lines, SectionHeading, SectionLabel } from "./ui";
import { ArrowButton, SliderDots, rotate, useSlider } from "./slider";
import { site } from "@/data";

const { label, headingLines, descriptionLines, posts } = site.blog;

export default function BlogSection() {
  const slider = useSlider(posts.length);
  const ordered = rotate(posts, slider.index);

  return (
    <section className="relative px-20 py-32 sm:px-32 sm:py-40 xl:h-798 xl:p-0">
      <div data-reveal-group="up" className="flex flex-col items-center text-center xl:pt-48">
        <SectionLabel text={label} tracking="tracking-[0.22em]" />
        <SectionHeading lines={headingLines} className="mt-18 fs-28 leading-[1.08] sm:fs-52 xl:mt-15 xl:fs-65 xl:leading-62 xl:tracking-[-0.01em]" />
        <p className="mt-18 max-w-640 font-inter fs-16 leading-[1.7] text-slate sm:fs-18 xl:mt-9 xl:max-w-none xl:fs-20 xl:leading-28 xl:tracking-[0.012em]">
          <Lines lines={descriptionLines} />
        </p>
      </div>

      <div data-reveal="up" className="relative mt-36 xl:absolute xl:left-78 xl:top-286 xl:mt-0 xl:w-1535">
        <div className="-m-12 overflow-hidden p-12" {...slider.swipe}>
          <ul key={slider.index} className="flex animate-slide-in gap-24 xl:gap-25">
            {ordered.map((post) => (
              <li
                key={post.href}
                className="w-full shrink-0 md:w-[calc((100%-1.5rem)/2)] xl:w-495"
              >
                <BlogCard post={post} />
              </li>
            ))}
          </ul>
        </div>

        <ArrowButton direction="previous" icon="chevron-left" onClick={slider.prev} className="absolute -left-14 top-[26%] z-10 xl:-left-15 xl:top-165" />
        <ArrowButton direction="next" icon="chevron-right" onClick={slider.next} className="absolute -right-14 top-[26%] z-10 xl:-right-21 xl:top-165" />
      </div>

      <SliderDots count={posts.length} active={slider.index} onSelect={slider.goTo} className="mt-24 xl:absolute xl:inset-x-0 xl:top-730 xl:mt-0" />
    </section>
  );
}
