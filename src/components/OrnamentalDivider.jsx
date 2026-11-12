import React from 'react';
import { motion } from 'motion/react';
import { FloralDivider } from './FloralArt';

export function OrnamentalDivider({ delay = 0.4, className = 'w-52 sm:w-64 mx-auto' }) {
  return (
    <motion.div
      initial={{ opacity: 0, scaleX: 0.45 }}
      animate={{ opacity: 1, scaleX: 1 }}
      transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}
      className="origin-center"
    >
      <FloralDivider className={className} />
    </motion.div>
  );
}
