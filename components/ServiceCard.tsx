import Image from "next/image";
import Link from "next/link";
import Icon from "./icons";
import type { ServiceItem } from "@/data";

/** One service card: photo with number badge, category, title and arrow. Used on Home and Services. */
export default function ServiceCard({ service, className = "" }: { service: ServiceItem; className?: string }) {
  return (
    <Link href={service.href} className={`group block bg-[#f9f9fb] shadow-[0_calc(2.4*var(--unit))_calc(12*var(--unit))_color-mix(in_srgb,var(--color-ink)_8%,transparent)] transition-[translate,box-shadow] duration-300 hover:-translate-y-[calc(6*var(--unit))] hover:shadow-[0_calc(14.4*var(--unit))_calc(28*var(--unit))_color-mix(in_srgb,var(--color-primary)_16%,transparent)] ${className}`}>
      <div className="relative aspect-366/264 overflow-hidden">
        <Image
          src={service.image.src}
          alt={service.image.alt}
          fill
          sizes="(min-width: 80rem) 22vw, (min-width: 40rem) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute left-0 top-0 flex size-[calc(56*var(--unit))] items-center justify-center bg-primary text-[calc(20*var(--unit))] font-bold leading-none text-white lg:size-[calc(61*var(--unit))] lg:text-[calc(22*var(--unit))]">
          {service.number}
        </span>
      </div>
      <div className="relative px-[calc(22*var(--unit))] pb-[calc(24*var(--unit))] pt-[calc(22*var(--unit))] lg:h-[calc(138*var(--unit))] lg:p-0">
        <p className="flex items-center gap-[calc(14*var(--unit))] font-ui text-[calc(11*var(--unit))] font-medium uppercase leading-none tracking-[0.25em] text-[#4d525c] lg:absolute lg:left-[calc(23*var(--unit))] lg:top-[calc(23*var(--unit))] lg:text-[calc(12*var(--unit))]">
          <span className="h-[calc(2*var(--unit))] w-[calc(37*var(--unit))] bg-primary" aria-hidden="true" />
          {service.category}
        </p>
        <h3 className="mt-[calc(16*var(--unit))] pr-[calc(64*var(--unit))] text-[calc(22*var(--unit))] font-bold leading-[1.28] tracking-[-0.005em] text-ink lg:absolute lg:left-[calc(23*var(--unit))] lg:top-[calc(50*var(--unit))] lg:mt-0 lg:pr-0 lg:text-[calc(25*var(--unit))] lg:leading-[calc(32*var(--unit))]">
          {service.titleLines.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h3>
        <span className="absolute bottom-[calc(28*var(--unit))] right-[calc(22*var(--unit))] flex size-[calc(46*var(--unit))] items-center justify-center rounded-full bg-primary text-white transition-colors duration-200 group-hover:bg-ink lg:bottom-auto lg:right-[calc(23*var(--unit))] lg:top-[calc(45*var(--unit))] lg:size-[calc(47*var(--unit))]">
          <Icon name="arrow-right" className="size-[calc(18*var(--unit))] transition-transform duration-300 group-hover:translate-x-[calc(3*var(--unit))]" />
        </span>
      </div>
    </Link>
  );
}
