'use client';

import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Reveal';
import { bookHref } from '@/lib/seo/utm';
import { CONTENT } from '@/lib/content';
import { cn } from '@/lib/utils';

/**
 * Reusable conversion band.
 *
 * A funnel page needs a way to convert at every point where the reader might
 * become convinced — not just at the top and bottom. Each instance takes its
 * own copy so the ask reads as a continuation of the argument above it rather
 * than the same banner pasted five times.
 *
 * `utmContent` makes every placement individually attributable, so it is
 * measurable which part of the page actually earns the booking.
 */
export interface CTABlockProps {
  title: string;
  sub?: string;
  cta?: string;
  utmContent: string;
  /** 'panel' = bordered card with glow; 'band' = slimmer full-width strip. */
  variant?: 'panel' | 'band';
  trust?: string[];
  className?: string;
}

const DEFAULT_TRUST = [
  'Free 30-minute session',
  'Written ROI projection in 48 hours',
  'No pitch deck',
];

export function CTABlock({
  title,
  sub,
  cta = CONTENT.hero.primaryCta,
  utmContent,
  variant = 'panel',
  trust = DEFAULT_TRUST,
  className,
}: CTABlockProps) {
  const href = bookHref({ campaign: 'homepage', content: utmContent });

  return (
    <section
      className={cn(
        'relative overflow-hidden border-b border-border bg-bg',
        variant === 'panel' ? 'py-14 sm:py-16 md:py-20' : 'py-12 sm:py-14',
        className,
      )}
    >
      <Container width="grid">
        <Reveal>
          <div
            className={cn(
              'relative overflow-hidden rounded-[20px] border text-center',
              variant === 'panel'
                ? 'border-accent/25 bg-surface px-6 py-10 shadow-[0_0_70px_-24px_rgba(211,251,163,0.35)] sm:px-10 sm:py-12 md:px-14 md:py-14'
                : 'border-border bg-surface/60 px-6 py-8 sm:px-10 sm:py-9',
            )}
          >
            {variant === 'panel' && (
              <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
                <div
                  className="absolute left-1/2 top-0 h-[320px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full"
                  style={{
                    background:
                      'radial-gradient(closest-side, rgba(211,251,163,0.16), transparent 70%)',
                  }}
                />
              </div>
            )}

            <h2
              className={cn(
                'mx-auto font-display tracking-[-0.03em] text-text-primary',
                variant === 'panel'
                  ? 'max-w-[22ch] text-[26px] leading-[1.08] sm:text-[34px] md:text-[42px]'
                  : 'max-w-[26ch] text-[22px] leading-[1.12] sm:text-[28px]',
              )}
            >
              {title}
            </h2>

            {sub && (
              <p className="mx-auto mt-4 max-w-[52ch] text-pretty text-[15px] leading-relaxed text-text-secondary sm:text-[17px]">
                {sub}
              </p>
            )}

            <div className="mt-8 flex justify-center">
              <Button
                href={href}
                size={variant === 'panel' ? 'xl' : 'lg'}
                withArrow
                fullWidthOnMobile
              >
                {cta}
              </Button>
            </div>

            {trust.length > 0 && (
              <ul className="mt-6 flex flex-col items-center justify-center gap-x-6 gap-y-2 text-[13px] text-text-muted sm:flex-row sm:text-[13.5px]">
                {trust.map((t) => (
                  <li key={t} className="flex items-center gap-2">
                    <span
                      aria-hidden
                      className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                    />
                    {t}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
