'use client';

import { CONTENT } from '@/lib/content';
import { Container, Section } from '@/components/ui/Container';
import { Reveal } from '@/components/ui/Reveal';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Check } from 'lucide-react';

function PortraitPlaceholder() {
  // No AI-stock photo. A typographic monogram card with subtle accent. Replace with real photo via next/image.
  return (
    <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[16px] border border-border bg-surface">
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(closest-side at 30% 20%, rgba(211,251,163,0.22), transparent 55%), linear-gradient(180deg, #16161a, #0d0d0f)',
        }}
      />
      <div className="absolute inset-0 flex flex-col justify-between p-6">
        <p className="text-[11px] uppercase tracking-[0.22em] text-text-muted">
          Founder · 2026
        </p>
        <div>
          <p className="font-display text-[80px] leading-[0.85] tracking-[-0.05em] text-text-primary md:text-[120px]">
            S.
          </p>
          <p className="mt-3 text-[12px] uppercase tracking-[0.22em] text-accent">
            Shahzar
          </p>
        </div>
      </div>
      {/* Hairline frame */}
      <div className="pointer-events-none absolute inset-2 rounded-[12px] border border-border/60" />
    </div>
  );
}

export default function PersonalNote() {
  const note = CONTENT.personalNote;
  return (
    <Section className="border-b border-border">
      <Container>
        <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-12 md:gap-16">
          <aside className="md:col-span-4 md:sticky md:top-28">
            <Reveal>
              <PortraitPlaceholder />
              <div className="mt-5">
                <p className="text-[15px] tracking-[-0.01em] text-text-primary">
                  {note.name}
                </p>
                <p className="text-[13px] text-text-secondary">{note.role}</p>
              </div>
            </Reveal>
          </aside>

          <div className="md:col-span-8">
            <Reveal>
              <Eyebrow>{note.eyebrow}</Eyebrow>
            </Reveal>

            <Reveal delay={0.05}>
              {note.paragraphs.map((p, i) => (
                <p
                  key={i}
                  className="mt-6 max-w-[55ch] font-display text-[28px] leading-[1.25] tracking-[-0.02em] text-text-primary md:text-[34px] md:leading-[1.2]"
                >
                  {p}
                </p>
              ))}
            </Reveal>

            <Reveal delay={0.1}>
              <ul className="mt-10 space-y-5 border-l border-border pl-6 md:pl-8">
                {note.bullets.map((b, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <span
                      aria-hidden
                      className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full border border-accent/40 bg-accent/10"
                    >
                      <Check className="h-3 w-3 text-accent" strokeWidth={2.5} />
                    </span>
                    <p className="text-[17px] leading-relaxed text-text-secondary md:text-[18px]">
                      {b}
                    </p>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.15}>
              <p className="mt-10 max-w-[50ch] text-[18px] leading-relaxed text-text-primary">
                {note.closer}
              </p>
              <p className="font-display mt-6 text-[22px] italic tracking-[-0.02em] text-text-secondary">
                {note.signature}
              </p>
            </Reveal>
          </div>
        </div>
      </Container>
    </Section>
  );
}
