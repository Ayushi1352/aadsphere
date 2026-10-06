import Link from "next/link";
import Icon from "./icons";

type Cta = { heading: string; description: string; button: { label: string; href: string } };

/** Maroon strip with a short message and one button. Used at the end of inner pages. */
export default function CtaStrip({ cta }: { cta: Cta }) {
  return (
    <div data-reveal="zoom" className="flex flex-col items-start gap-22 r-16 bg-hero px-24 py-30 sm:px-40 sm:py-40 lg:flex-row lg:items-center lg:justify-between xl:r-20 xl:px-64 xl:py-52">
      <div>
        <h2 className="fs-26 font-bold leading-[1.2] text-white sm:fs-32 xl:fs-40">{cta.heading}</h2>
        <p className="mt-8 font-text fs-16 leading-[1.6] text-white/85 sm:fs-18 xl:mt-10 xl:fs-20">{cta.description}</p>
      </div>
      <Link
        href={cta.button.href}
        className="group inline-flex h-54 shrink-0 items-center justify-center gap-12 rounded-full bg-white px-30 fs-16 font-bold text-brand transition-colors duration-200 hover:bg-ink hover:text-white xl:h-62 xl:px-38 xl:fs-18"
      >
        {cta.button.label}
        <Icon name="arrow-right" className="size-20 transition-transform duration-300 group-hover:translate-x-4" />
      </Link>
    </div>
  );
}
