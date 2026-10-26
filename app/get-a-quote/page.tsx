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
      <section className="px-[calc(20*var(--unit))] py-[calc(32*var(--unit))] sm:px-[calc(32*var(--unit))] sm:py-[calc(40*var(--unit))] lg:flex lg:items-start lg:gap-0 lg:px-0 lg:py-[calc(48*var(--unit))]">
        <QuoteIntro />
        <QuoteForm />
      </section>
    </main>
  );
}
