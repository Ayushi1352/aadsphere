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
    <footer className="relative mt-32 bg-night text-white sm:mt-40 xl:mt-48 xl:h-799">
      {/* Call to action */}
      <div className="px-20 pt-40 sm:px-32 xl:pl-63 xl:pr-52 xl:pt-51">
        <div data-reveal="up" className="r-12 border border-[#451217] bg-linear-to-r from-[#1c0d10] via-[#170c0e] to-[#1a0d0f] px-24 py-28 lg:flex lg:items-center lg:justify-between lg:gap-32 xl:relative xl:block xl:h-130 xl:p-0">
          <div className="border-l-3 border-cta pl-20 xl:absolute xl:left-43 xl:top-32 xl:h-64 xl:border-l-[0.1875rem] xl:pl-46">
            <p className="fs-14 font-bold uppercase leading-none tracking-[0.17em] text-[#ee3446] xl:-mt-2 xl:fs-17">{cta.eyebrow}</p>
            <p className="mt-12 fs-24 font-bold leading-[1.2] sm:fs-30 xl:mt-6 xl:whitespace-nowrap xl:fs-36 xl:leading-40">
              {cta.heading} <em className="font-extrabold text-[#e21b2d]">{cta.headingHighlight}</em>
            </p>
          </div>
          <span className="absolute left-793 top-36 hidden h-60 w-px bg-[#3a3d42] xl:block" aria-hidden="true" />
          <p className="mt-18 fs-15 leading-[1.6] text-[#e3e3e3] lg:mt-0 lg:max-w-360 xl:absolute xl:left-836 xl:top-42 xl:max-w-none xl:whitespace-nowrap xl:fs-16 xl:leading-25">
            <Lines lines={cta.descriptionLines} />
          </p>
          <Link
            href={cta.button.href}
            className="mt-22 inline-flex h-54 shrink-0 items-center justify-center gap-14 rounded-full bg-cta px-30 fs-16 font-bold text-white transition-colors duration-200 hover:bg-white hover:text-brand lg:mt-0 xl:absolute xl:left-1287 xl:top-31 xl:h-66 xl:w-260 xl:gap-18 xl:px-0 xl:fs-18"
          >
            {cta.button.label}
            <Icon name="arrow-right" className="size-20 xl:size-22" />
          </Link>
        </div>
      </div>

      {/* Main footer */}
      <div data-reveal-group="up" className="grid gap-x-24 gap-y-40 px-20 py-48 sm:grid-cols-2 sm:px-32 lg:grid-cols-3 xl:block xl:p-0">
        <div className="sm:col-span-2 lg:col-span-3 xl:absolute xl:left-63 xl:top-246">
          <Link href={links.home} aria-label={text.homeLabel} className="block w-fit">
            <Image src={images.logo} alt={text.logoAlt} width={900} height={217} className="h-auto w-168 sm:w-200 xl:w-322 brightness-[1.3] saturate-[1.15]" />
          </Link>
          <p className="mt-18 max-w-440 fs-16 leading-[1.6] text-[#d4d4d4] xl:ml-3 xl:mt-15 xl:max-w-none xl:whitespace-nowrap xl:fs-20 xl:leading-[1.65625rem]">
            <Lines lines={text.descriptionLines} />
          </p>
          <ul className="mt-22 flex gap-16 xl:ml-3 xl:mt-18 xl:gap-21">
            {socials.map((social) => (
              <li key={social.name}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="flex size-46 items-center justify-center r-8 border border-[#23262b] bg-[#14171a] text-white transition-[translate,color,background-color,border-color] duration-200 hover:-translate-y-4 hover:border-cta hover:bg-cta xl:size-48"
                >
                  <Icon name={social.icon} className="size-24 xl:size-27" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {columns.map((column, i) => (
          <nav
            key={column.heading}
            aria-label={column.heading}
            className={`xl:absolute xl:top-242 xl:h-427 xl:border-l xl:border-[#1c2023] ${
              ["xl:left-588 xl:w-244 xl:pl-42", "xl:left-832 xl:w-265 xl:pl-36", "xl:left-1097 xl:w-246 xl:pl-36"][i]
            }`}
          >
            <h3 className="fs-20 font-extrabold leading-none tracking-[-0.02em] xl:mt-6 xl:fs-22">{column.heading}</h3>
            <span className="mt-14 block h-3 w-40 bg-cta xl:mt-15" aria-hidden="true" />
            <ul className="mt-18 xl:mt-19">
              {column.links.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="flex items-center justify-between gap-8 whitespace-nowrap py-9 fs-15 font-medium leading-none tracking-[-0.01em] text-[#e6e6e6] transition-colors duration-200 hover:text-[#ee3446] xl:h-[2.58125rem] xl:py-0 xl:pl-2 xl:pr-26 xl:fs-16"
                  >
                    {link.name}
                    <Icon name="chevron-right" className="size-17 shrink-0" />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}

        <div className="sm:col-span-2 lg:col-span-3 xl:absolute xl:left-1343 xl:top-242 xl:h-427 xl:w-343 xl:border-l xl:border-[#1c2023] xl:pl-39">
          <h3 className="fs-20 font-extrabold leading-none tracking-[-0.02em] xl:mt-6 xl:fs-22">{text.contactHeading}</h3>
          <span className="mt-14 block h-3 w-40 bg-cta xl:mt-15" aria-hidden="true" />
          <ul className="mt-22 grid gap-20 sm:grid-cols-2 xl:mt-29 xl:block">
            {contactItems.map((item, i) => {
              const body = (
                <>
                  <span className="flex h-46 w-44 shrink-0 items-center justify-center r-8 bg-[#cc0f20] text-white">
                    <Icon name={item.icon} className="size-23" />
                  </span>
                  <span className="fs-15 font-medium leading-[1.55] tracking-[-0.02em] text-[#ededed] xl:whitespace-nowrap xl:fs-16 xl:leading-24">
                    {item.lines.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </span>
                </>
              );
              const className = `flex items-center gap-16 xl:gap-23 ${["", "xl:mt-30", "xl:mt-28", "xl:mt-34"][i]}`;
              return (
                <li key={item.icon}>
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
      <div className="flex flex-col gap-14 border-t border-[#1f2326] px-20 py-22 font-inter fs-14 tracking-[-0.025em] text-[#e6e6e6] sm:flex-row sm:items-center sm:justify-between sm:px-32 xl:absolute xl:inset-x-0 xl:top-716 xl:h-83 xl:pl-63 xl:pr-52 xl:py-0 xl:pb-8 xl:fs-15">
        <p>{text.copyright}</p>
        <ul className="flex flex-wrap items-center gap-y-6">
          {bottomLinks.map((link, i) => (
            <li key={link.name} className="flex items-center">
              {i > 0 && <span className="mx-14 h-14 w-px bg-[#8a8d90] xl:mx-24 xl:h-16" aria-hidden="true" />}
              <Link href={link.href} className="transition-colors duration-200 hover:text-[#ee3446]">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
