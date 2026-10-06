import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageBanner from "@/components/PageBanner";
import PolicyContent from "./PolicyContent";
import { site } from "@/data";

// One page for all three policies: /privacy-policy, /terms-and-conditions and /cookie-policy.
// The text of each policy lives in data/site.json (Policies > items).
const { items } = site.policies;

export const dynamicParams = false;

export function generateStaticParams() {
  return items.map((item) => ({ policy: item.slug }));
}

export async function generateMetadata({ params }: PageProps<"/[policy]">): Promise<Metadata> {
  const { policy } = await params;
  const item = items.find((entry) => entry.slug === policy);
  return item ? { title: `${item.title} - ${site.siteMeta.brandName}`, description: item.description } : {};
}

export default async function PolicyPage({ params }: PageProps<"/[policy]">) {
  const { policy } = await params;
  const item = items.find((entry) => entry.slug === policy);
  if (!item) notFound();

  return (
    <main className="grow">
      <PageBanner title={item.title} />
      <PolicyContent slug={item.slug} />
    </main>
  );
}
