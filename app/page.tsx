import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ImpactSection from "@/components/ImpactSection";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BlogSection from "@/components/BlogSection";

export default function Home() {
  return (
    <main className="grow">
      <HeroSection />
      <AboutSection />
      <ImpactSection />
      <ServicesSection />
      <ProcessSection />
      <TestimonialsSection />
      <BlogSection />
    </main>
  );
}
