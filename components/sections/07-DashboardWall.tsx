'use client';

import { CONTENT } from '@/lib/content';
import { Container, Section } from '@/components/ui/Container';
import { Reveal, RevealStagger, staggerItem } from '@/components/ui/Reveal';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { motion } from 'framer-motion';
import { Activity, Hash, Play, TrendingUp, Workflow as WorkflowIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

type Tile = (typeof CONTENT.dashboardWall.tiles)[number];

function StatusDot({ healthy = true }: { healthy?: boolean }) {
  return (
    <span className="relative inline-flex h-2 w-2">
      <span
        className={cn(
          'absolute inline-flex h-full w-full animate-ping rounded-full opacity-75',
          healthy ? 'bg-success' : 'bg-accent',
        )}
      />
      <span
        className={cn(
          'relative inline-flex h-2 w-2 rounded-full',
          healthy ? 'bg-success' : 'bg-accent',
        )}
      />
    </span>
  );
}

function WorkflowTile({ tile }: { tile: Extract<Tile, { kind: 'workflow' }> }) {
  return (
    <div className="flex h-full flex-col p-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-[12px] uppercase tracking-[0.18em] text-text-muted">
          <Activity className="h-3.5 w-3.5" />
          Workflow
        </div>
        <div className="flex items-center gap-1.5 text-[11px] uppercase tracking-[0.18em] text-success">
          <StatusDot />
          {tile.status}
        </div>
      </div>
      <p className="mt-5 text-[15px] tracking-[-0.01em] text-text-primary">
        {tile.label}
      </p>

      {/* Mini bar chart — pure CSS, no images */}
      <div className="mt-auto pt-6">
        <div className="flex h-12 items-end gap-[3px]">
          {Array.from({ length: 28 }).map((_, i) => {
            const h = 18 + Math.abs(Math.sin(i * 1.2 + tile.label.length)) * 78;
            const accent = i > 22;
            return (
              <span
                key={i}
                className={cn(
                  'flex-1 rounded-[2px]',
                  accent ? 'bg-accent/80' : 'bg-text-muted/25',
                )}
                style={{ height: `${h}%` }}
              />
            );
          })}
        </div>
        <div className="mt-3 flex items-center justify-between text-[12px] text-text-secondary">
          <span className="tabular-nums">{tile.runs}</span>
          <span className="text-text-muted">last 30d</span>
        </div>
      </div>
    </div>
  );
}

function SlackTile({ tile }: { tile: Extract<Tile, { kind: 'slack' }> }) {
  const messages = [
    { who: 'agent-bot', txt: 'Resolved ticket #4192 · refund issued' },
    { who: 'agent-bot', txt: 'Auto-routed lead · scoring 87/100' },
    { who: 'founder', txt: 'green ✓ pushed v3.2 to prod' },
  ];
  return (
    <div className="flex h-full flex-col p-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-[12px] uppercase tracking-[0.18em] text-text-muted">
          <Hash className="h-3.5 w-3.5" />
          Slack
        </div>
        <StatusDot />
      </div>
      <p className="mt-4 text-[14px] tracking-[-0.01em] text-text-primary">
        {tile.label}
      </p>
      <ul className="mt-4 space-y-2">
        {messages.map((m, i) => (
          <li key={i} className="flex items-start gap-2 text-[12px] text-text-secondary">
            <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-text-muted" />
            <span>
              <span className="text-text-primary">{m.who}</span>{' '}
              <span className="text-text-muted">·</span> {m.txt}
            </span>
          </li>
        ))}
      </ul>
      <p className="mt-auto pt-4 text-[11px] uppercase tracking-[0.18em] text-text-muted">
        {tile.detail}
      </p>
    </div>
  );
}

function MetricTile({ tile }: { tile: Extract<Tile, { kind: 'metric' }> }) {
  return (
    <div className="flex h-full flex-col p-5">
      <div className="flex items-center gap-2 text-[12px] uppercase tracking-[0.18em] text-text-muted">
        <TrendingUp className="h-3.5 w-3.5" />
        Metric
      </div>
      <p className="mt-4 text-[12px] uppercase tracking-[0.18em] text-text-secondary">
        {tile.label}
      </p>
      <p className="font-display mt-3 text-[44px] leading-none tracking-[-0.04em] text-text-primary md:text-[56px]">
        {tile.value}
      </p>
      <div className="mt-auto pt-4 flex items-center gap-2 text-[12px] text-success">
        <span aria-hidden className="inline-block h-px w-6 bg-success/60" />
        Trending up
      </div>
    </div>
  );
}

function LoomTile({ tile }: { tile: Extract<Tile, { kind: 'loom' }> }) {
  const video = 'video' in tile ? (tile.video as string) : undefined;
  const image = 'image' in tile ? (tile.image as string) : undefined;
  return (
    <div className="relative flex h-full flex-col p-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-[12px] uppercase tracking-[0.18em] text-text-muted">
          {image ? <WorkflowIcon className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5" />}
          {image ? 'Workflow' : video ? 'Walkthrough' : 'Preview'}
        </div>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-bg/60 px-2 py-0.5 text-[11px] tabular-nums text-text-secondary">
          {image && <span className="h-1.5 w-1.5 rounded-full bg-success" />}
          {tile.duration}
        </span>
      </div>

      <div className="group/vid relative mt-4 aspect-[16/9] overflow-hidden rounded-[10px] border border-border">
        {image ? (
          <>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={image}
              alt={tile.label}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg/40 via-transparent to-transparent" />
          </>
        ) : video ? (
          <>
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-label={tile.label}
              className="absolute inset-0 h-full w-full object-cover"
            >
              <source src={video} type="video/mp4" />
            </video>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg/50 via-transparent to-transparent" />
            <span className="absolute bottom-2.5 left-2.5 inline-flex items-center gap-1.5 rounded-full bg-bg/70 px-2.5 py-1 text-[10px] uppercase tracking-[0.16em] text-text-secondary backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Real deployment
            </span>
          </>
        ) : (
          <>
            {/* Faux thumbnail — diagonal hatching + gradient, no AI imagery */}
            <div
              aria-hidden
              className="absolute inset-0"
              style={{
                background:
                  'repeating-linear-gradient(45deg, rgba(255,255,255,0.025) 0 6px, transparent 6px 12px), radial-gradient(closest-side at 30% 20%, rgba(211,251,163,0.22), transparent 55%), #0e0e11',
              }}
            />
            <div className="absolute inset-0 grid place-items-center">
              <span className="grid h-12 w-12 place-items-center rounded-full border border-border bg-bg/80">
                <Play className="h-4 w-4 text-text-primary" fill="currentColor" />
              </span>
            </div>
          </>
        )}
      </div>
      <p className="mt-4 text-[14px] tracking-[-0.01em] text-text-primary">
        {tile.label}
      </p>
    </div>
  );
}

const spanClass: Record<string, string> = {
  sm: 'md:col-span-3',
  md: 'md:col-span-4',
  lg: 'md:col-span-6',
};

const heightClass: Record<string, string> = {
  sm: 'min-h-[200px]',
  md: 'min-h-[260px]',
  lg: 'min-h-[300px]',
};

export default function DashboardWall() {
  return (
    <Section className="border-b border-border bg-bg">
      <Container width="grid">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Reveal>
              <Eyebrow>{CONTENT.dashboardWall.eyebrow}</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-6 font-display text-[36px] leading-[1.05] tracking-[-0.03em] text-text-primary md:text-[52px]">
                {CONTENT.dashboardWall.title}
              </h2>
            </Reveal>
          </div>
          <div className="md:col-span-7 md:pt-2">
            <Reveal delay={0.1}>
              <p className="text-[17px] leading-relaxed text-text-secondary md:text-[19px] md:max-w-[55ch]">
                {CONTENT.dashboardWall.sub}
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <span className="mt-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1.5 text-[12px] uppercase tracking-[0.16em] text-text-secondary">
                <span className="relative inline-flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
                </span>
                Live · synced moments ago
              </span>
            </Reveal>
          </div>
        </div>

        <RevealStagger
          stagger={0.05}
          className="mt-16 grid grid-cols-1 gap-4 md:mt-20 md:grid-cols-12 md:gap-5"
        >
          {CONTENT.dashboardWall.tiles.map((tile, i) => (
            <motion.div
              key={i}
              variants={staggerItem}
              className={cn(
                'rounded-[14px] border border-border bg-surface transition-colors duration-300 hover:border-text-muted/30 overflow-hidden',
                spanClass[tile.span],
                heightClass[tile.span],
              )}
            >
              {tile.kind === 'workflow' && <WorkflowTile tile={tile} />}
              {tile.kind === 'slack' && <SlackTile tile={tile} />}
              {tile.kind === 'metric' && <MetricTile tile={tile} />}
              {tile.kind === 'loom' && <LoomTile tile={tile} />}
            </motion.div>
          ))}
        </RevealStagger>
      </Container>
    </Section>
  );
}
