import Image from "next/image";
import Link from "next/link";
import Icon from "./icons";
import type { ServiceItem } from "@/data";

/** One service card: photo with number badge, category, title and arrow. Used on Home and Services. */
export default function ServiceCard({ service, className = "" }: { service: ServiceItem; className?: string }) {
  return (
    <Link href={service.href} className={`group block bg-[#f9f9fb] shadow-[0_0.15rem_0.75rem_rgba(20,20,20,0.08)] transition-[translate,box-shadow] duration-300 hover:-translate-y-6 hover:shadow-[0_0.9rem_1.75rem_rgba(110,12,18,0.16)] ${className}`}>
      <div className="relative aspect-366/264 overflow-hidden">
        <Image
          src={service.image.src}
          alt={service.image.alt}
          fill
          sizes="(min-width: 80rem) 22vw, (min-width: 40rem) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute left-0 top-0 flex size-56 items-center justify-center bg-brand fs-20 font-bold leading-none text-white xl:size-61 xl:fs-22">
          {service.number}
        </span>
      </div>
      <div className="relative px-22 pb-24 pt-22 xl:h-138 xl:p-0">
        <p className="flex items-center gap-14 font-inter fs-11 font-medium uppercase leading-none tracking-[0.25em] text-[#4d525c] xl:absolute xl:left-23 xl:top-23 xl:fs-12">
          <span className="h-2 w-37 bg-accent" aria-hidden="true" />
          {service.category}
        </p>
        <h3 className="mt-16 pr-64 fs-22 font-bold leading-[1.28] tracking-[-0.005em] text-ink xl:absolute xl:left-23 xl:top-50 xl:mt-0 xl:pr-0 xl:fs-25 xl:leading-32">
          {service.titleLines.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h3>
        <span className="absolute bottom-28 right-22 flex size-46 items-center justify-center rounded-full bg-brand text-white transition-colors duration-200 group-hover:bg-ink xl:bottom-auto xl:right-23 xl:top-45 xl:size-47">
          <Icon name="arrow-right" className="size-18 transition-transform duration-300 group-hover:translate-x-3" />
        </span>
      </div>
    </Link>
  );
}
