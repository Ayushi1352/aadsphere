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
    <section className="px-20 py-32 sm:px-32 sm:py-40 xl:py-48 xl:pl-63 xl:pr-52">
      <div data-reveal="zoom" className="flex flex-col lg:flex-row gap-0 r-16 overflow-hidden">
        {/* ── Left: CTA ── */}
        <div className="flex flex-col justify-center gap-18 bg-hero px-24 py-30 sm:px-40 sm:py-40 lg:w-1/2 xl:px-52 xl:py-52">
          <h2 className="fs-26 font-bold leading-[1.2] text-white sm:fs-32 xl:fs-40">
            {cta.heading}
          </h2>
          <p className="font-text fs-16 leading-[1.6] text-white/85 sm:fs-18 xl:fs-20">
            {cta.description}
          </p>
          <div className="mt-6 flex items-center gap-14">
            <span className="flex size-48 items-center justify-center rounded-full bg-white/15">
              <Icon name="mail" className="size-22 text-white" />
            </span>
            <span className="font-text fs-16 text-white/90 sm:fs-18">{applicationForm.contactEmail}</span>
          </div>
          <div className="flex items-center gap-14">
            <span className="flex size-48 items-center justify-center rounded-full bg-white/15">
              <Icon name="phone" className="size-22 text-white" />
            </span>
            <span className="font-text fs-16 text-white/90 sm:fs-18">{applicationForm.contactPhone}</span>
          </div>
        </div>

        {/* ── Right: Application Form ── */}
        <div className="bg-[#f9f9fb] px-24 py-30 sm:px-36 sm:py-36 lg:w-1/2 xl:px-44 xl:py-44">
          {submitted ? (
            <div className="flex flex-col items-center justify-center gap-16 py-40 text-center">
              <span className="flex size-72 items-center justify-center rounded-full bg-[#e6f9ed]">
                <Icon name="check" className="size-36 text-[#22c55e]" />
              </span>
              <h3 className="fs-24 font-bold text-ink xl:fs-28">{applicationForm.successHeading}</h3>
              <p className="max-w-340 font-text fs-16 leading-[1.5] text-body">
                {applicationForm.successMessage}
              </p>
            </div>
          ) : (
            <>
              <h3 className="fs-22 font-bold text-ink xl:fs-26">{applicationForm.heading}</h3>
              <p className="mt-6 font-text fs-15 leading-[1.5] text-body xl:fs-16">
                {applicationForm.description}
              </p>

              <form onSubmit={handleSubmit} className="mt-22 flex flex-col gap-16 xl:mt-28">
                <input
                  required
                  name="name"
                  placeholder={applicationForm.fullName}
                  value={formData.name}
                  onChange={handleChange}
                  className="h-48 rounded-10 border border-[#ddd] bg-white px-16 font-text fs-15 text-ink outline-none transition-colors focus:border-brand xl:h-52"
                />
                <input
                  required
                  name="email"
                  type="email"
                  placeholder={applicationForm.emailLabel}
                  value={formData.email}
                  onChange={handleChange}
                  className="h-48 rounded-10 border border-[#ddd] bg-white px-16 font-text fs-15 text-ink outline-none transition-colors focus:border-brand xl:h-52"
                />
                <input
                  name="phone"
                  type="tel"
                  placeholder={applicationForm.phoneLabel}
                  value={formData.phone}
                  onChange={handleChange}
                  className="h-48 rounded-10 border border-[#ddd] bg-white px-16 font-text fs-15 text-ink outline-none transition-colors focus:border-brand xl:h-52"
                />
                <select
                  name="position"
                  value={formData.position}
                  onChange={handleChange}
                  className="h-48 rounded-10 border border-[#ddd] bg-white px-16 font-text fs-15 text-ink outline-none transition-colors focus:border-brand xl:h-52"
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
                  <div className="flex items-center gap-8">
                    <label
                      htmlFor="resume-upload"
                      className="flex h-48 grow cursor-pointer items-center gap-12 rounded-10 border border-dashed border-[#bbb] bg-white px-16 font-text fs-15 text-body transition-colors hover:border-brand hover:text-brand xl:h-52"
                    >
                      <Icon name="arrow-up-right" className="size-18 shrink-0 -rotate-45" />
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
                        className="flex size-42 shrink-0 cursor-pointer items-center justify-center rounded-10 border border-[#ddd] bg-white text-[#888] transition-colors hover:border-brand hover:text-brand xl:size-48"
                      >
                        <Icon name="x" className="size-18" />
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
                  className="rounded-10 border border-[#ddd] bg-white px-16 py-12 font-text fs-15 text-ink outline-none transition-colors focus:border-brand"
                />

                <button
                  type="submit"
                  className="mt-4 inline-flex h-52 items-center justify-center gap-10 rounded-full bg-brand px-30 fs-16 font-bold text-white transition-colors duration-200 hover:bg-ink xl:h-56 xl:fs-17"
                >
                  {applicationForm.submit}
                  <Icon name="arrow-right" className="size-18" />
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
