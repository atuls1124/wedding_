import React from 'react';
import { motion } from 'motion/react';

export function RoyalHelicopter({ className = 'w-40 h-20' }) {
  return (
    <svg
      viewBox="0 0 220 110"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="heliBody" x1="40" y1="32" x2="170" y2="82" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#8A1431" />
          <stop offset="55%" stopColor="#5C0A1E" />
          <stop offset="100%" stopColor="#3E0412" />
        </linearGradient>
        <linearGradient id="heliGlass" x1="125" y1="36" x2="170" y2="64" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#E6FAF5" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#9EDFD0" stopOpacity="0.85" />
        </linearGradient>
        <linearGradient id="heliGold" x1="0" y1="0" x2="220" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#C59B27" />
          <stop offset="50%" stopColor="#F5DF98" />
          <stop offset="100%" stopColor="#C59B27" />
        </linearGradient>
      </defs>

      {/* Rotor Mast */}
      <rect x="111" y="18" width="5" height="15" rx="2" fill="#C59B27" />

      {/* Spinning Main Rotor Blades */}
      <motion.g
        style={{ transformOrigin: '113.5px 18px' }}
        animate={{ scaleX: [1, 0.15, 1] }}
        transition={{ duration: 0.16, repeat: Infinity, ease: 'linear' }}
      >
        <rect x="20" y="15" width="187" height="4.5" rx="2.25" fill="url(#heliGold)" opacity="0.9" />
        <ellipse cx="113.5" cy="17.2" rx="88" ry="2.2" fill="#FFF8DC" opacity="0.35" />
      </motion.g>

      {/* Tail Boom */}
      <path
        d="M84 52 L22 46 L20 53 L84 62 Z"
        fill="url(#heliBody)"
        stroke="#E7CB73"
        strokeWidth="1.2"
      />
      {/* Tail Fin */}
      <path
        d="M24 47 L12 28 L22 28 L33 47 Z"
        fill="#7A102B"
        stroke="#E7CB73"
        strokeWidth="1.2"
      />

      {/* Tail Rotor */}
      <motion.g
        style={{ transformOrigin: '18px 34px' }}
        animate={{ rotate: 360 }}
        transition={{ duration: 0.25, repeat: Infinity, ease: 'linear' }}
      >
        <rect x="16.5" y="23" width="3" height="22" rx="1.5" fill="#E7CB73" />
        <rect x="7" y="32.5" width="22" height="3" rx="1.5" fill="#E7CB73" />
      </motion.g>

      {/* Main Cabin Fuselage */}
      <path
        d="M78 46 C82 33, 102 29, 128 31 C154 33, 174 44, 178 58 C180 68, 168 76, 148 76 L94 76 C80 76, 74 62, 78 46 Z"
        fill="url(#heliBody)"
        stroke="#E7CB73"
        strokeWidth="1.6"
      />

      {/* Decorative Gold Trim Stripe */}
      <path
        d="M80 61 Q126 67, 174 60"
        stroke="url(#heliGold)"
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      {/* Cockpit Windshield */}
      <path
        d="M126 35 C148 36, 166 44, 171 56 L126 56 Z"
        fill="url(#heliGlass)"
        stroke="#E7CB73"
        strokeWidth="1.2"
      />

      {/* Landing Skids */}
      <path
        d="M96 76 L92 88 M148 76 L152 88 M80 88 L168 88 C173 88, 176 85, 178 82"
        stroke="#C59B27"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Golden Drop Hook */}
      <circle cx="122" cy="88" r="3.2" fill="#E7CB73" stroke="#5C0A1E" strokeWidth="1" />
    </svg>
  );
}
