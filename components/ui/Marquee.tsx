import { cn } from '@/lib/utils';

interface MarqueeProps {
  children: React.ReactNode;
  className?: string;
  speed?: 'fast' | 'normal' | 'slow';
  direction?: 'left' | 'right';
  pauseOnHover?: boolean;
}

export function Marquee({
  children,
  className,
  speed = 'normal',
  direction = 'left',
  pauseOnHover = false,
}: MarqueeProps) {
  const animationClass = direction === 'left' 
    ? (speed === 'fast' ? 'animate-marquee-fast' : speed === 'slow' ? 'animate-marquee-slow' : 'animate-marquee')
    : (speed === 'fast' ? 'animate-marquee-reverse' : speed === 'slow' ? 'animate-marquee-reverse-slow' : 'animate-marquee-reverse');

  return (
    <div className={cn('marquee-mask overflow-hidden', className)}>
      <div
        className={cn(
          'flex w-max gap-12',
          animationClass,
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
