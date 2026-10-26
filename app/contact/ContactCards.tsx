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
    <section className="px-[calc(20*var(--unit))] py-[calc(32*var(--unit))] font-(family-name:--font-montserrat-face) sm:px-[calc(32*var(--unit))] sm:py-[calc(40*var(--unit))] lg:px-0 lg:py-[calc(48*var(--unit))]">
      <ul data-reveal-group="up" className="grid gap-[calc(24*var(--unit))] md:grid-cols-2 lg:grid-cols-3 lg:mx-auto lg:w-[calc(1240*var(--unit))] lg:gap-[calc(24*var(--unit))]">
        {cards.map((card) => (
          <li key={card.title} className="group bg-[#f4f3f1] transition-[translate,box-shadow] duration-300 hover:-translate-y-[calc(6*var(--unit))] hover:shadow-[0_calc(14.4*var(--unit))_calc(32*var(--unit))_rgba(20,20,20,0.1)] p-[calc(26*var(--unit))] lg:h-[calc(370*var(--unit))] lg:px-[calc(36*var(--unit))] lg:pb-0 lg:pt-[calc(36*var(--unit))]">
            <Icon name={card.icon} className="size-[calc(40*var(--unit))] text-[#0f0f0c] transition-transform duration-300 group-hover:scale-110 lg:size-[calc(52*var(--unit))]" />
            <h2 className="mt-[calc(22*var(--unit))] text-[calc(24*var(--unit))] font-bold leading-[1.15] tracking-[-0.02em] text-[#6e0c12] sm:text-[calc(28*var(--unit))] lg:mt-[calc(40*var(--unit))] lg:whitespace-nowrap lg:text-[calc(34*var(--unit))] lg:leading-[calc(42*var(--unit))] lg:tracking-[-0.03em]">{card.title}</h2>
            <p className={`mt-[calc(10*var(--unit))] text-[calc(16*var(--unit))] tracking-[-0.02em] text-[#1d1d1d] sm:text-[calc(17*var(--unit))] lg:mt-[calc(14*var(--unit))] lg:text-[calc(19*var(--unit))] ${card.lines.length > 2 ? "leading-[1.45] lg:leading-[calc(27.2*var(--unit))]" : "leading-[1.7] lg:leading-[calc(32*var(--unit))]"}`}>
              {card.lines.map((line, i) => (
                <span key={i} className="block">
                  {line}
                </span>
              ))}
            </p>
            <a
              href={card.link.href}
              {...(card.link.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className={`mt-[calc(22*var(--unit))] inline-flex items-center gap-[calc(14*var(--unit))] border-b-2 border-[#1d1d1d] pb-[calc(6*var(--unit))] text-[calc(15*var(--unit))] font-bold uppercase leading-none tracking-[-0.01em] text-[#6e0c12] transition-colors duration-200 hover:text-[#141414] lg:gap-[calc(10*var(--unit))] lg:pb-[calc(6*var(--unit))] lg:text-[calc(17*var(--unit))] ${
                card.lines.length > 2 ? "lg:mt-[calc(26*var(--unit))]" : "lg:mt-[calc(40*var(--unit))]"
              }`}
            >
              {card.link.label}
              <Icon name="arrow-up-right" className="size-[calc(18*var(--unit))] text-[#1d1d1d] lg:size-[calc(24*var(--unit))]" />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
