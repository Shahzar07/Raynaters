import { cn } from '@/lib/utils';

interface MarqueeProps {
  children: React.ReactNode;
  className?: string;
  speed?: 'normal' | 'slow';
  pauseOnHover?: boolean;
}

export function Marquee({
  children,
  className,
  speed = 'normal',
  pauseOnHover = false,
}: MarqueeProps) {
  return (
    <div className={cn('marquee-mask overflow-hidden', className)}>
      <div
        className={cn(
          'flex w-max gap-12',
          speed === 'slow' ? 'animate-marquee-slow' : 'animate-marquee',
          pauseOnHover && 'hover:[animation-play-state:paused]',
        )}
      >
        <div className="flex shrink-0 items-center gap-12">{children}</div>
        <div className="flex shrink-0 items-center gap-12" aria-hidden>
          {children}
        </div>
      </div>
    </div>
  );
}
