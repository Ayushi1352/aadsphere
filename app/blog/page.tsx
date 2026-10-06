import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import BlogGrid from "./BlogGrid";
import { site } from "@/data";

export const metadata: Metadata = site.blogPage.meta;

export default function BlogPage() {
  return (
    <main className="grow">
      <PageBanner title={site.blogPage.title} />
      <BlogGrid />
    </main>
  );
}
