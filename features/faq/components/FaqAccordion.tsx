"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus } from "lucide-react";
import { FaqItem } from "../types/faq";

interface FaqAccordionProps {
  items: FaqItem[];
}

export function FaqAccordion({ items }: FaqAccordionProps) {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id || null);

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="w-full flex flex-col divide-y divide-white/10 border-t border-b border-white/10">
      {items.map((item) => {
        const isOpen = openId === item.id;

        return (
          <div key={item.id} className="py-6 sm:py-7 transition-colors">
            <button
              type="button"
              onClick={() => toggleItem(item.id)}
              className="w-full flex items-center justify-between text-left gap-4 group cursor-pointer"
            >
              <span className="font-[family-name:var(--font-serif)] text-lg sm:text-xl text-[#FDFBF7] font-normal group-hover:text-[#FFF5D6] transition-colors leading-snug">
                {item.question}
              </span>

              <span className="shrink-0 p-1.5 rounded-full border border-white/15 text-[#FDFBF7]/70 group-hover:border-[#E6C875]/50 group-hover:text-[#E6C875] transition-all">
                {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
              </span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <p className="pt-4 pr-8 font-sans text-sm sm:text-base text-[#FDFBF7]/70 font-light leading-relaxed">
                    {item.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
