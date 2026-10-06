import { Fragment } from "react";
import Link from "next/link";
import { site } from "@/data";

const { home, separator, breadcrumbLabel } = site.pageBanner;

type Crumb = { label: string; href: string };

type PageBannerProps = {
  title: string;
  crumbs?: Crumb[];
  isDetail?: boolean;
};

/** Maroon banner at the top of every inner page: page title + "Home / Page" breadcrumb.
 *  Pass `crumbs` to insert extra segments between Home and the current page title.
 *  e.g. crumbs={[{ label: "Services", href: "/services" }]}
 */
export default function PageBanner({ title, crumbs, isDetail }: PageBannerProps) {
  // Both Blog Details and Service Details pass `crumbs`, identifying them as detail pages.
  const isDetailPage = isDetail ?? Boolean(crumbs && crumbs.length > 0);

  return (
    <section className="relative mb-32 overflow-hidden bg-hero px-20 py-52 sm:mb-40 xl:mb-48 sm:px-32 sm:py-64 xl:flex xl:min-h-460 xl:flex-col xl:justify-center xl:p-0 xl:pl-145 xl:pr-52 xl:py-60">
      {/* Two soft rounded shapes behind the title */}
      <span
        aria-hidden="true"
        className="pointer-events-none animate-float-slow absolute -top-30 left-[28%] size-200 rounded-[34%_34%_34%_0] bg-black/[0.17] sm:size-260 xl:left-191 xl:top-8 xl:size-350"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none animate-float-slow [animation-delay:-5s] absolute -left-40 top-[38%] size-200 rounded-[36%_0_36%_0] bg-black/[0.17] sm:size-260 xl:left-51 xl:top-148 xl:size-350"
      />

      <div className="relative z-10 max-w-1480">
        <h1
          className={`animate-from-left font-extrabold tracking-[-0.02em] text-white ${
            isDetailPage
              ? "fs-32 leading-[1.2] sm:fs-44 sm:leading-[1.18] xl:fs-56 xl:leading-[1.15]"
              : "fs-38 leading-[1.1] sm:fs-56 sm:leading-[1.1] xl:fs-84 xl:leading-96"
          }`}
        >
          {title}
        </h1>
        <nav aria-label={breadcrumbLabel} className="animate-rise [animation-delay:250ms] mt-16 sm:mt-20 xl:mt-22">
          <ol className="m-0 flex flex-wrap list-none items-center gap-x-10 gap-y-6 p-0 fs-15 font-medium leading-normal text-white/90 sm:fs-17 xl:gap-x-12 xl:fs-18">
            <li className="shrink-0">
              <Link href={home.href} className="transition-opacity duration-200 hover:opacity-75">
                {home.label}
              </Link>
            </li>
            {crumbs?.map((crumb) => (
              <Fragment key={crumb.href}>
                <li aria-hidden="true" className="shrink-0 text-white/60">{separator}</li>
                <li className="shrink-0">
                  <Link href={crumb.href} className="transition-opacity duration-200 hover:opacity-75">
                    {crumb.label}
                  </Link>
                </li>
              </Fragment>
            ))}
            <li aria-hidden="true" className="shrink-0 text-white/60">{separator}</li>
            <li aria-current="page" className="max-w-600 truncate text-white sm:max-w-800 xl:max-w-1000">
              {title}
            </li>
          </ol>
        </nav>
      </div>
    </section>
  );
}
