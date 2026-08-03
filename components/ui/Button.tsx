'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { metaTrackCustom } from '@/lib/analytics/meta';

type Variant = 'primary' | 'ghost';
type Size = 'md' | 'lg';

const base =
  'inline-flex items-center justify-center gap-2 rounded-[10px] font-medium tracking-[-0.01em] transition-colors duration-200 select-none whitespace-nowrap';

const variantStyles: Record<Variant, string> = {
  primary:
    'bg-accent text-[#0A0A0B] hover:bg-accent-hover border border-accent hover:border-accent-hover',
  ghost:
    'bg-transparent text-text-primary border border-border hover:border-text-secondary hover:bg-surface',
};

const sizeStyles: Record<Size, string> = {
  md: 'h-11 px-5 text-[15px]',
  lg: 'h-14 px-7 text-[17px]',
};

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: Variant;
  size?: Size;
  withArrow?: boolean;
  className?: string;
  external?: boolean;
}

export function Button({
  children,
  href,
  variant = 'primary',
  size = 'md',
  withArrow = false,
  className,
  external = false,
}: ButtonProps) {
  const content = (
    <>
      <span>{children}</span>
      {withArrow && <ArrowRight className="h-4 w-4" strokeWidth={2.25} />}
    </>
  );

  const classes = cn(base, variantStyles[variant], sizeStyles[size], className);

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
        <motion.a
          href={href}
          onClick={handleClick}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.15 }}
          className={classes}
          target={external ? '_blank' : undefined}
          rel={external ? 'noreferrer noopener' : undefined}
        >
          {content}
        </motion.a>
      );
    }
    return (
      <motion.div whileTap={{ scale: 0.98 }} transition={{ duration: 0.15 }} className="inline-flex">
        <Link href={href} onClick={handleClick} className={classes}>
          {content}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.15 }}
      className={classes}
    >
      {content}
    </motion.button>
  );
}
