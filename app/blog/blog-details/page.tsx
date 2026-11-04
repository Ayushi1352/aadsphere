import type { Metadata } from "next";
import rawData from "@/data/templates.json";
import type { AdvertisingTemplateData } from "@/types/templates.types";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { BlogDetail } from "@/components/sections/BlogDetail";

const templateData: AdvertisingTemplateData = rawData;
const sectionData = templateData.categories.Advertising.sections;
const commonData = templateData.common;

// One common detail page for every blog post: all blog links point here.
export const metadata: Metadata = commonData.blogDetailBreadcrumb.meta;

export default function BlogDetailPage() {
  return (
    <main className="flex-1">
      <Breadcrumb data={commonData.blogDetailBreadcrumb} ui={commonData.globalUI} />
      <BlogDetail data={sectionData.BlogDetail?.variants?.AdvertisingBlogDetail1} posts={sectionData.BlogGrid?.variants?.AdvertisingBlogGrid1?.posts} />
    </main>
  );
}
