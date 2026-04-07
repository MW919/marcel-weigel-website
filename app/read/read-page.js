import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';
import GlowLabel from '@/components/GlowLabel';
import { getLatestPosts } from '@/lib/ghost';

export const metadata = {
  title: 'Read',
  description: 'Articles, thoughts, and perspectives on Enterprise Architecture, Digital & AI Strategy, and Digital Transformation by Marcel Weigel.',
  alternates: { canonical: '/read' },
};

export default async function ReadPage() {
  const posts = await getLatestPosts(6);

  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className="relative min-h-[70vh] flex items-center pt-24 pb-16 px-4 md:px-8 overflow-hidden">
        {/* Background pattern — floating book/article shapes */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[
            { x: '12%', y: '20%', r: 15, s: 50, d: 16 },
            { x: '88%', y: '30%', r: -10, s: 40, d: 20 },
            { x: '25%', y: '75%', r: 8, s: 35, d: 18 },
            { x: '70%', y: '65%', r: -20, s: 45, d: 22 },
            { x: '50%', y: '15%', r: 5, s: 30, d: 14 },
            { x: '80%', y: '80%', r: -8, s: 38, d: 17 },
          ].map((b, i) => (
            <div
              key={i}
              className="absolute rounded-lg border border-accent/[0.06]"
              style={{
                left: b.x, top: b.y,
                width: b.s, height: b.s * 1.3,
                transform: `translate(-50%,-50%) rotate(${b.r}deg)`,
                animation: `floatShape ${b.d}s ease-in-out infinite`,
                animationDelay: `${i * 2}s`,
              }}
            >
              <div className="absolute top-[20%] left-[15%] right-[15%] h-px bg-accent/[0.04]" />
              <div className="absolute top-[35%] left-[15%] right-[25%] h-px bg-accent/[0.04]" />
              <div className="absolute top-[50%] left-[15%] right-[20%] h-px bg-accent/[0.04]" />
            </div>
          ))}
        </div>

        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(117,70,140,0.1)_0%,transparent_60%)]" />

        <div className="relative z-[1] max-w-[800px] mx-auto text-center">
          <AnimatedSection>
            <GlowLabel>ARCHITECTURE EXPERIENCE</GlowLabel>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <h1 className="font-heading text-[clamp(2.5rem,6vw,4rem)] font-extrabold mb-6 leading-[1.1]">
              <span className="bg-gradient-to-br from-brand-text to-accent-light bg-clip-text text-transparent">
                Insights on Architecture,
              </span>
              <br />
              <span className="text-brand-text">Strategy & Technology</span>
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <p className="font-body text-[clamp(1rem,2vw,1.15rem)] leading-[1.8] text-brand-muted max-w-[600px] mx-auto mb-10">
              I share my thinking on Enterprise Architecture, Digital & AI Strategy, and Digital Transformation on my blog <a href="https://www.architecture-experience.com" target="_blank" rel="noopener noreferrer" className="text-accent-light hover:text-accent-light/80 transition-colors">Architecture Experience</a>. Here are my latest articles — click through to read the full posts.
            </p>
          </AnimatedSection>

          {/* Ghost newsletter signup — link to portal */}
          <AnimatedSection delay={0.45}>
            <div className="max-w-[480px] mx-auto">
              <a
                href="https://www.architecture-experience.com/#/portal/signup"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-br from-accent to-accent-dark text-white no-underline font-heading text-xs font-semibold tracking-[2px] uppercase rounded-lg hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(117,70,140,0.4)] transition-all duration-300"
              >
                Subscribe to Newsletter
              </a>
              <p className="font-body text-[11px] text-brand-muted/50 mt-3">Free newsletter. Unsubscribe anytime.</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══ LATEST ARTICLES ═══ */}
      <section className="py-16 px-4 md:px-8 bg-brand-bg">
        <div className="max-w-[1200px] mx-auto">
          <AnimatedSection>
            <h2 className="font-heading text-[clamp(1.5rem,3vw,2rem)] font-extrabold mb-10 text-center" style={{ color: '#f4f6fc' }}>
              Latest Articles
            </h2>
          </AnimatedSection>

          {/* Swipeable on mobile, grid on desktop */}
          <div className="relative">
            {/* Mobile swipe arrows */}
            <div className="flex items-center justify-between absolute inset-0 pointer-events-none z-10 md:hidden px-1">
              <div className="pointer-events-auto animate-bounce-arrow-left">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent-light/60"><path d="M15 18l-6-6 6-6"/></svg>
              </div>
              <div className="pointer-events-auto animate-bounce-arrow-right">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent-light/60"><path d="M9 18l6-6-6-6"/></svg>
              </div>
            </div>

            <div className="flex gap-6 overflow-x-auto pb-4 md:grid md:grid-cols-2 lg:grid-cols-3 md:overflow-visible hide-scrollbar" style={{ scrollSnapType: 'x mandatory' }}>
            {posts.map((post, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <a
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block no-underline group min-w-[300px] max-w-[340px] md:min-w-0 md:max-w-none flex-shrink-0 md:flex-shrink"
                  style={{ scrollSnapAlign: 'start' }}
                >
                  <div className="h-full rounded-xl border border-accent/15 bg-brand-card overflow-hidden flex flex-col transition-all duration-300 group-hover:border-accent/40 group-hover:-translate-y-1 group-hover:shadow-[0_8px_30px_rgba(117,70,140,0.15)]">
                    {post.featureImage && (
                      <div className="relative w-full h-[180px] overflow-hidden">
                        <img src={post.featureImage} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                        <div className="absolute inset-0 bg-gradient-to-t from-brand-card/80 to-transparent" />
                      </div>
                    )}
                    <div className="p-6 flex flex-col gap-3 flex-grow">
                      <h3 className="font-heading text-lg font-bold leading-snug" style={{ color: '#f4f6fc' }}>
                        {post.title}
                      </h3>
                      <p className="font-body text-sm leading-relaxed text-brand-muted flex-grow">
                        {post.excerpt}
                      </p>
                      <span className="font-heading text-xs font-semibold tracking-[2px] uppercase text-accent-light mt-auto">
                        Read Article →
                      </span>
                    </div>
                  </div>
                </a>
              </AnimatedSection>
            ))}
            </div>
          </div>

          {/* CTA to full blog — dynamic highlight */}
          <AnimatedSection delay={0.3}>
            <div className="relative mt-16 py-14 px-6 rounded-2xl border border-accent/10 bg-brand-card/50 overflow-hidden text-center">
              {/* Animated radial glow */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-[300px] h-[300px] rounded-full opacity-60" style={{ background: 'radial-gradient(circle, rgba(117,70,140,0.15) 0%, transparent 70%)', animation: 'ctaPulse 3s ease-in-out infinite' }} />
              </div>

              {/* Orbiting dots */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="relative w-[200px] h-[200px]" style={{ animation: 'orbitSpin 12s linear infinite' }}>
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-accent-light/40" />
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-accent/30" />
                  <div className="absolute top-1/2 left-0 -translate-y-1/2 w-1 h-1 rounded-full bg-accent-light/25" />
                  <div className="absolute top-1/2 right-0 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-accent/35" />
                </div>
              </div>

              {/* Content */}
              <div className="relative z-[1]">
                <p className="font-body text-sm text-brand-muted mb-6 max-w-[400px] mx-auto">
                  Explore the full collection of articles, frameworks, and fresh perspectives on the blog.
                </p>
                <a
                  href="https://www.architecture-experience.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center gap-2 py-4 px-10 bg-gradient-to-br from-accent to-accent-dark text-white no-underline font-heading text-xs font-semibold tracking-[2px] uppercase rounded-lg hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(117,70,140,0.4)] transition-all duration-300"
                >
                  {/* Shimmer effect on button */}
                  <span className="absolute inset-0 rounded-lg overflow-hidden">
                    <span className="absolute inset-0" style={{ background: 'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.12) 45%, rgba(255,255,255,0.12) 55%, transparent 60%)', animation: 'shimmer 3s ease-in-out infinite' }} />
                  </span>
                  <span className="relative">Visit Architecture Experience</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="relative transition-transform duration-300 group-hover:translate-x-1">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

    </>
  );
}
