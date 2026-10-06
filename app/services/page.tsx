import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import ServicesGrid from "./ServicesGrid";
import { site } from "@/data";

export const metadata: Metadata = site.servicesPage.meta;

export default function ServicesPage() {
  return (
    <main className="grow">
      <PageBanner title={site.servicesPage.title} />
      <ServicesGrid />
    </main>
  );
}
