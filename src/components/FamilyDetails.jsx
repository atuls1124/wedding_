import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Bus, Phone, Users, Check, Copy } from 'lucide-react';
import { FloralDivider } from './FloralArt';
import { ScrollFocusBlock } from './ScrollFocusBlock';
import { weddingData } from '../data/weddingData';

export function FamilyDetails() {
  const [copiedPhone, setCopiedPhone] = useState(null);

  const handleCopy = (phone, e) => {
    e.preventDefault();
    if (navigator.clipboard) {
      navigator.clipboard.writeText(phone).catch(() => {});
    }
    setCopiedPhone(phone);
    setTimeout(() => setCopiedPhone(null), 1800);
  };

  return (
    <section id="family" className="relative z-10 w-full px-4 py-10 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-xl space-y-6">
        {/* Sender Card */}
        <ScrollFocusBlock>
          <div className="glass-turquoise-card rounded-[24px] border border-[#C59B27]/50 px-6 py-8 sm:px-9 text-center">
            <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full border border-[#C59B27]/50 bg-[#FFFDF8]">
              <Users className="h-5 w-5 text-[#7A102B]" />
            </div>

            <p className="font-serif-hi text-lg font-semibold text-[#7A102B]">
              {weddingData.sender.heading}
            </p>
            <h3 className="mt-1.5 font-serif-hi text-2xl sm:text-3xl font-bold text-[#5C0A1E]">
              {weddingData.sender.name}
            </h3>
            <p className="mt-2 text-base sm:text-lg font-medium leading-relaxed text-[#5C0A1E]/95">
              {weddingData.sender.addressLine1}
              <br />
              {weddingData.sender.addressLine2}
            </p>

            <FloralDivider className="my-5 w-44 sm:w-52 mx-auto" />

            {/* Contact Numbers */}
            <p className="font-serif-hi text-sm sm:text-base font-semibold text-[#7A102B]">
              {weddingData.sender.contactsHeading}
            </p>
            <div className="mt-3 flex flex-wrap items-center justify-center gap-3">
              {weddingData.sender.contacts.map((phone) => {
                const isCopied = copiedPhone === phone;
                return (
                  <div
                    key={phone}
                    className="inline-flex items-center overflow-hidden rounded-full border border-[#C59B27]/60 bg-[#FFFDF8]/92 shadow-sm"
                  >
                    <motion.a
                      href={`tel:${phone}`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.96 }}
                      className="inline-flex items-center gap-2 px-4 py-2 text-sm sm:text-base font-semibold text-[#5C0A1E] transition-colors hover:bg-[#FFFDF8]"
                    >
                      <Phone className="h-4 w-4 text-[#9E1228]" />
                      <span>{phone}</span>
                    </motion.a>
                    <button
                      type="button"
                      onClick={(e) => handleCopy(phone, e)}
                      aria-label={isCopied ? 'कॉपी हो गया' : 'नंबर कॉपी करें'}
                      className="border-l border-[#C59B27]/35 px-2.5 py-2 text-[#7A102B] transition-colors hover:bg-[#C59B27]/15 active:scale-90"
                    >
                      {isCopied ? (
                        <Check className="h-4 w-4 text-[#15803D]" />
                      ) : (
                        <Copy className="h-3.5 w-3.5" />
                      )}
                    </button>
                  </div>
                );
              })}
            </div>
            {copiedPhone && (
              <motion.p
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-2 text-xs font-semibold text-[#15803D]"
              >
                नंबर कॉपी हो गया!
              </motion.p>
            )}
          </div>
        </ScrollFocusBlock>

        {/* Bus Departure Notice */}
        <ScrollFocusBlock>
          <div className="glass-turquoise-card rounded-2xl border border-[#C59B27]/55 px-5 py-5 sm:px-7 sm:py-6">
            <div className="flex items-start gap-3.5">
              <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#C59B27]/60 bg-[#FFFDF8]">
                <Bus className="h-5 w-5 text-[#7A102B]" />
              </div>
              <p className="text-sm sm:text-base font-semibold leading-relaxed text-[#5C0A1E]">
                {weddingData.sender.busNote}
              </p>
            </div>
          </div>
        </ScrollFocusBlock>
      </div>
    </section>
  );
}
