import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';
import GlowLabel from '@/components/GlowLabel';
import Timeline from '@/components/Timeline';
import siteConfig from '@/lib/siteConfig';

export const metadata = {
  title: 'About',
  description: 'About Marcel Weigel — Enterprise Architect, Digital Strategy Leader, and AI Strategist bridging business strategy and technology execution.',
  alternates: { canonical: '/about' },
};

export default function AboutPage() {
  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className="relative pt-28 pb-16 px-4 md:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(117,70,140,0.1)_0%,transparent_50%)]" />

        <div className="relative z-[1] max-w-[1000px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-10 md:gap-14 items-start">
            {/* Photo */}
            <AnimatedSection>
              <div className="relative mx-auto md:mx-0 w-[200px] md:w-full">
                <div className="relative overflow-hidden bg-brand-bg">
                  <picture>
                    <source srcSet="/images/about-photo-mobile.webp?v=2" media="(max-width: 768px)" type="image/webp" />
                    <source srcSet="/images/about-photo.webp?v=2" type="image/webp" />
                    <img
                      src="/images/about-photo.png?v=2"
                      alt="Marcel Weigel"
                      className="w-full h-auto object-contain"
                    />
                  </picture>
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-bg/40 via-transparent to-transparent pointer-events-none" />
                </div>
                {/* Ambient glow behind photo */}
                <div className="absolute -inset-4 bg-[radial-gradient(circle,rgba(117,70,140,0.15)_0%,transparent_70%)] blur-[20px] -z-10" />
              </div>
            </AnimatedSection>

            {/* Bio text */}
            <div>
              <AnimatedSection>
                <GlowLabel>ABOUT</GlowLabel>
                <h1 className="font-heading text-[clamp(2rem,4vw,2.75rem)] font-extrabold mb-8 leading-[1.15]">
                  <span className="bg-gradient-to-br from-brand-text to-accent-light bg-clip-text text-transparent">Marcel Weigel</span>
                </h1>
              </AnimatedSection>

              <AnimatedSection delay={0.15}>
                <p className="font-body text-base leading-[1.9] text-brand-muted mb-5">
                  As an Enterprise Architect, I bridge the gap between business strategy and technology execution. My approach centers on architecture thinking — a structured yet adaptive way to align digital capabilities with organizational goals.
                </p>
                <p className="font-body text-base leading-[1.9] text-brand-muted mb-5">
                  With a business background spanning logistics and integrated facility management, I've helped organizations move from complexity to clarity. I believe the best architectures enable good decisions, accelerate outcomes, and create lasting value.
                </p>
                <p className="font-body text-base leading-[1.9] text-brand-muted mb-8">
                  I share my thinking regularly through articles and fresh perspectives — published on my blog <a href="https://www.architecture-experience.com" target="_blank" rel="noopener noreferrer" className="text-accent-light hover:text-accent transition-colors">"Architecture Experience"</a>.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.3}>
                <div className="flex gap-4 flex-wrap">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 py-3.5 px-8 bg-gradient-to-br from-accent to-accent-dark text-white no-underline font-heading text-xs font-semibold tracking-[2px] uppercase rounded-md hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(117,70,140,0.4)] transition-all duration-300"
                  >
                    Get in Touch
                  </Link>
                  <a
                    href="https://www.linkedin.com/in/marcel-weigel/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 py-3.5 px-8 bg-transparent text-brand-text no-underline font-heading text-xs font-semibold tracking-[2px] uppercase rounded-md border border-accent/40 hover:border-accent hover:bg-accent/10 transition-all duration-300"
                  >
                    LinkedIn
                  </a>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ JOURNEY TIMELINE ═══ */}
      <section className="py-20 px-4 md:px-8 bg-brand-bg relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(117,70,140,0.05)_0%,transparent_60%)]" />

        <div className="relative z-[1] max-w-[900px] mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <GlowLabel>THE JOURNEY</GlowLabel>
              <h2 className="font-heading text-[clamp(2rem,4vw,2.75rem)] font-extrabold" style={{ color: '#f4f6fc' }}>
                From Curiosity to Architecture
              </h2>
            </div>
          </AnimatedSection>

          <Timeline />
        </div>
      </section>
    </>
  );
}
