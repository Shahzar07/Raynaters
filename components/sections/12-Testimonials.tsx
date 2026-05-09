'use client';

import { CONTENT } from '@/lib/content';
import { Container, Section } from '@/components/ui/Container';
import { Reveal, RevealStagger, staggerItem } from '@/components/ui/Reveal';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Marquee } from '@/components/ui/Marquee';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

function Stars({ value = 5 }: { value?: number }) {
  return (
    <div
      className="flex items-center gap-0.5"
      aria-label={`${value} out of 5 stars`}
    >
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

function Avatar({ initials }: { initials: string }) {
  return (
    <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-border bg-surface-hover text-[12px] font-medium tracking-[-0.01em] text-text-primary">
      {initials}
    </div>
  );
}

type Item = (typeof CONTENT.testimonials.items)[number];

function Card({ t }: { t: Item }) {
  return (
    <article className="flex h-full w-[340px] shrink-0 flex-col rounded-[14px] border border-border bg-surface p-6 transition-colors duration-300 hover:border-text-muted/30 md:w-auto">
      <Stars />
      <p className="mt-4 text-[15px] leading-relaxed text-text-primary">
        {t.quote}
      </p>
      <div className="mt-6 flex items-center gap-3 border-t border-border pt-5">
        <Avatar initials={t.initials} />
        <div className="leading-tight">
          <p className="text-[13px] font-medium text-text-primary">{t.name}</p>
          <p className="text-[12px] text-text-secondary">{t.role}</p>
        </div>
      </div>
    </article>
  );
}

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
  // Split into desktop static masonry (first 8) and a marquee row (rest)
  const masonry = items.slice(0, 8);
  const marquee = items;

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

        {/* Masonry grid (md+) — 4 cols, items varied via column flow */}
        <RevealStagger
          stagger={0.05}
          className="mt-16 hidden gap-5 md:mt-20 md:grid md:grid-cols-4"
        >
          {masonry.map((t, i) => (
            <motion.div
              key={i}
              variants={staggerItem}
              className={
                // Stagger heights via offset top padding so the columns feel like masonry
                i % 4 === 1 ? 'md:mt-10' : i % 4 === 3 ? 'md:mt-6' : ''
              }
            >
              <Card t={t} />
            </motion.div>
          ))}
        </RevealStagger>

        {/* Mobile horizontal scroller */}
        <div className="mt-12 md:hidden">
          <div className="-mx-6 overflow-x-auto px-6">
            <div className="flex gap-4 pb-2">
              {masonry.map((t, i) => (
                <Card key={i} t={t} />
              ))}
            </div>
          </div>
        </div>

        {/* Marquee row beneath */}
        <div className="mt-10 md:mt-16">
          <Marquee speed="slow" pauseOnHover>
            {marquee.map((t, i) => (
              <div key={i} className="w-[340px]">
                <Card t={t} />
              </div>
            ))}
          </Marquee>
        </div>
      </Container>
    </Section>
  );
}
