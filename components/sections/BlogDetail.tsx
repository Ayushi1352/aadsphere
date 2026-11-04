import { BlogArticle } from "@/components/sections/BlogArticle";
import { BlogSidebar } from "@/components/sections/BlogSidebar";
import type { BlogDetailData, BlogGridPost } from "@/types/templates.types";

/** One common blog post page: the article with the sidebar next to it. */
export const BlogDetail = ({ data, posts }: { data?: BlogDetailData; posts?: BlogGridPost[] }) => {
  if (!data) return null;
  return (
    <div className="px-[calc(20*var(--unit))] py-[calc(32*var(--unit))] font-article sm:px-[calc(32*var(--unit))] sm:py-[calc(40*var(--unit))] lg:flex lg:items-start lg:gap-[calc(37*var(--unit))] lg:px-0 lg:py-[calc(48*var(--unit))] lg:pl-[calc(63*var(--unit))] lg:pr-[calc(52*var(--unit))]">
      <BlogArticle data={data} />
      <BlogSidebar data={data.sidebar} posts={posts} />
    </div>
  );
};
