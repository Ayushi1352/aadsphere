"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { Lines, SectionLabel } from "@/components/ui";
import { fill, site } from "@/data";

const { label, headingLines, descriptionLines, projects, pagination } = site.portfolio;
const paginationText = site.siteMeta.text.Pagination;
const pageSize = 8;

/** Heading plus a paginated grid of portfolio projects (photo, name and tags). */
export default function ProjectsGrid() {
  const [currentPage, setCurrentPage] = useState(1);
  const sectionRef = useRef<HTMLElement>(null);
  const pageCount = Math.ceil(projects.length / pageSize);
  const visibleProjects = projects.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  const goToPage = (page: number) => {
    setCurrentPage(page);
    sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section ref={sectionRef} className="scroll-mt-[calc(80*var(--unit))] px-[calc(20*var(--unit))] py-[calc(32*var(--unit))] sm:px-[calc(32*var(--unit))] sm:py-[calc(40*var(--unit))] lg:scroll-mt-[calc(120*var(--unit))] lg:px-0 lg:py-[calc(48*var(--unit))]">
      <div data-reveal-group="up" className="flex flex-col items-center text-center">
        <SectionLabel text={label} tracking="tracking-[0.24em]" className="[&>span:nth-child(2)]:font-bold [&>span:nth-child(odd)]:bg-[#d60c14]" />
        <h2 className="mt-[calc(18*var(--unit))] text-[calc(30*var(--unit))] font-black leading-[1.1] tracking-[-0.02em] text-[#0b0b0c] sm:text-[calc(52*var(--unit))] lg:mt-[calc(34*var(--unit))] lg:text-[calc(70*var(--unit))] lg:leading-[calc(70*var(--unit))]">
          {headingLines.map((line, i) => (
            <span key={i} className="block">
              {line.map((part) => (
                <span key={part.text} className={part.highlight ? "text-[#d60c14]" : ""}>
                  {part.text}
                </span>
              ))}
            </span>
          ))}
        </h2>
        <p className="mt-[calc(18*var(--unit))] max-w-[calc(640*var(--unit))] font-(family-name:--font-inter-face) text-[calc(16*var(--unit))] leading-[1.7] text-[#5f6779] sm:text-[calc(18*var(--unit))] lg:mt-[calc(18*var(--unit))] lg:max-w-none lg:text-[calc(23*var(--unit))] lg:leading-[calc(33*var(--unit))] lg:tracking-[0.005em]">
          <Lines lines={descriptionLines} />
        </p>
      </div>

      <ul data-reveal-group="zoom" className="mt-[calc(36*var(--unit))] grid gap-x-[calc(24*var(--unit))] gap-y-[calc(40*var(--unit))] sm:grid-cols-2 lg:grid-cols-3 lg:ml-[calc(141*var(--unit))] lg:mt-[calc(43*var(--unit))] lg:w-[calc(1396*var(--unit))] lg:gap-x-[calc(27*var(--unit))] lg:gap-y-[calc(58*var(--unit))]">
        {visibleProjects.map((project) => (
          <li key={project.title} className="group">
            <div className="overflow-hidden rounded-[calc(8*var(--unit))]">
            <Image
              src={project.image.src}
              alt={project.image.alt}
              width={project.image.width}
              height={project.image.height}
              sizes="(min-width: 64rem) 27vw, (min-width: 40rem) 50vw, 100vw"
              className="h-auto w-full transition-transform duration-700 group-hover:scale-105"
            />
            </div>
            <h3 className="mt-[calc(18*var(--unit))] text-[calc(22*var(--unit))] font-black leading-[1.2] tracking-[0.01em] text-[#0b0b0c] sm:text-[calc(25*var(--unit))] lg:mt-[calc(19*var(--unit))] lg:text-[calc(32*var(--unit))] lg:leading-[calc(38*var(--unit))]">{project.title}</h3>
            <ul className="mt-[calc(14*var(--unit))] flex flex-wrap gap-[calc(10*var(--unit))] lg:mt-[calc(21*var(--unit))] lg:gap-[calc(11*var(--unit))]">
              {project.tags.map((tag) => (
                <li key={tag} className="rounded-full bg-[#fbe9e9] px-[calc(18*var(--unit))] py-[calc(9*var(--unit))] text-[calc(15*var(--unit))] font-medium leading-none text-[#d60c14] lg:flex lg:h-[calc(45*var(--unit))] lg:items-center lg:px-[calc(22*var(--unit))] lg:py-0 lg:text-[calc(19*var(--unit))]">
                  {tag}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>

      {projects.length > 0 && (
        <nav aria-label={pagination.label} className="mt-[calc(40*var(--unit))] flex flex-wrap items-center justify-center gap-[calc(8*var(--unit))]">
          <button
            type="button"
            onClick={() => goToPage(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            className="h-[calc(44*var(--unit))] rounded-full bg-white px-[calc(16*var(--unit))] text-[calc(14*var(--unit))] font-semibold text-[#141414] transition-colors hover:bg-[#d60c14] hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
          >
            {paginationText.previous}
          </button>
          {Array.from({ length: pageCount }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              type="button"
              onClick={() => goToPage(page)}
              aria-label={fill(pagination.goToPageN, { n: page })}
              aria-current={currentPage === page ? "page" : undefined}
              className={`size-[calc(44*var(--unit))] rounded-full text-[calc(14*var(--unit))] font-semibold transition-colors ${currentPage === page ? "bg-[#d60c14] text-white" : "bg-white text-[#141414] hover:bg-[#d60c14] hover:text-white"}`}
            >
              {page}
            </button>
          ))}
          <button
            type="button"
            onClick={() => goToPage(Math.min(pageCount, currentPage + 1))}
            disabled={currentPage === pageCount}
            className="h-[calc(44*var(--unit))] rounded-full bg-white px-[calc(16*var(--unit))] text-[calc(14*var(--unit))] font-semibold text-[#141414] transition-colors hover:bg-[#d60c14] hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
          >
            {paginationText.next}
          </button>
        </nav>
      )}
    </section>
  );
}
