import { Lines } from "@/components/ui";
import { site } from "@/data";

const { storyParagraphs } = site.aboutPage;

/** The three centred paragraphs that tell the AdSphere story. */
export default function AboutStory() {
  return (
    <section className="px-20 pt-48 sm:px-32 sm:pt-64 xl:h-476 xl:p-0 xl:pt-39">
      <div className="mx-auto max-w-760 space-y-20 text-center fs-17 leading-[1.7] text-[#454545] sm:fs-20 xl:max-w-none xl:space-y-32 xl:fs-26 xl:leading-[2.34375rem] xl:tracking-[0.012em]">
        {storyParagraphs.map((lines, i) => (
          <p key={i}>
            <Lines lines={lines} />
          </p>
        ))}
      </div>
    </section>
  );
}
