import ServiceCard from "@/components/ServiceCard";
import { Lines, SectionHeading, SectionLabel } from "@/components/ui";
import { site } from "@/data";

const { label, headingLines, descriptionLines, services } = site.servicesPage;

/** Heading plus the full grid of service cards. */
export default function ServicesGrid() {
  return (
    <section className="px-20 py-56 sm:px-32 sm:py-72 xl:px-0 xl:pb-136 xl:pt-75">
      <div className="flex flex-col items-center text-center">
        <SectionLabel text={label} />
        <SectionHeading lines={headingLines} className="mt-18 fs-28 leading-[1.08] sm:fs-52 xl:mt-20 xl:fs-68 xl:leading-64" />
        <p className="mt-18 max-w-640 font-inter fs-16 leading-[1.7] text-slate sm:fs-18 xl:mt-16 xl:max-w-none xl:fs-21 xl:leading-31 xl:tracking-[-0.005em]">
          <Lines lines={descriptionLines} />
        </p>
      </div>

      <ul className="mt-36 grid gap-24 sm:grid-cols-2 lg:grid-cols-3 xl:ml-84 xl:mt-42 xl:w-1533 xl:grid-cols-4 xl:gap-x-24 xl:gap-y-53">
        {services.map((service, i) => (
          <li key={i}>
            <ServiceCard service={service} className="overflow-hidden r-6" />
          </li>
        ))}
      </ul>
    </section>
  );
}
