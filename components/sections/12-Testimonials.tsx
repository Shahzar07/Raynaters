'use client';

import Image from 'next/image';
import { useState } from 'react';
import { CONTENT } from '@/lib/content';
import { Container, Section } from '@/components/ui/Container';
import { Reveal } from '@/components/ui/Reveal';
import { motion } from 'framer-motion';
import { Star, Hash, MoreHorizontal, Inbox, Paperclip, BadgeCheck } from 'lucide-react';

// ───────────────────────────────────────── primitives ─────────────────────────────────────────

function Stars({ value = 5 }: { value?: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${value} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className="h-3.5 w-3.5"
          fill={i < value ? '#4ADE80' : 'transparent'}
          stroke={i < value ? '#4ADE80' : '#3a3a40'}
          strokeWidth={1.5}
        />
      ))}
    </div>
  );
}

function Avatar({
  avatar,
  initials,
  size = 40,
}: {
  avatar?: string;
  initials: string;
  size?: number;
}) {
  const [err, setErr] = useState(false);
  return (
    <div
      className="relative shrink-0 overflow-hidden rounded-full ring-1 ring-border"
      style={{ height: size, width: size }}
    >
      {avatar && !err ? (
        <Image
          src={avatar}
          alt={initials}
          fill
          className="object-cover"
          sizes={`${size}px`}
          onError={() => setErr(true)}
        />
      ) : (
        <div className="grid h-full w-full place-items-center bg-surface-hover text-[12px] font-medium text-text-primary">
          {initials}
        </div>
      )}
    </div>
  );
}

// ───────────────────────────────────────── types ─────────────────────────────────────────

type Item = (typeof CONTENT.testimonials.items)[number];
type Kind = 'quote' | 'slack' | 'email' | 'imessage';

function getKind(t: Item): Kind {
  return ('kind' in t ? t.kind : 'quote') as Kind;
}
function getMeta(t: Item): string | undefined {
  return 'meta' in t ? t.meta : undefined;
}

// ───────────────────────────────────────── card variants ─────────────────────────────────────────

function HoverWrap({ children }: { children: React.ReactNode }) {
  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ duration: 0.22, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="cursor-default rounded-[14px] border border-border bg-surface transition-colors duration-300 hover:border-accent/20"
    >
      {children}
    </motion.article>
  );
}

/* Classic text-quote card */
function QuoteCard({ t }: { t: Item }) {
  return (
    <HoverWrap>
      <div className="flex flex-col p-6">
        <Stars />
        <p className="mt-4 flex-1 text-[15px] leading-relaxed text-text-primary">
          {t.quote}
        </p>
        <div className="mt-6 flex items-center gap-3 border-t border-border pt-5">
          <Avatar avatar={t.avatar} initials={t.initials} />
          <div className="leading-tight">
            <p className="text-[13px] font-medium text-text-primary">{t.name}</p>
            <p className="text-[12px] text-text-secondary">{t.role}</p>
          </div>
        </div>
      </div>
    </HoverWrap>
  );
}

/* Slack-thread style card */
function SlackCard({ t }: { t: Item }) {
  const channel = (getMeta(t) || '#wins').replace(/^#/, '');
  return (
    <HoverWrap>
      {/* channel header */}
      <div className="flex items-center justify-between border-b border-border/80 px-4 py-2.5">
        <div className="flex items-center gap-1.5 text-[12.5px] text-text-secondary">
          <Hash className="h-3.5 w-3.5 text-text-muted" strokeWidth={2.5} />
          <span className="font-medium tracking-[-0.005em]">{channel}</span>
        </div>
        <MoreHorizontal className="h-3.5 w-3.5 text-text-muted" />
      </div>

      {/* message body */}
      <div className="flex gap-3 px-4 pb-5 pt-4">
        <Avatar avatar={t.avatar} initials={t.initials} size={36} />
        <div className="min-w-0 flex-1">
          <div className="flex items-baseline gap-2">
            <span className="text-[13.5px] font-semibold text-text-primary">{t.name}</span>
            <span className="text-[11px] text-text-muted">11:42 AM</span>
          </div>
          <p className="mt-1 text-[14.5px] leading-relaxed text-text-primary">
            {t.quote}
          </p>
          <div className="mt-3 flex items-center gap-1.5">
            <span className="inline-flex items-center gap-1 rounded-full border border-border bg-bg px-2 py-0.5 text-[11px] text-text-secondary">
              <span>🎯</span>
              <span className="font-medium text-text-primary">7</span>
            </span>
            <span className="inline-flex items-center gap-1 rounded-full border border-border bg-bg px-2 py-0.5 text-[11px] text-text-secondary">
              <span>🚀</span>
              <span className="font-medium text-text-primary">4</span>
            </span>
            <span className="inline-flex items-center gap-1 rounded-full border border-border bg-bg px-2 py-0.5 text-[11px] text-text-secondary">
              <span>💚</span>
              <span className="font-medium text-text-primary">3</span>
            </span>
          </div>
          <p className="mt-2 text-[11.5px] text-text-muted">{t.role}</p>
        </div>
      </div>
    </HoverWrap>
  );
}

/* Email-style card */
function EmailCard({ t }: { t: Item }) {
  const subject = getMeta(t) || 'Note from the team';
  return (
    <HoverWrap>
      {/* mail toolbar */}
      <div className="flex items-center justify-between border-b border-border/80 px-4 py-2.5 text-[11px] uppercase tracking-[0.16em] text-text-muted">
        <div className="flex items-center gap-1.5">
          <Inbox className="h-3 w-3" />
          <span>Inbox</span>
        </div>
        <Paperclip className="h-3 w-3" />
      </div>

      <div className="px-5 pb-5 pt-4">
        {/* subject */}
        <p className="text-[15.5px] font-semibold leading-snug tracking-[-0.01em] text-text-primary">
          {subject}
        </p>

        {/* sender row */}
        <div className="mt-3 flex items-center gap-2.5">
          <Avatar avatar={t.avatar} initials={t.initials} size={28} />
          <div className="min-w-0 flex-1">
            <p className="flex items-center gap-1.5 truncate text-[12.5px] font-medium text-text-primary">
              {t.name}
              <BadgeCheck className="h-3.5 w-3.5 shrink-0 text-accent" strokeWidth={2} />
            </p>
            <p className="text-[11px] text-text-muted">Verified customer</p>
          </div>
        </div>

        {/* body */}
        <p className="mt-4 text-[14.5px] leading-relaxed text-text-primary">
          {t.quote}
        </p>
        <p className="mt-4 text-[12px] text-text-muted">— {t.role}</p>
      </div>
    </HoverWrap>
  );
}

/* iMessage-style card */
function IMessageCard({ t }: { t: Item }) {
  const time = getMeta(t) || 'Today 11:42 AM';
  // split quote into 1–2 bubbles on first full sentence break for authenticity
  const sentences = t.quote.split(/(?<=[.!?])\s+/);
  const bubbles =
    sentences.length >= 2
      ? [sentences[0], sentences.slice(1).join(' ')]
      : [t.quote];

  return (
    <HoverWrap>
      <div className="px-5 pb-5 pt-5">
        <p className="text-center text-[11px] uppercase tracking-[0.16em] text-text-muted">
          {time}
        </p>

        <div className="mt-4 space-y-1.5">
          {bubbles.map((b, i) => (
            <div key={i} className="flex justify-start">
              <div
                className="max-w-[85%] rounded-[18px] bg-[#2A2A2E] px-3.5 py-2 text-[14px] leading-snug text-text-primary"
                style={{ borderBottomLeftRadius: i === bubbles.length - 1 ? 6 : 18 }}
              >
                {b}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-5 flex items-center gap-2.5 border-t border-border pt-4">
          <Avatar avatar={t.avatar} initials={t.initials} size={28} />
          <div className="min-w-0 leading-tight">
            <p className="text-[12.5px] font-medium text-text-primary">{t.name}</p>
            <p className="text-[11px] text-text-secondary">{t.role}</p>
          </div>
        </div>
      </div>
    </HoverWrap>
  );
}

/* Dispatcher */
function TestimonialCard({ t }: { t: Item }) {
  const kind = getKind(t);
  if (kind === 'slack') return <SlackCard t={t} />;
  if (kind === 'email') return <EmailCard t={t} />;
  if (kind === 'imessage') return <IMessageCard t={t} />;
  return <QuoteCard t={t} />;
}

// ───────────────────────────────────────── section ─────────────────────────────────────────

function RatingHeader() {
  return (
    <Reveal>
      <div className="mx-auto inline-flex items-center gap-3 rounded-full border border-border bg-surface px-4 py-2">
        <Stars />
        <span className="text-[13px] font-medium tracking-[-0.01em] text-text-primary">
          {CONTENT.testimonials.rating}
        </span>
        <span className="h-3 w-px bg-border" aria-hidden />
        <span className="text-[12px] uppercase tracking-[0.18em] text-text-secondary">
          {CONTENT.testimonials.reviewCount}
        </span>
      </div>
    </Reveal>
  );
}

export default function Testimonials() {
  const items = CONTENT.testimonials.items;
  // Reorder so screenshot variants are sprinkled throughout the masonry (not bunched)
  const ordered = (() => {
    const isVariant = (t: Item) => getKind(t) !== 'quote';
    const variants = items.filter(isVariant);
    const quotes = items.filter((t) => !isVariant(t));
    // interleave: variant every 3rd slot
    const result: Item[] = [];
    let q = 0;
    let v = 0;
    let i = 0;
    while (q < quotes.length || v < variants.length) {
      if (i % 3 === 1 && v < variants.length) {
        result.push(variants[v++]);
      } else if (q < quotes.length) {
        result.push(quotes[q++]);
      } else if (v < variants.length) {
        result.push(variants[v++]);
      }
      i++;
    }
    return result;
  })();

  const masonry = ordered;

  return (
    <Section className="border-b border-border">
      <Container width="grid">
        <div className="text-center">
          <RatingHeader />
          <Reveal delay={0.05}>
            <h2 className="mx-auto mt-8 max-w-[22ch] font-display text-[36px] leading-[1.05] tracking-[-0.03em] text-text-primary md:text-[56px]">
              {CONTENT.testimonials.title}
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mx-auto mt-5 max-w-[58ch] text-[17px] leading-relaxed text-text-secondary md:text-[18px]">
              {CONTENT.testimonials.sub}
            </p>
          </Reveal>
        </div>

        {/* Desktop: true CSS-columns masonry — 2 cols on tablet, 3 on desktop */}
        <div className="mt-16 hidden columns-2 gap-5 md:block md:mt-20 lg:columns-3">
          {masonry.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{
                delay: (i % 9) * 0.05,
                duration: 0.55,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="mb-5 break-inside-avoid"
            >
              <TestimonialCard t={t} />
            </motion.div>
          ))}
        </div>

        {/* Mobile: single-column masonry stack */}
        <div className="mt-12 grid grid-cols-1 gap-4 md:hidden">
          {masonry.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <TestimonialCard t={t} />
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
