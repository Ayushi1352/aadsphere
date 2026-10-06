import Link from "next/link";
import Icon from "@/components/icons";
import { Lines, SectionHeading, SectionLabel } from "@/components/ui";
import { site } from "@/data";

const { label, headingLines, descriptionLines, groups } = site.sitemap;

/** Every page of the website, grouped into boxes of links. */
export default function SitemapLinks() {
  return (
    <section className="px-20 py-32 sm:px-32 sm:py-40 xl:px-76 xl:py-48">
      <div data-reveal-group="up" className="flex flex-col items-center text-center">
        <SectionLabel text={label} />
        <SectionHeading lines={headingLines} className="mt-18 fs-28 leading-[1.08] sm:fs-52 xl:mt-20 xl:fs-65 xl:leading-64" />
        <p className="mt-18 max-w-640 font-text fs-16 font-medium leading-[1.7] text-body sm:fs-18 xl:mt-14 xl:max-w-none xl:fs-19 xl:leading-29">
          <Lines lines={descriptionLines} />
        </p>
      </div>

      <ul data-reveal-group="up" className="mt-36 grid gap-22 sm:grid-cols-2 lg:grid-cols-3 xl:mt-56 xl:gap-26">
        {groups.map((group, i) => (
          <li key={group.heading} className="r-14 border border-[#ececef] bg-[#f9f9fb] p-24 xl:p-34">
            <p className="fs-16 font-extrabold leading-none text-brand xl:fs-18">{String(i + 1).padStart(2, "0")}</p>
            <h2 className="mt-10 fs-22 font-bold leading-[1.2] text-ink xl:mt-12 xl:fs-27">{group.heading}</h2>
            <span className="mt-12 block h-3 w-44 bg-accent xl:mt-14" aria-hidden="true" />
            <ul className="mt-12 xl:mt-16">
              {group.links.map((link) => (
                <li key={link.href} className="border-b border-[#ececef] last:border-b-0">
                  <Link
                    href={link.href}
                    className="flex items-center justify-between gap-12 py-13 font-text fs-16 font-medium leading-[1.4] text-[#333333] transition-colors duration-200 hover:text-brand xl:py-15 xl:fs-18"
                  >
                    {link.name}
                    <Icon name="chevron-right" className="size-17 shrink-0 text-brand" />
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  );
}
