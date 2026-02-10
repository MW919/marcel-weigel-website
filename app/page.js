import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';
import AnimatedCounter from '@/components/AnimatedCounter';
import PostCard from '@/components/PostCard';
import { ArrowDownIcon, getIconByName } from '@/components/Icons';
import siteConfig from '@/lib/siteConfig';
import { getFeaturedPosts } from '@/lib/posts';

export default function HomePage() {
  const featuredPosts = getFeaturedPosts();

  return (
    <>
      {/* ════════════════════════════════════════════════════════
          SECTION 1: HERO
          ════════════════════════════════════════════════════════ */}
      <section className="min-h-screen flex items-center relative overflow-hidden pt-[120px] pb-20 px-4 md:px-8 lg:px-12">
        {/* Background gradient orb */}
        <div className="absolute -top-[20%] -right-[10%] w-[60vw] h-[60vw] max-w-[700px] max-h-[700px] rounded-full bg-[radial-gradient(circle,rgba(117,70,140,0.15)_0%,transparent_70%)] blur-[60px] pointer-events-none" />

        <div className="max-w-[1200px] mx-auto w-full grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] gap-12 items-center relative z-[1]">
          {/* Text */}
          <div>
            <AnimatedSection delay={0.1}>
              <span className="font-heading text-sm font-semibold tracking-[4px] uppercase text-accent-light block mb-4">
                {siteConfig.hero.greeting}
              </span>
            </AnimatedSection>

            <AnimatedSection delay={0.25}>
              <h1 className="font-heading text-[clamp(3rem,8vw,5.5rem)] font-extrabold leading-[1.05] tracking-tight mb-6 bg-gradient-to-br from-brand-text to-accent-light bg-clip-text text-transparent">
                {siteConfig.hero.headline}
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <p className="font-body text-[clamp(1rem,2vw,1.15rem)] leading-[1.8] text-brand-muted max-w-[560px] mb-9">
                {siteConfig.hero.body}
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.55}>
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

          {/* Photo placeholder */}
          <AnimatedSection delay={0.3}>
            <div className="w-full max-w-[420px] aspect-[3/4] mx-auto rounded-[20px] bg-gradient-to-br from-brand-card to-accent/[0.08] border border-accent/15 flex flex-col items-center justify-center relative overflow-hidden animate-pulse-glow">
              <div className="w-[140px] h-[140px] rounded-full border-2 border-accent/25 flex items-center justify-center">
                <span className="font-heading text-[42px] font-extrabold bg-gradient-to-br from-accent-light to-accent bg-clip-text text-transparent">
                  MW
                </span>
              </div>
              <span className="absolute bottom-5 font-body text-[11px] tracking-[2px] uppercase text-brand-muted">
                Photo Placeholder
              </span>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          SECTION 2: QUOTE BANNER
          ════════════════════════════════════════════════════════ */}
      <section className="relative py-24 md:py-28 px-4 md:px-8 overflow-hidden">
        {/* Starfield overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-bg/85 to-accent-dark/30" />

        <AnimatedSection className="relative z-[1] max-w-[900px] mx-auto text-center">
          <p className="font-heading text-[clamp(1.3rem,3.5vw,2rem)] font-light leading-[1.7] text-brand-text italic">
            &ldquo;{siteConfig.quote.before}{' '}
            {siteConfig.quote.highlights.map((h, i) => (
              <span key={i}>
                <strong className="text-accent-light font-bold not-italic">{h.word}</strong>
                {h.after}
                {i < siteConfig.quote.highlights.length - 1 ? ' ' : ''}
              </span>
            ))}
            &rdquo;
          </p>
        </AnimatedSection>
      </section>

      {/* ════════════════════════════════════════════════════════
          SECTION 3: INSIGHTS INTRO
          ════════════════════════════════════════════════════════ */}
      <section className="py-20 px-4 md:px-8 text-center bg-brand-section">
        <AnimatedSection>
          <span className="font-heading text-xs font-semibold tracking-[4px] uppercase text-accent-light block mb-4">
            INSIGHTS
          </span>
          <h2 className="font-heading text-[clamp(1.25rem,3vw,1.75rem)] font-normal leading-relaxed text-brand-muted max-w-[650px] mx-auto mb-10">
            Your go-to source for enterprise architecture best practices, digital strategy frameworks, and technology insights.
          </h2>
          <ArrowDownIcon className="text-accent-light animate-bounce-arrow mx-auto" />
        </AnimatedSection>
      </section>

      {/* ════════════════════════════════════════════════════════
          SECTION 4: FEATURED CONTENT CAROUSEL
          ════════════════════════════════════════════════════════ */}
      <section className="py-20 bg-brand-bg">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 lg:px-12">
          <AnimatedSection>
            <span className="font-heading text-xs font-semibold tracking-[4px] uppercase text-accent-light block mb-2">
              ARCHITECTURE EXPERIENCE
            </span>
            <h2 className="font-heading text-[clamp(2rem,4vw,2.75rem)] font-extrabold mb-12">
              <span className="text-accent-light">LATEST</span> INSIGHTS
            </h2>
          </AnimatedSection>
        </div>

        {/* Scrollable cards */}
        <div className="flex gap-6 overflow-x-auto scroll-snap-x-mandatory px-4 md:px-8 lg:px-12 pb-4 hide-scrollbar">
          {(featuredPosts.length > 0 ? featuredPosts : []).map((post, i) => (
            <div key={post.slug} className="min-w-[320px] max-w-[380px] flex-shrink-0 scroll-snap-start">
              <AnimatedSection delay={i * 0.15}>
                <PostCard post={post} />
              </AnimatedSection>
            </div>
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          SECTION 5: FREE RESOURCES CTA
          ════════════════════════════════════════════════════════ */}
      <section className="py-20 px-4 md:px-8 text-center bg-brand-section">
        <AnimatedSection>
          <span className="font-heading text-xs font-semibold tracking-[4px] uppercase text-accent-light block mb-3">
            FREE RESOURCES
          </span>
          <h2 className="font-heading text-[clamp(1.5rem,4vw,2.25rem)] font-bold max-w-[600px] mx-auto mb-4">
            Access frameworks, templates & architecture insights
          </h2>
          <p className="font-body text-[15px] leading-[1.7] text-brand-muted max-w-[500px] mx-auto mb-8">
            Practical tools and thinking models for enterprise architects and digital strategists.
          </p>
          <Link
            href="/read"
            className="inline-flex items-center gap-2 py-3.5 px-9 bg-gradient-to-br from-accent to-accent-dark text-white no-underline font-heading text-xs font-semibold tracking-[2px] uppercase rounded-md hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(117,70,140,0.4)] transition-all duration-300"
          >
            Browse Resources
          </Link>
        </AnimatedSection>
      </section>

      {/* ════════════════════════════════════════════════════════
          SECTION 6: BROWSE MORE
          ════════════════════════════════════════════════════════ */}
      <section className="py-16 px-4 md:px-8 bg-brand-bg">
        <AnimatedSection className="max-w-[800px] mx-auto text-center">
          <p className="font-heading text-xs tracking-[3px] uppercase text-brand-muted mb-5">
            Looking for something specific?
          </p>
          <div className="w-[60px] h-px bg-gradient-to-r from-transparent via-accent to-transparent mx-auto mb-5" />
          <p className="font-heading text-sm font-semibold tracking-[2px] uppercase text-brand-text mb-6">
            Browse More Content →
          </p>
          <div className="flex gap-8 justify-center flex-wrap">
            {['Read', 'About', 'Contact'].map((label) => (
              <Link
                key={label}
                href={`/${label.toLowerCase()}`}
                className="no-underline font-heading text-lg font-bold text-brand-text tracking-wide hover:text-accent-light transition-colors duration-300"
              >
                {label}
              </Link>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* ════════════════════════════════════════════════════════
          SECTION 7: UPCOMING EVENTS
          ════════════════════════════════════════════════════════ */}
      {siteConfig.upcomingEvent && (
        <section className="py-20 px-4 md:px-8 lg:px-12 bg-brand-section">
          <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-[0.8fr_1.2fr] gap-12 items-center">
            {/* Speaker image placeholder */}
            <AnimatedSection>
              <div className="w-full max-w-[360px] aspect-[4/5] mx-auto rounded-[20px] bg-gradient-to-br from-brand-card to-accent/[0.08] border border-accent/15 flex items-center justify-center animate-float">
                <span className="font-body text-[11px] tracking-[2px] uppercase text-brand-muted">
                  Speaker Photo
                </span>
              </div>
            </AnimatedSection>

            {/* Event details */}
            <AnimatedSection delay={0.2}>
              <span className="font-heading text-xs font-semibold tracking-[4px] uppercase text-accent-light block mb-2">
                UPCOMING EVENTS
              </span>
              <h2 className="font-heading text-[clamp(2rem,4vw,2.75rem)] font-extrabold mb-6">
                {siteConfig.upcomingEvent.title}
              </h2>
              <div className="flex gap-4 flex-wrap mb-4">
                <span className="font-body text-sm text-accent-light bg-accent/10 px-3.5 py-1.5 rounded-md">
                  {siteConfig.upcomingEvent.date}
                </span>
                <span className="font-body text-sm text-brand-muted bg-white/5 px-3.5 py-1.5 rounded-md">
                  {siteConfig.upcomingEvent.location}
                </span>
              </div>
              <p className="font-body text-base leading-[1.7] text-brand-muted mb-8">
                {siteConfig.upcomingEvent.description}
              </p>
              <div className="flex gap-4 flex-wrap">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 py-3 px-7 bg-gradient-to-br from-accent to-accent-dark text-white no-underline font-heading text-[11px] font-semibold tracking-[2px] uppercase rounded-md hover:-translate-y-0.5 transition-all duration-300"
                >
                  Request as Speaker
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </section>
      )}

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
                    <span className="font-heading text-[clamp(2.5rem,5vw,3.5rem)] font-extrabold text-brand-text">
                      <AnimatedCounter target={stat.value} />
                    </span>
                    <span className="font-heading text-[clamp(1.5rem,3vw,2.5rem)] font-bold text-accent-light">
                      {stat.suffix}
                    </span>
                  </div>
                  <span className="font-heading text-xs font-medium tracking-[3px] uppercase text-brand-muted">
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
          <span className="font-heading text-xs font-semibold tracking-[4px] uppercase text-accent-light block mb-3">
            CONTACT
          </span>
          <h2 className="font-heading text-[clamp(2rem,5vw,3rem)] font-extrabold mb-5">
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
