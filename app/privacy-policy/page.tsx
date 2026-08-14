import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy',
  description: 'How Raynaters Tech collects, uses, and protects personal information.',
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-bg text-text-primary">
      <div className="mx-auto flex max-w-3xl flex-col gap-10 px-6 py-16 sm:px-8 md:py-24">
        <Link href="/" className="text-sm text-text-secondary transition-colors hover:text-text-primary">← Back to Raynaters</Link>
        <header className="flex flex-col gap-4">
          <p className="text-xs uppercase tracking-[0.2em] text-text-muted">Legal</p>
          <h1 className="font-display text-5xl tracking-[-0.04em] text-balance sm:text-6xl">Privacy Policy</h1>
          <p className="text-sm text-text-muted">Last updated: 15 August 2026</p>
        </header>
        <div className="flex flex-col gap-8 text-[15px] leading-7 text-text-secondary">
          <section><h2 className="mb-2 text-xl font-medium text-text-primary">Who we are</h2><p>Raynaters Tech Inc. (“Raynaters”, “we”, “us”) provides AI automation strategy, software, and implementation services. This policy explains how we handle personal information when you visit our website, contact us, or work with us.</p></section>
          <section><h2 className="mb-2 text-xl font-medium text-text-primary">Information we collect</h2><p>We may collect information you provide directly, including your name, work email, company details, project requirements, and information shared during an audit or consultation. We also collect limited technical information such as device, browser, approximate location, and pages visited.</p></section>
          <section><h2 className="mb-2 text-xl font-medium text-text-primary">How we use information</h2><p>We use information to respond to enquiries, provide audits and services, prepare proposals, improve our website, maintain security, and meet legal obligations. We do not sell personal information.</p></section>
          <section><h2 className="mb-2 text-xl font-medium text-text-primary">Service providers and retention</h2><p>We may use trusted providers for hosting, analytics, scheduling, email, and project delivery. They may process information only to provide services to us. We retain information only as long as reasonably necessary for the purpose collected, legal requirements, and legitimate business records.</p></section>
          <section><h2 className="mb-2 text-xl font-medium text-text-primary">Your choices and rights</h2><p>Depending on where you live, you may have rights to access, correct, delete, restrict, or object to our use of your personal information. To make a request, email <a className="text-accent hover:underline" href="mailto:team@raynaters.tech">team@raynaters.tech</a>. You can also disable cookies through your browser settings.</p></section>
          <section><h2 className="mb-2 text-xl font-medium text-text-primary">Contact</h2><p>Questions about this policy can be sent to team@raynaters.tech.</p></section>
        </div>
      </div>
    </main>
  );
}
