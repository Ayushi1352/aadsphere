'use client';

import { useRef, useState } from 'react';
import { BlogCard } from '@/components/ui/BlogCard';
import { Lines, SectionHeading, SectionLabel } from '@/components/ui/Text';
import { Pagination } from '@/components/ui/Pagination';
import { ArrowButton, SliderDots, rotate, useSlider } from '@/components/ui/Slider';
import type { BlogsData, BlogsProps } from '@/types/templates.types';

/** The posts with these ids, in that order. */
function pickPosts(data: BlogsData, ids: string[]) {
  return ids.flatMap((id) => data.posts.find((post) => post.id === id) ?? []);
}

/** Home: heading plus a slider of the home posts. */
const BlogsSlider = ({ data }: { data: BlogsData }) => {
  const posts = pickPosts(data, data.homePostIds);
  const slider = useSlider(posts.length);
  const { label, title, titleHighlight, description } = data;
  const ordered = rotate(posts, slider.index);

  return (
    <section className="relative px-[calc(20*var(--unit))] py-[calc(32*var(--unit))] sm:px-[calc(32*var(--unit))] sm:py-[calc(40*var(--unit))] lg:h-[calc(798*var(--unit))] lg:p-0">
      <div data-reveal-group="up" className="flex flex-col items-center text-center lg:pt-[calc(48*var(--unit))]">
        <SectionLabel text={label} tracking="tracking-[0.22em]" />
        <SectionHeading title={title} highlight={titleHighlight} className="mt-[calc(18*var(--unit))] text-[calc(28*var(--unit))] leading-[1.08] sm:text-[calc(52*var(--unit))] lg:mt-[calc(15*var(--unit))] lg:text-[calc(65*var(--unit))] lg:leading-[calc(62*var(--unit))] lg:tracking-[-0.01em]" />
        <p className="mt-[calc(18*var(--unit))] max-w-[calc(640*var(--unit))] font-ui text-[calc(16*var(--unit))] leading-[1.7] text-[var(--color-section-text)] sm:text-[calc(18*var(--unit))] lg:mt-[calc(9*var(--unit))] lg:max-w-none lg:text-[calc(20*var(--unit))] lg:leading-[calc(28*var(--unit))] lg:tracking-[0.012em]">
          <Lines text={description} />
        </p>
      </div>

      <div data-reveal="up" className="relative mt-[calc(36*var(--unit))] lg:absolute lg:left-[calc(78*var(--unit))] lg:top-[calc(286*var(--unit))] lg:mt-0 lg:w-[calc(1535*var(--unit))]">
        <div className="-m-[calc(12*var(--unit))] overflow-hidden p-[calc(12*var(--unit))]" {...slider.swipe}>
          <ul key={slider.index} className="flex translate-x-0 transition-[opacity,transform] duration-450 ease-out starting:translate-x-[calc(24*var(--unit))] starting:opacity-0 motion-reduce:transition-none gap-[calc(24*var(--unit))] lg:gap-[calc(25*var(--unit))]">
            {ordered.map((post) => (
              <li
                key={post.id}
                className="w-full shrink-0 md:w-[calc((100%-calc(24*var(--unit)))/2)] lg:w-[calc(495*var(--unit))]"
              >
                <BlogCard post={post} icon={data.cardIcon} categorySeparator={data.categorySeparator} />
              </li>
            ))}
          </ul>
        </div>

        <ArrowButton label={data.previousLabel} icon={data.previousIcon} onClick={slider.prev} className="hidden md:flex absolute -left-[calc(14*var(--unit))] top-[26%] z-10 lg:-left-[calc(15*var(--unit))] lg:top-[calc(165*var(--unit))]" />
        <ArrowButton label={data.nextLabel} icon={data.nextIcon} onClick={slider.next} className="hidden md:flex absolute -right-[calc(14*var(--unit))] top-[26%] z-10 lg:-right-[calc(21*var(--unit))] lg:top-[calc(165*var(--unit))]" />
      </div>

      <SliderDots count={posts.length} active={slider.index} onSelect={slider.goTo} label={data.goToSlideLabel} className="mt-[calc(24*var(--unit))] lg:absolute lg:inset-x-0 lg:top-[calc(730*var(--unit))] lg:mt-0" />
    </section>
  );
};

/** Blog page: heading plus a paged grid of the listed posts. */
const BlogGrid = ({ data }: { data: BlogsData }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const sectionRef = useRef<HTMLElement>(null);
  const posts = pickPosts(data, data.listingPostIds);
  const { label, title, titleHighlight, description, pagination, pageSize } = data;
  const pageCount = Math.ceil(posts.length / pageSize);
  const visiblePosts = posts.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  const goToPage = (page: number) => {
    setCurrentPage(page);
    sectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section ref={sectionRef} className="scroll-mt-[calc(80*var(--unit))] px-[calc(20*var(--unit))] py-[calc(32*var(--unit))] sm:px-[calc(32*var(--unit))] sm:py-[calc(40*var(--unit))] lg:scroll-mt-[calc(120*var(--unit))] lg:px-0 lg:py-[calc(48*var(--unit))]">
      <div data-reveal-group="up" className="flex flex-col items-center text-center">
        <SectionLabel text={label} tracking="tracking-[0.22em]" />
        <SectionHeading title={title} highlight={titleHighlight} className="mt-[calc(18*var(--unit))] text-[calc(28*var(--unit))] leading-[1.08] sm:text-[calc(52*var(--unit))] lg:mt-[calc(18*var(--unit))] lg:text-[calc(65*var(--unit))] lg:leading-[calc(62*var(--unit))] lg:tracking-[-0.01em]" />
        <p className="mt-[calc(18*var(--unit))] max-w-[calc(640*var(--unit))] font-ui text-[calc(16*var(--unit))] leading-[1.7] text-[var(--color-section-text)] sm:text-[calc(18*var(--unit))] lg:mt-[calc(3*var(--unit))] lg:max-w-none lg:text-[calc(21*var(--unit))] lg:leading-[calc(28*var(--unit))] lg:tracking-[-0.012em]">
          <Lines text={description} />
        </p>
      </div>

      <ul data-reveal-group="up" className="mt-[calc(36*var(--unit))] grid gap-[calc(24*var(--unit))] md:grid-cols-2 lg:ml-[calc(77*var(--unit))] lg:mt-[calc(34*var(--unit))] lg:w-[calc(1535*var(--unit))] lg:grid-cols-3 lg:gap-x-[calc(25*var(--unit))] lg:gap-y-[calc(65*var(--unit))]">
        {visiblePosts.map((post) => (
          <li key={post.id}>
            <BlogCard post={post} icon={data.cardIcon} categorySeparator={data.categorySeparator} />
          </li>
        ))}
      </ul>

      {pageCount > 1 && <Pagination page={currentPage} pageCount={pageCount} onChange={goToPage} labels={pagination} />}
    </section>
  );
};

/** Our blogs: the Home slider, or with `showAll` the paged grid of the Blog page. */
export const Blogs = ({ data, showAll = false }: BlogsProps) => {
  if (!data) return null;
  return showAll ? <BlogGrid data={data} /> : <BlogsSlider data={data} />;
};
