import type { LandingPage } from '@/lib/landing-pages/types';

const page: LandingPage = {
  slug: 'ai-receptionist-for-salons-uk',
  primaryKeyword: 'ai receptionist for salons uk',
  utmCampaign: 'ai-receptionist-for-salons-uk',
  serviceType: 'AI Receptionist',
  navLabel: 'AI Receptionist for Salons',
  navBlurb: 'Book appointments while your team is with clients.',
  image: {
    src: 'https://d8j0ntlcm91z4.cloudfront.net/user_31J28LgsUCQmK5Ux97L8IuICZIM/hf_20260709_185113_8290cb86-e188-46cb-a80a-1133e407c2ce.png',
    alt: 'Practitioner preparing a treatment room in a premium salon and aesthetics clinic',
  },

  eyebrow: 'For UK Hair & Beauty Salons',
  h1: 'AI receptionist for UK hair & beauty salons.',
  hook: "Your stylists are with clients, not on the phone — so calls go unanswered and bookings slip to the salon down the road. Our AI receptionist answers 24/7, books and reschedules appointments, and handles price questions without interrupting the chair.",

  directAnswer:
    'An AI receptionist for salons answers every call 24/7, books and reschedules appointments straight into your salon software, handles price and availability questions, and fills cancellations — so stylists stay with clients while every enquiry still turns into a booking.',

  headings: {
    whatItDoes: 'What your AI receptionist does for the salon.',
    whoItsFor: 'Built for salons where the chair comes first.',
    comparison: 'Voicemail, a call centre, or an AI receptionist?',
  },

  whatItDoes: [
    {
      title: 'Books while stylists work',
      body: 'Clients book, move and confirm appointments at any hour without a stylist stepping away from the chair to answer the phone.',
    },
    {
      title: 'Fills cancellations',
      body: 'When a slot opens up, the agent offers it to waitlisted clients automatically, so last-minute gaps get filled instead of lost.',
    },
    {
      title: 'Answers price & service questions',
      body: 'Colour, cut, extensions, treatments and pricing questions are answered consistently and on-brand, then turned into a booking.',
    },
    {
      title: 'Cuts no-shows',
      body: 'Automatic confirmations and reminders — with deposit prompts where you want them — keep the diary tight and protect revenue.',
    },
  ],

  whoItsFor: [
    'Hair salons where stylists can’t break away to take calls.',
    'Beauty and nail bars losing bookings to missed calls.',
    'Barbershops fielding constant “are you free now?” enquiries.',
    'Multi-chair and multi-site salons with phones nobody owns.',
    'Owners losing evenings to rebooking and reminder texts.',
  ],

  howItWorks: [
    {
      title: 'Agent Audit',
      body: 'A free 30-minute call to look at your call volume, diary and the bookings you miss. Written ROI projection within 48 hours.',
    },
    {
      title: 'Fixed-scope build',
      body: 'We configure the receptionist to your services, prices, stylists and the way you run the diary and deposits.',
    },
    {
      title: 'Deploy on your number',
      body: 'It goes live on your existing salon number and booking software — nothing new for your clients to learn.',
    },
    {
      title: 'Measure & improve',
      body: 'We track booked appointments and filled cancellations and keep tuning until it pays for itself.',
    },
  ],

  comparison: {
    columns: ['', 'Voicemail', 'Call centre', 'AI receptionist'],
    highlightColumn: 3,
    rows: [
      { label: 'Answers 24/7', cells: [false, true, true] },
      { label: 'Books into your salon software', cells: [false, false, true] },
      { label: 'Fills cancellations from a waitlist', cells: [false, false, true] },
      { label: 'Answers pricing questions', cells: [false, 'Sometimes', true] },
      { label: 'Sounds like your salon', cells: [false, false, true] },
      { label: 'Typical monthly cost', cells: ['Free', '£££', '££'] },
    ],
  },

  pricingROI: {
    headline: 'A few recovered bookings a week covers it.',
    body: "Pricing is fixed to your call volume, not a per-minute meter. For most salons a handful of recovered bookings and filled cancellations a week more than covers the cost — and if it hasn't paid for itself in 90 days, we keep building until it does.",
    bullets: [
      'Fixed monthly price scoped to your call volume.',
      'Books and reschedules in your existing salon software.',
      'Pay-Back-Or-We-Keep-Building guarantee.',
      'Written ROI projection within 48 hours of your free audit.',
    ],
  },

  miniCase: {
    client: 'Lumière Aesthetics',
    monogram: 'LA',
    metric: '+£6,800/mo',
    metricLabel: 'Booked treatments recovered',
    challenge:
      'A single-site beauty clinic could not answer calls or messages mid-treatment, and high-intent enquiries slipped to faster-responding competitors.',
    outcome:
      'An AI receptionist now answers instantly across phone and messages, books treatments and follows up with reminders — recovering around £6,800 of bookings a month.',
    persona: { name: 'Sophie Bennett', role: 'Clinic Owner, Lumière Aesthetics' },
  },

  faqs: [
    {
      q: 'Can an AI receptionist book into my salon software?',
      a: 'Yes. It checks live availability, books and reschedules straight into your existing salon booking system, and captures the service, stylist and client details — so the booking is complete by the time the call ends.',
    },
    {
      q: 'Can it fill last-minute cancellations?',
      a: 'When a slot opens, it offers it to waitlisted clients automatically and books the first to accept, so cancellations get filled instead of sitting empty.',
    },
    {
      q: 'Will it answer questions about prices and treatments?',
      a: 'It answers colour, cut, treatment and pricing questions consistently and on-brand, then turns the enquiry into a booking rather than leaving the client to ring around.',
    },
    {
      q: 'Will it work with my current phone number?',
      a: 'Yes — it goes live on your existing salon number, so there is nothing for your clients to learn or dial differently.',
    },
    {
      q: 'How much does an AI receptionist cost for a salon?',
      a: 'Pricing is fixed to your call volume rather than per minute. See our 2026 UK cost guide for the breakdown and book a free audit for a figure specific to your salon.',
    },
  ],

  relatedLink: {
    label: 'See what an AI receptionist costs in the UK',
    href: '/ai-receptionist-cost-uk',
  },

  metadata: {
    title: 'AI Receptionist for UK Hair & Beauty Salons | Raynaters',
    description:
      'An AI receptionist for UK salons — books appointments 24/7, fills cancellations and answers price questions while stylists stay with clients. Free Agent Audit.',
  },
};

export default page;
