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
    <section ref={sectionRef} className="scroll-mt-80 px-20 py-32 sm:px-32 sm:py-40 xl:scroll-mt-120 xl:px-0 xl:py-48">
      <div data-reveal-group="up" className="flex flex-col items-center text-center">
        <SectionLabel text={label} tracking="tracking-[0.24em]" className="[&>span:nth-child(2)]:font-bold" />
        <h2 className="mt-18 fs-30 font-black leading-[1.1] tracking-[-0.02em] text-[#0b0b0c] sm:fs-52 xl:mt-34 xl:fs-70 xl:leading-70">
          {headingLines.map((line, i) => (
            <span key={i} className="block">
              {line.map((part) => (
                <span key={part.text} className={part.highlight ? "text-[#d3101d]" : ""}>
                  {part.text}
                </span>
              ))}
            </span>
          ))}
        </h2>
        <p className="mt-18 max-w-640 font-inter fs-16 leading-[1.7] text-slate sm:fs-18 xl:mt-18 xl:max-w-none xl:fs-23 xl:leading-33 xl:tracking-[0.005em]">
          <Lines lines={descriptionLines} />
        </p>
      </div>

      <ul data-reveal-group="zoom" className="mt-36 grid gap-x-24 gap-y-40 sm:grid-cols-2 lg:grid-cols-3 xl:ml-141 xl:mt-43 xl:w-1396 xl:gap-x-27 xl:gap-y-58">
        {visibleProjects.map((project) => (
          <li key={project.title} className="group">
            <div className="overflow-hidden r-8">
            <Image
              src={project.image.src}
              alt={project.image.alt}
              width={project.image.width}
              height={project.image.height}
              sizes="(min-width: 64rem) 27vw, (min-width: 40rem) 50vw, 100vw"
              className="h-auto w-full transition-transform duration-700 group-hover:scale-105"
            />
            </div>
            <h3 className="mt-18 fs-22 font-black leading-[1.2] tracking-[0.01em] text-[#0b0b0c] sm:fs-25 xl:mt-19 xl:fs-32 xl:leading-38">{project.title}</h3>
            <ul className="mt-14 flex flex-wrap gap-10 xl:mt-21 xl:gap-11">
              {project.tags.map((tag) => (
                <li key={tag} className="rounded-full bg-[#fde9ea] px-18 py-9 fs-15 font-medium leading-none text-[#d3141f] xl:flex xl:h-45 xl:items-center xl:px-22 xl:py-0 xl:fs-19">
                  {tag}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>

      {projects.length > 0 && (
        <nav aria-label={pagination.label} className="mt-40 flex flex-wrap items-center justify-center gap-8">
          <button
            type="button"
            onClick={() => goToPage(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            className="h-44 rounded-full bg-white px-16 fs-14 font-semibold text-ink transition-colors hover:bg-brand hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
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
              className={`size-44 rounded-full fs-14 font-semibold transition-colors ${currentPage === page ? "bg-brand text-white" : "bg-white text-ink hover:bg-brand hover:text-white"}`}
            >
              {page}
            </button>
          ))}
          <button
            type="button"
            onClick={() => goToPage(Math.min(pageCount, currentPage + 1))}
            disabled={currentPage === pageCount}
            className="h-44 rounded-full bg-white px-16 fs-14 font-semibold text-ink transition-colors hover:bg-brand hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
          >
            {paginationText.next}
          </button>
        </nav>
      )}
    </section>
  );
}
