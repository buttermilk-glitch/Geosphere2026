"use client";

import { useRef } from "react";
import { motion, useScroll } from "motion/react";
import { COMPETITION_MEMORIES } from "../../domain/memories";
import { FloatingCard } from "./FloatingCard";

export function CompetitionMemoriesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  return (
    <section
      ref={sectionRef}
      className="relative z-30 w-full h-[350vh] bg-[#090604] text-[#FDFBF7]"
    >
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden z-10">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_50%,_var(--tw-gradient-stops))] from-[#E6C875]/10 via-transparent to-transparent" />

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center px-6 relative z-10"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-[#E6C875] animate-pulse inline-block mb-4 shadow-[0_0_15px_#E6C875]" />
          <h2 className="font-[family-name:var(--font-serif)] text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal text-[#FFF5D6] tracking-wide drop-shadow-[0_0_40px_rgba(230,200,117,0.25)]">
            Unforgettable Memories
          </h2>
        </motion.div>

        <div className="absolute inset-0 pointer-events-none z-20">
          {COMPETITION_MEMORIES.map((item) => (
            <FloatingCard
              key={item.id}
              item={item}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
