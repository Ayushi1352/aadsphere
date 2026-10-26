import Image from "next/image";
import Link from "next/link";
import Icon from "./icons";
import { Lines } from "./ui";
import type { BlogPost } from "@/data";

/** One blog card: photo with date badge, categories, title, arrow and excerpt. Used on Home and Blog. */
export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link href={post.href} className="group block overflow-hidden rounded-[calc(14*var(--unit))] bg-[#fcfcfc] shadow-[0_calc(2.4*var(--unit))_calc(14.4*var(--unit))_rgba(20,20,20,0.09)] transition-[translate,box-shadow] duration-300 hover:-translate-y-[calc(6*var(--unit))] hover:shadow-[0_calc(14.4*var(--unit))_calc(28*var(--unit))_rgba(110,12,18,0.16)]">
      <div className="relative aspect-495/222 overflow-hidden">
        <Image
          src={post.image.src}
          alt={post.image.alt}
          fill
          sizes="(min-width: 80rem) 30vw, (min-width: 48rem) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="relative px-[calc(22*var(--unit))] pb-[calc(26*var(--unit))] pt-[calc(56*var(--unit))] sm:px-[calc(30*var(--unit))] lg:h-[calc(214*var(--unit))] lg:p-0">
        <p className="absolute -top-[calc(64*var(--unit))] left-[calc(22*var(--unit))] flex h-[calc(84*var(--unit))] w-[calc(66*var(--unit))] flex-col items-center justify-center rounded-[calc(6*var(--unit))] bg-[#6e0c12] text-white sm:left-[calc(26*var(--unit))] lg:-top-[calc(71*var(--unit))] lg:left-[calc(26*var(--unit))] lg:h-[calc(88*var(--unit))] lg:w-[calc(69*var(--unit))]">
          <span className="text-[calc(25*var(--unit))] font-semibold leading-none lg:text-[calc(27*var(--unit))]">{post.day}</span>
          <span className="mt-[calc(5*var(--unit))] font-(family-name:--font-inter-face) text-[calc(13*var(--unit))] uppercase leading-none lg:text-[calc(14*var(--unit))]">{post.month}</span>
          <span className="mt-[calc(3*var(--unit))] font-(family-name:--font-inter-face) text-[calc(13*var(--unit))] leading-none lg:text-[calc(14*var(--unit))]">{post.year}</span>
        </p>
        <p className="flex flex-wrap items-center gap-x-[calc(16*var(--unit))] gap-y-[calc(4*var(--unit))] font-(family-name:--font-inter-face) text-[calc(11*var(--unit))] font-medium uppercase leading-none tracking-[0.17em] text-[#4d525c] lg:absolute lg:left-[calc(32*var(--unit))] lg:top-[calc(32*var(--unit))] lg:gap-x-[calc(16*var(--unit))] lg:text-[calc(12*var(--unit))]">
          {post.categories.map((category, i) => (
            <span key={category} className="flex items-center gap-[calc(16*var(--unit))]">
              {i > 0 && <span aria-hidden="true">/</span>}
              {category}
            </span>
          ))}
        </p>
        <h3 className="mt-[calc(16*var(--unit))] pr-[calc(56*var(--unit))] text-[calc(21*var(--unit))] font-bold leading-[1.25] tracking-[-0.025em] text-[#141414] lg:absolute lg:left-[calc(32*var(--unit))] lg:top-[calc(58*var(--unit))] lg:mt-0 lg:whitespace-nowrap lg:pr-0 lg:text-[calc(25*var(--unit))] lg:leading-[calc(29*var(--unit))]">
          <Lines lines={post.titleLines} />
        </h3>
        <span className="absolute right-[calc(22*var(--unit))] top-[calc(66*var(--unit))] flex size-[calc(44*var(--unit))] items-center justify-center rounded-full bg-[#fbe9e9] text-[#6e0c12] transition-colors duration-200 group-hover:bg-[#6e0c12] group-hover:text-white sm:right-[calc(30*var(--unit))] lg:right-[calc(32*var(--unit))] lg:top-[calc(57*var(--unit))]">
          <Icon name="arrow-right" className="size-[calc(20*var(--unit))] transition-transform duration-300 group-hover:translate-x-[calc(3*var(--unit))]" />
        </span>
        <p className="mt-[calc(12*var(--unit))] text-[calc(16*var(--unit))] leading-[1.5] text-[#666b75] lg:absolute lg:left-[calc(32*var(--unit))] lg:top-[calc(125*var(--unit))] lg:mt-0 lg:whitespace-nowrap lg:text-[calc(17*var(--unit))] lg:leading-[calc(24.5*var(--unit))]">
          <Lines lines={post.excerptLines} />
        </p>
      </div>
    </Link>
  );
}
