import Icon from "@/components/icons";
import { Lines, SectionHeading, SectionLabel } from "@/components/ui";
import { site } from "@/data";

const { label, headingLines, descriptionLines, perks } = site.career;

/** Intro heading plus the four reasons to work at AdSphere. */
export default function CareerPerks() {
  return (
    <section className="px-20 pt-56 sm:px-32 sm:pt-72 xl:px-76 xl:pt-96">
      <div className="flex flex-col items-center text-center">
        <SectionLabel text={label} />
        <SectionHeading lines={headingLines} className="mt-18 fs-28 leading-[1.08] sm:fs-52 xl:mt-20 xl:fs-65 xl:leading-64" />
        <p className="mt-18 max-w-680 font-text fs-16 font-medium leading-[1.7] text-body sm:fs-18 xl:mt-14 xl:max-w-none xl:fs-19 xl:leading-29">
          <Lines lines={descriptionLines} />
        </p>
      </div>

      <ul className="mt-36 grid gap-20 sm:grid-cols-2 xl:mt-56 xl:grid-cols-4 xl:gap-24">
        {perks.map((perk) => (
          <li key={perk.title} className="relative overflow-hidden r-14 border border-[#f3e9ea] bg-white p-26 shadow-[0_0.25rem_1.25rem_rgba(110,12,18,0.06)] xl:p-32">
            <span
              aria-hidden="true"
              className="absolute bottom-0 right-0 h-80 w-110 bg-linear-to-tl from-[#fadfe0] to-[#fdf1f1] [clip-path:polygon(100%_0,100%_100%,0_100%)]"
            />
            <span className="relative flex size-72 items-center justify-center r-14 bg-[#fcefef] text-[#c2121c] xl:size-88">
              <Icon name={perk.icon} className="size-40 xl:size-50" />
            </span>
            <h3 className="relative mt-20 fs-21 font-extrabold leading-[1.2] text-ink xl:mt-26 xl:fs-25">{perk.title}</h3>
            <p className="relative mt-8 font-text fs-16 leading-[1.55] text-[#555a62] xl:mt-10 xl:fs-18 xl:leading-28">
              <Lines lines={perk.lines} />
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
