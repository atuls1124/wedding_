import React from 'react';
import { motion, useScroll, useSpring, useReducedMotion } from 'motion/react';

export function ScrollProgressBar() {
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 180,
    damping: 26,
    restDelta: 0.001,
  });

  if (shouldReduceMotion) {
    return null;
  }

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 z-50 h-1 origin-left bg-gradient-to-r from-[#C59B27] via-[#8A1431] to-[#C59B27] shadow-[0_0_10px_rgba(197,155,39,0.65)]"
    />
  );
}
