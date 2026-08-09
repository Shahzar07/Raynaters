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
    text: 'ONLY 12 BUILD SLOTS LEFT THIS QUARTER — BOOK YOUR BUSINESS ON AUTOPILOT SESSION™',
  },

  nav: {
    links: [
      { label: 'How it works', href: '/#evolution' },
      { label: 'What we build', href: '/#industry' },
      { label: 'Case studies', href: '/case-studies' },
      { label: 'Resources', href: '/resources' },
    ],
    cta: 'Book Your Session',
  },

  /** Short label for the persistent sticky bar — must stay thumb-sized. */
  stickyCta: 'Book Your Free Session',

  /**
   * Mid-page conversion bands. Each one is written to follow the argument
   * directly above it, so the ask reads as the next logical step rather than
   * a repeated banner. utmContent makes each placement individually
   * attributable in GA4 / Vercel Analytics.
   */
  ctaBands: {
    afterBelief: {
      title: 'Which system in your business is quietly capping growth?',
      sub: 'That is the exact question we answer on the call — free, in 30 minutes, with the numbers written down afterwards.',
      utmContent: 'band_after_belief',
    },
    afterWorkforces: {
      title: 'See which workforce your business should hire first.',
      sub: 'We map your operation live, then show you the one deployment with the fastest payback. No obligation to build it with us.',
      utmContent: 'band_after_workforces',
    },
    afterProof: {
      title: 'Get your own numbers, not ours.',
      sub: 'Every business is different. Bring us your workflow and we will project the hours and revenue a system would return — in writing, within 48 hours.',
      utmContent: 'band_after_proof',
    },
    afterGuarantee: {
      title: 'The risk is ours. The upside is yours.',
      sub: 'Fixed scope, written projection, and we keep building until it pays for itself. Start with a free session.',
      utmContent: 'band_after_guarantee',
    },
  },

  hero: {
    eyebrow: 'Business Operating Systems · UK & Australia',
    h1Lines: [
      "Your Business Doesn't Need",
      'More Employees.',
      'It Needs Better Systems.',
    ],
    sub: "Growing businesses don't run out of people. They run out of systems. Raynaters Tech engineers Business Operating Systems — AI systems that remove bottlenecks, automate repetitive work, and let your company scale without the operational chaos.",
    primaryCta: 'Book Your Business On Autopilot Session™',
    secondaryCta: 'See the results',
  },

  problem: {
    eyebrow: 'The wall every growing business hits',
    title: "Hiring more people isn't a growth strategy.",
    sub: 'Every time the business gets busier, you add another person. More payroll. More management. More complexity. But people were never the bottleneck — the system was.',
    chain: [
      'More customers',
      'More employees',
      'More complexity',
      'More meetings',
      'More admin',
    ],
    outcome: 'Everything slows down.',
    closer: "People don't fix broken systems. Systems do.",
  },

  belief: {
    eyebrow: 'What we believe',
    lead: "Growing businesses don't run out of",
    strike: 'people.',
    trail: 'They run out of',
    emphasis: 'systems.',
    sub: 'Every engagement we take starts from that one belief — and everything we build follows from it.',
  },

  growthOS: {
    eyebrow: 'Introducing Growth OS™',
    title: 'The operating system that runs your business.',
    sub: 'Growth OS™ connects the four things every company already has — but almost never has working together. One intelligent system instead of five disconnected ones.',
    layers: [
      {
        n: '01',
        name: 'Your people',
        body: 'Freed from the repetitive work software should already be doing, and pointed at the work only humans can do.',
      },
      {
        n: '02',
        name: 'Your processes',
        body: 'Mapped, documented and rebuilt so the business runs the same way on your worst week as your best.',
      },
      {
        n: '03',
        name: 'Your data',
        body: 'One source of truth across the tools you already run — no re-keying, no three systems disagreeing.',
      },
      {
        n: '04',
        name: 'Your AI Workforces™',
        body: 'The execution layer. Always-on digital teams that answer, qualify, book, chase and report — without being managed.',
      },
    ],
    closer: 'You own all of it. Built on your infrastructure, documented, handed over.',
  },

  timeline: {
    eyebrow: 'The transformation',
    title: 'What actually changes when the system does.',
    sub: 'The same business, before and after Growth OS™ — drawn from live deployments across the UK and Australia.',
    beforeLabel: 'Before Raynaters',
    afterLabel: 'After Growth OS™',
    before: [
      'Enquiries answered in hours — if at all',
      'Follow-ups depend on someone remembering',
      'Admin re-keyed across three systems',
      'Out-of-hours leads lost to voicemail',
      'Growth plan: hire more people',
      'Owner working in the business, not on it',
    ],
    after: [
      'Every enquiry answered in seconds, day or night',
      'Follow-up runs automatically, every time',
      'Systems stay in sync without a human touching them',
      'Evenings and weekends convert while you sleep',
      'Growth plan: deploy the next workforce',
      'Leadership back on strategy, not admin',
    ],
  },

  proof: {
    eyebrow: 'Business outcomes',
    title: 'What better systems actually return.',
    sub: 'Not features. Outcomes — measured across 23 live Growth OS™ deployments in the UK and Australia.',
    stats: [
      {
        to: 47283,
        prefix: '',
        suffix: '',
        label: 'Operational hours reclaimed',
        context: 'Across all deployments · last 14 months',
        level: 0.96,
      },
      {
        to: 90,
        prefix: '<',
        suffix: ' days',
        label: 'Average time to full ROI',
        context: 'Or we keep building at zero cost',
        level: 0.7,
      },
      {
        to: 23,
        prefix: '',
        suffix: '',
        label: 'AI systems live in production',
        context: 'Running across the UK & Australia',
        level: 0.5,
      },
      {
        to: 11,
        prefix: '',
        suffix: 's',
        label: 'Average first response to a new enquiry',
        context: 'Down from 3+ hours, done manually',
        level: 0.99,
      },
      {
        to: 2400000,
        prefix: '$',
        suffix: '+',
        label: 'Operational cost taken out',
        context: 'Compounded across 23 engagements · UK / AU / US / EU',
        level: 0.85,
      },
      {
        to: 22,
        prefix: '+',
        suffix: '%',
        label: 'More new-patient bookings captured',
        context: 'Riverside Dental — two-site practice, first quarter live',
        level: 0.62,
      },
    ],
    footnote: 'Measured Mar 2025 → May 2026. Receipts on request.',
  },

  howItWorks: {
    eyebrow: 'How deployment works',
    title: 'From first call to live agent in four weeks.',
    sub: 'A fixed, transparent process. No "AI strategy decks", no open-ended retainers — you always know exactly what happens next.',
    trust: 'The exact process behind 23 live deployments across the UK & Australia',
    guaranteeChip: 'Backed by our 90-day ROI guarantee',
    steps: [
      {
        week: 'Week 01',
        tag: 'Session',
        title: 'Business On Autopilot Session™',
        body: 'We map your operation, find the bottleneck slowing everything else down, score every workflow for ROI, and hand you a written projection — before you commit a penny.',
      },
      {
        week: 'Week 02',
        tag: 'Build',
        title: 'Fixed-scope build',
        body: 'We scope the highest-ROI agent, lock the price, and build on infrastructure you own. No hourly billing games.',
      },
      {
        week: 'Week 03',
        tag: 'Deploy',
        title: 'Deploy inside your stack',
        body: 'Your agent goes live in the tools you already run — Slack, HubSpot, n8n — with full documentation and a recorded hand-off.',
      },
      {
        week: 'Week 04',
        tag: 'Prove',
        title: 'Prove, then compound',
        body: "We measure against the projection and open the 90-day proof window. If it doesn't pay for itself, we keep iterating free.",
      },
    ],
  },

  // The execution layer inside Growth OS™. Framed as departments you hire,
  // not automations you buy.
  suites: {
    eyebrow: 'The execution layer',
    title: 'Meet your AI Workforce™.',
    sub: 'Not tools. Departments — always on, never sick, never chasing you for a pay rise. Each one is built around how your business actually runs.',
    // TODO(shahzar): Executive, Marketing, HR and Business Intelligence
    // Workforces are scoped but intentionally not advertised until we can
    // deliver and evidence them. Add here once live.
    items: [
      {
        icon: 'revops',
        name: 'Sales Workforce',
        desc: 'Captures every enquiry, qualifies it against your criteria, books it into the diary and follows up until it converts — 24/7.',
        metric: '11-second lead routing',
        tools: ['HubSpot', 'Salesforce', 'Clay'],
      },
      {
        icon: 'support',
        name: 'Customer Workforce',
        desc: 'Answers, triages and resolves customer questions in your brand voice, escalating to a human only when it genuinely matters.',
        metric: 'Sub-1-minute first response',
        tools: ['Zendesk', 'Intercom', 'Slack'],
      },
      {
        icon: 'onboarding',
        name: 'Operations Workforce',
        desc: 'Runs onboarding, document chasing and system sync end to end, so your team manages exceptions instead of copy-paste.',
        metric: '11 days → 2 days',
        tools: ['Notion', 'Gmail', 'Calendar'],
      },
      {
        icon: 'finance',
        name: 'Finance Workforce',
        desc: 'Reconciles invoices, compiles reporting and keeps the numbers current — so the books close early and stay closed.',
        metric: '2-day close → hourly',
        tools: ['Xero', 'QuickBooks', 'Sheets'],
      },
    ],
  },

  dashboardWall: {
    eyebrow: 'The receipts',
    title: 'A wall of working systems. Not slide decks.',
    sub: 'A live snapshot of dashboards, workflow runs and Slack channels from systems we run for clients. Names redacted; hours are real.',
    // Implementation detail — deliberately kept low on the page. Tools are
    // how we build, not what you buy.
    trustLabel: 'Built on the stack that suits your business — we are tool-agnostic',
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
    tiles: [
      { kind: 'workflow', label: 'Inventory reconciliation · n8n', runs: '14,238 runs', status: 'Healthy', span: 'lg' },
      { kind: 'slack', label: '#agent-support — DTC apparel', detail: 'Resolved 412 tickets · last 7 days', span: 'sm' },
      { kind: 'metric', label: 'Hours reclaimed (90d)', value: '6,418', span: 'sm' },
      { kind: 'workflow', label: 'Lead enrichment · Make', runs: '92,401 runs', status: 'Healthy', span: 'md' },
      { kind: 'loom', label: 'Follow-up checker · live in n8n', duration: 'Active', span: 'md', image: '/n8n-workflow.png' },
      { kind: 'metric', label: 'Avg. first-response', value: '11s', span: 'sm' },
      { kind: 'workflow', label: 'Onboarding sequencer · LangGraph', runs: '3,902 runs', status: 'Healthy', span: 'md' },
      { kind: 'slack', label: '#agent-ops — SaaS analytics', detail: 'Auto-triaged 1,204 events', span: 'sm' },
      { kind: 'metric', label: 'Tickets / agent / day', value: '218', span: 'sm' },
      { kind: 'loom', label: 'Full workflow walkthrough', duration: '2:38', span: 'lg', video: '/walkthrough.mp4' },
      { kind: 'workflow', label: 'Reporting compiler · Python', runs: '1,138 runs', status: 'Healthy', span: 'sm' },
      { kind: 'metric', label: 'Cost saved (USD)', value: '$418k', span: 'sm' },
    ],
  },

  personalNote: {
    eyebrow: 'A note from the founder',
    name: 'Founder',
    role: 'Raynaters Tech Inc.',
    paragraphs: [
      'Every founder I speak to tells me the same thing. "We’re busy."',
      "But being busy was never the problem. Being dependent on people for work the system should already be doing — that's the problem.",
      'So every engagement starts the same way. We find the bottleneck. Then we engineer the system that removes it.',
      "That's exactly what we'll do together on your Business On Autopilot Session™:",
    ],
    bullets: [
      'We map your operation live and find the one process quietly slowing everything else down.',
      'You get a written ROI projection within 48 hours — actual numbers, not vibes.',
      "If we're a fit, you get a fixed-scope quote to build it. No hourly billing games.",
      "If we're not, I'll tell you straight and send three things you can fix without us.",
    ],
    closer: "You're not committing to anything. You're just getting clarity on what's actually holding the business back.",
    signature: '— Founder, Raynaters Tech Inc.',
  },

  why: {
    eyebrow: 'Founder honesty',
    title: "Why I'm Doing This (Call Me Selfish)",
    body: "Every agent we deploy that actually pays for itself becomes a case study. Every case study compounds our reputation. Every reputation point makes the next deal easier to close. So yes — call me selfish. I need you to win, because that's how Raynaters becomes the default name in agentic AI for businesses like yours.",
    punch: 'The fastest way for me to grow is to make you absurdly profitable.',
    attribution: 'Founder, Raynaters Tech Inc.',
  },

  authority: {
    value: 2400000,
    display: '$2.4M+',
    label: 'in operational cost cut across Raynaters deployments to date',
    footnote: 'Compounded across 23 active engagements · UK / US / EU / UAE',
  },

  guarantee: {
    eyebrow: 'Risk reversal — in writing',
    title: 'The risk is ours. In writing.',
    sub: 'Most agencies sell you a deck and disappear. We put our fee on the line — twice — so the only thing you can lose is the hours you are already losing.',
    layers: [
      {
        n: '01',
        label: '14-day full refund',
        proof: 'Same-day · no questions',
        body: 'No forms, no "are you sure?" emails. Change your mind in the first two weeks and we wire it back the same day.',
      },
      {
        n: '02',
        label: 'The 90-day ROI promise',
        proof: 'Up to 12 months free iteration',
        body: "If your system doesn't pay for itself within 90 days, we keep improving it at zero additional cost until it does.",
      },
    ],
    stat: {
      value: '0',
      label: 'Times we have had to invoke Layer 02',
    },
    closer: "We've never had to. We're not afraid to.",
    cta: 'Book Your Business On Autopilot Session™',
  },

  testimonials: {
    rating: '4.9',
    reviewCount: '127 verified',
    title: 'They came for the pilot. They stayed for the compounding.',
    sub: 'A wall of unedited words from owners, operations leads and founders who put our systems to work.',
    items: [
      {
        name: 'Daniel A.',
        role: 'Head of Ops, fintech',
        initials: 'DA',
        avatar: 'https://d8j0ntlcm91z4.cloudfront.net/user_31J28LgsUCQmK5Ux97L8IuICZIM/hf_20260709_185221_60294f45-3e5d-4314-bf06-3398d16075fb.png',
        quote: 'The audit alone was worth the time. We deployed a single agent and recovered the entire engagement fee inside seven weeks.',
        kind: 'slack' as const,
        meta: '#wins',
        company: 'Finchpay',
      },
      {
        name: 'Imogen R.',
        role: 'Founder, B2B SaaS',
        initials: 'IR',
        avatar: 'https://d8j0ntlcm91z4.cloudfront.net/user_31J28LgsUCQmK5Ux97L8IuICZIM/hf_20260709_185223_50c8fe4c-aa53-4575-a891-5e4d71cf96be.png',
        quote: 'I expected slides. I got a working agent in 18 days. The hand-off documentation is the cleanest I have ever seen from a vendor.',
        kind: 'email' as const,
        meta: 'Re: 18-day audit — wow.',
        email: 'imogen@northbound.io',
      },
      {
        name: 'Carlos M.',
        role: 'COO, logistics',
        initials: 'CM',
        avatar: 'https://d8j0ntlcm91z4.cloudfront.net/user_31J28LgsUCQmK5Ux97L8IuICZIM/hf_20260709_185225_d6ae2ac6-dee5-4d3d-91a9-93d27c091bcb.png',
        quote: 'We replaced an entire vendor contract with two Raynaters-built agents. The cost gap pays a junior hire every quarter.',
        kind: 'slack' as const,
        meta: '#cost-savings',
        company: 'Routedeck',
      },
      {
        name: 'Yuki T.',
        role: 'Agency owner',
        initials: 'YT',
        avatar: 'https://d8j0ntlcm91z4.cloudfront.net/user_31J28LgsUCQmK5Ux97L8IuICZIM/hf_20260709_185226_08ad31aa-d723-4e5d-9523-b6a1ff056e55.png',
        quote: 'Onboarding compressed from 11 days to 2. Clients notice. We win pitches we used to lose to bigger shops.',
        kind: 'imessage' as const,
        meta: 'Yesterday 8:14 PM',
      },
      {
        name: 'Aisha K.',
        role: 'VP Support, e-commerce',
        initials: 'AK',
        avatar: 'https://d8j0ntlcm91z4.cloudfront.net/user_31J28LgsUCQmK5Ux97L8IuICZIM/hf_20260709_185228_9a99a771-8f59-4859-97a9-b9f581e54846.png',
        quote: 'First-response time went from 3 hours to under a minute. CSAT actually went up — the agent is more patient than my best human.',
        kind: 'slack' as const,
        meta: '#cs-wins',
        company: 'Braided',
      },
      {
        name: 'Theo L.',
        role: 'Founder, marketplace',
        initials: 'TL',
        avatar: 'https://d8j0ntlcm91z4.cloudfront.net/user_31J28LgsUCQmK5Ux97L8IuICZIM/hf_20260709_185303_bf8a04d1-7cca-4252-a53f-876e86f94ba0.png',
        quote: 'These guys told me what NOT to automate. Refreshing. We shipped 2 agents instead of 7 and ROI hit week 6.',
        kind: 'imessage' as const,
        meta: 'Today 11:42 AM',
      },
      {
        name: 'Nadia S.',
        role: 'Director of RevOps',
        initials: 'NS',
        avatar: 'https://d8j0ntlcm91z4.cloudfront.net/user_31J28LgsUCQmK5Ux97L8IuICZIM/hf_20260709_185305_0a88af0a-dc27-4afd-9e60-99cc31de2459.png',
        quote: 'Our enrichment + routing agent routes leads in 11 seconds. Sales actually trusts the data. That alone justified the build.',
        kind: 'slack' as const,
        meta: '#revops',
        company: 'Plumes',
      },
      {
        name: 'Henrik J.',
        role: 'CTO, climate tech',
        initials: 'HJ',
        avatar: 'https://d8j0ntlcm91z4.cloudfront.net/user_31J28LgsUCQmK5Ux97L8IuICZIM/hf_20260709_185307_157e1ba0-4d39-4fda-936d-10ea2ca2c137.png',
        quote: 'They are the only AI agency that talks about failure modes before they take your money. Then they ship anyway. Rare.',
        kind: 'email' as const,
        meta: 'Honest pre-engagement convos',
        email: 'h.jansson@circulate.co',
      },
      {
        name: 'Pooja D.',
        role: 'Head of CX',
        initials: 'PD',
        avatar: 'https://d8j0ntlcm91z4.cloudfront.net/user_31J28LgsUCQmK5Ux97L8IuICZIM/hf_20260709_185308_520438d6-d0b1-4033-b9ba-61519f03c4e2.png',
        quote: 'The 90-day guarantee is not a marketing line. They keep iterating. Two of our agents are now on v4 — at no extra cost.',
        kind: 'slack' as const,
        meta: '#engineering',
        company: 'Tideline',
      },
      {
        name: 'Will F.',
        role: 'Founder, dev tools',
        initials: 'WF',
        avatar: 'https://d8j0ntlcm91z4.cloudfront.net/user_31J28LgsUCQmK5Ux97L8IuICZIM/hf_20260709_185310_7621ba3e-02f1-4685-9adf-9ad12b576ec7.png',
        quote: 'Tool-agnostic, like they advertise. We were on Make, they migrated us to LangGraph cleanly when the workflow outgrew it.',
        kind: 'imessage' as const,
        meta: 'Thursday 2:31 PM',
      },
      {
        name: 'Elena V.',
        role: 'Ops Lead, hospitality',
        initials: 'EV',
        avatar: 'https://d8j0ntlcm91z4.cloudfront.net/user_31J28LgsUCQmK5Ux97L8IuICZIM/hf_20260709_185312_f9774124-ed81-47c6-8dae-ce1b735b8613.png',
        quote: 'Fixed scope, fixed price, fixed timeline. After three burned automation vendors, I almost did not believe it. Then they shipped.',
        kind: 'email' as const,
        meta: 'Finally — a vendor that ships.',
        email: 'elena@plate-co.com',
      },
      {
        name: 'Samir B.',
        role: 'CEO, recruiting',
        initials: 'SB',
        avatar: 'https://d8j0ntlcm91z4.cloudfront.net/user_31J28LgsUCQmK5Ux97L8IuICZIM/hf_20260709_185314_351ece20-5c90-46b1-8bc5-21cf3573752d.png',
        quote: 'The "free recommendations if we are not a fit" is real — they actually told us we did not need an agent yet. Earned the trust.',
        kind: 'email' as const,
        meta: 'Trust earned',
        email: 'samir@upline.work',
      },
      {
        name: 'Marcus T.',
        role: 'Head of Growth, PropTech',
        initials: 'MT',
        avatar: 'https://d8j0ntlcm91z4.cloudfront.net/user_31J28LgsUCQmK5Ux97L8IuICZIM/hf_20260709_185356_fda44e73-c5db-4868-ba04-eabcd1f10fc9.png',
        quote: 'We were manually enriching 400 leads a week. Now it\'s fully automated — enriched, scored, and routed before our SDRs start their day. Pipeline velocity doubled.',
        kind: 'slack' as const,
        meta: '#pipeline',
        company: 'Keystone',
      },
      {
        name: 'Lucía M.',
        role: 'COO, legal tech',
        initials: 'LM',
        avatar: 'https://d8j0ntlcm91z4.cloudfront.net/user_31J28LgsUCQmK5Ux97L8IuICZIM/hf_20260709_185358_b008ff99-0f4e-4296-8569-8e659033edca.png',
        quote: 'Their scoping process is rigorous in the best way. They found two workflows we assumed were too complex to automate and shipped both in the first sprint.',
        kind: 'email' as const,
        meta: 'Scoping process — game-changer',
        email: 'lucia.m@coalfox.legal',
      },
      {
        name: 'Owen P.',
        role: 'Founder, InsurTech',
        initials: 'OP',
        avatar: 'https://d8j0ntlcm91z4.cloudfront.net/user_31J28LgsUCQmK5Ux97L8IuICZIM/hf_20260709_185401_bca8b20e-14a5-4214-9bc5-c3df4fcac349.png',
        quote: "I've tried three automation shops before Raynaters. The difference is they build for the edge case, not just the happy path. Nothing breaks in production.",
        kind: 'imessage' as const,
        meta: 'Tuesday 9:05 AM',
      },
      {
        name: 'Farida A.',
        role: 'VP Operations, healthcare',
        initials: 'FA',
        avatar: 'https://d8j0ntlcm91z4.cloudfront.net/user_31J28LgsUCQmK5Ux97L8IuICZIM/hf_20260709_185403_0b863f8a-e502-44e1-a297-be23c929ffe5.png',
        quote: 'HIPAA-compliant, self-hosted, fully documented. We went from skeptical to running six agents in production. The 14-day refund gave us the confidence to start.',
        kind: 'email' as const,
        meta: 'Re: HIPAA-compliant deploy',
        email: 'faisha@vianova.health',
      },
      {
        name: 'James W.',
        role: 'CTO, media',
        initials: 'JW',
        avatar: 'https://d8j0ntlcm91z4.cloudfront.net/user_31J28LgsUCQmK5Ux97L8IuICZIM/hf_20260709_185404_f2126892-e5a3-44ce-bf04-ff8654abc360.png',
        quote: 'The audit revealed we were wasting £18k/year on a tool we could replace with one agent. They built it in two weeks. I have never had a vendor pay for themselves before the kick-off call.',
        kind: 'email' as const,
        meta: 'Re: £18k savings found in audit',
        email: 'j.weston@arclight.media',
      },
      {
        name: 'Priya N.',
        role: 'Head of Product',
        initials: 'PN',
        avatar: 'https://d8j0ntlcm91z4.cloudfront.net/user_31J28LgsUCQmK5Ux97L8IuICZIM/hf_20260709_185405_5719b602-2d1b-4b4b-9fe9-dd5c366c36e1.png',
        quote: 'They embedded with our team like a co-founder, not a contractor. Full Slack access, daily async updates, shipped ahead of schedule.',
        kind: 'slack' as const,
        meta: '#product',
        company: 'Kindred',
      },
      {
        name: 'Tobias H.',
        role: 'Director of Engineering',
        initials: 'TH',
        avatar: 'https://d8j0ntlcm91z4.cloudfront.net/user_31J28LgsUCQmK5Ux97L8IuICZIM/hf_20260709_185414_dc503dbf-b672-4a41-989c-32f055a69465.png',
        quote: 'Usually I spend two weeks reviewing a vendor\'s architecture. Their documentation was so clean I approved it in an afternoon. The system has been running in prod for four months without a single page.',
        kind: 'email' as const,
        meta: 'Architecture review — approved',
        email: 't.holm@inverso.dev',
      },
      {
        name: 'Chiara B.',
        role: 'Founder, fashion-tech',
        initials: 'CB',
        avatar: 'https://d8j0ntlcm91z4.cloudfront.net/user_31J28LgsUCQmK5Ux97L8IuICZIM/hf_20260709_185417_54f7120f-f8e0-4226-9b0e-3da3e9960d3c.png',
        quote: 'We run a lean team. Three months after deploying the wholesale order agent it processes 300 orders a day, and one of my ops staff was redeployed to growth. Worth every pound.',
        kind: 'imessage' as const,
        meta: 'Yesterday 6:48 PM',
      },
      {
        name: 'Noah K.',
        role: 'Ops Manager, retail',
        initials: 'NK',
        avatar: 'https://d8j0ntlcm91z4.cloudfront.net/user_31J28LgsUCQmK5Ux97L8IuICZIM/hf_20260709_185419_026f93e0-d4db-4edd-9d05-68cf368924a0.png',
        quote: 'Inventory reconciliation used to be a Friday nightmare. Now it runs every hour, flags exceptions in Slack, and my team closes 90 minutes earlier on Fridays.',
        kind: 'slack' as const,
        meta: '#ops-team',
        company: 'Shopline',
      },
      {
        name: 'Sofia R.',
        role: 'CEO, edtech',
        initials: 'SR',
        avatar: 'https://d8j0ntlcm91z4.cloudfront.net/user_31J28LgsUCQmK5Ux97L8IuICZIM/hf_20260709_185421_52274460-a1fe-4e52-9e0e-3309e6e53770.png',
        quote: 'I was burned by AI hype before. The Raynaters team was the first to tell me our best workflow was not a good automation candidate. That honesty is why I trusted them with the three that were.',
        kind: 'email' as const,
        meta: 'Re: Audit follow-up',
        email: 'sofia@learnsphere.ed',
      },
      {
        name: 'Arjun P.',
        role: 'Director of Sales',
        initials: 'AP',
        avatar: 'https://d8j0ntlcm91z4.cloudfront.net/user_31J28LgsUCQmK5Ux97L8IuICZIM/hf_20260709_185422_a8e9df3a-57be-4bac-9bf5-81c5f75b3c4f.png',
        quote: 'CRM hygiene was our weakest link. They built an enrichment agent that keeps every contact field updated without anyone touching it. Our forecast accuracy improved in the first month.',
        kind: 'slack' as const,
        meta: '#sales-wins',
        company: 'Northform',
      },
      {
        name: 'Maya L.',
        role: 'Head of Revenue, SaaS',
        initials: 'ML',
        avatar: 'https://d8j0ntlcm91z4.cloudfront.net/user_31J28LgsUCQmK5Ux97L8IuICZIM/hf_20260709_185424_7efe20e9-9ff1-40c6-9ed8-e10db2c087b1.png',
        quote: 'Renewals used to require a 90-minute manual pull. The agent handles it end-to-end — checks usage, drafts the email, queues it for one-click send. My CSM recovered eight hours a week.',
        kind: 'slack' as const,
        meta: '#cs-team',
        company: 'Plumes',
      },
      {
        name: 'Jack D.',
        role: 'COO, cybersecurity',
        initials: 'JD',
        avatar: 'https://d8j0ntlcm91z4.cloudfront.net/user_31J28LgsUCQmK5Ux97L8IuICZIM/hf_20260709_185459_94a76b8b-c972-4f80-b322-2e031c050ad7.png',
        quote: 'Compliance reporting was a quarterly two-day sprint. Now it\'s a Tuesday morning report that runs itself. Freed up our most senior analyst to focus on actual threat work.',
        kind: 'email' as const,
        meta: 'Compliance reporting fixed',
        email: 'j.dawson@northstack.sec',
      },
    ],
  },

  faq: {
    eyebrow: 'The questions everyone asks',
    title: 'Everything you would ask in the first ten minutes.',
    items: [
      {
        q: 'What exactly do you build?',
        a: 'Three things, depending on what your business actually needs: (1) automation systems — the repetitive workflows quietly eating your team\'s hours; (2) agentic AI systems — agents that read context, decide, and take action, not just follow rigid rules; and (3) custom software development when off-the-shelf tools simply can\'t do the job.',
      },
      {
        q: 'How fast can you deploy?',
        a: 'Most systems go live in under a week. We move from your free audit to a working, deployed build fast — larger multi-system projects run two to four weeks depending on scope.',
      },
      {
        q: 'How do you decide what to build for me?',
        a: 'We start by analysing your operation — where the hours leak, where errors creep in, where revenue stalls. Then we scope the highest-ROI system for your specific business and hand you a written projection before you commit a penny. We never sell a template.',
      },
      {
        q: 'What if my data is sensitive?',
        a: 'Every system runs on infrastructure you own. We never hold your data, and builds are security-aligned by default.',
      },
      {
        q: 'Do I need a technical team to maintain this?',
        a: 'No. We hand off with full documentation, video walkthroughs, and 90 days of post-launch support included.',
      },
      {
        q: 'What tools and stack do you build on?',
        a: "Whatever fits your business — we're tool-agnostic. n8n, Make, Zapier, custom Python, LangGraph, OpenAI and Anthropic models, and full custom codebases when the job calls for it.",
      },
      {
        q: "What's the typical investment?",
        a: 'Pilot builds start at £4,500. Full multi-system engagements range £15K–£60K depending on scope. You get an ROI projection before any commitment.',
      },
      {
        q: 'What happens after the free audit call?',
        a: "If we're a fit, you get a written proposal within 48 hours. If we're not, you get three free recommendations and we go our separate ways — no pressure.",
      },
    ],
  },

  finalCta: {
    eyebrow: 'Last call',
    title: 'Bring Us Your Biggest Bottleneck. Leave With The System To Remove It.',
    sub: 'Every growing business has one process slowing everything else down. Bring it to your Business On Autopilot Session™ — we’ll map it, redesign it, show you exactly what we’d build, and estimate the return before you spend a penny. If we don’t believe we can create measurable value, we’ll tell you.',
    cta: 'Book Your Business On Autopilot Session™',
    smallprint: 'Free 30-minute call. ROI projection within 48 hours. No pitch deck.',
  },

  footer: {
    tagline: 'Built for businesses ready to compound.',
    columns: [
      {
        label: 'Solutions',
        links: [
          { label: 'AI Automation Agency', href: '/ai-automation-agency-uk' },
          { label: 'AI for Law Firms', href: '/ai-automation-for-law-firms-uk' },
          { label: 'AI Receptionist · Trades', href: '/ai-receptionist-for-trades-uk' },
          { label: 'AI Receptionist · Clinics', href: '/ai-receptionist-for-clinics-uk' },
          { label: 'AI Receptionist · Cosmetic', href: '/ai-receptionist-for-cosmetic-clinics-uk' },
          { label: 'AI Receptionist Cost', href: '/ai-receptionist-cost-uk' },
        ],
      },
      {
        label: 'Company',
        links: [
          { label: 'How it works', href: '/#evolution' },
          { label: 'What we build', href: '/#industry' },
          { label: 'Case studies', href: '/case-studies' },
          { label: 'Resources', href: '/resources' },
          { label: 'Guarantee', href: '/#guarantee' },
          { label: 'FAQ', href: '/#faq' },
        ],
      },
      {
        label: 'Connect',
        links: [
          { label: 'Book audit', href: '/book' },
          { label: 'Email', href: 'mailto:team@raynaters.tech' },
          { label: 'LinkedIn', href: '#' },
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
