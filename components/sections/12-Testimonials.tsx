'use client';

import { useEffect, useRef, useState, useMemo } from 'react';
import { motion, useAnimationFrame, useMotionValue } from 'framer-motion';
import { CONTENT } from '@/lib/content';
import { Container, Section } from '@/components/ui/Container';
import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

/* ------------------------------ STAR ------------------------------ */
function Stars({ value = 5 }: { value?: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={14}
          className={cn(
            "transition-all duration-300",
            i < value ? "text-accent fill-accent" : "text-border fill-transparent"
          )}
          strokeWidth={1.5}
        />
      ))}
    </div>
  );
}

/* ------------------------------ PLATFORM ICONS ------------------------------ */
function PlatformIcon({ platform }: { platform?: string }) {
  if (platform === 'google') {
    return (
      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.908 3.152-1.928 4.172-1.2 1.2-3.08 2.48-6.16 2.48-4.904 0-8.912-3.976-8.912-8.88s4.008-8.88 8.912-8.88c2.648 0 4.592 1.04 6.016 2.4l2.32-2.32C18.592 1.136 15.8 0 12.48 0 6.504 0 1.632 4.872 1.632 10.88s4.872 10.88 10.848 10.88c3.224 0 5.672-1.064 7.648-3.112 2.04-2.04 2.688-4.896 2.688-7.232 0-.688-.064-1.344-.192-1.936l-8.16.432z" />
      </svg>
    );
  }
  if (platform === 'linkedin') {
    return (
      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    );
  }
  if (platform === 'x') {
    return (
      <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
      </svg>
    );
  }
  if (platform === 'facebook') {
    return (
      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.791-4.667 4.53-4.667 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    );
  }
  if (platform === 'instagram') {
    return (
      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    );
  }
  return null;
}

/* ------------------------------ CARD ------------------------------ */
function TestimonialCard({ item }: { item: any }) {
  return (
    <article className="group relative flex flex-col gap-4 sm:gap-5 rounded-[20px] sm:rounded-[24px] border border-border bg-surface p-6 sm:p-7 md:p-8 transition-all duration-500 hover:border-accent/30 hover:bg-surface-hover">
      <div className="flex items-center justify-between">
        <Stars value={5} />
        <div className="text-text-muted transition-colors group-hover:text-accent/60">
          <PlatformIcon platform={item.platform} />
        </div>
      </div>

      <p className="font-display text-pretty text-[18px] leading-[1.35] text-text-primary tracking-tight sm:text-[20px] md:text-[24px] md:leading-[1.3]">
        “{item.quote}”
      </p>

      <div className="flex items-center gap-4 border-t border-border pt-6 mt-1">
        {/* Avatar with fallback */}
        <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border border-border bg-bg group-hover:border-accent/40 transition-colors">
          {item.avatar ? (
            <img 
              src={item.avatar} 
              alt={item.name} 
              className="h-full w-full object-cover grayscale opacity-80 transition-all duration-500 group-hover:grayscale-0 group-hover:opacity-100" 
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center text-accent font-bold text-xs tracking-widest uppercase">
              {item.initials}
            </div>
          )}
        </div>

        <div className="min-w-0">
          <p className="text-[16px] font-semibold text-text-primary leading-none tracking-tight truncate">
            {item.name}
          </p>
          <div className="flex items-center gap-2 mt-2">
            <p className="text-[11px] font-bold text-accent uppercase tracking-[0.2em] opacity-70">
              {item.role}
            </p>
            <div className="h-1 w-1 rounded-full bg-border" />
            <span className="text-[10px] text-text-muted font-medium uppercase tracking-wider">Verified</span>
          </div>
        </div>
      </div>
      
      {/* Decorative Glow on hover */}
      <div className="absolute inset-0 rounded-[24px] bg-accent/[0.02] opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" />
    </article>
  );
}

/* ----------------------------- COLUMN ----------------------------- */
function ScrollingColumn({ items, speed, direction }: { items: any[], speed: number, direction: 'up' | 'down' }) {
  const setRef = useRef<HTMLDivElement>(null);
  const y = useMotionValue(0);
  const [setHeight, setSetHeight] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const cardGap = 24;

  useEffect(() => {
    if (!setRef.current) return;
    const measure = () => {
      const h = setRef.current!.getBoundingClientRect().height;
      setSetHeight(h + cardGap);
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(setRef.current);
    return () => ro.disconnect();
  }, [items]);

  useEffect(() => {
    if (setHeight === 0) return;
    y.set(direction === 'down' ? -setHeight : 0);
  }, [direction, setHeight, y]);

  useAnimationFrame((_, delta) => {
    if (isHovered || setHeight === 0) return;
    
    const dy = (speed * delta) / 1000;
    let next = y.get() + (direction === 'up' ? -dy : dy);
    
    if (direction === 'up') {
      if (next <= -setHeight) next += setHeight;
    } else {
      if (next >= 0) next -= setHeight;
    }
    y.set(next);
  });

  return (
    <div 
      className="relative h-full flex-1 min-w-0 overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div style={{ y }} className="flex flex-col will-change-transform">
        <div ref={setRef} className="flex flex-col gap-6">
          {items.map((item, i) => (
            <TestimonialCard key={`${item.name}-${i}`} item={item} />
          ))}
        </div>
        <div style={{ height: cardGap }} />
        <div className="flex flex-col gap-6" aria-hidden="true">
          {items.map((item, i) => (
            <TestimonialCard key={`dup-${item.name}-${i}`} item={item} />
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default function Testimonials() {
  const items = CONTENT.testimonials.items;

  // Split items into 3 columns
  const cols = useMemo(() => {
    const c: any[][] = [[], [], []];
    items.forEach((item, i) => c[i % 3].push(item));
    return c;
  }, [items]);

  return (
    <Section className="border-b border-border bg-bg relative overflow-hidden py-20 sm:py-24 md:py-32">
      {/* Brand Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] aspect-square bg-accent/[0.03] blur-[140px] rounded-full pointer-events-none" />

      <Container width="content">
        <div className="mb-12 sm:mb-16 md:mb-20 text-center max-w-3xl mx-auto relative z-10">
          <h2 className="font-display text-balance text-[32px] leading-[1.1] tracking-tightest text-text-primary sm:text-[44px] md:text-[64px]">
            {CONTENT.testimonials.title}
          </h2>
          <p className="mt-5 sm:mt-6 text-pretty text-[16px] text-text-secondary leading-relaxed sm:text-[18px]">
            {CONTENT.testimonials.sub}
          </p>
        </div>

        <div className="relative h-[600px] sm:h-[700px] md:h-[800px] w-full">
          {/* Edge Fades */}
          <div className="absolute inset-x-0 top-0 z-20 h-24 sm:h-32 md:h-40 bg-gradient-to-b from-bg to-transparent pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 z-20 h-24 sm:h-32 md:h-40 bg-gradient-to-t from-bg to-transparent pointer-events-none" />

          <div className="flex h-full gap-5 sm:gap-6 md:gap-8">
            <ScrollingColumn items={cols[0]} speed={35} direction="up" />
            <div className="hidden md:block flex-1">
              <ScrollingColumn items={cols[1]} speed={25} direction="down" />
            </div>
            <div className="hidden lg:block flex-1">
              <ScrollingColumn items={cols[2]} speed={45} direction="up" />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
