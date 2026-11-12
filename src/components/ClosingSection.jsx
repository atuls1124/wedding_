import React from 'react';
import { motion } from 'motion/react';
import { Heart } from 'lucide-react';
import { FloralCorner, FloralDivider } from './FloralArt';
import { ScrollFocusBlock } from './ScrollFocusBlock';
import { VarmalaAnimation } from './VarmalaAnimation';
import { weddingData } from '../data/weddingData';

export function ClosingSection() {
  return (
    <section className="relative z-10 w-full px-4 pt-10 pb-28 sm:px-6 sm:pt-14 sm:pb-32">
      <div className="mx-auto max-w-xl">
        <ScrollFocusBlock>
          <div className="paper-card-surface relative overflow-hidden rounded-[28px] border border-[#C59B27]/55 px-6 py-10 sm:px-10 sm:py-12 text-center">
            <div className="pointer-events-none absolute inset-3 rounded-[20px] border border-[#C59B27]/35" />

            <FloralCorner
              position="bottom-left"
              className="pointer-events-none absolute -bottom-3 -left-3 w-20 h-20 sm:w-24 sm:h-24 opacity-90"
            />
            <FloralCorner
              position="bottom-right"
              className="pointer-events-none absolute -bottom-3 -right-3 w-20 h-20 sm:w-24 sm:h-24 opacity-90"
            />

            <div className="relative z-10 flex flex-col items-center">
              <VarmalaAnimation />

              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
                className="mb-3 flex h-11 w-11 items-center justify-center rounded-full border border-[#C59B27]/60 bg-[#FFFDF8] shadow-sm"
              >
                <Heart className="h-5 w-5 fill-[#9E1228] text-[#9E1228]" />
              </motion.div>

              <p className="font-serif-hi text-xl sm:text-2xl font-bold leading-relaxed text-[#5C0A1E]">
                {weddingData.closing.line1}
                <br />
                {weddingData.closing.line2}
              </p>

              <FloralDivider className="mt-5 w-48 sm:w-60 mx-auto" />
            </div>
          </div>
        </ScrollFocusBlock>
      </div>
    </section>
  );
}
