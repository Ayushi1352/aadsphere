import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/icons";
import { site } from "@/data";

const { categoriesHeading, categories, recentHeading, recentPosts, tagsHeading, tags } = site.blogDetail.sidebar;

/** White box with a heading and a short red underline. */
function Box({ heading, children, className = "" }: { heading: string; children: ReactNode; className?: string }) {
  return (
    <section className={`rounded-[calc(12*var(--unit))] border border-[#f0f0f2] bg-[#fdfdfd] p-[calc(24*var(--unit))] lg:rounded-[calc(14*var(--unit))] lg:px-[calc(34*var(--unit))] ${className}`}>
      <h2 className="text-[calc(22*var(--unit))] font-bold leading-none text-[#0d0612] lg:text-[calc(27*var(--unit))] lg:leading-[calc(32*var(--unit))]">{heading}</h2>
      <span className="mt-[calc(12*var(--unit))] block h-[calc(3*var(--unit))] w-[calc(56*var(--unit))] bg-[#d60c14] lg:mt-[calc(13*var(--unit))]" aria-hidden="true" />
      {children}
    </section>
  );
}

/** Right column of a blog post: categories, recent posts and tags. */
export default function Sidebar({ currentSlug }: { currentSlug?: string }) {
  const allBlogPosts = site.blogPage.posts;
  const recentPostsList = (
    currentSlug
      ? allBlogPosts.filter((p) => p.href !== `/blog/${currentSlug}`)
      : allBlogPosts
  ).slice(0, 3);

  return (
    <aside data-reveal-group="right" className="mt-[calc(40*var(--unit))] grid gap-[calc(24*var(--unit))] md:grid-cols-2 lg:mt-0 lg:shrink-0 lg:grid-cols-1 lg:w-[calc(448*var(--unit))] lg:gap-[calc(29*var(--unit))]">
      <Box heading={categoriesHeading} className="lg:h-[calc(474*var(--unit))] lg:pb-0 lg:pt-[calc(27*var(--unit))]">
        <ul className="mt-[calc(10*var(--unit))] font-(family-name:--font-red-hat) lg:-mr-[calc(4*var(--unit))] lg:mt-[calc(18*var(--unit))]">
          {categories.map((item, i) => (
            <li key={item.name} className={i > 0 ? "border-t border-[#ececef]" : ""}>
              <Link href={item.href} className="group flex items-center py-[calc(15*var(--unit))] text-[calc(17*var(--unit))] font-medium leading-none text-[#2b3340] transition-colors duration-200 hover:text-[#d60c14] lg:h-[calc(60.5*var(--unit))] lg:py-0 lg:text-[calc(20*var(--unit))]">
                {item.name}
                <span className="ml-auto flex h-[calc(28*var(--unit))] w-[calc(42*var(--unit))] items-center justify-center rounded-full bg-[#fbe9e9] text-[calc(15*var(--unit))] text-[#d60c14] lg:h-[calc(30*var(--unit))] lg:w-[calc(44*var(--unit))] lg:text-[calc(17*var(--unit))]">{item.count}</span>
                <Icon name="chevron-right" className="ml-[calc(18*var(--unit))] mr-[calc(2*var(--unit))] size-[calc(16*var(--unit))] transition-transform duration-200 group-hover:translate-x-[calc(3*var(--unit))] lg:ml-[calc(20*var(--unit))] lg:size-[calc(18*var(--unit))]" />
              </Link>
            </li>
          ))}
        </ul>
      </Box>

      <Box heading={recentHeading} className="lg:min-h-[calc(560*var(--unit))] lg:pb-[calc(24*var(--unit))] lg:pt-[calc(27*var(--unit))]">
        <ul className="mt-[calc(10*var(--unit))] lg:mt-[calc(3*var(--unit))]">
          {recentPostsList.map((post, i) => (
            <li key={post.href} className={i > 0 ? "border-t border-[#ececef]" : ""}>
              <Link href={post.href} className="group flex items-center gap-[calc(18*var(--unit))] py-[calc(18*var(--unit))] lg:gap-[calc(22*var(--unit))] lg:py-[calc(21*var(--unit))]">
                <Image src={post.image.src} alt={post.image.alt} width={137} height={109} className="h-[calc(88*var(--unit))] w-[calc(110*var(--unit))] shrink-0 rounded-[calc(6*var(--unit))] object-cover transition-transform duration-300 group-hover:scale-105 lg:h-[calc(109*var(--unit))] lg:w-[calc(137*var(--unit))]" />
                <span className="block min-w-0">
                  <span className="block text-[calc(16*var(--unit))] font-bold leading-[1.35] text-[#0d0612] transition-colors duration-200 group-hover:text-[#d60c14] lg:text-[calc(19*var(--unit))] lg:leading-[calc(26*var(--unit))]">
                    {post.titleLines.join(" ")}
                  </span>
                  <span className="mt-[calc(6*var(--unit))] block font-(family-name:--font-red-hat) text-[calc(14*var(--unit))] font-medium leading-none text-[#666b75] lg:mt-[calc(8*var(--unit))] lg:text-[calc(18*var(--unit))]">{post.month} {post.day}, {post.year}</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Box>

      <Box heading={tagsHeading} className="md:col-span-2 lg:col-span-1 lg:h-[calc(295*var(--unit))] lg:pb-0 lg:pt-[calc(24*var(--unit))]">
        <ul className="mt-[calc(22*var(--unit))] flex flex-wrap gap-x-[calc(12*var(--unit))] gap-y-[calc(12*var(--unit))] font-(family-name:--font-red-hat) lg:-mr-[calc(10*var(--unit))] lg:mt-[calc(32*var(--unit))] lg:gap-x-[calc(14*var(--unit))] lg:gap-y-[calc(14*var(--unit))]">
          {tags.map((tag) => (
            <li key={tag.name}>
              <Link
                href={tag.href}
                className="flex h-[calc(40*var(--unit))] items-center rounded-full bg-[#fbe9e9] px-[calc(18*var(--unit))] text-[calc(15*var(--unit))] font-medium leading-none tracking-[-0.02em] text-[#d60c14] transition-colors duration-200 hover:bg-[#d60c14] hover:text-white lg:h-[calc(44*var(--unit))] lg:px-[calc(21*var(--unit))] lg:text-[calc(18*var(--unit))]"
              >
                {tag.name}
              </Link>
            </li>
          ))}
        </ul>
      </Box>
    </aside>
  );
}
