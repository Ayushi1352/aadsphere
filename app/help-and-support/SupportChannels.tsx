import Link from "next/link";
import Icon from "@/components/icons";
import { Lines, SectionHeading, SectionLabel } from "@/components/ui";
import { contact, fill, site } from "@/data";

const { label, headingLines, descriptionLines, channels } = site.help;

// {placeholders} in site.json are filled with the contact details written once in SiteMeta.
const values = {
  footerPhone: contact.footerPhone,
  footerPhoneHref: contact.footerPhoneHref,
  email: contact.email,
  emailHref: contact.emailHref,
  hours: contact.hoursLines[0],
};

/** Heading plus the four ways to reach the support team. */
export default function SupportChannels() {
  return (
    <section className="px-20 py-32 sm:px-32 sm:py-40 xl:px-76 xl:py-48">
      <div data-reveal-group="up" className="flex flex-col items-center text-center">
        <SectionLabel text={label} />
        <SectionHeading lines={headingLines} className="mt-18 fs-28 leading-[1.08] sm:fs-52 xl:mt-20 xl:fs-65 xl:leading-64" />
        <p className="mt-18 max-w-680 font-text fs-16 font-medium leading-[1.7] text-body sm:fs-18 xl:mt-14 xl:max-w-none xl:fs-19 xl:leading-29">
          <Lines lines={descriptionLines.map((line) => fill(line, values))} />
        </p>
      </div>

      <ul data-reveal-group="up" className="mt-36 grid gap-20 sm:grid-cols-2 xl:mt-56 xl:grid-cols-4 xl:gap-24">
        {channels.map((channel) => {
          const href = fill(channel.href, values);
          const className =
            "group relative flex h-full flex-col overflow-hidden r-14 border border-[#f3e9ea] bg-white p-26 shadow-[0_0.25rem_1.25rem_rgba(110,12,18,0.06)] transition-[translate,box-shadow] duration-300 hover:-translate-y-6 hover:shadow-[0_0.75rem_2rem_rgba(110,12,18,0.14)] xl:p-32";
          const body = (
            <>
              <span
                aria-hidden="true"
                className="absolute bottom-0 right-0 h-80 w-110 bg-linear-to-tl from-[#fadfe0] to-[#fdf1f1] [clip-path:polygon(100%_0,100%_100%,0_100%)]"
              />
              <span className="relative flex size-72 items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6 r-14 bg-[#fcefef] text-[#c2121c] xl:size-88">
                <Icon name={channel.icon} className="size-36 xl:size-44" />
              </span>
              <span className="relative mt-20 block fs-21 font-extrabold leading-[1.2] text-ink xl:mt-26 xl:fs-25">{channel.title}</span>
              <span className="relative mt-8 block font-text fs-16 leading-[1.55] text-[#555a62] xl:mt-10 xl:fs-18 xl:leading-28">
                <Lines lines={channel.lines} />
              </span>
              <span className="relative mt-18 flex items-center gap-8 break-all fs-16 font-bold text-brand xl:mt-22 xl:fs-18">
                {fill(channel.linkLabel, values)}
                <Icon name="arrow-up-right" className="size-17 shrink-0" />
              </span>
            </>
          );
          return (
            <li key={channel.title}>
              {href.startsWith("/") ? (
                <Link href={href} className={className}>
                  {body}
                </Link>
              ) : (
                <a href={href} className={className}>
                  {body}
                </a>
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
