import { cn } from '@/lib/utils';

interface MarqueeProps {
  children: React.ReactNode;
  className?: string;
  speed?: 'normal' | 'slow';
  pauseOnHover?: boolean;
  reverse?: boolean;
}

export function Marquee({
  children,
  className,
  speed = 'normal',
  pauseOnHover = false,
  reverse = false,
}: MarqueeProps) {
  const animClass = reverse
    ? speed === 'slow' ? 'animate-marquee-reverse-slow' : 'animate-marquee-reverse'
    : speed === 'slow' ? 'animate-marquee-slow' : 'animate-marquee';

  return (
    <div className={cn('marquee-mask overflow-hidden', className)}>
      <div
        className={cn(
          'flex w-max gap-5',
          animClass,
          pauseOnHover && 'hover:[animation-play-state:paused]',
        )}
      >
        <div className="flex shrink-0 items-center gap-5">{children}</div>
        <div className="flex shrink-0 items-center gap-5" aria-hidden>
          {children}
        </div>
      </div>
    </div>
  );
}
