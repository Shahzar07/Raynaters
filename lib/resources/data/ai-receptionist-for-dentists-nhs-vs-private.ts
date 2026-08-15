import type { Resource } from '@/lib/resources/types';

const resource: Resource = {
  slug: 'ai-receptionist-for-dentists-nhs-vs-private',
  category: 'Industry',
  title: 'AI receptionist for dentists: handling NHS vs private bookings',
  excerpt:
    'How an AI receptionist manages the difference between NHS and private dental bookings — eligibility, recalls and new-patient capture — without overwhelming the front desk.',
  readingTime: '7 min',
  datePublished: '2026-05-06',
  dateModified: '2026-06-20',
  featured: false,

  directAnswer:
    'An AI receptionist for a dental practice handles NHS and private bookings by following your rules for each: it checks which type the caller needs, books into the right slots in your practice software, manages recalls and reminders, and captures new-patient enquiries 24/7 — so the front desk isn’t buried under the phone at peak times.',

  body: [
    {
      type: 'p',
      text: 'Dental reception is uniquely demanding. The phone never stops, every caller wants something specific, and the NHS-versus-private distinction shapes almost every booking. An AI receptionist can take that load off the front desk — but only if it handles both pathways properly. Here’s how it works in practice.',
    },
    { type: 'h2', text: 'Routing NHS vs private from the first question' },
    {
      type: 'p',
      text: 'The agent establishes early whether the caller is asking about NHS or private treatment, and whether they’re a new or existing patient. From there it follows your practice’s rules — NHS availability and eligibility on one path, private slots and indicative pricing on the other — and books into the correct appointment type in your software.',
    },
    { type: 'h2', text: 'New-patient capture, around the clock' },
    {
      type: 'p',
      text: 'New patients are the lifeblood of a practice and the easiest to lose. When NHS lists are open, demand spikes; when they’re closed, private enquiries still come in at all hours. The agent answers every one, explains current availability honestly, and books or waitlists the patient — instead of sending a high-value new registration to voicemail and a competitor.',
    },
    { type: 'h2', text: 'Recalls, reminders and reschedules' },
    {
      type: 'p',
      text: 'Beyond new bookings, the day-to-day grind is recalls and reschedules. The agent runs six-month check reminders and hygiene recalls automatically, handles reschedule requests in real time, and keeps the diary full — work that otherwise eats hours of front-desk time.',
    },
    { type: 'h2', text: 'What it does not do' },
    {
      type: 'ul',
      items: [
        'It doesn’t give clinical or treatment advice — those calls are routed to your team.',
        'It doesn’t guess on eligibility or pricing — it follows the rules you set.',
        'It doesn’t replace your reception team — it removes the phone pressure so they can focus on patients in the practice.',
      ],
    },
    { type: 'h2', text: 'Keeping patient data safe' },
    {
      type: 'p',
      text: 'Dental calls involve personal and sometimes health information, so data handling matters. The agent runs on infrastructure you control and is configured to handle patient data securely and in line with GDPR — a point worth covering in your free audit.',
    },
    {
      type: 'callout',
      text: 'Run a practice and tired of the phones winning? A free 30-minute Agent Audit shows how an AI receptionist would handle your NHS and private booking flows — with a written projection within 48 hours.',
    },
  ],

  faqs: [
    {
      q: 'Can an AI receptionist handle both NHS and private dental bookings?',
      a: 'Yes. It establishes which the caller needs, follows your practice’s rules for each, and books into the correct appointment type in your software — managing eligibility, availability and indicative private pricing the way you’ve configured it.',
    },
    {
      q: 'Will it capture new patients when our NHS list is closed?',
      a: 'It answers every enquiry honestly about current availability, books or waitlists where it can, and captures private new-patient interest 24/7 — so high-value registrations aren’t lost to voicemail.',
    },
    {
      q: 'Does it give patients clinical advice?',
      a: 'No. It handles booking, recalls and routine questions, and routes anything clinical or sensitive to your team, with the context captured so the handover is smooth.',
    },
  ],

  related: [
    { label: 'AI receptionist for UK dental practices', href: '/ai-receptionist-for-dentists-uk' },
    { label: 'GDPR and AI call handling in the UK', href: '/resources/gdpr-ai-call-handling-uk' },
  ],

  metadata: {
    title: 'AI Receptionist for Dentists: NHS vs Private Bookings',
    description:
      'How an AI receptionist handles NHS and private dental bookings — eligibility, recalls and 24/7 new-patient capture — without overwhelming the front desk.',
  },
};

export default resource;
