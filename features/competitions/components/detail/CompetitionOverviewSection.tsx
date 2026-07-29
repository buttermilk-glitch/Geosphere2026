"use client";

import Image from "next/image";
import { motion } from "motion/react";
import Container from "@/components/container";
import { TextHighlighter } from "@/components/ui/text-highlighter";
import { Competition } from "../../types/competition";

interface CompetitionOverviewSectionProps {
  competition: Competition;
}

export function CompetitionOverviewSection({ competition }: CompetitionOverviewSectionProps) {
  return (
    <section
      id="overview"
      className="relative z-30 w-full bg-[#090604] text-[#FDFBF7] flex flex-col items-center justify-center overflow-hidden pt-16 md:pt-28 pb-0"
    >
      <div className="absolute top-0 inset-x-0 h-[20vh] bg-gradient-to-b from-transparent to-[#090604] pointer-events-none z-10" />
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
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#090604]/40 to-[#090604]" />
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
        <div className="absolute inset-0 bg-gradient-to-l from-[#090604]/25 via-[#090604]/60 to-[#090604]" />
      </motion.div>

      <Container className="relative z-20 flex flex-col items-start gap-8 md:gap-12 pt-24 pb-12 md:pt-32 md:pb-16 w-full max-w-none px-6 sm:px-12 md:px-20 lg:px-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-3"
        >
          <span className="w-2 h-2 rounded-full bg-[#E6C875] animate-pulse" />
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#E6C875]/80">
            Overview & Theme
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="w-full"
        >
          <h2 className="font-[family-name:var(--font-serif)] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal leading-[1.45] text-[#FDFBF7] tracking-wide">
            {competition.description} {competition.subterraneanDescription} Driven by the grand national vision, teams are challenged to explore{" "}
            <TextHighlighter
              triggerType="inView"
              highlightColor="rgba(230, 200, 117, 0.35)"
              className="rounded-[0.2em] px-2 py-0.5 text-[#FFF5D6] font-normal inline"
              transition={{ type: "spring", duration: 1.3, delay: 0.45, bounce: 0 }}
              useInViewOptions={{ once: true, amount: 0.35, margin: "-120px 0px -120px 0px" }}
            >
              "{competition.themeHeadline}"
            </TextHighlighter>
            {" "}to shape the future of sustainable energy exploration.
          </h2>
        </motion.div>
      </Container>
    </section>
  );
}
