import Link from "next/link";
import Icon from "@/components/icons";
import { contact, site } from "@/data";

const { items, updatedLabel, otherHeading, contactHeading, contactText } = site.policies;

/** Text of one policy with a side box that links to the other policies. */
export default function PolicyContent({ slug }: { slug: string }) {
  const policy = items.find((item) => item.slug === slug) ?? items[0];

  return (
    <section className="px-[calc(20*var(--unit))] py-[calc(32*var(--unit))] sm:px-[calc(32*var(--unit))] sm:py-[calc(40*var(--unit))] lg:flex lg:items-start lg:gap-[calc(80*var(--unit))] lg:px-[calc(98*var(--unit))] lg:py-[calc(48*var(--unit))]">
      <article data-reveal-group="up" className="min-w-0 lg:grow">
        <p className="flex items-center gap-[calc(8*var(--unit))] sm:gap-[calc(14*var(--unit))] font-ui text-[calc(11*var(--unit))] sm:text-[calc(13*var(--unit))] font-medium uppercase leading-none tracking-[0.1em] sm:tracking-[0.2em] text-[#4d525c] lg:text-[calc(14*var(--unit))]">
          <span className="h-[calc(2*var(--unit))] w-[calc(24*var(--unit))] sm:w-[calc(40*var(--unit))] shrink-0 bg-primary" aria-hidden="true" />
          <span className="whitespace-nowrap">{updatedLabel} {policy.updated}</span>
        </p>
        <p className="mt-[calc(20*var(--unit))] font-text text-[calc(17*var(--unit))] leading-[1.7] text-body sm:text-[calc(19*var(--unit))] lg:mt-[calc(26*var(--unit))] lg:text-[calc(22*var(--unit))] lg:leading-[calc(37*var(--unit))]">{policy.intro}</p>

        {policy.sections.map((section, i) => (
          <section key={section.title} className="mt-[calc(34*var(--unit))] lg:mt-[calc(48*var(--unit))]">
            <h2 className="flex items-baseline gap-[calc(14*var(--unit))] text-[calc(23*var(--unit))] font-bold leading-[1.25] text-ink sm:text-[calc(28*var(--unit))] lg:gap-[calc(18*var(--unit))] lg:text-[calc(34*var(--unit))]">
              <span className="text-[calc(18*var(--unit))] font-extrabold text-primary lg:text-[calc(22*var(--unit))]">{String(i + 1).padStart(2, "0")}</span>
              {section.title}
            </h2>
            <span className="mt-[calc(12*var(--unit))] block h-[calc(3*var(--unit))] w-[calc(48*var(--unit))] bg-primary lg:mt-[calc(14*var(--unit))]" aria-hidden="true" />
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph} className="mt-[calc(14*var(--unit))] font-text text-[calc(16*var(--unit))] leading-[1.75] text-body sm:text-[calc(18*var(--unit))] lg:mt-[calc(18*var(--unit))] lg:text-[calc(20*var(--unit))] lg:leading-[calc(34*var(--unit))]">
                {paragraph}
              </p>
            ))}
            {section.points.length > 0 && (
              <ul className="mt-[calc(16*var(--unit))] space-y-[calc(12*var(--unit))] lg:mt-[calc(20*var(--unit))] lg:space-y-[calc(14*var(--unit))]">
                {section.points.map((point) => (
                  <li key={point} className="flex items-start gap-[calc(14*var(--unit))] font-text text-[calc(16*var(--unit))] leading-[1.6] text-[#333333] sm:text-[calc(18*var(--unit))] lg:text-[calc(20*var(--unit))]">
                    <span className="mt-[calc(1*var(--unit))] flex size-[calc(26*var(--unit))] shrink-0 items-center justify-center rounded-full bg-accent-tint-9 text-primary lg:size-[calc(30*var(--unit))]">
                      <Icon name="check" className="size-[calc(14*var(--unit))] lg:size-[calc(16*var(--unit))]" />
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </article>

      <aside data-reveal-group="right" className="mt-[calc(48*var(--unit))] space-y-[calc(24*var(--unit))] lg:sticky lg:top-[calc(24*var(--unit))] lg:mt-0 lg:shrink-0 lg:w-[calc(400*var(--unit))]">
        <nav aria-label={otherHeading} className="rounded-[calc(14*var(--unit))] border border-[#f0f0f2] bg-[#f9f9fb] p-[calc(24*var(--unit))] lg:p-[calc(32*var(--unit))]">
          <h2 className="text-[calc(21*var(--unit))] font-extrabold leading-none text-ink lg:text-[calc(24*var(--unit))]">{otherHeading}</h2>
          <span className="mt-[calc(12*var(--unit))] block h-[calc(3*var(--unit))] w-[calc(48*var(--unit))] bg-primary" aria-hidden="true" />
          <ul className="mt-[calc(10*var(--unit))]">
            {items.map((item, i) => (
              <li key={item.slug} className={i > 0 ? "border-t border-[#ececef]" : ""}>
                <Link
                  href={`/${item.slug}`}
                  aria-current={item.slug === slug ? "page" : undefined}
                  className={`flex items-center justify-between gap-[calc(12*var(--unit))] py-[calc(16*var(--unit))] text-[calc(17*var(--unit))] font-semibold transition-colors duration-200 hover:text-primary lg:text-[calc(19*var(--unit))] ${
                    item.slug === slug ? "text-primary" : "text-[#2b3340]"
                  }`}
                >
                  {item.title}
                  <Icon name="chevron-right" className="size-[calc(17*var(--unit))] shrink-0" />
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="rounded-[calc(14*var(--unit))] bg-primary p-[calc(24*var(--unit))] text-white lg:p-[calc(32*var(--unit))]">
          <h2 className="text-[calc(21*var(--unit))] font-bold leading-[1.25] lg:text-[calc(24*var(--unit))]">{contactHeading}</h2>
          <p className="mt-[calc(8*var(--unit))] font-text text-[calc(16*var(--unit))] leading-[1.6] text-white/85 lg:text-[calc(17*var(--unit))]">{contactText}</p>
          <a href={contact.emailHref} className="mt-[calc(18*var(--unit))] inline-flex items-center gap-[calc(10*var(--unit))] break-all text-[calc(17*var(--unit))] font-bold underline-offset-4 hover:underline lg:text-[calc(19*var(--unit))]">
            <Icon name="mail" className="size-[calc(20*var(--unit))] shrink-0" />
            {contact.email}
          </a>
        </div>
      </aside>
    </section>
  );
}
