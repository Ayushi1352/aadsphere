import type { Metadata } from "next";
import rawData from "@/data/templates.json";
import type { AdvertisingTemplateData } from "@/types/templates.types";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { ContactCards } from "@/components/sections/ContactCards";
import { ContactForm } from "@/components/sections/ContactForm";

export const metadata: Metadata = { ...(rawData as AdvertisingTemplateData).common.contactBreadcrumb?.seo };

export default function ContactPage() {
  const templateData: AdvertisingTemplateData = rawData;
  const sectionData = templateData?.categories?.Advertising?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return null;

  return (
    <main className="flex-1">
      <Breadcrumb data={commonData.contactBreadcrumb} ui={commonData.globalUI} />
      <ContactCards data={sectionData.Contact?.variants?.AdvertisingContact1} />
      <ContactForm data={sectionData.Contact?.variants?.AdvertisingContact1} />
    </main>
  );
}
