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
    <footer className="relative mt-[calc(24*var(--unit))] bg-[#0c0e10] text-white sm:mt-[calc(32*var(--unit))] lg:mt-[calc(36*var(--unit))]">
      {/* Call to action strip */}
      <div className="px-[calc(16*var(--unit))] pt-[calc(18*var(--unit))] sm:px-[calc(32*var(--unit))] sm:pt-[calc(22*var(--unit))] lg:px-[calc(60*var(--unit))] lg:pt-[calc(24*var(--unit))]">
        <div data-reveal="up" className="rounded-[calc(12*var(--unit))] border border-primary-shade-70 bg-linear-to-r from-primary-shade-31 via-primary-shade-25 to-primary-shade-31 px-[calc(18*var(--unit))] py-[calc(16*var(--unit))] sm:px-[calc(28*var(--unit))] sm:py-[calc(22*var(--unit))] lg:flex lg:items-center lg:justify-between lg:gap-[calc(28*var(--unit))]">
          <div className="border-l-3 border-accent pl-[calc(14*var(--unit))] sm:pl-[calc(20*var(--unit))]">
            <p className="text-[calc(13*var(--unit))] font-bold uppercase leading-none tracking-[0.16em] text-accent sm:text-[calc(16*var(--unit))]">{cta.eyebrow}</p>
            <p className="mt-[calc(6*var(--unit))] text-[calc(20*var(--unit))] font-bold leading-tight sm:mt-[calc(8*var(--unit))] sm:text-[calc(28*var(--unit))] lg:text-[calc(34*var(--unit))] lg:leading-[calc(38*var(--unit))]">
              {cta.heading} <em className="font-extrabold text-accent">{cta.headingHighlight}</em>
            </p>
          </div>
          <span className="hidden h-[calc(56*var(--unit))] w-px bg-[#3a3d42] lg:block" aria-hidden="true" />
          <p className="mt-[calc(10*var(--unit))] text-[calc(14*var(--unit))] leading-[1.55] text-[#e3e3e3] sm:mt-[calc(12*var(--unit))] sm:text-[calc(18*var(--unit))] lg:mt-0 lg:max-w-[calc(480*var(--unit))] lg:leading-[calc(28*var(--unit))]">
            <Lines lines={cta.descriptionLines} />
          </p>
          <Link
            href={cta.button.href}
            className="mt-[calc(14*var(--unit))] inline-flex h-[calc(44*var(--unit))] shrink-0 items-center justify-center gap-[calc(10*var(--unit))] rounded-full bg-accent px-[calc(22*var(--unit))] text-[calc(14*var(--unit))] font-bold text-white transition-colors duration-200 hover:bg-white hover:text-accent sm:mt-[calc(16*var(--unit))] sm:h-[calc(52*var(--unit))] sm:px-[calc(28*var(--unit))] sm:text-[calc(16*var(--unit))] lg:h-[calc(56*var(--unit))] lg:px-[calc(32*var(--unit))] lg:text-[calc(18*var(--unit))]"
          >
            {cta.button.label}
            <Icon name="arrow-right" className="size-[calc(18*var(--unit))] sm:size-[calc(20*var(--unit))] lg:size-[calc(22*var(--unit))]" />
          </Link>
        </div>
      </div>

      {/* Main footer grid */}
      <div data-reveal-group="up" className="grid grid-cols-2 gap-x-[calc(12*var(--unit))] gap-y-[calc(22*var(--unit))] px-[calc(14*var(--unit))] py-[calc(22*var(--unit))] sm:grid-cols-12 sm:gap-x-[calc(20*var(--unit))] sm:gap-y-[calc(28*var(--unit))] sm:px-[calc(32*var(--unit))] sm:py-[calc(30*var(--unit))] lg:gap-x-[calc(24*var(--unit))] lg:px-[calc(60*var(--unit))] lg:py-[calc(40*var(--unit))]">
        {/* Brand & About */}
        <div className="col-span-2 sm:col-span-4 lg:col-span-3">
          <Link href={links.home} aria-label={text.homeLabel} className="block w-fit">
            <Image src={images.logo} alt={text.logoAlt} width={900} height={217} className="h-auto w-[calc(140*var(--unit))] sm:w-[calc(180*var(--unit))] lg:w-[calc(250*var(--unit))] brightness-[1.3] saturate-[1.15]" />
          </Link>
          <p className="mt-[calc(10*var(--unit))] max-w-[calc(380*var(--unit))] text-[calc(13*var(--unit))] leading-[1.6] text-[#d6d6d6] sm:mt-[calc(12*var(--unit))] sm:text-[calc(14*var(--unit))] lg:text-[calc(18*var(--unit))] lg:leading-[calc(28*var(--unit))]">
            <Lines lines={text.descriptionLines} />
          </p>
          <ul className="mt-[calc(12*var(--unit))] flex gap-[calc(10*var(--unit))] sm:mt-[calc(16*var(--unit))] sm:gap-[calc(12*var(--unit))]">
            {socials.map((social) => (
              <li key={social.name}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="flex size-[calc(34*var(--unit))] items-center justify-center rounded-[calc(8*var(--unit))] border border-[#23262b] bg-[#14171a] text-white transition-[translate,color,background-color,border-color] duration-200 hover:-translate-y-[calc(2*var(--unit))] hover:border-accent hover:bg-accent sm:size-[calc(38*var(--unit))] lg:size-[calc(46*var(--unit))]"
                >
                  <Icon name={social.icon} className="size-[calc(17*var(--unit))] sm:size-[calc(19*var(--unit))] lg:size-[calc(23*var(--unit))]" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Navigation Link Columns */}
        {columns.map((column) => (
          <nav
            key={column.heading}
            aria-label={column.heading}
            className="col-span-1 sm:col-span-4 lg:col-span-3 lg:border-l lg:border-[#1c2023] lg:pl-[calc(24*var(--unit))]"
          >
            <h3 className="text-[calc(15*var(--unit))] font-extrabold leading-none tracking-tight text-white sm:text-[calc(18*var(--unit))] lg:text-[calc(23*var(--unit))]">{column.heading}</h3>
            <span className="mt-[calc(6*var(--unit))] block h-[calc(2*var(--unit))] w-[calc(24*var(--unit))] bg-accent sm:mt-[calc(8*var(--unit))] sm:h-[calc(3*var(--unit))] sm:w-[calc(32*var(--unit))] lg:w-[calc(36*var(--unit))]" aria-hidden="true" />
            <ul className="mt-[calc(8*var(--unit))] space-y-[calc(6*var(--unit))] sm:mt-[calc(12*var(--unit))] sm:space-y-[calc(8*var(--unit))] lg:mt-[calc(18*var(--unit))] lg:space-y-[calc(12*var(--unit))]">
              {column.links.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="flex items-center justify-between gap-[calc(2*var(--unit))] text-[calc(12*var(--unit))] font-medium leading-[1.3] text-[#e2e2e2] transition-colors duration-200 hover:text-accent sm:text-[calc(14*var(--unit))] lg:text-[calc(18*var(--unit))]"
                  >
                    <span>{link.name}</span>
                    <Icon name="chevron-right" className="size-[calc(11*var(--unit))] shrink-0 text-[#888] sm:size-[calc(13*var(--unit))] lg:size-[calc(17*var(--unit))]" />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}

        {/* Contact info column */}
        <div className="col-span-1 sm:col-span-4 lg:col-span-3 lg:border-l lg:border-[#1c2023] lg:pl-[calc(24*var(--unit))]">
          <h3 className="text-[calc(15*var(--unit))] font-extrabold leading-none tracking-tight text-white sm:text-[calc(18*var(--unit))] lg:text-[calc(23*var(--unit))]">{text.contactHeading}</h3>
          <span className="mt-[calc(6*var(--unit))] block h-[calc(2*var(--unit))] w-[calc(24*var(--unit))] bg-accent sm:mt-[calc(8*var(--unit))] sm:h-[calc(3*var(--unit))] sm:w-[calc(32*var(--unit))] lg:w-[calc(36*var(--unit))]" aria-hidden="true" />
          <ul className="mt-[calc(8*var(--unit))] space-y-[calc(7*var(--unit))] sm:mt-[calc(12*var(--unit))] sm:space-y-[calc(8*var(--unit))] lg:mt-[calc(18*var(--unit))] lg:space-y-[calc(15*var(--unit))]">
            {contactItems.map((item) => {
              const body = (
                <>
                  <span className="flex size-[calc(26*var(--unit))] shrink-0 items-center justify-center rounded-[calc(6*var(--unit))] bg-accent text-white sm:size-[calc(32*var(--unit))] lg:size-[calc(44*var(--unit))]">
                    <Icon name={item.icon} className="size-[calc(13*var(--unit))] sm:size-[calc(16*var(--unit))] lg:size-[calc(22*var(--unit))]" />
                  </span>
                  <span className="min-w-0 text-[calc(11*var(--unit))] font-medium leading-[1.35] tracking-tight text-[#ededed] sm:text-[calc(13*var(--unit))] lg:text-[calc(18*var(--unit))] lg:leading-[calc(25*var(--unit))]">
                    {item.lines.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </span>
                </>
              );
              const className = "flex items-start gap-[calc(6*var(--unit))] sm:items-center sm:gap-[calc(8*var(--unit))] lg:gap-[calc(10*var(--unit))] min-w-0";
              return (
                <li key={item.icon} className="min-w-0">
                  {item.href ? (
                    <a href={item.href} className={`${className} transition-colors duration-200 hover:text-accent`}>
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
      <div className="border-t border-[#1f2326] px-[calc(16*var(--unit))] py-[calc(12*var(--unit))] font-ui text-[calc(13*var(--unit))] tracking-tight text-[#c8c8c8] sm:px-[calc(32*var(--unit))] sm:py-[calc(16*var(--unit))] lg:px-[calc(60*var(--unit))] lg:text-[calc(18*var(--unit))]">
        <div className="flex flex-col gap-[calc(8*var(--unit))] sm:flex-row sm:items-center sm:justify-between">
          <p>{text.copyright}</p>
          <ul className="flex flex-wrap items-center gap-y-[calc(4*var(--unit))]">
            {bottomLinks.map((link, i) => (
              <li key={link.name} className="flex items-center">
                {i > 0 && <span className="mx-[calc(10*var(--unit))] h-[calc(12*var(--unit))] w-px bg-[#6a6d70] sm:mx-[calc(14*var(--unit))] sm:h-[calc(16*var(--unit))]" aria-hidden="true" />}
                <Link href={link.href} className="transition-colors duration-200 hover:text-accent">
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
