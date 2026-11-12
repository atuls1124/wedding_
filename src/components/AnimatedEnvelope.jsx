import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { Sparkles } from 'lucide-react';
import { FloralCorner, FloralDivider } from './FloralArt';
import { WaxSeal } from './WaxSeal';
import { RoyalHelicopter } from './RoyalHelicopter';
import { weddingData } from '../data/weddingData';

export function AnimatedEnvelope({ onOpen }) {
  const shouldReduceMotion = useReducedMotion();
  const [introPhase, setIntroPhase] = useState(shouldReduceMotion ? 'landed' : 'flying'); // 'flying' | 'dropping' | 'landed'
  const [stage, setStage] = useState('idle'); // 'idle' | 'breaking' | 'opening'
  const [isTouched, setIsTouched] = useState(false);

  useEffect(() => {
    if (shouldReduceMotion) {
      setIntroPhase('landed');
      return;
    }

    const dropTimer = setTimeout(() => {
      setIntroPhase('dropping');
    }, 1350);

    const landTimer = setTimeout(() => {
      setIntroPhase('landed');
    }, 2250);

    return () => {
      clearTimeout(dropTimer);
      clearTimeout(landTimer);
    };
  }, [shouldReduceMotion]);

  const handleTouchPulse = () => {
    if (stage !== 'idle' || introPhase !== 'landed') return;
    setIsTouched(true);
    setTimeout(() => setIsTouched(false), 650);
  };

  const handleOpen = () => {
    if (stage !== 'idle' || introPhase !== 'landed') return;
    setStage('breaking');

    const breakDelay = shouldReduceMotion ? 150 : 480;
    const finishDelay = shouldReduceMotion ? 400 : 1850;

    setTimeout(() => {
      setStage('opening');
    }, breakDelay);

    setTimeout(() => {
      onOpen();
    }, finishDelay);
  };

  const isBreaking = stage === 'breaking' || stage === 'opening';
  const isOpening = stage === 'opening';
  const isLanded = introPhase === 'landed';

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }}
      className="relative z-10 flex min-h-dvh w-full flex-col items-center justify-center overflow-hidden px-4 py-6"
    >
      {/* Ceremonial Helicopter Flying in the Sky */}
      {!shouldReduceMotion && introPhase !== 'landed' && (
        <motion.div
          initial={{ x: '-65vw', y: -24, rotate: 6, opacity: 0 }}
          animate={
            introPhase === 'flying'
              ? { x: '0vw', y: 0, rotate: 2, opacity: 1 }
              : { x: '72vw', y: -54, rotate: -8, opacity: 0 }
          }
          transition={{
            duration: introPhase === 'flying' ? 1.3 : 1.05,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="pointer-events-none fixed top-8 sm:top-10 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center"
        >
          <RoyalHelicopter className="w-40 h-20 sm:w-48 sm:h-24 drop-shadow-[0_10px_18px_rgba(74,5,21,0.28)]" />

          {/* Golden Silk Drop Ribbons (visible while carrying envelope) */}
          <motion.div
            animate={{ opacity: introPhase === 'flying' ? 0.85 : 0, scaleY: introPhase === 'flying' ? 1 : 0.2 }}
            transition={{ duration: 0.3 }}
            className="flex gap-14 -mt-1 origin-top"
          >
            <span className="h-12 w-[1.5px] bg-gradient-to-b from-[#C59B27] to-[#E7CB73]/30 rotate-[10deg]" />
            <span className="h-12 w-[1.5px] bg-gradient-to-b from-[#C59B27] to-[#E7CB73]/30 -rotate-[10deg]" />
          </motion.div>
        </motion.div>
      )}

      {/* Top Invocation */}
      <motion.p
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: isLanded ? 1 : 0.4, y: 0 }}
        transition={{ duration: 0.65 }}
        className="font-serif-hi text-base sm:text-lg font-semibold tracking-wide text-[#5C0A1E]"
      >
        {weddingData.invocation}
      </motion.p>

      {/* Animated Hindi Instruction */}
      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: isLanded ? 1 : 0, y: isLanded ? 0 : 8 }}
        transition={{ duration: 0.6 }}
        className="mt-2 mb-4 rounded-full border border-[#C59B27]/45 bg-[#FFFDF8]/78 px-4 py-1 text-center font-sans-hi text-xs sm:text-sm font-semibold text-[#6E0D25] shadow-sm backdrop-blur-sm"
      >
        {weddingData.envelope.instruction}
      </motion.p>

      {/* Phone-Screen-Sized 3D Envelope */}
      <motion.div
        initial={
          shouldReduceMotion
            ? { opacity: 1, x: 0, y: 0, scale: 1 }
            : { opacity: 0, x: '-65vw', y: -155, scale: 0.45, rotateZ: -6 }
        }
        animate={
          shouldReduceMotion || isBreaking
            ? { opacity: 1, x: 0, y: 0, scale: 1, rotateZ: 0 }
            : introPhase === 'flying'
            ? { opacity: 1, x: '0vw', y: -135, scale: 0.5, rotateZ: 2 }
            : introPhase === 'dropping'
            ? { opacity: 1, x: 0, y: 0, scale: 1, rotateZ: [2, -1.5, 0] }
            : {
                opacity: 1,
                x: 0,
                y: [0, -7, 0],
                scale: isTouched ? 1.02 : 1,
                rotateZ: isTouched ? -1 : 0,
              }
        }
        transition={
          introPhase === 'flying'
            ? { duration: 1.3, ease: [0.22, 1, 0.36, 1] }
            : introPhase === 'dropping'
            ? { duration: 0.9, ease: [0.16, 1, 0.3, 1] }
            : shouldReduceMotion || isBreaking
            ? { duration: 0.5 }
            : {
                y: { duration: 4.5, repeat: Infinity, ease: 'easeInOut' },
                scale: { duration: 0.35 },
                rotateZ: { duration: 0.35 },
              }
        }
        onPointerDown={handleTouchPulse}
        onHoverStart={() => setIsTouched(true)}
        onHoverEnd={() => setIsTouched(false)}
        className="perspective-1200 relative w-[90vw] max-w-[380px] sm:max-w-[420px] cursor-pointer select-none"
      >
        {/* Ambient golden glow behind envelope */}
        <motion.div
          animate={{ opacity: isTouched ? 0.85 : 0.55 }}
          transition={{ duration: 0.4 }}
          className="absolute -inset-5 rounded-3xl blur-2xl pointer-events-none"
          style={{
            background:
              'radial-gradient(circle, rgba(231, 203, 115, 0.52) 0%, rgba(152, 226, 209, 0.3) 55%, transparent 80%)',
          }}
        />

        {/* Phone-Proportioned Envelope Body */}
        <div className="relative h-[350px] sm:h-[400px] w-full overflow-visible rounded-[24px] border border-[#C59B27]/60 bg-gradient-to-br from-[#B5E8DB] via-[#99DFCE] to-[#C8F2E7] shadow-[0_26px_65px_-16px_rgba(74,5,21,0.34)]">
          {/* Subtle Diagonal Light Reflection */}
          <div
            className="pointer-events-none absolute inset-0 rounded-[24px] opacity-35"
            style={{
              background:
                'linear-gradient(125deg, rgba(255,255,255,0.55) 0%, transparent 38%, rgba(255,255,255,0.22) 65%, transparent 100%)',
            }}
          />

          {/* Ornamental Inner Gold Border */}
          <div className="pointer-events-none absolute inset-3 rounded-[18px] border border-[#C59B27]/50" />

          {/* Floral Corner Decorations */}
          <FloralCorner
            position="top-left"
            className="pointer-events-none absolute -top-2.5 -left-2.5 z-20 w-22 h-22 sm:w-26 sm:h-26"
          />
          <FloralCorner
            position="top-right"
            className="pointer-events-none absolute -top-2.5 -right-2.5 z-20 w-22 h-22 sm:w-26 sm:h-26"
          />
          <FloralCorner
            position="bottom-left"
            className="pointer-events-none absolute -bottom-2.5 -left-2.5 z-20 w-22 h-22 sm:w-26 sm:h-26"
          />
          <FloralCorner
            position="bottom-right"
            className="pointer-events-none absolute -bottom-2.5 -right-2.5 z-20 w-22 h-22 sm:w-26 sm:h-26"
          />

          {/* Emerging Inner Invitation Card */}
          <motion.div
            initial={{ y: 0, opacity: 0.94, scale: 0.96 }}
            animate={
              isOpening
                ? { y: shouldReduceMotion ? -20 : -135, opacity: 1, scale: 1.03 }
                : { y: 0, opacity: 0.94, scale: 0.96 }
            }
            transition={{
              duration: 1.0,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="absolute inset-x-4 top-6 bottom-5 z-10 flex flex-col items-center justify-center rounded-2xl border border-[#C59B27]/65 bg-gradient-to-b from-[#FFFDF8] via-[#EFFAF5] to-[#FFFDF5] p-5 text-center shadow-xl"
          >
            <p className="font-serif-hi text-sm sm:text-base font-semibold text-[#7A102B]">
              {weddingData.heading}
            </p>
            <FloralDivider className="my-2 w-40 sm:w-48" />
            <p className="font-serif-hi text-2xl sm:text-3xl font-bold text-[#4A0415]">
              {weddingData.couple.brideTitle} {weddingData.couple.brideName}
            </p>
            <p className="my-1 font-serif-hi text-sm text-[#9E1228]">{weddingData.couple.conjunction}</p>
            <p className="font-serif-hi text-2xl sm:text-3xl font-bold text-[#4A0415]">
              {weddingData.couple.groomTitle} {weddingData.couple.groomName}
            </p>
            <p className="mt-3 text-xs sm:text-sm font-medium text-[#7A102B]/85">
              {weddingData.couple.dateLabel}
            </p>
          </motion.div>

          {/* Front Lower Pocket of Envelope */}
          <div
            className="absolute inset-0 z-15 rounded-[24px] pointer-events-none"
            style={{
              background:
                'linear-gradient(175deg, transparent 36%, rgba(164, 229, 212, 0.96) 36.5%, rgba(189, 239, 226, 0.98) 100%)',
              boxShadow: 'inset 0 2px 12px rgba(255, 255, 255, 0.45)',
            }}
          />

          <svg
            viewBox="0 0 400 360"
            preserveAspectRatio="none"
            className="pointer-events-none absolute inset-0 z-15 h-full w-full rounded-[24px]"
            aria-hidden="true"
          >
            <path
              d="M0 360 L200 175 L400 360"
              fill="rgba(176, 234, 219, 0.93)"
              stroke="#C59B27"
              strokeOpacity="0.48"
              strokeWidth="1.2"
            />
          </svg>

          {/* 3D Animated Top Flap */}
          <motion.div
            initial={{ rotateX: 0 }}
            animate={isOpening ? { rotateX: -175 } : { rotateX: 0 }}
            transition={{ duration: 0.78, ease: [0.32, 0.72, 0, 1] }}
            style={{ transformOrigin: 'top center' }}
            className="preserve-3d absolute inset-x-0 top-0 z-20 h-[200px] sm:h-[225px]"
          >
            <div className="backface-hidden absolute inset-0">
              <svg viewBox="0 0 400 210" preserveAspectRatio="none" className="h-full w-full drop-shadow-md">
                <defs>
                  <linearGradient id="envFlapGrad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#9EDFD0" />
                    <stop offset="50%" stopColor="#BCECE0" />
                    <stop offset="100%" stopColor="#8FD6C5" />
                  </linearGradient>
                </defs>
                <path
                  d="M0 0 L400 0 L200 202 Z"
                  fill="url(#envFlapGrad)"
                  stroke="#C59B27"
                  strokeWidth="1.5"
                  strokeOpacity="0.65"
                />
              </svg>
            </div>
          </motion.div>

          {/* Decorative Wax Seal with Ganesh Symbol */}
          <AnimatePresence>
            {!isOpening && (
              <motion.div
                exit={{ opacity: 0 }}
                className="absolute left-1/2 top-[50%] z-30 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center"
              >
                <WaxSeal isBroken={isBreaking} isTouched={isTouched} />
                {!isBreaking && (
                  <span className="mt-2.5 rounded-full border border-[#C59B27]/45 bg-[#FFFDF8]/90 px-3.5 py-0.5 text-xs sm:text-sm font-semibold text-[#5C0A1E] shadow-sm backdrop-blur-sm">
                    {weddingData.envelope.subLabel}
                  </span>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>

      {/* Glowing Hindi Opening Button */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: isLanded ? 1 : 0, y: isLanded ? 0 : 16 }}
        transition={{ duration: 0.6 }}
        className="relative mt-7"
      >
        <div
          className="pointer-events-none absolute -inset-2 rounded-full opacity-65 blur-lg"
          style={{
            background: 'radial-gradient(circle, rgba(231, 203, 115, 0.7) 0%, transparent 72%)',
          }}
        />
        <motion.button
          type="button"
          onClick={handleOpen}
          disabled={isBreaking || !isLanded}
          whileHover={{ scale: 1.04, y: -2 }}
          whileTap={{ scale: 0.96 }}
          className="relative overflow-hidden rounded-full border border-[#E7CB73] bg-gradient-to-r from-[#5C0A1E] via-[#84112E] to-[#5C0A1E] px-9 py-3.5 font-serif-hi text-base sm:text-lg font-semibold text-[#FFFDF7] shadow-[0_14px_34px_-8px_rgba(74,5,21,0.55)] transition-all disabled:opacity-75"
        >
          <span className="animate-shimmer pointer-events-none absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/25 to-transparent skew-x-[-20deg]" />
          <span className="relative flex items-center gap-2.5">
            <Sparkles className="h-4 w-4 text-[#E7CB73]" />
            <span>{weddingData.envelope.openButton}</span>
            <Sparkles className="h-4 w-4 text-[#E7CB73]" />
          </span>
        </motion.button>
      </motion.div>
    </motion.section>
  );
}
