import React from 'react';

interface LogoProps {
  className?: string;
}

export function Logo({ className = "" }: LogoProps) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="180" 
      height="48" 
      viewBox="0 0 180 48" 
      role="img" 
      aria-label="Yume Insight"
      className={className}
    >
      <defs>
        <style>{`
          .yume-insight { font-family: var(--font-inter), sans-serif; font-weight: 600; font-size: 24px; letter-spacing: 0.02em; }
        `}</style>
      </defs>
      <text x="0" y="32" fill="currentColor" className="yume-insight">
        Yume Insight
      </text>
    </svg>
  );
}
