import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StarBackground from '@/components/StarBackground';

export const metadata = {
  title: 'Marcel Weigel — Enterprise Architecture & Digital Strategy',
  description: 'Aligning technology with business needs through architecture thinking. Enterprise Architecture & Digital Strategy insights by Marcel Weigel.',
  keywords: ['Marcel Weigel', 'Enterprise Architecture', 'Digital Strategy', 'AI Strategy', 'Architecture Thinking', 'Architecture Experience'],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <StarBackground />
        <div className="relative z-[1]">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
