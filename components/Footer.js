'use client';

import Link from 'next/link';
import siteConfig from '@/lib/siteConfig';
import WritingSignature from './WritingSignature';

export default function Footer() {
  return (
    <footer className="pt-16 pb-12 px-4 md:px-8 bg-brand-bg">
      <div className="max-w-[900px] mx-auto">

        {/* ─── Newsletter signup ─── */}
        <div className="text-center mb-12 pb-12 border-b border-accent/10">
          <p className="font-heading text-[11px] font-semibold tracking-[4px] uppercase text-accent-light/70 mb-3">
            STAY IN THE LOOP
          </p>
          <p className="font-body text-[14px] text-brand-muted max-w-[440px] mx-auto mb-6 leading-relaxed">
            Get insights on Enterprise Architecture, AI Strategy, and Digital Transformation delivered to your inbox.
          </p>
          <form
            action="https://architecture-experience.ghost.io/members/api/send-magic-link/"
            method="POST"
            className="flex gap-3 flex-col sm:flex-row max-w-[420px] mx-auto"
          >
            <input type="hidden" name="emailType" value="subscribe" />
            <input
              type="email"
              name="email"
              placeholder="your@email.com"
              required
              className="flex-grow px-4 py-3 rounded-lg bg-brand-card border border-accent/20 text-brand-text font-body text-sm placeholder:text-brand-muted/50 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-gradient-to-br from-accent to-accent-dark text-white font-heading text-[10px] font-semibold tracking-[2px] uppercase rounded-lg hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(117,70,140,0.4)] transition-all duration-300 cursor-pointer border-none"
            >
              Subscribe
            </button>
          </form>
          <p className="font-body text-[10px] text-brand-muted/40 mt-2">Free newsletter · Unsubscribe anytime</p>
        </div>

        {/* ─── Signature + tagline ─── */}
        <div className="text-center mb-6">
          <div className="flex justify-center mb-4">
            <WritingSignature
              className="h-[28px] md:h-[32px]"
              height={32}
              duration={2.5}
              delay={0}
              trigger="scroll"
            />
          </div>

          <div className="w-[40px] h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent mx-auto mb-4" />

          <p className="font-body text-[13px] text-brand-muted max-w-[600px] mx-auto mb-6 leading-relaxed">
            {siteConfig.tagline}
          </p>
        </div>

        {/* ─── LinkedIn ─── */}
        <div className="flex justify-center mb-6">
          <a
            href="https://www.linkedin.com/in/marcel-weigel"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-muted hover:text-[#0A66C2] transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
        </div>

        {/* ─── Main nav links ─── */}
        <div className="flex gap-2 justify-center flex-wrap mb-4">
          {siteConfig.footerLinks.filter(l => !['Impressum','Datenschutz'].includes(l.label)).map((link, i, arr) => (
            <span key={link.label}>
              <Link href={link.href} className="no-underline font-heading text-[11px] font-medium tracking-[2px] uppercase text-brand-muted hover:text-accent-light transition-colors duration-300">{link.label}</Link>
              {i < arr.length - 1 && <span className="text-white/15 mx-3 text-[11px]">|</span>}
            </span>
          ))}
        </div>

        {/* ─── Legal links ─── */}
        <div className="flex gap-2 justify-center flex-wrap mb-6">
          <Link href="/impressum" className="no-underline font-heading text-[10px] font-medium tracking-[2px] uppercase text-brand-muted/60 hover:text-accent-light transition-colors duration-300">Impressum</Link>
          <span className="text-white/10 mx-2 text-[10px]">|</span>
          <Link href="/datenschutz" className="no-underline font-heading text-[10px] font-medium tracking-[2px] uppercase text-brand-muted/60 hover:text-accent-light transition-colors duration-300">Datenschutz</Link>
        </div>

        <p className="font-body text-[11px] text-white/20 text-center">&copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}
