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
      <div className="flex h-72 items-center px-20 sm:px-32 xl:h-108 xl:pl-63 xl:pr-52">
        <Link href={links.home} aria-label={text.homeLabel} onClick={closeMenu} className="block shrink-0">
          <Image
            src={images.logo}
            alt={text.logoAlt}
            width={900}
            height={217}
            preload
            className="h-auto w-168 sm:w-200 xl:w-322"
          />
        </Link>

        {/* Desktop navigation */}
        <span className="ml-38 hidden size-10 shrink-0 rounded-full bg-brand xl:block" aria-hidden="true" />
        <nav className="ml-33 hidden h-full xl:block" aria-label={text.mainNavLabel}>
          <ul className="flex h-full items-center gap-37">
            {navLinks.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <li key={item.name} className="group relative flex h-full items-center" onPointerLeave={() => setDropdownLocked(false)}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`flex items-center gap-6 font-inter fs-16 font-medium uppercase leading-none tracking-[-0.01em] transition-colors duration-200 hover:text-brand ${
                      active ? "text-brand" : "text-[#1f1f1f]"
                    }`}
                  >
                    {item.name}
                    {item.children.length > 0 && <Icon name="plus" className="size-13" />}
                  </Link>
                  <span
                    aria-hidden="true"
                    className={`absolute -inset-x-16 bottom-1 h-4 bg-brand-dark transition-transform duration-200 group-hover:scale-x-100 ${
                      active ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                  {item.children.length > 0 && (
                    <ul className={`invisible absolute -left-24 top-full w-270 translate-y-8 border-t-3 border-brand bg-white py-10 opacity-0 shadow-[0_1rem_2.5rem_rgba(20,20,20,0.14)] transition-all duration-200 ${dropdownLocked ? "" : "group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100"}`}>
                      {item.children.map((child) => (
                        <li key={child.name}>
                          <Link
                            href={child.href}
                            onClick={(e) => { (e.target as HTMLElement).blur(); setDropdownLocked(true); }}
                            className="block px-24 py-10 font-inter fs-15 font-medium text-[#1f1f1f] transition-colors duration-200 hover:bg-blush hover:text-brand"
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
          <a href={contact.phoneHref} className="hidden items-center gap-16 md:flex">
            <span className="flex size-42 shrink-0 items-center justify-center rounded-full bg-[#f7eeef] text-brand xl:size-46">
              <Icon name="phone" className="size-19 xl:size-21" />
            </span>
            <span className="block">
              <span className="block font-inter fs-12 leading-none tracking-[-0.01em] text-[#6f6f6f] xl:fs-13">{text.needHelp}</span>
              <span className="mt-8 block font-inter fs-17 font-medium leading-none tracking-[-0.03em] text-ink xl:mt-10 xl:fs-20">
                {contact.phone}
              </span>
            </span>
          </a>
          <span className="mx-20 hidden h-48 w-px bg-[#e6e6e6] md:block xl:ml-22 xl:mr-25" aria-hidden="true" />

          <Link
            href={links.getAQuote}
            className="hidden h-44 items-center justify-center gap-10 rounded-full bg-[#741415] px-22 fs-15 font-bold text-white transition-colors duration-200 hover:bg-ink sm:flex xl:h-50 xl:w-178 xl:gap-12 xl:px-0 xl:fs-16"
          >
            {text.getAQuote}
            <Icon name="arrow-up-right" className="size-16 xl:size-17" />
          </Link>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? text.closeMenu : text.openMenu}
            aria-expanded={menuOpen}
            className="ml-14 flex size-44 cursor-pointer items-center justify-center rounded-full bg-[#f7eeef] text-brand xl:hidden"
          >
            <Icon name={menuOpen ? "x" : "menu"} className="size-22" />
          </button>
        </div>
      </div>

      {/* Mobile / tablet navigation */}
      {menuOpen && (
        <nav
          aria-label={text.mobileNavLabel}
          className="animate-fade-in absolute inset-x-0 top-full max-h-[calc(100vh-4.5rem)] overflow-y-auto border-t border-[#eeeeee] bg-white px-20 pb-24 pt-8 shadow-[0_1.5rem_2.5rem_rgba(20,20,20,0.14)] sm:px-32 xl:hidden"
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
                      className={`grow py-15 font-inter fs-15 font-medium uppercase ${active ? "text-brand" : "text-[#1f1f1f]"}`}
                    >
                      {item.name}
                    </Link>
                    {item.children.length > 0 && (
                      <button
                        type="button"
                        onClick={() => setOpenGroup(expanded ? null : item.name)}
                        aria-label={item.name}
                        aria-expanded={expanded}
                        className="flex size-40 cursor-pointer items-center justify-center text-brand"
                      >
                        <Icon name="plus" className={`size-16 transition-transform duration-200 ${expanded ? "rotate-45" : ""}`} />
                      </button>
                    )}
                  </div>
                  {expanded && (
                    <ul className="pb-10">
                      {item.children.map((child) => (
                        <li key={child.name}>
                          <Link href={child.href} onClick={closeMenu} className="block py-9 pl-16 font-inter fs-14 text-[#4a4a4a]">
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

          <a href={contact.phoneHref} className="mt-20 flex items-center gap-14 md:hidden">
            <span className="flex size-42 shrink-0 items-center justify-center rounded-full bg-[#f7eeef] text-brand">
              <Icon name="phone" className="size-19" />
            </span>
            <span className="block">
              <span className="block font-inter fs-12 leading-none text-[#6f6f6f]">{text.needHelp}</span>
              <span className="mt-8 block font-inter fs-17 font-medium leading-none text-ink">{contact.phone}</span>
            </span>
          </a>
          <Link
            href={links.getAQuote}
            onClick={closeMenu}
            className="mt-20 flex h-48 items-center justify-center gap-10 rounded-full bg-[#741415] fs-15 font-bold text-white sm:hidden"
          >
            {text.getAQuote}
            <Icon name="arrow-up-right" className="size-16" />
          </Link>
        </nav>
      )}
    </header>
  );
}
