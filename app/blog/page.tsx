import type { Metadata } from "next";
import rawData from "@/data/templates.json";
import type { AdvertisingTemplateData } from "@/types/templates.types";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { BlogGrid } from "@/components/sections/BlogGrid";

export const metadata: Metadata = { ...(rawData as AdvertisingTemplateData).common.blogsBreadcrumb?.seo };

export default function BlogPage() {
  const templateData: AdvertisingTemplateData = rawData;
  const sectionData = templateData?.categories?.Advertising?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return null;

  return (
    <main className="flex-1">
      <Breadcrumb data={commonData.blogsBreadcrumb} ui={commonData.globalUI} />
      <BlogGrid data={sectionData.BlogGrid?.variants?.AdvertisingBlogGrid1} />
    </main>
  );
}
