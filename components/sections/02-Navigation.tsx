'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { CONTENT } from '@/lib/content';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

function Logo() {
  return (
    <Link
      href="/"
      className="group flex items-center gap-2.5"
      aria-label={`${CONTENT.brand.name} home`}
    >
      <span
        aria-hidden
        className="relative grid h-7 w-7 place-items-center rounded-[7px] border border-border bg-surface"
      >
        <span className="block h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_10px_rgba(255,92,44,0.7)]" />
      </span>
      <span className="text-[15px] tracking-[-0.01em] text-text-primary font-medium">
        {CONTENT.brand.name}
        <span className="text-text-muted">/tech</span>
      </span>
    </Link>
  );
}

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={cn(
        'sticky top-0 z-[100] transition-[border-color,background-color] duration-300',
        scrolled
          ? 'border-b border-border bg-bg/85 backdrop-blur-md'
          : 'border-b border-transparent bg-bg',
      )}
    >
      <div className="mx-auto flex h-16 max-w-content items-center justify-between gap-6 px-6 md:px-10">
        <Logo />

        <nav className="hidden items-center gap-8 md:flex">
          {CONTENT.nav.links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[14px] text-text-secondary hover:text-text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button href={CONTENT.brand.bookHref} size="md" withArrow>
            {CONTENT.nav.cta}
          </Button>
        </div>
      </div>
    </header>
  );
}
