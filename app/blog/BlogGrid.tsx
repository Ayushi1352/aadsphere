import BlogCard from "@/components/BlogCard";
import { Lines, SectionHeading, SectionLabel } from "@/components/ui";
import { site } from "@/data";

const { label, headingLines, descriptionLines, posts } = site.blogPage;

/** Heading plus the full grid of blog cards. */
export default function BlogGrid() {
  return (
    <section className="px-20 py-56 sm:px-32 sm:py-72 xl:px-0 xl:pb-112 xl:pt-117">
      <div className="flex flex-col items-center text-center">
        <SectionLabel text={label} tracking="tracking-[0.22em]" />
        <SectionHeading lines={headingLines} className="mt-18 fs-28 leading-[1.08] sm:fs-52 xl:mt-18 xl:fs-65 xl:leading-62 xl:tracking-[-0.01em]" />
        <p className="mt-18 max-w-640 font-inter fs-16 leading-[1.7] text-slate sm:fs-18 xl:mt-3 xl:max-w-none xl:fs-21 xl:leading-28 xl:tracking-[-0.012em]">
          <Lines lines={descriptionLines} />
        </p>
      </div>

      <ul className="mt-36 grid gap-24 md:grid-cols-2 xl:ml-77 xl:mt-34 xl:w-1535 xl:grid-cols-3 xl:gap-x-25 xl:gap-y-65">
        {posts.map((post, i) => (
          <li key={i}>
            <BlogCard post={post} />
          </li>
        ))}
      </ul>
    </section>
  );
}
