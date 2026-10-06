import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import AboutSection from "@/components/AboutSection";
import ImpactSection from "@/components/ImpactSection";
import AboutStory from "./AboutStory";
import WhyChooseUs from "./WhyChooseUs";
import { site } from "@/data";

export const metadata: Metadata = site.aboutPage.meta;

export default function AboutUsPage() {
  return (
    <main className="grow">
      <PageBanner title={site.aboutPage.title} />
      <AboutSection compact />
      <AboutStory />
      <ImpactSection />
      <WhyChooseUs />
    </main>
  );
}
