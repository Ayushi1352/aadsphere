"use client";

import { useState } from "react";
import type { FormEvent, ReactNode } from "react";
import Icon from "@/components/icons";
import { site } from "@/data";

const { form } = site.quote;

const inputClass =
  "block h-[calc(48*var(--unit))] w-full rounded-[calc(8*var(--unit))] border border-[#e3e5e9] bg-white px-[calc(16*var(--unit))] text-[calc(16*var(--unit))] text-ink outline-none transition-colors duration-200 placeholder:text-[#7b808a] focus:border-primary lg:h-[calc(49*var(--unit))] lg:px-[calc(17*var(--unit))] lg:text-[calc(17*var(--unit))]";

function Field({ label, required, htmlFor, children, className = "" }: { label: string; required?: boolean; htmlFor: string; children: ReactNode; className?: string }) {
  return (
    <div className={className}>
      <label htmlFor={htmlFor} className="block text-[calc(16*var(--unit))] font-bold leading-none text-[#14171d] lg:text-[calc(18*var(--unit))] lg:leading-[calc(20*var(--unit))]">
        {label}
        {required && <span className="ml-[calc(8*var(--unit))] text-primary">*</span>}
      </label>
      <div className="mt-[calc(10*var(--unit))] lg:mt-[calc(11*var(--unit))]">{children}</div>
    </div>
  );
}

function Select({ id, placeholder, options, required }: { id: string; placeholder: string; options: string[]; required?: boolean }) {
  const [value, setValue] = useState("");
  return (
    <div className="relative">
      <select id={id} name={id} required={required} value={value} onChange={(event) => setValue(event.target.value)} className={`${inputClass} cursor-pointer appearance-none pr-[calc(44*var(--unit))] lg:h-[calc(52*var(--unit))]`} style={value ? undefined : { color: "#7b808a" }}>
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option} value={option} className="text-ink">
            {option}
          </option>
        ))}
      </select>
      <Icon name="chevron-down" className="pointer-events-none absolute right-[calc(16*var(--unit))] top-1/2 size-[calc(20*var(--unit))] -translate-y-1/2 text-[#3d424c]" />
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
    <div data-reveal="right" className="mt-[calc(48*var(--unit))] rounded-[calc(16*var(--unit))] border border-[#e8e9ec] bg-[#fbfbfc] p-[calc(22*var(--unit))] shadow-[0_calc(4*var(--unit))_calc(24*var(--unit))_color-mix(in_srgb,var(--color-ink)_4%,transparent)] sm:p-[calc(32*var(--unit))] lg:mt-0 lg:grow lg:w-[calc(760*var(--unit))] lg:flex-none lg:rounded-[calc(20*var(--unit))] lg:pb-[calc(31*var(--unit))] lg:pl-[calc(37*var(--unit))] lg:pr-[calc(32*var(--unit))] lg:pt-[calc(20*var(--unit))]">
      <h2 className="text-[calc(30*var(--unit))] font-black leading-[1.1] text-[#0e1118] sm:text-[calc(36*var(--unit))] lg:text-[calc(43*var(--unit))] lg:leading-[calc(48*var(--unit))]">
        {form.heading}
        <span className="text-primary">{form.headingHighlight}</span>
      </h2>
      <p className="mt-[calc(10*var(--unit))] text-[calc(16*var(--unit))] leading-[1.4] text-[#4c5159] lg:text-[calc(19*var(--unit))] lg:leading-[calc(24*var(--unit))] lg:tracking-[0.008em]">{form.description}</p>

      <form onSubmit={onSubmit} className="mt-[calc(24*var(--unit))] grid gap-x-[calc(20*var(--unit))] gap-y-[calc(22*var(--unit))] sm:grid-cols-2 lg:mt-[calc(29*var(--unit))] lg:grid-cols-[331fr_329fr] lg:gap-x-[calc(30*var(--unit))] lg:gap-y-[calc(26*var(--unit))]">
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
          <textarea id="details" name="details" required placeholder={form.details.placeholder} className={`${inputClass} h-[calc(124*var(--unit))] resize-y py-[calc(14*var(--unit))] lg:h-[calc(124*var(--unit))]`} />
        </Field>
        <Field label={form.budget.label} htmlFor="budget">
          <Select id="budget" placeholder={form.budget.placeholder} options={form.budget.options} />
        </Field>
        <Field label={form.timeline.label} htmlFor="timeline">
          <Select id="timeline" placeholder={form.timeline.placeholder} options={form.timeline.options} />
        </Field>

        <div className="sm:col-span-2 lg:mt-[calc(7*var(--unit))]">
          <button
            type="submit"
            className="flex h-[calc(58*var(--unit))] w-full cursor-pointer items-center justify-center gap-[calc(16*var(--unit))] rounded-[calc(10*var(--unit))] bg-linear-to-r from-primary-shade-77 to-primary text-[calc(18*var(--unit))] font-extrabold text-white transition-opacity duration-200 hover:opacity-90 lg:h-[calc(64*var(--unit))] lg:gap-[calc(20*var(--unit))] lg:rounded-[calc(12*var(--unit))] lg:text-[calc(21*var(--unit))]"
          >
            {form.submit}
            <Icon name="arrow-right" className="size-[calc(22*var(--unit))] lg:size-[calc(24*var(--unit))]" />
          </button>
          {sent && (
            <p role="status" className="mt-[calc(14*var(--unit))] text-[calc(15*var(--unit))] font-medium text-[#1a7a3c]">
              {form.success}
            </p>
          )}
        </div>
      </form>
    </div>
  );
}
