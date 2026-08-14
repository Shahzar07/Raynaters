import Link from 'next/link';

export const metadata = {
  title: 'Terms of Service',
  description: 'The terms that apply when you use Raynaters Tech services and website.',
};

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-bg text-text-primary">
      <div className="mx-auto flex max-w-3xl flex-col gap-10 px-6 py-16 sm:px-8 md:py-24">
        <Link href="/" className="text-sm text-text-secondary transition-colors hover:text-text-primary">← Back to Raynaters</Link>
        <header className="flex flex-col gap-4">
          <p className="text-xs uppercase tracking-[0.2em] text-text-muted">Legal</p>
          <h1 className="font-display text-5xl tracking-[-0.04em] text-balance sm:text-6xl">Terms of Service</h1>
          <p className="text-sm text-text-muted">Last updated: 15 August 2026</p>
        </header>
        <div className="flex flex-col gap-8 text-[15px] leading-7 text-text-secondary">
          <section><h2 className="mb-2 text-xl font-medium text-text-primary">Using this website</h2><p>This website is provided by Raynaters Tech Inc. for general information about our services. You may use it lawfully and must not interfere with the website, misuse our systems, or copy our materials without permission.</p></section>
          <section><h2 className="mb-2 text-xl font-medium text-text-primary">Services and proposals</h2><p>Our AI automation services are scoped in a written proposal or statement of work. A discovery call, audit, estimate, or website content is not a binding commitment to deliver services. Any timeline, price, deliverable, support period, or guarantee applies only when stated in the signed agreement.</p></section>
          <section><h2 className="mb-2 text-xl font-medium text-text-primary">Your responsibilities</h2><p>You are responsible for providing accurate information, appropriate access to systems you own or control, and the authority to instruct us. You remain responsible for reviewing outputs, making business decisions, and complying with laws and third-party platform terms.</p></section>
          <section><h2 className="mb-2 text-xl font-medium text-text-primary">Intellectual property</h2><p>Each party keeps ownership of materials it owned before a project. Unless a signed agreement says otherwise, you receive the agreed rights to project-specific deliverables after payment, while Raynaters retains rights in its methods, templates, reusable components, and know-how.</p></section>
          <section><h2 className="mb-2 text-xl font-medium text-text-primary">No guaranteed results</h2><p>We build systems designed to improve efficiency and revenue operations, but outcomes depend on your data, processes, team, and external tools. Website information is not financial, legal, or professional advice. Our liability and any service-specific guarantee are governed by the applicable written agreement.</p></section>
          <section><h2 className="mb-2 text-xl font-medium text-text-primary">Contact</h2><p>Questions about these terms can be sent to <a className="text-accent hover:underline" href="mailto:team@raynaters.tech">team@raynaters.tech</a>.</p></section>
        </div>
      </div>
    </main>
  );
}
