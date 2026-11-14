import type { Metadata } from 'next';
import rawData from '@/data/templates.json';
import type { AdvertisingTemplateData } from '@/types/templates.types';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { Career } from '@/components/sections/Career';

export const metadata: Metadata = { ...(rawData as AdvertisingTemplateData).common.careerBreadcrumb?.seo };

export default function CareerPage() {
  const templateData: AdvertisingTemplateData = rawData;
  const sectionData = templateData?.categories?.Advertising?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return null;

  return (
    <main className="flex-1">
      <Breadcrumb data={commonData.careerBreadcrumb} ui={commonData.globalUI} />
      <Career data={sectionData.Career?.variants?.AdvertisingCareer1} />
    </main>
  );
}
