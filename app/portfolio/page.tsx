import type { Metadata } from "next";
import rawData from "@/data/templates.json";
import type { AdvertisingTemplateData } from "@/types/templates.types";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { ProjectsGrid } from "@/components/sections/ProjectsGrid";

const templateData: AdvertisingTemplateData = rawData;
const sectionData = templateData.categories.Advertising.sections;
const commonData = templateData.common;

export const metadata: Metadata = { ...commonData.portfolioBreadcrumb?.seo };

export default function PortfolioPage() {
  return (
    <main className="flex-1">
      <Breadcrumb data={commonData.portfolioBreadcrumb} ui={commonData.globalUI} />
      <ProjectsGrid data={sectionData.Portfolio?.variants?.AdvertisingPortfolio1} ui={commonData.globalUI} />
    </main>
  );
}
