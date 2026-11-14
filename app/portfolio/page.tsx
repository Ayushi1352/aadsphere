import type { Metadata } from 'next';
import rawData from '@/data/templates.json';
import type { AdvertisingTemplateData } from '@/types/templates.types';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { Portfolio } from '@/components/sections/Portfolio';

export const metadata: Metadata = { ...(rawData as AdvertisingTemplateData).common.portfolioBreadcrumb?.seo };

export default function PortfolioPage() {
  const templateData: AdvertisingTemplateData = rawData;
  const sectionData = templateData?.categories?.Advertising?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return null;

  return (
    <main className="flex-1">
      <Breadcrumb data={commonData.portfolioBreadcrumb} ui={commonData.globalUI} />
      <Portfolio data={sectionData.Portfolio?.variants?.AdvertisingPortfolio1} />
    </main>
  );
}
