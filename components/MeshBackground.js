'use client';

export default function StarBackground() {
  // Gradient Mesh — soft floating purple orbs
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" style={{ background: 'var(--bg)' }}>
      {/* Orb 1 — large, top-right */}
      <div
        className="absolute rounded-full"
        style={{
          width: '550px',
          height: '550px',
          top: '-8%',
          right: '-5%',
          background: 'rgba(117, 70, 140, 0.12)',
          filter: 'blur(80px)',
          animation: 'meshFloat1 14s ease-in-out infinite',
        }}
      />
      {/* Orb 2 — medium, bottom-left */}
      <div
        className="absolute rounded-full"
        style={{
          width: '450px',
          height: '450px',
          bottom: '5%',
          left: '-8%',
          background: 'rgba(90, 53, 112, 0.10)',
          filter: 'blur(80px)',
          animation: 'meshFloat2 18s ease-in-out infinite',
        }}
      />
      {/* Orb 3 — small accent, center-right */}
      <div
        className="absolute rounded-full"
        style={{
          width: '300px',
          height: '300px',
          top: '40%',
          right: '15%',
          background: 'rgba(155, 107, 181, 0.06)',
          filter: 'blur(70px)',
          animation: 'meshFloat3 20s ease-in-out infinite',
        }}
      />
      {/* Orb 4 — subtle warm accent, left-center */}
      <div
        className="absolute rounded-full"
        style={{
          width: '350px',
          height: '350px',
          top: '25%',
          left: '10%',
          background: 'rgba(117, 70, 140, 0.05)',
          filter: 'blur(90px)',
          animation: 'meshFloat1 22s ease-in-out infinite reverse',
        }}
      />

      <style jsx>{`
        @keyframes meshFloat1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -25px) scale(1.06); }
          66% { transform: translate(-15px, 20px) scale(0.94); }
        }
        @keyframes meshFloat2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(-25px, -15px) scale(1.05); }
          66% { transform: translate(20px, 10px) scale(0.96); }
        }
        @keyframes meshFloat3 {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.8; }
          50% { transform: translate(-20px, 25px) scale(1.08); opacity: 1; }
        }
      `}</style>
    </div>
  );
}
