'use client';

import { useEffect, useRef, useState } from 'react';

const words = [
  { text: 'Turning', break: false },
  { text: 'Complexity', break: true },
  { text: 'into', break: false },
  { text: 'Clarity', highlight: true, break: false },
  { text: '.', punctuation: true, break: false },
];

export default function HeroHeadline() {
  const ref = useRef(null);
  const [visibleCount, setVisibleCount] = useState(0);
  const [underlineVisible, setUnderlineVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Cascade words one by one
          words.forEach((_, i) => {
            setTimeout(() => setVisibleCount(i + 1), 200 + i * 280);
          });
          // Underline sweeps in after "Clarity" appears
          setTimeout(() => setUnderlineVisible(true), 200 + 4 * 280 + 200);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <h1
      ref={ref}
      className="font-heading text-[clamp(2.6rem,7vw,4.8rem)] font-light italic leading-[1.15] tracking-tight text-center mb-10 md:mb-14"
      style={{ color: '#d8d5e0' }}
    >
      {words.map((w, i) => {
        if (w.punctuation) {
          return (
            <span
              key={i}
              className="transition-all duration-500"
              style={{
                opacity: visibleCount > i ? 1 : 0,
                color: '#d8d5e0',
              }}
            >
              {w.text}
            </span>
          );
        }

        if (w.highlight) {
          return (
            <span key={i} className="relative inline-block">
              <span
                className="relative font-bold not-italic transition-all duration-700"
                style={{
                  opacity: visibleCount > i ? 1 : 0,
                  transform: visibleCount > i ? 'translateY(0)' : 'translateY(16px)',
                  color: '#f4f6fc',
                }}
              >
                {w.text}
                {/* Glow underline — same as quote section */}
                <span
                  className="absolute -bottom-1 left-0 h-[3px] rounded-full bg-gradient-to-r from-accent-light to-accent transition-all duration-700 ease-out"
                  style={{
                    width: underlineVisible ? '100%' : '0%',
                    boxShadow: underlineVisible
                      ? '0 0 12px rgba(155,107,181,0.6), 0 0 24px rgba(117,70,140,0.3)'
                      : 'none',
                  }}
                />
              </span>
              {' '}
            </span>
          );
        }

        return (
          <span key={i}>
            <span
              className="inline-block transition-all duration-600"
              style={{
                opacity: visibleCount > i ? 1 : 0,
                transform: visibleCount > i ? 'translateY(0)' : 'translateY(16px)',
              }}
            >
              {w.text}
            </span>
            {w.break ? <br /> : ' '}
          </span>
        );
      })}
    </h1>
  );
}
