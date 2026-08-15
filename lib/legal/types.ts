// ============================================================
// RAYNATERS TECH — Legal page content model
// ============================================================

export interface LegalSection {
  heading: string;
  /** Paragraphs of body copy. */
  body?: string[];
  /** Optional bullet list rendered after the body. */
  bullets?: string[];
}

export interface LegalDoc {
  title: string;
  /** Shown under the H1 — plain-English summary of the document. */
  intro: string;
  /** ISO date the document last changed. */
  lastUpdated: string;
  sections: LegalSection[];
  metadata: { title: string; description: string };
}
