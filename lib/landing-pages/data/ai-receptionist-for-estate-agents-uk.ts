import type { LandingPage } from '@/lib/landing-pages/types';

const page: LandingPage = {
  slug: 'ai-receptionist-for-estate-agents-uk',
  primaryKeyword: 'ai receptionist for estate agents uk',
  utmCampaign: 'ai-receptionist-for-estate-agents-uk',
  serviceType: 'AI Receptionist',
  navLabel: 'AI Receptionist for Estate & Letting Agents',
  navBlurb: 'Book viewings, qualify applicants and catch portal enquiries.',
  image: {
    src: 'https://d8j0ntlcm91z4.cloudfront.net/user_31J28LgsUCQmK5Ux97L8IuICZIM/hf_20260604_155023_7bcdc43e-2ce8-44d4-b022-e46c6233b9d9.png',
    alt: 'UK estate and lettings agency office with screens showing property listings and a busy enquiry pipeline',
  },

  eyebrow: 'For UK Estate & Letting Agents',
  h1: 'AI receptionist for UK estate & letting agents.',
  hook: 'Portal leads go cold in minutes and viewings get missed while your team is out on appointments. Our AI receptionist answers every call and enquiry 24/7, qualifies the applicant, and books the viewing before the lead cools.',

  directAnswer:
    'An AI receptionist for estate and letting agents answers every call and portal enquiry 24/7, qualifies applicants and buyers, books viewings into your diary, and captures out-of-hours leads from Rightmove and Zoopla — so enquiries stop going cold while your negotiators are out on appointments.',

  headings: {
    whatItDoes: 'What your AI receptionist does for every enquiry.',
    whoItsFor: 'Built for agencies losing leads to slow follow-up.',
    comparison: 'Voicemail, a call centre, or an AI receptionist?',
  },

  whatItDoes: [
    {
      title: 'Books viewings 24/7',
      body: 'Buyers and tenants book viewings around your diary at any hour, with the property, time and contact captured automatically.',
    },
    {
      title: 'Qualifies applicants',
      body: 'Budget, position, chain, move date and pet/affordability criteria are captured up front, so negotiators only spend time on real prospects.',
    },
    {
      title: 'Catches portal enquiries',
      body: 'Out-of-hours Rightmove and Zoopla enquiries are answered and qualified in minutes, not the next morning when the lead has moved on.',
    },
    {
      title: 'Routes the right enquiry to the right team',
      body: 'Sales, lettings, maintenance and vendor calls are triaged and routed — with maintenance issues logged for property management.',
    },
  ],

  whoItsFor: [
    'Independent estate agents competing with corporate response times.',
    'Letting agents drowning in applicant and maintenance calls.',
    'Agencies paying for portal leads, then missing the call that follows.',
    'Branches whose phones go unanswered while staff are out on viewings.',
    'Property managers losing evenings to out-of-hours tenant calls.',
  ],

  howItWorks: [
    {
      title: 'Agent Audit',
      body: 'A free 30-minute call to look at your enquiry volume, portals and where leads go cold. Written ROI projection within 48 hours.',
    },
    {
      title: 'Fixed-scope build',
      body: 'We configure the receptionist to your stock, applicant criteria, viewing rules and how you route sales vs lettings.',
    },
    {
      title: 'Deploy on your number',
      body: 'It goes live on your branch number and calendar, integrated with the way you already work.',
    },
    {
      title: 'Measure & improve',
      body: 'We track booked viewings and qualified applicants and keep tuning until it pays for itself.',
    },
  ],

  comparison: {
    columns: ['', 'Voicemail', 'Call centre', 'AI receptionist'],
    highlightColumn: 3,
    rows: [
      { label: 'Answers 24/7', cells: [false, true, true] },
      { label: 'Books viewings into your diary', cells: [false, 'Sometimes', true] },
      { label: 'Qualifies applicants', cells: [false, false, true] },
      { label: 'Catches portal enquiries instantly', cells: [false, false, true] },
      { label: 'Sounds like your branch', cells: [false, false, true] },
      { label: 'Typical monthly cost', cells: ['Free', '£££', '££'] },
    ],
  },

  pricingROI: {
    headline: 'One extra completed let or sale pays for the year.',
    body: "Pricing is fixed to your enquiry volume, not a per-minute meter. In a market where speed-to-lead wins instructions, a single recovered viewing or applicant can cover months — and if it hasn't paid for itself in 90 days, we keep building until it does.",
    bullets: [
      'Fixed monthly price scoped to your enquiry volume.',
      'Books viewings and qualifies applicants automatically.',
      'Pay-Back-Or-We-Keep-Building guarantee.',
      'Written ROI projection within 48 hours of your free audit.',
    ],
  },

  miniCase: {
    client: 'Brookline Lettings',
    monogram: 'BL',
    metric: '31 hrs/wk',
    metricLabel: 'Admin time reclaimed',
    challenge:
      'A lettings team lost a full day a week to referencing, document chasing and re-keying across three disconnected systems, delaying move-ins.',
    outcome:
      'An agent now runs referencing intake and document chasing end to end and keeps their systems in sync — reclaiming 31 hours a week for the team.',
    persona: { name: 'Daniel Pearce', role: 'Operations Director, Brookline Lettings' },
  },

  faqs: [
    {
      q: 'Can an AI receptionist book property viewings?',
      a: 'Yes. It checks your live availability, books the viewing for the right property and negotiator, and captures the applicant’s contact and position — so the booking is done before the call ends, day or night.',
    },
    {
      q: 'Does it qualify applicants and buyers?',
      a: 'It captures budget, position in the chain, move date and the criteria you care about up front, so your team only spends time on genuinely qualified prospects.',
    },
    {
      q: 'Can it handle out-of-hours portal enquiries?',
      a: 'Yes. Evening and weekend enquiries from Rightmove, Zoopla and your own site are answered and qualified in minutes, instead of waiting until the next working day when the lead has gone elsewhere.',
    },
    {
      q: 'Will it work for both sales and lettings?',
      a: 'It triages and routes sales, lettings, maintenance and vendor calls separately, logging maintenance issues for property management and passing hot vendor or buyer calls to the right person.',
    },
    {
      q: 'How much does it cost for an agency?',
      a: 'Pricing is fixed to your enquiry volume rather than per minute. See our 2026 UK cost guide for the breakdown and book a free audit for a figure specific to your branch.',
    },
  ],

  relatedLink: {
    label: 'Read the Brookline Lettings case study',
    href: '/case-studies/brookline-lettings',
  },

  metadata: {
    title: 'AI Receptionist for UK Estate & Letting Agents | Raynaters',
    description:
      'An AI receptionist for UK estate and letting agents — books viewings, qualifies applicants and catches portal enquiries 24/7. Book a free Agent Audit.',
  },
};

export default page;
