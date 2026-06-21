import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import CalEmbed from '@/components/CalEmbed';

export const metadata = {
  title: 'Book your Agent Audit — Raynaters Tech',
  description: 'Book a free 30-minute Agent Audit with the Raynaters founder. ROI projection within 48 hours.',
};

export default function BookPage() {
  return (
    <main className="grain min-h-screen bg-bg text-text-primary">
      <div className="mx-auto max-w-content px-5 py-12 sm:px-6 md:py-24">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Raynaters
        </Link>

        <div className="mt-10 max-w-text md:mt-16">
          <p className="text-xs uppercase tracking-[0.2em] text-accent">
            The free audit
          </p>
          <h1 className="font-display mt-4 text-[36px] leading-[1.05] tracking-tightest text-text-primary sm:text-[48px] md:text-[72px] md:leading-[1.02]">
            Book your Agent Audit.
          </h1>
          <p className="mt-5 text-[16px] leading-relaxed text-text-secondary max-w-[60ch] sm:text-[18px] md:mt-6 md:text-[19px]">
            30 minutes with the founder. We walk through your operation, identify the
            workflows worth automating, and you get a written ROI projection
            within 48 hours. No pitch deck.
          </p>
        </div>

        <div className="mt-10 overflow-hidden rounded-[16px] border border-border bg-surface p-2 sm:rounded-[20px] sm:p-4 md:mt-16 md:p-6 min-h-[640px] md:min-h-[760px]">
          <div className="h-full w-full overflow-hidden rounded-[10px] sm:rounded-[12px] min-h-[600px] md:min-h-[720px]">
            <CalEmbed />
          </div>
        </div>

        <p className="mt-8 text-sm text-text-muted md:mt-10">
          Prefer email? Reach the founder directly at{' '}
          <a className="text-text-primary underline underline-offset-4 decoration-border hover:decoration-accent break-all" href="mailto:hello@raynaters.com">
            hello@raynaters.com
          </a>
          .
        </p>
      </div>
    </main>
  );
}
