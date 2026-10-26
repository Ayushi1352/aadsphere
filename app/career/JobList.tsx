"use client";

import { useState, useRef, type FormEvent, type ChangeEvent } from "react";
import Icon from "@/components/icons";
import { site } from "@/data";

const { cta, applicationForm } = site.career;

/** CTA on the left + Job Application form on the right. */
export default function JobList() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    message: "",
  });
  const [fileName, setFileName] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  function handleChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleFile(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    setFileName(file ? file.name : "");
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="px-[calc(20*var(--unit))] py-[calc(32*var(--unit))] sm:px-[calc(32*var(--unit))] sm:py-[calc(40*var(--unit))] lg:py-[calc(48*var(--unit))] lg:pl-[calc(63*var(--unit))] lg:pr-[calc(52*var(--unit))]">
      <div data-reveal="zoom" className="flex flex-col lg:flex-row gap-0 rounded-[calc(16*var(--unit))] overflow-hidden">
        {/* ── Left: CTA ── */}
        <div className="flex flex-col justify-center gap-[calc(18*var(--unit))] bg-[#6e0c12] px-[calc(24*var(--unit))] py-[calc(30*var(--unit))] sm:px-[calc(40*var(--unit))] sm:py-[calc(40*var(--unit))] lg:w-1/2 lg:px-[calc(52*var(--unit))] lg:py-[calc(52*var(--unit))]">
          <h2 className="text-[calc(26*var(--unit))] font-bold leading-[1.2] text-white sm:text-[calc(32*var(--unit))] lg:text-[calc(40*var(--unit))]">
            {cta.heading}
          </h2>
          <p className="font-(family-name:--font-red-hat-text) text-[calc(16*var(--unit))] leading-[1.6] text-white/85 sm:text-[calc(18*var(--unit))] lg:text-[calc(20*var(--unit))]">
            {cta.description}
          </p>
          <div className="mt-[calc(6*var(--unit))] flex items-center gap-[calc(14*var(--unit))]">
            <span className="flex size-[calc(48*var(--unit))] items-center justify-center rounded-full bg-white/15">
              <Icon name="mail" className="size-[calc(22*var(--unit))] text-white" />
            </span>
            <span className="font-(family-name:--font-red-hat-text) text-[calc(16*var(--unit))] text-white/90 sm:text-[calc(18*var(--unit))]">{applicationForm.contactEmail}</span>
          </div>
          <div className="flex items-center gap-[calc(14*var(--unit))]">
            <span className="flex size-[calc(48*var(--unit))] items-center justify-center rounded-full bg-white/15">
              <Icon name="phone" className="size-[calc(22*var(--unit))] text-white" />
            </span>
            <span className="font-(family-name:--font-red-hat-text) text-[calc(16*var(--unit))] text-white/90 sm:text-[calc(18*var(--unit))]">{applicationForm.contactPhone}</span>
          </div>
        </div>

        {/* ── Right: Application Form ── */}
        <div className="bg-[#f9f9fb] px-[calc(24*var(--unit))] py-[calc(30*var(--unit))] sm:px-[calc(36*var(--unit))] sm:py-[calc(36*var(--unit))] lg:w-1/2 lg:px-[calc(44*var(--unit))] lg:py-[calc(44*var(--unit))]">
          {submitted ? (
            <div className="flex flex-col items-center justify-center gap-[calc(16*var(--unit))] py-[calc(40*var(--unit))] text-center">
              <span className="flex size-[calc(72*var(--unit))] items-center justify-center rounded-full bg-[#e6f9ed]">
                <Icon name="check" className="size-[calc(36*var(--unit))] text-[#22c55e]" />
              </span>
              <h3 className="text-[calc(24*var(--unit))] font-bold text-[#141414] lg:text-[calc(28*var(--unit))]">{applicationForm.successHeading}</h3>
              <p className="max-w-[calc(340*var(--unit))] font-(family-name:--font-red-hat-text) text-[calc(16*var(--unit))] leading-[1.5] text-[#5a5a5a]">
                {applicationForm.successMessage}
              </p>
            </div>
          ) : (
            <>
              <h3 className="text-[calc(22*var(--unit))] font-bold text-[#141414] lg:text-[calc(26*var(--unit))]">{applicationForm.heading}</h3>
              <p className="mt-[calc(6*var(--unit))] font-(family-name:--font-red-hat-text) text-[calc(15*var(--unit))] leading-[1.5] text-[#5a5a5a] lg:text-[calc(16*var(--unit))]">
                {applicationForm.description}
              </p>

              <form onSubmit={handleSubmit} className="mt-[calc(22*var(--unit))] flex flex-col gap-[calc(16*var(--unit))] lg:mt-[calc(28*var(--unit))]">
                <input
                  required
                  name="name"
                  placeholder={applicationForm.fullName}
                  value={formData.name}
                  onChange={handleChange}
                  className="h-[calc(48*var(--unit))] rounded-10 border border-[#ddd] bg-white px-[calc(16*var(--unit))] font-(family-name:--font-red-hat-text) text-[calc(15*var(--unit))] text-[#141414] outline-none transition-colors focus:border-[#6e0c12] lg:h-[calc(52*var(--unit))]"
                />
                <input
                  required
                  name="email"
                  type="email"
                  placeholder={applicationForm.emailLabel}
                  value={formData.email}
                  onChange={handleChange}
                  className="h-[calc(48*var(--unit))] rounded-10 border border-[#ddd] bg-white px-[calc(16*var(--unit))] font-(family-name:--font-red-hat-text) text-[calc(15*var(--unit))] text-[#141414] outline-none transition-colors focus:border-[#6e0c12] lg:h-[calc(52*var(--unit))]"
                />
                <input
                  name="phone"
                  type="tel"
                  placeholder={applicationForm.phoneLabel}
                  value={formData.phone}
                  onChange={handleChange}
                  className="h-[calc(48*var(--unit))] rounded-10 border border-[#ddd] bg-white px-[calc(16*var(--unit))] font-(family-name:--font-red-hat-text) text-[calc(15*var(--unit))] text-[#141414] outline-none transition-colors focus:border-[#6e0c12] lg:h-[calc(52*var(--unit))]"
                />
                <select
                  name="position"
                  value={formData.position}
                  onChange={handleChange}
                  className="h-[calc(48*var(--unit))] rounded-10 border border-[#ddd] bg-white px-[calc(16*var(--unit))] font-(family-name:--font-red-hat-text) text-[calc(15*var(--unit))] text-[#141414] outline-none transition-colors focus:border-[#6e0c12] lg:h-[calc(52*var(--unit))]"
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
                    accept=".pdf,.doc,.docx"
                    onChange={handleFile}
                    className="hidden"
                    id="resume-upload"
                  />
                  <div className="flex items-center gap-[calc(8*var(--unit))]">
                    <label
                      htmlFor="resume-upload"
                      className="flex h-[calc(48*var(--unit))] grow cursor-pointer items-center gap-[calc(12*var(--unit))] rounded-10 border border-dashed border-[#bbb] bg-white px-[calc(16*var(--unit))] font-(family-name:--font-red-hat-text) text-[calc(15*var(--unit))] text-[#5a5a5a] transition-colors hover:border-[#6e0c12] hover:text-[#6e0c12] lg:h-[calc(52*var(--unit))]"
                    >
                      <Icon name="arrow-up-right" className="size-[calc(18*var(--unit))] shrink-0 -rotate-45" />
                      <span className="truncate">{fileName || applicationForm.resumeLabel}</span>
                    </label>
                    {fileName && (
                      <button
                        type="button"
                        onClick={() => {
                          setFileName("");
                          if (fileRef.current) fileRef.current.value = "";
                        }}
                        aria-label={applicationForm.removeResume}
                        className="flex size-[calc(42*var(--unit))] shrink-0 cursor-pointer items-center justify-center rounded-10 border border-[#ddd] bg-white text-[#888] transition-colors hover:border-[#6e0c12] hover:text-[#6e0c12] lg:size-[calc(48*var(--unit))]"
                      >
                        <Icon name="x" className="size-[calc(18*var(--unit))]" />
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
                  className="rounded-10 border border-[#ddd] bg-white px-[calc(16*var(--unit))] py-[calc(12*var(--unit))] font-(family-name:--font-red-hat-text) text-[calc(15*var(--unit))] text-[#141414] outline-none transition-colors focus:border-[#6e0c12]"
                />

                <button
                  type="submit"
                  className="mt-[calc(4*var(--unit))] inline-flex h-[calc(52*var(--unit))] items-center justify-center gap-[calc(10*var(--unit))] rounded-full bg-[#6e0c12] px-[calc(30*var(--unit))] text-[calc(16*var(--unit))] font-bold text-white transition-colors duration-200 hover:bg-[#141414] lg:h-[calc(56*var(--unit))] lg:text-[calc(17*var(--unit))]"
                >
                  {applicationForm.submit}
                  <Icon name="arrow-right" className="size-[calc(18*var(--unit))]" />
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
