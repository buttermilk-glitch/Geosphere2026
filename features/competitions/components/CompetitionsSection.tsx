"use client";

import Image from "next/image";
import { motion } from "motion/react";
import Container from "@/components/container";
import { CompetitionsAccordion } from "./CompetitionsAccordion";

export function CompetitionsSection() {
  return (
    <section
      id="competitions"
      className="relative z-40 w-full bg-black text-[#FDFBF7] flex flex-col items-center justify-center overflow-hidden py-28 md:py-40"
    >
      <div className="absolute bottom-0 inset-x-0 h-28 md:h-44 bg-gradient-to-t from-black via-black/60 via-black/20 to-transparent pointer-events-none z-10" />

      <div className="absolute inset-0 z-0 pointer-events-none opacity-90 [mask-image:linear-gradient(to_bottom,transparent_0%,black_15%,black_75%,transparent_100%)]">
        <Image
          src="/images/buried-greek-ruins_.webp"
          alt="Buried Ancient Greek Parthenon Temple and Statue"
          fill
          priority
          className="object-cover object-center w-full h-full"
        />
        <div className="absolute inset-0 bg-black/25" />
      </div>

      <Container className="relative z-20 flex flex-col items-center gap-12 sm:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center text-center gap-4 max-w-3xl"
        >
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#E6C875] animate-pulse" />
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#E6C875]/80">
              Geosphere Sub-Competitions
            </span>
          </div>

          <h2 className="font-[family-name:var(--font-glimmer-of-light)] text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#FFF5D6] tracking-tight">
            Our Competitions
          </h2>
        </motion.div>

        <CompetitionsAccordion />
      </Container>
    </section>
  );
}
