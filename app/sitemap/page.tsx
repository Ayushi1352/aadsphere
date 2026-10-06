import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import SitemapLinks from "./SitemapLinks";
import { site } from "@/data";

export const metadata: Metadata = site.sitemap.meta;

export default function SitemapPage() {
  return (
    <main className="grow">
      <PageBanner title={site.sitemap.title} />
      <SitemapLinks />
    </main>
  );
}
