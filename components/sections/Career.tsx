'use client';

import { useState, useRef, type FormEvent, type ChangeEvent } from 'react';
import { useFormSubmit } from '@/components/ui/useFormSubmit';
import { Icon } from '@/components/ui/Icon';
import { Lines, SectionHeading, SectionLabel } from '@/components/ui/Text';
import type { CareerProps } from '@/types/templates.types';

/** Intro heading plus the four reasons to work at AdSphere. */
const CareerPerks = ({ data }: CareerProps) => {
  if (!data) return null;
  const { label, title, titleHighlight, description, perks } = data;
  return (
    <section className="px-[calc(20*var(--unit))] py-[calc(32*var(--unit))] sm:px-[calc(32*var(--unit))] sm:py-[calc(40*var(--unit))] lg:py-[calc(48*var(--unit))] lg:pl-[calc(63*var(--unit))] lg:pr-[calc(52*var(--unit))]">
      <div data-reveal-group="up" className="flex flex-col items-center text-center">
        <SectionLabel text={label} />
        <SectionHeading title={title} highlight={titleHighlight} className="mt-[calc(18*var(--unit))] text-[calc(28*var(--unit))] leading-[1.08] sm:text-[calc(52*var(--unit))] lg:mt-[calc(20*var(--unit))] lg:text-[calc(65*var(--unit))] lg:leading-[calc(64*var(--unit))]" />
        <p className="mt-[calc(18*var(--unit))] max-w-[calc(680*var(--unit))] font-text text-[calc(16*var(--unit))] font-medium leading-[1.7] text-[var(--color-text)] sm:text-[calc(18*var(--unit))] lg:mt-[calc(14*var(--unit))] lg:max-w-none lg:text-[calc(19*var(--unit))] lg:leading-[calc(29*var(--unit))]">
          <Lines text={description} />
        </p>
      </div>

      <ul data-reveal-group="up" className="mt-[calc(36*var(--unit))] grid gap-[calc(20*var(--unit))] sm:grid-cols-2 lg:mt-[calc(56*var(--unit))] lg:grid-cols-4 lg:gap-[calc(24*var(--unit))]">
        {perks.map((perk) => (
          <li key={perk.id} className="group relative overflow-hidden transition-[transform,box-shadow] duration-300 hover:-translate-y-[calc(6*var(--unit))] hover:[box-shadow:0_calc(14.4*var(--unit))_calc(32*var(--unit))_var(--color-primary-14)] rounded-[calc(14*var(--unit))] border border-[var(--color-primary-tint-9)] bg-[var(--color-white)] p-[calc(26*var(--unit))] [box-shadow:0_calc(4*var(--unit))_calc(20*var(--unit))_var(--color-primary-6)] lg:p-[calc(32*var(--unit))]">
            <span
              aria-hidden="true"
              className="absolute bottom-0 right-0 h-[calc(80*var(--unit))] w-[calc(110*var(--unit))] bg-gradient-to-tl from-[var(--color-accent-tint-13)] to-[var(--color-accent-tint-6)] [clip-path:polygon(100%_0,100%_100%,0_100%)]"
            />
            <span className="relative flex size-[calc(72*var(--unit))] items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6 rounded-[calc(14*var(--unit))] bg-[var(--color-accent-tint-7)] text-[var(--color-primary)] lg:size-[calc(88*var(--unit))]">
              <Icon name={perk.icon} className="size-[calc(40*var(--unit))] lg:size-[calc(50*var(--unit))]" />
            </span>
            <h3 className="relative mt-[calc(20*var(--unit))] text-[calc(21*var(--unit))] font-extrabold leading-[1.2] text-[var(--color-heading)] lg:mt-[calc(26*var(--unit))] lg:text-[calc(25*var(--unit))]">{perk.title}</h3>
            <p className="relative mt-[calc(8*var(--unit))] font-text text-[calc(16*var(--unit))] leading-[1.55] text-[var(--color-card-text)] lg:mt-[calc(10*var(--unit))] lg:text-[calc(18*var(--unit))] lg:leading-[calc(28*var(--unit))]">
              <Lines text={perk.description} />
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
};

const emptyForm = { name: '', email: '', phone: '', position: '', message: '' };

/** CTA on the left + Job Application form on the right. */
const JobList = ({ data }: CareerProps) => {
  const [formData, setFormData] = useState(emptyForm);
  const [fileName, setFileName] = useState('');
  // The thank-you message replaces the form for a few seconds, then an empty form comes back.
  const { sent: submitted, show } = useFormSubmit();
  const fileRef = useRef<HTMLInputElement>(null);

  function handleChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleFile(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    setFileName(file ? file.name : '');
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setFormData(emptyForm);
    setFileName('');
    show();
  }

  if (!data) return null;
  const { cta, applicationForm } = data;

  return (
    <section className="px-[calc(20*var(--unit))] py-[calc(32*var(--unit))] sm:px-[calc(32*var(--unit))] sm:py-[calc(40*var(--unit))] lg:py-[calc(48*var(--unit))] lg:pl-[calc(63*var(--unit))] lg:pr-[calc(52*var(--unit))]">
      <div data-reveal="zoom" className="flex flex-col lg:flex-row gap-0 rounded-[calc(16*var(--unit))] overflow-hidden">
        {/* ── Left: CTA ── */}
        <div className="flex flex-col justify-center gap-[calc(18*var(--unit))] bg-[var(--color-primary)] px-[calc(24*var(--unit))] py-[calc(30*var(--unit))] sm:px-[calc(40*var(--unit))] sm:py-[calc(40*var(--unit))] lg:w-1/2 lg:px-[calc(52*var(--unit))] lg:py-[calc(52*var(--unit))]">
          <h2 className="text-[calc(26*var(--unit))] font-bold leading-[1.2] text-[var(--color-white)] sm:text-[calc(32*var(--unit))] lg:text-[calc(40*var(--unit))]">
            {cta.title}
          </h2>
          <p className="font-text text-[calc(16*var(--unit))] leading-[1.6] text-[var(--color-white-85)] sm:text-[calc(18*var(--unit))] lg:text-[calc(20*var(--unit))]">
            {cta.description}
          </p>
          <div className="mt-[calc(6*var(--unit))] flex items-center gap-[calc(14*var(--unit))]">
            <span className="flex size-[calc(48*var(--unit))] items-center justify-center rounded-full bg-[var(--color-white-15)]">
              <Icon name={applicationForm.emailIcon} className="size-[calc(22*var(--unit))] text-[var(--color-white)]" />
            </span>
            <span className="font-text text-[calc(16*var(--unit))] text-[var(--color-white-90)] sm:text-[calc(18*var(--unit))]">{applicationForm.contactEmail}</span>
          </div>
          <div className="flex items-center gap-[calc(14*var(--unit))]">
            <span className="flex size-[calc(48*var(--unit))] items-center justify-center rounded-full bg-[var(--color-white-15)]">
              <Icon name={applicationForm.phoneIcon} className="size-[calc(22*var(--unit))] text-[var(--color-white)]" />
            </span>
            <span className="font-text text-[calc(16*var(--unit))] text-[var(--color-white-90)] sm:text-[calc(18*var(--unit))]">{applicationForm.contactPhone}</span>
          </div>
        </div>

        {/* ── Right: Application Form ── */}
        <div className="bg-[var(--color-surface)] px-[calc(24*var(--unit))] py-[calc(30*var(--unit))] sm:px-[calc(36*var(--unit))] sm:py-[calc(36*var(--unit))] lg:w-1/2 lg:px-[calc(44*var(--unit))] lg:py-[calc(44*var(--unit))]">
          {submitted ? (
            <div className="flex flex-col items-center justify-center gap-[calc(16*var(--unit))] py-[calc(40*var(--unit))] text-center">
              <span className="flex size-[calc(72*var(--unit))] items-center justify-center rounded-full bg-[var(--color-job-success-bg)]">
                <Icon name={applicationForm.successIcon} className="size-[calc(36*var(--unit))] text-[var(--color-job-success)]" />
              </span>
              <h3 className="text-[calc(24*var(--unit))] font-bold text-[var(--color-heading)] lg:text-[calc(28*var(--unit))]">{applicationForm.successTitle}</h3>
              <p className="max-w-[calc(340*var(--unit))] font-text text-[calc(16*var(--unit))] leading-[1.5] text-[var(--color-text)]">
                {applicationForm.successMessage}
              </p>
            </div>
          ) : (
            <>
              <h3 className="text-[calc(22*var(--unit))] font-bold text-[var(--color-heading)] lg:text-[calc(26*var(--unit))]">{applicationForm.title}</h3>
              <p className="mt-[calc(6*var(--unit))] font-text text-[calc(15*var(--unit))] leading-[1.5] text-[var(--color-text)] lg:text-[calc(16*var(--unit))]">
                {applicationForm.description}
              </p>

              <form onSubmit={handleSubmit} className="mt-[calc(22*var(--unit))] flex flex-col gap-[calc(16*var(--unit))] lg:mt-[calc(28*var(--unit))]">
                <input
                  required
                  name="name"
                  placeholder={applicationForm.fullName}
                  value={formData.name}
                  onChange={handleChange}
                  className="h-[calc(48*var(--unit))] rounded-10 border border-[var(--color-job-border)] bg-[var(--color-white)] px-[calc(16*var(--unit))] font-text text-[calc(15*var(--unit))] text-[var(--color-heading)] outline-none transition-colors placeholder:text-[var(--color-heading-50)] focus:border-[var(--color-primary)] lg:h-[calc(52*var(--unit))]"
                />
                <input
                  required
                  name="email"
                  type="email"
                  placeholder={applicationForm.emailLabel}
                  value={formData.email}
                  onChange={handleChange}
                  className="h-[calc(48*var(--unit))] rounded-10 border border-[var(--color-job-border)] bg-[var(--color-white)] px-[calc(16*var(--unit))] font-text text-[calc(15*var(--unit))] text-[var(--color-heading)] outline-none transition-colors placeholder:text-[var(--color-heading-50)] focus:border-[var(--color-primary)] lg:h-[calc(52*var(--unit))]"
                />
                <input
                  name="phone"
                  type="tel"
                  placeholder={applicationForm.phoneLabel}
                  value={formData.phone}
                  onChange={handleChange}
                  className="h-[calc(48*var(--unit))] rounded-10 border border-[var(--color-job-border)] bg-[var(--color-white)] px-[calc(16*var(--unit))] font-text text-[calc(15*var(--unit))] text-[var(--color-heading)] outline-none transition-colors placeholder:text-[var(--color-heading-50)] focus:border-[var(--color-primary)] lg:h-[calc(52*var(--unit))]"
                />
                <select
                  name="position"
                  value={formData.position}
                  onChange={handleChange}
                  className="h-[calc(48*var(--unit))] rounded-10 border border-[var(--color-job-border)] bg-[var(--color-white)] px-[calc(16*var(--unit))] font-text text-[calc(15*var(--unit))] text-[var(--color-heading)] outline-none transition-colors placeholder:text-[var(--color-heading-50)] focus:border-[var(--color-primary)] lg:h-[calc(52*var(--unit))]"
                >
                  <option value="">{applicationForm.positionLabel}</option>
                  {applicationForm.positions.map((pos: string) => (
                    <option key={pos} value={pos}>{pos}</option>
                  ))}
                </select>

                {/* Resume Upload */}
                <div>
                  <input
                    ref={fileRef}
                    type="file"
                    accept={applicationForm.resumeAccept}
                    onChange={handleFile}
                    className="hidden"
                    id="resume-upload"
                  />
                  <div className="flex items-center gap-[calc(8*var(--unit))]">
                    <label
                      htmlFor="resume-upload"
                      className="flex h-[calc(48*var(--unit))] grow cursor-pointer items-center gap-[calc(12*var(--unit))] rounded-10 border border-dashed border-[var(--color-job-border-hover)] bg-[var(--color-white)] px-[calc(16*var(--unit))] font-text text-[calc(15*var(--unit))] text-[var(--color-text)] transition-colors hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] lg:h-[calc(52*var(--unit))]"
                    >
                      <Icon name={applicationForm.uploadIcon} className="size-[calc(18*var(--unit))] shrink-0 -rotate-45" />
                      <span className="truncate">{fileName || applicationForm.resumeLabel}</span>
                    </label>
                    {fileName && (
                      <button
                        type="button"
                        onClick={() => {
                          setFileName('');
                          if (fileRef.current) fileRef.current.value = '';
                        }}
                        aria-label={applicationForm.removeResume}
                        className="flex size-[calc(42*var(--unit))] shrink-0 cursor-pointer items-center justify-center rounded-10 border border-[var(--color-job-border)] bg-[var(--color-white)] text-[var(--color-icon-muted)] transition-colors hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] lg:size-[calc(48*var(--unit))]"
                      >
                        <Icon name={applicationForm.removeIcon} className="size-[calc(18*var(--unit))]" />
                      </button>
                    )}
                  </div>
                </div>

                <textarea
                  name="message"
                  placeholder={applicationForm.coverNote}
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                  className="rounded-10 border border-[var(--color-job-border)] bg-[var(--color-white)] px-[calc(16*var(--unit))] py-[calc(12*var(--unit))] font-text text-[calc(15*var(--unit))] text-[var(--color-heading)] outline-none transition-colors placeholder:text-[var(--color-heading-50)] focus:border-[var(--color-primary)]"
                />

                <button
                  type="submit"
                  className="mt-[calc(4*var(--unit))] inline-flex h-[calc(52*var(--unit))] items-center justify-center gap-[calc(10*var(--unit))] rounded-full bg-[var(--color-primary)] px-[calc(30*var(--unit))] text-[calc(16*var(--unit))] font-bold text-[var(--color-white)] transition-colors duration-200 hover:bg-[var(--color-heading)] lg:h-[calc(56*var(--unit))] lg:text-[calc(17*var(--unit))]"
                >
                  {applicationForm.buttonText}
                  <Icon name={applicationForm.buttonIcon} className="size-[calc(18*var(--unit))]" />
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

/** Career page: the reasons to work at AdSphere, then the job application. */
export const Career = ({ data }: CareerProps) => {
  if (!data) return null;
  return (
    <>
      <CareerPerks data={data} />
      <JobList data={data} />
    </>
  );
};
