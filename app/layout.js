import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MeshBackground from '@/components/MeshBackground';

export const metadata = {
  title: 'Marcel Weigel',
  description: 'Aligning technology with business needs through architecture thinking. Enterprise Architecture & Digital Strategy insights by Marcel Weigel.',
  keywords: ['Marcel Weigel', 'Enterprise Architecture', 'Digital Strategy', 'AI Strategy', 'Architecture Thinking', 'Architecture Experience'],
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
