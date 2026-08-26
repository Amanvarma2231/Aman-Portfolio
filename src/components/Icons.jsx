import React from "react";

export function AVLogo({ className = "w-6 h-6", ...props }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <defs>
        <linearGradient id="avGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#22d3ee" />
          <stop offset="50%" stopColor="#6366f1" />
          <stop offset="100%" stopColor="#10b981" />
        </linearGradient>
        <linearGradient id="avGlow" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#a855f7" stopOpacity="0.8" />
        </linearGradient>
      </defs>
      {/* Outer Hexagon / Tech Shield */}
      <polygon 
        points="50,4 92,26 92,74 50,96 8,74 8,26" 
        stroke="url(#avGrad)" 
        strokeWidth="4" 
        fill="#090d16" 
      />
      {/* Stylized 'A' & 'V' Monogram */}
      <path 
        d="M28 70 L48 24 L52 24 L72 70" 
        stroke="url(#avGrad)" 
        strokeWidth="6" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d="M36 56 L64 56" 
        stroke="#38bdf8" 
        strokeWidth="5" 
        strokeLinecap="round" 
      />
      <path 
        d="M42 46 L50 64 L58 46" 
        stroke="#4ade80" 
        strokeWidth="4" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      {/* Center Core Node */}
      <circle cx="50" cy="56" r="3" fill="#ffffff" />
    </svg>
  );
}

export function GithubIcon({ className = "w-4 h-4", ...props }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      {...props}
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

export function LinkedinIcon({ className = "w-4 h-4", ...props }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      {...props}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export function WhatsappIcon({ className = "w-4 h-4", ...props }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      {...props}
    >
      <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
      <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
    </svg>
  );
}