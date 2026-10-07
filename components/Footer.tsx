import Image from "next/image";
import Link from "next/link";
import Icon from "./icons";
import { Lines } from "./ui";
import { contact, site } from "@/data";

const { cta, images, text, links, socials, columns, bottomLinks } = site.footer;

const contactItems = [
  { icon: "map-pin", lines: contact.addressLines, href: "" },
  { icon: "phone-call", lines: [contact.footerPhone], href: contact.footerPhoneHref },
  { icon: "mail", lines: [contact.email], href: contact.emailHref },
  { icon: "clock", lines: contact.hoursLines, href: "" },
];

export default function Footer() {
  return (
    <footer className="relative mt-24 bg-night text-white sm:mt-32 xl:mt-36">
      {/* Call to action strip */}
      <div className="px-16 pt-18 sm:px-32 sm:pt-22 xl:px-60 xl:pt-24">
        <div data-reveal="up" className="r-12 border border-[#451217] bg-linear-to-r from-[#1c0d10] via-[#170c0e] to-[#1a0d0f] px-18 py-16 sm:px-28 sm:py-22 lg:flex lg:items-center lg:justify-between lg:gap-28">
          <div className="border-l-3 border-cta pl-14 sm:pl-20">
            <p className="fs-13 font-bold uppercase leading-none tracking-[0.16em] text-[#ee3446] sm:fs-16">{cta.eyebrow}</p>
            <p className="mt-6 fs-20 font-bold leading-tight sm:mt-8 sm:fs-28 xl:fs-34 xl:leading-38">
              {cta.heading} <em className="font-extrabold text-[#e21b2d]">{cta.headingHighlight}</em>
            </p>
          </div>
          <span className="hidden h-56 w-px bg-[#3a3d42] lg:block" aria-hidden="true" />
          <p className="mt-10 fs-14 leading-[1.55] text-[#e3e3e3] sm:mt-12 sm:fs-18 lg:mt-0 lg:max-w-380 xl:max-w-480 xl:leading-28">
            <Lines lines={cta.descriptionLines} />
          </p>
          <Link
            href={cta.button.href}
            className="mt-14 inline-flex h-44 shrink-0 items-center justify-center gap-10 rounded-full bg-cta px-22 fs-14 font-bold text-white transition-colors duration-200 hover:bg-white hover:text-brand sm:mt-16 sm:h-52 sm:px-28 sm:fs-16 xl:h-56 xl:px-32 xl:fs-18"
          >
            {cta.button.label}
            <Icon name="arrow-right" className="size-18 sm:size-20 xl:size-22" />
          </Link>
        </div>
      </div>

      {/* Main footer grid */}
      <div data-reveal-group="up" className="grid grid-cols-2 gap-x-12 gap-y-22 px-14 py-22 sm:grid-cols-12 sm:gap-x-20 sm:gap-y-28 sm:px-32 sm:py-30 lg:gap-x-16 lg:px-36 lg:py-36 xl:gap-x-24 xl:px-60 xl:py-40">
        {/* Brand & About */}
        <div className="col-span-2 sm:col-span-4 lg:col-span-3 xl:col-span-3">
          <Link href={links.home} aria-label={text.homeLabel} className="block w-fit">
            <Image src={images.logo} alt={text.logoAlt} width={900} height={217} className="h-auto w-140 sm:w-180 lg:w-210 xl:w-250 brightness-[1.3] saturate-[1.15]" />
          </Link>
          <p className="mt-10 max-w-380 fs-13 leading-[1.6] text-[#d6d6d6] sm:mt-12 sm:fs-14 lg:fs-15 lg:leading-[1.6] xl:fs-18 xl:leading-28">
            <Lines lines={text.descriptionLines} />
          </p>
          <ul className="mt-12 flex gap-10 sm:mt-16 sm:gap-12">
            {socials.map((social) => (
              <li key={social.name}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="flex size-34 items-center justify-center r-8 border border-[#23262b] bg-[#14171a] text-white transition-[translate,color,background-color,border-color] duration-200 hover:-translate-y-2 hover:border-cta hover:bg-cta sm:size-38 lg:size-40 xl:size-46"
                >
                  <Icon name={social.icon} className="size-17 sm:size-19 lg:size-20 xl:size-23" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Navigation Link Columns */}
        {columns.map((column, i) => (
          <nav
            key={column.heading}
            aria-label={column.heading}
            className={`col-span-1 ${
              i === 0
                ? "sm:col-span-4 lg:col-span-2 xl:col-span-2"
                : i === 1
                ? "sm:col-span-4 lg:col-span-2 xl:col-span-2"
                : "sm:col-span-6 lg:col-span-2 xl:col-span-2 sm:border-t sm:border-[#1c2023] sm:pt-24 lg:border-t-0 lg:pt-0"
            } lg:border-l lg:border-[#1c2023] lg:pl-16 xl:pl-24`}
          >
            <h3 className="fs-15 font-extrabold leading-none tracking-tight text-white sm:fs-18 lg:fs-18 xl:fs-23">{column.heading}</h3>
            <span className="mt-6 block h-2 w-24 bg-cta sm:mt-8 sm:h-3 sm:w-32 xl:w-36" aria-hidden="true" />
            <ul className="mt-8 space-y-6 sm:mt-12 sm:space-y-8 lg:mt-12 lg:space-y-9 xl:mt-18 xl:space-y-12">
              {column.links.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="flex items-center justify-between gap-2 fs-12 font-medium leading-[1.3] text-[#e2e2e2] transition-colors duration-200 hover:text-[#ee3446] sm:fs-14 lg:fs-15 xl:fs-18"
                  >
                    <span>{link.name}</span>
                    <Icon name="chevron-right" className="size-11 shrink-0 text-[#888] sm:size-13 lg:size-14 xl:size-17" />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}

        {/* Contact info column */}
        <div className="col-span-1 sm:col-span-6 lg:col-span-3 xl:col-span-3 sm:border-t sm:border-[#1c2023] sm:pt-24 lg:border-t-0 lg:border-l lg:border-[#1c2023] lg:pl-16 lg:pt-0 xl:pl-24">
          <h3 className="fs-15 font-extrabold leading-none tracking-tight text-white sm:fs-18 lg:fs-18 xl:fs-23">{text.contactHeading}</h3>
          <span className="mt-6 block h-2 w-24 bg-cta sm:mt-8 sm:h-3 sm:w-32 xl:w-36" aria-hidden="true" />
          <ul className="mt-8 space-y-7 sm:mt-12 sm:space-y-8 lg:mt-12 lg:space-y-10 xl:mt-18 xl:space-y-15">
            {contactItems.map((item) => {
              const body = (
                <>
                  <span className="flex size-26 shrink-0 items-center justify-center r-6 bg-[#cc0f20] text-white sm:size-32 lg:size-36 xl:size-44">
                    <Icon name={item.icon} className="size-13 sm:size-16 lg:size-18 xl:size-22" />
                  </span>
                  <span className="min-w-0 fs-11 font-medium leading-[1.35] tracking-tight text-[#ededed] sm:fs-13 lg:fs-14 xl:fs-18 xl:leading-25">
                    {item.lines.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </span>
                </>
              );
              const className = "flex items-start gap-6 sm:items-center sm:gap-8 lg:gap-10 min-w-0";
              return (
                <li key={item.icon} className="min-w-0">
                  {item.href ? (
                    <a href={item.href} className={`${className} transition-colors duration-200 hover:text-[#ee3446]`}>
                      {body}
                    </a>
                  ) : (
                    <div className={className}>{body}</div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#1f2326] px-16 py-12 font-inter fs-13 tracking-tight text-[#c8c8c8] sm:px-32 sm:py-16 lg:px-36 lg:fs-15 xl:px-60 xl:fs-18">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          <p>{text.copyright}</p>
          <ul className="flex flex-wrap items-center gap-y-4">
            {bottomLinks.map((link, i) => (
              <li key={link.name} className="flex items-center">
                {i > 0 && <span className="mx-10 h-12 w-px bg-[#6a6d70] sm:mx-14 sm:h-16" aria-hidden="true" />}
                <Link href={link.href} className="transition-colors duration-200 hover:text-[#ee3446]">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
