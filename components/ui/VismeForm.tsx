'use client';

import { useEffect, useRef } from 'react';

const VISME_SRC = 'https://static-bundles.visme.co/forms/vismeforms-embed.js';

/**
 * Visme contact-form embed. The script is appended inside this component on
 * mount so it re-processes the .visme_d placeholder even after client-side
 * navigation (the embed script only scans the DOM when it executes).
 */
export function VismeForm() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const script = document.createElement('script');
    script.src = VISME_SRC;
    script.async = true;
    container.appendChild(script);
    return () => {
      script.remove();
    };
  }, []);

  return (
    <div ref={containerRef} className="w-full">
      <div
        className="visme_d"
        data-title="Raynaters Tech inc. (Contact Form)"
        data-url="meq0e1vj-raynaters-tech-inc-contact-form"
        data-domain="forms"
        data-full-page="false"
        data-min-height="500px"
        data-form-id="189849"
      />
    </div>
  );
}
