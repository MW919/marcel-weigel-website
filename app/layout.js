import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MeshBackground from '@/components/MeshBackground';

export const metadata = {
  title: {
    default: 'Marcel Weigel — Enterprise Architect | I turn complexity into clarity',
    template: '%s — Marcel Weigel',
  },
  description: 'Marcel Weigel is an Enterprise Architect specializing in Enterprise Architecture, Digital & AI Strategy, and Digital Transformation. I turn complexity into clarity.',
  keywords: ['Marcel Weigel', 'Enterprise Architecture', 'Digital Strategy', 'AI Strategy', 'Architecture Thinking', 'Architecture Experience', 'Digital Transformation', 'Business Domain Architecture', 'Solution Architecture'],
  metadataBase: new URL('https://marcel-weigel.com'),
  alternates: {
    canonical: '/',
    types: {
      'application/rss+xml': 'https://www.architecture-experience.com/rss/',
    },
  },
  openGraph: {
    title: 'Marcel Weigel — I turn complexity into clarity',
    description: 'Enterprise Architect specializing in Enterprise Architecture, Digital & AI Strategy, and Digital Transformation.',
    url: 'https://marcel-weigel.com',
    siteName: 'Marcel Weigel',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Marcel Weigel — I turn complexity into clarity',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'Marcel Weigel — I turn complexity into clarity',
    description: 'Enterprise Architect specializing in Enterprise Architecture, Digital & AI Strategy, and Digital Transformation.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
};

// JSON-LD Structured Data — Person
const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': 'https://marcel-weigel.com/#person',
  name: 'Marcel Weigel',
  url: 'https://marcel-weigel.com',
  image: 'https://marcel-weigel.com/images/hero-photo.webp',
  jobTitle: 'Enterprise Architect',
  worksFor: {
    '@type': 'Organization',
    name: 'ISS',
  },
  description: 'Enterprise Architect specializing in Enterprise Architecture, Digital & AI Strategy, and Digital Transformation. I turn complexity into clarity.',
  knowsAbout: [
    'Enterprise Architecture',
    'Business Domain Architecture',
    'Solution Architecture',
    'Digital Strategy',
    'AI Strategy',
    'Digital Transformation',
    'Architecture Thinking',
    'Architecture Governance',
  ],
  sameAs: [
    'https://www.linkedin.com/in/marcel-weigel/',
    'https://www.architecture-experience.com',
  ],
};

// JSON-LD Structured Data — WebSite
const webSiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://marcel-weigel.com/#website',
  name: 'Marcel Weigel',
  url: 'https://marcel-weigel.com',
  description: 'Personal website of Marcel Weigel — Enterprise Architect specializing in Enterprise Architecture, Digital & AI Strategy, and Digital Transformation.',
  author: {
    '@id': 'https://marcel-weigel.com/#person',
  },
  publisher: {
    '@id': 'https://marcel-weigel.com/#person',
  },
  inLanguage: 'en',
};

// JSON-LD Structured Data — Organization (personal brand)
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://marcel-weigel.com/#organization',
  name: 'Marcel Weigel',
  url: 'https://marcel-weigel.com',
  logo: 'https://marcel-weigel.com/images/signature.webp',
  description: 'Personal brand of Marcel Weigel — Enterprise Architecture, Digital & AI Strategy, and Digital Transformation.',
  founder: {
    '@id': 'https://marcel-weigel.com/#person',
  },
  sameAs: [
    'https://www.linkedin.com/in/marcel-weigel/',
    'https://www.architecture-experience.com',
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script async src="https://plausible.io/js/pa-pcvSpcMy-L8YDAPdnch5m.js"></script>
        <script dangerouslySetInnerHTML={{ __html: `window.plausible=window.plausible||function(){(plausible.q=plausible.q||[]).push(arguments)},plausible.init=plausible.init||function(i){plausible.o=i||{}};plausible.init()` }} />
        <link rel="alternate" type="application/rss+xml" title="Architecture Experience — RSS Feed" href="https://www.architecture-experience.com/rss/" />
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify([personSchema, webSiteSchema, organizationSchema]) }}
        />
        <MeshBackground />
        <div className="relative z-[1]">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
