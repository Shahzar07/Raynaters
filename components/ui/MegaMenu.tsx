'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface MegaMenuItem {
  label: string;
  href: string;
  blurb?: string;
}

export interface MegaMenuGroup {
  label: string;
  items: MegaMenuItem[];
}

export function MegaMenu({
  label,
  groups,
}: {
  label: string;
  groups: MegaMenuGroup[];
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    function onEsc(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false);
    }
    document.addEventListener('mousedown', onDocClick);
    document.addEventListener('keydown', onEsc);
    return () => {
      document.removeEventListener('mousedown', onDocClick);
      document.removeEventListener('keydown', onEsc);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        aria-expanded={open}
        aria-haspopup="true"
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1 text-[14px] text-text-secondary transition-colors hover:text-text-primary"
      >
        {label}
        <ChevronDown
          className={cn('h-3.5 w-3.5 transition-transform duration-200', open && 'rotate-180')}
          strokeWidth={2}
        />
      </button>
      {open && (
        <div className="absolute left-1/2 top-full z-50 -translate-x-1/2 pt-3">
          <div className="flex w-[720px] gap-2 rounded-[16px] border border-border bg-surface p-4 shadow-2xl shadow-black/50">
            {groups.map((group, gi) => (
              <div
                key={group.label}
                className={cn(
                  'min-w-0',
                  gi === 0 ? 'flex-[1.6]' : 'flex-1',
                  gi > 0 && 'border-l border-border pl-4',
                )}
              >
                <p className="px-3 pb-2 text-[11px] uppercase tracking-[0.18em] text-text-muted">
                  {group.label}
                </p>
                <div className={cn(gi === 0 && 'grid grid-cols-2 gap-x-1')}>
                  {group.items.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="block rounded-[10px] px-3 py-2 transition-colors hover:bg-surface-hover"
                    >
                      <span className="block text-[13.5px] font-medium leading-snug tracking-[-0.01em] text-text-primary">
                        {item.label}
                      </span>
                      {item.blurb && (
                        <span className="mt-0.5 block text-[11.5px] leading-snug text-text-muted">
                          {item.blurb}
                        </span>
                      )}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
