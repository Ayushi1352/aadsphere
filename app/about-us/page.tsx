import type { Metadata } from 'next';
import rawData from '@/data/templates.json';
import type { AdvertisingTemplateData } from '@/types/templates.types';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { AboutUs } from '@/components/sections/AboutUs';
import { AboutStory } from '@/components/sections/AboutStory';
import { Impact } from '@/components/sections/Impact';
import { WhyChooseUs } from '@/components/sections/WhyChooseUs';

export const metadata: Metadata = { ...(rawData as AdvertisingTemplateData).common.aboutBreadcrumb?.seo };

export default function AboutUsPage() {
  const templateData: AdvertisingTemplateData = rawData;
  const sectionData = templateData?.categories?.Advertising?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return null;

  return (
    <main className="flex-1">
      <Breadcrumb data={commonData.aboutBreadcrumb} ui={commonData.globalUI} />
      <AboutUs data={sectionData.AboutUs?.variants?.AdvertisingAboutUs1} compact />
      <AboutStory data={sectionData.AboutStory?.variants?.AdvertisingAboutStory1} />
      <Impact data={sectionData.Impact?.variants?.AdvertisingImpact1} />
      <WhyChooseUs data={sectionData.WhyChooseUs?.variants?.AdvertisingWhyChooseUs1} />
    </main>
  );
}
