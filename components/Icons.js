export function ContentIcon({ className = '' }) {
  return (
    <svg className={className} width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="6" y="4" width="36" height="40" rx="3" />
      <line x1="14" y1="14" x2="34" y2="14" />
      <line x1="14" y1="20" x2="34" y2="20" />
      <line x1="14" y1="26" x2="28" y2="26" />
      <line x1="14" y1="32" x2="22" y2="32" />
    </svg>
  );
}

export function AwardsIcon({ className = '' }) {
  return (
    <svg className={className} width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="24" cy="18" r="12" />
      <path d="M16 28l-4 16 12-6 12 6-4-16" />
      <path d="M24 10l2 4 5 1-4 3 1 5-4-3-4 3 1-5-4-3 5-1z" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function SpeakerIcon({ className = '' }) {
  return (
    <svg className={className} width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="24" cy="14" r="8" />
      <path d="M12 44v-6a12 12 0 0124 0v6" />
      <path d="M34 10c2 2 3 5 3 8s-1 6-3 8" />
      <path d="M38 6c3 3 5 8 5 12s-2 9-5 12" />
    </svg>
  );
}

export function MenuIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}

export function CloseIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

export function ArrowDownIcon({ className = '' }) {
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 13l5 5 5-5" />
      <path d="M7 6l5 5 5-5" />
    </svg>
  );
}

export function LinkedInIcon({ className = '' }) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}

// Map icon names from siteConfig to components
const iconMap = {
  content: ContentIcon,
  awards: AwardsIcon,
  speaker: SpeakerIcon,
};

export function getIconByName(name) {
  return iconMap[name] || ContentIcon;
}
