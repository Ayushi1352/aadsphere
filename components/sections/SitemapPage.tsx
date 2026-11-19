import Link from 'next/link';
import { Icon } from '@/components/ui/Icon';
import { Lines, SectionHeading, SectionLabel } from '@/components/ui/Text';
import type { SitemapPageProps } from '@/types/templates.types';

/** Every page of the website, grouped into boxes of links. */
export const SitemapPage = ({ data }: SitemapPageProps) => {
  if (!data) return null;
  const { label, title, titleHighlight, description, groups } = data;
  return (
    <section className="px-[calc(20*var(--unit))] py-[calc(32*var(--unit))] sm:px-[calc(32*var(--unit))] sm:py-[calc(40*var(--unit))] lg:px-[calc(76*var(--unit))] lg:py-[calc(48*var(--unit))]">
      <div data-reveal-group="up" className="flex flex-col items-center text-center">
        <SectionLabel text={label} />
        <SectionHeading title={title} highlight={titleHighlight} className="mt-[calc(18*var(--unit))] text-[calc(28*var(--unit))] leading-[1.08] sm:text-[calc(52*var(--unit))] lg:mt-[calc(20*var(--unit))] lg:text-[calc(65*var(--unit))] lg:leading-[calc(64*var(--unit))]" />
        <p className="mt-[calc(18*var(--unit))] max-w-[calc(640*var(--unit))] font-text text-[calc(16*var(--unit))] font-medium leading-[1.7] text-[var(--color-text)] sm:text-[calc(18*var(--unit))] lg:mt-[calc(14*var(--unit))] lg:max-w-none lg:text-[calc(19*var(--unit))] lg:leading-[calc(29*var(--unit))]">
          <Lines text={description} />
        </p>
      </div>

      <ul data-reveal-group="up" className="mt-[calc(36*var(--unit))] grid gap-[calc(22*var(--unit))] sm:grid-cols-2 lg:grid-cols-3 lg:mt-[calc(56*var(--unit))] lg:gap-[calc(26*var(--unit))]">
        {groups.map((group, i) => (
          <li key={group.id} className="rounded-[calc(14*var(--unit))] border border-[var(--color-border)] bg-[var(--color-surface)] p-[calc(24*var(--unit))] lg:p-[calc(34*var(--unit))]">
            <p className="text-[calc(16*var(--unit))] font-extrabold leading-none text-[var(--color-primary)] lg:text-[calc(18*var(--unit))]">{String(i + 1).padStart(2, '0')}</p>
            <h2 className="mt-[calc(10*var(--unit))] text-[calc(22*var(--unit))] font-bold leading-[1.2] text-[var(--color-heading)] lg:mt-[calc(12*var(--unit))] lg:text-[calc(27*var(--unit))]">{group.title}</h2>
            <span className="mt-[calc(12*var(--unit))] block h-[calc(3*var(--unit))] w-[calc(44*var(--unit))] bg-[var(--color-primary)] lg:mt-[calc(14*var(--unit))]" aria-hidden="true" />
            <ul className="mt-[calc(12*var(--unit))] lg:mt-[calc(16*var(--unit))]">
              {group.links.map((link) => (
                <li key={link.id} className="border-b border-[var(--color-border)] last:border-b-0">
                  <Link
                    href={link.url}
                    className="flex items-center justify-between gap-[calc(12*var(--unit))] py-[calc(13*var(--unit))] font-text text-[calc(16*var(--unit))] font-medium leading-[1.4] text-[var(--color-text-dark)] transition-colors duration-200 hover:text-[var(--color-primary)] lg:py-[calc(15*var(--unit))] lg:text-[calc(18*var(--unit))]"
                  >
                    {link.label}
                    <Icon name={data.linkIcon} className="size-[calc(17*var(--unit))] shrink-0 text-[var(--color-primary)]" />
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  );
};
