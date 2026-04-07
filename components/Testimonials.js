'use client';

import { useRef, useState, useEffect } from 'react';

const testimonials = [
  {
    quote: "Marcel is one of those rare professionals who combines deep technical commitment with a genuinely collaborative spirit — highly skilled, utterly dedicated, and refreshingly easy to work with. He has a sharp understanding of the delicate balance between delivering customer-facing solutions and meeting enterprise-scale expectations. What truly sets him apart is how he brings all of this with genuine kindness toward everyone around him — without ever compromising his assertiveness.",
    name: "Hugo Bandeira Tavares",
    title: "Enterprise & Solutions Architecture | Digital Products",
    initials: "HT",
    photo: "/images/testimonials/hugo-tavares.jpg"
  },
  {
    quote: "I worked with Marcel on a number of projects from data related activities to finance ERP selection. Marcel is a great professional, spoke very well when presenting to the business and gave clear direction. Marcel was always a good go to person for some 'sanity' checks and gave well balanced advise. I always enjoyed working with Marcel and I hope to again one day in the future.",
    name: "Alex Bruce",
    title: "MDM, Data Governance and Data Quality",
    initials: "AB",
    photo: "/images/testimonials/alex-bruce.jpg"
  },
  {
    quote: "I had the pleasure of collaborating closely with Marcel for two years on Global Enterprise Architecture governance, and his expertise and dedication are truly exceptional. Marcel possesses a deep understanding of architectural frameworks and governance processes, which significantly enhanced our initiatives. In addition to his technical skills, he has great business insight and was a valuable part of the local IT leadership team, bringing clarity to the IT roadmap.",
    name: "Pernille Sommerlund Wolf",
    title: "Domain Architect, Finance and P&C",
    initials: "PW",
    photo: "/images/testimonials/pernille-wolf.jpg"
  },
  {
    quote: "I had the pleasure of working with Marcel Weigel on a project where our roles intersected as an Enterprise Architect and a Data Governance Manager. Marcel consistently demonstrated exceptional expertise, strategic thinking, and a collaborative spirit. His ability to design scalable solutions and communicate complex concepts clearly made our collaboration highly effective. I highly recommend Marcel Weigel for his technical acumen and teamwork skills.",
    name: "Olga Cristina Carvalho",
    title: "Data Governance | Master Data Management",
    initials: "OC",
    photo: "/images/testimonials/olga-carvalho.jpg"
  },
  {
    quote: "I had a wonderful opportunity to work with Marcel while working at Schenker for IT division of DB Schenker Land Transport. He is very passionate about what he does and has a crisp and clear way of putting across what he believes and thinks. His expertise and innovative approach has been instrumental in driving our projects further. He is a gem of a person, a natural leader and a collaborative team player.",
    name: "Mohit Agarwal",
    title: "Manager, IT Product Owner at DSV",
    initials: "MA",
    photo: "/images/testimonials/mohit-agarwal.jpg"
  },
  {
    quote: "I've had very interesting dialogues with Marcel regarding Enterprise Architecture, particularly about capabilities and a pragmatic approach to implementing Enterprise Architecture. I find Marcel knowledgeable and open-minded, with a clear focus. I would recommend Marcel for leading architectural roles, especially concerning EA.",
    name: "Stefan Reifalk",
    title: "Strategy | Innovation | Enterprise Architecture",
    initials: "SR",
    photo: "/images/testimonials/stefan-reifalk.jpg"
  }
];

// Avatar component — shows photo if available, falls back to initials
function Avatar({ photo, initials, name }) {
  const [imgError, setImgError] = useState(false);

  if (photo && !imgError) {
    return (
      <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-accent/10">
        <img
          src={photo}
          alt={name}
          className="w-full h-full object-cover"
          onError={() => setImgError(true)}
        />
      </div>
    );
  }

  return (
    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent/30 to-accent-dark/40 flex items-center justify-center flex-shrink-0 ring-2 ring-accent/10">
      <span className="font-heading text-[11px] font-bold tracking-wider text-accent-light">
        {initials}
      </span>
    </div>
  );
}

// Floating quote marks background
function FloatingQuotes() {
  const marks = [
    { x: '8%', y: '15%', size: 120, delay: 0, duration: 18 },
    { x: '85%', y: '20%', size: 90, delay: 3, duration: 22 },
    { x: '50%', y: '70%', size: 100, delay: 6, duration: 20 },
    { x: '20%', y: '75%', size: 70, delay: 9, duration: 16 },
    { x: '75%', y: '60%', size: 80, delay: 2, duration: 24 },
    { x: '35%', y: '10%', size: 60, delay: 5, duration: 19 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {marks.map((m, i) => (
        <svg
          key={i}
          width={m.size}
          height={m.size}
          viewBox="0 0 32 32"
          fill="none"
          className="absolute"
          style={{
            left: m.x,
            top: m.y,
            opacity: 0.04,
            animation: `floatQuote ${m.duration}s ease-in-out ${m.delay}s infinite`,
            transform: 'translate(-50%, -50%)',
          }}
        >
          <path
            d="M6 18.5C6 13.8 8.4 10.2 13 8L14 9.8C10.2 12 9.2 14.4 9 16.5H13V24H6V18.5ZM19 18.5C19 13.8 21.4 10.2 26 8L27 9.8C23.2 12 22.2 14.4 22 16.5H26V24H19V18.5Z"
            fill="#9b6bb5"
          />
        </svg>
      ))}
    </div>
  );
}

// LinkedIn mini icon
function LinkedInBadge() {
  return (
    <div className="flex items-center gap-1.5 text-[10px] tracking-[1.5px] uppercase text-brand-muted/50">
      <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="text-[#0A66C2]/40">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
      <span>LinkedIn</span>
    </div>
  );
}

export default function Testimonials() {
  const scrollRef = useRef(null);
  const sectionRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [visible, setVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);

    // Determine which card is most centered
    const cards = el.children;
    const center = el.scrollLeft + el.clientWidth / 2;
    let closest = 0;
    let closestDist = Infinity;
    for (let i = 0; i < cards.length; i++) {
      const cardCenter = cards[i].offsetLeft + cards[i].offsetWidth / 2;
      const dist = Math.abs(cardCenter - center);
      if (dist < closestDist) {
        closestDist = dist;
        closest = i;
      }
    }
    setActiveIndex(closest);
  };

  // Intersection observer for entrance animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true);
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

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
    <section ref={sectionRef} className="py-20 px-0 bg-brand-bg relative overflow-hidden">
      {/* Floating quote marks background */}
      <FloatingQuotes />

      {/* Radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(117,70,140,0.08)_0%,transparent_60%)]" />

      <div className="relative z-[1] max-w-[1200px] mx-auto">
        {/* Header */}
        <div
          className="text-center mb-12 px-4 transition-all duration-700"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(30px)',
          }}
        >
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

        {/* Cards */}
        <div className="relative">
          {/* Desktop arrows */}
          <button
            onClick={() => scroll(-1)}
            className={`hidden md:flex absolute left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-brand-bg/90 border border-accent/20 items-center justify-center transition-all duration-300 backdrop-blur-sm cursor-pointer hover:border-accent/50 hover:bg-accent/10 ${canScrollLeft ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            aria-label="Previous testimonial"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent-light"><path d="M15 18l-6-6 6-6"/></svg>
          </button>
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

          {/* Scrollable cards */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto px-6 md:px-14 pb-4 scroll-smooth"
            style={{ scrollSnapType: 'x mandatory', scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="min-w-[300px] max-w-[340px] flex-shrink-0 transition-all duration-500"
                style={{
                  scrollSnapAlign: 'start',
                  opacity: visible ? 1 : 0,
                  transform: visible ? 'translateY(0)' : 'translateY(40px)',
                  transitionDelay: visible ? `${i * 120}ms` : '0ms',
                }}
              >
                <div
                  className={`h-full rounded-xl border bg-brand-card p-6 flex flex-col gap-4 transition-all duration-500 ${
                    activeIndex === i
                      ? 'border-accent/40 shadow-[0_0_25px_rgba(117,70,140,0.15)]'
                      : 'border-accent/10 hover:border-accent/25'
                  }`}
                >
                  {/* Top row: quote icon + LinkedIn badge */}
                  <div className="flex items-start justify-between">
                    <svg width="28" height="28" viewBox="0 0 32 32" fill="none" className="text-accent/25 flex-shrink-0">
                      <path d="M6 18.5C6 13.8 8.4 10.2 13 8L14 9.8C10.2 12 9.2 14.4 9 16.5H13V24H6V18.5ZM19 18.5C19 13.8 21.4 10.2 26 8L27 9.8C23.2 12 22.2 14.4 22 16.5H26V24H19V18.5Z" fill="currentColor" />
                    </svg>
                    <LinkedInBadge />
                  </div>

                  {/* Quote */}
                  <p className="font-body text-[13px] leading-[1.8] text-brand-muted flex-grow">
                    &ldquo;{t.quote}&rdquo;
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3 pt-3 border-t border-accent/10">
                    <Avatar photo={t.photo} initials={t.initials} name={t.name} />
                    <div className="min-w-0">
                      <div className="font-heading text-[13px] font-semibold text-brand-text truncate">{t.name}</div>
                      <div className="font-body text-[11px] text-brand-muted truncate">{t.title}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dot indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <div
                key={i}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  activeIndex === i
                    ? 'w-6 bg-accent'
                    : 'w-1.5 bg-accent/20'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Hide scrollbar + float animation */}
      <style jsx>{`
        div::-webkit-scrollbar { display: none; }
        @keyframes floatQuote {
          0%, 100% { transform: translate(-50%, -50%) rotate(0deg) scale(1); opacity: 0.04; }
          25% { transform: translate(-50%, calc(-50% - 15px)) rotate(3deg) scale(1.05); opacity: 0.06; }
          50% { transform: translate(calc(-50% + 10px), calc(-50% - 8px)) rotate(-2deg) scale(1); opacity: 0.04; }
          75% { transform: translate(calc(-50% - 8px), calc(-50% + 12px)) rotate(2deg) scale(0.95); opacity: 0.05; }
        }
      `}</style>
    </section>
  );
}
