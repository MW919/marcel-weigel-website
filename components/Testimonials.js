'use client';

import { useRef, useState, useEffect } from 'react';

const testimonials = [
  {
    quote: "I worked with Marcel on a number of projects from data related activities to finance ERP selection. Marcel is a great professional, spoke very well when presenting to the business and gave clear direction. Marcel was always a good go to person for some 'sanity' checks and gave well balanced advise. I always enjoyed working with Marcel and I hope to again one day in the future.",
    name: "Alex Bruce",
    title: "MDM, Data Governance and Data Quality",
    initials: "AB"
  },
  {
    quote: "I had the pleasure of collaborating closely with Marcel for two years on Global Enterprise Architecture governance, and his expertise and dedication are truly exceptional. Marcel possesses a deep understanding of architectural frameworks and governance processes, which significantly enhanced our initiatives. In addition to his technical skills, he has great business insight and was a valuable part of the local IT leadership team, bringing clarity to the IT roadmap.",
    name: "Pernille Sommerlund Wolf",
    title: "Domain Architect, Finance and P&C",
    initials: "PW"
  },
  {
    quote: "I had the pleasure of working with Marcel Weigel on a project where our roles intersected as an Enterprise Architect and a Data Governance Manager. Marcel consistently demonstrated exceptional expertise, strategic thinking, and a collaborative spirit. His ability to design scalable solutions and communicate complex concepts clearly made our collaboration highly effective. I highly recommend Marcel Weigel for his technical acumen and teamwork skills.",
    name: "Olga Cristina Carvalho",
    title: "Data Governance | Master Data Management",
    initials: "OC"
  },
  {
    quote: "I had a wonderful opportunity to work with Marcel while working at Schenker for IT division of DB Schenker Land Transport. He is very passionate about what he does and has a crisp and clear way of putting across what he believes and thinks. His expertise and innovative approach has been instrumental in driving our projects further. He is a gem of a person, a natural leader and a collaborative team player.",
    name: "Mohit Agarwal",
    title: "Manager, IT Product Owner at DSV",
    initials: "MA"
  },
  {
    quote: "I've had very interesting dialogues with Marcel regarding Enterprise Architecture, particularly about capabilities and a pragmatic approach to implementing Enterprise Architecture. I find Marcel knowledgeable and open-minded, with a clear focus. I would recommend Marcel for leading architectural roles, especially concerning EA.",
    name: "Stefan Reifalk",
    title: "Strategy | Innovation | Enterprise Architecture",
    initials: "SR"
  }
];

function QuoteIcon({ className }) {
  return (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none" className={className}>
      <path d="M6 18.5C6 13.8 8.4 10.2 13 8L14 9.8C10.2 12 9.2 14.4 9 16.5H13V24H6V18.5ZM19 18.5C19 13.8 21.4 10.2 26 8L27 9.8C23.2 12 22.2 14.4 22 16.5H26V24H19V18.5Z" fill="currentColor" />
    </svg>
  );
}

export default function Testimonials() {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener('scroll', checkScroll, { passive: true });
    window.addEventListener('resize', checkScroll);
    return () => {
      el.removeEventListener('scroll', checkScroll);
      window.removeEventListener('resize', checkScroll);
    };
  }, []);

  const scroll = (dir) => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.querySelector(':scope > *')?.offsetWidth || 340;
    el.scrollBy({ left: dir * (cardWidth + 24), behavior: 'smooth' });
  };

  return (
    <section className="py-20 px-0 bg-brand-bg relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(117,70,140,0.06)_0%,transparent_70%)]" />

      <div className="relative z-[1] max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="text-center mb-12 px-4">
          <span className="font-heading text-[14px] font-bold tracking-[4px] uppercase text-brand-text relative inline-block pb-2 mb-6">
            WHAT OTHERS SAY
            <span className="absolute bottom-0 left-0 right-0 h-[3px] rounded-sm" style={{ background: 'linear-gradient(90deg, transparent, #75468c, #9b6bb5, #75468c, transparent)' }} />
            <span className="absolute bottom-[-2px] left-[10%] right-[10%] h-[6px] rounded-full" style={{ background: 'linear-gradient(90deg, transparent, rgba(117,70,140,0.4), transparent)', filter: 'blur(4px)' }} />
          </span>
          <h2 className="font-heading text-[clamp(2rem,4vw,2.75rem)] font-extrabold mb-3" style={{ color: '#f4f6fc' }}>
            TESTIMONIALS
          </h2>
          <p className="font-body text-[clamp(1rem,2vw,1.15rem)] leading-relaxed text-brand-muted max-w-[500px] mx-auto">
            Kind words from colleagues and collaborators.
          </p>
        </div>

        {/* Cards with scroll arrows */}
        <div className="relative">
          {/* Left arrow */}
          <button
            onClick={() => scroll(-1)}
            className={`hidden md:flex absolute left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-brand-bg/90 border border-accent/20 items-center justify-center transition-all duration-300 backdrop-blur-sm cursor-pointer hover:border-accent/50 hover:bg-accent/10 ${canScrollLeft ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            aria-label="Previous testimonial"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent-light"><path d="M15 18l-6-6 6-6"/></svg>
          </button>

          {/* Right arrow */}
          <button
            onClick={() => scroll(1)}
            className={`hidden md:flex absolute right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-brand-bg/90 border border-accent/20 items-center justify-center transition-all duration-300 backdrop-blur-sm cursor-pointer hover:border-accent/50 hover:bg-accent/10 ${canScrollRight ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            aria-label="Next testimonial"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent-light"><path d="M9 18l6-6-6-6"/></svg>
          </button>

          {/* Mobile swipe arrows */}
          <div className="flex items-center justify-between absolute inset-0 pointer-events-none z-10 md:hidden px-1">
            <div className="pointer-events-auto animate-bounce-arrow-left">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent-light/50"><path d="M15 18l-6-6 6-6"/></svg>
            </div>
            <div className="pointer-events-auto animate-bounce-arrow-right">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent-light/50"><path d="M9 18l6-6-6-6"/></svg>
            </div>
          </div>

          {/* Scrollable container */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto px-6 md:px-14 pb-4 scroll-smooth"
            style={{ scrollSnapType: 'x mandatory', scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="min-w-[300px] max-w-[340px] flex-shrink-0"
                style={{ scrollSnapAlign: 'start' }}
              >
                <div className="h-full rounded-xl border border-accent/15 bg-brand-card p-6 flex flex-col gap-4 transition-all duration-300 hover:border-accent/30 hover:shadow-[0_4px_20px_rgba(117,70,140,0.1)]">
                  {/* Quote icon */}
                  <QuoteIcon className="text-accent/30 flex-shrink-0" />

                  {/* Quote text */}
                  <p className="font-body text-[13px] leading-[1.8] text-brand-muted flex-grow">
                    &ldquo;{t.quote}&rdquo;
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3 pt-3 border-t border-accent/10">
                    {/* Avatar circle with initials */}
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent/30 to-accent-dark/30 flex items-center justify-center flex-shrink-0">
                      <span className="font-heading text-[11px] font-bold tracking-wider text-accent-light">
                        {t.initials}
                      </span>
                    </div>
                    <div className="min-w-0">
                      <div className="font-heading text-[13px] font-semibold text-brand-text truncate">{t.name}</div>
                      <div className="font-body text-[11px] text-brand-muted truncate">{t.title}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Hide scrollbar */}
      <style jsx>{`
        div::-webkit-scrollbar { display: none; }
      `}</style>
    </section>
  );
}
