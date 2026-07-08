'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { CONTENT } from '@/lib/content';
import { Button } from '@/components/ui/Button';
import { MegaMenu, type MegaMenuGroup } from '@/components/ui/MegaMenu';
import { MENU_GROUPS } from '@/lib/landing-pages';
import { cn } from '@/lib/utils';

const SOLUTIONS_GROUPS: MegaMenuGroup[] = MENU_GROUPS.map((group, gi) => ({
  label: group.label,
  items: group.items.map((p) => ({
    label: p.navLabel.replace(/^AI Receptionist for /, '').replace(/^AI Receptionist in /, ''),
    href: `/${p.slug}`,
    // Blurbs only in the narrow columns — the industry grid stays compact.
    blurb: gi === 0 ? undefined : p.navBlurb,
  })),
}));

function Logo() {
  return (
    <Link
      href="/"
      className="group flex items-center"
      aria-label={`${CONTENT.brand.name} home`}
    >
      <span className="grid h-10 w-10 place-items-center rounded-[10px] bg-accent transition-transform duration-300 group-hover:scale-[1.04]">
        <Image
          src="/raynaters-mark.png"
          alt="Raynaters"
          width={32}
          height={32}
          priority
          className="h-7 w-7"
        />
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

        <nav className="hidden items-center gap-7 md:flex">
          <MegaMenu label="Solutions" groups={SOLUTIONS_GROUPS} />
          <Link
            href="/case-studies"
            className="text-[14px] text-text-secondary hover:text-text-primary transition-colors"
          >
            Case studies
          </Link>
          <Link
            href="/resources"
            className="text-[14px] text-text-secondary hover:text-text-primary transition-colors"
          >
            Resources
          </Link>
          <Link
            href="/ai-receptionist-cost-uk"
            className="text-[14px] text-text-secondary hover:text-text-primary transition-colors"
          >
            Pricing
          </Link>
          <Link
            href="/about"
            className="text-[14px] text-text-secondary hover:text-text-primary transition-colors"
          >
            About
          </Link>
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
