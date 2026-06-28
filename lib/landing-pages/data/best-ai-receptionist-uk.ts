import type { LandingPage } from '@/lib/landing-pages/types';

const page: LandingPage = {
  slug: 'best-ai-receptionist-uk',
  primaryKeyword: 'best ai receptionist uk',
  utmCampaign: 'best-ai-receptionist-uk',
  serviceType: 'AI Receptionist',
  navLabel: 'Choosing an AI Receptionist',
  navBlurb: 'How to choose — and when custom beats off-the-shelf.',
  image: {
    src: 'https://d8j0ntlcm91z4.cloudfront.net/user_31J28LgsUCQmK5Ux97L8IuICZIM/hf_20260604_155053_5eceb174-bd85-4e5b-8715-10d0673aacf4.png',
    alt: 'Decision framework concept for choosing the best AI receptionist for a UK business',
  },

  eyebrow: 'Buyer’s Guide · UK',
  h1: 'How to choose an AI receptionist in the UK (and when custom beats off-the-shelf).',
  hook: 'Most “best AI receptionist” lists rank tools by brand, not by fit. Here is an honest framework for choosing — what to test, the questions that matter, and the point where a custom-built agent beats a one-size-fits-all platform.',

  directAnswer:
    'The best AI receptionist for your UK business is the one that books into your systems, sounds like your brand, and handles your real call patterns — not the most-marketed tool. Off-the-shelf platforms suit simple, low-volume needs; a custom-built agent wins once call volume, integrations or qualification rules get specific.',

  headings: {
    whatItDoes: 'What actually separates a good AI receptionist from a bad one.',
    whoItsFor: 'Off-the-shelf vs custom: which fits you.',
    comparison: 'Off-the-shelf platform vs a custom-built agent.',
  },

  whatItDoes: [
    {
      title: 'Integration depth',
      body: 'Can it book into your actual diary, CRM or practice software — or just take a message? Real booking beats a glorified voicemail every time.',
    },
    {
      title: 'Qualification logic',
      body: 'The best agents qualify the way you would: your services, prices, urgency rules and routing — not a generic script that frustrates callers.',
    },
    {
      title: 'Voice & brand fit',
      body: 'It should sound like your business, handle your accents and edge cases, and represent you properly on the call that wins the job.',
    },
    {
      title: 'Ownership & data',
      body: 'Where does your call data live, and can you change the agent as you grow? Custom builds run on infrastructure you control.',
    },
  ],

  whoItsFor: [
    'Owners comparing AI receptionist tools and unsure what to test.',
    'Businesses that outgrew a basic off-the-shelf answering bot.',
    'Higher-volume or multi-site operations needing real integrations.',
    'Anyone whose qualification or booking rules are too specific for a template.',
    'Buyers who want to own their agent rather than rent a black box.',
  ],

  howItWorks: [
    {
      title: 'Agent Audit',
      body: 'A free 30-minute call to map your call patterns, systems and what “good” looks like for you. Written ROI projection within 48 hours.',
    },
    {
      title: 'Fixed-scope build',
      body: 'We build the agent around your exact services, integrations and qualification rules — not a template you bend to fit.',
    },
    {
      title: 'Deploy & test against reality',
      body: 'It goes live on your number and is tested against your real call types until it handles them cleanly.',
    },
    {
      title: 'Measure & improve',
      body: 'We track captured calls and bookings and keep tuning until it has paid for itself.',
    },
  ],

  comparison: {
    columns: ['', 'Off-the-shelf platform', 'Custom-built agent'],
    highlightColumn: 2,
    rows: [
      { label: 'Books into your systems', cells: ['Limited', 'Deep'] },
      { label: 'Qualification logic', cells: ['Generic', 'Yours exactly'] },
      { label: 'Brand & voice fit', cells: ['Templated', 'Tuned to you'] },
      { label: 'Handles your edge cases', cells: ['Sometimes', 'Built in'] },
      { label: 'You own the agent & data', cells: ['No', 'Yes'] },
      { label: 'Best for', cells: ['Simple, low volume', 'Specific or higher volume'] },
    ],
  },

  pricingROI: {
    headline: 'Don’t buy the most-marketed — buy the best fit.',
    body: 'Off-the-shelf tools are a fine starting point for simple needs. Once your call volume, integrations or qualification rules get specific, a custom-built agent that books into your systems and sounds like you will out-perform a template — and ours comes with a 90-day ROI guarantee.',
    bullets: [
      'A clear framework to evaluate any AI receptionist.',
      'Custom builds that integrate with your real stack.',
      'Pay-Back-Or-We-Keep-Building guarantee.',
      'Written ROI projection within 48 hours of your free audit.',
    ],
  },

  miniCase: {
    client: 'Riverside Dental Practice',
    monogram: 'RD',
    metric: '+22%',
    metricLabel: 'New-patient bookings captured',
    challenge:
      'A basic answering setup took messages but never booked, so a third of peak-time calls still slipped to competitors.',
    outcome:
      'A custom agent connected to their practice calendar now books and reschedules around the clock — lifting captured new-patient bookings by 22%.',
    persona: { name: 'Hannah Clarke', role: 'Practice Manager, Riverside Dental' },
  },

  faqs: [
    {
      q: 'What makes the best AI receptionist for a UK business?',
      a: 'Fit, not fame. The best one books into your actual systems, qualifies callers the way you would, sounds like your brand and handles your real call patterns. The most-marketed tool is rarely the best fit for a specific business.',
    },
    {
      q: 'When is a custom AI receptionist worth it over off-the-shelf?',
      a: 'Once call volume rises, you need real integrations, or your qualification and routing rules are specific, a custom-built agent that books into your stack and owns its data will out-perform a one-size-fits-all platform.',
    },
    {
      q: 'How should I test an AI receptionist before buying?',
      a: 'Call it with your real scenarios — an emergency, a price question, a tricky booking, an accent it must handle — and check whether it books into your system or just takes a message. That reveals fit faster than any feature list.',
    },
    {
      q: 'Do I own the agent and the call data?',
      a: 'With a custom build, yes — it runs on infrastructure you control and can evolve as you grow, rather than living inside a vendor’s black box you can’t change.',
    },
  ],

  relatedLink: {
    label: 'Compare AI vs a human receptionist',
    href: '/ai-receptionist-vs-human-receptionist',
  },

  metadata: {
    title: 'Best AI Receptionist UK: How to Choose (2026) | Raynaters',
    description:
      'How to choose the best AI receptionist in the UK — what to test, the questions that matter, and when a custom-built agent beats off-the-shelf. Honest buyer’s guide.',
  },
};

export default page;
