import type { LandingPage } from '@/lib/landing-pages/types';

const page: LandingPage = {
  slug: 'ai-receptionist-for-dentists-uk',
  primaryKeyword: 'ai receptionist for dentists uk',
  utmCampaign: 'ai-receptionist-for-dentists-uk',
  serviceType: 'AI Receptionist',
  navLabel: 'AI Receptionist for Dentists',
  navBlurb: 'Answer every call, book NHS & private, handle recalls.',
  image: {
    src: 'https://d8j0ntlcm91z4.cloudfront.net/user_31J28LgsUCQmK5Ux97L8IuICZIM/hf_20260604_155016_1fda9728-add8-412e-b9d7-c657d093d44d.png',
    alt: 'Modern UK dental practice surgery with a dental chair and clinical equipment, front desk unattended',
  },

  eyebrow: 'For UK Dental Practices',
  h1: 'AI receptionist for UK dental practices.',
  hook: 'At peak times a third of calls hit voicemail and would-be new patients ring the practice down the road. Our AI receptionist answers every call 24/7, books NHS and private appointments, and handles recalls and reschedules.',

  directAnswer:
    'An AI receptionist for dental practices answers every call 24/7, books NHS and private appointments into your practice software, handles recalls and reschedules, and captures new-patient enquiries out of hours — so your front desk can focus on patients in the chair instead of a ringing phone.',

  headings: {
    whatItDoes: 'What your AI receptionist does for the practice.',
    whoItsFor: 'Built for dental practices losing new patients to voicemail.',
    comparison: 'Voicemail, a call centre, or an AI receptionist?',
  },

  whatItDoes: [
    {
      title: 'Books NHS & private appointments',
      body: 'It books, moves and confirms appointments in your practice software, handling the difference between NHS and private booking rules.',
    },
    {
      title: 'Handles recalls & reminders',
      body: 'Six-month checks, hygiene recalls and reminders go out automatically, keeping chairs full and patients on schedule.',
    },
    {
      title: 'Captures new patients 24/7',
      body: 'New-patient enquiries after hours and at peak times are answered and booked instead of lost to a competitor with a live line.',
    },
    {
      title: 'Answers treatment & cost questions',
      body: 'Common questions about treatments, availability and indicative private pricing are answered consistently, then turned into a booking.',
    },
  ],

  whoItsFor: [
    'NHS and private dental practices missing calls at peak times.',
    'Multi-site practices with front desks that can’t keep up.',
    'Practices losing new patients to faster-answering competitors.',
    'Teams spending the day on recalls, reminders and reschedules.',
    'Principals who want every new-patient enquiry captured.',
  ],

  howItWorks: [
    {
      title: 'Agent Audit',
      body: 'A free 30-minute call to look at your call volume, recalls and missed new-patient enquiries. Written ROI projection within 48 hours.',
    },
    {
      title: 'Fixed-scope build',
      body: 'We configure the receptionist to your treatments, NHS and private rules, clinicians and practice software.',
    },
    {
      title: 'Deploy on your number',
      body: 'It goes live on your existing practice number and calendar, with patient data handled securely.',
    },
    {
      title: 'Measure & improve',
      body: 'We track captured new patients and booked appointments and keep tuning until it pays for itself.',
    },
  ],

  comparison: {
    columns: ['', 'Voicemail', 'Call centre', 'AI receptionist'],
    highlightColumn: 3,
    rows: [
      { label: 'Answers 24/7', cells: [false, true, true] },
      { label: 'Books NHS & private appointments', cells: [false, 'Sometimes', true] },
      { label: 'Handles recalls & reminders', cells: [false, false, true] },
      { label: 'Captures new patients out of hours', cells: [false, false, true] },
      { label: 'Sounds like your practice', cells: [false, false, true] },
      { label: 'Typical monthly cost', cells: ['Free', '£££', '££'] },
    ],
  },

  pricingROI: {
    headline: 'A handful of new patients a month covers it.',
    body: "Pricing is fixed to your call volume, not a per-minute meter. With the lifetime value of a single new patient, a few recovered registrations a month more than covers the cost — and if it hasn't paid for itself in 90 days, we keep building until it does.",
    bullets: [
      'Fixed monthly price scoped to your call volume.',
      'Books into your existing practice software.',
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
      'A two-site dental practice missed roughly a third of calls at peak times, sending new patients to voicemail and often to a competitor.',
    outcome:
      'An AI receptionist now answers every call, books and reschedules around the clock, and captures out-of-hours enquiries — lifting captured new-patient bookings by 22%.',
    persona: { name: 'Hannah Clarke', role: 'Practice Manager, Riverside Dental' },
  },

  faqs: [
    {
      q: 'Can an AI receptionist book both NHS and private appointments?',
      a: 'Yes. It books, moves and confirms appointments in your practice software and follows your rules for NHS versus private slots, so the right patient gets the right appointment type.',
    },
    {
      q: 'Does it handle recalls and reminders?',
      a: 'It runs six-month checks, hygiene recalls and appointment reminders automatically, keeping chairs full and reducing no-shows without front-desk effort.',
    },
    {
      q: 'How does it keep patient data safe?',
      a: 'It runs on infrastructure you control and is configured to handle patient information securely and in line with GDPR, so sensitive data stays within systems you own.',
    },
    {
      q: 'Will it work with my existing practice number and software?',
      a: 'Yes — it goes live on your current practice number and integrates with the booking software you already use, so there is nothing new for patients to learn.',
    },
    {
      q: 'How much does an AI receptionist cost for a dental practice?',
      a: 'Pricing is fixed to your call volume rather than per minute. See our 2026 UK cost guide for the breakdown and book a free audit for a figure specific to your practice.',
    },
  ],

  relatedLink: {
    label: 'See our AI receptionist for clinics',
    href: '/ai-receptionist-for-clinics-uk',
  },

  metadata: {
    title: 'AI Receptionist for UK Dental Practices | Raynaters Tech',
    description:
      'An AI receptionist for UK dentists — answers 24/7, books NHS and private appointments, handles recalls and captures new patients. Book a free Agent Audit.',
  },
};

export default page;
