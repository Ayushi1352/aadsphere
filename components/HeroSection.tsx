import Image from "next/image";
import Link from "next/link";
import { Lines } from "./ui";
import { site } from "@/data";

const { headingLines, descriptionLines, button, image } = site.hero;

export default function HeroSection() {
  return (
    <section className="relative mb-[calc(32*var(--unit))] bg-primary sm:mb-[calc(40*var(--unit))] lg:mb-[calc(48*var(--unit))] lg:h-[calc(799*var(--unit))]">
      {/* Text */}
      <div className="relative z-10 px-[calc(20*var(--unit))] pb-[calc(36*var(--unit))] pt-[calc(44*var(--unit))] sm:px-[calc(32*var(--unit))] sm:pb-[calc(48*var(--unit))] sm:pt-[calc(60*var(--unit))] lg:px-0 lg:pb-0 lg:pl-[calc(63*var(--unit))] lg:pt-[calc(100*var(--unit))]">
        <h1 className="font-hero text-[calc(36*var(--unit))] font-normal leading-[1.2] tracking-[-0.045em] text-white [-webkit-text-stroke:0.028em_#fff] sm:text-[calc(60*var(--unit))] lg:text-[calc(96*var(--unit))] lg:leading-[calc(117*var(--unit))]">
          {headingLines.map((line, i) => (
            <span
              key={line.text}
              style={{ transitionDelay: `${i * 140}ms` }}
              className={`block translate-x-0 transition-[opacity,translate] duration-900 ease-[cubic-bezier(0.22,1,0.36,1)] starting:-translate-x-[calc(56*var(--unit))] starting:opacity-0 motion-reduce:transition-none ${line.indent ? "pl-[18%] sm:pl-[calc(150*var(--unit))] lg:pl-[calc(242*var(--unit))]" : ""}`}>
              {line.text}
            </span>
          ))}
        </h1>
        <p className="translate-y-0 transition-[opacity,translate] delay-450 duration-800 ease-[cubic-bezier(0.22,1,0.36,1)] starting:translate-y-[calc(40*var(--unit))] starting:opacity-0 motion-reduce:transition-none mt-[calc(22*var(--unit))] max-w-[calc(560*var(--unit))] font-alt text-[calc(16*var(--unit))] leading-[1.7] tracking-[0.012em] text-white/90 sm:mt-[calc(28*var(--unit))] sm:text-[calc(19*var(--unit))] lg:mt-[calc(38*var(--unit))] lg:max-w-none lg:text-[calc(22*var(--unit))] lg:leading-[calc(37*var(--unit))]">
          <Lines lines={descriptionLines} />
        </p>
        {/* The wrapper plays the entrance, so the button keeps its own quick hover transition. */}
        <div className="mt-[calc(28*var(--unit))] flex translate-y-0 transition-[opacity,translate] delay-600 duration-800 ease-[cubic-bezier(0.22,1,0.36,1)] starting:translate-y-[calc(40*var(--unit))] starting:opacity-0 motion-reduce:transition-none sm:mt-[calc(36*var(--unit))] lg:mt-[calc(50*var(--unit))]">
          <Link
            href={button.href}
            className="inline-flex h-[calc(58*var(--unit))] w-[calc(170*var(--unit))] items-center justify-center bg-white font-hero text-[calc(15*var(--unit))] font-normal tracking-[-0.09em] text-ink [-webkit-text-stroke:0.03em_currentColor] transition-colors duration-200 hover:bg-ink hover:text-white lg:h-[calc(74*var(--unit))] lg:w-[calc(216*var(--unit))] lg:text-[calc(19*var(--unit))]"
          >
            {button.label}
          </Link>
        </div>
      </div>

      {/* Photo */}
      <div className="relative overflow-hidden [clip-path:inset(0)] transition-[clip-path] duration-1100 ease-[cubic-bezier(0.65,0,0.35,1)] starting:[clip-path:inset(0_0_0_100%)] motion-reduce:transition-none ml-[calc(20*var(--unit))] aspect-1122/735 sm:ml-[calc(32*var(--unit))] lg:absolute lg:left-[calc(564*var(--unit))] lg:right-0 lg:top-0 lg:ml-0 lg:aspect-auto lg:h-[calc(735*var(--unit))]">
        <Image src={image.src} alt={image.alt} fill preload sizes="(min-width: 80rem) 66vw, 100vw" className="scale-100 object-cover transition-[scale] duration-1600 ease-[cubic-bezier(0.22,1,0.36,1)] starting:scale-114 motion-reduce:transition-none" />
      </div>
      <div className="h-[calc(24*var(--unit))] sm:h-[calc(36*var(--unit))] lg:hidden" aria-hidden="true" />
    </section>
  );
}
