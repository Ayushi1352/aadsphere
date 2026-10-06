import Image from "next/image";
import { Lines, SectionLabel } from "@/components/ui";
import { site } from "@/data";

const { label, headingLines, descriptionLines, projects } = site.portfolio;

/** Heading plus the grid of portfolio projects (photo, name and tags). */
export default function ProjectsGrid() {
  return (
    <section className="px-20 py-56 sm:px-32 sm:py-72 xl:px-0 xl:pb-160 xl:pt-52">
      <div className="flex flex-col items-center text-center">
        <SectionLabel text={label} tracking="tracking-[0.24em]" className="[&>span:nth-child(2)]:font-bold" />
        <h2 className="mt-18 fs-30 font-black leading-[1.1] tracking-[-0.02em] text-[#0b0b0c] sm:fs-52 xl:mt-34 xl:fs-70 xl:leading-70">
          {headingLines.map((line, i) => (
            <span key={i} className="block">
              {line.map((part) => (
                <span key={part.text} className={part.highlight ? "text-[#d3101d]" : ""}>
                  {part.text}
                </span>
              ))}
            </span>
          ))}
        </h2>
        <p className="mt-18 max-w-640 font-inter fs-16 leading-[1.7] text-slate sm:fs-18 xl:mt-18 xl:max-w-none xl:fs-23 xl:leading-33 xl:tracking-[0.005em]">
          <Lines lines={descriptionLines} />
        </p>
      </div>

      <ul className="mt-36 grid gap-x-24 gap-y-40 sm:grid-cols-2 lg:grid-cols-3 xl:ml-141 xl:mt-43 xl:w-1396 xl:gap-x-27 xl:gap-y-58">
        {projects.map((project) => (
          <li key={project.title}>
            <Image
              src={project.image.src}
              alt={project.image.alt}
              width={project.image.width}
              height={project.image.height}
              sizes="(min-width: 64rem) 27vw, (min-width: 40rem) 50vw, 100vw"
              className="h-auto w-full r-8"
            />
            <h3 className="mt-18 fs-22 font-black leading-[1.2] tracking-[0.01em] text-[#0b0b0c] sm:fs-25 xl:mt-19 xl:fs-32 xl:leading-38">{project.title}</h3>
            <ul className="mt-14 flex flex-wrap gap-10 xl:mt-21 xl:gap-11">
              {project.tags.map((tag) => (
                <li key={tag} className="rounded-full bg-[#fde9ea] px-18 py-9 fs-15 font-medium leading-none text-[#d3141f] xl:flex xl:h-45 xl:items-center xl:px-22 xl:py-0 xl:fs-19">
                  {tag}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  );
}
