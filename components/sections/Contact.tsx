'use client';

import type { FormEvent } from 'react';
import { Lines } from '@/components/ui/Text';
import { useSentMessage } from '@/components/ui/useSentMessage';
import { Icon } from '@/components/ui/Icon';
import type { ContactProps } from '@/types/templates.types';

/** Three info cards: headquarters, email address and phone number. */
const ContactCards = ({ data }: ContactProps) => {
  if (!data) return null;
  const { cards } = data;
  return (
    <section className="px-[calc(20*var(--unit))] py-[calc(32*var(--unit))] font-article sm:px-[calc(32*var(--unit))] sm:py-[calc(40*var(--unit))] lg:px-0 lg:py-[calc(48*var(--unit))]">
      <ul data-reveal-group="up" className="grid gap-[calc(24*var(--unit))] md:grid-cols-2 lg:grid-cols-3 lg:mx-auto lg:w-[calc(1240*var(--unit))] lg:gap-[calc(24*var(--unit))]">
        {cards.map((card) => (
          <li key={card.id} className="group bg-[var(--color-contact-card-bg)] transition-[transform,box-shadow] duration-300 hover:-translate-y-[calc(6*var(--unit))] hover:[box-shadow:0_calc(14.4*var(--unit))_calc(32*var(--unit))_var(--color-heading-10)] p-[calc(26*var(--unit))] lg:h-[calc(370*var(--unit))] lg:px-[calc(36*var(--unit))] lg:pb-0 lg:pt-[calc(36*var(--unit))]">
            <Icon name={card.icon} className="size-[calc(40*var(--unit))] text-[var(--color-contact-dark)] transition-transform duration-300 group-hover:scale-110 lg:size-[calc(52*var(--unit))]" />
            <h2 className="mt-[calc(22*var(--unit))] text-[calc(24*var(--unit))] font-bold leading-[1.15] tracking-[-0.02em] text-[var(--color-primary)] sm:text-[calc(28*var(--unit))] lg:mt-[calc(40*var(--unit))] lg:whitespace-nowrap lg:text-[calc(34*var(--unit))] lg:leading-[calc(42*var(--unit))] lg:tracking-[-0.03em]">{card.title}</h2>
            <p className={`mt-[calc(10*var(--unit))] text-[calc(16*var(--unit))] tracking-[-0.02em] text-[var(--color-contact-card-text)] sm:text-[calc(17*var(--unit))] lg:mt-[calc(14*var(--unit))] lg:text-[calc(19*var(--unit))] ${card.lines.length > 2 ? 'leading-[1.45] lg:leading-[calc(27.2*var(--unit))]' : 'leading-[1.7] lg:leading-[calc(32*var(--unit))]'}`}>
              {card.lines.map((line, i) => (
                <span key={i} className="block">
                  {line}
                </span>
              ))}
            </p>
            <a
              href={card.link.url}
              {...(card.link.url.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              className={`mt-[calc(22*var(--unit))] inline-flex items-center gap-[calc(14*var(--unit))] border-b-2 border-[var(--color-contact-card-text)] pb-[calc(6*var(--unit))] text-[calc(15*var(--unit))] font-bold uppercase leading-none tracking-[-0.01em] text-[var(--color-primary)] transition-colors duration-200 hover:text-[var(--color-heading)] lg:gap-[calc(10*var(--unit))] lg:pb-[calc(6*var(--unit))] lg:text-[calc(17*var(--unit))] ${
                card.lines.length > 2 ? 'lg:mt-[calc(26*var(--unit))]' : 'lg:mt-[calc(40*var(--unit))]'
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

// Shared look of every field; inputs add their height (inputClass), the textarea its own.
const fieldClass =
  'block w-full rounded-[calc(4*var(--unit))] bg-[var(--color-white)] px-[calc(20*var(--unit))] text-[calc(17*var(--unit))] text-[var(--color-heading)] outline-none placeholder:text-[var(--color-contact-text)] focus:ring-2 focus:ring-[var(--color-black-40)] lg:px-[calc(26*var(--unit))] lg:text-[calc(20*var(--unit))]';
const inputClass = `${fieldClass} h-[calc(56*var(--unit))] lg:h-[calc(70*var(--unit))]`;

/** Maroon block with the map on the left and the message form on the right. */
const ContactForm = ({ data }: ContactProps) => {
  const { sent, show, hide } = useSentMessage();

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    event.currentTarget.reset();
    show();
  };

  if (!data) return null;
  const { form, mapTitle, mapUrl } = data;

  return (
    <section className="my-[calc(32*var(--unit))] bg-[var(--color-primary)] font-article sm:my-[calc(40*var(--unit))] lg:flex lg:items-start lg:my-[calc(48*var(--unit))] lg:h-[calc(800*var(--unit))]">
      <iframe
        src={mapUrl}
        title={mapTitle}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        data-reveal="fade"
        className="block h-[calc(360*var(--unit))] w-full border-0 sm:h-[calc(460*var(--unit))] lg:shrink-0 lg:h-[calc(800*var(--unit))] lg:w-[calc(708*var(--unit))]"
      />

      <div data-reveal-group="right" className="px-[calc(20*var(--unit))] py-[calc(48*var(--unit))] sm:px-[calc(32*var(--unit))] sm:py-[calc(64*var(--unit))] lg:grow lg:px-0 lg:pb-0 lg:pl-[calc(151*var(--unit))] lg:pr-[calc(81*var(--unit))] lg:pt-[calc(64*var(--unit))]">
        <h2 className="text-[calc(34*var(--unit))] font-extrabold leading-[1.15] tracking-[-0.02em] text-[var(--color-white)] sm:text-[calc(48*var(--unit))] lg:whitespace-nowrap lg:text-[calc(66*var(--unit))] lg:leading-[calc(77*var(--unit))]">
          <Lines lines={form.headingLines} />
        </h2>
        <p className="mt-[calc(14*var(--unit))] text-[calc(17*var(--unit))] leading-[1.5] text-[var(--color-white-95)] sm:text-[calc(19*var(--unit))] lg:mt-[calc(13*var(--unit))] lg:whitespace-nowrap lg:text-[calc(24*var(--unit))] lg:leading-[calc(34*var(--unit))] lg:tracking-[-0.03em]">
          <Lines lines={form.descriptionLines} />
        </p>

        <form onSubmit={onSubmit} onInput={hide} onChange={hide} className="mt-[calc(28*var(--unit))] grid gap-[calc(20*var(--unit))] sm:grid-cols-2 lg:mt-[calc(32*var(--unit))] lg:gap-x-[calc(23*var(--unit))] lg:gap-y-[calc(20*var(--unit))]">
          <input name="fullName" type="text" required autoComplete="name" aria-label={form.fullName} placeholder={form.fullName} className={inputClass} />
          <input name="email" type="email" required autoComplete="email" aria-label={form.email} placeholder={form.email} className={inputClass} />
          <input name="website" type="url" aria-label={form.website} placeholder={form.website} className={`${fieldClass} h-[calc(56*var(--unit))] sm:col-span-2 lg:h-[calc(71*var(--unit))]`} />
          <textarea name="message" required aria-label={form.message} placeholder={form.message} className={`${fieldClass} h-[calc(144*var(--unit))] resize-y py-[calc(18*var(--unit))] sm:col-span-2 lg:mt-[calc(2*var(--unit))] lg:h-[calc(104*var(--unit))] lg:py-[calc(22*var(--unit))]`} />
          <div className="relative sm:col-span-2 lg:mt-[calc(14*var(--unit))]">
            <button
              type="submit"
              className="h-[calc(60*var(--unit))] cursor-pointer bg-[var(--color-contact-dark)] px-[calc(40*var(--unit))] text-[calc(18*var(--unit))] font-extrabold uppercase tracking-[-0.01em] text-[var(--color-white)] transition-colors duration-200 hover:bg-[var(--color-white)] hover:text-[var(--color-contact-dark)] lg:h-[calc(77*var(--unit))] lg:w-[calc(289*var(--unit))] lg:px-0 lg:text-[calc(23*var(--unit))]"
            >
              {form.submit}
            </button>
            {sent && (
              <p role="status" className="mt-[calc(16*var(--unit))] text-[calc(16*var(--unit))] font-medium text-[var(--color-white)] lg:absolute lg:inset-x-0 lg:top-full lg:mt-[calc(14*var(--unit))]">
                {form.success}
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
};

/** Contact page: the three info cards, then the map with the message form. */
export const Contact = ({ data }: ContactProps) => {
  if (!data) return null;
  return (
    <>
      <ContactCards data={data} />
      <ContactForm data={data} />
    </>
  );
};
