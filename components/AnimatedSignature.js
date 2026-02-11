'use client';
import { useState, useEffect } from 'react';

export default function AnimatedSignature({ className = '', width = 200, height = 60, delay = 0 }) {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{ width, height }}
    >
      {/* The signature image */}
      <img
        src="/images/signature.png"
        alt="Marcel Weigel"
        className="w-full h-full object-contain"
        style={{ filter: 'brightness(1)' }}
      />

      {/* Animated mask overlay — slides right-to-left to "reveal" the signature */}
      <div
        className="absolute inset-0 bg-brand-bg"
        style={{
          transformOrigin: 'right center',
          animation: animate ? `signatureReveal 2.5s cubic-bezier(0.25, 0.1, 0.25, 1) ${delay}ms forwards` : 'none',
          // Start fully covering the signature
          transform: 'scaleX(1)',
        }}
      />

      <style jsx>{`
        @keyframes signatureReveal {
          0% {
            clip-path: inset(0 0 0 0);
          }
          100% {
            clip-path: inset(0 0 0 100%);
          }
        }
      `}</style>
    </div>
  );
}
