import Icon from "@/components/icons";
import { site } from "@/data";

const { cards } = site.contactPage;

/** Three info cards: headquarters, email address and phone number. */
export default function ContactCards() {
  return (
    <section className="px-20 py-56 font-montserrat sm:px-32 sm:py-72 xl:px-0 xl:pb-161 xl:pt-85">
      <ul className="grid gap-24 md:grid-cols-2 lg:grid-cols-3 xl:ml-153 xl:w-1380 xl:gap-28">
        {cards.map((card) => (
          <li key={card.title} className="bg-[#f4f3f1] p-30 xl:h-446 xl:px-44 xl:pb-0 xl:pt-44">
            <Icon name={card.icon} className="size-48 text-[#0f0f0c] xl:size-64" />
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
