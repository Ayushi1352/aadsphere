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
    <section className="relative mb-[calc(32*var(--unit))] overflow-hidden bg-primary px-[calc(20*var(--unit))] py-[calc(52*var(--unit))] sm:mb-[calc(40*var(--unit))] lg:mb-[calc(48*var(--unit))] sm:px-[calc(32*var(--unit))] sm:py-[calc(64*var(--unit))] lg:flex lg:min-h-[calc(460*var(--unit))] lg:flex-col lg:justify-center lg:p-0 lg:pl-[calc(145*var(--unit))] lg:pr-[calc(52*var(--unit))] lg:py-[calc(60*var(--unit))]">
      {/* Two soft rounded shapes behind the title */}
      <span
        aria-hidden="true"
        data-float="10000" className="pointer-events-none absolute -top-[calc(30*var(--unit))] left-[28%] size-[calc(200*var(--unit))] rounded-[34%_34%_34%_0] bg-black/[0.17] sm:size-[calc(260*var(--unit))] lg:left-[calc(191*var(--unit))] lg:top-[calc(8*var(--unit))] lg:size-[calc(350*var(--unit))]"
      />
      <span
        aria-hidden="true"
        data-float="10000" data-float-delay="-5000" className="pointer-events-none absolute -left-[calc(40*var(--unit))] top-[38%] size-[calc(200*var(--unit))] rounded-[36%_0_36%_0] bg-black/[0.17] sm:size-[calc(260*var(--unit))] lg:left-[calc(51*var(--unit))] lg:top-[calc(148*var(--unit))] lg:size-[calc(350*var(--unit))]"
      />

      <div className="relative z-10 max-w-[calc(1480*var(--unit))]">
        <h1
          className={`translate-x-0 transition-[opacity,translate] duration-900 ease-[cubic-bezier(0.22,1,0.36,1)] starting:-translate-x-[calc(56*var(--unit))] starting:opacity-0 motion-reduce:transition-none font-extrabold tracking-[-0.02em] text-white ${
            isDetailPage
              ? "text-[calc(32*var(--unit))] leading-[1.2] sm:text-[calc(44*var(--unit))] sm:leading-[1.18] lg:text-[calc(56*var(--unit))] lg:leading-[1.15]"
              : "text-[calc(38*var(--unit))] leading-[1.1] sm:text-[calc(56*var(--unit))] sm:leading-[1.1] lg:text-[calc(84*var(--unit))] lg:leading-[calc(96*var(--unit))]"
          }`}
        >
          {title}
        </h1>
        <nav aria-label={breadcrumbLabel} className="translate-y-0 transition-[opacity,translate] delay-250 duration-800 ease-[cubic-bezier(0.22,1,0.36,1)] starting:translate-y-[calc(40*var(--unit))] starting:opacity-0 motion-reduce:transition-none mt-[calc(16*var(--unit))] sm:mt-[calc(20*var(--unit))] lg:mt-[calc(22*var(--unit))]">
          <ol className="m-0 flex flex-wrap list-none items-center gap-x-[calc(10*var(--unit))] gap-y-[calc(6*var(--unit))] p-0 text-[calc(15*var(--unit))] font-medium leading-normal text-white/90 sm:text-[calc(17*var(--unit))] lg:gap-x-[calc(12*var(--unit))] lg:text-[calc(18*var(--unit))]">
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
            <li aria-current="page" className="max-w-[calc(600*var(--unit))] truncate text-white sm:max-w-[calc(800*var(--unit))] lg:max-w-[calc(1000*var(--unit))]">
              {title}
            </li>
          </ol>
        </nav>
      </div>
    </section>
  );
}
