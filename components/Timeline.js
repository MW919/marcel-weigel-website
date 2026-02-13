'use client';

import { useEffect, useRef, useState, useCallback } from 'react';

const milestones = [
  {
    year: '2012',
    title: 'Starting the Journey',
    description: 'Entered the world of IT and business technology, discovering the power of structured thinking to solve complex organizational challenges.',
    icon: '🚀'
  },
  {
    year: '2016',
    title: 'Digital Transformation',
    description: 'Led digital transformation initiatives across logistics and supply chain, learning firsthand how architecture decisions shape business outcomes.',
    icon: '⚡'
  },
  {
    year: '2020',
    title: 'Enterprise Architecture Leadership',
    description: 'Stepped into a dedicated Enterprise Architecture role, driving governance frameworks and technology roadmaps at enterprise scale.',
    icon: '🏗️'
  },
  {
    year: '2023',
    title: 'Architecture Experience',
    description: 'Launched the Architecture Experience blog and newsletter, sharing insights on EA, digital strategy, and architecture thinking with a growing community.',
    icon: '✍️'
  },
  {
    year: '2024',
    title: 'AI Strategy',
    description: 'Expanded focus into AI Strategy, helping organizations navigate the intersection of enterprise architecture and artificial intelligence.',
    icon: '🤖'
  },
  {
    year: 'Now',
    title: 'What Drives Me',
    description: 'Bridging business needs with technology through architecture. Turning complexity into clarity, and strategy into measurable outcomes.',
    icon: '🎯'
  },
];

export default function Timeline() {
  const sectionRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [visibleItems, setVisibleItems] = useState([false, false, false, false, false, false]);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        if (!sectionRef.current) { ticking = false; return; }
        const rect = sectionRef.current.getBoundingClientRect();
        const viewH = window.innerHeight;
        const sectionH = rect.height;

        const scrolled = Math.max(0, -rect.top + viewH * 0.3);
        const denom = sectionH - viewH * 0.4;
        setProgress(denom > 0 ? Math.min(scrolled / denom, 1) : 0);

        const items = sectionRef.current.querySelectorAll('[data-milestone]');
        setVisibleItems(prev => {
          let changed = false;
          const next = [...prev];
          items.forEach((el, i) => {
            if (!next[i] && el.getBoundingClientRect().top < viewH * 0.75) {
              next[i] = true;
              changed = true;
            }
          });
          return changed ? next : prev;
        });

        ticking = false;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={sectionRef} className="relative py-8">
      {/* Vertical line */}
      <div className="absolute left-6 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-[2px]">
        <div className="absolute inset-0 bg-accent/10 rounded-full" />
        <div
          className="absolute top-0 left-0 right-0 bg-gradient-to-b from-accent via-accent-light to-accent rounded-full transition-all duration-150"
          style={{ height: `${progress * 100}%` }}
        />
        <div
          className="absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-accent-light transition-all duration-150"
          style={{
            top: `${progress * 100}%`,
            boxShadow: '0 0 12px rgba(155,107,181,0.6), 0 0 24px rgba(117,70,140,0.3)',
            opacity: progress > 0 && progress < 1 ? 1 : 0,
          }}
        />
      </div>

      {milestones.map((m, i) => {
        const isVisible = visibleItems[i];
        const isEven = i % 2 === 0;

        return (
          <div
            key={i}
            data-milestone
            className={`relative flex items-start mb-16 last:mb-0 ${
              isEven ? 'md:flex-row' : 'md:flex-row-reverse'
            }`}
          >
            <div
              className={`absolute left-6 md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full border-2 flex items-center justify-center z-10 transition-all duration-500 ${
                isVisible
                  ? 'bg-brand-bg border-accent scale-100'
                  : 'bg-brand-bg border-accent/20 scale-75'
              }`}
            >
              <span className="text-sm">{m.icon}</span>
            </div>

            <div
              className={`ml-16 md:ml-0 md:w-[calc(50%-40px)] transition-all duration-700 ${
                isEven ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left md:ml-auto'
              }`}
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible
                  ? 'translateY(0) translateX(0)'
                  : `translateY(20px) translateX(${isEven ? '-20px' : '20px'})`,
              }}
            >
              <span className="inline-block font-heading text-xs font-bold tracking-[3px] uppercase text-accent-light mb-2">
                {m.year}
              </span>
              <h3 className="font-heading text-lg font-bold mb-2" style={{ color: '#f4f6fc' }}>
                {m.title}
              </h3>
              <p className="font-body text-sm leading-[1.8] text-brand-muted">
                {m.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
