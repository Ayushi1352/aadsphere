import Link from "next/link";
import Icon from "@/components/icons";
import { contact, site } from "@/data";

const { items, updatedLabel, otherHeading, contactHeading, contactText } = site.policies;

/** Text of one policy with a side box that links to the other policies. */
export default function PolicyContent({ slug }: { slug: string }) {
  const policy = items.find((item) => item.slug === slug) ?? items[0];

  return (
    <section className="px-20 py-32 sm:px-32 sm:py-40 lg:flex lg:items-start lg:gap-48 xl:gap-80 xl:px-98 xl:py-48">
      <article data-reveal-group="up" className="min-w-0 lg:grow">
        <p className="flex items-center gap-14 font-inter fs-13 font-medium uppercase leading-none tracking-[0.2em] text-[#4d525c] xl:fs-14">
          <span className="h-2 w-40 bg-accent" aria-hidden="true" />
          {updatedLabel} {policy.updated}
        </p>
        <p className="mt-20 font-text fs-17 leading-[1.7] text-body sm:fs-19 xl:mt-26 xl:fs-22 xl:leading-37">{policy.intro}</p>

        {policy.sections.map((section, i) => (
          <section key={section.title} className="mt-34 xl:mt-48">
            <h2 className="flex items-baseline gap-14 fs-23 font-bold leading-[1.25] text-ink sm:fs-28 xl:gap-18 xl:fs-34">
              <span className="fs-18 font-extrabold text-brand xl:fs-22">{String(i + 1).padStart(2, "0")}</span>
              {section.title}
            </h2>
            <span className="mt-12 block h-3 w-48 bg-accent xl:mt-14" aria-hidden="true" />
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph} className="mt-14 font-text fs-16 leading-[1.75] text-body sm:fs-18 xl:mt-18 xl:fs-20 xl:leading-34">
                {paragraph}
              </p>
            ))}
            {section.points.length > 0 && (
              <ul className="mt-16 space-y-12 xl:mt-20 xl:space-y-14">
                {section.points.map((point) => (
                  <li key={point} className="flex items-start gap-14 font-text fs-16 leading-[1.6] text-[#333333] sm:fs-18 xl:fs-20">
                    <span className="mt-1 flex size-26 shrink-0 items-center justify-center rounded-full bg-blush text-brand xl:size-30">
                      <Icon name="check" className="size-14 xl:size-16" />
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </article>

      <aside data-reveal-group="right" className="mt-48 space-y-24 lg:sticky lg:top-24 lg:mt-0 lg:w-320 lg:shrink-0 xl:w-400">
        <nav aria-label={otherHeading} className="r-14 border border-[#f0f0f2] bg-[#f9f9fb] p-24 xl:p-32">
          <h2 className="fs-21 font-extrabold leading-none text-ink xl:fs-24">{otherHeading}</h2>
          <span className="mt-12 block h-3 w-48 bg-accent" aria-hidden="true" />
          <ul className="mt-10">
            {items.map((item, i) => (
              <li key={item.slug} className={i > 0 ? "border-t border-[#ececef]" : ""}>
                <Link
                  href={`/${item.slug}`}
                  aria-current={item.slug === slug ? "page" : undefined}
                  className={`flex items-center justify-between gap-12 py-16 fs-17 font-semibold transition-colors duration-200 hover:text-brand xl:fs-19 ${
                    item.slug === slug ? "text-brand" : "text-[#2b3340]"
                  }`}
                >
                  {item.title}
                  <Icon name="chevron-right" className="size-17 shrink-0" />
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="r-14 bg-hero p-24 text-white xl:p-32">
          <h2 className="fs-21 font-bold leading-[1.25] xl:fs-24">{contactHeading}</h2>
          <p className="mt-8 font-text fs-16 leading-[1.6] text-white/85 xl:fs-17">{contactText}</p>
          <a href={contact.emailHref} className="mt-18 inline-flex items-center gap-10 break-all fs-17 font-bold underline-offset-4 hover:underline xl:fs-19">
            <Icon name="mail" className="size-20 shrink-0" />
            {contact.email}
          </a>
        </div>
      </aside>
    </section>
  );
}
