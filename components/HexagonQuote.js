'use client';

import { useEffect, useRef, useState } from 'react';
import siteConfig from '@/lib/siteConfig';

function hexPoints(cx, cy, size) {
  const pts = [];
  for (let i = 0; i < 6; i++) {
    const angle = (Math.PI / 180) * (60 * i - 30);
    pts.push([cx + size * Math.cos(angle), cy + size * Math.sin(angle)]);
  }
  return pts.map((p) => p.join(',')).join(' ');
}

export default function HexagonQuote() {
  const sectionRef = useRef(null);
  const svgRef = useRef(null);
  const [triggered, setTriggered] = useState(false);
  const [drawnKeywords, setDrawnKeywords] = useState([false, false, false]);
  const hexRef = useRef([]);

  // Build hex grid positions
  const gridPositions = useRef([]);
  if (gridPositions.current.length === 0) {
    const hexSize = 32;
    const horizSpacing = hexSize * Math.sqrt(3);
    const vertSpacing = hexSize * 1.5;
    const cX = 500, cY = 250;
    for (let r = 0; r < 5; r++) {
      for (let c = 0; c < 9; c++) {
        const offsetX = (r % 2) * (horizSpacing / 2);
        const x = cX + (c - 4) * horizSpacing + offsetX;
        const y = cY + (r - 2) * vertSpacing;
        const dx = Math.abs(x - cX);
        const dy = Math.abs(y - cY);
        if (dx < horizSpacing * 3.8 && dy < vertSpacing * 2.8 && dx + dy * 1.2 < horizSpacing * 4.5) {
          gridPositions.current.push({ x, y });
        }
      }
    }
  }

  // Initialize random start positions
  const startPositions = useRef([]);
  if (startPositions.current.length === 0) {
    startPositions.current = gridPositions.current.map((t) => ({
      sx: t.x + (Math.random() - 0.5) * 800,
      sy: t.y + (Math.random() - 0.5) * 600,
      sr: (Math.random() - 0.5) * 180,
    }));
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !triggered) {
            setTriggered(true);
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.25 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [triggered]);

  // Animation loop
  useEffect(() => {
    if (!triggered) return;

    const duration = 3000;
    const brushTimes = [500, 1500, 2500];
    const maxDelay = duration - 800;
    const hexCount = gridPositions.current.length;
    let start = 0;
    let breathing = false;

    function easeOutCubic(t) {
      return 1 - Math.pow(1 - t, 3);
    }

    function animate(timestamp) {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;

      // Hex assembly
      hexRef.current.forEach((el, i) => {
        if (!el) return;
        const delay = (i / hexCount) * maxDelay;
        const localElapsed = Math.max(0, elapsed - delay);
        const progress = Math.min(localElapsed / 1200, 1);
        const eased = easeOutCubic(progress);
        const sp = startPositions.current[i];
        const tp = gridPositions.current[i];

        const x = sp.sx + (tp.x - sp.sx) * eased;
        const y = sp.sy + (tp.y - sp.sy) * eased;
        const rot = sp.sr * (1 - eased);
        el.setAttribute('transform', `translate(${x},${y}) rotate(${rot})`);
        el.style.opacity = eased;
      });

      // Brush keyword reveals
      const newDrawn = [...drawnKeywords];
      brushTimes.forEach((t, i) => {
        if (elapsed >= t) newDrawn[i] = true;
      });
      setDrawnKeywords(newDrawn);

      if (elapsed < duration + 500) {
        requestAnimationFrame(animate);
      } else if (!breathing) {
        breathing = true;
        let t = 0;
        function breathe() {
          t += 0.008;
          hexRef.current.forEach((el, i) => {
            if (!el) return;
            const tp = gridPositions.current[i];
            el.style.opacity = 0.85 + Math.sin(t + i * 0.3) * 0.08;
            const dx = Math.sin(t * 0.5 + i * 0.7) * 1.5;
            const dy = Math.cos(t * 0.4 + i * 0.5) * 1;
            el.setAttribute('transform', `translate(${tp.x + dx},${tp.y + dy}) rotate(0)`);
          });
          requestAnimationFrame(breathe);
        }
        breathe();
      }
    }

    requestAnimationFrame(animate);
  }, [triggered]);

  const { quote } = siteConfig;

  return (
    <section ref={sectionRef} className="relative py-24 px-4 text-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-bg via-accent-dark/20 to-brand-section" />

      {/* Hexagon stage */}
      <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden">
        <svg ref={svgRef} viewBox="0 0 1000 500" preserveAspectRatio="xMidYMid meet" className="w-full h-full">
          {gridPositions.current.map((_, i) => (
            <g
              key={i}
              ref={(el) => (hexRef.current[i] = el)}
              style={{ opacity: 0 }}
            >
              <polygon
                points={hexPoints(0, 0, 32)}
                fill="none"
                stroke="rgba(155, 107, 181, 0.28)"
                strokeWidth="1"
              />
              {i % 3 === 0 && (
                <polygon
                  points={hexPoints(0, 0, 32 * 0.55)}
                  fill="none"
                  stroke="rgba(117, 70, 140, 0.18)"
                  strokeWidth="0.5"
                />
              )}
              {i % 7 === 0 && (
                <polygon
                  points={hexPoints(0, 0, 32)}
                  fill="rgba(117, 70, 140, 0.06)"
                  stroke="none"
                />
              )}
            </g>
          ))}
        </svg>
      </div>

      {/* Quote text */}
      <p className="relative z-[2] font-heading text-[clamp(1.3rem,3.5vw,2rem)] font-light leading-[1.85] italic max-w-[900px] mx-auto" style={{ color: '#d8d5e0' }}>
        &ldquo;{quote.before}{' '}
        {quote.highlights.map((h, i) => (
          <span key={h.word}>
            <span className="relative inline-block font-bold not-italic pb-1" style={{ color: '#f4f6fc' }}>
              {h.word}
              {/* Gradient glow underline — animated */}
              <span
                className="absolute bottom-0 left-[-2%] right-[-2%] h-[3px] rounded-sm"
                style={{
                  background: 'linear-gradient(90deg, transparent, #75468c, #9b6bb5, #75468c, transparent)',
                  opacity: drawnKeywords[i] ? 1 : 0,
                  transform: drawnKeywords[i] ? 'scaleX(1)' : 'scaleX(0)',
                  transition: 'opacity 0.6s ease-out, transform 0.8s cubic-bezier(.22,.61,.36,1)',
                }}
              />
              <span
                className="absolute left-[10%] right-[10%] h-[4px] rounded-[50%]"
                style={{
                  bottom: '-2px',
                  background: 'linear-gradient(90deg, transparent, rgba(117,70,140,0.4), transparent)',
                  filter: 'blur(4px)',
                  opacity: drawnKeywords[i] ? 1 : 0,
                  transition: 'opacity 0.8s ease-out 0.2s',
                }}
              />
            </span>
            {h.after}{i < quote.highlights.length - 1 ? ' ' : ''}
          </span>
        ))}
        &rdquo;
      </p>
    </section>
  );
}
