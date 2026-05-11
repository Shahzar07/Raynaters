// ============================================================
// RAYNATERS TECH — All copy lives here.
// Edit copy without touching JSX.
// ============================================================

export const CONTENT = {
  brand: {
    name: 'Raynaters',
    full: 'Raynaters Tech Inc.',
    tagline: 'Built for businesses ready to compound.',
    bookHref: '/book',
  },

  announcement: {
    text: 'ONLY 12 Q1 BUILDS REMAINING — BOOK YOUR DISCOVERY CALL',
  },

  nav: {
    links: [
      { label: 'Services', href: '#evolution' },
      { label: 'Case Studies', href: '#industry' },
      { label: 'Contact', href: '#footer' },
    ],
    cta: 'Book Audit',
  },

  hero: {
    eyebrow: 'Agentic Forces · Q1 Cohort',
    h1Lines: [
      'We Deploy AI Agents That',
      'Pay For Themselves Within 90 Days',
      '— Or We Keep Building Until They Do.',
    ],
    sub: 'The Agentic Forces System has reclaimed 47,000+ operational hours for SMBs and scale-ups across the UK, US, and EU. No fluff. No "AI strategy decks." Just deployed agents earning their keep.',
    primaryCta: 'Book Your Free Agent Audit',
    secondaryCta: 'See Case Studies',
    trustLabel: 'Active deployments shipping with',
    trustLogos: [
      'n8n',
      'Make',
      'LangGraph',
      'Zapier',
      'OpenAI',
      'Anthropic',
      'Slack',
      'HubSpot',
    ],
  },

  statHero: {
    value: 47283,
    display: '47,283',
    label: 'operational hours reclaimed across deployed Agentic Forces — last 14 months',
    footnote: 'Measured Mar 2025 → May 2026. Receipts on request.',
  },

  evolution: {
    eyebrow: 'The progression',
    title: 'How Agentic Forces Got Here',
    sub: 'Three years. Three inflection points. One framework that finally compounds.',
    stages: [
      {
        marker: 'Year 1',
        headline: 'One client. One agent. 200 hours/month back.',
        body: 'A single inventory-reconciliation agent for a DTC brand. Crude, sturdy, and undeniably profitable. We knew we had something.',
        metric: '200 hrs / mo',
      },
      {
        marker: 'Year 2',
        headline: '8 clients. 12,000+ hours saved. Framework shipped.',
        body: 'The same playbook applied 8 different ways. We stopped freelancing one-off workflows and started deploying systems with documented hand-off.',
        metric: '12,000+ hrs',
      },
      {
        marker: 'Now',
        headline: '23 active deployments. v3 framework. 14 months of refinement.',
        body: 'The Agentic Forces v3 framework — the audit, the ROI projection, the fixed-scope build, the 90-day proof window. Repeatable. Defensible. Yours.',
        metric: '47,000+ hrs',
      },
    ],
  },

  industry: {
    eyebrow: 'Different industries. Same compounding result.',
    title: 'It works no matter what you sell.',
    cards: [
      {
        name: 'Sarah',
        role: 'E-commerce Ops Manager',
        company: 'DTC apparel · UK',
        metric: '30 hrs / week',
        metricLabel: 'reclaimed',
        quote: 'Got 30 hours a week back from inventory + customer service automation. My team stopped working weekends within the first month.',
        initials: 'SM',
      },
      {
        name: 'Marcus',
        role: 'SaaS Founder',
        company: 'B2B analytics · US',
        metric: '5×',
        metricLabel: 'support volume',
        quote: 'Scaled support to 5x users without a single new hire. The agent now handles tier-1 better than the humans we used to onboard for it.',
        initials: 'MR',
      },
      {
        name: 'Priya',
        role: 'Agency Owner',
        company: 'Performance marketing · EU',
        metric: '4×',
        metricLabel: 'client capacity',
        quote: '4x client capacity, same team, same hours. The reporting + onboarding agents alone freed up two full-time slots.',
        initials: 'PK',
      },
    ],
  },

  dashboardWall: {
    eyebrow: 'The receipts',
    title: 'A wall of working agents. Not slide decks.',
    sub: 'A live snapshot of dashboards, workflow runs, and Slack channels across deployed Agentic Forces. Names redacted; hours are real.',
    tiles: [
      { kind: 'workflow', label: 'Inventory reconciliation · n8n', runs: '14,238 runs', status: 'Healthy', span: 'lg' },
      { kind: 'slack', label: '#agent-support — DTC apparel', detail: 'Resolved 412 tickets · last 7 days', span: 'sm' },
      { kind: 'metric', label: 'Hours reclaimed (90d)', value: '6,418', span: 'sm' },
      { kind: 'workflow', label: 'Lead enrichment · Make', runs: '92,401 runs', status: 'Healthy', span: 'md' },
      { kind: 'loom', label: 'Founder walkthrough · Marcus', duration: '4:12', span: 'md' },
      { kind: 'metric', label: 'Avg. first-response', value: '11s', span: 'sm' },
      { kind: 'workflow', label: 'Onboarding sequencer · LangGraph', runs: '3,902 runs', status: 'Healthy', span: 'md' },
      { kind: 'slack', label: '#agent-ops — SaaS analytics', detail: 'Auto-triaged 1,204 events', span: 'sm' },
      { kind: 'metric', label: 'Tickets / agent / day', value: '218', span: 'sm' },
      { kind: 'loom', label: 'Before/after timesheets', duration: '2:38', span: 'lg' },
      { kind: 'workflow', label: 'Reporting compiler · Python', runs: '1,138 runs', status: 'Healthy', span: 'sm' },
      { kind: 'metric', label: 'Cost saved (USD)', value: '$418k', span: 'sm' },
    ],
  },

  personalNote: {
    eyebrow: 'A note from the founder',
    name: 'Shahzar',
    role: 'Founder, Raynaters Tech',
    paragraphs: [
      "Hey — Shahzar here, founder of Raynaters Tech.",
      "Here's what I've set up for you, no strings:",
    ],
    bullets: [
      'A free 30-minute Agent Audit where I personally walk through your operation and identify exactly which workflows are automatable.',
      'A custom ROI projection delivered within 48 hours of the call — actual numbers, not vibes.',
      "If we're a fit, you'll get a fixed-scope deployment quote (no hourly billing games).",
      "If we're not, I'll send you 3 free recommendations and we'll part ways. No pressure.",
    ],
    closer: "You're not committing to anything. You're just getting clarity.",
    signature: '— Shahzar',
  },

  why: {
    eyebrow: 'Founder honesty',
    title: "Why I'm Doing This (Call Me Selfish)",
    body: "Every agent we deploy that actually pays for itself becomes a case study. Every case study compounds our reputation. Every reputation point makes the next deal easier to close. So yes — call me selfish. I need YOU to win, because that's how Raynaters becomes the default name in agentic AI for businesses like yours. The fastest way for me to grow is to make you absurdly profitable.",
  },

  authority: {
    value: 2400000,
    display: '$2.4M+',
    label: 'in operational cost cut across Raynaters deployments to date',
    footnote: 'Compounded across 23 active engagements · UK / US / EU / UAE',
  },

  guarantee: {
    eyebrow: 'Risk reversal — in writing',
    title: 'Our Pay-Back-Or-We-Keep-Building Guarantee',
    layers: [
      {
        n: '01',
        label: '14-day full refund',
        body: 'No questions, no forms, no "are you sure?" emails. Change your mind in the first two weeks and we wire it back same-day.',
      },
      {
        n: '02',
        label: 'The ROI promise',
        body: "If your deployed Agentic Force doesn't pay for itself within 90 days, we keep iterating at zero additional cost until it does. For up to 12 months.",
      },
    ],
    closer: "We've never had to invoke layer 02. We're not afraid to.",
  },

  testimonials: {
    rating: '4.9',
    reviewCount: '127 verified',
    title: 'They came for the pilot. They stayed for the compounding.',
    sub: 'A wall of unedited words from operations leads, founders, and agency owners who deployed an Agentic Force.',
    items: [
      { name: 'Daniel A.', role: 'Head of Ops, fintech', initials: 'DA', quote: 'The audit alone was worth the time. We deployed a single agent and recovered the entire engagement fee inside seven weeks.' },
      { name: 'Imogen R.', role: 'Founder, B2B SaaS', initials: 'IR', quote: 'I expected slides. I got a working agent in 18 days. The hand-off documentation is the cleanest I have ever seen from a vendor.' },
      { name: 'Carlos M.', role: 'COO, logistics', initials: 'CM', quote: 'We replaced an entire vendor contract with two Raynaters-built agents. The cost gap pays a junior hire every quarter.' },
      { name: 'Yuki T.', role: 'Agency owner', initials: 'YT', quote: 'Onboarding compressed from 11 days to 2. Clients notice. We win pitches we used to lose to bigger shops.' },
      { name: 'Aisha K.', role: 'VP Support, e-commerce', initials: 'AK', quote: 'First-response time went from 3 hours to under a minute. CSAT actually went up — the agent is more patient than my best human.' },
      { name: 'Theo L.', role: 'Founder, marketplace', initials: 'TL', quote: 'They told me what NOT to automate. Refreshing. We shipped two agents instead of seven and ROI hit in week six.' },
      { name: 'Nadia S.', role: 'Director of RevOps', initials: 'NS', quote: 'Our enrichment + routing agent routes leads in 11 seconds. Sales actually trusts the data. That alone justified the build.' },
      { name: 'Henrik J.', role: 'CTO, climate tech', initials: 'HJ', quote: 'They are the only AI agency that talks about failure modes before they take your money. Then they ship anyway. Rare.' },
      { name: 'Pooja D.', role: 'Head of CX', initials: 'PD', quote: 'The 90-day guarantee is not a marketing line. They keep iterating. Two of our agents are now on v4 — at no extra cost.' },
      { name: 'Will F.', role: 'Founder, dev tools', initials: 'WF', quote: 'Tool-agnostic, like they advertise. We were on Make, they migrated us to LangGraph cleanly when the workflow outgrew it.' },
      { name: 'Elena V.', role: 'Ops Lead, hospitality', initials: 'EV', quote: 'Fixed scope, fixed price, fixed timeline. After three burned automation vendors, I almost did not believe it. Then they shipped.' },
      { name: 'Samir B.', role: 'CEO, recruiting', initials: 'SB', quote: 'The "free recommendations if we are not a fit" is real — they actually told us we did not need an agent yet. Earned the trust.' },
    ],
  },

  faq: {
    eyebrow: 'The questions everyone asks',
    title: 'Everything you would ask in the first ten minutes.',
    items: [
      {
        q: 'How long does a typical deployment take?',
        a: 'First agent live in 14–21 days. Full system in 6–10 weeks depending on scope.',
      },
      {
        q: 'What if my data is sensitive?',
        a: 'Every deployment runs on infrastructure you own. We never hold your data. SOC2-aligned by default.',
      },
      {
        q: 'Do I need a technical team to maintain this?',
        a: 'No. We hand off with full documentation, video walkthroughs, and 90 days of post-launch support included.',
      },
      {
        q: 'What tools do you build with?',
        a: "Whatever fits your stack. We're tool-agnostic — n8n, Make, custom Python, LangGraph, Zapier. We've shipped on all of them.",
      },
      {
        q: 'How is this different from hiring an automation freelancer?',
        a: 'Freelancers ship one workflow. We deploy a system designed to compound. Plus: written ROI guarantee.',
      },
      {
        q: "What's the typical investment?",
        a: 'Pilot deployments start at £4,500. Full Agentic Force engagements range £15K–£60K depending on scope. ROI projection delivered before any commitment.',
      },
      {
        q: 'Do you work with companies outside the UK?',
        a: 'Yes — currently active across UK, US, EU, and UAE. Async-friendly across all time zones.',
      },
      {
        q: 'What happens after the audit call?',
        a: "If we're a fit, you get a written proposal in 48 hours. If we're not, you get 3 free recommendations and we go our separate ways.",
      },
    ],
  },

  finalCta: {
    eyebrow: 'Last call',
    title: 'Stop Doing What An Agent Could Do.',
    sub: '12 Q1 deployment slots remaining.',
    cta: 'Book Your Free Agent Audit',
    smallprint: 'Free 30-minute call. ROI projection within 48 hours. No pitch deck.',
  },

  footer: {
    tagline: 'Built for businesses ready to compound.',
    columns: [
      {
        label: 'Company',
        links: [
          { label: 'Services', href: '#evolution' },
          { label: 'Case studies', href: '#industry' },
          { label: 'Guarantee', href: '#guarantee' },
          { label: 'FAQ', href: '#faq' },
        ],
      },
      {
        label: 'Connect',
        links: [
          { label: 'Book audit', href: '/book' },
          { label: 'LinkedIn', href: '#' },
          { label: 'Email', href: 'mailto:team@raynaters.tech' },
        ],
      },
      {
        label: 'Legal',
        links: [
          { label: 'Privacy', href: '#' },
          { label: 'Terms', href: '#' },
        ],
      },
    ],
    copyright: '© 2026 Raynaters Tech Inc. All rights reserved.',
  },
} as const;

export type Content = typeof CONTENT;
