"use client";

import Image from "next/image";
import { motion } from "motion/react";
import Container from "@/components/container";
import { MagicText } from "@/components/ui/magic-text";

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative z-30 w-full bg-black text-[#FDFBF7] flex flex-col items-center justify-center overflow-hidden py-10 md:py-28"
    >
      <div className="absolute top-0 inset-x-0 h-[20vh] bg-gradient-to-b from-transparent to-black pointer-events-none z-10" />
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_40%,_var(--tw-gradient-stops))] from-[#E6C875]/10 via-transparent to-transparent" />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.75 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute top-0 bottom-0 left-0 w-[220px] sm:w-[320px] md:w-[420px] pointer-events-none z-0 overflow-hidden [mask-image:linear-gradient(to_right,black_20%,black_60%,transparent_100%)]"
      >
        <Image
          src="/images/cave-rock-transition.png"
          alt="Subterranean Cave Rock Wall Left"
          fill
          priority
          className="object-cover object-left w-full h-full filter brightness-90 contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/40 to-black" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.5 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1.2, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        className="absolute top-0 bottom-0 right-0 w-[220px] sm:w-[320px] md:w-[420px] pointer-events-none z-0 overflow-hidden [mask-image:linear-gradient(to_left,black_20%,black_60%,transparent_100%)]"
      >
        <Image
          src="/images/cave-rock-transition.png"
          alt="Subterranean Cave Rock Wall Right"
          fill
          priority
          className="object-cover object-right w-full h-full filter brightness-75 contrast-115 transform scale-x-[-1]"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-black/25 via-black/60 to-black" />
      </motion.div>

      <Container className="relative z-20 flex flex-col items-start gap-8 md:gap-12 pt-32 pb-44 md:pt-44 md:pb-64">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-3"
        >
          <span className="w-2 h-2 rounded-full bg-[#E6C875] animate-pulse" />
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#E6C875]/80">
            About Geosphere
          </span>
        </motion.div>

        <MagicText
          text="GEOSPHERE ITS 2026 is the annual event organized by the ITS Geophysical Engineering student association. This national platform brings together visionary students and researchers under the theme “Shaping Pathways for a Sustainable Energy Transition and Resilient Future”."
          className="font-[family-name:var(--font-serif)] text-lg sm:text-xl md:text-2xl lg:text-3xl font-normal leading-relaxed text-[#FDFBF7] tracking-wide"
        />
      </Container>
    </section>
  );
}
