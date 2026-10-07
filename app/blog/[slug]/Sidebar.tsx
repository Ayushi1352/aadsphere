import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/icons";
import { site } from "@/data";

const { categoriesHeading, categories, recentHeading, recentPosts, tagsHeading, tags } = site.blogDetail.sidebar;

/** White box with a heading and a short red underline. */
function Box({ heading, children, className = "" }: { heading: string; children: ReactNode; className?: string }) {
  return (
    <section className={`r-12 border border-[#f0f0f2] bg-[#fdfdfd] p-24 xl:r-14 xl:px-34 ${className}`}>
      <h2 className="fs-22 font-extrabold leading-none tracking-[-0.02em] text-[#0d0612] xl:fs-27 xl:leading-32">{heading}</h2>
      <span className="mt-12 block h-3 w-56 bg-[#d6101d] xl:mt-13" aria-hidden="true" />
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
    <aside data-reveal-group="right" className="mt-40 grid gap-24 md:grid-cols-2 lg:mt-0 lg:w-340 lg:shrink-0 lg:grid-cols-1 xl:w-448 xl:gap-29">
      <Box heading={categoriesHeading} className="xl:h-474 xl:pb-0 xl:pt-27">
        <ul className="mt-10 font-sans xl:-mr-4 xl:mt-18">
          {categories.map((item, i) => (
            <li key={item.name} className={i > 0 ? "border-t border-[#ececef]" : ""}>
              <Link href={item.href} className="group flex items-center py-15 fs-17 font-medium leading-none text-[#2b3340] transition-colors duration-200 hover:text-[#d6101d] xl:h-[3.78125rem] xl:py-0 xl:fs-20">
                {item.name}
                <span className="ml-auto flex h-28 w-42 items-center justify-center rounded-full bg-[#fde8e9] fs-15 text-[#d6101d] xl:h-30 xl:w-44 xl:fs-17">{item.count}</span>
                <Icon name="chevron-right" className="ml-18 mr-2 size-16 transition-transform duration-200 group-hover:translate-x-3 xl:ml-20 xl:size-18" />
              </Link>
            </li>
          ))}
        </ul>
      </Box>

      <Box heading={recentHeading} className="xl:min-h-560 xl:pb-24 xl:pt-27">
        <ul className="mt-10 xl:mt-3">
          {recentPostsList.map((post, i) => (
            <li key={post.href} className={i > 0 ? "border-t border-[#ececef]" : ""}>
              <Link href={post.href} className="group flex items-center gap-18 py-18 xl:gap-22 xl:py-21">
                <Image src={post.image.src} alt={post.image.alt} width={137} height={109} className="h-88 w-110 shrink-0 r-6 object-cover transition-transform duration-300 group-hover:scale-105 xl:h-109 xl:w-137" />
                <span className="block min-w-0">
                  <span className="block fs-16 font-bold leading-[1.35] tracking-[-0.02em] text-[#0d0612] transition-colors duration-200 group-hover:text-[#d6101d] xl:fs-18 xl:leading-24">
                    {post.titleLines.join(" ")}
                  </span>
                  <span className="mt-6 block font-sans fs-14 leading-none text-[#666b75] xl:mt-8 xl:fs-16">{post.month} {post.day}, {post.year}</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Box>

      <Box heading={tagsHeading} className="md:col-span-2 lg:col-span-1 xl:h-295 xl:pb-0 xl:pt-24">
        <ul className="mt-22 flex flex-wrap gap-x-12 gap-y-12 font-sans xl:-mr-10 xl:mt-32 xl:gap-x-14 xl:gap-y-14">
          {tags.map((tag) => (
            <li key={tag.name}>
              <Link
                href={tag.href}
                className="flex h-40 items-center rounded-full bg-[#fdeced] px-18 fs-15 font-semibold leading-none tracking-[-0.02em] text-[#d6101d] transition-colors duration-200 hover:bg-[#d6101d] hover:text-white xl:h-44 xl:px-21 xl:fs-17"
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
