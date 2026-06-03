import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import type { CaseStudy } from '@/lib/case-studies/types';

export function CaseStudyCard({ study }: { study: CaseStudy }) {
  return (
    <Link href={`/case-studies/${study.slug}`} className="group block h-full">
      <article className="flex h-full flex-col rounded-[18px] border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-text-muted/40 sm:p-7">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-[10px] border border-border bg-surface-hover text-[13px] font-medium tracking-[-0.01em] text-text-primary">
              {study.monogram}
            </span>
            <span className="text-[13px] tracking-[-0.01em] text-text-secondary">
              {study.client}
            </span>
          </div>
          <ArrowUpRight
            className="h-5 w-5 text-text-muted transition-colors group-hover:text-accent"
            strokeWidth={2}
          />
        </div>

        <span className="mt-6 inline-flex w-fit rounded-full border border-border px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-text-muted">
          {study.category}
        </span>

        <p className="mt-5 font-display text-[42px] leading-none tracking-[-0.04em] text-accent sm:text-[48px]">
          {study.metric}
        </p>
        <p className="mt-2 text-[12px] uppercase tracking-[0.14em] text-text-muted">
          {study.metricLabel}
        </p>

        <p className="mt-5 text-pretty text-[15px] leading-relaxed text-text-secondary">
          {study.summary}
        </p>
      </article>
    </Link>
  );
}
