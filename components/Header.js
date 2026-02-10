'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import siteConfig from '@/lib/siteConfig';
import { MenuIcon, CloseIcon } from './Icons';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-[1000] flex items-center justify-between px-4 md:px-8 lg:px-12 transition-all duration-400 ${scrolled ? 'h-16 bg-brand-bg/95 backdrop-blur-xl border-b border-accent/15' : 'h-20 bg-transparent border-b border-transparent'}`}>
        <Link href="/" className="flex items-center gap-3 no-underline">
          <div className="w-10 h-10 rounded-[10px] bg-gradient-to-br from-accent to-accent-dark flex items-center justify-center font-heading font-extrabold text-lg text-white shrink-0">
            MW
          </div>
          <span className="font-heading font-bold text-[15px] tracking-[1.5px] uppercase text-brand-text">
            {siteConfig.name}
          </span>
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
