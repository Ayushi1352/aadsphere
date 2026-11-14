import type { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Icon } from '@/components/ui/Icon';
import { Lines } from '@/components/ui/Text';
import type { BlogDetailData, BlogDetailProps, BlogDetailSidebar, BlogGridPost } from '@/types/templates.types';

/** Common article shown for every blog post. */
const BlogArticle = ({ data }: { data?: BlogDetailData }) => {
  if (!data) return null;
  const { image, imageAlt, date, category, author, headingLines, paragraphs, quoteLines, sections } = data;
  return (
    <article className="min-w-0 lg:grow lg:w-[calc(1042*var(--unit))] lg:flex-none">
      <div className="relative aspect-[1042/448] overflow-hidden rounded-[calc(12*var(--unit))] lg:rounded-[calc(16*var(--unit))]">
        <Image src={image} alt={imageAlt} fill preload sizes="(min-width: 64rem) 62vw, 100vw" className="scale-100 object-cover transition-transform duration-1600 ease-[cubic-bezier(0.22,1,0.36,1)] starting:scale-[1.14] motion-reduce:transition-none" />
      </div>

      <p data-reveal="up" className="mt-[calc(22*var(--unit))] flex flex-wrap items-center gap-x-[calc(14*var(--unit))] gap-y-[calc(4*var(--unit))] text-[calc(14*var(--unit))] font-medium uppercase leading-none text-[var(--color-blog-text-soft)] sm:text-[calc(16*var(--unit))] lg:mt-[calc(34*var(--unit))] lg:gap-x-[calc(18*var(--unit))] lg:pl-[calc(7*var(--unit))] lg:text-[calc(18*var(--unit))]">
        {date}
        <span className="h-[calc(14*var(--unit))] w-px bg-[var(--color-blog-meta-dot)]" aria-hidden="true" />
        <span className="font-semibold text-[var(--color-accent)]">{category}</span>
        <span className="h-[calc(14*var(--unit))] w-px bg-[var(--color-blog-meta-dot)]" aria-hidden="true" />
        {author}
      </p>

      <h1 data-reveal="up" className="mt-[calc(14*var(--unit))] text-[calc(32*var(--unit))] font-bold leading-[1.12] tracking-[-0.01em] text-[var(--color-blog-heading)] sm:text-[calc(48*var(--unit))] lg:mt-[calc(20*var(--unit))] lg:whitespace-nowrap lg:pl-[calc(7*var(--unit))] lg:text-[calc(67*var(--unit))] lg:leading-[calc(70*var(--unit))]">
        {headingLines.map((line, i) => (
          <span key={i} className="lg:block">
            {line.map((part) => (
              <span key={part.text} className={part.highlight ? 'text-[var(--color-accent)]' : ''}>
                {part.text}
              </span>
            ))}{' '}
          </span>
        ))}
      </h1>

      <div data-reveal-group="up" className="mt-[calc(16*var(--unit))] space-y-[calc(18*var(--unit))] text-[calc(16*var(--unit))] font-medium leading-[1.65] text-[var(--color-card-text)] sm:text-[calc(18*var(--unit))] lg:mt-[calc(22*var(--unit))] lg:space-y-[calc(30*var(--unit))] lg:whitespace-nowrap lg:pl-[calc(11*var(--unit))] lg:text-[calc(22*var(--unit))] lg:leading-[calc(32.5*var(--unit))] lg:tracking-[-0.015em]">
        {paragraphs.map((lines, i) => (
          <p key={i}>
            <Lines lines={lines} />
          </p>
        ))}
      </div>

      <blockquote data-reveal="left" className="relative mt-[calc(28*var(--unit))] flex items-center gap-[calc(18*var(--unit))] overflow-hidden rounded-[calc(12*var(--unit))] bg-gradient-to-r from-[var(--color-accent-tint-7)] to-[var(--color-accent-tint-11)] p-[calc(22*var(--unit))] sm:gap-[calc(28*var(--unit))] sm:p-[calc(30*var(--unit))] lg:mt-[calc(34*var(--unit))] lg:block lg:h-[calc(140*var(--unit))] lg:rounded-[calc(16*var(--unit))] lg:p-0">
        <span className="absolute -bottom-[calc(90*var(--unit))] -right-[calc(40*var(--unit))] size-[calc(200*var(--unit))] rounded-full bg-[var(--color-accent-tint-17-60)]" aria-hidden="true" />
        <span className="absolute -right-[calc(70*var(--unit))] -top-[calc(120*var(--unit))] size-[calc(260*var(--unit))] rounded-full bg-[var(--color-accent-tint-13-50)]" aria-hidden="true" />
        <Icon name="FaQuoteLeft" className="relative h-[calc(44*var(--unit))] w-[calc(56*var(--unit))] shrink-0 text-[var(--color-accent)] lg:absolute lg:left-[calc(48*var(--unit))] lg:top-[calc(23*var(--unit))] lg:size-[calc(80*var(--unit))]" />
        <p className="relative text-[calc(17*var(--unit))] font-medium leading-[1.5] text-[var(--color-blog-text)] sm:text-[calc(21*var(--unit))] lg:absolute lg:left-[calc(152*var(--unit))] lg:top-[calc(31*var(--unit))] lg:whitespace-nowrap lg:text-[calc(24*var(--unit))] lg:leading-[calc(36*var(--unit))]">
          <Lines lines={quoteLines} />
        </p>
      </blockquote>

      {sections.map((section, i) => (
        <section key={section.id} data-reveal="up" className={`mt-[calc(28*var(--unit))] lg:pl-[calc(11*var(--unit))] ${i === 0 ? 'lg:mt-[calc(36*var(--unit))]' : 'lg:mt-[calc(22*var(--unit))]'}`}>
          <h2 className="text-[calc(21*var(--unit))] font-bold leading-[1.2] text-[var(--color-blog-heading)] sm:text-[calc(25*var(--unit))] lg:text-[calc(30*var(--unit))] lg:leading-[calc(36*var(--unit))]">{section.title}</h2>
          <p className="mt-[calc(8*var(--unit))] text-[calc(16*var(--unit))] font-medium leading-[1.6] text-[var(--color-card-text)] sm:text-[calc(18*var(--unit))] lg:mt-[calc(9*var(--unit))] lg:whitespace-nowrap lg:text-[calc(22*var(--unit))] lg:leading-[calc(29.7*var(--unit))] lg:tracking-[-0.015em]">
            <Lines lines={section.lines} />
          </p>
        </section>
      ))}
    </article>
  );
};

/** White box with a heading and a short red underline. */
function Box({ heading, children, className = '' }: { heading: string; children: ReactNode; className?: string }) {
  return (
    <section className={`rounded-[calc(12*var(--unit))] border border-[var(--color-border-soft)] bg-[var(--color-sidebar-bg)] p-[calc(24*var(--unit))] lg:rounded-[calc(14*var(--unit))] lg:px-[calc(34*var(--unit))] ${className}`}>
      <h2 className="text-[calc(22*var(--unit))] font-bold leading-none text-[var(--color-blog-heading)] lg:text-[calc(27*var(--unit))] lg:leading-[calc(32*var(--unit))]">{heading}</h2>
      <span className="mt-[calc(12*var(--unit))] block h-[calc(3*var(--unit))] w-[calc(56*var(--unit))] bg-[var(--color-accent)] lg:mt-[calc(13*var(--unit))]" aria-hidden="true" />
      {children}
    </section>
  );
}

/** Right column of a blog post: categories, recent posts and tags. */
const BlogSidebar = ({ data, posts = [] }: { data?: BlogDetailSidebar; posts?: BlogGridPost[] }) => {
  if (!data) return null;
  const { categoriesHeading, categories, recentHeading, recentCount, tagsHeading, tags } = data;
  const recentPostsList = posts.slice(0, recentCount);

  return (
    <aside data-reveal-group="right" className="mt-[calc(40*var(--unit))] grid gap-[calc(24*var(--unit))] md:grid-cols-2 lg:mt-0 lg:shrink-0 lg:grid-cols-1 lg:w-[calc(448*var(--unit))] lg:gap-[calc(29*var(--unit))]">
      <Box heading={categoriesHeading} className="lg:h-[calc(474*var(--unit))] lg:pb-0 lg:pt-[calc(27*var(--unit))]">
        <ul className="mt-[calc(10*var(--unit))] font-main lg:-mr-[calc(4*var(--unit))] lg:mt-[calc(18*var(--unit))]">
          {categories.map((item, i) => (
            <li key={item.id} className={i > 0 ? 'border-t border-[var(--color-border)]' : ''}>
              <Link href={item.url} className="group flex items-center py-[calc(15*var(--unit))] text-[calc(17*var(--unit))] font-medium leading-none text-[var(--color-sidebar-heading)] transition-colors duration-200 hover:text-[var(--color-accent)] lg:h-[calc(60.5*var(--unit))] lg:py-0 lg:text-[calc(20*var(--unit))]">
                {item.label}
                <span className="ml-auto flex h-[calc(28*var(--unit))] w-[calc(42*var(--unit))] items-center justify-center rounded-full bg-[var(--color-accent-tint-9)] text-[calc(15*var(--unit))] text-[var(--color-accent)] lg:h-[calc(30*var(--unit))] lg:w-[calc(44*var(--unit))] lg:text-[calc(17*var(--unit))]">{item.count}</span>
                <Icon name="LuChevronRight" className="ml-[calc(18*var(--unit))] mr-[calc(2*var(--unit))] size-[calc(16*var(--unit))] transition-transform duration-200 group-hover:translate-x-[calc(3*var(--unit))] lg:ml-[calc(20*var(--unit))] lg:size-[calc(18*var(--unit))]" />
              </Link>
            </li>
          ))}
        </ul>
      </Box>

      <Box heading={recentHeading} className="lg:min-h-[calc(560*var(--unit))] lg:pb-[calc(24*var(--unit))] lg:pt-[calc(27*var(--unit))]">
        <ul className="mt-[calc(10*var(--unit))] lg:mt-[calc(3*var(--unit))]">
          {recentPostsList.map((post, i) => (
            <li key={post.id} className={i > 0 ? 'border-t border-[var(--color-border)]' : ''}>
              <Link href={post.url} className="group flex items-center gap-[calc(18*var(--unit))] py-[calc(18*var(--unit))] lg:gap-[calc(22*var(--unit))] lg:py-[calc(21*var(--unit))]">
                <Image src={post.image} alt={post.imageAlt} width={137} height={109} className="h-[calc(88*var(--unit))] w-[calc(110*var(--unit))] shrink-0 rounded-[calc(6*var(--unit))] object-cover transition-transform duration-300 group-hover:scale-105 lg:h-[calc(109*var(--unit))] lg:w-[calc(137*var(--unit))]" />
                <span className="block min-w-0">
                  <span className="block text-[calc(16*var(--unit))] font-bold leading-[1.35] text-[var(--color-blog-heading)] transition-colors duration-200 group-hover:text-[var(--color-accent)] lg:text-[calc(19*var(--unit))] lg:leading-[calc(26*var(--unit))]">
                    {post.titleLines.join(' ')}
                  </span>
                  <span className="mt-[calc(6*var(--unit))] block font-main text-[calc(14*var(--unit))] font-medium leading-none text-[var(--color-blog-excerpt)] lg:mt-[calc(8*var(--unit))] lg:text-[calc(18*var(--unit))]">{post.month} {post.day}, {post.year}</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Box>

      <Box heading={tagsHeading} className="md:col-span-2 lg:col-span-1 lg:h-[calc(295*var(--unit))] lg:pb-0 lg:pt-[calc(24*var(--unit))]">
        <ul className="mt-[calc(22*var(--unit))] flex flex-wrap gap-x-[calc(12*var(--unit))] gap-y-[calc(12*var(--unit))] font-main lg:-mr-[calc(10*var(--unit))] lg:mt-[calc(32*var(--unit))] lg:gap-x-[calc(14*var(--unit))] lg:gap-y-[calc(14*var(--unit))]">
          {tags.map((tag) => (
            <li key={tag.id}>
              <Link
                href={tag.url}
                className="flex h-[calc(40*var(--unit))] items-center rounded-full bg-[var(--color-accent-tint-9)] px-[calc(18*var(--unit))] text-[calc(15*var(--unit))] font-medium leading-none tracking-[-0.02em] text-[var(--color-accent)] transition-colors duration-200 hover:bg-[var(--color-accent)] hover:text-[var(--color-white)] lg:h-[calc(44*var(--unit))] lg:px-[calc(21*var(--unit))] lg:text-[calc(18*var(--unit))]"
              >
                {tag.label}
              </Link>
            </li>
          ))}
        </ul>
      </Box>
    </aside>
  );
};

/** One common blog post page: the article with the sidebar next to it. */
export const BlogDetail = ({ data, posts }: BlogDetailProps) => {
  if (!data) return null;
  return (
    <div className="px-[calc(20*var(--unit))] py-[calc(32*var(--unit))] font-article sm:px-[calc(32*var(--unit))] sm:py-[calc(40*var(--unit))] lg:flex lg:items-start lg:gap-[calc(37*var(--unit))] lg:px-0 lg:py-[calc(48*var(--unit))] lg:pl-[calc(63*var(--unit))] lg:pr-[calc(52*var(--unit))]">
      <BlogArticle data={data} />
      <BlogSidebar data={data.sidebar} posts={posts} />
    </div>
  );
};
