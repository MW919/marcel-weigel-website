'use client';

import { useEffect, useRef, useState } from 'react';

export default function HeroHeadline() {
  const ref = useRef(null);
  const [phase, setPhase] = useState(0);
  // phase 0: nothing visible
  // phase 1: "Turning Complexity" fades in
  // phase 2: "into" fades in
  // phase 3: "Clarity" fades in (bold, white)
  // phase 4: underline sweeps in + glow appears

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setPhase(1), 200);
          setTimeout(() => setPhase(2), 700);
          setTimeout(() => setPhase(3), 1100);
          setTimeout(() => setPhase(4), 1600);
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
      className="font-heading text-[clamp(1.5rem,4vw,2.8rem)] font-light leading-[1.85] italic text-center mb-10 md:mb-14 max-w-[800px] mx-auto"
      style={{ color: '#d8d5e0' }}
    >
      {/* "Turning Complexity" */}
      <span
        className="inline transition-all duration-700"
        style={{
          opacity: phase >= 1 ? 1 : 0,
          transform: phase >= 1 ? 'translateY(0)' : 'translateY(12px)',
        }}
      >
        Turning Complexity{' '}
      </span>

      {/* "into" */}
      <span
        className="inline transition-all duration-700"
        style={{
          opacity: phase >= 2 ? 1 : 0,
          transform: phase >= 2 ? 'translateY(0)' : 'translateY(12px)',
        }}
      >
        into{' '}
      </span>

      {/* "Clarity" — bold, not-italic, white, with glow underline */}
      <span className="relative inline-block">
        <span
          className="relative font-bold not-italic pb-1 transition-all duration-700"
          style={{
            color: '#f4f6fc',
            opacity: phase >= 3 ? 1 : 0,
            transform: phase >= 3 ? 'translateY(0)' : 'translateY(12px)',
          }}
        >
          Clarity
          {/* Gradient glow underline — same as quote section */}
          <span
            className="absolute bottom-0 left-[-2%] right-[-2%] h-[3px] rounded-sm"
            style={{
              background: 'linear-gradient(90deg, transparent, #75468c, #9b6bb5, #75468c, transparent)',
              opacity: phase >= 4 ? 1 : 0,
              transform: phase >= 4 ? 'scaleX(1)' : 'scaleX(0)',
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
              opacity: phase >= 4 ? 1 : 0,
              transition: 'opacity 0.8s ease-out 0.2s',
            }}
          />
        </span>
      </span>

      {/* Period */}
      <span
        className="transition-all duration-500"
        style={{ opacity: phase >= 3 ? 1 : 0 }}
      >
        .
      </span>
    </p>
  );
}
