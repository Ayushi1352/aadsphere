import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageBanner from "@/components/PageBanner";
import Article from "./Article";
import Sidebar from "./Sidebar";
import { site } from "@/data";

const { meta, slugs, breadcrumb } = site.blogDetail;

// Only the posts listed in site.json (BlogDetail > slugs) get a page.
export const dynamicParams = false;

export function generateStaticParams() {
  return slugs.map((slug) => ({ slug }));
}

function getBlogTitle(slug: string): string {
  const post = site.blogPage.posts.find((p) => p.href === `/blog/${slug}`) || site.blog.posts.find((p) => p.href === `/blog/${slug}`);
  if (post) return post.titleLines.join(" ");
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export async function generateMetadata({ params }: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const postTitle = getBlogTitle(slug);
  return {
    title: `${postTitle} - ${site.siteMeta.brandName}`,
    description: meta.description,
  };
}

export default async function BlogDetailPage({ params }: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  if (!slugs.includes(slug)) notFound();

  const postTitle = getBlogTitle(slug);

  return (
    <main className="grow">
      <PageBanner title={postTitle} crumbs={[breadcrumb]} />
      <div className="px-20 py-32 font-montserrat sm:px-32 sm:py-40 lg:flex lg:items-start lg:gap-32 xl:gap-37 xl:px-0 xl:py-48 xl:pl-63 xl:pr-52">
        <Article />
        <Sidebar />
      </div>
    </main>
  );
}
