import Link from 'next/link';
import siteConfig from '@/lib/siteConfig';
import { LinkedInIcon } from './Icons';

export default function Footer() {
  return (
    <footer className="py-12 px-4 md:px-8 border-t border-accent/10 bg-brand-bg text-center">
      <div className="w-[50px] h-[50px] rounded-xl bg-gradient-to-br from-accent to-accent-dark flex items-center justify-center font-heading font-extrabold text-xl text-white mx-auto mb-5">MW</div>

      <p className="font-body text-[13px] text-brand-muted max-w-[600px] mx-auto mb-6 leading-relaxed">{siteConfig.tagline}</p>

      {siteConfig.socialLinks?.length > 0 && (
        <div className="flex gap-4 justify-center mb-6">
          {siteConfig.socialLinks.map((link) => (
            <a key={link.platform} href={link.url} target="_blank" rel="noopener noreferrer" className="text-brand-muted hover:text-accent-light transition-colors duration-300" aria-label={link.platform}>
              {link.platform === 'LinkedIn' && <LinkedInIcon />}
            </a>
          ))}
        </div>
      )}

      {/* Main nav links */}
      <div className="flex gap-2 justify-center flex-wrap mb-4">
        {siteConfig.footerLinks.filter(l => !['Impressum','Datenschutz'].includes(l.label)).map((link, i, arr) => (
          <span key={link.label}>
            <Link href={link.href} className="no-underline font-heading text-[11px] font-medium tracking-[2px] uppercase text-brand-muted hover:text-accent-light transition-colors duration-300">{link.label}</Link>
            {i < arr.length - 1 && <span className="text-white/15 mx-3 text-[11px]">|</span>}
          </span>
        ))}
      </div>

      {/* Legal links — separate line, always visible */}
      <div className="flex gap-2 justify-center flex-wrap mb-6">
        <Link href="/impressum" className="no-underline font-heading text-[10px] font-medium tracking-[2px] uppercase text-brand-muted/60 hover:text-accent-light transition-colors duration-300">Impressum</Link>
        <span className="text-white/10 mx-2 text-[10px]">|</span>
        <Link href="/datenschutz" className="no-underline font-heading text-[10px] font-medium tracking-[2px] uppercase text-brand-muted/60 hover:text-accent-light transition-colors duration-300">Datenschutz</Link>
      </div>

      <p className="font-body text-[11px] text-white/20">© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
    </footer>
  );
}
