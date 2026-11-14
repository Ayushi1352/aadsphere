'use client';

import { useState } from 'react';
import type { FormEvent, ReactNode } from 'react';
import { Icon } from '@/components/ui/Icon';
import { Lines } from '@/components/ui/Text';
import { useSentMessage } from '@/components/ui/useSentMessage';
import type { QuoteData, QuoteProps } from '@/types/templates.types';

/** Left side of the quote page: heading, short text and three promises. */
const QuoteIntro = ({ data }: { data?: QuoteData }) => {
  if (!data) return null;
  const { label, headingLines, descriptionLines, features } = data;
  return (
    <div data-reveal-group="left" className="lg:ml-[calc(118*var(--unit))] lg:w-[calc(702*var(--unit))] lg:shrink-0 lg:pt-[calc(3*var(--unit))]">
      <p className="flex items-center gap-[calc(16*var(--unit))] font-ui text-[calc(13*var(--unit))] font-bold uppercase leading-none tracking-[0.24em] text-[var(--color-quote-text)] lg:gap-[calc(23*var(--unit))] lg:text-[calc(15*var(--unit))]">
        <span className="h-[calc(2*var(--unit))] w-[calc(36*var(--unit))] bg-[var(--color-primary)] lg:w-[calc(47*var(--unit))]" aria-hidden="true" />
        {label}
      </p>
      <h2 className="mt-[calc(18*var(--unit))] text-[calc(38*var(--unit))] font-black leading-[1.06] tracking-[-0.015em] text-[var(--color-quote-heading)] sm:text-[calc(56*var(--unit))] lg:ml-[calc(3*var(--unit))] lg:mt-[calc(23*var(--unit))] lg:text-[calc(72*var(--unit))] lg:leading-[calc(75*var(--unit))]">
        {headingLines.map((line) => (
          <span key={line.text} className={`block ${line.highlight ? 'text-[var(--color-primary)]' : ''}`}>
            {line.text}
          </span>
        ))}
      </h2>
      <p className="mt-[calc(16*var(--unit))] max-w-[calc(560*var(--unit))] text-[calc(17*var(--unit))] leading-[1.6] text-[var(--color-quote-text-soft)] sm:text-[calc(19*var(--unit))] lg:ml-[calc(3*var(--unit))] lg:mt-[calc(17*var(--unit))] lg:max-w-none lg:whitespace-nowrap lg:text-[calc(24*var(--unit))] lg:leading-[calc(36*var(--unit))] lg:tracking-[0.02em]">
        <Lines lines={descriptionLines} />
      </p>

      <ul className="mt-[calc(30*var(--unit))] space-y-[calc(22*var(--unit))] lg:mt-[calc(35*var(--unit))] lg:space-y-[calc(34*var(--unit))]">
        {features.map((feature) => (
          <li key={feature.id} className="flex items-center gap-[calc(20*var(--unit))] lg:gap-[calc(37*var(--unit))]">
            <span className="flex size-[calc(88*var(--unit))] shrink-0 items-center justify-center rounded-[calc(14*var(--unit))] bg-[var(--color-accent-tint-7)] text-[var(--color-primary)] lg:h-[calc(118*var(--unit))] lg:w-[calc(121*var(--unit))] lg:rounded-[calc(18*var(--unit))]">
              <Icon name={feature.icon} className="size-[calc(44*var(--unit))] lg:size-[calc(62*var(--unit))]" />
            </span>
            <span className="block">
              <span className="block text-[calc(21*var(--unit))] font-extrabold leading-[1.2] text-[var(--color-quote-heading)] lg:text-[calc(27*var(--unit))] lg:leading-[calc(32*var(--unit))]">{feature.title}</span>
              <span className="mt-[calc(4*var(--unit))] block text-[calc(16*var(--unit))] leading-[1.4] text-[var(--color-quote-text-soft)] sm:text-[calc(18*var(--unit))] lg:mt-[calc(3*var(--unit))] lg:whitespace-nowrap lg:text-[calc(24*var(--unit))] lg:leading-[calc(31*var(--unit))] lg:tracking-[0.012em]">
                <Lines lines={feature.lines} />
              </span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Shared look of every field; inputs add their height (inputClass), the textarea its own.
const fieldClass =
  'block w-full rounded-[calc(8*var(--unit))] border border-[var(--color-quote-input-border)] bg-[var(--color-white)] px-[calc(16*var(--unit))] text-[calc(16*var(--unit))] text-[var(--color-heading)] outline-none transition-colors duration-200 placeholder:text-[var(--color-quote-placeholder)] focus:border-[var(--color-primary)] lg:px-[calc(17*var(--unit))] lg:text-[calc(17*var(--unit))]';
const inputClass = `${fieldClass} h-[calc(48*var(--unit))] lg:h-[calc(49*var(--unit))]`;

function Field({ label, required, htmlFor, children, className = '' }: { label: string; required?: boolean; htmlFor: string; children: ReactNode; className?: string }) {
  return (
    <div className={className}>
      <label htmlFor={htmlFor} className="block text-[calc(16*var(--unit))] font-bold leading-none text-[var(--color-quote-input-text)] lg:text-[calc(18*var(--unit))] lg:leading-[calc(20*var(--unit))]">
        {label}
        {required && <span className="ml-[calc(8*var(--unit))] text-[var(--color-primary)]">*</span>}
      </label>
      <div className="mt-[calc(10*var(--unit))] lg:mt-[calc(11*var(--unit))]">{children}</div>
    </div>
  );
}

function Select({ id, placeholder, options, required }: { id: string; placeholder: string; options: string[]; required?: boolean }) {
  const [value, setValue] = useState('');
  return (
    <div className="relative">
      <select id={id} name={id} required={required} value={value} onChange={(event) => setValue(event.target.value)} className={`${fieldClass} h-[calc(48*var(--unit))] cursor-pointer appearance-none pr-[calc(44*var(--unit))] lg:h-[calc(52*var(--unit))] ${value ? '' : '!text-[var(--color-quote-placeholder)]'}`}>
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option} value={option} className="text-[var(--color-heading)]">
            {option}
          </option>
        ))}
      </select>
      <Icon name="LuChevronDown" className="pointer-events-none absolute right-[calc(16*var(--unit))] top-1/2 size-[calc(20*var(--unit))] -translate-y-1/2 text-[var(--color-text-body-dark)]" />
    </div>
  );
}

/** "Request a Quote" form card. */
const QuoteForm = ({ data }: { data?: QuoteData }) => {
  const { sent, show, hide, formKey } = useSentMessage();

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    show();
  };

  if (!data) return null;
  const { form } = data;

  return (
    <div data-reveal="right" className="mt-[calc(48*var(--unit))] rounded-[calc(16*var(--unit))] border border-[var(--color-quote-border)] bg-[var(--color-quote-input-bg)] p-[calc(22*var(--unit))] [box-shadow:0_calc(4*var(--unit))_calc(24*var(--unit))_var(--color-heading-4)] sm:p-[calc(32*var(--unit))] lg:mt-0 lg:grow lg:w-[calc(760*var(--unit))] lg:flex-none lg:rounded-[calc(20*var(--unit))] lg:pb-[calc(31*var(--unit))] lg:pl-[calc(37*var(--unit))] lg:pr-[calc(32*var(--unit))] lg:pt-[calc(20*var(--unit))]">
      <h2 className="text-[calc(30*var(--unit))] font-black leading-[1.1] text-[var(--color-quote-heading)] sm:text-[calc(36*var(--unit))] lg:text-[calc(43*var(--unit))] lg:leading-[calc(48*var(--unit))]">
        {form.heading}
        <span className="text-[var(--color-primary)]">{form.headingHighlight}</span>
      </h2>
      <p className="mt-[calc(10*var(--unit))] text-[calc(16*var(--unit))] leading-[1.4] text-[var(--color-quote-label)] lg:text-[calc(19*var(--unit))] lg:leading-[calc(24*var(--unit))] lg:tracking-[0.008em]">{form.description}</p>

      {/* A new key after every submit starts the form over, so the dropdowns are emptied too. */}
      <form key={formKey} onSubmit={onSubmit} onInput={hide} onChange={hide} className="mt-[calc(24*var(--unit))] grid gap-x-[calc(20*var(--unit))] gap-y-[calc(22*var(--unit))] sm:grid-cols-2 lg:mt-[calc(29*var(--unit))] lg:grid-cols-[331fr_329fr] lg:gap-x-[calc(30*var(--unit))] lg:gap-y-[calc(26*var(--unit))]">
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
          <textarea id="details" name="details" required placeholder={form.details.placeholder} className={`${fieldClass} h-[calc(124*var(--unit))] resize-y py-[calc(14*var(--unit))] lg:h-[calc(124*var(--unit))]`} />
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
            className="flex h-[calc(58*var(--unit))] w-full cursor-pointer items-center justify-center gap-[calc(16*var(--unit))] rounded-[calc(10*var(--unit))] bg-gradient-to-r from-[var(--color-primary-shade-77)] to-[var(--color-primary)] text-[calc(18*var(--unit))] font-extrabold text-[var(--color-white)] transition-opacity duration-200 hover:opacity-90 lg:h-[calc(64*var(--unit))] lg:gap-[calc(20*var(--unit))] lg:rounded-[calc(12*var(--unit))] lg:text-[calc(21*var(--unit))]"
          >
            {form.submit}
            <Icon name="LuArrowRight" className="size-[calc(22*var(--unit))] lg:size-[calc(24*var(--unit))]" />
          </button>
          {sent && (
            <p role="status" className="mt-[calc(14*var(--unit))] text-[calc(15*var(--unit))] font-medium text-[var(--color-success)]">
              {form.success}
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

/** Get a Quote page: intro with features on the left, the form on the right. */
export const Quote = ({ data }: QuoteProps) => {
  if (!data) return null;
  return (
    <section className="px-[calc(20*var(--unit))] py-[calc(32*var(--unit))] sm:px-[calc(32*var(--unit))] sm:py-[calc(40*var(--unit))] lg:flex lg:items-start lg:gap-0 lg:px-0 lg:py-[calc(48*var(--unit))]">
      <QuoteIntro data={data} />
      <QuoteForm data={data} />
    </section>
  );
};
