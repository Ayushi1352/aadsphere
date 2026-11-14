import { Icon } from "@/components/ui/Icon";
import type { ContactCardsProps } from "@/types/templates.types";

/** Three info cards: headquarters, email address and phone number. */
export const ContactCards = ({ data }: ContactCardsProps) => {
  if (!data) return null;
  const { cards } = data;
  return (
    <section className="px-[calc(20*var(--unit))] py-[calc(32*var(--unit))] font-article sm:px-[calc(32*var(--unit))] sm:py-[calc(40*var(--unit))] lg:px-0 lg:py-[calc(48*var(--unit))]">
      <ul data-reveal-group="up" className="grid gap-[calc(24*var(--unit))] md:grid-cols-2 lg:grid-cols-3 lg:mx-auto lg:w-[calc(1240*var(--unit))] lg:gap-[calc(24*var(--unit))]">
        {cards.map((card) => (
          <li key={card.title} className="group bg-[var(--color-contact-card-bg)] transition-[transform,box-shadow] duration-300 hover:-translate-y-[calc(6*var(--unit))] hover:[box-shadow:0_calc(14.4*var(--unit))_calc(32*var(--unit))_var(--color-heading-10)] p-[calc(26*var(--unit))] lg:h-[calc(370*var(--unit))] lg:px-[calc(36*var(--unit))] lg:pb-0 lg:pt-[calc(36*var(--unit))]">
            <Icon name={card.icon} className="size-[calc(40*var(--unit))] text-[var(--color-contact-dark)] transition-transform duration-300 group-hover:scale-110 lg:size-[calc(52*var(--unit))]" />
            <h2 className="mt-[calc(22*var(--unit))] text-[calc(24*var(--unit))] font-bold leading-[1.15] tracking-[-0.02em] text-[var(--color-primary)] sm:text-[calc(28*var(--unit))] lg:mt-[calc(40*var(--unit))] lg:whitespace-nowrap lg:text-[calc(34*var(--unit))] lg:leading-[calc(42*var(--unit))] lg:tracking-[-0.03em]">{card.title}</h2>
            <p className={`mt-[calc(10*var(--unit))] text-[calc(16*var(--unit))] tracking-[-0.02em] text-[var(--color-contact-card-text)] sm:text-[calc(17*var(--unit))] lg:mt-[calc(14*var(--unit))] lg:text-[calc(19*var(--unit))] ${card.lines.length > 2 ? "leading-[1.45] lg:leading-[calc(27.2*var(--unit))]" : "leading-[1.7] lg:leading-[calc(32*var(--unit))]"}`}>
              {card.lines.map((line, i) => (
                <span key={i} className="block">
                  {line}
                </span>
              ))}
            </p>
            <a
              href={card.link.href}
              {...(card.link.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className={`mt-[calc(22*var(--unit))] inline-flex items-center gap-[calc(14*var(--unit))] border-b-2 border-[var(--color-contact-card-text)] pb-[calc(6*var(--unit))] text-[calc(15*var(--unit))] font-bold uppercase leading-none tracking-[-0.01em] text-[var(--color-primary)] transition-colors duration-200 hover:text-[var(--color-heading)] lg:gap-[calc(10*var(--unit))] lg:pb-[calc(6*var(--unit))] lg:text-[calc(17*var(--unit))] ${
                card.lines.length > 2 ? "lg:mt-[calc(26*var(--unit))]" : "lg:mt-[calc(40*var(--unit))]"
              }`}
            >
              {card.link.label}
              <Icon name="LuArrowUpRight" className="size-[calc(18*var(--unit))] text-[var(--color-contact-card-text)] lg:size-[calc(24*var(--unit))]" />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};
