import Image from "next/image";
import Icon from "@/components/icons";
import { Lines } from "@/components/ui";
import { site } from "@/data";

const { image, date, category, author, headingLines, paragraphs, quoteLines, sections } = site.blogDetail;

/** Title lines as heading parts, with the last `count` words of the last line in red (like the designed heading). */
function highlightLastWords(lines: string[], count: number) {
  return lines.map((line, i) => {
    if (i < lines.length - 1) return [{ text: line, highlight: false }];
    const words = line.split(" ");
    const head = words.slice(0, -count).join(" ");
    const tail = words.slice(-count).join(" ");
    return head ? [{ text: `${head} `, highlight: false }, { text: tail, highlight: true }] : [{ text: tail, highlight: true }];
  });
}

export default function Article({ currentSlug }: { currentSlug?: string }) {
  const matchingPost = currentSlug
    ? site.blogPage.posts.find((p) => p.href === `/blog/${currentSlug}`)
    : undefined;

  const articleImage = matchingPost?.image ?? image;
  const articleDate = matchingPost ? `${matchingPost.month} ${matchingPost.day}, ${matchingPost.year}` : date;
  const articleCategory = matchingPost?.categories?.[0] ?? category;
  // The designed heading (line breaks + red highlight) applies whenever the post has that same title.
  const designedTitle = headingLines.map((line) => line.map((part) => part.text).join("")).join(" ").replace(/\s+/g, " ").trim();
  const usesDesignedTitle = !matchingPost || matchingPost.titleLines.join(" ") === designedTitle;
  const articleTitle = usesDesignedTitle ? headingLines : highlightLastWords(matchingPost.titleLines, 2);

  return (
    <article className="min-w-0 lg:grow lg:w-[calc(1042*var(--unit))] lg:flex-none">
      <div className="relative aspect-1042/448 overflow-hidden rounded-[calc(12*var(--unit))] lg:rounded-[calc(16*var(--unit))]">
        <Image src={articleImage.src} alt={articleImage.alt} fill preload sizes="(min-width: 64rem) 62vw, 100vw" className="scale-100 object-cover transition-[scale] duration-1600 ease-[cubic-bezier(0.22,1,0.36,1)] starting:scale-114 motion-reduce:transition-none" />
      </div>

      <p data-reveal="up" className="mt-[calc(22*var(--unit))] flex flex-wrap items-center gap-x-[calc(14*var(--unit))] gap-y-[calc(4*var(--unit))] text-[calc(14*var(--unit))] font-medium uppercase leading-none text-[#4b4f57] sm:text-[calc(16*var(--unit))] lg:mt-[calc(34*var(--unit))] lg:gap-x-[calc(18*var(--unit))] lg:pl-[calc(7*var(--unit))] lg:text-[calc(18*var(--unit))]">
        {articleDate}
        <span className="h-[calc(14*var(--unit))] w-px bg-[#9a9da3]" aria-hidden="true" />
        <span className="font-semibold text-[#d60c14]">{articleCategory}</span>
        <span className="h-[calc(14*var(--unit))] w-px bg-[#9a9da3]" aria-hidden="true" />
        {author}
      </p>

      <h1 data-reveal="up" className="mt-[calc(14*var(--unit))] text-[calc(32*var(--unit))] font-bold leading-[1.12] tracking-[-0.01em] text-[#0d0612] sm:text-[calc(48*var(--unit))] lg:mt-[calc(20*var(--unit))] lg:whitespace-nowrap lg:pl-[calc(7*var(--unit))] lg:text-[calc(67*var(--unit))] lg:leading-[calc(70*var(--unit))]">
        {articleTitle.map((line, i) => (
          <span key={i} className="lg:block">
            {line.map((part) => (
              <span key={part.text} className={part.highlight ? "text-[#d60c14]" : ""}>
                {part.text}
              </span>
            ))}{" "}
          </span>
        ))}
      </h1>

      <div data-reveal-group="up" className="mt-[calc(16*var(--unit))] space-y-[calc(18*var(--unit))] text-[calc(16*var(--unit))] font-medium leading-[1.65] text-[#555a62] sm:text-[calc(18*var(--unit))] lg:mt-[calc(22*var(--unit))] lg:space-y-[calc(30*var(--unit))] lg:whitespace-nowrap lg:pl-[calc(11*var(--unit))] lg:text-[calc(22*var(--unit))] lg:leading-[calc(32.5*var(--unit))] lg:tracking-[-0.015em]">
        {paragraphs.map((lines, i) => (
          <p key={i}>
            <Lines lines={lines} />
          </p>
        ))}
      </div>

      <blockquote data-reveal="left" className="relative mt-[calc(28*var(--unit))] flex items-center gap-[calc(18*var(--unit))] overflow-hidden rounded-[calc(12*var(--unit))] bg-linear-to-r from-[#fdeeef] to-[#fbe3e4] p-[calc(22*var(--unit))] sm:gap-[calc(28*var(--unit))] sm:p-[calc(30*var(--unit))] lg:mt-[calc(34*var(--unit))] lg:block lg:h-[calc(140*var(--unit))] lg:rounded-[calc(16*var(--unit))] lg:p-0">
        <span className="absolute -bottom-[calc(90*var(--unit))] -right-[calc(40*var(--unit))] size-[calc(200*var(--unit))] rounded-full bg-[#f9d5d6]/60" aria-hidden="true" />
        <span className="absolute -right-[calc(70*var(--unit))] -top-[calc(120*var(--unit))] size-[calc(260*var(--unit))] rounded-full bg-[#fbe0e1]/50" aria-hidden="true" />
        <Icon name="quote-slant" className="relative h-[calc(44*var(--unit))] w-[calc(56*var(--unit))] shrink-0 text-[#d60c14] lg:absolute lg:left-[calc(48*var(--unit))] lg:top-[calc(23*var(--unit))] lg:size-[calc(80*var(--unit))]" />
        <p className="relative text-[calc(17*var(--unit))] font-medium leading-[1.5] text-[#44484f] sm:text-[calc(21*var(--unit))] lg:absolute lg:left-[calc(152*var(--unit))] lg:top-[calc(31*var(--unit))] lg:whitespace-nowrap lg:text-[calc(24*var(--unit))] lg:leading-[calc(36*var(--unit))]">
          <Lines lines={quoteLines} />
        </p>
      </blockquote>

      {sections.map((section, i) => (
        <section key={section.title} data-reveal="up" className={`mt-[calc(28*var(--unit))] lg:pl-[calc(11*var(--unit))] ${i === 0 ? "lg:mt-[calc(36*var(--unit))]" : "lg:mt-[calc(22*var(--unit))]"}`}>
          <h2 className="text-[calc(21*var(--unit))] font-bold leading-[1.2] text-[#0d0612] sm:text-[calc(25*var(--unit))] lg:text-[calc(30*var(--unit))] lg:leading-[calc(36*var(--unit))]">{section.title}</h2>
          <p className="mt-[calc(8*var(--unit))] text-[calc(16*var(--unit))] font-medium leading-[1.6] text-[#555a62] sm:text-[calc(18*var(--unit))] lg:mt-[calc(9*var(--unit))] lg:whitespace-nowrap lg:text-[calc(22*var(--unit))] lg:leading-[calc(29.7*var(--unit))] lg:tracking-[-0.015em]">
            <Lines lines={section.lines} />
          </p>
        </section>
      ))}
    </article>
  );
}
