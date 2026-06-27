'use client';

import { useEffect, useRef, useState } from 'react';
import { animate, useInView } from 'framer-motion';

interface CountUpProps {
  to: number;
  duration?: number;
  format?: (n: number) => string;
  className?: string;
  prefix?: string;
  suffix?: string;
}

const defaultFormat = (n: number) =>
  Math.round(n).toLocaleString('en-GB');

export function CountUp({
  to,
  duration = 2.0,
  format = defaultFormat,
  className,
  prefix = '',
  suffix = '',
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-20% 0px' });
  // Initialise to the REAL value so the final number is present in the
  // server-rendered HTML — crawlers, AI Overviews and no-JS users read the
  // true figure (these counters sit below the fold, so users still see the
  // count-up animation as they scroll the element into view).
  const [value, setValue] = useState(to);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!inView || hasAnimated.current) return;
    hasAnimated.current = true;
    const controls = animate(0, to, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setValue(v),
    });
    return () => controls.stop();
  }, [inView, to, duration]);

  return (
    <span ref={ref} className={className} aria-label={`${prefix}${format(to)}${suffix}`}>
      {prefix}
      {format(value)}
      {suffix}
    </span>
  );
}
