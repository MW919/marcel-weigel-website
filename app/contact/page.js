import AnimatedSection from '@/components/AnimatedSection';
import ContactForm from '@/components/ContactForm';
import siteConfig from '@/lib/siteConfig';

export const metadata = {
  title: 'Contact — Architecture Experience',
  description: 'Get in touch with Marcel Weigel for speaking engagements, advisory, or collaboration.',
};

export default function ContactPage() {
  return (
    <section className="min-h-screen pt-32 pb-20 px-4 md:px-8">
      <div className="max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        {/* Text */}
        <AnimatedSection>
          <span className="font-heading text-xs font-semibold tracking-[4px] uppercase text-accent-light block mb-2">
            CONTACT
          </span>
          <h1 className="font-heading text-[clamp(2rem,5vw,3rem)] font-extrabold mb-5">
            {siteConfig.contact.headline}
          </h1>
          <p className="font-body text-base leading-[1.8] text-brand-muted mb-8">
            {siteConfig.contact.body}
          </p>

          {/* Direct email option */}
          <div className="p-6 bg-brand-card rounded-xl border border-accent/10">
            <p className="font-heading text-[11px] tracking-[2px] uppercase text-brand-muted mb-2">
              Prefer email?
            </p>
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="font-body text-accent-light hover:text-accent transition-colors duration-300 break-all"
            >
              {siteConfig.contact.email}
            </a>
          </div>

          {/* LinkedIn */}
          {siteConfig.socialLinks?.[0] && (
            <div className="mt-4 p-6 bg-brand-card rounded-xl border border-accent/10">
              <p className="font-heading text-[11px] tracking-[2px] uppercase text-brand-muted mb-2">
                Connect on LinkedIn
              </p>
              <a
                href={siteConfig.socialLinks[0].url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-accent-light hover:text-accent transition-colors duration-300"
              >
                linkedin.com/in/marcel-weigel
              </a>
            </div>
          )}
        </AnimatedSection>

        {/* Form */}
        <AnimatedSection delay={0.2}>
          <ContactForm />
        </AnimatedSection>
      </div>
    </section>
  );
}
