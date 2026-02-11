'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import siteConfig from '@/lib/siteConfig';

export default function Footer() {
  const sigMainRef = useRef(null);
  const sigGlowRef = useRef(null);
  const sigMaskRef = useRef(null);
  const sigAreaRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Drawing reveal
            if (sigMainRef.current) sigMainRef.current.style.opacity = '0.7';
            if (sigMaskRef.current) sigMaskRef.current.style.clipPath = 'inset(0 0 0 100%)';
            // Glow after drawing
            setTimeout(() => {
              if (sigGlowRef.current) {
                sigGlowRef.current.style.opacity = '1';
              }
            }, 3800);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sigAreaRef.current) observer.observe(sigAreaRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Seamless footer zone: contact flows into signature flows into footer */}
      <div className="relative" ref={sigAreaRef}>
        {/* Signature — animated like header */}
        <div className="py-16 flex justify-center relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[100px] rounded-full bg-[radial-gradient(circle,rgba(117,70,140,0.1)_0%,transparent_70%)] blur-[30px] pointer-events-none" />
          <div className="relative h-[50px] md:h-[60px]" style={{ aspectRatio: '1964/576' }}>
            <img
              ref={sigGlowRef}
              src="/images/signature.png"
              alt=""
              className="absolute inset-[-6px] h-[calc(100%+12px)] w-auto object-contain pointer-events-none z-0 transition-opacity duration-[1.2s] ease-in"
              style={{ filter: 'blur(12px) brightness(1.5) sepia(1) hue-rotate(250deg) saturate(3)', opacity: 0, animation: 'sigPulseFooter 3s ease-in-out infinite' }}
            />
            <img
              ref={sigMainRef}
              src="/images/signature.png"
              alt="Marcel Weigel"
              className="h-full w-auto object-contain relative z-[1] transition-opacity duration-300"
              style={{ opacity: 0 }}
            />
            <div
              ref={sigMaskRef}
              className="absolute inset-0 z-[2] bg-brand-bg transition-[clip-path] duration-[3.5s]"
              style={{ clipPath: 'inset(0 0 0 0)', transitionTimingFunction: 'cubic-bezier(.22,.61,.36,1)' }}
            />
          </div>
        </div>

        {/* Subtle divider */}
        <div className="w-[60px] h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent mx-auto mb-8" />
      </div>

      <footer className="pb-12 px-4 md:px-8 bg-brand-bg text-center">
        <p className="font-body text-[13px] text-brand-muted max-w-[600px] mx-auto mb-6 leading-relaxed">
          {siteConfig.tagline}
        </p>

        {/* LinkedIn button */}
        <div className="flex justify-center mb-6">
          <a
            href="https://www.linkedin.com/in/marcel-weigel"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2.5 py-2.5 px-5 rounded-lg border border-accent/20 bg-brand-card hover:border-accent/50 hover:bg-accent/10 transition-all duration-300"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-[#0A66C2]">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            <span className="font-heading text-[11px] font-semibold tracking-[1.5px] uppercase text-brand-muted group-hover:text-brand-text transition-colors duration-300">
              Connect on LinkedIn
            </span>
          </a>
        </div>

        {/* Main nav links */}
        <div className="flex gap-2 justify-center flex-wrap mb-4">
          {siteConfig.footerLinks.filter(l => !['Impressum','Datenschutz'].includes(l.label)).map((link, i, arr) => (
            <span key={link.label}>
              <Link href={link.href} className="no-underline font-heading text-[11px] font-medium tracking-[2px] uppercase text-brand-muted hover:text-accent-light transition-colors duration-300">{link.label}</Link>
              {i < arr.length - 1 && <span className="text-white/15 mx-3 text-[11px]">|</span>}
            </span>
          ))}
        </div>

        {/* Legal links */}
        <div className="flex gap-2 justify-center flex-wrap mb-6">
          <Link href="/impressum" className="no-underline font-heading text-[10px] font-medium tracking-[2px] uppercase text-brand-muted/60 hover:text-accent-light transition-colors duration-300">Impressum</Link>
          <span className="text-white/10 mx-2 text-[10px]">|</span>
          <Link href="/datenschutz" className="no-underline font-heading text-[10px] font-medium tracking-[2px] uppercase text-brand-muted/60 hover:text-accent-light transition-colors duration-300">Datenschutz</Link>
        </div>

        <p className="font-body text-[11px] text-white/20">&copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
      </footer>
    </>
  );
}
