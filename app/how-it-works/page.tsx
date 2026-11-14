import type { Metadata } from "next";
import rawData from "@/data/templates.json";
import type { AdvertisingTemplateData } from "@/types/templates.types";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { StepDetails } from "@/components/sections/StepDetails";

export const metadata: Metadata = { ...(rawData as AdvertisingTemplateData).common.howItWorksBreadcrumb?.seo };

export default function HowItWorksPage() {
  const templateData: AdvertisingTemplateData = rawData;
  const sectionData = templateData?.categories?.Advertising?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return null;

  return (
    <main className="flex-1">
      <Breadcrumb data={commonData.howItWorksBreadcrumb} ui={commonData.globalUI} />
      <ProcessSection data={sectionData.Process?.variants?.AdvertisingProcess1} />
      <StepDetails data={sectionData.HowItWorks?.variants?.AdvertisingHowItWorks1} />
    </main>
  );
}
