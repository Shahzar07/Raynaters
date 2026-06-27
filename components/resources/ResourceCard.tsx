import Image from 'next/image';
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
      <article className="flex h-full flex-col overflow-hidden rounded-[18px] border border-border bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-text-muted/40">
        {/* Cover thumbnail */}
        {resource.coverImage && (
          <div className={`relative overflow-hidden ${featured ? 'aspect-[21/9]' : 'aspect-[16/9]'}`}>
            <Image
              src={resource.coverImage.src}
              alt={resource.coverImage.alt}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  'linear-gradient(to bottom, transparent 50%, rgba(10,10,11,0.5) 100%)',
              }}
            />
          </div>
        )}

        {/* Content */}
        <div className={`flex flex-1 flex-col p-6 sm:p-7 ${featured && !resource.coverImage ? 'md:p-9' : ''}`}>
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
        </div>
      </article>
    </Link>
  );
}
