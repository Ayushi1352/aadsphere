import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import CareerPerks from "./CareerPerks";
import JobList from "./JobList";
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
