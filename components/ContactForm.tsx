"use client";

import type { FormEvent } from "react";
import { Lines } from "@/components/ui";
import { useSentMessage } from "@/components/useSentMessage";
import { contact, site } from "@/data";

const { form } = site.contactPage;
const { map } = contact;

const inputClass =
  "block h-[calc(56*var(--unit))] w-full rounded-[calc(4*var(--unit))] bg-white px-[calc(20*var(--unit))] text-[calc(17*var(--unit))] text-ink outline-none placeholder:text-[#4f4f4f] focus:ring-2 focus:ring-black/40 lg:h-[calc(70*var(--unit))] lg:px-[calc(26*var(--unit))] lg:text-[calc(20*var(--unit))]";

/** Maroon block with the map on the left and the message form on the right. */
export default function ContactForm() {
  const { sent, show, hide } = useSentMessage();

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    event.currentTarget.reset();
    show();
  };

  return (
    <section className="my-[calc(32*var(--unit))] bg-primary font-article sm:my-[calc(40*var(--unit))] lg:flex lg:items-start lg:my-[calc(48*var(--unit))] lg:h-[calc(800*var(--unit))]">
      <iframe
        src={map.src}
        title={map.title}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        data-reveal="fade"
        className="block h-[calc(360*var(--unit))] w-full border-0 sm:h-[calc(460*var(--unit))] lg:shrink-0 lg:h-[calc(800*var(--unit))] lg:w-[calc(708*var(--unit))]"
      />

      <div data-reveal-group="right" className="px-[calc(20*var(--unit))] py-[calc(48*var(--unit))] sm:px-[calc(32*var(--unit))] sm:py-[calc(64*var(--unit))] lg:grow lg:px-0 lg:pb-0 lg:pl-[calc(151*var(--unit))] lg:pr-[calc(81*var(--unit))] lg:pt-[calc(64*var(--unit))]">
        <h2 className="text-[calc(34*var(--unit))] font-extrabold leading-[1.15] tracking-[-0.02em] text-white sm:text-[calc(48*var(--unit))] lg:whitespace-nowrap lg:text-[calc(66*var(--unit))] lg:leading-[calc(77*var(--unit))]">
          <Lines lines={form.headingLines} />
        </h2>
        <p className="mt-[calc(14*var(--unit))] text-[calc(17*var(--unit))] leading-[1.5] text-white/95 sm:text-[calc(19*var(--unit))] lg:mt-[calc(13*var(--unit))] lg:whitespace-nowrap lg:text-[calc(24*var(--unit))] lg:leading-[calc(34*var(--unit))] lg:tracking-[-0.03em]">
          <Lines lines={form.descriptionLines} />
        </p>

        <form onSubmit={onSubmit} onInput={hide} onChange={hide} className="mt-[calc(28*var(--unit))] grid gap-[calc(20*var(--unit))] sm:grid-cols-2 lg:mt-[calc(32*var(--unit))] lg:gap-x-[calc(23*var(--unit))] lg:gap-y-[calc(20*var(--unit))]">
          <input name="fullName" type="text" required autoComplete="name" aria-label={form.fullName} placeholder={form.fullName} className={inputClass} />
          <input name="email" type="email" required autoComplete="email" aria-label={form.email} placeholder={form.email} className={inputClass} />
          <input name="website" type="url" aria-label={form.website} placeholder={form.website} className={`${inputClass} sm:col-span-2 lg:h-[calc(71*var(--unit))]`} />
          <textarea name="message" required aria-label={form.message} placeholder={form.message} className={`${inputClass} h-[calc(144*var(--unit))] resize-y py-[calc(18*var(--unit))] sm:col-span-2 lg:mt-[calc(2*var(--unit))] lg:h-[calc(104*var(--unit))] lg:py-[calc(22*var(--unit))]`} />
          <div className="relative sm:col-span-2 lg:mt-[calc(14*var(--unit))]">
            <button
              type="submit"
              className="h-[calc(60*var(--unit))] cursor-pointer bg-[#0f0f0c] px-[calc(40*var(--unit))] text-[calc(18*var(--unit))] font-extrabold uppercase tracking-[-0.01em] text-white transition-colors duration-200 hover:bg-white hover:text-[#0f0f0c] lg:h-[calc(77*var(--unit))] lg:w-[calc(289*var(--unit))] lg:px-0 lg:text-[calc(23*var(--unit))]"
            >
              {form.submit}
            </button>
            {sent && (
              <p role="status" className="mt-[calc(16*var(--unit))] text-[calc(16*var(--unit))] font-medium text-white lg:absolute lg:inset-x-0 lg:top-full lg:mt-[calc(14*var(--unit))]">
                {form.success}
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
