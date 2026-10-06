import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageBanner from "@/components/PageBanner";
import ServiceContent from "./ServiceContent";
import { site } from "@/data";

const { items, introLines, breadcrumb } = site.serviceDetail;

// Only the services listed in site.json (ServiceDetail > items) get a page.
export const dynamicParams = false;

export function generateStaticParams() {
  return items.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: PageProps<"/services/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const item = items.find((entry) => entry.slug === slug);
  const navItem = site.navbar.navLinks.flatMap((n) => n.children).find((c) => c.href === `/services/${slug}`);
  const title = navItem?.name || item?.name;
  return item && title ? { title: `${title} - ${site.siteMeta.brandName}`, description: introLines.join(" ") } : {};
}

export default async function ServiceDetailPage({ params }: PageProps<"/services/[slug]">) {
  const { slug } = await params;
  const item = items.find((entry) => entry.slug === slug);
  if (!item) notFound();

  const navItem = site.navbar.navLinks.flatMap((n) => n.children).find((c) => c.href === `/services/${slug}`);
  const title = navItem?.name || item.name;

  return (
    <main className="grow">
      <PageBanner title={title} crumbs={[breadcrumb]} />
      <ServiceContent heading={item.heading} />
    </main>
  );
}
