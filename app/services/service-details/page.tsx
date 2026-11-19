import type { Metadata } from 'next';
import rawData from '@/data/templates.json';
import type { AdvertisingTemplateData } from '@/types/templates.types';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { ServiceDetail } from '@/components/sections/ServiceDetail';

// One common detail page for every service: all service links point here.
export const metadata: Metadata = { ...(rawData as AdvertisingTemplateData).common.serviceDetailBreadcrumb?.seo };

export default function ServiceDetailPage() {
  const templateData: AdvertisingTemplateData = rawData;
  const sectionData = templateData?.categories?.Advertising?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return null;

  return (
    <main className="flex-1">
      <Breadcrumb data={commonData.serviceDetailBreadcrumb} ui={commonData.globalUI} />
      <ServiceDetail data={sectionData.Services?.variants?.AdvertisingServices1} />
    </main>
  );
}
