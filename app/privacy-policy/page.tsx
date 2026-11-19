import type { Metadata } from 'next';
import rawData from '@/data/templates.json';
import type { AdvertisingTemplateData } from '@/types/templates.types';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { PolicyPages } from '@/components/sections/PolicyPages';

export const metadata: Metadata = { ...(rawData as AdvertisingTemplateData).common.privacyBreadcrumb?.seo };

export default function PrivacyPolicyPage() {
  const templateData: AdvertisingTemplateData = rawData;
  const sectionData = templateData?.categories?.Advertising?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return null;

  return (
    <main className="flex-1">
      <Breadcrumb data={commonData.privacyBreadcrumb} ui={commonData.globalUI} />
      <PolicyPages data={sectionData.PolicyPages?.variants?.AdvertisingPolicyPages1} policyId="privacy-policy" />
    </main>
  );
}
