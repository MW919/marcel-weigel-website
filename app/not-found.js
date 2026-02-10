import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
      <h1 className="font-heading text-[80px] font-extrabold bg-gradient-to-br from-brand-text to-accent-light bg-clip-text text-transparent mb-4">
        404
      </h1>
      <p className="font-body text-lg text-brand-muted mb-8">
        This page doesn&apos;t exist.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 py-3.5 px-8 bg-gradient-to-br from-accent to-accent-dark text-white no-underline font-heading text-xs font-semibold tracking-[2px] uppercase rounded-md hover:-translate-y-0.5 transition-all duration-300"
      >
        Go Home
      </Link>
    </section>
  );
}
