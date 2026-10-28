import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import PolicyContent from "@/components/PolicyContent";
import { site } from "@/data";

const policy = site.policies.items.find((item) => item.slug === "privacy-policy")!;

export const metadata: Metadata = policy.meta;

export default function PolicyPage() {
  return (
    <main className="grow">
      <PageBanner title={policy.title} />
      <PolicyContent slug={policy.slug} />
    </main>
  );
}
