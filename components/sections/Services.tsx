'use client';

import { useRef, useState } from 'react';
import { ServiceCard } from '@/components/ui/ServiceCard';
import { Lines, SectionHeading, SectionLabel } from '@/components/ui/Text';
import { Pagination } from '@/components/ui/Pagination';
import { ArrowButton, SliderDots, rotate, useSlider } from '@/components/ui/Slider';
import type { ServicesData, ServicesProps } from '@/types/templates.types';

/** The services with these ids, in that order, each numbered by its place ("01", "02", …). */
function pickServices(data: ServicesData, ids: string[]) {
  return ids
    .flatMap((id) => data.services.find((service) => service.id === id) ?? [])
    .map((service, i) => ({ service, number: String(i + 1).padStart(2, '0') }));
}

/** Home: heading plus a slider of the home services. */
const ServicesSlider = ({ data }: { data: ServicesData }) => {
  const items = pickServices(data, data.homeServiceIds);
  const slider = useSlider(items.length);
  const { label, title, titleHighlight, description } = data;
  const ordered = rotate(items, slider.index);

  return (
    <section className="relative px-[calc(20*var(--unit))] py-[calc(32*var(--unit))] sm:px-[calc(32*var(--unit))] sm:py-[calc(40*var(--unit))] lg:h-[calc(803*var(--unit))] lg:p-0">
      <div data-reveal-group="up" className="flex flex-col items-center text-center lg:pt-[calc(48*var(--unit))]">
        <SectionLabel text={label} />
        <SectionHeading title={title} highlight={titleHighlight} className="mt-[calc(18*var(--unit))] text-[calc(28*var(--unit))] leading-[1.08] sm:text-[calc(52*var(--unit))] lg:mt-[calc(20*var(--unit))] lg:text-[calc(68*var(--unit))] lg:leading-[calc(65*var(--unit))]" />
        <p className="mt-[calc(18*var(--unit))] max-w-[calc(640*var(--unit))] font-ui text-[calc(16*var(--unit))] leading-[1.7] text-[var(--color-section-text)] sm:text-[calc(18*var(--unit))] lg:mt-[calc(13*var(--unit))] lg:max-w-none lg:text-[calc(20*var(--unit))] lg:leading-[calc(31*var(--unit))] lg:tracking-[0.025em]">
          <Lines text={description} />
        </p>
      </div>

      <div data-reveal="up" className="relative mt-[calc(36*var(--unit))] lg:absolute lg:left-[calc(81*var(--unit))] lg:top-[calc(323*var(--unit))] lg:mt-0 lg:w-[calc(1533*var(--unit))]">
        {/* Only as many cards as fit are visible; the arrows rotate the list. */}
        <div className="-m-[calc(12*var(--unit))] overflow-hidden p-[calc(12*var(--unit))]" {...slider.swipe}>
          <ul key={slider.index} className="flex translate-x-0 transition-[opacity,transform] duration-450 ease-out starting:translate-x-[calc(24*var(--unit))] starting:opacity-0 motion-reduce:transition-none gap-[calc(24*var(--unit))] lg:gap-[calc(23*var(--unit))]">
            {ordered.map(({ service, number }) => (
              <li
                key={service.id}
                className="w-full shrink-0 sm:w-[calc((100%-calc(24*var(--unit)))/2)] lg:w-[calc(366*var(--unit))]"
              >
                <ServiceCard service={service} number={number} icon={data.cardIcon} />
              </li>
            ))}
          </ul>
        </div>

        <ArrowButton label={data.previousLabel} icon={data.previousIcon} onClick={slider.prev} className="hidden md:flex absolute -left-[calc(14*var(--unit))] top-[38%] z-10 lg:-left-[calc(18*var(--unit))] lg:top-[calc(166*var(--unit))]" />
        <ArrowButton label={data.nextLabel} icon={data.nextIcon} onClick={slider.next} className="hidden md:flex absolute -right-[calc(14*var(--unit))] top-[38%] z-10 lg:-right-[calc(20*var(--unit))] lg:top-[calc(166*var(--unit))]" />
      </div>

      <SliderDots count={items.length} active={slider.index} onSelect={slider.goTo} label={data.goToSlideLabel} className="mt-[calc(24*var(--unit))] lg:absolute lg:inset-x-0 lg:top-[calc(735*var(--unit))] lg:mt-0" />
    </section>
  );
};

/** Services page: heading plus a paged grid of the listed services. */
const ServicesGrid = ({ data }: { data: ServicesData }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const sectionRef = useRef<HTMLElement>(null);
  const items = pickServices(data, data.listingServiceIds);
  const { label, title, titleHighlight, description, pagination, pageSize } = data;
  const pageCount = Math.ceil(items.length / pageSize);
  const visibleItems = items.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  const goToPage = (page: number) => {
    setCurrentPage(page);
    sectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section ref={sectionRef} className="scroll-mt-[calc(80*var(--unit))] px-[calc(20*var(--unit))] py-[calc(32*var(--unit))] sm:px-[calc(32*var(--unit))] sm:py-[calc(40*var(--unit))] lg:scroll-mt-[calc(120*var(--unit))] lg:px-0 lg:py-[calc(48*var(--unit))]">
      <div data-reveal-group="up" className="flex flex-col items-center text-center">
        <SectionLabel text={label} />
        <SectionHeading title={title} highlight={titleHighlight} className="mt-[calc(18*var(--unit))] text-[calc(28*var(--unit))] leading-[1.08] sm:text-[calc(52*var(--unit))] lg:mt-[calc(20*var(--unit))] lg:text-[calc(68*var(--unit))] lg:leading-[calc(64*var(--unit))]" />
        <p className="mt-[calc(18*var(--unit))] max-w-[calc(640*var(--unit))] font-ui text-[calc(16*var(--unit))] leading-[1.7] text-[var(--color-section-text)] sm:text-[calc(18*var(--unit))] lg:mt-[calc(16*var(--unit))] lg:max-w-none lg:text-[calc(21*var(--unit))] lg:leading-[calc(31*var(--unit))] lg:tracking-[-0.005em]">
          <Lines text={description} />
        </p>
      </div>

      <ul data-reveal-group="up" className="mt-[calc(36*var(--unit))] grid gap-[calc(24*var(--unit))] sm:grid-cols-2 lg:ml-[calc(84*var(--unit))] lg:mt-[calc(42*var(--unit))] lg:w-[calc(1533*var(--unit))] lg:grid-cols-4 lg:gap-x-[calc(24*var(--unit))] lg:gap-y-[calc(53*var(--unit))]">
        {visibleItems.map(({ service, number }) => (
          <li key={service.id}>
            <ServiceCard service={service} number={number} icon={data.cardIcon} className="overflow-hidden rounded-[calc(6*var(--unit))]" />
          </li>
        ))}
      </ul>

      {items.length > 0 && <Pagination page={currentPage} pageCount={pageCount} onChange={goToPage} labels={pagination} />}
    </section>
  );
};

/** Our services: the Home slider, or with `showAll` the paged grid of the Services page. */
export const Services = ({ data, showAll = false }: ServicesProps) => {
  if (!data) return null;
  return showAll ? <ServicesGrid data={data} /> : <ServicesSlider data={data} />;
};
