'use client';

import { useEffect, useRef, useState } from 'react';

const words = [
  { text: 'Turning' },
  { text: 'Complexity' },
  { text: 'into' },
  { text: 'Clarity', highlight: true },
];

export default function HeroHeadline() {
  const ref = useRef(null);
  const [visibleCount, setVisibleCount] = useState(0);
  const [underlineVisible, setUnderlineVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          words.forEach((_, i) => {
            setTimeout(() => setVisibleCount(i + 1), 300 + i * 350);
          });
          // Underline sweeps in after last word
          setTimeout(() => setUnderlineVisible(true), 300 + words.length * 350 + 300);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <p
      ref={ref}
      className="font-heading text-[clamp(1.05rem,4vw,2.8rem)] font-light leading-[1.85] italic text-center mb-8 md:mb-14 max-w-[800px] mx-auto px-2 whitespace-nowrap"
      style={{ color: '#d8d5e0' }}
    >
      {/* Opening quote */}
      <span
        className="inline-block mr-0 not-italic transition-all duration-500"
        style={{
          opacity: visibleCount >= 1 ? 0.35 : 0,
          color: '#9b6bb5',
          fontSize: '1.2em',
          lineHeight: 1,
          verticalAlign: 'baseline',
        }}
      >
        &#x201E;
      </span>

      {words.map((w, i) => {
        const isVisible = visibleCount > i;

        if (w.highlight) {
          return (
            <span key={i} className="relative inline-block">
              <span
                className="relative font-bold not-italic pb-1 transition-all duration-700"
                style={{
                  color: '#f4f6fc',
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(14px)',
                }}
              >
                {w.text}
                {/* Gradient glow underline */}
                <span
                  className="absolute bottom-0 left-[-2%] right-[-2%] h-[3px] rounded-sm"
                  style={{
                    background: 'linear-gradient(90deg, transparent, #75468c, #9b6bb5, #75468c, transparent)',
                    opacity: underlineVisible ? 1 : 0,
                    transform: underlineVisible ? 'scaleX(1)' : 'scaleX(0)',
                    transition: 'opacity 0.6s ease-out, transform 0.8s cubic-bezier(.22,.61,.36,1)',
                  }}
                />
                {/* Glow blur beneath */}
                <span
                  className="absolute left-[5%] right-[5%] h-[6px] rounded-[50%]"
                  style={{
                    bottom: '-2px',
                    background: 'linear-gradient(90deg, transparent, rgba(117,70,140,0.4), transparent)',
                    filter: 'blur(4px)',
                    opacity: underlineVisible ? 1 : 0,
                    transition: 'opacity 0.8s ease-out 0.2s',
                  }}
                />
              </span>
            </span>
          );
        }

        return (
          <span
            key={i}
            className="inline-block transition-all duration-700 mr-[0.3em]"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(14px)',
            }}
          >
            {w.text}
          </span>
        );
      })}

      {/* Period + closing quote */}
      <span
        className="transition-all duration-500"
        style={{ opacity: visibleCount >= words.length ? 1 : 0 }}
      >
        .
      </span>
      <span
        className="inline-block ml-0.5 not-italic transition-all duration-500"
        style={{
          opacity: visibleCount >= words.length ? 0.35 : 0,
          color: '#9b6bb5',
          fontSize: '1.2em',
          lineHeight: 1,
          verticalAlign: 'baseline',
        }}
      >
        &#x201C;
      </span>
    </p>
  );
}
