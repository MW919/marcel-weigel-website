import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';
import siteConfig from '@/lib/siteConfig';

export const metadata = {
  title: 'About — Architecture Experience',
  description: 'About Marcel Weigel — Enterprise Architect, Digital Strategy Leader, and Architecture Thinker.',
};

export default function AboutPage() {
  return (
    <section className="min-h-screen pt-32 pb-20 px-4 md:px-8">
      <div className="max-w-[900px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[0.7fr_1.3fr] gap-12 items-start">
          {/* Photo placeholder */}
          <AnimatedSection>
            <div className="w-full max-w-[300px] aspect-square mx-auto rounded-[20px] bg-gradient-to-br from-brand-card to-accent/[0.08] border border-accent/15 flex flex-col items-center justify-center animate-pulse-glow">
              <div className="w-[100px] h-[100px] rounded-full border-2 border-accent/25 flex items-center justify-center">
                <span className="font-heading text-[32px] font-extrabold bg-gradient-to-br from-accent-light to-accent bg-clip-text text-transparent">
                  MW
                </span>
              </div>
              <span className="mt-4 font-body text-[11px] tracking-[2px] uppercase text-brand-muted">
                Photo Placeholder
              </span>
            </div>
          </AnimatedSection>

          {/* Bio */}
          <div>
            <AnimatedSection>
              <span className="font-heading text-xs font-semibold tracking-[4px] uppercase text-accent-light block mb-2">
                ABOUT
              </span>
              <h1 className="font-heading text-[clamp(2rem,4vw,2.75rem)] font-extrabold mb-8">
                {siteConfig.about.headline.split('Thinking').map((part, i) =>
                  i === 0 ? (
                    <span key={i}>{part}<span className="text-accent-light">Thinking</span></span>
                  ) : part
                )}
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              {siteConfig.about.paragraphs.map((p, i) => (
                <p key={i} className="font-body text-base leading-[1.9] text-brand-muted mb-5">
                  {p}
                </p>
              ))}
            </AnimatedSection>

            <AnimatedSection delay={0.35}>
              <div className="flex gap-4 flex-wrap mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 py-3.5 px-8 bg-gradient-to-br from-accent to-accent-dark text-white no-underline font-heading text-xs font-semibold tracking-[2px] uppercase rounded-md hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(117,70,140,0.4)] transition-all duration-300"
                >
                  Get in Touch
                </Link>
                {siteConfig.socialLinks?.[0] && (
                  <a
                    href={siteConfig.socialLinks[0].url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 py-3.5 px-8 bg-transparent text-brand-text no-underline font-heading text-xs font-semibold tracking-[2px] uppercase rounded-md border border-accent/40 hover:border-accent hover:bg-accent/10 transition-all duration-300"
                  >
                    LinkedIn
                  </a>
                )}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
