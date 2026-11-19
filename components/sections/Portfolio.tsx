'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import { Lines, SectionLabel, headingLines } from '@/components/ui/Text';
import { Pagination } from '@/components/ui/Pagination';
import type { PortfolioProps } from '@/types/templates.types';


/** Heading plus a paginated grid of portfolio projects (photo, name and tags). */
export const Portfolio = ({ data }: PortfolioProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const sectionRef = useRef<HTMLElement>(null);
  if (!data) return null;
  const { label, title, titleHighlight, description, projects, pagination, pageSize } = data;
  const pageCount = Math.ceil(projects.length / pageSize);
  const visibleProjects = projects.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  const goToPage = (page: number) => {
    setCurrentPage(page);
    sectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section ref={sectionRef} className="scroll-mt-[calc(80*var(--unit))] px-[calc(20*var(--unit))] py-[calc(32*var(--unit))] sm:px-[calc(32*var(--unit))] sm:py-[calc(40*var(--unit))] lg:scroll-mt-[calc(120*var(--unit))] lg:px-0 lg:py-[calc(48*var(--unit))]">
      <div data-reveal-group="up" className="flex flex-col items-center text-center">
        <SectionLabel text={label} tracking="tracking-[0.24em]" className="[&>span:nth-child(2)]:font-bold [&>span:nth-child(odd)]:bg-[var(--color-accent)]" />
        <h2 className="mt-[calc(18*var(--unit))] text-[calc(30*var(--unit))] font-black leading-[1.1] tracking-[-0.02em] text-[var(--color-portfolio-heading)] sm:text-[calc(52*var(--unit))] lg:mt-[calc(34*var(--unit))] lg:text-[calc(70*var(--unit))] lg:leading-[calc(70*var(--unit))]">
          {headingLines(title, titleHighlight).map((line, i) => (
            <span key={i} className="block">
              {line.map((part) => (
                <span key={part.text} className={part.highlight ? 'text-[var(--color-accent)]' : ''}>
                  {part.text}
                </span>
              ))}
            </span>
          ))}
        </h2>
        <p className="mt-[calc(18*var(--unit))] max-w-[calc(640*var(--unit))] font-ui text-[calc(16*var(--unit))] leading-[1.7] text-[var(--color-section-text)] sm:text-[calc(18*var(--unit))] lg:mt-[calc(18*var(--unit))] lg:max-w-none lg:text-[calc(23*var(--unit))] lg:leading-[calc(33*var(--unit))] lg:tracking-[0.005em]">
          <Lines text={description} />
        </p>
      </div>

      <ul data-reveal-group="zoom" className="mt-[calc(36*var(--unit))] grid gap-x-[calc(24*var(--unit))] gap-y-[calc(40*var(--unit))] sm:grid-cols-2 lg:grid-cols-3 lg:ml-[calc(141*var(--unit))] lg:mt-[calc(43*var(--unit))] lg:w-[calc(1396*var(--unit))] lg:gap-x-[calc(27*var(--unit))] lg:gap-y-[calc(58*var(--unit))]">
        {visibleProjects.map((project) => (
          <li key={project.id} className="group">
            <div className="overflow-hidden rounded-[calc(8*var(--unit))]">
            <Image
              src={project.image}
              alt={project.imageAlt}
              width={project.imageWidth}
              height={project.imageHeight}
              sizes="(min-width: 64rem) 27vw, (min-width: 40rem) 50vw, 100vw"
              className="h-auto w-full transition-transform duration-700 group-hover:scale-105"
            />
            </div>
            <h3 className="mt-[calc(18*var(--unit))] text-[calc(22*var(--unit))] font-black leading-[1.2] tracking-[0.01em] text-[var(--color-portfolio-heading)] sm:text-[calc(25*var(--unit))] lg:mt-[calc(19*var(--unit))] lg:text-[calc(32*var(--unit))] lg:leading-[calc(38*var(--unit))]">{project.title}</h3>
            <ul className="mt-[calc(14*var(--unit))] flex flex-wrap gap-[calc(10*var(--unit))] lg:mt-[calc(21*var(--unit))] lg:gap-[calc(11*var(--unit))]">
              {project.tags.map((tag) => (
                <li key={tag.id} className="rounded-full bg-[var(--color-accent-tint-9)] px-[calc(18*var(--unit))] py-[calc(9*var(--unit))] text-[calc(15*var(--unit))] font-medium leading-none text-[var(--color-accent)] lg:flex lg:h-[calc(45*var(--unit))] lg:items-center lg:px-[calc(22*var(--unit))] lg:py-0 lg:text-[calc(19*var(--unit))]">
                  {tag.text}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>

      {projects.length > 0 && <Pagination page={currentPage} pageCount={pageCount} onChange={goToPage} labels={pagination} tone="accent" />}
    </section>
  );
};
