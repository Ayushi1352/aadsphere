import type { Metadata } from 'next';
import rawData from '@/data/templates.json';
import type { AdvertisingTemplateData } from '@/types/templates.types';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { SitemapPage } from '@/components/sections/SitemapPage';

export const metadata: Metadata = { ...(rawData as AdvertisingTemplateData).common.sitemapBreadcrumb?.seo };

export default function Page() {
  const templateData: AdvertisingTemplateData = rawData;
  const sectionData = templateData?.categories?.Advertising?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return null;

  return (
    <main className="flex-1">
      <Breadcrumb data={commonData.sitemapBreadcrumb} ui={commonData.globalUI} />
      <SitemapPage data={sectionData.SitemapPage?.variants?.AdvertisingSitemapPage1} />
    </main>
  );
}
