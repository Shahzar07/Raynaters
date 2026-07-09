import type { LandingPage } from '@/lib/landing-pages/types';

const page: LandingPage = {
  slug: 'ai-receptionist-for-electricians-uk',
  primaryKeyword: 'ai receptionist for electricians uk',
  utmCampaign: 'ai-receptionist-for-electricians-uk',
  serviceType: 'AI Receptionist',
  navLabel: 'AI Receptionist for Electricians',
  navBlurb: 'Triage faults, book jobs and catch after-hours callouts.',
  image: {
    src: 'https://d8j0ntlcm91z4.cloudfront.net/user_31J28LgsUCQmK5Ux97L8IuICZIM/hf_20260709_185127_44879934-f33a-498d-8356-25362c7704b7.png',
    alt: 'Electrician in hi-vis testing a residential switchboard at a suburban home',
  },

  eyebrow: 'For UK Electricians & Electrical Contractors',
  h1: "AI receptionist for UK electricians who can't stop mid-job to answer the phone.",
  hook: "Hands on a live board, you can't grab the phone — and that missed call is often the emergency callout worth the most. Our AI receptionist answers 24/7, triages the fault, and books the job into your diary.",

  directAnswer:
    'An AI receptionist for electricians answers every call 24/7, triages electrical faults like a tripping board, a rewire or total loss of power, captures after-hours emergencies, and books jobs straight into your diary — so you stop losing high-value callouts while your hands are full.',

  headings: {
    whatItDoes: 'What your AI receptionist handles on every call.',
    whoItsFor: 'Built for electricians who lose work to a ringing phone.',
    comparison: 'Voicemail, a call centre, or an AI receptionist?',
  },

  whatItDoes: [
    {
      title: 'Triages electrical emergencies',
      body: 'No power, a burning smell, a tripping consumer unit — the agent recognises urgent faults, gathers the detail and flags genuine emergencies immediately.',
    },
    {
      title: 'Books jobs into your diary',
      body: 'It checks availability, books the right length of slot for the work, and logs the address and fault so you arrive knowing the job.',
    },
    {
      title: 'Catches after-hours callouts',
      body: 'Evenings and weekends are when emergency electrical work comes in. Every call is answered and captured instead of going to voicemail.',
    },
    {
      title: 'Qualifies EICR & rewire enquiries',
      body: 'Landlord certificates, EICRs, fuse-board upgrades and rewires are qualified and quoted-ready, so you only call back work worth your time.',
    },
  ],

  whoItsFor: [
    'Sole-trader electricians on the tools all day with no one to answer calls.',
    'Emergency and 24-hour electricians leaking out-of-hours callouts.',
    'Electrical contractors juggling EICRs, rewires and fault-finding.',
    'NICEIC / NAPIT-registered sparks who want a professional first impression.',
    'Anyone whose voicemail is quietly sending jobs to the next electrician.',
  ],

  howItWorks: [
    {
      title: 'Agent Audit',
      body: 'A free 30-minute call to look at your call volume, diary and the callouts you keep missing. Written ROI projection within 48 hours.',
    },
    {
      title: 'Fixed-scope build',
      body: 'We configure the receptionist to your services, rates, availability and how you triage an electrical emergency.',
    },
    {
      title: 'Deploy on your number',
      body: 'It goes live on your existing business number and calendar — nothing new for your customers to dial.',
    },
    {
      title: 'Measure & improve',
      body: 'We track booked jobs and captured callouts and keep tuning until it has paid for itself.',
    },
  ],

  comparison: {
    columns: ['', 'Voicemail', 'Call centre', 'AI receptionist'],
    highlightColumn: 3,
    rows: [
      { label: 'Answers 24/7', cells: [false, true, true] },
      { label: 'Triages an electrical emergency', cells: [false, false, true] },
      { label: 'Books into your diary', cells: [false, 'Sometimes', true] },
      { label: 'Knows your rates & services', cells: [false, false, true] },
      { label: 'Sounds like your business', cells: [false, false, true] },
      { label: 'Typical monthly cost', cells: ['Free', '£££', '££'] },
    ],
  },

  pricingROI: {
    headline: 'One recovered emergency callout usually covers the month.',
    body: "Pricing is fixed to your call volume, not a per-minute meter. For most electricians a single recovered fault callout a month more than covers the cost — and if it hasn't paid for itself in 90 days, we keep building until it does.",
    bullets: [
      'Fixed monthly price scoped to your call volume.',
      'Goes live on your existing business number.',
      'Pay-Back-Or-We-Keep-Building guarantee.',
      'Written ROI projection within 48 hours of your free audit.',
    ],
  },

  miniCase: {
    client: 'Northgate Plumbing & Heating',
    monogram: 'NP',
    metric: '£4,100/mo',
    metricLabel: 'Recovered booked work',
    challenge:
      'A two-van trades firm sent every after-hours and on-the-job call to voicemail — and lost emergency work to whoever picked up first.',
    outcome:
      'The AI receptionist now answers every call, triages emergencies and books overnight — recovering around £4,100 of work a month that used to go to voicemail.',
    persona: { name: 'Gary Whitfield', role: 'Owner, Northgate Plumbing & Heating' },
  },

  faqs: [
    {
      q: 'Can an AI receptionist triage an electrical emergency?',
      a: 'Yes. It recognises urgent faults — total loss of power, a burning smell, a repeatedly tripping consumer unit — gathers the key detail and address, flags it as an emergency, and books or alerts you immediately so genuine callouts are never missed.',
    },
    {
      q: 'Does it handle after-hours and weekend calls?',
      a: 'That is where it earns its keep. Evening and weekend emergency calls are answered, triaged and logged 24/7, so out-of-hours electrical work stops ringing the next electrician on the list.',
    },
    {
      q: 'Will it work with my existing number?',
      a: 'Yes — it goes live on your current business number, so there is nothing for your customers to learn or dial differently.',
    },
    {
      q: 'Can it qualify EICR and rewire enquiries?',
      a: 'It captures the property type, scope and timing for EICRs, fuse-board upgrades and rewires, so the enquiries that reach you are already qualified and ready to quote.',
    },
    {
      q: 'How much does an AI receptionist cost for an electrician?',
      a: 'Pricing is fixed to your call volume rather than per minute. See our 2026 UK cost guide for the full breakdown, and book a free audit for a figure specific to your business.',
    },
  ],

  relatedLink: {
    label: 'See what an AI receptionist costs in the UK',
    href: '/ai-receptionist-cost-uk',
  },

  metadata: {
    title: 'AI Receptionist for UK Electricians | Raynaters Tech',
    description:
      'An AI receptionist for UK electricians — answers 24/7, triages faults, captures after-hours callouts and books jobs into your diary. Book a free Agent Audit.',
  },
};

export default page;
