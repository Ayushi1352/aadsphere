import { Fragment } from "react";
import Link from "next/link";
import { site } from "@/data";

const { home, separator, breadcrumbLabel } = site.pageBanner;

type Crumb = { label: string; href: string };

/** Maroon banner at the top of every inner page: page title + "Home / Page" breadcrumb.
 *  Pass `crumbs` to insert extra segments between Home and the current page title.
 *  e.g. crumbs={[{ label: "Services", href: "/services" }]}
 */
export default function PageBanner({ title, crumbs }: { title: string; crumbs?: Crumb[] }) {
  return (
    <section className="relative overflow-hidden bg-hero px-20 py-56 sm:px-32 sm:py-80 xl:h-511 xl:p-0">
      {/* Two soft rounded shapes behind the title */}
      <span
        aria-hidden="true"
        className="absolute -top-30 left-[28%] size-200 rounded-[34%_34%_34%_0] bg-black/[0.17] sm:size-260 xl:left-191 xl:top-8 xl:size-350"
      />
      <span
        aria-hidden="true"
        className="absolute -left-40 top-[38%] size-200 rounded-[36%_0_36%_0] bg-black/[0.17] sm:size-260 xl:left-51 xl:top-148 xl:size-350"
      />

      <div className="relative">
        <h1 className="fs-44 leading-[1.1] text-white sm:fs-64 xl:absolute xl:left-63 xl:top-168 xl:fs-89 xl:leading-116">{title}</h1>
        <nav aria-label={breadcrumbLabel} className="mt-14 xl:absolute xl:left-63 xl:top-298 xl:mt-0">
          <ol className="flex flex-wrap items-center gap-x-12 fs-16 font-medium leading-none text-white sm:fs-18 xl:gap-x-14 xl:fs-19 xl:leading-28">
            <li>
              <Link href={home.href} className="transition-opacity duration-200 hover:opacity-75">
                {home.label}
              </Link>
            </li>
            {crumbs?.map((crumb) => (
              <Fragment key={crumb.href}>
                <li aria-hidden="true">{separator}</li>
                <li>
                  <Link href={crumb.href} className="transition-opacity duration-200 hover:opacity-75">
                    {crumb.label}
                  </Link>
                </li>
              </Fragment>
            ))}
            <li aria-hidden="true">{separator}</li>
            <li aria-current="page">{title}</li>
          </ol>
        </nav>
      </div>
    </section>
  );
}
