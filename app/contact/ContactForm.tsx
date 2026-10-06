"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { Lines } from "@/components/ui";
import { site } from "@/data";

const { map, form } = site.contactPage;

const inputClass =
  "block h-56 w-full r-4 bg-white px-20 fs-17 text-ink outline-none placeholder:text-[#4f4f4f] focus:ring-2 focus:ring-black/40 xl:h-70 xl:px-26 xl:fs-20";

/** Maroon block with the map on the left and the message form on the right. */
export default function ContactForm() {
  const [sent, setSent] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    event.currentTarget.reset();
    setSent(true);
  };

  return (
    <section className="bg-hero font-montserrat lg:flex lg:items-start xl:h-1123">
      <iframe
        src={map.src}
        title={map.title}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="block h-360 w-full border-0 sm:h-460 lg:h-640 lg:w-[42%] lg:shrink-0 xl:h-933 xl:w-708"
      />

      <div className="px-20 py-48 sm:px-32 sm:py-64 lg:grow xl:px-0 xl:pb-0 xl:pl-151 xl:pr-81 xl:pt-158">
        <h2 className="fs-34 font-extrabold leading-[1.15] tracking-[-0.02em] text-white sm:fs-48 xl:whitespace-nowrap xl:fs-66 xl:leading-77">
          <Lines lines={form.headingLines} />
        </h2>
        <p className="mt-14 fs-17 leading-[1.5] text-white/95 sm:fs-19 xl:mt-13 xl:whitespace-nowrap xl:fs-24 xl:leading-34 xl:tracking-[-0.03em]">
          <Lines lines={form.descriptionLines} />
        </p>

        <form onSubmit={onSubmit} className="mt-28 grid gap-20 sm:grid-cols-2 xl:mt-51 xl:gap-x-23 xl:gap-y-30">
          <input name="fullName" type="text" required autoComplete="name" aria-label={form.fullName} placeholder={form.fullName} className={inputClass} />
          <input name="email" type="email" required autoComplete="email" aria-label={form.email} placeholder={form.email} className={inputClass} />
          <input name="website" type="url" aria-label={form.website} placeholder={form.website} className={`${inputClass} sm:col-span-2 xl:h-71`} />
          <textarea name="message" required aria-label={form.message} placeholder={form.message} className={`${inputClass} h-144 resize-y py-18 sm:col-span-2 xl:mt-2 xl:h-144 xl:py-22`} />
          <div className="sm:col-span-2 xl:mt-14">
            <button
              type="submit"
              className="h-60 cursor-pointer bg-[#0f0f0c] px-40 fs-18 font-extrabold uppercase tracking-[-0.01em] text-white transition-colors duration-200 hover:bg-white hover:text-[#0f0f0c] xl:h-77 xl:w-289 xl:px-0 xl:fs-23"
            >
              {form.submit}
            </button>
            {sent && (
              <p role="status" className="mt-16 fs-16 font-medium text-white">
                {form.success}
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
