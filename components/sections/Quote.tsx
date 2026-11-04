import { QuoteForm } from "@/components/sections/QuoteForm";
import { QuoteIntro } from "@/components/sections/QuoteIntro";
import type { QuoteData } from "@/types/templates.types";

/** Get a Quote page: intro with features on the left, the form on the right. */
export const Quote = ({ data }: { data?: QuoteData }) => {
  if (!data) return null;
  return (
    <section className="px-[calc(20*var(--unit))] py-[calc(32*var(--unit))] sm:px-[calc(32*var(--unit))] sm:py-[calc(40*var(--unit))] lg:flex lg:items-start lg:gap-0 lg:px-0 lg:py-[calc(48*var(--unit))]">
      <QuoteIntro data={data} />
      <QuoteForm data={data} />
    </section>
  );
};
