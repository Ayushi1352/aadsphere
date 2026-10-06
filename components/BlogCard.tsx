import Image from "next/image";
import Link from "next/link";
import Icon from "./icons";
import { Lines } from "./ui";
import type { BlogPost } from "@/data";

/** One blog card: photo with date badge, categories, title, arrow and excerpt. Used on Home and Blog. */
export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link href={post.href} className="group block overflow-hidden r-14 bg-[#fcfcfc] shadow-[0_0.15rem_0.9rem_rgba(20,20,20,0.09)] transition-[translate,box-shadow] duration-300 hover:-translate-y-6 hover:shadow-[0_0.9rem_1.75rem_rgba(110,12,18,0.16)]">
      <div className="relative aspect-495/222 overflow-hidden">
        <Image
          src={post.image.src}
          alt={post.image.alt}
          fill
          sizes="(min-width: 80rem) 30vw, (min-width: 48rem) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="relative px-22 pb-26 pt-56 sm:px-30 xl:h-214 xl:p-0">
        <p className="absolute -top-64 left-22 flex h-84 w-66 flex-col items-center justify-center r-6 bg-[#84020a] text-white sm:left-26 xl:-top-71 xl:left-26 xl:h-88 xl:w-69">
          <span className="fs-25 font-semibold leading-none xl:fs-27">{post.day}</span>
          <span className="mt-5 font-inter fs-13 uppercase leading-none xl:fs-14">{post.month}</span>
          <span className="mt-3 font-inter fs-13 leading-none xl:fs-14">{post.year}</span>
        </p>
        <p className="flex flex-wrap items-center gap-x-16 gap-y-4 font-inter fs-11 font-medium uppercase leading-none tracking-[0.17em] text-[#4d525c] xl:absolute xl:left-32 xl:top-32 xl:gap-x-16 xl:fs-12">
          {post.categories.map((category, i) => (
            <span key={category} className="flex items-center gap-16">
              {i > 0 && <span aria-hidden="true">/</span>}
              {category}
            </span>
          ))}
        </p>
        <h3 className="mt-16 pr-56 fs-21 font-bold leading-[1.25] tracking-[-0.025em] text-ink xl:absolute xl:left-32 xl:top-58 xl:mt-0 xl:whitespace-nowrap xl:pr-0 xl:fs-25 xl:leading-29">
          <Lines lines={post.titleLines} />
        </h3>
        <span className="absolute right-22 top-66 flex size-44 items-center justify-center rounded-full bg-[#fde4e4] text-[#b3121f] transition-colors duration-200 group-hover:bg-brand group-hover:text-white sm:right-30 xl:right-32 xl:top-57">
          <Icon name="arrow-right" className="size-20 transition-transform duration-300 group-hover:translate-x-3" />
        </span>
        <p className="mt-12 fs-16 leading-[1.5] text-[#666b75] xl:absolute xl:left-32 xl:top-125 xl:mt-0 xl:whitespace-nowrap xl:fs-17 xl:leading-[1.53125rem]">
          <Lines lines={post.excerptLines} />
        </p>
      </div>
    </Link>
  );
}
