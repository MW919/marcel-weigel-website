'use client';

import { useEffect, useRef, useState } from 'react';

const milestones = [
  {
    year: '2010',
    title: 'Where It All Began',
    description: 'Started as a freight forwarding and logistics services apprentice — learning the business from the ground up. This hands-on foundation in logistics operations would shape everything that followed.',
    icon: '📦'
  },
  {
    year: '2013',
    title: 'Entering the World of IT',
    description: 'Transitioned into a Junior Functional Consultant role, contributing to the implementation of a group-wide transportation platform. Translating end-to-end logistics processes into scalable system configurations — the first spark of bridging business and technology.',
    icon: '💻'
  },
  {
    year: '2015',
    title: 'Operations & Service Management',
    description: 'Stepped into IT Service Management, bridging business architecture, service delivery, and operations for pan-European logistics platforms. Discovered the power of ITIL frameworks and operational excellence.',
    icon: '⚙️'
  },
  {
    year: '2016',
    title: 'Building Products & Growing',
    description: 'Took ownership as Application Manager and Product Owner for a large-scale digital platform serving thousands of users across European land transport. Learned to steer demand, shape roadmaps, and find solutions for real business needs. In parallel, began studying Business Informatics — hungry to deepen the connection between business and technology.',
    icon: '🚀'
  },
  {
    year: '2018',
    title: 'The Architecture Moment',
    description: 'Became a Global Solution & Domain Architect — the role that changed everything. Designing and governing global domain architecture, translating business strategy into scalable solutions across regions. This was PLAN: the huge step from building products to shaping the blueprint.',
    icon: '🏗️'
  },
  {
    year: '2021',
    title: 'Leading Digital Transformation',
    description: 'Led a cross-functional product team as Squad Lead, driving digital transformation across multimodal logistics. Acted as a trusted advisor to senior leadership, shaping scalable digital strategies and delivering measurable cost savings and business impact.',
    icon: '⚡'
  },
  {
    year: '2022',
    title: 'Enterprise Architecture',
    description: 'Joined the Global Enterprise Architecture and IT leadership team. Building the EA function from the ground up, planning target landscapes, shaping the architecture repository, and translating between business and technology through capability mapping. Architecture, Architecture, Architecture.',
    icon: '🎯'
  },
  {
    year: '2025',
    title: 'Architecture Experience',
    description: 'Launched the Architecture Experience blog and newsletter — a platform to share insights, fresh perspectives, and practical thinking on Enterprise Architecture, Digital Strategy, and AI with a growing community of practitioners and leaders.',
    icon: '✍️'
  },
];

export default function Timeline() {
  const sectionRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [visibleItems, setVisibleItems] = useState(Array(milestones.length).fill(false));

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
