import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';
import AnimatedCounter from '@/components/AnimatedCounter';
import PostCard from '@/components/PostCard';
import HexagonQuote from '@/components/HexagonQuote';
import GlowLabel from '@/components/GlowLabel';
import { ArrowDownIcon, getIconByName } from '@/components/Icons';
import siteConfig from '@/lib/siteConfig';
import { getLatestPosts } from '@/lib/ghost';

export default async function HomePage() {
  const ghostPosts = await getLatestPosts(3);

  return (
    <>
      {/* ════════════════════════════════════════════════════════
          SECTION 1: HERO — Photo + Text (Jeff Winter style)
          ════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden pt-20">
        {/* Hero Photo — vignette style */}
        <div className="relative w-full flex justify-center">
          {/* Ambient glow */}
          <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[350px] h-[350px] rounded-full bg-[radial-gradient(circle,rgba(117,70,140,0.2)_0%,transparent_70%)] blur-[50px] pointer-events-none" style={{ animation: 'heroGlow 6s ease-in-out infinite' }} />
          <AnimatedSection delay={0.1}>
            <div className="relative w-full max-w-[420px] mx-auto px-4">
              <picture>
                <source
                  srcSet="/images/hero-photo-mobile.webp"
                  media="(max-width: 768px)"
                  type="image/webp"
                />
                <source
                  srcSet="/images/hero-photo.webp"
                  type="image/webp"
                />
                <img
                  src="/images/hero-photo.png"
                  alt="Marcel Weigel"
                  className="w-full object-contain object-bottom block"
                  width={885}
                  height={1806}
                  loading="eager"
                />
              </picture>
              {/* Vignette overlay — soft, barely visible */}
              <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at center 40%, transparent 50%, var(--bg) 85%)' }} />
            </div>
          </AnimatedSection>
        </div>

        {/* Hero Text — below the photo */}
        <div className="relative z-[1] max-w-[1200px] mx-auto px-4 md:px-8 lg:px-12 pt-6 pb-20">
          <AnimatedSection delay={0.3}>
            <span className="font-heading text-sm font-semibold tracking-[4px] uppercase text-accent-light block mb-4">
              {siteConfig.hero.greeting}
            </span>
          </AnimatedSection>

          <AnimatedSection delay={0.45}>
            <h1 className="font-heading text-[clamp(3rem,8vw,5.5rem)] font-extrabold leading-[1.05] tracking-tight mb-6 bg-gradient-to-br from-brand-text to-accent-light bg-clip-text text-transparent">
              {siteConfig.hero.headline}
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={0.6}>
            <p className="font-body text-[clamp(1rem,2vw,1.15rem)] leading-[1.8] text-brand-muted max-w-[660px] mb-9">
              {siteConfig.hero.body}
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.75}>
            <div className="flex gap-4 flex-wrap">
              <Link
                href={siteConfig.hero.ctaPrimary.href}
                className="inline-flex items-center gap-2 py-3.5 px-8 bg-gradient-to-br from-accent to-accent-dark text-white no-underline font-heading text-xs font-semibold tracking-[2px] uppercase rounded-md hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(117,70,140,0.4)] transition-all duration-300"
              >
                {siteConfig.hero.ctaPrimary.label}
              </Link>
              <Link
                href={siteConfig.hero.ctaSecondary.href}
                className="inline-flex items-center gap-2 py-3.5 px-8 bg-transparent text-brand-text no-underline font-heading text-xs font-semibold tracking-[2px] uppercase rounded-md border border-accent/40 hover:border-accent hover:bg-accent/10 transition-all duration-300"
              >
                {siteConfig.hero.ctaSecondary.label}
              </Link>
            </div>
          </AnimatedSection>
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
              FROM THE BLOG
            </h2>
            <p className="font-body text-[clamp(1.1rem,2.5vw,1.4rem)] leading-relaxed text-brand-muted max-w-[550px] mx-auto">
              Thoughts on architecture, strategy, and technology.
            </p>
          </AnimatedSection>
        </div>

        {/* Ghost blog post cards — auto-fetched */}
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
                      {post.membersOnly && (
                        <span className="absolute top-3 right-3 flex items-center gap-1 text-[10px] tracking-[1.5px] uppercase text-brand-muted bg-brand-bg/80 backdrop-blur-sm px-2 py-1 rounded">
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent-light"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                          Members
                        </span>
                      )}
                    </div>
                  )}
                  <div className="p-6 flex flex-col gap-4 flex-grow">
                    {/* Members badge if no image */}
                    {!post.featureImage && post.membersOnly && (
                      <div className="flex items-center gap-2 text-[11px] tracking-[1.5px] uppercase text-brand-muted">
                        <span className="flex items-center gap-1">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent-light"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                          Members
                        </span>
                      </div>
                    )}
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
          SECTION 9: CONTACT CTA
          ════════════════════════════════════════════════════════ */}
      <section className="py-24 px-4 md:px-8 bg-brand-section text-center">
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
      </section>
    </>
  );
}
