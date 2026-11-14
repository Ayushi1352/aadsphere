"use client";

import { BlogCard } from "@/components/ui/BlogCard";
import { Lines, SectionHeading, SectionLabel } from "@/components/ui/Text";
import { ArrowButton, SliderDots, rotate, useSlider } from "@/components/ui/Slider";
import type { BlogSectionProps } from "@/types/templates.types";

export const BlogSection = ({ data }: BlogSectionProps) => {
  const slider = useSlider(data?.posts.length ?? 0);
  if (!data) return null;
  const { label, headingLines, descriptionLines, posts } = data;
  const ordered = rotate(posts, slider.index);

  return (
    <section className="relative px-[calc(20*var(--unit))] py-[calc(32*var(--unit))] sm:px-[calc(32*var(--unit))] sm:py-[calc(40*var(--unit))] lg:h-[calc(798*var(--unit))] lg:p-0">
      <div data-reveal-group="up" className="flex flex-col items-center text-center lg:pt-[calc(48*var(--unit))]">
        <SectionLabel text={label} tracking="tracking-[0.22em]" />
        <SectionHeading lines={headingLines} className="mt-[calc(18*var(--unit))] text-[calc(28*var(--unit))] leading-[1.08] sm:text-[calc(52*var(--unit))] lg:mt-[calc(15*var(--unit))] lg:text-[calc(65*var(--unit))] lg:leading-[calc(62*var(--unit))] lg:tracking-[-0.01em]" />
        <p className="mt-[calc(18*var(--unit))] max-w-[calc(640*var(--unit))] font-ui text-[calc(16*var(--unit))] leading-[1.7] text-[var(--color-section-text)] sm:text-[calc(18*var(--unit))] lg:mt-[calc(9*var(--unit))] lg:max-w-none lg:text-[calc(20*var(--unit))] lg:leading-[calc(28*var(--unit))] lg:tracking-[0.012em]">
          <Lines lines={descriptionLines} />
        </p>
      </div>

      <div data-reveal="up" className="relative mt-[calc(36*var(--unit))] lg:absolute lg:left-[calc(78*var(--unit))] lg:top-[calc(286*var(--unit))] lg:mt-0 lg:w-[calc(1535*var(--unit))]">
        <div className="-m-[calc(12*var(--unit))] overflow-hidden p-[calc(12*var(--unit))]" {...slider.swipe}>
          <ul key={slider.index} className="flex translate-x-0 transition-[opacity,transform] duration-450 ease-out starting:translate-x-[calc(24*var(--unit))] starting:opacity-0 motion-reduce:transition-none gap-[calc(24*var(--unit))] lg:gap-[calc(25*var(--unit))]">
            {ordered.map((post) => (
              <li
                key={post.titleLines.join(" ")}
                className="w-full shrink-0 md:w-[calc((100%-calc(24*var(--unit)))/2)] lg:w-[calc(495*var(--unit))]"
              >
                <BlogCard post={post} />
              </li>
            ))}
          </ul>
        </div>

        <ArrowButton label={data.previousLabel} icon="LuChevronLeft" onClick={slider.prev} className="hidden md:flex absolute -left-[calc(14*var(--unit))] top-[26%] z-10 lg:-left-[calc(15*var(--unit))] lg:top-[calc(165*var(--unit))]" />
        <ArrowButton label={data.nextLabel} icon="LuChevronRight" onClick={slider.next} className="hidden md:flex absolute -right-[calc(14*var(--unit))] top-[26%] z-10 lg:-right-[calc(21*var(--unit))] lg:top-[calc(165*var(--unit))]" />
      </div>

      <SliderDots count={posts.length} active={slider.index} onSelect={slider.goTo} label={data.goToSlideLabel} className="mt-[calc(24*var(--unit))] lg:absolute lg:inset-x-0 lg:top-[calc(730*var(--unit))] lg:mt-0" />
    </section>
  );
};
