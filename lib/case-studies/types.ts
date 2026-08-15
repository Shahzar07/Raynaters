// ============================================================
// RAYNATERS TECH — Case study content model
// Realistic, illustrative UK deployments. Swap for genuine client
// data when available (and only add review badges once reviews are real).
// ============================================================

export interface CaseStudyResult {
  metric: string;
  label: string;
}

export interface CaseStudy {
  slug: string;
  client: string;
  monogram: string;
  category: string;

  /** Card thumbnail + detail hero banner image. */
  image: { src: string; alt: string };

  /** Big result headline used on the detail hero. */
  headlineResult: string;
  /** Headline metric for the index card. */
  metric: string;
  metricLabel: string;
  /** One-line teaser for the index card + meta description. */
  summary: string;

  challenge: string;
  solution: string;
  /** Long-form narrative rendered on the detail page as a numbered story. */
  story: { heading: string; body: string }[];
  results: CaseStudyResult[];

  persona: { name: string; role: string };
  quote: { text: string; author: string; role: string };

  metadata: { title: string; description: string };
  /** Slugs of related studies shown at the foot of the detail page. */
  related: string[];
}
