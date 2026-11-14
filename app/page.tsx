import rawData from '@/data/templates.json';
import type { AdvertisingTemplateData } from '@/types/templates.types';
import { HeroSection } from '@/components/sections/HeroSection';
import { AboutUs } from '@/components/sections/AboutUs';
import { Impact } from '@/components/sections/Impact';
import { Services } from '@/components/sections/Services';
import { Process } from '@/components/sections/Process';
import { Testimonials } from '@/components/sections/Testimonials';
import { Blogs } from '@/components/sections/Blogs';

export default function Home() {
  const templateData: AdvertisingTemplateData = rawData;
  const sectionData = templateData?.categories?.Advertising?.sections;

  if (!sectionData) return null;

  return (
    <main className="flex-1">
      <HeroSection data={sectionData.Hero?.variants?.AdvertisingHero1} />
      <AboutUs data={sectionData.AboutUs?.variants?.AdvertisingAboutUs1} />
      <Impact data={sectionData.Impact?.variants?.AdvertisingImpact1} />
      <Services data={sectionData.Services?.variants?.AdvertisingServices1} />
      <Process data={sectionData.Process?.variants?.AdvertisingProcess1} />
      <Testimonials data={sectionData.Testimonials?.variants?.AdvertisingTestimonials1} />
      <Blogs data={sectionData.Blogs?.variants?.AdvertisingBlogs1} />
    </main>
  );
}
