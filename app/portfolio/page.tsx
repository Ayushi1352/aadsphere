import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import ProjectsGrid from "./ProjectsGrid";
import { site } from "@/data";

export const metadata: Metadata = site.portfolio.meta;

export default function PortfolioPage() {
  return (
    <main className="grow">
      <PageBanner title={site.portfolio.title} />
      <ProjectsGrid />
    </main>
  );
}
