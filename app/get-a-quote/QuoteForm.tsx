"use client";

import { useState } from "react";
import type { FormEvent, ReactNode } from "react";
import Icon from "@/components/icons";
import { site } from "@/data";

const { form } = site.quote;

const inputClass =
  "block h-48 w-full r-8 border border-[#e3e5e9] bg-white px-16 fs-16 text-ink outline-none transition-colors duration-200 placeholder:text-[#7b808a] focus:border-[#74121a] xl:h-49 xl:px-17 xl:fs-17";

function Field({ label, required, htmlFor, children, className = "" }: { label: string; required?: boolean; htmlFor: string; children: ReactNode; className?: string }) {
  return (
    <div className={className}>
      <label htmlFor={htmlFor} className="block fs-16 font-bold leading-none text-[#14171d] xl:fs-18 xl:leading-20">
        {label}
        {required && <span className="ml-8 text-[#c40d1c]">*</span>}
      </label>
      <div className="mt-10 xl:mt-11">{children}</div>
    </div>
  );
}

function Select({ id, placeholder, options, required }: { id: string; placeholder: string; options: string[]; required?: boolean }) {
  const [value, setValue] = useState("");
  return (
    <div className="relative">
      <select id={id} name={id} required={required} value={value} onChange={(event) => setValue(event.target.value)} className={`${inputClass} cursor-pointer appearance-none pr-44 xl:h-52`} style={value ? undefined : { color: "#7b808a" }}>
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option} value={option} className="text-ink">
            {option}
          </option>
        ))}
      </select>
      <Icon name="chevron-down" className="pointer-events-none absolute right-16 top-1/2 size-20 -translate-y-1/2 text-[#3d424c]" />
    </div>
  );
}

/** "Request a Quote" form card. */
export default function QuoteForm() {
  const [sent, setSent] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    event.currentTarget.reset();
    setSent(true);
  };

  return (
    <div className="mt-48 r-16 border border-[#e8e9ec] bg-[#fbfbfc] p-22 shadow-[0_0.25rem_1.5rem_rgba(20,20,20,0.04)] sm:p-32 lg:mt-0 lg:grow xl:w-760 xl:flex-none xl:r-20 xl:pb-31 xl:pl-37 xl:pr-32 xl:pt-20">
      <h2 className="fs-30 font-black leading-[1.1] text-[#0e1118] sm:fs-36 xl:fs-43 xl:leading-48">
        {form.heading}
        <span className="text-[#74121a]">{form.headingHighlight}</span>
      </h2>
      <p className="mt-10 fs-16 leading-[1.4] text-[#4c5159] xl:fs-19 xl:leading-24 xl:tracking-[0.008em]">{form.description}</p>

      <form onSubmit={onSubmit} className="mt-24 grid gap-x-20 gap-y-22 sm:grid-cols-2 xl:mt-29 xl:grid-cols-[331fr_329fr] xl:gap-x-30 xl:gap-y-26">
        <Field label={form.fullName.label} required htmlFor="fullName">
          <input id="fullName" name="fullName" type="text" required autoComplete="name" placeholder={form.fullName.placeholder} className={inputClass} />
        </Field>
        <Field label={form.email.label} required htmlFor="email">
          <input id="email" name="email" type="email" required autoComplete="email" placeholder={form.email.placeholder} className={inputClass} />
        </Field>
        <Field label={form.phone.label} required htmlFor="phone">
          <input id="phone" name="phone" type="tel" required autoComplete="tel" placeholder={form.phone.placeholder} className={inputClass} />
        </Field>
        <Field label={form.company.label} htmlFor="company">
          <input id="company" name="company" type="text" autoComplete="organization" placeholder={form.company.placeholder} className={inputClass} />
        </Field>
        <Field label={form.service.label} required htmlFor="service" className="sm:col-span-2">
          <Select id="service" placeholder={form.service.placeholder} options={form.service.options} required />
        </Field>
        <Field label={form.details.label} required htmlFor="details" className="sm:col-span-2">
          <textarea id="details" name="details" required placeholder={form.details.placeholder} className={`${inputClass} h-124 resize-y py-14 xl:h-124`} />
        </Field>
        <Field label={form.budget.label} htmlFor="budget">
          <Select id="budget" placeholder={form.budget.placeholder} options={form.budget.options} />
        </Field>
        <Field label={form.timeline.label} htmlFor="timeline">
          <Select id="timeline" placeholder={form.timeline.placeholder} options={form.timeline.options} />
        </Field>

        <div className="sm:col-span-2 xl:mt-7">
          <button
            type="submit"
            className="flex h-58 w-full cursor-pointer items-center justify-center gap-16 r-10 bg-linear-to-r from-[#6a1116] to-[#8a1a1f] fs-18 font-extrabold text-white transition-opacity duration-200 hover:opacity-90 xl:h-64 xl:gap-20 xl:r-12 xl:fs-21"
          >
            {form.submit}
            <Icon name="arrow-right" className="size-22 xl:size-24" />
          </button>
          {sent && (
            <p role="status" className="mt-14 fs-15 font-medium text-[#1a7a3c]">
              {form.success}
            </p>
          )}
        </div>
      </form>
    </div>
  );
}
