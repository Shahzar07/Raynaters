import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import type { CaseStudy } from '@/lib/case-studies/types';

export function CaseStudyCard({ study }: { study: CaseStudy }) {
  return (
    <Link href={`/case-studies/${study.slug}`} className="group block h-full">
      <article className="flex h-full flex-col overflow-hidden rounded-[18px] border border-border bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-text-muted/40">
        {/* Thumbnail */}
        <div className="relative aspect-[16/9] overflow-hidden">
          <Image
            src={study.image.src}
            alt={study.image.alt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                'linear-gradient(to bottom, transparent 40%, rgba(10,10,11,0.6) 100%)',
            }}
          />
          <span className="absolute left-4 top-4 inline-flex rounded-full border border-white/20 bg-bg/70 px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-text-muted backdrop-blur-sm">
            {study.category}
          </span>
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col p-6 sm:p-7">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-[8px] border border-border bg-surface-hover text-[12px] font-medium tracking-[-0.01em] text-text-primary">
                {study.monogram}
              </span>
              <span className="text-[13px] tracking-[-0.01em] text-text-secondary">
                {study.client}
              </span>
            </div>
            <ArrowUpRight
              className="h-4 w-4 text-text-muted transition-colors group-hover:text-accent"
              strokeWidth={2}
            />
          </div>

          <p className="mt-5 font-display text-[40px] leading-none tracking-[-0.04em] text-accent sm:text-[44px]">
            {study.metric}
          </p>
          <p className="mt-1.5 text-[11px] uppercase tracking-[0.14em] text-text-muted">
            {study.metricLabel}
          </p>

          <p className="mt-4 flex-1 text-pretty text-[14px] leading-relaxed text-text-secondary sm:text-[15px]">
            {study.summary}
          </p>
        </div>
      </article>
    </Link>
  );
}
