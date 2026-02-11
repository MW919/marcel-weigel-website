'use client';

/**
 * GlowLabel — gradient glow underline label
 * Used for section labels across the site
 */
export default function GlowLabel({ children, className = '' }) {
  return (
    <span
      className={`font-heading text-sm font-bold tracking-[4px] uppercase inline-block relative pb-2 mb-6 ${className}`}
      style={{ color: '#f4f6fc' }}
    >
      {children}
      {/* Gradient line */}
      <span
        className="absolute bottom-0 left-0 right-0 h-[3px] rounded-sm"
        style={{ background: 'linear-gradient(90deg, transparent, #75468c, #9b6bb5, #75468c, transparent)' }}
      />
      {/* Soft glow underneath */}
      <span
        className="absolute left-[10%] right-[10%] h-[6px] rounded-[50%]"
        style={{ bottom: '-2px', background: 'linear-gradient(90deg, transparent, rgba(117,70,140,0.4), transparent)', filter: 'blur(4px)' }}
      />
    </span>
  );
}
