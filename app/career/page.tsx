import type { Metadata } from "next";
import rawData from "@/data/templates.json";
import type { AdvertisingTemplateData } from "@/types/templates.types";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { CareerPerks } from "@/components/sections/CareerPerks";
import { JobList } from "@/components/sections/JobList";

const templateData: AdvertisingTemplateData = rawData;
const sectionData = templateData.categories.Advertising.sections;
const commonData = templateData.common;

export const metadata: Metadata = { ...commonData.careerBreadcrumb?.seo };

export default function CareerPage() {
  return (
    <main className="flex-1">
      <Breadcrumb data={commonData.careerBreadcrumb} ui={commonData.globalUI} />
      <CareerPerks data={sectionData.Career?.variants?.AdvertisingCareer1} />
      <JobList data={sectionData.Career?.variants?.AdvertisingCareer1} />
    </main>
  );
}
