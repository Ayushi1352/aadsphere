import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import QuoteIntro from "./QuoteIntro";
import QuoteForm from "./QuoteForm";
import { site } from "@/data";

export const metadata: Metadata = site.quote.meta;

export default function GetAQuotePage() {
  return (
    <main className="grow">
      <PageBanner title={site.quote.title} />
      <section className="px-20 py-32 sm:px-32 sm:py-40 lg:flex lg:items-start lg:gap-40 xl:gap-0 xl:px-0 xl:py-48">
        <QuoteIntro />
        <QuoteForm />
      </section>
    </main>
  );
}
