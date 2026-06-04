import type { LandingPage } from '@/lib/landing-pages/types';

const page: LandingPage = {
  slug: 'ai-receptionist-for-trades-uk',
  primaryKeyword: 'ai receptionist for tradesmen',
  utmCampaign: 'ai-receptionist-for-trades-uk',
  serviceType: 'AI Receptionist',
  navLabel: 'AI Receptionist for Trades',
  navBlurb: 'Answer every call and book every job — even on the tools.',
  image: {
    src: 'https://d8j0ntlcm91z4.cloudfront.net/user_31J28LgsUCQmK5Ux97L8IuICZIM/hf_20260604_154957_621a8568-1959-40fb-92a5-1981ef7ca93d.png',
    alt: 'Skilled tradesperson engineer working on a modern boiler in a neat UK workshop with tools on workbench',
  },
  showcase: {
    eyebrow: 'How it works for trades',
    rows: [
      {
        title: 'Never lose a job to voicemail again',
        body: 'When you\'re on the tools, every unanswered call is a missed booking. Our AI receptionist answers instantly, qualifies the job, and books it straight into your diary.',
        image: { src: 'https://d8j0ntlcm91z4.cloudfront.net/user_31J28LgsUCQmK5Ux97L8IuICZIM/hf_20260604_155033_d675c0fa-3787-41d5-ad52-ac7e7b8d41f9.png', alt: 'AI receptionist dashboard showing active call transcript and appointment booking panel with confirmed jobs' },
      },
      {
        title: 'From missed call to confirmed booking in seconds',
        body: 'The agent captures job type, address and urgency, books into your schedule and sends the customer a confirmation — all before you\'ve finished your current job.',
        image: { src: 'https://d8j0ntlcm91z4.cloudfront.net/user_31J28LgsUCQmK5Ux97L8IuICZIM/hf_20260604_155039_5730193a-d2ee-4346-be52-d4dd0d05a2c3.png', alt: 'Automation pipeline showing missed calls turning into confirmed bookings with calendar slots filling up' },
      },
    ],
  },

  eyebrow: 'For UK Trades & Field-Service Businesses',
  h1: "AI receptionist for UK tradespeople who can't answer the phone on the job.",
  hook: "You didn't start a trade to answer the phone at 9pm. Our AI receptionist answers every call 24/7, books jobs straight into your diary, and captures the emergency work you'd otherwise miss.",

  directAnswer:
    "An AI receptionist for tradespeople answers every call 24/7, books jobs straight into your calendar, captures emergency and out-of-hours leads, and texts customers a confirmation — so plumbers, electricians and contractors stop losing work while they're under a sink or up a ladder.",

  headings: {
    whatItDoes: 'What your AI receptionist does on every call.',
    whoItsFor: 'Built for trades where a missed call is lost money.',
    comparison: 'Voicemail, a call centre, or an AI receptionist?',
  },

  whatItDoes: [
    {
      title: 'Answers every call, 24/7',
      body: 'No more voicemail. Every call is picked up instantly, day or night, in a natural voice that represents your business properly.',
    },
    {
      title: 'Books jobs into your diary',
      body: "It checks your availability, books the slot and logs the job details — so you turn up knowing exactly what you're walking into.",
    },
    {
      title: 'Captures emergency leads',
      body: "Out-of-hours and emergency callers are triaged and logged immediately, so the £2,000 boiler job doesn't ring the next plumber instead.",
    },
    {
      title: 'Texts confirmations & reminders',
      body: 'Customers get an instant SMS confirmation and a reminder before the visit — fewer no-shows, fewer "did you get my message?" calls.',
    },
  ],

  whoItsFor: [
    'Plumbers, electricians and gas engineers losing calls on the tools.',
    'One-van and small teams with no one to answer the phone.',
    'Emergency and out-of-hours trades leaking high-value jobs.',
    'Contractors paying for leads, then missing the call that follows.',
    'Anyone whose voicemail is quietly costing them bookings.',
  ],

  howItWorks: [
    {
      title: 'Agent Audit',
      body: "A free 30-minute call to look at your call volume, your diary and the jobs you're missing. Written ROI projection within 48 hours.",
    },
    {
      title: 'Fixed-scope build',
      body: 'We configure the receptionist to your services, pricing rules, availability and the way you qualify a job.',
    },
    {
      title: 'Deploy on your number',
      body: 'It goes live on your existing business number and calendar — no new apps for your customers to learn.',
    },
    {
      title: 'Measure & improve',
      body: 'We track booked jobs and captured leads and keep tuning until it pays for itself.',
    },
  ],

  comparison: {
    columns: ['', 'Voicemail', 'Call centre', 'AI receptionist'],
    highlightColumn: 3,
    rows: [
      { label: 'Answers 24/7', cells: [false, true, true] },
      { label: 'Knows your services & pricing', cells: [false, false, true] },
      { label: 'Books into your diary', cells: [false, 'Sometimes', true] },
      { label: 'Captures emergency jobs', cells: [false, true, true] },
      { label: 'Sounds like your business', cells: [false, false, true] },
      { label: 'Typical monthly cost', cells: ['Free', '£££', '££'] },
    ],
  },

  pricingROI: {
    headline: 'One booked job a week usually covers it.',
    body: "Pricing is fixed to your call volume, not a per-minute meter. For most trades, a single recovered job a week more than covers the cost — and if it hasn't paid for itself in 90 days, we keep building until it does.",
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
      'A two-van plumbing firm was sending every after-hours and on-the-job call to voicemail — and losing emergency boiler work to competitors who simply picked up.',
    outcome:
      'The AI receptionist now answers every call, triages emergencies and books jobs overnight — recovering around £4,100 of work a month that used to go to voicemail.',
    persona: { name: 'Gary Whitfield', role: 'Owner, Northgate Plumbing & Heating' },
  },

  extraSections: {
    eyebrow: 'By trade',
    title: 'Configured for your trade specifically.',
    intro: 'The receptionist is set up around the jobs, language and urgency of your trade — so it qualifies and books like someone who knows the work.',
    items: [
      {
        title: 'AI receptionist for plumbers',
        body: 'Triages leaks and boiler emergencies, captures out-of-hours callouts, and books routine work around your existing jobs.',
      },
      {
        title: 'AI receptionist for electricians',
        body: 'Handles fault callouts, EICR and rewire enquiries, qualifies the job, and books the right length of slot into your diary.',
      },
      {
        title: 'AI receptionist for HVAC & heating engineers',
        body: 'Captures no-heat emergencies, service-plan renewals and install quotes, and prioritises urgent jobs automatically.',
      },
      {
        title: 'AI receptionist for builders & contractors',
        body: 'Screens enquiries, captures project detail and timelines, and books site visits without you stopping work to take the call.',
      },
      {
        title: 'AI receptionist for landscapers & grounds',
        body: 'Handles seasonal demand spikes, qualifies maintenance vs one-off jobs, and books visits straight into your calendar.',
      },
    ],
  },

  faqs: [
    {
      q: 'Can an AI receptionist book jobs into my calendar?',
      a: 'Yes. It checks your live availability, books the slot, and writes the job details, customer and address into your calendar — so the booking is done by the time the call ends.',
    },
    {
      q: 'Does it handle emergency and out-of-hours calls?',
      a: 'That is exactly where it earns its keep. Calls at 9pm, on weekends or while you are on the tools are answered, triaged for urgency, and logged or booked immediately — so emergency work stops going to whoever picks up first.',
    },
    {
      q: 'Will my customers know it is AI?',
      a: 'It answers in a natural, professional voice and represents your business by name. Most callers simply feel they got through to a helpful receptionist. We tune the tone and script to match how you want your business to sound.',
    },
    {
      q: 'Does it work with my existing phone number?',
      a: 'Yes — it goes live on your current business number, so there is nothing for your customers to learn or dial differently.',
    },
    {
      q: "What happens if it can't answer a question?",
      a: 'It captures the caller, the job detail and a callback time, and routes anything it should not handle straight to you — so you never lose the lead, you just skip the time-wasting calls.',
    },
    {
      q: 'How much does an AI receptionist cost for a trades business?',
      a: 'Pricing is fixed to your call volume rather than per minute. For a full breakdown of UK pricing and what drives it, see our 2026 cost guide — and book a free audit for a number specific to your business.',
    },
  ],

  metadata: {
    title: 'AI Receptionist for UK Trades & Plumbers | Raynaters Tech',
    description:
      'An AI receptionist for UK plumbers, electricians and trades — answers every call 24/7, books jobs and captures emergencies. Book a free Agent Audit.',
  },
};

export default page;
