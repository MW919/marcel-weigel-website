import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(117,70,140,0.08)_0%,transparent_60%)]" />

      <div className="relative z-[1] text-center max-w-[500px]">
        {/* Large 404 */}
        <div className="relative mb-6">
          <span className="font-heading text-[clamp(8rem,20vw,12rem)] font-extrabold leading-none bg-gradient-to-br from-accent/20 to-accent-dark/10 bg-clip-text text-transparent select-none">
            404
          </span>
          {/* Glow behind */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[200px] h-[200px] rounded-full bg-accent/10 blur-[60px]" />
          </div>
        </div>

        <h1 className="font-heading text-[clamp(1.5rem,3vw,2rem)] font-extrabold mb-4" style={{ color: '#f4f6fc' }}>
          Page Not Found
        </h1>

        <p className="font-body text-base leading-[1.8] text-brand-muted mb-8">
          The page you're looking for doesn't exist or has been moved. Let's get you back on track.
        </p>

        <div className="flex gap-4 justify-center flex-wrap">
          <Link
            href="/"
            className="inline-flex items-center gap-2 py-3.5 px-8 bg-gradient-to-br from-accent to-accent-dark text-white no-underline font-heading text-xs font-semibold tracking-[2px] uppercase rounded-md hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(117,70,140,0.4)] transition-all duration-300"
          >
            Back to Home
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 py-3.5 px-8 bg-transparent text-brand-text no-underline font-heading text-xs font-semibold tracking-[2px] uppercase rounded-md border border-accent/40 hover:border-accent hover:bg-accent/10 transition-all duration-300"
          >
            Contact
          </Link>
        </div>
      </div>
    </section>
  );
}
