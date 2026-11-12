import React, { useState } from 'react';
import { AnimatePresence, MotionConfig, motion } from 'motion/react';
import { WeddingBackground } from './components/WeddingBackground';
import { FloatingPetals } from './components/FloatingPetals';
import { AnimatedEnvelope } from './components/AnimatedEnvelope';
import { InvitationCard } from './components/InvitationCard';
import { EventsTimeline } from './components/EventsTimeline';
import { VenueSection } from './components/VenueSection';
import { FamilyDetails } from './components/FamilyDetails';
import { ClosingSection } from './components/ClosingSection';
import { FloatingNav } from './components/FloatingNav';
import { ScrollProgressBar } from './components/ScrollProgressBar';

export default function App() {
  const [isOpened, setIsOpened] = useState(false);

  const handleOpenInvitation = () => {
    setIsOpened(true);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <MotionConfig reducedMotion="user">
      <div className="relative min-h-dvh w-full overflow-x-hidden">
        {/* Continuous Dynamic Background & Floating Petals */}
        <WeddingBackground isOpened={isOpened} />
        <FloatingPetals />

        {/* Opening Envelope → Main Invitation Experience */}
        <AnimatePresence mode="wait">
          {!isOpened ? (
            <AnimatedEnvelope key="envelope" onOpen={handleOpenInvitation} />
          ) : (
            <motion.main
              key="invitation"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10 w-full"
            >
              <InvitationCard />
              <EventsTimeline />
              <VenueSection />
              <FamilyDetails />
              <ClosingSection />
              <FloatingNav />
              <ScrollProgressBar />
            </motion.main>
          )}
        </AnimatePresence>
      </div>
    </MotionConfig>
  );
}
