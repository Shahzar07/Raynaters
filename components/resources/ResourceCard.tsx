import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import type { Resource } from '@/lib/resources/types';

export function ResourceCard({
  resource,
  featured = false,
}: {
  resource: Resource;
  featured?: boolean;
}) {
  return (
    <Link href={`/resources/${resource.slug}`} className="group block h-full">
      <article
        className={
          'flex h-full flex-col rounded-[18px] border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-text-muted/40 sm:p-7' +
          (featured ? ' md:p-9' : '')
        }
      >
        <div className="flex items-center justify-between">
          <span className="inline-flex w-fit rounded-full border border-border px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-text-muted">
            {resource.category}
          </span>
          <ArrowUpRight
            className="h-5 w-5 text-text-muted transition-colors group-hover:text-accent"
            strokeWidth={2}
          />
        </div>

        <h3
          className={
            'mt-5 font-display text-balance tracking-[-0.02em] text-text-primary ' +
            (featured
              ? 'text-[28px] leading-[1.12] sm:text-[36px]'
              : 'text-[22px] leading-[1.15] sm:text-[24px]')
          }
        >
          {resource.title}
        </h3>

        <p className="mt-4 flex-1 text-pretty text-[15px] leading-relaxed text-text-secondary sm:text-[16px]">
          {resource.excerpt}
        </p>

        <p className="mt-6 text-[12px] uppercase tracking-[0.14em] text-text-muted">
          {resource.readingTime} read
        </p>
      </article>
    </Link>
  );
}
