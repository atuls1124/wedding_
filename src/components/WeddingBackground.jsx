import React from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react';
import { MandalaWatermark } from './FloralArt';

export function WeddingBackground({ isOpened = false }) {
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();

  // Continuous turquoise, mint, and soft teal palette across opening and main page
  const bgGradient = useTransform(
    scrollYProgress,
    [0, 0.35, 0.7, 1],
    [
      'linear-gradient(165deg, #C7F0E5 0%, #B1E6D9 38%, #DCF5EE 76%, #F2F7EE 100%)',
      'linear-gradient(165deg, #CEEEE5 0%, #BCE9DD 44%, #E3F6EF 80%, #F4F2E7 100%)',
      'linear-gradient(165deg, #C3EBE1 0%, #D3F2E9 46%, #EAF4EA 82%, #F3ECE0 100%)',
      'linear-gradient(165deg, #C7EDE3 0%, #DCF4EC 44%, #EFECE1 82%, #F4E8D8 100%)',
    ]
  );

  const glowY = useTransform(scrollYProgress, [0, 1], ['10%', '72%']);
  const mandalaY = useTransform(scrollYProgress, [0, 1], [0, -85]);
  const mandalaRotate = useTransform(scrollYProgress, [0, 1], [0, 42]);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Scroll-responsive continuous turquoise & mint base gradient */}
      <motion.div className="absolute inset-0" style={{ background: bgGradient }} />

      {/* Soft radial lighting that expands gently once opened */}
      <motion.div
        animate={{ opacity: isOpened ? 0.65 : 0.5, scale: isOpened ? 1.08 : 1 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="absolute left-1/2 -translate-x-1/2 w-[140vw] sm:w-[92vw] h-[75vh] rounded-full blur-3xl"
        style={{
          top: shouldReduceMotion ? '18%' : glowY,
          background:
            'radial-gradient(circle, rgba(255, 250, 232, 0.75) 0%, rgba(231, 203, 115, 0.2) 45%, transparent 72%)',
        }}
      />

      {/* Organic slow-moving turquoise & mint blobs */}
      <div
        className="animate-blob-1 absolute -top-24 -left-20 w-72 h-72 sm:w-[28rem] sm:h-[28rem] rounded-full opacity-60 blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(120, 218, 196, 0.65) 0%, rgba(184, 234, 224, 0) 70%)',
        }}
      />
      <div
        className="animate-blob-2 absolute top-[38%] -right-24 w-80 h-80 sm:w-[30rem] sm:h-[30rem] rounded-full opacity-50 blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(162, 228, 212, 0.6) 0%, rgba(244, 224, 178, 0) 70%)',
        }}
      />
      <div
        className="animate-blob-1 absolute -bottom-24 left-[12%] w-80 h-80 sm:w-[28rem] sm:h-[28rem] rounded-full opacity-45 blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(238, 218, 170, 0.45) 0%, rgba(152, 226, 209, 0) 70%)',
        }}
      />

      {/* Parallax mandala watermarks */}
      <motion.div
        className="absolute -top-16 -right-16 sm:right-6 opacity-[0.09]"
        style={{
          y: shouldReduceMotion ? 0 : mandalaY,
          rotate: shouldReduceMotion ? 0 : mandalaRotate,
        }}
      >
        <MandalaWatermark className="w-64 h-64 sm:w-96 sm:h-96 animate-slow-spin" />
      </motion.div>

      <motion.div
        className="absolute bottom-8 -left-20 sm:left-4 opacity-[0.07]"
        style={{
          y: shouldReduceMotion ? 0 : mandalaY,
        }}
      >
        <MandalaWatermark className="w-60 h-60 sm:w-80 sm:h-80" />
      </motion.div>

      {/* Subtle tactile paper grain */}
      <div
        className="absolute inset-0 opacity-[0.03] mix-blend-multiply"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}
