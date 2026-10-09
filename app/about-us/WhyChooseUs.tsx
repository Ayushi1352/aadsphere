import Icon from "@/components/icons";
import { Lines, SectionLabel } from "@/components/ui";
import { site } from "@/data";

const { label, headingLines, descriptionLines, reasons } = site.whyChooseUs;

/** "Why Choose Us": heading plus six reason cards (the featured one is solid red). */
export default function WhyChooseUs() {
  return (
    <section className="px-20 py-32 sm:px-32 sm:py-40 xl:h-800 xl:p-0">
      <div data-reveal-group="up" className="flex flex-col items-center text-center xl:pt-48">
        <SectionLabel text={label} tracking="tracking-[0.24em]" className="[&>span:nth-child(2)]:font-bold" />
          <h2 className="mt-18 fs-28 font-extrabold leading-[1.1] text-ink sm:fs-52 xl:mt-24 xl:fs-63 xl:leading-60">
          {headingLines.map((line, i) => (
            <span key={i} className="block">
              {line.map((part) => (
                <span key={part.text} className={part.highlight ? "text-brand" : ""}>
                  {part.text}
                </span>
              ))}
            </span>
          ))}
        </h2>
        <p className="mt-18 max-w-680 font-inter fs-16 leading-[1.7] text-slate sm:fs-18 xl:mt-14 xl:max-w-none xl:fs-23 xl:leading-28 xl:tracking-[-0.012em]">
          <Lines lines={descriptionLines} />
        </p>
      </div>

      <ul data-reveal-group="up" className="mt-36 grid gap-20 md:grid-cols-2 xl:ml-63 xl:mt-23 xl:h-451 xl:w-1571 xl:grid-cols-[515fr_507fr_512fr] xl:grid-rows-[218fr_212fr] xl:gap-x-22 xl:gap-y-23">
        {reasons.map((reason) => (
          <li
            key={reason.number}
            className={`group relative flex gap-18 overflow-hidden r-14 p-22 transition-[translate,box-shadow] duration-300 hover:-translate-y-6 sm:gap-24 sm:p-28 xl:block xl:p-0 ${
              reason.featured
                ? "bg-[linear-gradient(135deg,#56080e_0%,#6e0c12_50%,#56080e_100%)] text-white shadow-[0_0.75rem_1.75rem_rgba(110,12,18,0.22)]"
                : "border border-[#f3e9ea] bg-white shadow-[0_0.25rem_1.25rem_rgba(110,12,18,0.06)]"
            }`}
          >
            {!reason.featured && (
              <span
                aria-hidden="true"
                className="absolute bottom-0 right-0 h-96 w-132 bg-linear-to-tl from-[#fadfe0] to-[#fdf1f1] [clip-path:polygon(100%_0,100%_100%,0_100%)]"
              />
            )}

            <span
              className={`relative flex size-76 shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6 items-center justify-center r-14 sm:size-96 xl:absolute xl:top-36 xl:size-113 xl:r-16 ${reason.featured ? "xl:left-31" : "xl:left-29"} ${
                reason.featured ? "bg-white/[0.13] text-white" : "bg-[#fcefef] text-brand"
              }`}
            >
              <Icon name={reason.icon} className="size-44 sm:size-56 xl:size-70" />
            </span>

            <div className={`relative xl:absolute xl:top-30 ${reason.featured ? "xl:left-179" : "xl:left-169"}`}>
              <p className={`flex items-center gap-12 fs-18 font-extrabold leading-none tracking-[0.04em] xl:fs-21 xl:leading-26 ${reason.featured ? "text-[#ff8e97]" : "text-[#f6b9be]"}`}>
                {reason.number}
                <span
                  aria-hidden="true"
                  className={`h-2 w-86 bg-linear-to-r to-transparent ${reason.featured ? "from-[#6e0c12]" : "from-[#f0959c]"}`}
                />
              </p>
              <h3 className={`mt-12 fs-20 font-extrabold leading-[1.2] tracking-[-0.01em] sm:fs-23 xl:mt-14 xl:whitespace-nowrap xl:fs-25 xl:leading-30 ${reason.featured ? "text-white" : "text-ink"}`}>
                {reason.title}
              </h3>
              <p className={`mt-8 font-text fs-16 leading-[1.5] sm:fs-18 xl:mt-7 xl:whitespace-nowrap xl:fs-20 xl:leading-[1.59375rem] ${reason.featured ? "text-white/90" : "text-[#555a62]"}`}>
                <Lines lines={reason.descriptionLines} />
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
