import Image from "next/image";
import Link from "next/link";
import { Lines } from "./ui";
import { site } from "@/data";

const { headingLines, descriptionLines, button, image } = site.hero;

export default function HeroSection() {
  return (
    <section className="relative bg-hero xl:h-799">
      {/* Text */}
      <div className="relative z-10 px-20 pb-36 pt-44 sm:px-32 sm:pb-48 sm:pt-60 xl:px-0 xl:pb-0 xl:pl-63 xl:pt-146">
        <h1 className="font-display fs-36 font-normal leading-[1.2] tracking-[-0.045em] text-white [-webkit-text-stroke:0.028em_#fff] sm:fs-60 lg:fs-76 xl:fs-96 xl:leading-117">
          {headingLines.map((line) => (
            <span key={line.text} className={`block ${line.indent ? "pl-[18%] sm:pl-150 xl:pl-242" : ""}`}>
              {line.text}
            </span>
          ))}
        </h1>
        <p className="mt-22 max-w-560 font-poppins fs-16 leading-[1.7] tracking-[0.012em] text-white/90 sm:mt-28 sm:fs-19 xl:mt-38 xl:max-w-none xl:fs-22 xl:leading-37">
          <Lines lines={descriptionLines} />
        </p>
        <Link
          href={button.href}
          className="mt-28 inline-flex h-58 w-170 items-center justify-center bg-white font-display fs-15 font-normal tracking-[-0.09em] text-ink [-webkit-text-stroke:0.03em_currentColor] transition-colors duration-200 hover:bg-ink hover:text-white sm:mt-36 xl:mt-50 xl:h-74 xl:w-216 xl:fs-19"
        >
          {button.label}
        </Link>
      </div>

      {/* Photo */}
      <div className="relative ml-20 aspect-1122/735 sm:ml-32 xl:absolute xl:left-564 xl:right-0 xl:top-0 xl:ml-0 xl:aspect-auto xl:h-735">
        <Image src={image.src} alt={image.alt} fill preload sizes="(min-width: 80rem) 66vw, 100vw" className="object-cover" />
      </div>
      <div className="h-24 sm:h-36 xl:hidden" aria-hidden="true" />
    </section>
  );
}
