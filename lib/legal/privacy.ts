import type { LegalDoc } from './types';

// TODO(shahzar): add the registered company number and registered office
// address once confirmed, and have a solicitor review before relying on this
// for a regulated engagement.

const privacy: LegalDoc = {
  title: 'Privacy Policy',
  intro:
    'This policy explains what personal information Raynaters Tech Inc. collects when you use this website or work with us, why we collect it, how we look after it, and the rights you have over it.',
  lastUpdated: '2026-08-15',
  sections: [
    {
      heading: 'Who we are',
      body: [
        'Raynaters Tech Inc. ("Raynaters Tech", "we", "us") builds AI systems and automation for service businesses across the United Kingdom and Australia. For the purposes of UK data protection law we are the data controller for the personal information described in this policy.',
        'If you have any question about this policy or about how we handle your information, contact us at team@raynaters.tech and we will respond within a reasonable period.',
      ],
    },
    {
      heading: 'Information we collect',
      body: [
        'We only collect what we need in order to answer your enquiry, run a booked session, deliver an engagement, and keep the website working properly.',
      ],
      bullets: [
        'Information you give us — your name, email address, phone number, company name and anything else you choose to include when you complete a form on this site or book a session with us.',
        'Booking information — when you book a session, our scheduling provider collects the details needed to arrange and confirm the meeting.',
        'Usage information — pages visited, approximate location, device and browser type, and how you arrived at the site, collected through analytics.',
        'Communications — the content of emails, messages and call notes exchanged with us, so we have a record of what was discussed and agreed.',
      ],
    },
    {
      heading: 'How we use your information',
      bullets: [
        'To respond to enquiries and arrange, run and follow up the sessions you book with us.',
        'To prepare the written ROI projection and any proposal that follows a session.',
        'To deliver, support and improve the systems we build for clients.',
        'To send service messages about work in progress, and — only where you have agreed, or where we are otherwise permitted — occasional relevant updates. You can opt out of marketing at any time.',
        'To understand how the website is used so we can improve it.',
        'To meet our legal, accounting and regulatory obligations.',
      ],
    },
    {
      heading: 'Our lawful bases',
      body: [
        'Where UK GDPR applies, we rely on the following lawful bases. We rely on your consent for optional cookies and for marketing email, and you may withdraw that consent at any time. We rely on the performance of a contract where processing is necessary to deliver work you have engaged us for, or to take steps at your request before entering into a contract.',
        'We rely on our legitimate interests to respond to business enquiries, to secure and improve our services, and to keep proper records — having considered that this does not override your rights. Finally, we rely on legal obligation where we are required to retain records, for example for tax purposes.',
      ],
    },
    {
      heading: 'Cookies and analytics',
      body: [
        'This site uses cookies and similar technologies. Strictly necessary cookies keep the site working and cannot be turned off. Analytics and advertising technologies help us understand how the site performs and how our campaigns are working.',
        'We use Google Analytics and Vercel Analytics to measure site usage, and the Meta Pixel to measure the performance of our advertising. These providers may set cookies and receive information about your visit, including your IP address. You can control cookies through your browser settings, and you can opt out of Google Analytics using the browser add-on Google provides.',
      ],
    },
    {
      heading: 'Who we share information with',
      body: [
        'We do not sell your personal information. We share it only with service providers who help us operate the business, and only as far as they need it to perform their role. These include our website host, scheduling provider, form provider, email provider, analytics and advertising providers, and the AI platforms that power features on this site.',
        'We may also disclose information where we are required to do so by law, or where it is necessary to establish, exercise or defend legal claims. If our business is ever sold or reorganised, information may transfer as part of that transaction.',
      ],
    },
    {
      heading: 'International transfers',
      body: [
        'Some of our providers are based outside the United Kingdom, including in the United States. Where information is transferred outside the UK, we take steps to ensure it remains protected — for example by relying on approved transfer mechanisms such as the UK International Data Transfer Agreement or Addendum, or on a finding of adequacy.',
      ],
    },
    {
      heading: 'How long we keep it',
      body: [
        'We keep enquiry and session records for as long as needed to deal with the enquiry and for a reasonable period afterwards, in case you come back to us. Client records are kept for the duration of the engagement and then for as long as we are required to retain them for legal, tax and accounting purposes. When information is no longer needed we delete it or anonymise it.',
      ],
    },
    {
      heading: 'Your rights',
      body: [
        'Depending on where you live, you have rights over your personal information. In the UK these include the right to be told what we hold and to receive a copy of it, the right to have inaccurate information corrected, and the right to ask us to delete it in certain circumstances.',
        'You may also object to or ask us to restrict certain processing, ask us to transfer information to another provider where that right applies, and withdraw consent at any time where we rely on it.',
        'To exercise any of these rights, email team@raynaters.tech. If you are unhappy with how we have handled your information you can complain to the UK Information Commissioner’s Office at ico.org.uk. If you are in Australia, you may complain to the Office of the Australian Information Commissioner at oaic.gov.au.',
      ],
    },
    {
      heading: 'Australian visitors',
      body: [
        'Where the Australian Privacy Principles apply to our handling of your information, we will handle it in line with those principles, including in relation to how we collect it, how we use and disclose it, how we keep it secure, and how you can access and correct it.',
      ],
    },
    {
      heading: 'Keeping information secure',
      body: [
        'We use appropriate technical and organisational measures to protect personal information, including access controls and encryption in transit. No method of transmission or storage is completely secure, but we take the security of your information seriously and limit access to those who need it.',
      ],
    },
    {
      heading: 'Children',
      body: [
        'This website and our services are intended for businesses. We do not knowingly collect personal information from children. If you believe a child has provided us with information, contact us and we will delete it.',
      ],
    },
    {
      heading: 'Changes to this policy',
      body: [
        'We may update this policy from time to time. When we do, we will change the date shown at the top of this page. If the changes are significant, we will take reasonable steps to bring them to your attention.',
      ],
    },
  ],
  metadata: {
    title: 'Privacy Policy | Raynaters Tech',
    description:
      'How Raynaters Tech collects, uses and protects your personal information, the lawful bases we rely on, and the rights you have over your data.',
  },
};

export default privacy;
