import rawData from "@/data/templates.json";
import type { AdvertisingTemplateData } from "@/types/templates.types";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ImpactSection } from "@/components/sections/ImpactSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { BlogSection } from "@/components/sections/BlogSection";

export default function Home() {
  const templateData: AdvertisingTemplateData = rawData;
  const sectionData = templateData?.categories?.Advertising?.sections;

  if (!sectionData) return null;

  return (
    <main className="flex-1">
      <HeroSection data={sectionData.Hero?.variants?.AdvertisingHero1} />
      <AboutSection data={sectionData.AboutUs?.variants?.AdvertisingAboutUs1} />
      <ImpactSection data={sectionData.Impact?.variants?.AdvertisingImpact1} />
      <ServicesSection data={sectionData.Services?.variants?.AdvertisingServices1} />
      <ProcessSection data={sectionData.Process?.variants?.AdvertisingProcess1} />
      <TestimonialsSection data={sectionData.Testimonials?.variants?.AdvertisingTestimonials1} />
      <BlogSection data={sectionData.Blogs?.variants?.AdvertisingBlogs1} />
    </main>
  );
}
