'use client';

import Image from 'next/image';
import { useState } from 'react';
import { CONTENT } from '@/lib/content';
import { Container, Section } from '@/components/ui/Container';
import { Reveal } from '@/components/ui/Reveal';
import { Marquee } from '@/components/ui/Marquee';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

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

type Item = (typeof CONTENT.testimonials.items)[number];

function Avatar({ avatar, initials }: { avatar?: string; initials: string }) {
  const [err, setErr] = useState(false);
  return (
    <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full ring-1 ring-border">
      {avatar && !err ? (
        <Image
          src={avatar}
          alt={initials}
          fill
          className="object-cover"
          sizes="40px"
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

function Card({ t }: { t: Item }) {
  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ duration: 0.22, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="flex flex-col rounded-[14px] border border-border bg-surface p-6 cursor-default
                 hover:border-accent/20 transition-colors duration-300"
      style={{ boxShadow: 'none' }}
    >
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
    </motion.article>
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
  const masonry = items.slice(0, 12);

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

        {/* Desktop: true CSS-columns masonry */}
        <div
          className="mt-16 hidden md:block md:mt-20"
          style={{ columns: 3, columnGap: '1.25rem' }}
        >
          {masonry.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{
                delay: i * 0.055,
                duration: 0.55,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              style={{ breakInside: 'avoid', marginBottom: '1.25rem' }}
            >
              <Card t={t} />
            </motion.div>
          ))}
        </div>

        {/* Mobile: horizontal snap scroll */}
        <div className="mt-12 md:hidden">
          <div className="-mx-6 overflow-x-auto px-6">
            <div className="flex gap-4 pb-2">
              {masonry.map((t, i) => (
                <div key={i} className="w-[300px] shrink-0">
                  <Card t={t} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Dual marquee — forward + reverse */}
        <div className="mt-10 space-y-4 md:mt-16">
          <Marquee speed="slow" pauseOnHover>
            {items.map((t, i) => (
              <div key={i} className="w-[340px]">
                <Card t={t} />
              </div>
            ))}
          </Marquee>
          <Marquee speed="slow" pauseOnHover reverse>
            {[...items].reverse().map((t, i) => (
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
