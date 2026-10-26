import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import CareerPerks from "@/components/CareerPerks";
import JobList from "@/components/JobList";
import { site } from "@/data";

export const metadata: Metadata = site.career.meta;

export default function CareerPage() {
  return (
    <main className="grow">
      <PageBanner title={site.career.title} />
      <CareerPerks />
      <JobList />
    </main>
  );
}
