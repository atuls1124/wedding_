import React from 'react';
import { motion } from 'motion/react';

export function AnimatedWeddingTitle({ title, delay = 0.35 }) {
  return (
    <motion.h1
      initial={{ opacity: 0, y: 16, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}
      className="font-serif-hi text-2xl sm:text-3xl font-bold tracking-wider text-[#6E0D25]"
    >
      {title}
    </motion.h1>
  );
}
