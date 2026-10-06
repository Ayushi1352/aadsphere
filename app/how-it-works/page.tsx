import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import ProcessSection from "@/components/ProcessSection";
import StepDetails from "./StepDetails";
import { site } from "@/data";

export const metadata: Metadata = site.howItWorks.meta;

export default function HowItWorksPage() {
  return (
    <main className="grow">
      <PageBanner title={site.howItWorks.title} />
      <div className="xl:pt-40">
        <ProcessSection />
      </div>
      <StepDetails />
    </main>
  );
}
