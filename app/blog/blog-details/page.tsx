import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import BlogArticle from "@/components/BlogArticle";
import BlogSidebar from "@/components/BlogSidebar";
import { site } from "@/data";

const { title, meta, breadcrumb } = site.blogDetail;

// One common detail page for every blog post: all blog links point here.
export const metadata: Metadata = meta;

export default function BlogDetailPage() {
  return (
    <main className="grow">
      <PageBanner title={title} crumbs={[breadcrumb]} />
      <div className="px-[calc(20*var(--unit))] py-[calc(32*var(--unit))] font-article sm:px-[calc(32*var(--unit))] sm:py-[calc(40*var(--unit))] lg:flex lg:items-start lg:gap-[calc(37*var(--unit))] lg:px-0 lg:py-[calc(48*var(--unit))] lg:pl-[calc(63*var(--unit))] lg:pr-[calc(52*var(--unit))]">
        <BlogArticle />
        <BlogSidebar />
      </div>
    </main>
  );
}
