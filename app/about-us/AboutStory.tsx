import { Lines } from "@/components/ui";
import { site } from "@/data";

const { storyParagraphs } = site.aboutPage;

/** The three centred paragraphs that tell the AdSphere story. */
export default function AboutStory() {
  return (
    <section className="px-[calc(20*var(--unit))] py-[calc(32*var(--unit))] sm:px-[calc(32*var(--unit))] sm:py-[calc(40*var(--unit))] lg:px-0 lg:py-[calc(48*var(--unit))]">
      <div data-reveal-group="up" className="mx-auto max-w-[calc(760*var(--unit))] space-y-[calc(20*var(--unit))] text-center text-[calc(17*var(--unit))] leading-[1.7] text-[#454545] sm:text-[calc(20*var(--unit))] lg:max-w-none lg:space-y-[calc(32*var(--unit))] lg:text-[calc(26*var(--unit))] lg:leading-[calc(37.5*var(--unit))] lg:tracking-[0.012em]">
        {storyParagraphs.map((lines, i) => (
          <p key={i}>
            <Lines lines={lines} />
          </p>
        ))}
      </div>
    </section>
  );
}
