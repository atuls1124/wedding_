import React from 'react';

const cornerTransform = {
  'top-left': '',
  'top-right': 'scale(-1, 1)',
  'bottom-left': 'scale(1, -1)',
  'bottom-right': 'scale(-1, -1)',
};

export function FloralCorner({ position = 'top-left', className = 'w-24 h-24 sm:w-32 sm:h-32' }) {
  return (
    <svg
      viewBox="0 0 140 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ transform: cornerTransform[position] || '' }}
      aria-hidden="true"
    >
      {/* Delicate gold corner filigree */}
      <path
        d="M10 112 C12 68, 22 36, 48 20 C68 8, 95 10, 118 12"
        stroke="#C59B27"
        strokeWidth="1.4"
        strokeLinecap="round"
        opacity="0.7"
      />
      <path
        d="M18 96 C20 62, 32 38, 56 26 C72 18, 90 18, 106 19"
        stroke="#7A102B"
        strokeWidth="0.9"
        strokeDasharray="2.5 3"
        opacity="0.45"
      />

      {/* Green Leaves */}
      <path d="M28 56 C12 46, 10 34, 24 30 C34 27, 40 42, 28 56 Z" fill="#1F6E4A" opacity="0.88" />
      <path d="M56 26 C48 10, 34 10, 32 24 C30 34, 44 38, 56 26 Z" fill="#2B845B" opacity="0.85" />
      <path d="M78 24 C84 8, 98 10, 96 22 C94 31, 82 32, 78 24 Z" fill="#1F6E4A" opacity="0.8" />
      <path d="M24 80 C8 82, 8 96, 20 96 C29 96, 32 84, 24 80 Z" fill="#2B845B" opacity="0.8" />
      <path d="M44 48 C34 62, 46 70, 56 58 C62 50, 52 40, 44 48 Z" fill="#3B9A6D" opacity="0.75" />

      {/* Main Red Rose / Blossom */}
      <g transform="translate(36, 36)">
        <circle cx="0" cy="0" r="16" fill="#9E1228" />
        <path d="M0 -15 C9 -14, 15 -7, 14 2 C13 10, 5 15, -4 14 C-12 13, -16 4, -14 -5 C-12 -12, -6 -16, 0 -15 Z" fill="#C81E3B" />
        <path d="M-9 -4 C-5 -11, 7 -11, 10 -3 C12 4, 5 10, -2 9 C-8 8, -11 2, -9 -4 Z" fill="#E12D4B" />
        <path d="M-4 -2 C-2 -6, 5 -6, 6 -1 C7 3, 2 6, -2 5 C-5 4, -6 1, -4 -2 Z" fill="#7A0B1E" />
        <circle cx="0" cy="0" r="2.6" fill="#E7CB73" />
      </g>

      {/* Royal Blue Blossom */}
      <g transform="translate(74, 24)">
        <circle cx="0" cy="-8" r="6" fill="#1D4ED8" />
        <circle cx="7.6" cy="-2.5" r="6" fill="#2563EB" />
        <circle cx="4.7" cy="6.5" r="6" fill="#1E40AF" />
        <circle cx="-4.7" cy="6.5" r="6" fill="#2563EB" />
        <circle cx="-7.6" cy="-2.5" r="6" fill="#1D4ED8" />
        <circle cx="0" cy="0" r="4.2" fill="#FFFDF7" />
        <circle cx="0" cy="0" r="2.2" fill="#D4AF37" />
      </g>

      {/* Ivory White Flower */}
      <g transform="translate(24, 72)">
        <circle cx="0" cy="-7" r="5.5" fill="#FFFDF9" stroke="#E5DEC9" strokeWidth="0.6" />
        <circle cx="6.6" cy="-2.2" r="5.5" fill="#FFF9EE" stroke="#E5DEC9" strokeWidth="0.6" />
        <circle cx="4.1" cy="5.7" r="5.5" fill="#FFFDF9" stroke="#E5DEC9" strokeWidth="0.6" />
        <circle cx="-4.1" cy="5.7" r="5.5" fill="#FFF9EE" stroke="#E5DEC9" strokeWidth="0.6" />
        <circle cx="-6.6" cy="-2.2" r="5.5" fill="#FFFDF9" stroke="#E5DEC9" strokeWidth="0.6" />
        <circle cx="0" cy="0" r="3.4" fill="#D4AF37" />
      </g>

      {/* Small Accent Buds */}
      <circle cx="100" cy="18" r="3.2" fill="#C81E3B" opacity="0.85" />
      <circle cx="18" cy="100" r="3.2" fill="#2563EB" opacity="0.85" />
      <circle cx="56" cy="48" r="2.5" fill="#FFFDF9" stroke="#C59B27" strokeWidth="0.6" />
    </svg>
  );
}

export function FloralDivider({ className = 'w-64 sm:w-80 mx-auto' }) {
  return (
    <svg
      viewBox="0 0 320 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Left & Right Ornamental Gold Lines */}
      <path d="M12 22 Q70 10, 126 22" stroke="#C59B27" strokeWidth="1.2" opacity="0.8" />
      <path d="M12 22 Q70 34, 126 22" stroke="#7A102B" strokeWidth="0.8" opacity="0.4" />
      <path d="M308 22 Q250 10, 194 22" stroke="#C59B27" strokeWidth="1.2" opacity="0.8" />
      <path d="M308 22 Q250 34, 194 22" stroke="#7A102B" strokeWidth="0.8" opacity="0.4" />

      {/* Green Leaves */}
      <path d="M132 22 C122 14, 114 16, 116 22 C114 28, 122 30, 132 22 Z" fill="#1F6E4A" opacity="0.85" />
      <path d="M188 22 C198 14, 206 16, 204 22 C206 28, 198 30, 188 22 Z" fill="#1F6E4A" opacity="0.85" />

      {/* Flanking Blue & White Blossoms */}
      <g transform="translate(139, 22)">
        <circle cx="0" cy="0" r="6" fill="#2563EB" />
        <circle cx="0" cy="0" r="2.3" fill="#FFFDF9" />
      </g>
      <g transform="translate(181, 22)">
        <circle cx="0" cy="0" r="6" fill="#2563EB" />
        <circle cx="0" cy="0" r="2.3" fill="#FFFDF9" />
      </g>

      {/* Center Red Lotus / Rose */}
      <g transform="translate(160, 22)">
        <circle cx="-8" cy="0" r="5" fill="#FFFDF9" stroke="#D4AF37" strokeWidth="0.7" />
        <circle cx="8" cy="0" r="5" fill="#FFFDF9" stroke="#D4AF37" strokeWidth="0.7" />
        <circle cx="0" cy="0" r="9" fill="#B91C1C" />
        <circle cx="0" cy="0" r="5.5" fill="#DC2626" />
        <circle cx="0" cy="0" r="2.5" fill="#E7CB73" />
      </g>

      {/* End Dots */}
      <circle cx="12" cy="22" r="2.2" fill="#C59B27" />
      <circle cx="308" cy="22" r="2.2" fill="#C59B27" />
    </svg>
  );
}

export function MandalaWatermark({ className = 'w-72 h-72' }) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <circle cx="100" cy="100" r="94" stroke="#7A102B" strokeWidth="0.7" strokeDasharray="4 4" />
      <circle cx="100" cy="100" r="78" stroke="#C59B27" strokeWidth="0.8" />
      <circle cx="100" cy="100" r="58" stroke="#7A102B" strokeWidth="0.6" strokeDasharray="2 3" />
      <circle cx="100" cy="100" r="34" stroke="#C59B27" strokeWidth="0.8" />
      {Array.from({ length: 12 }).map((_, i) => (
        <g key={i} transform={`rotate(${i * 30} 100 100)`}>
          <path
            d="M100 10 C108 26, 108 42, 100 54 C92 42, 92 26, 100 10 Z"
            stroke="#C59B27"
            strokeWidth="0.7"
            fill="#C59B27"
            fillOpacity="0.05"
          />
          <circle cx="100" cy="20" r="1.8" fill="#7A102B" opacity="0.45" />
        </g>
      ))}
    </svg>
  );
}
