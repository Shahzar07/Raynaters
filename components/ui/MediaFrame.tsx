import Image from 'next/image';
import { cn } from '@/lib/utils';

interface MediaFrameProps {
  src: string;
  alt: string;
  /** Aspect ratio CSS class or custom ratio. Defaults to "aspect-video". */
  aspectClass?: string;
  priority?: boolean;
  overlay?: boolean;
  glow?: boolean;
  className?: string;
  sizes?: string;
}

export function MediaFrame({
  src,
  alt,
  aspectClass = 'aspect-video',
  priority = false,
  overlay = false,
  glow = false,
  className,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 50vw',
}: MediaFrameProps) {
  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-[16px] border border-border',
        aspectClass,
        glow && 'shadow-[0_0_50px_-12px_rgba(211,251,163,0.25)]',
        className
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        className="object-cover"
        priority={priority}
      />
      {overlay && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'linear-gradient(to top, rgba(10,10,11,0.75) 0%, rgba(10,10,11,0.1) 55%, transparent 100%)',
          }}
        />
      )}
    </div>
  );
}
