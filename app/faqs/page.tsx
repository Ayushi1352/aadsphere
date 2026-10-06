import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import CtaStrip from "@/components/CtaStrip";
import { Lines, SectionHeading, SectionLabel } from "@/components/ui";
import FaqList from "./FaqList";
import { site } from "@/data";

const { title, meta, label, headingLines, descriptionLines, cta } = site.faq;

export const metadata: Metadata = meta;

export default function FaqsPage() {
  return (
    <main className="grow">
      <PageBanner title={title} />
      <section className="px-20 py-56 sm:px-32 sm:py-72 xl:px-76 xl:pb-110 xl:pt-96">
        <div className="flex flex-col items-center text-center">
          <SectionLabel text={label} />
          <SectionHeading lines={headingLines} className="mt-18 fs-28 leading-[1.08] sm:fs-52 xl:mt-20 xl:fs-65 xl:leading-64" />
          <p className="mt-18 max-w-680 font-text fs-16 font-medium leading-[1.7] text-body sm:fs-18 xl:mt-14 xl:max-w-none xl:fs-19 xl:leading-29">
            <Lines lines={descriptionLines} />
          </p>
        </div>

        <FaqList />

        <div className="mx-auto mt-56 max-w-1240 xl:mt-80">
          <CtaStrip cta={cta} />
        </div>
      </section>
    </main>
  );
}
