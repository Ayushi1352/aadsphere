import Link from "next/link";
import Icon from "@/components/icons";
import { Lines, SectionHeading, SectionLabel } from "@/components/ui";
import { site } from "@/data";

const { label, headingLines, descriptionLines, groups } = site.sitemap;

/** Every page of the website, grouped into boxes of links. */
export default function SitemapLinks() {
  return (
    <section className="px-[calc(20*var(--unit))] py-[calc(32*var(--unit))] sm:px-[calc(32*var(--unit))] sm:py-[calc(40*var(--unit))] lg:px-[calc(76*var(--unit))] lg:py-[calc(48*var(--unit))]">
      <div data-reveal-group="up" className="flex flex-col items-center text-center">
        <SectionLabel text={label} />
        <SectionHeading lines={headingLines} className="mt-[calc(18*var(--unit))] text-[calc(28*var(--unit))] leading-[1.08] sm:text-[calc(52*var(--unit))] lg:mt-[calc(20*var(--unit))] lg:text-[calc(65*var(--unit))] lg:leading-[calc(64*var(--unit))]" />
        <p className="mt-[calc(18*var(--unit))] max-w-[calc(640*var(--unit))] font-(family-name:--font-red-hat-text) text-[calc(16*var(--unit))] font-medium leading-[1.7] text-[#5a5a5a] sm:text-[calc(18*var(--unit))] lg:mt-[calc(14*var(--unit))] lg:max-w-none lg:text-[calc(19*var(--unit))] lg:leading-[calc(29*var(--unit))]">
          <Lines lines={descriptionLines} />
        </p>
      </div>

      <ul data-reveal-group="up" className="mt-[calc(36*var(--unit))] grid gap-[calc(22*var(--unit))] sm:grid-cols-2 lg:grid-cols-3 lg:mt-[calc(56*var(--unit))] lg:gap-[calc(26*var(--unit))]">
        {groups.map((group, i) => (
          <li key={group.heading} className="rounded-[calc(14*var(--unit))] border border-[#ececef] bg-[#f9f9fb] p-[calc(24*var(--unit))] lg:p-[calc(34*var(--unit))]">
            <p className="text-[calc(16*var(--unit))] font-extrabold leading-none text-[#6e0c12] lg:text-[calc(18*var(--unit))]">{String(i + 1).padStart(2, "0")}</p>
            <h2 className="mt-[calc(10*var(--unit))] text-[calc(22*var(--unit))] font-bold leading-[1.2] text-[#141414] lg:mt-[calc(12*var(--unit))] lg:text-[calc(27*var(--unit))]">{group.heading}</h2>
            <span className="mt-[calc(12*var(--unit))] block h-[calc(3*var(--unit))] w-[calc(44*var(--unit))] bg-[#6e0c12] lg:mt-[calc(14*var(--unit))]" aria-hidden="true" />
            <ul className="mt-[calc(12*var(--unit))] lg:mt-[calc(16*var(--unit))]">
              {group.links.map((link) => (
                <li key={link.href} className="border-b border-[#ececef] last:border-b-0">
                  <Link
                    href={link.href}
                    className="flex items-center justify-between gap-[calc(12*var(--unit))] py-[calc(13*var(--unit))] font-(family-name:--font-red-hat-text) text-[calc(16*var(--unit))] font-medium leading-[1.4] text-[#333333] transition-colors duration-200 hover:text-[#6e0c12] lg:py-[calc(15*var(--unit))] lg:text-[calc(18*var(--unit))]"
                  >
                    {link.name}
                    <Icon name="chevron-right" className="size-[calc(17*var(--unit))] shrink-0 text-[#6e0c12]" />
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
