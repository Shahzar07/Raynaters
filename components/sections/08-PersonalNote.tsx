'use client';

import { CONTENT } from '@/lib/content';
import { Container, Section } from '@/components/ui/Container';
import { Reveal } from '@/components/ui/Reveal';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Check } from 'lucide-react';

function FounderCard() {
  return (
    <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[20px] border border-border bg-surface">
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(closest-side at 28% 18%, rgba(211,251,163,0.20), transparent 58%), linear-gradient(180deg, #15151a, #0c0c0e)',
        }}
      />
      {/* faint grid texture */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="absolute inset-0 flex flex-col justify-between p-7">
        <div className="flex items-center justify-between">
          <p className="text-[11px] uppercase tracking-[0.22em] text-text-muted">
            Founder · 2026
          </p>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-bg/60 px-2.5 py-1 text-[11px] uppercase tracking-[0.16em] text-text-secondary backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_8px_rgba(211,251,163,0.8)]" />
            Signed
          </span>
        </div>

        <div>
          <p className="font-display text-[96px] leading-[0.8] tracking-[-0.05em] text-text-primary md:text-[128px]">
            R.
          </p>
          <p className="mt-4 text-[12px] uppercase tracking-[0.22em] text-accent">
            Raynaters Tech Inc.
          </p>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-2.5 rounded-[14px] border border-border/60" />
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
              <FounderCard />
              <div className="mt-5 flex items-center justify-between">
                <div>
                  <p className="text-[15px] font-medium tracking-[-0.01em] text-text-primary">
                    {note.name}
                  </p>
                  <p className="text-[13px] text-text-secondary">{note.role}</p>
                </div>
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
                  className="mt-6 max-w-[52ch] font-display text-[27px] leading-[1.25] tracking-[-0.02em] text-text-primary md:text-[34px] md:leading-[1.2]"
                >
                  {p}
                </p>
              ))}
            </Reveal>

            <Reveal delay={0.1}>
              <ul className="mt-10 grid gap-4 sm:grid-cols-2">
                {note.bullets.map((b, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3.5 rounded-[14px] border border-border bg-surface p-5"
                  >
                    <span
                      aria-hidden
                      className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full border border-accent/40 bg-accent/10"
                    >
                      <Check className="h-3 w-3 text-accent" strokeWidth={2.5} />
                    </span>
                    <p className="text-[15px] leading-relaxed text-text-secondary">
                      {b}
                    </p>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-10 border-l-2 border-accent/40 pl-5">
                <p className="max-w-[50ch] text-[18px] leading-relaxed text-text-primary">
                  {note.closer}
                </p>
                <p className="font-display mt-5 text-[22px] italic tracking-[-0.02em] text-text-secondary">
                  {note.signature}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </Section>
  );
}
