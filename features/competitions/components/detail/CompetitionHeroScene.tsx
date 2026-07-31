"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Download, ArrowUpRight } from "lucide-react";
import { toast } from "sonner";
import { Competition } from "../../types/competition";

interface CompetitionHeroSceneProps {
  competition: Competition;
}

export function CompetitionHeroScene({ competition }: CompetitionHeroSceneProps) {
  const isGeoepic = competition.id === "geoepic";
  const isGtalk = competition.id === "gtalk";
  const hasGuidebook = Boolean(competition.guidebookUrl);
  const hasRegistration = Boolean(competition.registrationUrl);

  const handleDownloadGuidebook = () => {
    window.open(competition.guidebookUrl, "_blank");
    toast.success(`Opening Guidebook: ${competition.shortTitle} 2026`);
  };

  const handleScrollToGtalkRegistration = () => {
    const target = document.getElementById("gtalk-registration");
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <section className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden bg-[#090604] text-[#FDFBF7] px-6 sm:px-12 z-0">
      <div className="absolute inset-0 z-0 pointer-events-none opacity-35">
        <Image
          src="/images/buried-greek-ruins.png"
          alt="Ancient Greek Subterranean Ruins"
          fill
          priority
          className="object-cover object-center filter brightness-50 contrast-125 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#090604]/90 via-[#090604]/70 to-[#090604]" />
      </div>

      <div className="absolute inset-0 z-0 pointer-events-none opacity-25 mix-blend-screen">
        <Image
          src={competition.bgImage}
          alt={competition.title}
          fill
          priority
          className="object-cover object-center filter brightness-90 contrast-110"
        />
        <div className="absolute inset-0 bg-radial from-transparent via-[#090604]/60 to-[#090604]" />
      </div>

      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#E6C875]/10 blur-[120px]" />
      </div>

      <div className="absolute bottom-0 inset-x-0 h-32 sm:h-44 bg-gradient-to-t from-[#090604] via-[#090604]/80 to-transparent pointer-events-none z-10" />

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 max-w-4xl mx-auto w-full text-center flex flex-col items-center py-6"
      >
        <motion.div
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative flex items-center justify-center p-4 rounded-full border border-[#E6C875]/30 bg-black/60 backdrop-blur-md shadow-[0_0_40px_rgba(230,200,117,0.2)] mb-8 group"
        >
          <div className="relative w-14 h-14 sm:w-20 sm:h-20">
            <Image
              src={competition.logo}
              alt={competition.shortTitle}
              fill
              className="object-contain filter drop-shadow-md group-hover:scale-105 transition-transform"
            />
          </div>
        </motion.div>

        <h1 className="font-[family-name:var(--font-serif)] text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-normal leading-[1.1] tracking-tight mb-6 text-transparent bg-clip-text bg-gradient-to-b from-[#FFF5D6] via-[#FDFBF7] to-[#E6C875] text-balance line-clamp-2 max-w-5xl">
          {competition.title}
        </h1>

        {isGtalk && hasRegistration && (
          <button
            onClick={handleScrollToGtalkRegistration}
            className="mb-8 inline-flex items-center justify-center rounded-full bg-[#E6C875] px-6 py-3 text-sm uppercase tracking-[0.25em] font-semibold text-black transition-all hover:bg-[#FFF5D6] shadow-[0_0_30px_rgba(230,200,117,0.35)]"
          >
            REGISTER NOW
          </button>
        )}

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="inline-flex flex-col items-center justify-center px-8 py-3.5 rounded-lg border border-[#E6C875]/40 bg-black/60 backdrop-blur-md shadow-[0_0_40px_rgba(230,200,117,0.2)] mb-8"
        >
          <span className="font-mono text-[11px] text-[#E6C875] tracking-[0.25em] uppercase mb-1">
            {competition.id === "gtalk" ? "REGISTRATION FEE" : "TOTAL PRIZE POOL"}
          </span>
          <span className="font-[family-name:var(--font-serif)] text-3xl sm:text-4xl text-[#FFF5D6] font-normal tracking-wide">
            {competition.prizePool}
          </span>
          {isGtalk && hasRegistration && (
            <a
              id="gtalk-registration"
              href={competition.registrationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center justify-center rounded-md bg-[#E6C875] px-5 py-3 text-xs uppercase tracking-widest font-semibold text-black transition-colors hover:bg-[#FFF5D6] shadow-[0_0_30px_rgba(230,200,117,0.35)]"
            >
              REGISTER
            </a>
          )}
        </motion.div>

        {!isGeoepic && !isGtalk && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            {hasGuidebook && (
              <button
                onClick={handleDownloadGuidebook}
                className="w-full sm:w-auto px-7 py-3 rounded-md border border-[#E6C875]/40 bg-black/60 backdrop-blur-md text-[#E6C875] font-mono text-xs uppercase tracking-widest hover:bg-[#E6C875] hover:text-black transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg"
              >
                <Download className="w-4 h-4" /> GUIDEBOOK
              </button>
            )}

            {hasRegistration && (
              <a
                href={competition.registrationUrl}
                className="w-full sm:w-auto px-7 py-3 rounded-md bg-[#E6C875] text-black font-mono text-xs uppercase tracking-widest font-semibold hover:bg-[#FFF5D6] transition-all flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(230,200,117,0.3)]"
              >
                REGISTER <ArrowUpRight className="w-4 h-4" />
              </a>
            )}
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}
