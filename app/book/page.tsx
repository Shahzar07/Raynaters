import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import CalEmbed from '@/components/CalEmbed';

export const metadata = {
  title: 'Book your Agent Audit — Raynaters Tech',
  description: 'Book a free 30-minute Agent Audit with Shahzar. ROI projection within 48 hours.',
};

export default function BookPage() {
  return (
    <main className="grain min-h-screen bg-bg text-text-primary">
      <div className="mx-auto max-w-content px-6 py-16 md:py-24">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Raynaters
        </Link>

        <div className="mt-16 max-w-text">
          <p className="text-xs uppercase tracking-[0.2em] text-accent">
            The free audit
          </p>
          <h1 className="font-display mt-4 text-[44px] md:text-[72px] leading-[1.02] tracking-tightest text-text-primary">
            Book your Agent Audit.
          </h1>
          <p className="mt-6 text-[19px] leading-relaxed text-text-secondary max-w-[60ch]">
            30 minutes with Shahzar. We walk through your operation, identify the
            workflows worth automating, and you get a written ROI projection
            within 48 hours. No pitch deck.
          </p>
        </div>

        <div className="mt-16 rounded-[16px] border border-border bg-surface p-2" style={{ minHeight: 700 }}>
          <CalEmbed />
        </div>

        <p className="mt-10 text-sm text-text-muted">
          Prefer email? Reach Shahzar directly at{' '}
          <a className="text-text-primary underline underline-offset-4 decoration-border hover:decoration-accent" href="mailto:hello@raynaters.com">
            hello@raynaters.com
          </a>
          .
        </p>
      </div>
    </main>
  );
}
