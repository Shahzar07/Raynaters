import { cn } from '@/lib/utils';

export function Eyebrow({
  children,
  className,
  withDot = true,
}: {
  children: React.ReactNode;
  className?: string;
  withDot?: boolean;
}) {
  return (
    <p
      className={cn(
        'inline-flex items-center gap-2.5 text-[12px] uppercase tracking-[0.18em] text-text-secondary font-medium',
        className,
      )}
    >
      {withDot && (
        <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_12px_rgba(255,92,44,0.6)]" />
      )}
      {children}
    </p>
  );
}
