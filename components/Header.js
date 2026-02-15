'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import siteConfig from '@/lib/siteConfig';
import WritingSignature from './WritingSignature';
import { MenuIcon, CloseIcon } from './Icons';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const hideYRef = useRef(0);

  useEffect(() => {
    let lastY = 0;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 60);

      // Hide when scrolling down past 100px
      if (y > 100 && y > lastY + 5) {
        setHidden(prev => {
          if (!prev) hideYRef.current = y;
          return true;
        });
      }
      // Show: must scroll up 50px+ from hide point, OR be near top
      else if (y < lastY - 8) {
        if (y < 80 || hideYRef.current - y > 50) {
          setHidden(false);
        }
      }
      lastY = y;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[1000] flex items-center justify-between px-4 md:px-8 lg:px-12 transition-all duration-400 ${scrolled ? 'h-14 md:h-16 bg-brand-bg/95 backdrop-blur-xl border-b border-accent/15' : 'h-16 md:h-20 bg-transparent border-b border-transparent'}`}
        style={{ transform: hidden ? 'translateY(-100%)' : 'translateY(0)' }}
      >
        <Link href="/" className="flex items-center no-underline relative">
          <WritingSignature
            className={`transition-all duration-300 ${scrolled ? 'h-6 md:h-8' : 'h-7 md:h-9'}`}
            duration={3.5}
            delay={0.5}
            trigger="mount"
          />
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
