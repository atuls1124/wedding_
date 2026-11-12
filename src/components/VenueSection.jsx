import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Navigation } from 'lucide-react';
import { FloralCorner, FloralDivider } from './FloralArt';
import { ScrollFocusBlock } from './ScrollFocusBlock';
import { weddingData } from '../data/weddingData';

export function VenueSection() {
  return (
    <section id="venue" className="relative z-10 w-full px-4 py-12 sm:px-6 sm:py-18">
      <div className="mx-auto max-w-xl">
        <ScrollFocusBlock>
          <div className="paper-card-surface relative overflow-hidden rounded-[28px] border border-[#C59B27]/55 px-6 py-10 sm:px-10 sm:py-12 text-center">
            {/* Inner Ornamental Frame */}
            <div className="pointer-events-none absolute inset-3 rounded-[20px] border border-[#C59B27]/35" />

            {/* Floral Corner Accents */}
            <FloralCorner
              position="top-left"
              className="pointer-events-none absolute -top-3 -left-3 w-20 h-20 sm:w-24 sm:h-24 opacity-90"
            />
            <FloralCorner
              position="top-right"
              className="pointer-events-none absolute -top-3 -right-3 w-20 h-20 sm:w-24 sm:h-24 opacity-90"
            />

            <div className="relative z-10 flex flex-col items-center">
              <motion.div
                whileHover={{ scale: 1.08, rotate: 6 }}
                whileTap={{ scale: 0.95 }}
                className="mb-3 flex h-14 w-14 items-center justify-center rounded-full border border-[#C59B27]/60 bg-gradient-to-br from-[#FFFDF7] to-[#E2F7F0] shadow-md"
              >
                <MapPin className="h-7 w-7 text-[#9E1228]" />
              </motion.div>

              <h2 className="font-serif-hi text-2xl sm:text-3xl font-bold text-[#5C0A1E]">
                {weddingData.venue.title}
              </h2>

              <FloralDivider className="my-3.5 w-48 sm:w-56 mx-auto" />

              <h3 className="mt-1 font-serif-hi text-2xl sm:text-3xl font-bold text-[#7A102B]">
                {weddingData.venue.name}
              </h3>

              <p className="mt-3 text-base sm:text-lg font-medium leading-relaxed text-[#5C0A1E]">
                {weddingData.venue.addressLine1}
                <br />
                {weddingData.venue.addressLine2}
              </p>

              <motion.a
                href={weddingData.venue.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03, y: -1 }}
                whileTap={{ scale: 0.97 }}
                className="mt-7 inline-flex items-center gap-2.5 rounded-full border border-[#E7CB73] bg-gradient-to-r from-[#6E0D25] via-[#8A1431] to-[#6E0D25] px-6 py-3 font-serif-hi text-sm sm:text-base font-semibold text-[#FFFDF7] shadow-[0_10px_25px_-8px_rgba(92,10,30,0.45)] transition-all"
              >
                <Navigation className="h-4 w-4 text-[#E7CB73]" />
                <span>{weddingData.venue.mapButton}</span>
              </motion.a>
            </div>
          </div>
        </ScrollFocusBlock>
      </div>
    </section>
  );
}
