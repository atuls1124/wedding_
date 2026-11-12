import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react';
import { Calendar, Sparkles } from 'lucide-react';
import { FloralDivider } from './FloralArt';
import { ScrollFocusBlock } from './ScrollFocusBlock';
import { weddingData } from '../data/weddingData';

function BlossomNode({ isSelected = false }) {
  return (
    <motion.div
      animate={isSelected ? { scale: 1.18, rotate: 45 } : { scale: 1, rotate: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="relative flex h-8 w-8 items-center justify-center rounded-full border border-[#C59B27] bg-[#FFFDF8] shadow-md"
    >
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
        <circle cx="12" cy="6" r="3" fill="#C81E3B" />
        <circle cx="17.7" cy="10.1" r="3" fill="#2563EB" />
        <circle cx="15.5" cy="16.8" r="3" fill="#C81E3B" />
        <circle cx="8.5" cy="16.8" r="3" fill="#2563EB" />
        <circle cx="6.3" cy="10.1" r="3" fill="#C81E3B" />
        <circle cx="12" cy="12" r="2.8" fill="#E7CB73" />
      </svg>
    </motion.div>
  );
}

export function EventsTimeline() {
  const containerRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();
  const [selectedDay, setSelectedDay] = useState(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 75%', 'end 65%'],
  });

  const lineScaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="events" className="relative z-10 w-full px-4 py-14 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-2xl">
        {/* Scroll-focused Section Heading */}
        <ScrollFocusBlock className="text-center">
          <h2 className="font-serif-hi text-2xl sm:text-3xl font-bold text-[#5C0A1E]">
            {weddingData.eventsSection.title}
          </h2>
          <FloralDivider className="mt-3 w-56 sm:w-68 mx-auto" />
        </ScrollFocusBlock>

        {/* Vertical Timeline */}
        <div ref={containerRef} className="relative mt-10 sm:mt-12 pl-10 sm:pl-12">
          {/* Static subtle background track */}
          <div className="absolute left-3.5 sm:left-4 top-2 bottom-4 w-0.5 rounded-full bg-[#C59B27]/25" />

          {/* Scroll-driven growing golden-maroon spine */}
          <motion.div
            className="absolute left-3.5 sm:left-4 top-2 bottom-4 w-0.5 origin-top rounded-full bg-gradient-to-b from-[#C59B27] via-[#8A1431] to-[#C59B27]"
            style={{ scaleY: shouldReduceMotion ? 1 : lineScaleY }}
          />

          <div className="space-y-7 sm:space-y-9">
            {weddingData.eventsSection.days.map((day) => {
              const isSelected = selectedDay === day.id;
              return (
                <ScrollFocusBlock key={day.id} className="relative">
                  {/* Floral Node on the spine */}
                  <div className="absolute -left-10 sm:-left-12 top-3 z-10">
                    <BlossomNode isSelected={isSelected} />
                  </div>

                  {/* Interactive Day Card */}
                  <motion.div
                    onClick={() => setSelectedDay(isSelected ? null : day.id)}
                    whileHover={{ y: -2, scale: 1.01 }}
                    whileTap={{ scale: 0.985 }}
                    transition={{ type: 'spring', stiffness: 320, damping: 24 }}
                    className={`glass-turquoise-card cursor-pointer rounded-2xl border p-5 sm:p-6 transition-shadow duration-300 ${
                      isSelected
                        ? 'border-[#8A1431]/70 shadow-[0_16px_40px_-12px_rgba(122,16,43,0.28)]'
                        : 'border-[#C59B27]/45'
                    }`}
                  >
                    <div className="flex items-center gap-2 text-[#7A102B]">
                      <Calendar className="h-4 w-4 shrink-0 text-[#C59B27]" />
                      <h3 className="font-serif-hi text-base sm:text-lg font-bold text-[#5C0A1E]">
                        {day.date}
                      </h3>
                    </div>

                    <div className="mt-3.5 space-y-2.5 border-t border-[#C59B27]/25 pt-3.5">
                      {day.events.map((ev, evIdx) => (
                        <div
                          key={evIdx}
                          className="flex items-start gap-2.5 text-sm sm:text-base font-medium text-[#5C0A1E]"
                        >
                          <Sparkles className="mt-1 h-3.5 w-3.5 shrink-0 text-[#9E1228]" />
                          <span className="leading-relaxed">{ev.line}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </ScrollFocusBlock>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
