import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MeshBackground from '@/components/MeshBackground';

export const metadata = {
  title: 'Marcel Weigel',
  description: 'I provide expert insights on the latest technology trends and enterprise architecture. Let\'s discuss how I can add value to your upcoming events, projects, or initiatives.',
  keywords: ['Marcel Weigel', 'Enterprise Architecture', 'Digital Strategy', 'AI Strategy', 'Architecture Thinking', 'Architecture Experience'],
  openGraph: {
    title: 'Marcel Weigel',
    description: 'I provide expert insights on the latest technology trends and enterprise architecture. Let\'s discuss how I can add value to your upcoming events, projects, or initiatives.',
    url: 'https://www.marcel-weigel.com',
    siteName: 'Marcel Weigel',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Marcel Weigel',
    description: 'I provide expert insights on the latest technology trends and enterprise architecture. Let\'s discuss how I can add value to your upcoming events, projects, or initiatives.',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
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
