import type { LandingPage } from '@/lib/landing-pages/types';

const page: LandingPage = {
  slug: 'ai-receptionist-london',
  primaryKeyword: 'ai receptionist london',
  utmCampaign: 'ai-receptionist-london',
  serviceType: 'AI Receptionist',
  navLabel: 'AI Receptionist in London',
  navBlurb: 'A 24/7 receptionist for London businesses.',
  image: {
    src: 'https://d8j0ntlcm91z4.cloudfront.net/user_31J28LgsUCQmK5Ux97L8IuICZIM/hf_20260709_185133_b93f46d9-1626-42e5-bd56-e96b7b3d0c7b.png',
    alt: 'Receptionist taking a call at an elegant London office front desk with the City skyline behind',
  },

  eyebrow: 'For London Businesses',
  h1: 'AI receptionist for London businesses.',
  hook: 'London moves fast and so do your callers — miss the call and they’ve booked the next firm before you’ve finished the job. Our AI receptionist answers every call 24/7, books the work, and captures the leads your competitors are dropping.',

  directAnswer:
    'An AI receptionist for London businesses answers every call 24/7, books jobs and appointments into your diary, and captures after-hours and overflow enquiries across the capital — so trades, clinics, salons and professional firms in London stop losing work to voicemail and faster-answering competitors.',

  headings: {
    whatItDoes: 'What your AI receptionist does for a London business.',
    whoItsFor: 'Built for London’s busiest service businesses.',
    comparison: 'Voicemail, a call centre, or an AI receptionist?',
  },

  whatItDoes: [
    {
      title: 'Answers every call, 24/7',
      body: 'Across London’s long working hours and busy evenings, every call is picked up instantly in a natural voice that represents your business.',
    },
    {
      title: 'Books jobs & appointments',
      body: 'It checks availability, books the slot and logs the details — for trades, clinics, salons and professional firms across the capital.',
    },
    {
      title: 'Captures overflow & after-hours',
      body: 'Peak-time rushes and out-of-hours enquiries that would hit voicemail are answered and captured, not lost to a competitor across town.',
    },
    {
      title: 'Sounds local and on-brand',
      body: 'It represents your business by name, handles London’s mix of callers, and routes anything it shouldn’t handle straight to you.',
    },
  ],

  whoItsFor: [
    'London trades losing callouts while on the tools.',
    'Clinics and dental practices missing new patients at peak times.',
    'Salons and barbers who can’t break away to answer the phone.',
    'Professional firms wanting a polished 24/7 first impression.',
    'Any London business whose voicemail is costing it bookings.',
  ],

  howItWorks: [
    {
      title: 'Agent Audit',
      body: 'A free 30-minute call to look at your call volume and the work you’re missing across London. Written ROI projection within 48 hours.',
    },
    {
      title: 'Fixed-scope build',
      body: 'We configure the receptionist to your services, pricing, availability and how you qualify and book work.',
    },
    {
      title: 'Deploy on your number',
      body: 'It goes live on your existing business number and calendar — nothing new for your customers to dial.',
    },
    {
      title: 'Measure & improve',
      body: 'We track booked work and captured leads and keep tuning until it pays for itself.',
    },
  ],

  comparison: {
    columns: ['', 'Voicemail', 'Call centre', 'AI receptionist'],
    highlightColumn: 3,
    rows: [
      { label: 'Answers 24/7', cells: [false, true, true] },
      { label: 'Knows your services & pricing', cells: [false, false, true] },
      { label: 'Books into your diary', cells: [false, 'Sometimes', true] },
      { label: 'Handles peak-time overflow', cells: [false, true, true] },
      { label: 'Sounds like your business', cells: [false, false, true] },
      { label: 'Typical monthly cost', cells: ['Free', '£££', '££'] },
    ],
  },

  pricingROI: {
    headline: 'One recovered booking a week usually covers it.',
    body: "Pricing is fixed to your call volume, not a per-minute meter. In a city where speed-to-answer wins the work, a single recovered job or appointment a week more than covers the cost — and if it hasn't paid for itself in 90 days, we keep building until it does.",
    bullets: [
      'Fixed monthly price scoped to your call volume.',
      'Goes live on your existing business number.',
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
      'A multi-site practice missed roughly a third of calls at peak times, sending new patients to voicemail and often to a competitor with a live line.',
    outcome:
      'An AI receptionist now answers every call and books around the clock — lifting captured new-patient bookings by 22%.',
    persona: { name: 'Hannah Clarke', role: 'Practice Manager, Riverside Dental' },
  },

  faqs: [
    {
      q: 'Does the AI receptionist work for any London business?',
      a: 'Yes. It’s configured to your trade or sector — trades, clinics, salons or professional firms — and answers, qualifies and books according to how your specific London business works.',
    },
    {
      q: 'Can it handle high call volumes at peak times?',
      a: 'It takes unlimited simultaneous calls, so London’s peak-time rushes never hit a busy tone and every caller is answered instantly.',
    },
    {
      q: 'Will it work with my existing number?',
      a: 'Yes — it goes live on your current business number, so there is nothing for your customers to learn or dial differently.',
    },
    {
      q: 'How much does an AI receptionist cost in London?',
      a: 'Pricing is fixed to your call volume rather than per minute. See our 2026 UK cost guide for the breakdown and book a free audit for a figure specific to your business.',
    },
  ],

  relatedLink: {
    label: 'See what an AI receptionist costs in the UK',
    href: '/ai-receptionist-cost-uk',
  },

  metadata: {
    title: 'AI Receptionist London | 24/7 Call Answering | Raynaters',
    description:
      'An AI receptionist for London businesses — answers every call 24/7, books jobs and appointments, and captures overflow and after-hours leads. Book a free audit.',
  },
};

export default page;
