import Link from "next/link";
import CtaStrip from "@/components/CtaStrip";
import Icon from "@/components/icons";
import { SectionHeading, SectionLabel } from "@/components/ui";
import { site } from "@/data";

const { openings, cta } = site.career;

/** List of open positions, each with its details and an apply button. */
export default function JobList() {
  return (
    <section className="px-20 py-32 sm:px-32 sm:py-40 xl:px-76 xl:py-48">
      <div data-reveal-group="up" className="flex flex-col items-center text-center">
        <SectionLabel text={openings.label} />
        <SectionHeading lines={openings.headingLines} className="mt-18 fs-28 leading-[1.08] sm:fs-52 xl:mt-20 xl:fs-65 xl:leading-64" />
      </div>

      <ul data-reveal-group="left" className="mx-auto mt-36 max-w-1240 space-y-18 xl:mt-56 xl:space-y-22">
        {openings.jobs.map((job) => (
          <li
            key={job.title}
            className="flex flex-col gap-20 r-14 border border-[#ececef] bg-[#f9f9fb] p-24 transition-[translate,box-shadow] duration-300 hover:-translate-y-4 hover:shadow-[0_0.5rem_1.75rem_rgba(110,12,18,0.1)] md:flex-row md:items-center md:justify-between md:gap-32 xl:px-40 xl:py-34"
          >
            <div className="min-w-0">
              <p className="flex items-center gap-12 font-inter fs-11 font-medium uppercase leading-none tracking-[0.25em] text-[#4d525c] xl:fs-12">
                <span className="h-2 w-32 bg-accent" aria-hidden="true" />
                {job.department}
              </p>
              <h3 className="mt-12 fs-22 font-bold leading-[1.25] tracking-[-0.005em] text-ink xl:mt-14 xl:fs-27">{job.title}</h3>
              <p className="mt-8 max-w-720 font-text fs-16 leading-[1.6] text-body xl:fs-18">{job.description}</p>
              <ul className="mt-14 flex flex-wrap gap-x-22 gap-y-8 fs-15 font-semibold text-[#3d424c] xl:mt-16 xl:fs-16">
                <li className="flex items-center gap-8">
                  <Icon name="briefcase" className="size-18 text-brand" />
                  {job.type}
                </li>
                <li className="flex items-center gap-8">
                  <Icon name="map-pin" className="size-18 text-brand" />
                  {job.location}
                </li>
              </ul>
            </div>
            <Link
              href={openings.applyHref}
              className="inline-flex h-50 shrink-0 items-center justify-center gap-10 self-start rounded-full bg-[#741415] px-26 fs-15 font-bold text-white transition-colors duration-200 hover:bg-ink md:self-center xl:h-54 xl:px-30 xl:fs-16"
            >
              {openings.applyLabel}
              <Icon name="arrow-up-right" className="size-16" />
            </Link>
          </li>
        ))}
      </ul>

      <div className="mx-auto mt-64 max-w-1240 sm:mt-80 xl:mt-96">
        <CtaStrip cta={cta} />
      </div>
    </section>
  );
}
