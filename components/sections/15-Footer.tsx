import Image from 'next/image';
import Link from 'next/link';
import { CONTENT } from '@/lib/content';
import { Container } from '@/components/ui/Container';
import { MENU_GROUPS } from '@/lib/landing-pages';
import { RESOURCES } from '@/lib/resources';

type FooterLink = { label: string; href: string };

// Mirror the header mega-menu groups: industries in one column,
// pricing/comparison + hub pages in another.
const INDUSTRY_LINKS: FooterLink[] = (MENU_GROUPS[0]?.items ?? []).map((p) => ({
  label: p.navLabel
    .replace(/^AI Receptionist for /, '')
    .replace(/^AI Automation for /, ''),
  href: `/${p.slug}`,
}));

const PRICING_GUIDE_LINKS: FooterLink[] = [
  ...(MENU_GROUPS[1]?.items ?? []),
  ...(MENU_GROUPS[2]?.items ?? []),
].map((p) => ({ label: p.navLabel, href: `/${p.slug}` }));

const COMPANY_LINKS: FooterLink[] = [
  { label: 'How it works', href: '/#evolution' },
  { label: 'What we build', href: '/#industry' },
  { label: 'About', href: '/about' },
  { label: 'Case studies', href: '/case-studies' },
  { label: 'Guarantee', href: '/#guarantee' },
  { label: 'FAQ', href: '/#faq' },
];

const RESOURCE_LINKS: FooterLink[] = [
  { label: 'All resources', href: '/resources' },
  ...RESOURCES.map((r) => ({ label: r.title, href: `/resources/${r.slug}` })),
];

const CONNECT_LINKS: FooterLink[] = [
  { label: 'Book a free audit', href: '/book' },
  { label: 'team@raynaters.tech', href: 'mailto:team@raynaters.tech' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/raynaters-tech-inc-7830a0383/' },
];

const FOOTER_COLUMNS: { label: string; links: FooterLink[] }[] = [
  { label: 'Industries', links: INDUSTRY_LINKS },
  { label: 'Pricing & guides', links: PRICING_GUIDE_LINKS },
  { label: 'Company', links: COMPANY_LINKS },
  { label: 'Resources', links: RESOURCE_LINKS },
  { label: 'Connect', links: CONNECT_LINKS },
];

function Logo() {
  return (
    <div className="flex items-center gap-3">
      <span className="grid h-12 w-12 place-items-center rounded-[12px] bg-accent">
        <Image
          src="/raynaters-mark.png"
          alt="Raynaters Inc."
          width={40}
          height={40}
          className="h-9 w-9"
        />
      </span>
      <span className="text-[15px] tracking-[-0.01em] text-text-primary font-medium">
        Raynaters
        <span className="text-text-muted"> Inc.</span>
      </span>
    </div>
  );
}

export default function Footer() {
  return (
    <footer id="footer" className="bg-bg pt-20 pb-12 md:pt-28">
      <Container>
        {/* Big tagline as the visual anchor */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-4">
            <Logo />
            <p className="font-display mt-8 max-w-[16ch] text-[30px] leading-[1.05] tracking-[-0.03em] text-text-primary sm:text-[36px] md:text-[44px] md:leading-[1.05]">
              {CONTENT.footer.tagline}
            </p>
          </div>

          <div className="md:col-span-8">
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5">
              {FOOTER_COLUMNS.map((col) => (
                <div key={col.label}>
                  <p className="text-[12px] uppercase tracking-[0.18em] text-text-muted">
                    {col.label}
                  </p>
                  <ul className="mt-5 space-y-3">
                    {col.links.map((l) => (
                      <li key={l.label}>
                        <Link
                          href={l.href}
                          className="text-[14px] leading-snug text-text-secondary hover:text-text-primary transition-colors"
                        >
                          {l.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Hairline divider */}
        <div className="mt-16 border-t border-border pt-8 md:mt-24">
          <div className="flex flex-col items-start justify-between gap-4 text-[12px] text-text-muted md:flex-row md:items-center">
            <p>{CONTENT.footer.copyright}</p>
            <div className="flex items-center gap-5">
              <Link href="/#" className="hover:text-text-primary transition-colors">Privacy</Link>
              <Link href="/#" className="hover:text-text-primary transition-colors">Terms</Link>
              <span className="uppercase tracking-[0.18em]">Made in the UK</span>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
