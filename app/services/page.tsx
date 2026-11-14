import type { Metadata } from "next";
import rawData from "@/data/templates.json";
import type { AdvertisingTemplateData } from "@/types/templates.types";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { ServicesGrid } from "@/components/sections/ServicesGrid";

export const metadata: Metadata = { ...(rawData as AdvertisingTemplateData).common.servicesBreadcrumb?.seo };

export default function ServicesPage() {
  const templateData: AdvertisingTemplateData = rawData;
  const sectionData = templateData?.categories?.Advertising?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return null;

  return (
    <main className="flex-1">
      <Breadcrumb data={commonData.servicesBreadcrumb} ui={commonData.globalUI} />
      <ServicesGrid data={sectionData.ServicesGrid?.variants?.AdvertisingServicesGrid1} />
    </main>
  );
}
