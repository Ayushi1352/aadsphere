import type { Metadata } from "next";
import rawData from "@/data/templates.json";
import type { AdvertisingTemplateData } from "@/types/templates.types";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { ContactCards } from "@/components/sections/ContactCards";
import { ContactForm } from "@/components/sections/ContactForm";

const templateData: AdvertisingTemplateData = rawData;
const sectionData = templateData.categories.Advertising.sections;
const commonData = templateData.common;

export const metadata: Metadata = commonData.contactBreadcrumb.meta;

export default function ContactPage() {
  return (
    <main className="flex-1">
      <Breadcrumb data={commonData.contactBreadcrumb} ui={commonData.globalUI} />
      <ContactCards data={sectionData.Contact?.variants?.AdvertisingContact1} company={commonData.company} />
      <ContactForm data={sectionData.Contact?.variants?.AdvertisingContact1} company={commonData.company} />
    </main>
  );
}
