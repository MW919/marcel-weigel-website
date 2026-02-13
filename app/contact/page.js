import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';
import GlowLabel from '@/components/GlowLabel';
import ConnectingNodes from '@/components/ConnectingNodes';
import siteConfig from '@/lib/siteConfig';

export const metadata = {
  title: 'Contact — Marcel Weigel',
  description: 'Get in touch with Marcel Weigel for collaboration, speaking engagements, or advisory.',
};

export default function ContactPage() {
  return (
    <section className="relative min-h-screen pt-28 pb-20 px-4 md:px-8 overflow-hidden">
      {/* Background animation */}
      <ConnectingNodes />

      {/* Radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(117,70,140,0.08)_0%,transparent_50%)]" />

      <div className="relative z-[1] max-w-[700px] mx-auto text-center">
        <AnimatedSection>
          <GlowLabel>CONTACT MARCEL</GlowLabel>
          <h1 className="font-heading text-[clamp(2.5rem,6vw,3.5rem)] font-extrabold mb-6 leading-[1.1]">
            <span className="bg-gradient-to-br from-brand-text to-accent-light bg-clip-text text-transparent">
              Let's Connect
            </span>
          </h1>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <p className="font-body text-[clamp(1rem,2vw,1.15rem)] leading-[1.8] text-brand-muted max-w-[550px] mx-auto mb-12">
            I provide expert insights on enterprise architecture, digital & AI strategy, and digital transformation. Let's discuss how I can add value to your upcoming events, projects, or initiatives.
          </p>
        </AnimatedSection>

        {/* Contact cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-[540px] mx-auto mb-16">
          {/* Email */}
          <AnimatedSection delay={0.3}>
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="group block p-8 rounded-xl border border-accent/15 bg-brand-card/80 backdrop-blur-sm no-underline transition-all duration-300 hover:border-accent/40 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(117,70,140,0.15)]"
            >
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-accent/20 to-accent-dark/20 flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-accent-light">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="M22 4L12 13 2 4" />
                </svg>
              </div>
              <div className="font-heading text-sm font-semibold text-brand-text mb-1">Email</div>
              <div className="font-body text-[13px] text-accent-light group-hover:text-accent transition-colors">
                {siteConfig.contact.email}
              </div>
            </a>
          </AnimatedSection>

          {/* LinkedIn */}
          <AnimatedSection delay={0.4}>
            <a
              href="https://www.linkedin.com/in/marcel-weigel/"
              target="_blank"
              rel="noopener noreferrer"
              className="group block p-8 rounded-xl border border-accent/15 bg-brand-card/80 backdrop-blur-sm no-underline transition-all duration-300 hover:border-[#0A66C2]/30 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(10,102,194,0.15)]"
            >
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#0A66C2]/20 to-[#0A66C2]/10 flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-[#0A66C2]">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </div>
              <div className="font-heading text-sm font-semibold text-brand-text mb-1">LinkedIn</div>
              <div className="font-body text-[13px] text-[#0A66C2]/70 group-hover:text-[#0A66C2] transition-colors">
                Connect with me
              </div>
            </a>
          </AnimatedSection>
        </div>

        {/* What I can help with */}
        <AnimatedSection delay={0.5}>
          <div className="max-w-[540px] mx-auto">
            <h3 className="font-heading text-xs font-semibold tracking-[3px] uppercase text-brand-muted/60 mb-6">
              What I can help with
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {[
                'Enterprise Architecture',
                'Digital Strategy',
                'AI Strategy & Roadmaps',
                'Speaking Engagements',
                'Architecture Governance',
                'Advisory & Consulting',
              ].map((item, i) => (
                <div
                  key={i}
                  className="py-3 px-4 rounded-lg border border-accent/10 bg-brand-card/50 font-body text-[13px] text-brand-muted"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
