import React from 'react';
import { motion } from 'motion/react';
import { GaneshaIcon } from './GaneshaIcon';
import { FloralCorner } from './FloralArt';
import { AnimatedWeddingTitle } from './AnimatedWeddingTitle';
import { BrideGroomNames } from './BrideGroomNames';
import { OrnamentalDivider } from './OrnamentalDivider';
import { weddingData } from '../data/weddingData';

export function InvitationCard() {
  return (
    <section
      id="card"
      className="relative z-10 flex min-h-[92dvh] w-full items-center justify-center px-4 pt-16 pb-12 sm:px-6"
    >
      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        className="paper-card-surface relative w-full max-w-[440px] sm:max-w-[540px] rounded-[28px] border border-[#C59B27]/60 px-6 py-11 sm:px-12 sm:py-14 text-center"
      >
        {/* Inner Ornamental Double Frame */}
        <div className="pointer-events-none absolute inset-3 sm:inset-4 rounded-[20px] border border-[#C59B27]/45" />
        <div className="pointer-events-none absolute inset-4 sm:inset-5 rounded-[16px] border border-[#7A102B]/20" />

        {/* Symmetrical Floral Corners */}
        <FloralCorner
          position="top-left"
          className="pointer-events-none absolute -top-2 -left-2 w-22 h-22 sm:w-32 sm:h-32"
        />
        <FloralCorner
          position="top-right"
          className="pointer-events-none absolute -top-2 -right-2 w-22 h-22 sm:w-32 sm:h-32"
        />
        <FloralCorner
          position="bottom-left"
          className="pointer-events-none absolute -bottom-2 -left-2 w-22 h-22 sm:w-32 sm:h-32"
        />
        <FloralCorner
          position="bottom-right"
          className="pointer-events-none absolute -bottom-2 -right-2 w-22 h-22 sm:w-32 sm:h-32"
        />

        {/* Staged Visual Hierarchy */}
        <div className="relative z-10 flex flex-col items-center">
          {/* 1. Lord Ganesha Symbol */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <GaneshaIcon className="h-20 w-20 sm:h-24 sm:w-24 mx-auto" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="mt-2 font-serif-hi text-base sm:text-lg font-semibold tracking-wide text-[#7A102B]"
          >
            {weddingData.invocation}
          </motion.p>

          {/* 2. शुभविवाह Heading */}
          <div className="mt-3">
            <AnimatedWeddingTitle title={weddingData.heading} delay={0.35} />
          </div>

          <div className="my-4 w-full">
            <OrnamentalDivider delay={0.5} className="w-48 sm:w-64 mx-auto" />
          </div>

          {/* 3. Bride & Groom Names (Centerpiece) */}
          <BrideGroomNames />

          <div className="my-4 w-full">
            <OrnamentalDivider delay={1.5} className="w-44 sm:w-56 mx-auto" />
          </div>

          {/* 4. Wedding Date & Supporting Label */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 1.65, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex flex-col items-center rounded-2xl border border-[#C59B27]/55 bg-[#FFFDF8]/85 px-6 py-3 shadow-sm"
          >
            <span className="font-serif-hi text-base sm:text-lg font-bold text-[#7A102B]">
              {weddingData.couple.ceremonyLabel}
            </span>
            <span className="mt-1 font-sans-hi text-sm sm:text-base font-semibold text-[#4A0415]">
              {weddingData.couple.dateLabel}
            </span>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
