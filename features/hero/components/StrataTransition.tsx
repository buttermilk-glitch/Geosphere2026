"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";

export function StrataTransition() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0.1, 0.9], ["15%", "-15%"]);
  const imageScale = useTransform(scrollYProgress, [0.1, 0.5, 0.9], [0.95, 1, 1.02]);
  const glowOpacity = useTransform(scrollYProgress, [0.2, 0.5, 0.8], [0.2, 0.6, 0.3]);

  return (
    <section
      ref={containerRef}
      className="relative w-full h-[140vh] sm:h-[170vh] bg-gradient-to-b from-[#091428] via-[#1C140E] to-[#2C1E18] overflow-hidden select-none"
    >
      <motion.div
        style={{ opacity: glowOpacity }}
        className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_50%,_var(--tw-gradient-stops))] from-[#E6C875]/20 via-transparent to-transparent z-10"
      />

      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden z-20">
        <motion.div
          style={{ y: imageY, scale: imageScale }}
          className="relative w-full h-full"
        >
          <Image
            src="/images/stone-bottom.png"
            alt="Full Subterranean Geological Cross-Section"
            fill
            priority
            className="object-cover object-top w-full h-full"
          />
        </motion.div>
      </div>
    </section>
  );
}
