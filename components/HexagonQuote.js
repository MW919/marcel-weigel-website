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
  const brushPaths = [
    { d1: 'M2,5.5 C8,4 15,6.5 30,4.8 C50,3 65,6 90,4.5 C110,3.2 130,6.2 155,4 C170,3 185,5.8 198,5', d2: 'M4,6 C12,4.5 25,7 45,5 C65,3.5 85,6.5 105,4.8 C125,3.5 148,6.5 170,4.5 C185,3.5 194,5.5 198,5.2', l1: 260, l2: 255 },
    { d1: 'M2,5 C10,3.5 22,6 40,4.5 C60,3 78,6.5 100,4.2 C118,3 140,6 165,4.5 C180,3.5 192,5.5 198,5', d2: 'M3,5.8 C14,4 28,6.8 48,4.8 C68,3 88,6.2 112,4.5 C132,3.2 156,6.5 178,4.8 C190,3.8 196,5.8 198,5.5', l1: 258, l2: 262 },
    { d1: 'M2,5.2 C9,3.8 20,6 38,4.2 C55,2.8 72,6.5 95,4.5 C115,3 135,6 158,4.2 C175,3 190,5.5 198,5', d2: 'M5,5.8 C16,4 30,7 52,4.5 C72,3 90,6.5 115,4.8 C135,3.2 158,6.2 180,4.5 C192,3.5 197,5.5 198,5.2', l1: 256, l2: 254 },
  ];

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
                stroke="rgba(155, 107, 181, 0.18)"
                strokeWidth="1"
              />
              {i % 3 === 0 && (
                <polygon
                  points={hexPoints(0, 0, 32 * 0.55)}
                  fill="none"
                  stroke="rgba(117, 70, 140, 0.10)"
                  strokeWidth="0.5"
                />
              )}
              {i % 7 === 0 && (
                <polygon
                  points={hexPoints(0, 0, 32)}
                  fill="rgba(117, 70, 140, 0.03)"
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
            <span className="relative inline-block font-bold not-italic" style={{ color: '#f4f6fc' }}>
              {h.word}
              <svg
                className="absolute left-[-4%] w-[108%] overflow-visible"
                style={{ bottom: '-1px', height: '8px' }}
                viewBox="0 0 200 10"
              >
                <path
                  d={brushPaths[i].d1}
                  fill="none"
                  stroke="#75468c"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{
                    strokeDasharray: brushPaths[i].l1,
                    strokeDashoffset: drawnKeywords[i] ? 0 : brushPaths[i].l1,
                    transition: 'stroke-dashoffset 0.9s cubic-bezier(.22,.61,.36,1)',
                  }}
                />
                <path
                  d={brushPaths[i].d2}
                  fill="none"
                  stroke="#75468c"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{
                    opacity: 0.4,
                    strokeDasharray: brushPaths[i].l2,
                    strokeDashoffset: drawnKeywords[i] ? 0 : brushPaths[i].l2,
                    transition: 'stroke-dashoffset 0.9s cubic-bezier(.22,.61,.36,1)',
                    transitionDelay: '0.12s',
                  }}
                />
              </svg>
            </span>
            {h.after}{' '}
          </span>
        ))}
        &rdquo;
      </p>
    </section>
  );
}
