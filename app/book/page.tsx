import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata = {
  title: 'Book your Agent Audit — Raynaters Tech',
  description: 'Book a free 30-minute Agent Audit with Shahzar. ROI projection within 48 hours.',
};

export default function BookPage() {
  return (
    <main className="grain min-h-screen bg-bg text-text-primary">
      <div className="mx-auto max-w-content px-5 sm:px-8 md:px-10 py-12 sm:py-16 md:py-24">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Raynaters
        </Link>

        <div className="mt-12 sm:mt-16 max-w-text">
          <p className="text-[11px] sm:text-xs uppercase tracking-[0.2em] text-accent">
            The free audit
          </p>
          <h1 className="font-display mt-4 text-balance text-[36px] leading-[1.05] tracking-tightest text-text-primary sm:text-[48px] md:text-[64px] lg:text-[72px] md:leading-[1.02]">
            Book your Agent Audit.
          </h1>
          <p className="mt-5 sm:mt-6 text-pretty text-[16px] leading-relaxed text-text-secondary sm:text-[18px] md:text-[19px] max-w-[60ch]">
            30 minutes with Shahzar. We walk through your operation, identify the
            workflows worth automating, and you get a written ROI projection
            within 48 hours. No pitch deck.
          </p>
        </div>

        <div className="mt-12 sm:mt-16 rounded-[16px] border border-border bg-surface p-1.5 sm:p-2">
          <div
            aria-label="Calendar embed"
            className="grid min-h-[520px] sm:min-h-[600px] md:min-h-[640px] place-items-center rounded-[12px] border border-dashed border-border bg-bg"
          >
            <div className="text-center max-w-md px-5 sm:px-6">
              <div className="mx-auto h-2 w-2 rounded-full bg-accent" />
              <p className="mt-5 sm:mt-6 text-[12px] sm:text-sm uppercase tracking-[0.2em] text-text-muted">
                Calendar embed slot
              </p>
              <p className="mt-3 text-[14px] sm:text-[15px] text-text-secondary">
                Cal.com embed will appear here.
              </p>
            </div>
          </div>
        </div>

        <p className="mt-8 sm:mt-10 text-[13px] sm:text-sm text-text-muted">
          Prefer email? Reach Shahzar directly at{' '}
          <a className="text-text-primary underline underline-offset-4 decoration-border hover:decoration-accent break-words" href="mailto:team@raynaters.tech">
            team@raynaters.tech
          </a>
          .
        </p>
      </div>
    </main>
  );
}
