'use client';

import { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { bookHref } from '@/lib/seo/utm';
import { CONTENT } from '@/lib/content';
import { metaTrackCustom } from '@/lib/analytics/meta';

/**
 * Persistent booking bar.
 *
 * Appears once the hero CTA has scrolled out of view, so there is never a
 * point in the page where the reader is convinced but has nothing to click.
 * Hidden again near the footer, where the final CTA takes over — two competing
 * asks stacked on top of each other converts worse than one.
 */
export default function StickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const docH = document.documentElement.scrollHeight;
      const viewH = window.innerHeight;
      const nearFooter = y + viewH > docH - 900;
      setVisible(y > 700 && !nearFooter);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const href = bookHref({ campaign: 'homepage', content: 'sticky_bar' });

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-[900] transition-all duration-300 ease-out ${
        visible
          ? 'pointer-events-auto translate-y-0 opacity-100'
          : 'pointer-events-none translate-y-full opacity-0'
      }`}
    >
      <div className="border-t border-border bg-bg/95 backdrop-blur-md">
        {/* Right padding on mobile keeps the button clear of the floating
            voice-agent bubble, which sits bottom-right. */}
        <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-4 py-3 pl-4 pr-[76px] sm:px-6 sm:py-3.5">
          <div className="hidden min-w-0 sm:block">
            <p className="truncate text-[15px] font-medium tracking-[-0.01em] text-text-primary">
              Bring us your biggest bottleneck.
            </p>
            <p className="truncate text-[13px] text-text-muted">
              Free 30-minute session · ROI projection in 48 hours
            </p>
          </div>

          <a
            href={href}
            onClick={() =>
              metaTrackCustom('BookingCTAClick', { content_name: 'Sticky bar' })
            }
            className="group/sticky relative inline-flex h-12 w-full shrink-0 items-center justify-center gap-2 overflow-hidden rounded-[11px] border border-accent bg-accent px-6 text-[15px] font-medium text-[#0A0A0B] shadow-[0_6px_20px_-8px_rgba(211,251,163,0.6)] transition-transform duration-200 ease-out active:scale-[0.98] sm:w-auto"
          >
            <span
              aria-hidden
              className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 ease-out group-hover/sticky:translate-x-full"
            />
            <span className="relative z-10">{CONTENT.stickyCta}</span>
            <ArrowRight
              className="relative z-10 h-4 w-4 transition-transform duration-200 group-hover/sticky:translate-x-1"
              strokeWidth={2.25}
            />
          </a>
        </div>
      </div>
    </div>
  );
}
