import type { Metadata } from "next";
import rawData from "@/data/templates.json";
import type { AdvertisingTemplateData } from "@/types/templates.types";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { SitemapLinks } from "@/components/sections/SitemapLinks";

export const metadata: Metadata = { ...(rawData as AdvertisingTemplateData).common.sitemapBreadcrumb?.seo };

export default function SitemapPage() {
  const templateData: AdvertisingTemplateData = rawData;
  const sectionData = templateData?.categories?.Advertising?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return null;

  return (
    <main className="flex-1">
      <Breadcrumb data={commonData.sitemapBreadcrumb} ui={commonData.globalUI} />
      <SitemapLinks data={sectionData.SitemapPage?.variants?.AdvertisingSitemapPage1} />
    </main>
  );
}
