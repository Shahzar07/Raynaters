import Image from 'next/image';
import Link from 'next/link';
import { CONTENT } from '@/lib/content';
import { Container } from '@/components/ui/Container';
import { LANDING_PAGES } from '@/lib/landing-pages';

const solutionsColumn = {
  label: 'Solutions',
  links: LANDING_PAGES.map((p) => ({ label: p.navLabel, href: `/${p.slug}` })),
};

function Logo() {
  return (
    <div className="flex items-center gap-3">
      <Image
        src="/raynaters-logo.png"
        alt="Raynaters Inc."
        width={56}
        height={56}
        className="h-12 w-12 rounded-[10px] border border-border object-cover"
      />
      <span className="text-[15px] tracking-[-0.01em] text-text-primary font-medium">
        Raynaters
        <span className="text-text-muted"> Inc.</span>
      </span>
    </div>
  );
}

export default function Footer() {
  return (
    <footer id="footer" className="bg-bg pt-16 pb-10 sm:pt-20 sm:pb-12 md:pt-28">
      <Container>
        {/* Big tagline as the visual anchor */}
        <div className="grid grid-cols-1 gap-10 sm:gap-12 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-4">
            <Logo />
            <p className="font-display mt-6 sm:mt-8 max-w-[18ch] text-balance text-[32px] leading-[1.08] tracking-[-0.03em] text-text-primary sm:text-[40px] md:text-[52px] md:leading-[1.02]">
              {CONTENT.footer.tagline}
            </p>
          </div>

          <div className="md:col-span-8">
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-6">
              {[solutionsColumn, ...CONTENT.footer.columns].map((col) => (
                <div key={col.label}>
                  <p className="text-[11px] sm:text-[12px] uppercase tracking-[0.18em] text-text-muted">
                    {col.label}
                  </p>
                  <ul className="mt-4 sm:mt-5 space-y-3">
                    {col.links.map((l) => (
                      <li key={l.label}>
                        <Link
                          href={l.href}
                          className="text-[13px] sm:text-[14px] text-text-secondary hover:text-text-primary transition-colors break-words"
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
        <div className="mt-12 sm:mt-16 border-t border-border pt-6 sm:pt-8 md:mt-24">
          <div className="flex flex-col items-start justify-between gap-3 sm:gap-4 text-[11px] sm:text-[12px] text-text-muted md:flex-row md:items-center">
            <p>{CONTENT.footer.copyright}</p>
            <p className="uppercase tracking-[0.18em]">
              Made in the UK · shipping worldwide
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
