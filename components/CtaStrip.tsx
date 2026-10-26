import Link from "next/link";
import Icon from "./icons";

type Cta = { heading: string; description: string; button: { label: string; href: string } };

/** Maroon strip with a short message and one button. Used at the end of inner pages. */
export default function CtaStrip({ cta }: { cta: Cta }) {
  return (
    <div data-reveal="zoom" className="flex flex-col items-start gap-[calc(22*var(--unit))] rounded-[calc(16*var(--unit))] bg-primary px-[calc(24*var(--unit))] py-[calc(30*var(--unit))] sm:px-[calc(40*var(--unit))] sm:py-[calc(40*var(--unit))] lg:flex-row lg:items-center lg:justify-between lg:rounded-[calc(20*var(--unit))] lg:px-[calc(64*var(--unit))] lg:py-[calc(52*var(--unit))]">
      <div>
        <h2 className="text-[calc(26*var(--unit))] font-bold leading-[1.2] text-white sm:text-[calc(32*var(--unit))] lg:text-[calc(40*var(--unit))]">{cta.heading}</h2>
        <p className="mt-[calc(8*var(--unit))] font-text text-[calc(16*var(--unit))] leading-[1.6] text-white/85 sm:text-[calc(18*var(--unit))] lg:mt-[calc(10*var(--unit))] lg:text-[calc(20*var(--unit))]">{cta.description}</p>
      </div>
      <Link
        href={cta.button.href}
        className="group inline-flex h-[calc(54*var(--unit))] shrink-0 items-center justify-center gap-[calc(12*var(--unit))] rounded-full bg-white px-[calc(30*var(--unit))] text-[calc(16*var(--unit))] font-bold text-primary transition-colors duration-200 hover:bg-ink hover:text-white lg:h-[calc(62*var(--unit))] lg:px-[calc(38*var(--unit))] lg:text-[calc(18*var(--unit))]"
      >
        {cta.button.label}
        <Icon name="arrow-right" className="size-[calc(20*var(--unit))] transition-transform duration-300 group-hover:translate-x-[calc(4*var(--unit))]" />
      </Link>
    </div>
  );
}
