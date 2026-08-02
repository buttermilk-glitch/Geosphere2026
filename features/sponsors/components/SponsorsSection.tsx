"use client";

import Image from "next/image";
import { motion } from "motion/react";
import Container from "@/components/container";
import { SPONSORS_DATA } from "../data/sponsors-data";
import { Sponsor } from "../types/sponsor";

interface SponsorsSectionProps {
  sponsors?: Sponsor[];
}

export function SponsorsSection({ sponsors = SPONSORS_DATA }: SponsorsSectionProps) {
  const hasSponsors = sponsors && sponsors.length > 0;
  

  return (
    <section
      id="sponsors"
      className="relative z-40 w-full min-h-[75vh] bg-black text-[#FDFBF7] flex flex-col items-center justify-center overflow-hidden py-32 md:py-44"
    >
      <div className="absolute top-0 inset-x-0 h-28 md:h-44 bg-gradient-to-b from-black via-black/60 via-black/20 to-transparent pointer-events-none z-10" />
      <div className="absolute bottom-0 inset-x-0 h-28 md:h-44 bg-gradient-to-t from-black via-black/60 via-black/20 to-transparent pointer-events-none z-10" />

      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute left-0 top-16 md:top-24 w-72 sm:w-96 md:w-[420px] h-72 sm:h-96 md:h-[420px] opacity-12 pointer-events-none">
          <Image
            src="/images/stone-crack-bottom.png"
            alt="Subtle Stone Crack Top Left Accent"
            fill
            priority
            className="object-contain object-left-top filter brightness-90 contrast-115"
          />
        </div>

        <div className="absolute right-0 bottom-0 w-72 sm:w-96 md:w-[420px] h-72 sm:h-96 md:h-[420px] opacity-12 pointer-events-none">
          <Image
            src="/images/stone-crack.png"
            alt="Subtle Stone Crack Bottom Right Accent"
            fill
            priority
            className="object-contain object-right-bottom filter brightness-90 contrast-115"
          />
        </div>
      </div>

      <Container className="relative z-20 flex flex-col items-start gap-12 sm:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-start text-left gap-4 max-w-2xl"
        >
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#E6C875] animate-pulse" />
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#E6C875]/80">
              Partnerships
            </span>
          </div>

          <h2 className="font-[family-name:var(--font-glimmer-of-light)] text-4xl sm:text-5xl md:text-6xl text-[#FFF5D6] tracking-tight">
            Our Sponsors
          </h2>
        </motion.div>

        {hasSponsors ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="relative overflow-hidden w-full flex flex-col items-center justify-center gap-6 p-12 sm:p-16 min-h-[27rem] rounded-md border-4 border-dotted border-white/20 backdrop-blur-sm transition-[border-color,box-shadow] duration-500 ease-out"
          >

            <div className="relative flex flex-col items-center text-center gap-2 max-w-md z-10">
              <h3 className="font-[family-name:var(--font-glimmer-of-light)] text-2xl sm:text-3xl text-[#FFF5D6]">
                Interested in Partnering With Us?
              </h3>
            </div>

            <a
              href="/docs/SPONSOR-compressed.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-10 mt-2 inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#E6C875]/40 text-[#E6C875] text-sm font-mono uppercase tracking-[0.15em] hover:bg-[#E6C875] hover:text-black transition-all duration-300"
            >
              Become a Sponsor
            </a>
          </motion.div>
        ) : (
          <div className="w-full flex items-center justify-center p-12 sm:p-16 rounded-md border border-white/12 bg-black/40 backdrop-blur-sm">
            <span className="font-mono text-sm sm:text-base text-[#FDFBF7]/50 tracking-[0.25em] uppercase text-center">
              Belum Ada Sponsor
            </span>
          </div>
        )}
      </Container>
    </section>
  );
}
