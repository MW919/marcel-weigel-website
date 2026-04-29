import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';
import AnimatedCounter from '@/components/AnimatedCounter';
import PostCard from '@/components/PostCard';
import HexagonQuote from '@/components/HexagonQuote';
import GlowLabel from '@/components/GlowLabel';
import Testimonials from '@/components/Testimonials';
import { ArrowDownIcon, getIconByName } from '@/components/Icons';
import siteConfig from '@/lib/siteConfig';
import { getLatestPosts } from '@/lib/ghost';
export default async function HomePage() {
  const ghostPosts = await getLatestPosts(3);
  return (
    <>
      {/* ════════════════════════════════════════════════════════
          SECTION 1: HERO — Headline → Photo+Name → Intro
          ════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden pt-24 md:pt-28 pb-12">
        {/* Ambient breathing gradient orbs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute w-[400px] h-[400px] md:w-[500px] md:h-[500px] rounded-full bg-[radial-gradient(circle,rgba(117,70,140,0.06)_0%,transparent_70%)] blur-[40px] top-[10%] left-[15%]" style={{ animation: 'ambientFloat1 8s ease-in-out infinite' }} />
          <div className="absolute w-[280px] h-[280px] md:w-[350px] md:h-[350px] rounded-full bg-[radial-gradient(circle,rgba(155,107,181,0.04)_0%,transparent_70%)] blur-[30px] top-[40%] right-[10%]" style={{ animation: 'ambientFloat2 10s ease-in-out infinite' }} />
          <div className="absolute w-[200px] h-[200px] md:w-[250px] md:h-[250px] rounded-full bg-[radial-gradient(circle,rgba(117,70,140,0.05)_0%,transparent_70%)] blur-[25px] bottom-[10%] left-[40%]" style={{ animation: 'ambientFloat3 12s ease-in-out infinite' }} />
        </div>
        <div className="relative z-[1] max-w-[900px] mx-auto px-4 md:px-8">
          {/* Photo + Name — side by side */}
          <AnimatedSection delay={0.1}>
            <p className="font-body text-[clamp(1.1rem,2.5vw,1.35rem)] leading-[1.6] text-brand-muted text-center mt-2 mb-10 italic">
              I turn complexity into{' '}
              <span className="font-extrabold not-italic bg-gradient-to-br from-brand-text to-accent-light bg-clip-text text-transparent relative inline-block clarity-entrance">
                clarity.
                <span className="absolute inset-0 pointer-events-none select-none clarity-glow" aria-hidden="true">clarity.</span>
              </span>
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <div className="flex items-center justify-center gap-5 md:gap-12 mb-8">
              {/* Photo */}
              <div className="relative flex-shrink-0">
                <div className="relative w-[130px] md:w-[230px] overflow-hidden">
                  <picture>
                    <source
                      srcSet="/images/hero-photo-mobile.webp?v=3"
                      media="(max-width: 768px)"
                      type="image/webp"
                    />
                    <source
                      srcSet="/images/hero-photo.webp?v=3"
                      type="image/webp"
                    />
                    <img
                      src="/images/hero-photo.png?v=3"
                      alt="Marcel Weigel"
                      className="w-full block"
                      width={900}
                      height={1864}
                      loading="eager"
                    />
                  </picture>
                  {/* Bottom fade — desktop only */}
                  <div className="hidden md:block absolute bottom-0 left-0 right-0 h-[30%] pointer-events-none" style={{ background: 'linear-gradient(to top, var(--bg), transparent)' }} />
                </div>
                {/* Glow bridge — mobile only */}
                <div className="md:hidden absolute -bottom-3 left-1/2 -translate-x-1/2 w-[120%] h-[20px] bg-[radial-gradient(ellipse_at_center,rgba(117,70,140,0.1)_0%,transparent_70%)] blur-[8px] pointer-events-none" />
              </div>
              {/* Name */}
              <div className="text-left">
                <span className="font-heading text-[10px] md:text-xs font-semibold tracking-[3px] md:tracking-[4px] uppercase text-accent-light block mb-1 md:mb-2">
                  {siteConfig.hero.greeting}
                </span>
                <h1 className="font-heading text-[clamp(1.7rem,4vw,3.2rem)] font-extrabold leading-[1.1] tracking-tight bg-gradient-to-br from-brand-text to-accent-light bg-clip-text text-transparent">
                  <span className="md:hidden">I'M<br />MARCEL.</span>
                  <span className="hidden md:inline">I'M MARCEL.</span>
                </h1>
              </div>
            </div>
          </AnimatedSection>
          {/* Intro text + CTAs */}
          <div className="max-w-[620px] mx-auto">
            <AnimatedSection delay={0.35}>
              <p className="font-body text-[clamp(0.95rem,1.8vw,1.1rem)] leading-[1.85] text-brand-muted mb-7 text-left px-2 md:px-0 md:text-center">
                My passion is aligning business needs with technology through architecture. I specialize in Enterprise Architecture and Digital & AI Strategy, helping organizations bridge the gap between complexity and clarity to drive meaningful outcomes.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.5}>
              <div className="flex gap-4 flex-wrap justify-center items-center">
                <Link
                  href="/read"
                  className="inline-flex items-center gap-2 py-3.5 px-8 bg-gradient-to-br from-accent to-accent-dark text-white no-underline font-heading text-xs font-semibold tracking-[2px] uppercase rounded-md hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(117,70,140,0.4)] transition-all duration-300"
                >
                  Explore My Thinking
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 no-underline font-heading text-xs font-medium tracking-[2px] uppercase text-brand-muted hover:text-accent-light transition-colors duration-300"
                >
                  Get in Touch →
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
      {/* ════════════════════════════════════════════════════════
          SECTION 2: QUOTE BANNER with Hexagon Assembly
          ════════════════════════════════════════════════════════ */}
      <HexagonQuote />
      {/* ════════════════════════════════════════════════════════
          TRANSITION: Arrow
          ════════════════════════════════════════════════════════ */}
      <div className="py-8 text-center bg-gradient-to-b from-brand-section to-brand-bg">
        <ArrowDownIcon className="text-accent-light animate-bounce-arrow mx-auto" />
      </div>
      {/* ════════════════════════════════════════════════════════
          SECTION 3+4 MERGED: ARCHITECTURE EXPERIENCE BLOG
          ════════════════════════════════════════════════════════ */}
      <section className="pt-8 pb-20 bg-brand-bg">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 lg:px-12 text-center mb-12">
          <AnimatedSection>
            <GlowLabel>ARCHITECTURE EXPERIENCE</GlowLabel>
            <h2 className="font-heading text-[clamp(2rem,4vw,2.75rem)] font-extrabold mb-3" style={{ color: '#f4f6fc' }}>
              I WRITE ON ARCHITECTURE EXPERIENCE
            </h2>
            <p className="font-body text-[clamp(1rem,2vw,1.15rem)] leading-relaxed text-brand-muted max-w-[550px] mx-auto">
              My blog on architecture, strategy, and technology — hosted on{' '}
              <a href="https://www.architecture-experience.com" target="_blank" rel="noopener noreferrer" className="text-accent-light hover:text-accent-light/80 transition-colors">architecture-experience.com</a>
            </p>
          </AnimatedSection>
        </div>
        {/* Ghost blog post cards — with mobile swipe arrows */}
        <div className="relative max-w-[1200px] mx-auto">
          {/* Swipe arrows — visible on mobile only */}
          <div className="flex items-center justify-between absolute inset-0 pointer-events-none z-10 md:hidden px-1">
            <div className="pointer-events-auto animate-bounce-arrow-left">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent-light/60"><path d="M15 18l-6-6 6-6"/></svg>
            </div>
            <div className="pointer-events-auto animate-bounce-arrow-right">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent-light/60"><path d="M9 18l6-6-6-6"/></svg>
            </div>
          </div>
          <div className="flex gap-6 overflow-x-auto px-4 md:px-8 lg:px-12 pb-4 hide-scrollbar" style={{ scrollSnapType: 'x mandatory' }}>
          {ghostPosts.map((post, i) => (
            <a
              key={i}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="min-w-[320px] max-w-[380px] flex-shrink-0 no-underline group"
              style={{ scrollSnapAlign: 'start' }}
            >
              <AnimatedSection delay={i * 0.15}>
                <div className="h-full rounded-xl border border-accent/15 bg-brand-card overflow-hidden flex flex-col transition-all duration-300 group-hover:border-accent/40 group-hover:-translate-y-1 group-hover:shadow-[0_8px_30px_rgba(117,70,140,0.15)]">
                  {/* Feature image */}
                  {post.featureImage && (
                    <div className="relative w-full h-[180px] overflow-hidden">
                      <img
                        src={post.featureImage}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-card/80 to-transparent" />
                    </div>
                  )}
                  <div className="p-6 flex flex-col gap-4 flex-grow">
                    <h3 className="font-heading text-lg font-bold leading-snug" style={{ color: '#f4f6fc' }}>
                      {post.title}
                    </h3>
                    <p className="font-body text-sm leading-relaxed text-brand-muted flex-grow">
                      {post.excerpt}
                    </p>
                    <span className="font-heading text-xs font-semibold tracking-[2px] uppercase text-accent-light group-hover:text-accent-light/80 transition-colors mt-auto">
                      Read on Architecture Experience →
                    </span>
                  </div>
                </div>
              </AnimatedSection>
            </a>
          ))}
        </div>
        </div>
      </section>
      {/* ════════════════════════════════════════════════════════
          SECTION 8: STATS COUNTER
          ════════════════════════════════════════════════════════ */}
      <section className="py-20 px-4 md:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-dark/[0.13] via-brand-bg to-accent/[0.07]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(117,70,140,0.08)_0%,transparent_70%)]" />
        <div className="relative z-[1] max-w-[1000px] mx-auto grid grid-cols-1 sm:grid-cols-3 gap-12 text-center">
          {siteConfig.stats.map((stat, i) => {
            const IconComponent = getIconByName(stat.icon);
            return (
              <AnimatedSection key={stat.label} delay={i * 0.15}>
                <div className="flex flex-col items-center gap-4">
                  <div className="text-accent-light/80">
                    <IconComponent />
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="font-heading text-[clamp(2.5rem,5vw,3.5rem)] font-extrabold" style={{ color: '#f4f6fc' }}>
                      <AnimatedCounter target={stat.value} />
                    </span>
                    <span className="font-heading text-[clamp(1.5rem,3vw,2.5rem)] font-bold text-accent-light">
                      {stat.suffix}
                    </span>
                  </div>
                  <span className="font-heading text-xs font-medium tracking-[3px] uppercase" style={{ color: '#f4f6fc', opacity: 0.7 }}>
                    {stat.label}
                  </span>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </section>
      {/* ════════════════════════════════════════════════════════
          SECTION: TESTIMONIALS
          ════════════════════════════════════════════════════════ */}
      <Testimonials />
      {/* ════════════════════════════════════════════════════════
          SECTION 9: CONTACT CTA
          ════════════════════════════════════════════════════════ */}
      <section className="py-24 px-4 md:px-8 text-center relative overflow-hidden">
        {/* Background layers */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-bg via-accent-dark/[0.12] to-brand-bg" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(117,70,140,0.1)_0%,transparent_60%)]" />
        {/* Dot grid pattern — represents connections/network */}
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle, #9b6bb5 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        <div className="relative z-[1]">
        <AnimatedSection>
          <GlowLabel>CONTACT MARCEL</GlowLabel>
          <h2 className="font-heading text-[clamp(2rem,5vw,3rem)] font-extrabold mb-5" style={{ color: '#f4f6fc' }}>
            {siteConfig.contact.headline}
          </h2>
          <p className="font-body text-base leading-[1.8] text-brand-muted max-w-[550px] mx-auto mb-8">
            {siteConfig.contact.body}
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 py-3.5 px-10 bg-gradient-to-br from-accent to-accent-dark text-white no-underline font-heading text-xs font-semibold tracking-[2px] uppercase rounded-md hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(117,70,140,0.4)] transition-all duration-300"
          >
            Contact
          </Link>
        </AnimatedSection>
        </div>
      </section>
    </>
  );
}
