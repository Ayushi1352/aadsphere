"use client";

import { useRef, useState } from "react";
import BlogCard from "@/components/BlogCard";
import { Lines, SectionHeading, SectionLabel } from "@/components/ui";
import { fill, site } from "@/data";

const { label, headingLines, descriptionLines, posts, pagination } = site.blogPage;
const paginationText = site.siteMeta.text.Pagination;
const pageSize = 6;

/** Heading plus a paginated grid of blog cards. */
export default function BlogGrid() {
  const [currentPage, setCurrentPage] = useState(1);
  const sectionRef = useRef<HTMLElement>(null);
  const pageCount = Math.ceil(posts.length / pageSize);
  const visiblePosts = posts.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  const goToPage = (page: number) => {
    setCurrentPage(page);
    sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section ref={sectionRef} className="scroll-mt-80 px-20 py-32 sm:px-32 sm:py-40 xl:scroll-mt-120 xl:px-0 xl:py-48">
      <div data-reveal-group="up" className="flex flex-col items-center text-center">
        <SectionLabel text={label} tracking="tracking-[0.22em]" />
        <SectionHeading lines={headingLines} className="mt-18 fs-28 leading-[1.08] sm:fs-52 xl:mt-18 xl:fs-65 xl:leading-62 xl:tracking-[-0.01em]" />
        <p className="mt-18 max-w-640 font-inter fs-16 leading-[1.7] text-slate sm:fs-18 xl:mt-3 xl:max-w-none xl:fs-21 xl:leading-28 xl:tracking-[-0.012em]">
          <Lines lines={descriptionLines} />
        </p>
      </div>

      <ul data-reveal-group="up" className="mt-36 grid gap-24 md:grid-cols-2 xl:ml-77 xl:mt-34 xl:w-1535 xl:grid-cols-3 xl:gap-x-25 xl:gap-y-65">
        {visiblePosts.map((post) => (
          <li key={post.href}>
            <BlogCard post={post} />
          </li>
        ))}
      </ul>

      {pageCount > 1 && (
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
