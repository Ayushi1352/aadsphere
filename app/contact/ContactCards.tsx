import Icon from "@/components/icons";
import { contact, fill, site } from "@/data";

// {placeholders} in site.json are filled with the contact details written once in SiteMeta.
const values = {
  phone: contact.phone,
  phoneHref: contact.phoneHref,
  altPhone: contact.altPhone,
  email: contact.email,
  emailHref: contact.emailHref,
  supportEmail: contact.supportEmail,
  directionsHref: contact.directionsHref,
};

// "{addressLines}" expands to every line of the address.
const cards = site.contactPage.cards.map((card) => ({
  ...card,
  lines: card.lines.flatMap((line) => (line === "{addressLines}" ? contact.addressLines : [fill(line, values)])),
  link: { ...card.link, href: fill(card.link.href, values) },
}));

/** Three info cards: headquarters, email address and phone number. */
export default function ContactCards() {
  return (
    <section className="px-20 py-32 font-montserrat sm:px-32 sm:py-40 xl:px-0 xl:py-48">
      <ul data-reveal-group="up" className="grid gap-24 md:grid-cols-2 lg:grid-cols-3 xl:ml-153 xl:w-1380 xl:gap-28">
        {cards.map((card) => (
          <li key={card.title} className="group bg-[#f4f3f1] transition-[translate,box-shadow] duration-300 hover:-translate-y-6 hover:shadow-[0_0.9rem_2rem_rgba(20,20,20,0.1)] p-30 xl:h-446 xl:px-44 xl:pb-0 xl:pt-44">
            <Icon name={card.icon} className="size-48 text-[#0f0f0c] transition-transform duration-300 group-hover:scale-110 xl:size-64" />
            <h2 className="mt-28 fs-28 font-extrabold leading-[1.15] tracking-[-0.02em] text-[#751419] sm:fs-32 xl:mt-63 xl:whitespace-nowrap xl:fs-41 xl:leading-50 xl:tracking-[-0.03em]">{card.title}</h2>
            <p className={`mt-12 fs-17 tracking-[-0.02em] text-[#1d1d1d] sm:fs-19 xl:mt-16 xl:fs-23 ${card.lines.length > 2 ? "leading-[1.45] xl:leading-[2.03125rem]" : "leading-[1.7] xl:leading-39"}`}>
              {card.lines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </p>
            <a
              href={card.link.href}
              {...(card.link.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className={`mt-22 inline-flex items-center gap-14 border-b-2 border-[#1d1d1d] pb-6 fs-17 font-extrabold uppercase leading-none tracking-[-0.01em] text-[#751419] transition-colors duration-200 hover:text-ink xl:gap-12 xl:pb-7 xl:fs-20 ${
                card.lines.length > 2 ? "xl:mt-33" : "xl:mt-52"
              }`}
            >
              {card.link.label}
              <Icon name="arrow-up-right" className="size-22 text-[#1d1d1d] xl:size-30" />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
