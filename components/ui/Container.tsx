import { cn } from '@/lib/utils';

type Width = 'content' | 'grid' | 'text';

const widthClass: Record<Width, string> = {
  content: 'max-w-content',
  grid: 'max-w-grid',
  text: 'max-w-text',
};

export function Container({
  children,
  width = 'content',
  className,
}: {
  children: React.ReactNode;
  width?: Width;
  className?: string;
}) {
  return (
    <div className={cn('mx-auto w-full px-5 sm:px-8 md:px-10', widthClass[width], className)}>
      {children}
    </div>
  );
}

export function Section({
  children,
  id,
  className,
}: {
  children: React.ReactNode;
  id?: string;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={cn('relative py-20 sm:py-24 md:py-[120px] lg:py-[160px]', className)}
    >
      {children}
    </section>
  );
}
