// ============================================================
// RAYNATERS TECH — JSON-LD injector (server component)
// Renders structured data server-side so crawlers + AI Overviews
// read it without executing JavaScript.
// ============================================================
import type { Thing, WithContext } from 'schema-dts';

type JsonLdData = WithContext<Thing> | WithContext<Thing>[];

export function JsonLd({ data }: { data: JsonLdData }) {
  const json = JSON.stringify(data);
  return (
    <script
      type="application/ld+json"
      // Structured data is static + server-generated; safe to inline.
      dangerouslySetInnerHTML={{ __html: json }}
    />
  );
}
