import React from 'react';
import { motion, useReducedMotion } from 'motion/react';

const SHOWER_PETALS = [
  { x: '16%', delay: 0.0, duration: 3.1, color: '#C81E3B', rot: 220 },
  { x: '25%', delay: 0.35, duration: 3.4, color: '#F59E0B', rot: -180 },
  { x: '34%', delay: 0.15, duration: 2.9, color: '#2563EB', rot: 260 },
  { x: '43%', delay: 0.5, duration: 3.3, color: '#FFFDF7', rot: -210 },
  { x: '50%', delay: 0.1, duration: 3.0, color: '#DC2626', rot: 190 },
  { x: '57%', delay: 0.45, duration: 3.2, color: '#F59E0B', rot: -240 },
  { x: '65%', delay: 0.2, duration: 3.1, color: '#C81E3B', rot: 280 },
  { x: '74%', delay: 0.55, duration: 3.4, color: '#2563EB', rot: -160 },
  { x: '82%', delay: 0.3, duration: 2.9, color: '#FFFDF7', rot: 230 },
  { x: '40%', delay: 0.8, duration: 3.2, color: '#C81E3B', rot: 170 },
  { x: '60%', delay: 0.9, duration: 3.3, color: '#F59E0B', rot: -220 },
];

function GarlandArc({ className = '' }) {
  return (
    <svg viewBox="0 0 72 40" className={className} aria-hidden="true">
      <path
        d="M8 7 Q36 38 64 7"
        fill="none"
        stroke="#1F6E4A"
        strokeWidth="3.2"
        strokeLinecap="round"
      />
      <circle cx="14" cy="14" r="4.2" fill="#C81E3B" />
      <circle cx="24" cy="22" r="4.5" fill="#FFFDF7" stroke="#D4AF37" strokeWidth="0.7" />
      <circle cx="36" cy="25" r="5" fill="#F59E0B" />
      <circle cx="48" cy="22" r="4.5" fill="#FFFDF7" stroke="#D4AF37" strokeWidth="0.7" />
      <circle cx="58" cy="14" r="4.2" fill="#C81E3B" />
      <circle cx="36" cy="25" r="2" fill="#FFFDF7" />
    </svg>
  );
}

/* Graceful Indian Bride facing right */
function BrideIllustration() {
  return (
    <svg viewBox="0 0 110 175" className="h-44 w-28 sm:h-48 sm:w-32" aria-hidden="true">
      <defs>
        <linearGradient id="lehengaGrad" x1="30" y1="75" x2="85" y2="162" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#B91C1C" />
          <stop offset="55%" stopColor="#991124" />
          <stop offset="100%" stopColor="#6E0A1B" />
        </linearGradient>
        <linearGradient id="veilGrad" x1="15" y1="20" x2="55" y2="140" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#D9263E" stopOpacity="0.88" />
          <stop offset="100%" stopColor="#7A0B1E" stopOpacity="0.72" />
        </linearGradient>
        <linearGradient id="skinBride" x1="40" y1="20" x2="70" y2="55" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#F7CCA8" />
          <stop offset="100%" stopColor="#E6AE84" />
        </linearGradient>
      </defs>

      {/* Flowing Bridal Chunri / Veil */}
      <path
        d="M46 21 C26 26, 14 55, 16 105 C17 125, 22 142, 28 152 L44 146 C38 118, 38 72, 46 42 Z"
        fill="url(#veilGrad)"
      />
      <path
        d="M45 22 C28 28, 18 56, 19 104"
        stroke="#E7CB73"
        strokeWidth="1.6"
        fill="none"
        strokeDasharray="3 2"
      />

      {/* Hair & Traditional Juda Bun */}
      <circle cx="43" cy="31" r="7.5" fill="#230B10" />
      <path d="M40 24 C44 16, 62 17, 63 29 C56 24, 46 24, 40 24 Z" fill="#230B10" />
      <path d="M37 26 Q35 32 39 37" stroke="#FFFDF7" strokeWidth="3.2" strokeLinecap="round" strokeDasharray="1 3.5" />

      {/* Face Profile (facing right) */}
      <path
        d="M48 25 C57 24, 63 29, 63 35 C63 36.5, 65 38, 63.5 39.5 C63 40.5, 62.5 42.5, 61.5 44 C59.5 46.5, 53 47, 48 44 Z"
        fill="url(#skinBride)"
      />
      <path d="M57 33.5 Q59 33 60.5 33.8" stroke="#2A0E14" strokeWidth="1.2" strokeLinecap="round" fill="none" />
      <circle cx="59.5" cy="29.5" r="1.1" fill="#B91C1C" />
      <circle cx="57" cy="21.5" r="2.2" fill="#E7CB73" />
      <path d="M63 38.5 A3 3 0 1 1 59.5 40.5" stroke="#E7CB73" strokeWidth="1" fill="none" />
      <circle cx="49" cy="39" r="2.2" fill="#E7CB73" />

      {/* Neck & Gold Necklace */}
      <path d="M49 44 L55 44 L56 52 L48 52 Z" fill="url(#skinBride)" />
      <path d="M48 50 Q53 55 58 50" stroke="#E7CB73" strokeWidth="2.2" fill="none" />

      {/* Fitted Choli / Blouse */}
      <path d="M43 52 L60 52 L59 75 L41 75 Z" fill="#7A0B1E" stroke="#E7CB73" strokeWidth="1" />

      {/* Pleated Flowing Lehenga Skirt */}
      <path
        d="M41 75 L59 75 L82 156 C64 164, 38 164, 24 156 Z"
        fill="url(#lehengaGrad)"
        stroke="#E7CB73"
        strokeWidth="1.3"
      />
      <path d="M46 77 L38 158 M52 77 L54 160 M56 77 L70 158" stroke="#E7CB73" strokeWidth="0.7" opacity="0.45" />
      <path d="M26 147 Q53 156 80 147" stroke="#E7CB73" strokeWidth="3.2" fill="none" />
      <path d="M28 141 Q53 149 78 141" stroke="#F5DF98" strokeWidth="1" fill="none" strokeDasharray="2 3" />

      {/* Graceful Arm extended forward with Bangles */}
      <path d="M55 56 Q68 62 78 65" stroke="url(#skinBride)" strokeWidth="4.8" strokeLinecap="round" fill="none" />
      <path d="M72 63 L75 64.5" stroke="#E7CB73" strokeWidth="4.8" strokeLinecap="round" />

      {/* Varmala Garland */}
      <g transform="translate(38, 49) scale(0.45)">
        <GarlandArc className="w-18 h-10" />
      </g>
    </svg>
  );
}

/* Regal Indian Groom facing left */
function GroomIllustration() {
  return (
    <svg viewBox="0 0 110 175" className="h-44 w-28 sm:h-48 sm:w-32" aria-hidden="true">
      <defs>
        <linearGradient id="sherwaniGrad" x1="35" y1="48" x2="75" y2="128" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFFBF2" />
          <stop offset="100%" stopColor="#EFE3C8" />
        </linearGradient>
        <linearGradient id="skinGroom" x1="35" y1="20" x2="65" y2="55" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#F0BE96" />
          <stop offset="100%" stopColor="#DBA074" />
        </linearGradient>
      </defs>

      {/* Face Profile (facing left) */}
      <path
        d="M61 24 C51 23, 45 28, 45 34 C45 35.5, 43 37, 44.5 38.5 C45 39.5, 45.5 41.5, 46.5 43 C48.5 45.5, 55 46, 61 43 Z"
        fill="url(#skinGroom)"
      />
      <path d="M48 32.5 Q50 32 51.5 32.8" stroke="#2A0E14" strokeWidth="1.2" strokeLinecap="round" fill="none" />
      <path d="M46 40.5 Q48.5 41.5 50 40.5" stroke="#7A3E2E" strokeWidth="1" strokeLinecap="round" fill="none" />

      {/* Royal Maroon & Gold Safa (Turban) */}
      <path
        d="M43 27 C41 13, 68 11, 71 25 C69 30, 62 32, 57 30 C52 27, 46 27, 43 27 Z"
        fill="#7A102B"
        stroke="#E7CB73"
        strokeWidth="1.3"
      />
      <path d="M45 22 Q58 17 69 23" stroke="#E7CB73" strokeWidth="1.4" fill="none" />
      <path d="M51 15 Q46 5 41 9 Q46 14 51 15 Z" fill="#E7CB73" />
      <circle cx="51" cy="16" r="2.2" fill="#FFFDF7" stroke="#C59B27" strokeWidth="0.8" />

      {/* Neck */}
      <path d="M53 43 L60 43 L61 50 L52 50 Z" fill="url(#skinGroom)" />

      {/* Churidar Legs & Mojari Shoes */}
      <path d="M47 116 L55 116 L54 155 L46 155 Z" fill="#F5EBD6" stroke="#D4C29A" strokeWidth="0.6" />
      <path d="M57 116 L65 116 L66 155 L58 155 Z" fill="#F5EBD6" stroke="#D4C29A" strokeWidth="0.6" />
      <path d="M42 155 Q46 151 54 155 L54 159 L40 159 Z" fill="#7A102B" />
      <path d="M56 155 Q60 151 67 155 L67 159 L55 159 Z" fill="#7A102B" />

      {/* Tailored Sherwani Coat */}
      <path
        d="M45 49 L68 49 L73 122 Q57 125 41 122 Z"
        fill="url(#sherwaniGrad)"
        stroke="#C59B27"
        strokeWidth="1.3"
      />
      <path d="M50 49 L62 49 L60 54 L52 54 Z" fill="#7A102B" stroke="#E7CB73" strokeWidth="0.9" />
      <line x1="55" y1="54" x2="55" y2="95" stroke="#C59B27" strokeWidth="1" strokeDasharray="1 5" strokeLinecap="round" />

      {/* Royal Maroon Stole (Dupatta) */}
      <path d="M62 50 L69 50 L74 112 L65 112 Z" fill="#8A1431" stroke="#E7CB73" strokeWidth="0.9" />

      {/* Graceful Arm extended forward */}
      <path d="M48 56 Q36 62 27 65" stroke="url(#skinGroom)" strokeWidth="4.8" strokeLinecap="round" fill="none" />
      <path d="M48 56 Q39 60 33 63" stroke="#EFE3C8" strokeWidth="6" strokeLinecap="round" fill="none" />

      {/* Varmala Garland */}
      <g transform="translate(39, 48) scale(0.45)">
        <GarlandArc className="w-18 h-10" />
      </g>
    </svg>
  );
}

export function VarmalaAnimation() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="relative mx-auto mb-3 w-full max-w-[340px] sm:max-w-[400px]">
      <div className="relative h-[205px] sm:h-[225px] w-full overflow-visible">
        {/* Soft Golden Ambient Glow Behind Couple */}
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-85 blur-2xl"
          style={{
            background: 'radial-gradient(circle, rgba(231, 203, 115, 0.72) 0%, transparent 72%)',
          }}
        />

        {/* Continuous Pushpa Varsha (Flower Petal Shower) */}
        {!shouldReduceMotion && (
          <div className="pointer-events-none absolute -inset-x-4 -top-6 bottom-0 z-30 overflow-hidden" aria-hidden="true">
            {SHOWER_PETALS.map((p, idx) => (
              <motion.svg
                key={`p-${idx}`}
                viewBox="0 0 20 20"
                initial={{ y: -15, opacity: 0, rotate: 0, scale: 0.75 }}
                animate={{
                  y: 230,
                  opacity: [0, 0.95, 0.9, 0],
                  rotate: p.rot,
                  scale: [0.85, 1, 0.9],
                }}
                transition={{
                  duration: p.duration,
                  delay: p.delay,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                style={{ left: p.x }}
                className="absolute top-0 h-3.5 w-3.5"
              >
                <path
                  d="M10 2 C14 5, 16 10, 13 15 C11 18, 7 17, 6 14 C4 9, 6 5, 10 2 Z"
                  fill={p.color}
                  stroke={p.color === '#FFFDF7' ? '#D4AF37' : 'none'}
                  strokeWidth="0.6"
                />
              </motion.svg>
            ))}
          </div>
        )}

        {/* United Couple Wearing Garlands */}
        <div className="relative z-20 flex h-full items-end justify-center pb-1">
          <div className="translate-x-2">
            <BrideIllustration />
          </div>
          <div className="-translate-x-2">
            <GroomIllustration />
          </div>
        </div>
      </div>
    </div>
  );
}
