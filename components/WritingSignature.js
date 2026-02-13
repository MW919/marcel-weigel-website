'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * WritingSignature — PNG signature with feathered gradient reveal + purple glow
 */
export default function WritingSignature({ 
  className = '', 
  height = 60,
  duration = 3.5,
  delay = 0,
  trigger = 'mount' // 'mount' or 'scroll'
}) {
  const containerRef = useRef(null);
  const maskRef = useRef(null);
  const glowRef = useRef(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (trigger === 'mount') {
      const t = setTimeout(() => setStarted(true), delay * 1000);
      return () => clearTimeout(t);
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !started) {
            setStarted(true);
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.3 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [trigger, delay, started]);

  useEffect(() => {
    if (!started || !maskRef.current) return;
    const mask = maskRef.current;
    const glow = glowRef.current;
    const dur = duration * 1000;
    const startTime = performance.now();

    function frame(ts) {
      const elapsed = ts - startTime;
      const raw = Math.min(elapsed / dur, 1);
      // Natural writing easing
      let eased;
      if (raw < 0.08) eased = raw * raw * 78;
      else if (raw < 0.92) eased = 0.05 + (raw - 0.08) * 1.07;
      else eased = 0.95 + (raw - 0.92) * 0.625;
      eased = Math.min(eased, 1);

      const pos = eased * 115 - 15;
      mask.style.background = `linear-gradient(to right, transparent ${Math.max(0, pos)}%, var(--bg) ${pos + 15}%)`;

      if (raw < 1) {
        requestAnimationFrame(frame);
      } else {
        mask.style.display = 'none';
        if (glow) {
          setTimeout(() => { glow.style.opacity = '0.5'; }, 400);
        }
      }
    }
    requestAnimationFrame(frame);
  }, [started, duration]);

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      {/* Glow layer */}
      <img
        ref={glowRef}
        src="/images/signature.webp"
        alt=""
        aria-hidden="true"
        className="absolute inset-[-4px] h-[calc(100%+8px)] w-auto object-contain pointer-events-none"
        style={{
          filter: 'blur(10px) brightness(1.5) sepia(1) hue-rotate(250deg) saturate(3)',
          opacity: 0,
          transition: 'opacity 1s ease-in',
          animation: started ? 'sigGlowPulse 3s ease-in-out infinite' : 'none',
          animationDelay: `${duration + 0.5}s`,
        }}
      />
      {/* Main signature */}
      <img
        src="/images/signature.webp"
        alt="Marcel Weigel"
        className="h-full w-auto object-contain relative"
      />
      {/* Feathered mask */}
      <div
        ref={maskRef}
        className="absolute inset-0 z-[2]"
        style={{ background: 'var(--bg)' }}
      />
    </div>
  );
}
