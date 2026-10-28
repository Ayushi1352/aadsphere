import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import ServiceContent from "@/components/ServiceContent";
import { site } from "@/data";

const { title, meta, breadcrumb } = site.serviceDetail;

// One common detail page for every service: all service links point here.
export const metadata: Metadata = meta;

export default function ServiceDetailPage() {
  return (
    <main className="grow">
      <PageBanner title={title} crumbs={[breadcrumb]} />
      <ServiceContent />
    </main>
  );
}
