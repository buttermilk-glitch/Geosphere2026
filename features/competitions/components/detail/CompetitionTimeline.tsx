"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Competition, CompetitionTimelineStep } from "../../types/competition";
import { calculateTimelineStatuses } from "../../domain/timeline";

interface CompetitionTimelineProps {
  competition: Competition;
}

function TimelineItem({
  step,
  idx,
  status,
  isEven,
}: {
  step: CompetitionTimelineStep;
  idx: number;
  status: "completed" | "current" | "upcoming";
  isEven: boolean;
}) {
  const isCurrent = status === "current";
  const isCompleted = status === "completed";

  return (
    <motion.div
      key={step.title}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: idx * 0.08 }}
      className={`relative flex flex-col sm:flex-row items-start ${
        isEven ? "sm:flex-row-reverse" : ""
      } justify-between gap-6 pl-10 sm:pl-0 w-full group`}
    >
      <div
        className={`absolute left-4 sm:left-1/2 top-4 -translate-x-1/2 z-10 transition-all duration-500 rounded-full ${
          isCurrent
            ? "w-4 h-4 bg-[#E6C875] ring-8 ring-[#E6C875]/30 shadow-[0_0_25px_#E6C875] animate-pulse"
            : isCompleted
              ? "w-3.5 h-3.5 bg-[#E6C875] ring-4 ring-[#090604] shadow-[0_0_10px_#E6C875]"
              : "w-3 h-3 bg-[#E6C875]/40 ring-4 ring-[#090604]"
        }`}
      />

      <div
        className={`w-full sm:w-[calc(50%-2.5rem)] flex flex-col transition-all duration-500 p-6 rounded-2xl border backdrop-blur-md ${
          isCurrent
            ? "bg-[#120D08]/90 border-[#E6C875]/70 shadow-[0_0_40px_rgba(230,200,117,0.25)]"
            : isCompleted
              ? "bg-[#0E0A07]/90 border-[#E6C875]/30 opacity-95 shadow-xl"
              : "bg-[#0E0A07]/75 border-[#E6C875]/20 opacity-90 hover:border-[#E6C875]/45"
        } ${isEven ? "sm:text-right" : "sm:text-left"}`}
      >
        <div
          className={`flex items-center gap-2 mb-2 ${
            isEven ? "sm:justify-end" : "sm:justify-start"
          }`}
        >
          <span
            className={`font-mono text-xs uppercase tracking-wider font-semibold ${
              isCurrent ? "text-[#E6C875]" : "text-[#E6C875]/80"
            }`}
          >
            {step.phase}
          </span>
          <span className="text-[#E6C875]/30">•</span>
          <span className="font-mono text-xs text-[#FFF5D6]/80 font-medium">{step.date}</span>
        </div>

        <h3
          className={`font-[family-name:var(--font-serif)] text-xl sm:text-2xl font-normal mb-2 transition-colors ${
            isCurrent ? "text-[#FFF5D6]" : "text-[#FDFBF7]"
          }`}
        >
          {step.title}
        </h3>

        <p className="font-sans text-xs sm:text-sm text-[#FDFBF7]/80 font-light leading-relaxed">
          {step.description}
        </p>
      </div>
    </motion.div>
  );
}

export function CompetitionTimeline({ competition }: CompetitionTimelineProps) {
  const statuses = calculateTimelineStatuses(competition.timeline);
  const isGeoepic = competition.id === "geoepic";

  return (
    <section className="relative z-30 w-full pt-16 pb-28 md:pt-24 md:pb-36 px-6 sm:px-12 bg-[#090604] text-[#FDFBF7] overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.35 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 pointer-events-none z-0 overflow-hidden"
      >
        <Image
          src="/images/cave-timeline-continuation.png"
          alt="Subterranean Cave Timeline Background"
          fill
          priority
          className="object-cover w-full h-full filter brightness-75 contrast-125"
        />
        <div className="absolute inset-0 bg-[#090604]/50" />
      </motion.div>

      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-[#090604] via-[#090604]/70 to-transparent pointer-events-none z-0" />
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-[#090604] via-[#090604]/70 to-transparent pointer-events-none z-0" />
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_50%_30%,_var(--tw-gradient-stops))] from-[#E6C875]/12 via-transparent to-transparent z-0" />

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        <div className="flex flex-col items-center text-center mb-16">
          <span className="font-mono text-xs text-[#E6C875] tracking-[0.3em] uppercase mb-2 block">
            TIMELINE & MILESTONES
          </span>
          <h2 className="font-[family-name:var(--font-serif)] text-3xl sm:text-5xl text-[#FFF5D6] font-normal drop-shadow-[0_0_30px_rgba(230,200,117,0.2)]">
            {isGeoepic ? "Agenda" : "Schedule & Key Dates"}
          </h2>
        </div>

        <div className="relative w-full flex flex-col gap-8 before:absolute before:left-4 sm:before:left-1/2 before:top-3 before:bottom-3 before:w-[2px] before:bg-gradient-to-b before:from-[#E6C875]/80 before:via-[#E6C875]/40 before:to-[#E6C875]/10 before:-translate-x-1/2">
          {competition.timeline.map((step, idx) => (
            <TimelineItem
              key={step.title}
              step={step}
              idx={idx}
              status={statuses[idx]}
              isEven={idx % 2 === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
