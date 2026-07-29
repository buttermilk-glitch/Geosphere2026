"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ArrowUpRight, FileText } from "lucide-react";
import { Competition } from "../../types/competition";

interface CompetitionCtaSectionProps {
  competition: Competition;
}

export function CompetitionCtaSection({ competition }: CompetitionCtaSectionProps) {
  return (
    <section className="relative z-30 w-full pt-24 pb-48 sm:pt-32 sm:pb-64 md:pt-40 md:pb-80 px-6 sm:px-12 bg-[#090604] text-[#FDFBF7] overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.7 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 pointer-events-none z-0 overflow-hidden"
      >
        <Image
          src="/images/cave-rock-transition.png"
          alt="Buried Subterranean Greek Ruins Background"
          fill
          priority
          className="object-cover w-full h-full filter brightness-40 contrast-115"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#090604] via-[#090604]/50 to-[#090604]" />
      </motion.div>

      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_40%,_var(--tw-gradient-stops))] from-[#E6C875]/15 via-transparent to-transparent z-0" />
      <div className="absolute bottom-0 inset-x-0 h-48 bg-gradient-to-t from-[#090604] to-transparent pointer-events-none z-10" />

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center">
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-[family-name:var(--font-serif)] text-4xl sm:text-6xl md:text-7xl text-[#FFF5D6] font-normal leading-[1.1] mb-10 max-w-4xl drop-shadow-[0_0_35px_rgba(230,200,117,0.2)]"
        >
          Step Into the Subterranean Stage. Claim Your Legacy.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          <a
            href={competition.registrationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#E6C875] hover:bg-[#FFF5D6] text-black font-mono text-xs uppercase tracking-widest font-bold transition-colors duration-300 shadow-[0_0_30px_rgba(230,200,117,0.35)] flex items-center justify-center gap-2 group cursor-pointer"
          >
            <span>REGISTER NOW</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>

          <a
            href={competition.guidebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-transparent border border-[#E6C875]/40 hover:border-[#E6C875] text-[#FFF5D6] hover:bg-[#E6C875]/10 font-mono text-xs uppercase tracking-widest font-medium transition-colors duration-300 flex items-center justify-center gap-2 group cursor-pointer"
          >
            <FileText className="w-4 h-4 text-[#E6C875]" />
            <span>DOWNLOAD GUIDEBOOK</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
