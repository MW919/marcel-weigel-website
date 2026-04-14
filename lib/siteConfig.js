/*
 * ═══════════════════════════════════════════════════════════
 *  SITE CONFIGURATION
 *  This is the ONLY file you need to edit to change content.
 *  
 *  BRANDING STRUCTURE:
 *  - Primary brand: "Marcel Weigel" (personal site)
 *  - Content brand: "Architecture Experience" (blog/newsletter)
 * ═══════════════════════════════════════════════════════════
 */

const siteConfig = {

  // ─── Personal Brand ────────────────────────────────────
  name: 'Marcel Weigel',
  siteUrl: 'https://marcel-weigel.com',  // Update once you have your domain

  // ─── Content Brand (blog/newsletter) ──────────────────
  contentBrand: 'Architecture Experience',
  contentBrandUrl: 'https://www.architecture-experience.com',

  // ─── Hero Section ─────────────────────────────────────
  hero: {
    greeting: 'WELCOME —',
    headline: "I'M MARCEL.",
    body: 'My passion is aligning business needs with technology through architecture. I specialize in Enterprise Architecture and Digital & AI Strategy, helping organizations bridge the gap between complexity and clarity to drive meaningful outcomes.',
    ctaPrimary: { label: 'Learn More', href: '/about' },
    ctaSecondary: { label: 'Contact', href: '/contact' },
  },

  // ─── Quote Section ────────────────────────────────────
  quote: {
    before: '',
    highlights: [
      { word: 'Architecture', after: ' is the foundation.' },
      { word: 'Strategy', after: ' is the compass.' },
      { word: 'Outcomes', after: ' are the measure.' },
    ],
  },

  // ─── Stats ────────────────────────────────────────────
  stats: [
    { value: 1500, suffix: '+', label: 'Followers', icon: 'content' },
    { value: 13, suffix: '+', label: 'Years of Experience', icon: 'awards' },
    { value: 5, suffix: '+', label: 'Articles Published', icon: 'speaker' },
  ],

  // ─── About Page ───────────────────────────────────────
  about: {
    headline: 'Architecture Thinking as a Discipline',
    paragraphs: [
      'As an Enterprise Architect at ISS, I bridge the gap between business strategy and technology execution. My approach centers on architecture thinking — a structured yet adaptive way to align digital capabilities with organizational goals.',
      'With a background spanning logistics, digital transformation, and AI strategy, I\'ve helped organizations move from complexity to clarity. I believe the best architectures don\'t just describe systems — they enable decisions, accelerate outcomes, and create lasting value.',
      'I share my thinking regularly through articles, frameworks, and speaking engagements — published on my blog "Architecture Experience".',
    ],
  },

  // ─── Upcoming Event ───────────────────────────────────
  upcomingEvent: {
    title: 'Enterprise Architecture Summit 2026',
    date: 'Mar 20, 2026',
    location: 'Frankfurt, Germany',
    description: 'Architecture Thinking in the Age of AI — Keynote & Panel Discussion',
  },

  // ─── Contact ──────────────────────────────────────────
  contact: {
    headline: "LET'S CONNECT",
    body: 'I provide expert insights on enterprise architecture, digital & AI strategy, and digital transformation. Let\'s discuss how I can add value to your upcoming events, projects, or initiatives.',
    email: 'website@marcelweigel.com',
  },

  // ─── Footer ───────────────────────────────────────────
  tagline: 'Information is everywhere. Clarity is rare.',

  // ─── Navigation ───────────────────────────────────────
  navLinks: [
    { label: 'Read', href: '/read' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ],
  footerLinks: [
    { label: 'Home', href: '/' },
    { label: 'Read', href: '/read' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
    { label: 'Impressum', href: '/impressum' },
    { label: 'Datenschutz', href: '/datenschutz' },
  ],

  // ─── Social Links ─────────────────────────────────────
  socialLinks: [
    { platform: 'LinkedIn', url: 'https://www.linkedin.com/in/marcel-weigel/' },
  ],

  // ─── Impressum (fill in before going live!) ───────────
  impressum: {
    fullName: 'Marcel Weigel',
    address: 'c/o IP-Management #8916\nLudwig-Erhard-Straße 18\n20459 Hamburg',
    email: 'website@marcelweigel.com',
    phone: '+49 40 696328495',
    vatId: '',
    responsibleForContent: 'Marcel Weigel',
  },
};

export default siteConfig;
