import React from 'react';

export function GaneshaIcon({ className = 'w-16 h-16' }) {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="ganeshaGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#E7CB73" stopOpacity="0.45" />
          <stop offset="65%" stopColor="#C59B27" stopOpacity="0.14" />
          <stop offset="100%" stopColor="#C59B27" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="goldStroke" x1="20" y1="15" x2="100" y2="105" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#D4AF37" />
          <stop offset="50%" stopColor="#8B1530" />
          <stop offset="100%" stopColor="#C59B27" />
        </linearGradient>
      </defs>

      {/* Soft Aura */}
      <circle cx="60" cy="60" r="56" fill="url(#ganeshaGlow)" />

      {/* Ornamental Halo Ring */}
      <circle
        cx="60"
        cy="60"
        r="48"
        stroke="#C59B27"
        strokeWidth="1.2"
        strokeDasharray="3 3"
        opacity="0.7"
      />
      <circle cx="60" cy="60" r="43" stroke="#7A102B" strokeWidth="0.9" opacity="0.4" />

      {/* Crown (Mukut) */}
      <path
        d="M48 33C51 22 56 17 60 15C64 17 69 22 72 33"
        stroke="#8B1530"
        strokeWidth="2.4"
        strokeLinecap="round"
        fill="#E7CB73"
        fillOpacity="0.45"
      />
      <path
        d="M52 33C54.5 25.5 57.5 21.5 60 20C62.5 21.5 65.5 25.5 68 33"
        stroke="#C59B27"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="60" cy="14" r="2.2" fill="#C59B27" />

      {/* Forehead Tilak */}
      <path
        d="M57.5 38.5C57.5 41.5 60 44.5 60 44.5C60 44.5 62.5 41.5 62.5 38.5"
        stroke="#B91C1C"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <circle cx="60" cy="40.5" r="1.2" fill="#D4AF37" />

      {/* Left & Right Ears */}
      <path
        d="M44 39C33 36 25 43 26 54C27 63 34 66 41 62"
        stroke="#7A102B"
        strokeWidth="2.3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="#7A102B"
        fillOpacity="0.08"
      />
      <path
        d="M76 39C87 36 95 43 94 54C93 63 86 66 79 62"
        stroke="#7A102B"
        strokeWidth="2.3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="#7A102B"
        fillOpacity="0.08"
      />

      {/* Head & Trunk */}
      <path
        d="M44 37C47 32 73 32 76 37C79 42 78 52 72 58C68 62 63 63 61 68C59 73 60 80 65 82C69 83.5 73 81 73 77.5C73 74.5 70 73.5 68 75"
        stroke="#5C0A1E"
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Eyes */}
      <path d="M49 47C51 45.5 54 45.5 55.5 47" stroke="#5C0A1E" strokeWidth="1.9" strokeLinecap="round" />
      <path d="M64.5 47C66 45.5 69 45.5 71 47" stroke="#5C0A1E" strokeWidth="1.9" strokeLinecap="round" />

      {/* Tusks */}
      <path d="M51 60C47.5 62.5 45.5 65.5 46.5 68" stroke="#C59B27" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M69 60C71.5 62 73 64 72.5 66" stroke="#C59B27" strokeWidth="2.2" strokeLinecap="round" />

      {/* Seated Body & Blessing Posture */}
      <path
        d="M44 69C38 74 37 84 43 90C49 95 71 95 77 90C83 84 82 74 76 69"
        stroke="url(#goldStroke)"
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      {/* Lotus Base */}
      <path
        d="M36 96C42 92 50 93 60 98C70 93 78 92 84 96C77 101 68 103 60 103C52 103 43 101 36 96Z"
        fill="#C59B27"
        fillOpacity="0.25"
        stroke="#7A102B"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}
