"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Icon from "./icons";
import { contact, site } from "@/data";

const { navLinks, text, images, links } = site.navbar;

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);
}

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const [dropdownLocked, setDropdownLocked] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
    setOpenGroup(null);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="flex h-[calc(72*var(--unit))] items-center px-[calc(20*var(--unit))] sm:px-[calc(32*var(--unit))] lg:h-[calc(108*var(--unit))] lg:pl-[calc(63*var(--unit))] lg:pr-[calc(52*var(--unit))]">
        <Link href={links.home} aria-label={text.homeLabel} onClick={closeMenu} className="block shrink-0">
          <Image
            src={images.logo}
            alt={text.logoAlt}
            width={900}
            height={217}
            preload
            className="h-auto w-[calc(168*var(--unit))] sm:w-[calc(200*var(--unit))] lg:w-[calc(322*var(--unit))]"
          />
        </Link>

        {/* Desktop navigation */}
        <span className="ml-[calc(38*var(--unit))] hidden size-[calc(10*var(--unit))] shrink-0 rounded-full bg-primary lg:block" aria-hidden="true" />
        <nav className="ml-[calc(33*var(--unit))] hidden h-full lg:block" aria-label={text.mainNavLabel}>
          <ul className="flex h-full items-center gap-[calc(37*var(--unit))]">
            {navLinks.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <li key={item.name} className="group relative flex h-full items-center" onPointerLeave={() => setDropdownLocked(false)}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`flex items-center gap-[calc(6*var(--unit))] font-ui text-[calc(16*var(--unit))] font-medium uppercase leading-none tracking-[-0.01em] transition-colors duration-200 hover:text-primary ${
                      active ? "text-primary" : "text-[#1f1f1f]"
                    }`}
                  >
                    {item.name}
                    {item.children.length > 0 && <Icon name="plus" className="size-[calc(13*var(--unit))]" />}
                  </Link>
                  <span
                    aria-hidden="true"
                    className={`absolute -inset-x-[calc(16*var(--unit))] bottom-[calc(21*var(--unit))] h-[calc(4*var(--unit))] bg-primary-shade-77 transition-transform duration-200 group-hover:scale-x-100 ${
                      active ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                  {item.children.length > 0 && (
                    <ul suppressHydrationWarning className={`invisible absolute -left-[calc(24*var(--unit))] top-full w-[calc(270*var(--unit))] translate-y-[calc(8*var(--unit))] border-t-3 border-primary bg-white py-[calc(10*var(--unit))] opacity-0 shadow-[0_calc(16*var(--unit))_calc(40*var(--unit))_color-mix(in_srgb,var(--color-ink)_14%,transparent)] transition-all duration-200 ${dropdownLocked ? "" : "group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100"}`}>
                      {item.children.map((child) => (
                        <li key={child.name}>
                          <Link
                            href={child.href}
                            onClick={(e) => { (e.target as HTMLElement).blur(); setDropdownLocked(true); }}
                            className="block px-[calc(24*var(--unit))] py-[calc(10*var(--unit))] font-ui text-[calc(15*var(--unit))] font-medium text-[#1f1f1f] transition-colors duration-200 hover:bg-accent-tint-9 hover:text-primary"
                          >
                            {child.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="ml-auto flex items-center">
          {/* Phone */}
          <a href={contact.phoneHref} className="hidden items-center gap-[calc(16*var(--unit))] md:flex">
            <span className="flex size-[calc(42*var(--unit))] shrink-0 items-center justify-center rounded-full bg-primary-tint-6 text-primary lg:size-[calc(46*var(--unit))]">
              <Icon name="phone" className="size-[calc(19*var(--unit))] lg:size-[calc(21*var(--unit))]" />
            </span>
            <span className="block">
              <span className="block font-ui text-[calc(12*var(--unit))] leading-none tracking-[-0.01em] text-[#6f6f6f] lg:text-[calc(13*var(--unit))]">{text.needHelp}</span>
              <span className="mt-[calc(8*var(--unit))] block font-ui text-[calc(17*var(--unit))] font-medium leading-none tracking-[-0.03em] text-ink lg:mt-[calc(10*var(--unit))] lg:text-[calc(20*var(--unit))]">
                {contact.phone}
              </span>
            </span>
          </a>
          <span className="mx-[calc(20*var(--unit))] hidden h-[calc(48*var(--unit))] w-px bg-[#e6e6e6] md:block lg:ml-[calc(22*var(--unit))] lg:mr-[calc(25*var(--unit))]" aria-hidden="true" />

          <Link
            href={links.getAQuote}
            className="hidden h-[calc(44*var(--unit))] items-center justify-center gap-[calc(10*var(--unit))] rounded-full bg-primary px-[calc(22*var(--unit))] text-[calc(15*var(--unit))] font-bold text-white transition-colors duration-200 hover:bg-ink sm:flex lg:h-[calc(50*var(--unit))] lg:w-[calc(178*var(--unit))] lg:gap-[calc(12*var(--unit))] lg:px-0 lg:text-[calc(16*var(--unit))]"
          >
            {text.getAQuote}
            <Icon name="arrow-up-right" className="size-[calc(16*var(--unit))] lg:size-[calc(17*var(--unit))]" />
          </Link>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? text.closeMenu : text.openMenu}
            aria-expanded={menuOpen}
            className="ml-[calc(14*var(--unit))] flex size-[calc(44*var(--unit))] cursor-pointer items-center justify-center rounded-full bg-primary-tint-6 text-primary lg:hidden"
          >
            <Icon name={menuOpen ? "x" : "menu"} className="size-[calc(22*var(--unit))]" />
          </button>
        </div>
      </div>

      {/* Mobile / tablet navigation */}
      {menuOpen && (
        <nav
          aria-label={text.mobileNavLabel}
          className="translate-y-0 transition-[opacity,translate] duration-450 ease-out starting:translate-y-[calc(8*var(--unit))] starting:opacity-0 motion-reduce:transition-none absolute inset-x-0 top-full max-h-[calc(100vh-calc(72*var(--unit)))] overflow-y-auto border-t border-[#eeeeee] bg-white px-[calc(20*var(--unit))] pb-[calc(24*var(--unit))] pt-[calc(8*var(--unit))] shadow-[0_calc(24*var(--unit))_calc(40*var(--unit))_color-mix(in_srgb,var(--color-ink)_14%,transparent)] sm:px-[calc(32*var(--unit))] lg:hidden"
        >
          <ul>
            {navLinks.map((item) => {
              const active = isActive(pathname, item.href);
              const expanded = openGroup === item.name;
              return (
                <li key={item.name} className="border-b border-[#eeeeee]">
                  <div className="flex items-center justify-between">
                    <Link
                      href={item.href}
                      onClick={closeMenu}
                      aria-current={active ? "page" : undefined}
                      className={`grow py-[calc(15*var(--unit))] font-ui text-[calc(15*var(--unit))] font-medium uppercase ${active ? "text-primary" : "text-[#1f1f1f]"}`}
                    >
                      {item.name}
                    </Link>
                    {item.children.length > 0 && (
                      <button
                        type="button"
                        onClick={() => setOpenGroup(expanded ? null : item.name)}
                        aria-label={item.name}
                        aria-expanded={expanded}
                        className="flex size-[calc(40*var(--unit))] cursor-pointer items-center justify-center text-primary"
                      >
                        <Icon name="plus" className={`size-[calc(16*var(--unit))] transition-transform duration-200 ${expanded ? "rotate-45" : ""}`} />
                      </button>
                    )}
                  </div>
                  {expanded && (
                    <ul className="pb-[calc(10*var(--unit))]">
                      {item.children.map((child) => (
                        <li key={child.name}>
                          <Link href={child.href} onClick={closeMenu} className="block py-[calc(9*var(--unit))] pl-[calc(16*var(--unit))] font-ui text-[calc(14*var(--unit))] text-[#4a4a4a]">
                            {child.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>

          <a href={contact.phoneHref} className="mt-[calc(20*var(--unit))] flex items-center gap-[calc(14*var(--unit))] md:hidden">
            <span className="flex size-[calc(42*var(--unit))] shrink-0 items-center justify-center rounded-full bg-primary-tint-6 text-primary">
              <Icon name="phone" className="size-[calc(19*var(--unit))]" />
            </span>
            <span className="block">
              <span className="block font-ui text-[calc(12*var(--unit))] leading-none text-[#6f6f6f]">{text.needHelp}</span>
              <span className="mt-[calc(8*var(--unit))] block font-ui text-[calc(17*var(--unit))] font-medium leading-none text-ink">{contact.phone}</span>
            </span>
          </a>
          <Link
            href={links.getAQuote}
            onClick={closeMenu}
            className="mt-[calc(20*var(--unit))] flex h-[calc(48*var(--unit))] items-center justify-center gap-[calc(10*var(--unit))] rounded-full bg-primary text-[calc(15*var(--unit))] font-bold text-white sm:hidden"
          >
            {text.getAQuote}
            <Icon name="arrow-up-right" className="size-[calc(16*var(--unit))]" />
          </Link>
        </nav>
      )}
    </header>
  );
}
