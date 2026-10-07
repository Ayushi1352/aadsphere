import Image from "next/image";
import Icon from "@/components/icons";
import { Lines } from "@/components/ui";
import { site } from "@/data";

const { image, date, category, author, headingLines, paragraphs, quoteLines, sections } = site.blogDetail;

export default function Article({ currentSlug }: { currentSlug?: string }) {
  const matchingPost = currentSlug
    ? site.blogPage.posts.find((p) => p.href === `/blog/${currentSlug}`)
    : undefined;

  const articleImage = matchingPost?.image ?? image;
  const articleDate = matchingPost ? `${matchingPost.month} ${matchingPost.day}, ${matchingPost.year}` : date;
  const articleCategory = matchingPost?.categories?.[0] ?? category;
  const articleTitle = matchingPost ? matchingPost.titleLines.map((line) => [{ text: line, highlight: false }]) : headingLines;

  return (
    <article className="min-w-0 lg:grow xl:w-1042 xl:flex-none">
      <div className="relative aspect-1042/448 overflow-hidden r-12 xl:r-16">
        <Image src={articleImage.src} alt={articleImage.alt} fill preload sizes="(min-width: 64rem) 62vw, 100vw" className="animate-zoom-out object-cover" />
      </div>

      <p data-reveal="up" className="mt-22 flex flex-wrap items-center gap-x-14 gap-y-4 fs-14 font-medium uppercase leading-none text-[#4b4f57] sm:fs-16 xl:mt-34 xl:gap-x-18 xl:pl-7 xl:fs-18">
        {articleDate}
        <span className="h-14 w-px bg-[#9a9da3]" aria-hidden="true" />
        <span className="font-semibold text-[#d3141f]">{articleCategory}</span>
        <span className="h-14 w-px bg-[#9a9da3]" aria-hidden="true" />
        {author}
      </p>

      <h1 data-reveal="up" className="mt-14 fs-32 font-extrabold leading-[1.12] tracking-[-0.024em] text-[#0d0612] sm:fs-48 xl:mt-20 xl:whitespace-nowrap xl:pl-7 xl:fs-67 xl:leading-70">
        {articleTitle.map((line, i) => (
          <span key={i} className="xl:block">
            {line.map((part) => (
              <span key={part.text} className={part.highlight ? "text-[#d6101d]" : ""}>
                {part.text}
              </span>
            ))}{" "}
          </span>
        ))}
      </h1>

      <div data-reveal-group="up" className="mt-16 space-y-18 fs-16 leading-[1.65] text-[#555a62] sm:fs-18 xl:mt-22 xl:space-y-30 xl:whitespace-nowrap xl:pl-11 xl:fs-22 xl:leading-[2.03125rem] xl:tracking-[-0.008em]">
        {paragraphs.map((lines, i) => (
          <p key={i}>
            <Lines lines={lines} />
          </p>
        ))}
      </div>

      <blockquote data-reveal="left" className="relative mt-28 flex items-center gap-18 overflow-hidden r-12 bg-linear-to-r from-[#fdeeef] to-[#fbe3e4] p-22 sm:gap-28 sm:p-30 xl:mt-34 xl:block xl:h-140 xl:r-16 xl:p-0">
        <span className="absolute -bottom-90 -right-40 size-200 rounded-full bg-[#f9d5d6]/60" aria-hidden="true" />
        <span className="absolute -right-70 -top-120 size-260 rounded-full bg-[#fbe0e1]/50" aria-hidden="true" />
        <Icon name="quote-slant" className="relative h-44 w-56 shrink-0 text-[#d9161a] xl:absolute xl:left-48 xl:top-23 xl:size-80" />
        <p className="relative fs-17 leading-[1.5] text-[#44484f] sm:fs-21 xl:absolute xl:left-152 xl:top-31 xl:whitespace-nowrap xl:fs-24 xl:leading-36 xl:tracking-[0.005em]">
          <Lines lines={quoteLines} />
        </p>
      </blockquote>

      {sections.map((section, i) => (
        <section key={section.title} data-reveal="up" className={`mt-28 xl:pl-11 ${i === 0 ? "xl:mt-36" : "xl:mt-22"}`}>
          <h2 className="fs-21 font-extrabold leading-[1.2] tracking-[-0.02em] text-[#0d0612] sm:fs-25 xl:fs-30 xl:leading-36">{section.title}</h2>
          <p className="mt-8 fs-16 leading-[1.6] text-[#555a62] sm:fs-18 xl:mt-9 xl:whitespace-nowrap xl:fs-22 xl:leading-[1.85625rem] xl:tracking-[-0.01em]">
            <Lines lines={section.lines} />
          </p>
        </section>
      ))}
    </article>
  );
}
