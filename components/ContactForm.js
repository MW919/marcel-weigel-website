'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, just show success. Later we can add an API route.
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="p-10 bg-brand-card rounded-2xl border border-accent/20 text-center">
        <div className="text-4xl mb-4">✓</div>
        <h3 className="font-heading text-xl font-bold mb-2">Message Sent</h3>
        <p className="font-body text-sm text-brand-muted">
          Thank you for reaching out. I&apos;ll get back to you soon.
        </p>
        <button
          onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', subject: '', message: '' }); }}
          className="mt-6 font-heading text-[11px] tracking-[2px] uppercase text-accent-light hover:text-accent transition-colors cursor-pointer bg-transparent border-none"
        >
          Send another message
        </button>
      </div>
    );
  }

  const inputClasses = `
    w-full py-3.5 px-4 bg-white/[0.04] border border-accent/15 rounded-lg
    text-brand-text font-body text-[15px] outline-none
    focus:border-accent transition-colors duration-300
    placeholder:text-brand-muted/40
  `;

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5 p-6 md:p-9 bg-brand-card rounded-2xl border border-accent/10">
      <div>
        <label className="block font-heading text-[11px] tracking-[2px] uppercase text-brand-muted mb-2">
          Name
        </label>
        <input
          type="text"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          placeholder="Your name"
          className={inputClasses}
        />
      </div>

      <div>
        <label className="block font-heading text-[11px] tracking-[2px] uppercase text-brand-muted mb-2">
          Email
        </label>
        <input
          type="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          placeholder="your@email.com"
          className={inputClasses}
        />
      </div>

      <div>
        <label className="block font-heading text-[11px] tracking-[2px] uppercase text-brand-muted mb-2">
          Subject
        </label>
        <input
          type="text"
          value={formData.subject}
          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
          placeholder="What is this about?"
          className={inputClasses}
        />
      </div>

      <div>
        <label className="block font-heading text-[11px] tracking-[2px] uppercase text-brand-muted mb-2">
          Message
        </label>
        <textarea
          rows={5}
          required
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Your message..."
          className={`${inputClasses} resize-y`}
        />
      </div>

      <button
        type="submit"
        className="self-start py-3.5 px-9 bg-gradient-to-br from-accent to-accent-dark text-white font-heading text-xs font-semibold tracking-[2px] uppercase rounded-md border-none cursor-pointer hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(117,70,140,0.4)] transition-all duration-300"
      >
        Send Message
      </button>
    </form>
  );
}
