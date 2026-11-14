import type { Metadata } from 'next';
import rawData from '@/data/templates.json';
import type { AdvertisingTemplateData } from '@/types/templates.types';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { Process } from '@/components/sections/Process';
import { HowItWorks } from '@/components/sections/HowItWorks';

export const metadata: Metadata = { ...(rawData as AdvertisingTemplateData).common.howItWorksBreadcrumb?.seo };

export default function HowItWorksPage() {
  const templateData: AdvertisingTemplateData = rawData;
  const sectionData = templateData?.categories?.Advertising?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return null;

  return (
    <main className="flex-1">
      <Breadcrumb data={commonData.howItWorksBreadcrumb} ui={commonData.globalUI} />
      <Process data={sectionData.Process?.variants?.AdvertisingProcess1} />
      <HowItWorks data={sectionData.HowItWorks?.variants?.AdvertisingHowItWorks1} />
    </main>
  );
}
