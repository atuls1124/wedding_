import React from 'react';
import { motion } from 'motion/react';
import { GaneshaIcon } from './GaneshaIcon';

export function WaxSeal({ isBroken = false, isTouched = false }) {
  return (
    <motion.div
      animate={
        isBroken
          ? { scale: [1, 1.18, 0.45], opacity: [1, 0.9, 0], rotate: [0, -8, 18] }
          : isTouched
          ? { scale: 1.08, rotate: [0, -2, 2, 0] }
          : { scale: 1, opacity: 1, rotate: 0 }
      }
      transition={{
        duration: isBroken ? 0.55 : 0.45,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative flex items-center justify-center"
    >
      {/* Subtle golden halo */}
      <motion.div
        animate={{ opacity: isTouched ? 0.85 : 0.45, scale: isTouched ? 1.18 : 1 }}
        transition={{ duration: 0.4 }}
        className="pointer-events-none absolute -inset-3 rounded-full blur-md"
        style={{
          background: 'radial-gradient(circle, rgba(231, 203, 115, 0.75) 0%, transparent 70%)',
        }}
      />

      {/* Organic scalloped wax seal edge */}
      <div className="relative flex h-20 w-20 sm:h-24 sm:w-24 items-center justify-center rounded-full border-2 border-[#E7CB73]/85 bg-gradient-to-br from-[#8B1530] via-[#6E0D25] to-[#4A0515] shadow-[0_10px_24px_rgba(74,5,21,0.45),inset_0_2px_6px_rgba(255,235,180,0.35)]">
        {/* Inner stamped gold ring */}
        <div className="flex h-16 w-16 sm:h-[74px] sm:w-[74px] items-center justify-center rounded-full border border-[#E7CB73]/70 bg-gradient-to-br from-[#FFF8E6] to-[#F3E5BD] shadow-inner">
          <GaneshaIcon className="h-13 w-13 sm:h-16 sm:w-16" />
        </div>
      </div>
    </motion.div>
  );
}
