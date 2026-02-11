'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import siteConfig from '@/lib/siteConfig';
import { MenuIcon, CloseIcon } from './Icons';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [drawPhase, setDrawPhase] = useState(0); // 0=hidden, 1=drawing, 2=glow

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  useEffect(() => {
    // Phase 1: start drawing after short delay
    const t1 = setTimeout(() => setDrawPhase(1), 500);
    // Phase 2: activate glow after drawing completes (3.5s draw + 0.5s delay)
    const t2 = setTimeout(() => setDrawPhase(2), 4200);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-[1000] flex items-center justify-between px-4 md:px-8 lg:px-12 transition-all duration-400 ${scrolled ? 'h-16 bg-brand-bg/95 backdrop-blur-xl border-b border-accent/15' : 'h-20 bg-transparent border-b border-transparent'}`}>
        <Link href="/" className="flex items-center no-underline relative">
          <div className={`relative transition-all duration-300 ${scrolled ? 'h-10' : 'h-12'}`} style={{ aspectRatio: '1964 / 576' }}>
            {/* Glow layer — behind the signature, purple tinted */}
            <img
              src="/images/signature.png"
              alt=""
              aria-hidden="true"
              className="absolute inset-0 h-full w-auto object-contain pointer-events-none"
              style={{
                filter: 'blur(12px) brightness(1.5) sepia(1) hue-rotate(250deg) saturate(3)',
                opacity: drawPhase >= 2 ? 0.7 : 0,
                transition: 'opacity 1.2s ease-in',
                animation: drawPhase >= 2 ? 'sigGlowPulse 3s ease-in-out infinite' : 'none',
              }}
            />
            {/* Main signature */}
            <img
              src="/images/signature.png"
              alt="Marcel Weigel"
              className="h-full w-auto object-contain relative"
              style={{ opacity: drawPhase >= 1 ? 1 : 0, transition: 'opacity 0.3s' }}
            />
            {/* Drawing reveal mask */}
            <div
              className="absolute inset-0"
              style={{
                background: 'var(--bg)',
                clipPath: drawPhase >= 1 ? 'inset(0 0 0 100%)' : 'inset(0 0 0 0)',
                transition: 'clip-path 3.5s cubic-bezier(0.22, 0.61, 0.36, 1)',
              }}
            />
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {siteConfig.navLinks.map((link) => (
            <Link key={link.label} href={link.href} className="font-heading text-xs font-medium tracking-[2.5px] uppercase text-brand-muted hover:text-brand-text transition-colors duration-300 no-underline">
              {link.label}
            </Link>
          ))}
        </nav>

        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden bg-transparent border-none text-brand-text cursor-pointer p-2" aria-label="Toggle menu">
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </header>

      {/* Glow pulse keyframes */}
      <style jsx global>{`
        @keyframes sigGlowPulse {
          0%, 100% { opacity: 0.5; filter: blur(12px) brightness(1.5) sepia(1) hue-rotate(250deg) saturate(3); }
          50% { opacity: 0.8; filter: blur(16px) brightness(1.8) sepia(1) hue-rotate(250deg) saturate(3); }
        }
      `}</style>

      <div className={`fixed inset-0 z-[999] bg-brand-bg/[0.98] backdrop-blur-3xl flex flex-col items-center justify-center gap-10 transition-opacity duration-400 ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        {siteConfig.navLinks.map((link, i) => (
          <Link key={link.label} href={link.href} onClick={() => setMenuOpen(false)}
            className="no-underline text-brand-text font-heading text-[28px] font-semibold tracking-[4px] uppercase transition-all duration-500"
            style={{ transitionDelay: `${i * 0.1}s`, opacity: menuOpen ? 1 : 0, transform: menuOpen ? 'translateY(0)' : 'translateY(20px)' }}>
            {link.label}
          </Link>
        ))}
      </div>
    </>
  );
}
