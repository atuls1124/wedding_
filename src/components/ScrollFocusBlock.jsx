import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react';

export function ScrollFocusBlock({ children, className = '' }) {
  const ref = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 96%', 'start 52%'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.45, 1], [0.16, 0.65, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [32, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1]);

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      style={{ opacity, y, scale }}
      className={`will-change-transform ${className}`}
    >
      {children}
    </motion.div>
  );
}
