import type { Metadata } from "next";
import rawData from "@/data/templates.json";
import type { AdvertisingTemplateData } from "@/types/templates.types";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { Faq } from "@/components/sections/Faq";

const templateData: AdvertisingTemplateData = rawData;
const sectionData = templateData.categories.Advertising.sections;
const commonData = templateData.common;

export const metadata: Metadata = { ...commonData.faqsBreadcrumb?.seo };

export default function FaqsPage() {
  return (
    <main className="flex-1">
      <Breadcrumb data={commonData.faqsBreadcrumb} ui={commonData.globalUI} />
      <Faq data={sectionData.Faq?.variants?.AdvertisingFaq1} />
    </main>
  );
}
