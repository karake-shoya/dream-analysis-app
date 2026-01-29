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

export function Monogram({ className = "" }: LogoProps) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="128" 
      height="128" 
      viewBox="0 0 1024 1024" 
      role="img" 
      aria-label="YI"
      className={className}
    >
      <rect width="1024" height="1024" rx="224" fill="#0B0B10"/>
      <defs>
        <style>{`
          .yi { font-family: var(--font-inter), sans-serif; font-weight: 600; font-size: 400px; letter-spacing: -0.05em; }
        `}</style>
      </defs>
      <text 
        x="512" 
        y="580" 
        fill="#FFFFFF" 
        textAnchor="middle" 
        dominantBaseline="middle"
        className="yi"
      >
        <tspan x="512" dy="-100">Y</tspan>
        <tspan x="512" dy="380">I</tspan>
      </text>
    </svg>
  );
}
