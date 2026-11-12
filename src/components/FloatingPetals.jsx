import React from 'react';
import { useReducedMotion } from 'motion/react';

const PETALS = [
  { left: '6%', color: '#C81E3B', duration: '15s', delay: '0s', drift: '42px', rot: '290deg', size: 13 },
  { left: '16%', color: '#2563EB', duration: '18s', delay: '-4s', drift: '-34px', rot: '340deg', size: 11 },
  { left: '28%', color: '#FFFDF7', duration: '16s', delay: '-9s', drift: '30px', rot: '260deg', size: 12 },
  { left: '42%', color: '#DC2626', duration: '19s', delay: '-2s', drift: '-40px', rot: '310deg', size: 11 },
  { left: '56%', color: '#1D4ED8', duration: '14s', delay: '-7s', drift: '48px', rot: '380deg', size: 12 },
  { left: '68%', color: '#FFFDF7', duration: '17s', delay: '-11s', drift: '-28px', rot: '250deg', size: 13 },
  { left: '79%', color: '#B91C1C', duration: '15.5s', delay: '-5s', drift: '36px', rot: '330deg', size: 11 },
  { left: '91%', color: '#2563EB', duration: '18.5s', delay: '-13s', drift: '-32px', rot: '280deg', size: 12 },
];

const SPARKLES = [
  { left: '10%', top: '18%', duration: '5.2s', delay: '0s', x: '8px', y: '-16px', size: 4 },
  { left: '22%', top: '64%', duration: '6.4s', delay: '-1.5s', x: '-10px', y: '-18px', size: 3 },
  { left: '34%', top: '28%', duration: '4.8s', delay: '-3s', x: '12px', y: '-14px', size: 4 },
  { left: '48%', top: '78%', duration: '5.8s', delay: '-2s', x: '-8px', y: '-20px', size: 3 },
  { left: '60%', top: '20%', duration: '6.1s', delay: '-4s', x: '10px', y: '-15px', size: 5 },
  { left: '72%', top: '52%', duration: '4.9s', delay: '-1s', x: '-12px', y: '-16px', size: 3 },
  { left: '84%', top: '34%', duration: '5.5s', delay: '-2.7s', x: '8px', y: '-18px', size: 4 },
  { left: '90%', top: '76%', duration: '6.3s', delay: '-0.8s', x: '-9px', y: '-14px', size: 4 },
  { left: '15%', top: '86%', duration: '5.4s', delay: '-3.4s', x: '9px', y: '-18px', size: 3 },
  { left: '53%', top: '42%', duration: '6.0s', delay: '-2.2s', x: '-7px', y: '-16px', size: 4 },
];

export function FloatingPetals() {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return null;
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {PETALS.map((petal, idx) => (
        <svg
          key={`petal-${idx}`}
          viewBox="0 0 24 24"
          className="animate-petal absolute -top-6 opacity-75"
          style={{
            left: petal.left,
            width: petal.size,
            height: petal.size,
            '--petal-duration': petal.duration,
            '--petal-delay': petal.delay,
            '--petal-drift': petal.drift,
            '--petal-rot': petal.rot,
          }}
        >
          <path
            d="M12 2 C17 5, 20 12, 16 18 C13 22, 9 21, 7 17 C4 11, 7 5, 12 2 Z"
            fill={petal.color}
            fillOpacity="0.72"
            stroke={petal.color === '#FFFDF7' ? '#D4AF37' : 'none'}
            strokeWidth="0.6"
          />
        </svg>
      ))}

      {SPARKLES.map((spark, idx) => (
        <span
          key={`spark-${idx}`}
          className="animate-sparkle absolute rounded-full"
          style={{
            left: spark.left,
            top: spark.top,
            width: spark.size,
            height: spark.size,
            background: 'radial-gradient(circle, #FFF8DC 0%, #D4AF37 60%, transparent 100%)',
            boxShadow: '0 0 8px rgba(212, 175, 55, 0.65)',
            '--spark-duration': spark.duration,
            '--spark-delay': spark.delay,
            '--spark-x': spark.x,
            '--spark-y': spark.y,
          }}
        />
      ))}
    </div>
  );
}
