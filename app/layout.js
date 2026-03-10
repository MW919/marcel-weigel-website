import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MeshBackground from '@/components/MeshBackground';

export const metadata = {
  title: {
    default: 'Marcel Weigel',
    template: '%s — Marcel Weigel',
  },
  description: 'I provide expert insights on the latest technology trends and enterprise architecture. Let\'s discuss how I can add value to your upcoming events, projects, or initiatives.',
  keywords: ['Marcel Weigel', 'Enterprise Architecture', 'Digital Strategy', 'AI Strategy', 'Architecture Thinking', 'Architecture Experience', 'Digital Transformation'],
  metadataBase: new URL('https://marcel-weigel.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Marcel Weigel',
    description: 'I provide expert insights on the latest technology trends and enterprise architecture. Let\'s discuss how I can add value to your upcoming events, projects, or initiatives.',
    url: 'https://marcel-weigel.com',
    siteName: 'Marcel Weigel',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Marcel Weigel — Enterprise Architecture & Digital Strategy Leader',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'Marcel Weigel',
    description: 'I provide expert insights on the latest technology trends and enterprise architecture. Let\'s discuss how I can add value to your upcoming events, projects, or initiatives.',
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

// JSON-LD Structured Data
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Marcel Weigel',
  url: 'https://marcel-weigel.com',
  jobTitle: 'Enterprise Architect',
  description: 'Enterprise Architecture & Digital Strategy Leader. AI Strategist.',
  knowsAbout: [
    'Enterprise Architecture',
    'Digital Strategy',
    'AI Strategy',
    'Digital Transformation',
    'Architecture Thinking',
  ],
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
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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
