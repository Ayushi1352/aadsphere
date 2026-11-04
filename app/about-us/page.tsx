import type { Metadata } from "next";
import rawData from "@/data/templates.json";
import type { AdvertisingTemplateData } from "@/types/templates.types";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { AboutSection } from "@/components/sections/AboutSection";
import { AboutStory } from "@/components/sections/AboutStory";
import { ImpactSection } from "@/components/sections/ImpactSection";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";

const templateData: AdvertisingTemplateData = rawData;
const sectionData = templateData.categories.Advertising.sections;
const commonData = templateData.common;

export const metadata: Metadata = commonData.aboutBreadcrumb.meta;

export default function AboutUsPage() {
  return (
    <main className="flex-1">
      <Breadcrumb data={commonData.aboutBreadcrumb} ui={commonData.globalUI} />
      <AboutSection data={sectionData.AboutUs?.variants?.AdvertisingAboutUs1} compact />
      <AboutStory data={sectionData.AboutStory?.variants?.AdvertisingAboutStory1} />
      <ImpactSection data={sectionData.Impact?.variants?.AdvertisingImpact1} />
      <WhyChooseUs data={sectionData.WhyChooseUs?.variants?.AdvertisingWhyChooseUs1} />
    </main>
  );
}
