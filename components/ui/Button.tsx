'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { metaTrackCustom } from '@/lib/analytics/meta';

type Variant = 'primary' | 'ghost' | 'outline';
type Size = 'md' | 'lg' | 'xl';

/**
 * Conversion-first button.
 *
 * This is a funnel site, so the primary variant is deliberately loud: accent
 * gradient, ambient glow, a lift on hover, a light sweep across the face, and
 * an arrow that travels. Transitions are pure CSS (no motion wrapper) so the
 * element itself can be full-width on mobile without a wrapper fighting it.
 */

const base =
  'group/btn relative inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-[12px] font-medium tracking-[-0.01em] select-none text-center ' +
  'transition-[transform,box-shadow,background-color,border-color] duration-200 ease-out ' +
  'active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg';

const variantStyles: Record<Variant, string> = {
  primary: cn(
    'bg-accent text-[#0A0A0B] border border-accent',
    'shadow-[0_6px_24px_-8px_rgba(211,251,163,0.55)]',
    'hover:-translate-y-[2px] hover:bg-accent-hover hover:border-accent-hover',
    'hover:shadow-[0_14px_40px_-10px_rgba(211,251,163,0.75)]',
  ),
  outline: cn(
    'bg-transparent text-accent border border-accent/50',
    'hover:-translate-y-[2px] hover:border-accent hover:bg-accent/10',
    'hover:shadow-[0_10px_30px_-12px_rgba(211,251,163,0.45)]',
  ),
  ghost: cn(
    'bg-transparent text-text-primary border border-border',
    'hover:-translate-y-[2px] hover:border-text-secondary hover:bg-surface',
  ),
};

const sizeStyles: Record<Size, string> = {
  md: 'h-11 px-5 text-[15px]',
  lg: 'h-[54px] px-7 text-[16px] sm:text-[17px]',
  xl: 'h-[58px] px-7 text-[16px] sm:h-16 sm:px-10 sm:text-[18px]',
};

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: Variant;
  size?: Size;
  withArrow?: boolean;
  className?: string;
  external?: boolean;
  /** Fills the width on small screens — thumb-friendly primary CTAs. */
  fullWidthOnMobile?: boolean;
}

export function Button({
  children,
  href,
  variant = 'primary',
  size = 'md',
  withArrow = false,
  className,
  external = false,
  fullWidthOnMobile = false,
}: ButtonProps) {
  const content = (
    <>
      {/* Light sweep — only on the filled variant, where it reads as premium
          rather than noisy. */}
      {variant === 'primary' && (
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 ease-out group-hover/btn:translate-x-full"
        />
      )}
      <span className="relative z-10">{children}</span>
      {withArrow && (
        <ArrowRight
          className="relative z-10 h-4 w-4 shrink-0 transition-transform duration-200 ease-out group-hover/btn:translate-x-1"
          strokeWidth={2.25}
        />
      )}
    </>
  );

  const classes = cn(
    base,
    variantStyles[variant],
    sizeStyles[size],
    fullWidthOnMobile ? 'w-full sm:w-auto' : '',
    className,
  );

  // Any CTA pointing at the booking flow is a top-of-funnel intent signal.
  // Reporting it lets Meta optimise towards the people who actually book.
  const isBookingCta = Boolean(href && href.includes('/book'));
  const handleClick = isBookingCta
    ? () =>
        metaTrackCustom('BookingCTAClick', {
          content_name: typeof children === 'string' ? children : 'Book CTA',
        })
    : undefined;

  if (href) {
    if (external || href.startsWith('http') || href.startsWith('mailto:')) {
      return (
        <a
          href={href}
          onClick={handleClick}
          className={classes}
          target={external ? '_blank' : undefined}
          rel={external ? 'noreferrer noopener' : undefined}
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} onClick={handleClick} className={classes}>
        {content}
      </Link>
    );
  }

  return <button className={classes}>{content}</button>;
}
