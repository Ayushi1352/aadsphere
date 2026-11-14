import type { Metadata } from "next";
import rawData from "@/data/templates.json";
import type { AdvertisingTemplateData } from "@/types/templates.types";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { Quote } from "@/components/sections/Quote";

export const metadata: Metadata = { ...(rawData as AdvertisingTemplateData).common.quoteBreadcrumb?.seo };

export default function GetAQuotePage() {
  const templateData: AdvertisingTemplateData = rawData;
  const sectionData = templateData?.categories?.Advertising?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return null;

  return (
    <main className="flex-1">
      <Breadcrumb data={commonData.quoteBreadcrumb} ui={commonData.globalUI} />
      <Quote data={sectionData.Quote?.variants?.AdvertisingQuote1} />
    </main>
  );
}
