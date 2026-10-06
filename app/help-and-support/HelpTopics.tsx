import Link from "next/link";
import CtaStrip from "@/components/CtaStrip";
import Icon from "@/components/icons";
import { SectionHeading, SectionLabel } from "@/components/ui";
import { site } from "@/data";

const { topics, cta } = site.help;

/** Common help topics, each pointing to the page that answers it. */
export default function HelpTopics() {
  return (
    <>
    <section className="px-20 py-32 sm:px-32 sm:py-40 xl:px-76 xl:py-48">
      <div data-reveal-group="up" className="flex flex-col items-center text-center">
        <SectionLabel text={topics.label} />
        <SectionHeading lines={topics.headingLines} className="mt-18 fs-28 leading-[1.08] sm:fs-52 xl:mt-20 xl:fs-65 xl:leading-64" />
      </div>

      <ul data-reveal-group="up" className="mt-36 grid gap-20 md:grid-cols-2 xl:mt-40 xl:grid-cols-3 xl:gap-24">
        {topics.items.map((topic) => (
          <li key={topic.title} className="group flex gap-18 r-14 border border-[#ececef] bg-[#f9f9fb] p-24 transition-[translate,box-shadow] duration-300 hover:-translate-y-6 hover:shadow-[0_0.9rem_2rem_rgba(110,12,18,0.1)] xl:gap-24 xl:p-32">
            <span className="flex size-60 shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6 items-center justify-center r-12 bg-[#790c0f] text-white xl:size-72">
              <Icon name={topic.icon} className="size-30 xl:size-36" />
            </span>
            <div className="min-w-0">
              <h3 className="fs-20 font-bold leading-[1.25] text-ink xl:fs-24">{topic.title}</h3>
              <p className="mt-8 font-text fs-16 leading-[1.6] text-body xl:mt-10 xl:fs-18 xl:leading-29">{topic.description}</p>
              <Link
                href={topic.href}
                className="mt-14 inline-flex items-center gap-8 border-b border-[#d9818a] pb-4 fs-16 font-semibold text-brand transition-colors duration-200 hover:text-ink xl:mt-18 xl:fs-18"
              >
                {topic.linkLabel}
                <Icon name="arrow-up-right" className="size-17" />
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </section>

    {/* The closing call to action is its own section, so the topics fit on one screen. */}
    <section className="px-20 py-32 sm:px-32 sm:py-40 xl:px-76 xl:py-48">
      <div className="mx-auto max-w-1240">
        <CtaStrip cta={cta} />
      </div>
    </section>
    </>
  );
}
