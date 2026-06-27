'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import { TOKENS } from '@/lib/design-tokens';
import { cn } from '@/lib/utils';

export interface AccordionItem {
  q: string;
  a: string;
}

function Item({
  q,
  a,
  open,
  onToggle,
  index,
}: {
  q: string;
  a: string;
  open: boolean;
  onToggle: () => void;
  index: number;
}) {
  return (
    <div className="border-b border-border">
      <button
        onClick={onToggle}
        aria-expanded={open}
        className="group flex w-full items-start justify-between gap-4 sm:gap-6 py-5 sm:py-6 text-left md:py-8 min-h-[64px]"
      >
        <div className="flex items-start gap-4 sm:gap-5 md:gap-7">
          <span className="mt-1 w-6 shrink-0 text-[11px] sm:text-[12px] uppercase tracking-[0.18em] tabular-nums text-text-muted">
            {String(index + 1).padStart(2, '0')}
          </span>
          <span className="text-[16px] tracking-[-0.01em] text-text-primary sm:text-[18px] md:text-[22px]">
            {q}
          </span>
        </div>
        <span
          className={cn(
            'mt-1 grid h-8 w-8 shrink-0 place-items-center rounded-full border border-border transition-all duration-300',
            open ? 'rotate-45 border-accent bg-accent/10' : 'group-hover:border-text-muted',
          )}
          aria-hidden
        >
          <Plus
            className={cn('h-4 w-4', open ? 'text-accent' : 'text-text-secondary')}
            strokeWidth={2}
          />
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: TOKENS.motion.ease }}
            className="overflow-hidden"
          >
            <div className="ml-10 sm:ml-11 max-w-[60ch] pb-5 sm:pb-6 text-pretty text-[15px] leading-relaxed text-text-secondary sm:text-[16px] md:ml-[68px] md:pb-8 md:text-[17px]">
              {a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/**
 * Reusable FAQ-style accordion. Used by the homepage FAQ, vertical
 * landing pages and resource articles so the markup (and FAQPage schema
 * mirroring it) stays in one place.
 */
export function Accordion({
  items,
  defaultOpen = 0,
  className,
}: {
  items: readonly AccordionItem[];
  defaultOpen?: number | null;
  className?: string;
}) {
  const [open, setOpen] = useState<number | null>(defaultOpen);
  return (
    <div className={cn('border-t border-border', className)}>
      {items.map((item, i) => (
        <Item
          key={i}
          index={i}
          q={item.q}
          a={item.a}
          open={open === i}
          onToggle={() => setOpen(open === i ? null : i)}
        />
      ))}
    </div>
  );
}
