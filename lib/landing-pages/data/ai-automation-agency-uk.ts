import type { LandingPage } from '@/lib/landing-pages/types';

const page: LandingPage = {
  slug: 'ai-automation-agency-uk',
  primaryKeyword: 'ai automation agency uk',
  utmCampaign: 'ai-automation-agency-uk',
  serviceType: 'AI Automation',
  navLabel: 'AI Automation Agency',
  navBlurb: 'Done-for-you AI agents that pay for themselves in 90 days.',
  image: {
    src: 'https://d8j0ntlcm91z4.cloudfront.net/user_31J28LgsUCQmK5Ux97L8IuICZIM/hf_20260604_155008_c83ad6a9-f380-4e12-af9f-11c97acb3be1.png',
    alt: 'Modern UK AI automation agency operations room with multiple monitors showing dashboards and workflow diagrams',
  },
  showcase: {
    eyebrow: 'How the agents work',
    rows: [
      {
        title: 'Every missed call becomes a booked job',
        body: 'Our AI receptionist answers 24/7, triages enquiries, books appointments directly into your calendar and sends confirmation — without a human touching the keyboard.',
        image: { src: 'https://d8j0ntlcm91z4.cloudfront.net/user_31J28LgsUCQmK5Ux97L8IuICZIM/hf_20260604_155039_5730193a-d2ee-4346-be52-d4dd0d05a2c3.png', alt: 'AI automation pipeline showing missed calls converting to booked appointments in real time' },
      },
      {
        title: 'See your ROI before you commit',
        body: 'Every deployment includes a written ROI projection. You see exactly which workflows we\'re targeting, what the time and revenue impact will be, and a 90-day payback guarantee.',
        image: { src: 'https://d8j0ntlcm91z4.cloudfront.net/user_31J28LgsUCQmK5Ux97L8IuICZIM/hf_20260604_155042_a9b3c028-5991-4ffd-b5db-ea37c9e6c5b6.png', alt: 'AI ROI and savings summary dashboard showing pound-sterling savings and time reclaimed' },
      },
    ],
  },

  eyebrow: 'AI Automation Agency · UK · US · EU',
  h1: 'The AI automation agency UK businesses hire to stop doing work by hand.',
  hook: 'We deploy AI agents that take repetitive admin, operations and customer workflows off your team — and pay for themselves within 90 days, or we keep building until they do.',

  directAnswer:
    'An AI automation agency designs, builds and deploys AI agents that run your repetitive business workflows end to end — answering calls, qualifying leads, processing orders and updating your systems. Raynaters Tech deploys these agents for UK service businesses and guarantees they pay for themselves within 90 days, or we keep building until they do.',

  headings: {
    whatItDoes: 'What an AI automation agency actually builds for you.',
    whoItsFor: 'Built for UK operators drowning in repeatable work.',
    comparison: 'In-house hire, freelancer, or a deployed agent?',
  },

  whatItDoes: [
    {
      title: 'Lead capture & qualification',
      body: 'Every enquiry — call, form, DM or email — is answered instantly, qualified against your criteria, and booked or routed. Nothing slips through after hours.',
    },
    {
      title: 'Back-office automation',
      body: 'Order processing, invoicing, data entry and CRM updates run themselves across the tools you already use. No copy-paste, no missed steps.',
    },
    {
      title: 'Customer support agents',
      body: 'Tier-one questions, status updates and refunds handled around the clock in your brand voice, with a clean handover to a human when it genuinely matters.',
    },
    {
      title: 'Reporting & operations visibility',
      body: 'Daily numbers, pipeline health and SLA breaches surfaced automatically — so you stop building spreadsheets and start reading them.',
    },
  ],

  whoItsFor: [
    'UK SMBs and scale-ups where admin is quietly capping growth.',
    'Founders still doing £15-an-hour tasks at £150-an-hour opportunity cost.',
    'Teams losing leads to slow follow-up and missed calls.',
    'Operations leads stitching tools together by hand every single day.',
    'Businesses that want outcomes deployed — not another AI strategy deck.',
  ],

  howItWorks: [
    {
      title: 'Agent Audit',
      body: 'A free 30-minute call to map your workflows and find the work worth automating first. You get a written ROI projection within 48 hours.',
    },
    {
      title: 'Fixed-scope build',
      body: 'We design and build the agent against agreed success metrics — no open-ended retainers, no moving goalposts.',
    },
    {
      title: 'Deploy & integrate',
      body: 'The agent goes live inside your existing stack — phone, CRM, inbox, spreadsheets — and starts doing the work.',
    },
    {
      title: 'Measure & improve',
      body: 'We track against the ROI target and keep refining until it pays for itself. That is the guarantee, in writing.',
    },
  ],

  comparison: {
    columns: ['', 'In-house hire', 'Freelancer', 'Raynaters agent'],
    highlightColumn: 3,
    rows: [
      { label: 'Works 24/7', cells: [false, false, true] },
      { label: 'Live in weeks', cells: [false, true, true] },
      { label: 'Fixed, predictable cost', cells: [false, false, true] },
      { label: 'Scales without rehiring', cells: [false, false, true] },
      { label: 'Pays for itself in 90 days', cells: [false, false, true] },
      { label: 'Needs day-to-day managing', cells: ['Yes', 'Yes', 'No'] },
    ],
  },

  pricingROI: {
    headline: 'Transparent scope. A 90-day payback promise.',
    body: 'Most engagements start with a fixed-scope pilot agent, priced to your workflow rather than a vague monthly retainer. If it has not paid for itself within 90 days, we keep building until it does.',
    bullets: [
      'Fixed-scope quote after your free audit — no open-ended retainers.',
      'Written ROI projection within 48 hours of the call.',
      'Pay-Back-Or-We-Keep-Building guarantee on every deployment.',
      '47,000+ operational hours already reclaimed across the UK, US & EU.',
    ],
  },

  miniCase: {
    client: 'Brookline Lettings',
    monogram: 'BL',
    metric: '31 hrs/wk',
    metricLabel: 'Admin time reclaimed',
    challenge:
      'Their lettings team lost a full day every week to manual tenant referencing, chasing documents and updating three disconnected systems by hand.',
    outcome:
      'A deployed agent now handles referencing intake, document chase-ups and CRM sync end to end — freeing 31 hours a week and cutting move-in delays.',
    persona: { name: 'Daniel Pearce', role: 'Operations Director, Brookline Lettings' },
  },

  faqs: [
    {
      q: 'What does an AI automation agency actually do?',
      a: 'It designs, builds and deploys AI agents that run specific business workflows for you — like answering calls, qualifying leads, processing orders or updating your CRM. A good agency owns the outcome end to end: scoping the work, building against agreed metrics, integrating with your existing tools, and refining the agent until it delivers measurable ROI.',
    },
    {
      q: 'Which is the best AI for automation?',
      a: 'There is no single best model — the right choice depends on the task. We are tool-agnostic and build on whatever performs best for your workflow, whether that is a large language model for reasoning, a voice platform for calls, or workflow tools like n8n, Make or Zapier for the plumbing. What matters is the deployed result, not the brand of model behind it.',
    },
    {
      q: 'How long until AI automation pays for itself?',
      a: 'Our guarantee is 90 days. We scope each agent against a clear ROI target during the free audit, deploy it inside a few weeks, then measure against that target. If it has not paid for itself within 90 days, we keep building until it does.',
    },
    {
      q: 'How is this different from hiring a freelancer or someone in-house?',
      a: 'A hire or freelancer does the work; an agent does the work 24/7, scales without rehiring, and carries a fixed, predictable cost. You also avoid recruitment, management overhead and key-person risk. We deploy and maintain the system, so you get the output without owning the operational burden.',
    },
    {
      q: 'Do you work with our existing tools?',
      a: 'Yes. Agents are built to live inside the stack you already run — your phone number, CRM, inbox, spreadsheets and internal tools — rather than forcing you to rip and replace. Integration is part of the build.',
    },
    {
      q: 'Is our data secure?',
      a: 'Agents operate within your existing systems and permissions, and we scope data access to only what each workflow needs. We are happy to walk through data handling, retention and access controls during the audit.',
    },
  ],

  metadata: {
    title: 'AI Automation Agency UK | Custom AI Agents for SMEs',
    description:
      'A UK AI automation agency building custom AI agents and receptionists for trades, clinics and law firms. ROI in 90 days or we keep building. See case studies.',
  },
};

export default page;
