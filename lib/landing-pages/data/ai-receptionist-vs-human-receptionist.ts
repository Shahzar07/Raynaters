import type { LandingPage } from '@/lib/landing-pages/types';

const page: LandingPage = {
  slug: 'ai-receptionist-vs-human-receptionist',
  primaryKeyword: 'ai receptionist vs human receptionist',
  utmCampaign: 'ai-receptionist-vs-human-receptionist',
  serviceType: 'AI Receptionist',
  navLabel: 'AI vs Human Receptionist',
  navBlurb: 'Cost, coverage and trade-offs, compared honestly.',
  image: {
    src: 'https://d8j0ntlcm91z4.cloudfront.net/user_31J28LgsUCQmK5Ux97L8IuICZIM/hf_20260709_185135_bc4e54d7-1fc3-4df6-8448-bd0e27a41ec9.png',
    alt: 'Professional receptionist with a wireless headset mid-conversation at a modern front desk',
  },

  eyebrow: 'Comparison · UK',
  h1: 'AI receptionist vs human receptionist: cost, coverage & trade-offs (UK).',
  hook: 'A human receptionist brings warmth and judgement; an AI receptionist brings 24/7 coverage at a fraction of the cost. Here is an honest breakdown of how they compare on cost, availability and capacity — and where each one wins.',

  directAnswer:
    'An AI receptionist costs roughly £100–£500/month and answers every call 24/7 with unlimited simultaneous capacity, while a UK human receptionist costs around £28,000–£35,000 a year and covers office hours only. AI wins on cost, coverage and never missing a call; a human still wins on complex, sensitive conversations and in-person reception.',

  headings: {
    whatItDoes: 'Where each option actually wins.',
    whoItsFor: 'Which one fits your business.',
    comparison: 'AI receptionist vs human receptionist, side by side.',
  },

  whatItDoes: [
    {
      title: 'AI wins on cost',
      body: 'At roughly £100–£500/month against a £28k–£35k salary plus on-costs, AI covers a fraction of the price — with no holiday, sick pay or recruitment.',
    },
    {
      title: 'AI wins on coverage',
      body: 'Every call answered 24/7, including evenings, weekends and the lunchtime rush, with unlimited simultaneous calls so nobody hits a busy tone.',
    },
    {
      title: 'A human wins on nuance',
      body: 'Emotional, complex or sensitive conversations and genuine in-person reception still benefit from a person — which is why most businesses blend the two.',
    },
    {
      title: 'Consistency vs warmth',
      body: 'AI never has an off day, forgets a price or mis-logs a booking; a great receptionist brings rapport and judgement an automated system cannot fully replace.',
    },
  ],

  whoItsFor: [
    'Businesses losing calls outside 9–5 that a daytime hire can’t cover.',
    'Owners who can’t justify a full-time salary but still miss calls.',
    'Teams hitting busy tones at peak times with one person on the phone.',
    'Anyone weighing the true cost of a receptionist against missed work.',
    'Practices that want a human front desk plus 24/7 overflow cover.',
  ],

  howItWorks: [
    {
      title: 'Agent Audit',
      body: 'A free 30-minute call to look at your call volume and what missed calls actually cost you. Written ROI projection within 48 hours.',
    },
    {
      title: 'Fixed-scope build',
      body: 'We configure the receptionist to your services, prices and the way you book and qualify work.',
    },
    {
      title: 'Deploy alongside your team',
      body: 'It can answer everything, or only the overflow and out-of-hours calls a human can’t — on your existing number.',
    },
    {
      title: 'Measure & improve',
      body: 'We track captured calls and bookings and keep tuning until it has paid for itself.',
    },
  ],

  comparison: {
    columns: ['', 'Human receptionist', 'AI receptionist'],
    highlightColumn: 2,
    rows: [
      { label: 'Typical UK cost', cells: ['£28k–£35k/yr', '£100–£500/mo'] },
      { label: 'Availability', cells: ['Office hours', '24/7'] },
      { label: 'Simultaneous calls', cells: ['One at a time', 'Unlimited'] },
      { label: 'Sick days & holiday', cells: ['Yes', 'None'] },
      { label: 'Ramp / training time', cells: ['Weeks', 'Days'] },
      { label: 'Consistency', cells: ['Varies', 'Identical every call'] },
      { label: 'Complex/sensitive calls', cells: ['Strong', 'Routes to a human'] },
    ],
  },

  pricingROI: {
    headline: 'The honest answer: most businesses blend both.',
    body: 'For round-the-clock coverage and never missing a call, an AI receptionist is dramatically cheaper than hiring — these are UK market ranges, not a quote. Many businesses keep a human for the front desk and use an AI receptionist for overflow and out-of-hours, getting the best of both.',
    bullets: [
      'AI receptionist: roughly £100–£500/month (market range).',
      'Human receptionist: roughly £28k–£35k/year plus on-costs.',
      'Pay-Back-Or-We-Keep-Building guarantee on every build.',
      'Written ROI projection within 48 hours of your free audit.',
    ],
  },

  miniCase: {
    client: 'Northgate Plumbing & Heating',
    monogram: 'NP',
    metric: '£4,100/mo',
    metricLabel: 'Recovered booked work',
    challenge:
      'With no one free to answer the phone, calls went to voicemail and after-hours emergency work was lost to whoever picked up first.',
    outcome:
      'An AI receptionist answering 24/7 — at a fraction of a receptionist’s salary — recovered around £4,100 of booked work a month with no extra headcount.',
    persona: { name: 'Gary Whitfield', role: 'Owner, Northgate Plumbing & Heating' },
  },

  faqs: [
    {
      q: 'Is an AI receptionist cheaper than hiring a receptionist?',
      a: 'For round-the-clock cover, substantially. A UK receptionist typically costs £28,000–£35,000 a year plus on-costs and covers office hours only, while an AI receptionist runs roughly £100–£500 a month and answers every call 24/7. These are market ranges, not a quote.',
    },
    {
      q: 'Can an AI receptionist replace a human entirely?',
      a: 'For many call-handling and booking tasks, yes. But for emotionally complex conversations and in-person reception a human still adds value, which is why many businesses run an AI receptionist alongside their team rather than instead of it.',
    },
    {
      q: 'What happens with a call the AI can’t handle?',
      a: 'It captures the caller and the detail, then routes anything it should not handle straight to a human with full context — so you never lose the lead, you just skip the time-wasting calls.',
    },
    {
      q: 'How many calls can an AI receptionist take at once?',
      a: 'Unlimited simultaneous calls, so peak-time rushes never hit a busy tone — something a single human receptionist cannot match.',
    },
  ],

  relatedLink: {
    label: 'See what an AI receptionist costs in the UK',
    href: '/ai-receptionist-cost-uk',
  },

  metadata: {
    title: 'AI Receptionist vs Human Receptionist: UK Cost & Trade-offs',
    description:
      'AI receptionist vs human receptionist in the UK — cost (£100–£500/mo vs £28k–£35k/yr), 24/7 coverage, call capacity and where each one wins. Honest comparison.',
  },
};

export default page;
