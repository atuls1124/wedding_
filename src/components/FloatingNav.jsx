import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { weddingData } from '../data/weddingData';

export function FloatingNav() {
  const [activeId, setActiveId] = useState(weddingData.navigation[0].id);

  useEffect(() => {
    const observers = [];
    weddingData.navigation.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveId(id);
          }
        },
        { rootMargin: '-35% 0px -45% 0px', threshold: 0.05 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => {
      observers.forEach((o) => o.disconnect());
    };
  }, []);

  const scrollToSection = (id) => {
    setActiveId(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <motion.nav
      initial={{ y: 40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.65, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
      aria-label="निमंत्रण नेविगेशन"
      className="fixed bottom-4 left-1/2 z-40 -translate-x-1/2 w-[calc(100%-1.5rem)] max-w-md"
    >
      <div className="flex items-center justify-around rounded-full border border-[#C59B27]/55 bg-[#FFFDF8]/90 px-1.5 py-1.5 shadow-[0_12px_32px_-8px_rgba(92,10,30,0.24)] backdrop-blur-md">
        {weddingData.navigation.map((item) => {
          const isActive = activeId === item.id;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => scrollToSection(item.id)}
              className={`relative rounded-full px-3 py-1.5 text-xs sm:text-sm font-semibold transition-colors active:scale-95 ${
                isActive ? 'text-[#FFFDF7]' : 'text-[#5C0A1E] hover:bg-[#7A102B]/10'
              }`}
            >
              {isActive && (
                <motion.span
                  layoutId="activeNavPill"
                  transition={{ type: 'spring', stiffness: 360, damping: 30 }}
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-[#6E0D25] to-[#8A1431] shadow-sm"
                />
              )}
              <span className="relative z-10">{item.label}</span>
            </button>
          );
        })}
      </div>
    </motion.nav>
  );
}
