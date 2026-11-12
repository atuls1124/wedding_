import React from 'react';
import { motion } from 'motion/react';
import { weddingData } from '../data/weddingData';

export function BrideGroomNames() {
  const { brideTitle, brideName, conjunction, groomTitle, groomName } = weddingData.couple;

  return (
    <div className="relative my-2 flex flex-col items-center">
      {/* Subtle ornamental aura behind names for crisp legibility */}
      <div
        className="pointer-events-none absolute inset-x-0 -inset-y-2 rounded-3xl opacity-60 blur-xl"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(255, 253, 248, 0.9) 0%, transparent 72%)',
        }}
      />

      {/* Step 3: आयु. संजना – smooth upward reveal */}
      <motion.div
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.78, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 flex items-baseline justify-center gap-2"
      >
        <span className="font-serif-hi text-xl sm:text-2xl font-semibold text-[#7A102B]">
          {brideTitle}
        </span>
        <span
          className="font-serif-hi text-4xl sm:text-5xl font-extrabold tracking-wide text-[#4A0415]"
          style={{ textShadow: '0 2px 10px rgba(197, 155, 39, 0.16)' }}
        >
          {brideName}
        </span>
      </motion.div>

      {/* Step 4: एवं – subtle fade with ornamental lines */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.65, delay: 0.92, ease: 'easeOut' }}
        className="relative z-10 my-3 flex items-center justify-center gap-3"
      >
        <span className="h-[1.5px] w-10 sm:w-12 bg-gradient-to-r from-transparent via-[#C59B27] to-[#8B1530]/70" />
        <span className="font-serif-hi text-lg sm:text-xl font-bold text-[#8B1530]">
          {conjunction}
        </span>
        <span className="h-[1.5px] w-10 sm:w-12 bg-gradient-to-l from-transparent via-[#C59B27] to-[#8B1530]/70" />
      </motion.div>

      {/* Step 5: चि. नरेंद्र – upward reveal with slight scale */}
      <motion.div
        initial={{ opacity: 0, y: 22, scale: 0.94 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.82, delay: 1.12, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 flex items-baseline justify-center gap-2"
      >
        <span className="font-serif-hi text-xl sm:text-2xl font-semibold text-[#7A102B]">
          {groomTitle}
        </span>
        <span
          className="font-serif-hi text-4xl sm:text-5xl font-extrabold tracking-wide text-[#4A0415]"
          style={{ textShadow: '0 2px 10px rgba(197, 155, 39, 0.16)' }}
        >
          {groomName}
        </span>
      </motion.div>

      {/* Gentle Golden Decorative Underline */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 0.7, delay: 1.38, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 mt-4 h-[2px] w-44 sm:w-56 origin-center rounded-full bg-gradient-to-r from-transparent via-[#C59B27] to-transparent"
      />
    </div>
  );
}
