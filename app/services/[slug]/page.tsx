import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageBanner from "@/components/PageBanner";
import ServiceContent from "./ServiceContent";
import { site } from "@/data";

const { items, introLines } = site.serviceDetail;

// Only the services listed in site.json (ServiceDetail > items) get a page.
export const dynamicParams = false;

export function generateStaticParams() {
  return items.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: PageProps<"/services/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const item = items.find((entry) => entry.slug === slug);
  return item ? { title: `${item.name} - ${site.siteMeta.meta.Layout.title.split(" - ")[0]}`, description: introLines.join(" ") } : {};
}

export default async function ServiceDetailPage({ params }: PageProps<"/services/[slug]">) {
  const { slug } = await params;
  const item = items.find((entry) => entry.slug === slug);
  if (!item) notFound();

  return (
    <main className="grow">
      <PageBanner title={item.name} crumbs={[{ label: "Services", href: "/services" }]} />
      <ServiceContent heading={item.heading} />
    </main>
  );
}
