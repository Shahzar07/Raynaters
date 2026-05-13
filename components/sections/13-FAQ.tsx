'use client';

import { CONTENT } from '@/lib/content';
import { Container, Section } from '@/components/ui/Container';
import { Reveal } from '@/components/ui/Reveal';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { AnimatePresence, motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import { useState } from 'react';
import { TOKENS } from '@/lib/design-tokens';
import { cn } from '@/lib/utils';

function FAQItem({
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
        className="group flex w-full items-start justify-between gap-6 py-6 text-left md:py-8"
      >
        <div className="flex items-start gap-5 md:gap-7">
          <span className="mt-1 w-6 shrink-0 text-[12px] uppercase tracking-[0.18em] tabular-nums text-text-muted">
            {String(index + 1).padStart(2, '0')}
          </span>
          <span className="text-[18px] tracking-[-0.01em] text-text-primary md:text-[22px]">
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
            <div className="ml-11 max-w-[60ch] pb-6 text-[16px] leading-relaxed text-text-secondary md:ml-[68px] md:pb-8 md:text-[17px]">
              {a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <Section id="faq" className="border-b border-border">
      <Container>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-4 md:sticky md:top-28 md:self-start">
            <Reveal>
              <Eyebrow>{CONTENT.faq.eyebrow}</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-6 font-display text-[36px] leading-[1.05] tracking-[-0.03em] text-text-primary md:text-[52px]">
                {CONTENT.faq.title}
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-5 max-w-[36ch] text-[16px] leading-relaxed text-text-secondary md:text-[17px]">
                Still curious? Send Shahzar a note —{' '}
                <a
                  className="text-text-primary underline underline-offset-4 decoration-border hover:decoration-accent"
                  href="mailto:contact@raynaters.tech"
                >
                  contact@raynaters.tech
                </a>
                .
              </p>
            </Reveal>
          </div>

          <div className="md:col-span-8">
            <Reveal>
              <div className="border-t border-border">
                {CONTENT.faq.items.map((item, i) => (
                  <FAQItem
                    key={i}
                    index={i}
                    q={item.q}
                    a={item.a}
                    open={open === i}
                    onToggle={() => setOpen(open === i ? null : i)}
                  />
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </Section>
  );
}
