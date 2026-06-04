'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { CONTENT } from '@/lib/content';
import { Button } from '@/components/ui/Button';
import { NavDropdown } from '@/components/ui/NavDropdown';
import { LANDING_PAGES } from '@/lib/landing-pages';
import { cn } from '@/lib/utils';

const solutions = LANDING_PAGES.map((p) => ({
  label: p.navLabel,
  href: `/${p.slug}`,
  blurb: p.navBlurb,
}));

const flatLinks = [
  { label: 'Case studies', href: '/case-studies' },
  { label: 'Resources', href: '/resources' },
];

function Logo() {
  return (
    <Link
      href="/"
      className="group flex min-w-0 items-center gap-2.5 sm:gap-3"
      aria-label={`${CONTENT.brand.name} home`}
    >
      <Image
        src="/raynaters-logo.png"
        alt="Raynaters Inc."
        width={40}
        height={40}
        priority
        className="h-9 w-9 shrink-0 rounded-[8px] border border-border object-cover"
      />
      <span className="truncate text-[14px] font-medium tracking-[-0.01em] text-text-primary sm:text-[15px]">
        Raynaters
        <span className="hidden text-text-muted sm:inline"> Inc.</span>
      </span>
    </Link>
  );
}

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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
        scrolled || menuOpen
          ? 'border-b border-border bg-bg/85 backdrop-blur-md'
          : 'border-b border-transparent bg-bg',
      )}
    >
      <div className="mx-auto flex h-16 max-w-content items-center justify-between gap-3 px-5 sm:gap-6 sm:px-8 md:px-10">
        <Logo />

        <nav className="hidden items-center gap-8 md:flex">
          <NavDropdown label="Solutions" items={solutions} />
          {flatLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[14px] text-text-secondary transition-colors hover:text-text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
          <Button
            href={CONTENT.brand.bookHref}
            size="md"
            withArrow
            className="!px-4 !text-[14px] sm:!px-5 sm:!text-[15px]"
          >
            {CONTENT.nav.cta}
          </Button>
          <button
            type="button"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-[10px] border border-border text-text-secondary transition-colors hover:text-text-primary md:hidden"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="border-t border-border bg-bg md:hidden">
          <div className="mx-auto max-w-content px-5 py-5 sm:px-8">
            <p className="text-[11px] uppercase tracking-[0.18em] text-text-muted">
              Solutions
            </p>
            <div className="mt-3 space-y-1">
              {solutions.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  onClick={() => setMenuOpen(false)}
                  className="block rounded-[10px] px-3 py-2.5 transition-colors hover:bg-surface-hover"
                >
                  <span className="block text-[15px] font-medium text-text-primary">
                    {s.label}
                  </span>
                  <span className="mt-0.5 block text-[12px] leading-snug text-text-muted">
                    {s.blurb}
                  </span>
                </Link>
              ))}
            </div>
            <div className="mt-4 space-y-1 border-t border-border pt-4">
              {flatLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block rounded-[10px] px-3 py-2.5 text-[15px] font-medium text-text-primary transition-colors hover:bg-surface-hover"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
