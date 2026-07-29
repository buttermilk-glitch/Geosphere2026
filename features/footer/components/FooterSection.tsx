"use client";

import Image from "next/image";
import Container from "@/components/container";

export function FooterSection() {
  return (
    <footer className="relative z-40 w-full bg-black text-[#FDFBF7] pt-12 pb-10 overflow-hidden">
      <Container className="relative z-20 flex flex-col sm:flex-row items-center justify-between gap-6 pb-6">
        <span className="font-mono text-xs text-[#FDFBF7]/60">
          © 2026 GEOSPHERE ITS. All Rights Reserved.
        </span>

        <div className="flex items-center gap-6 font-mono text-xs">
          <a
            href="https://instagram.com/geosphereits/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#FDFBF7]/60 hover:text-[#E6C875] transition-colors uppercase tracking-wider"
          >
            Instagram
          </a>
          <a
            href="https://tiktok.com/@geospherehmtg"
            target="_blank"
            rel="noreferrer"
            className="text-[#FDFBF7]/60 hover:text-[#E6C875] transition-colors uppercase tracking-wider"
          >
            TikTok
          </a>
          <a
            href="https://linkedin.com/company/geosphere-its"
            target="_blank"
            rel="noreferrer"
            className="text-[#FDFBF7]/60 hover:text-[#E6C875] transition-colors uppercase tracking-wider"
          >
            LinkedIn
          </a>
        </div>
      </Container>

      <div className="absolute -bottom-22 sm:-bottom-32 md:-bottom-36 inset-x-0 w-full h-32 sm:h-44 md:h-52 pointer-events-none opacity-30 z-10">
        <Image
          src="/images/stone-bottom.png"
          alt="Bottom Edge Stone Accent"
          fill
          priority
          className="object-cover object-bottom filter brightness-85 contrast-115 pointer-events-none"
        />
        <div className="absolute top-0 inset-x-0 h-6 bg-gradient-to-b from-black to-transparent pointer-events-none" />
      </div>
    </footer>
  );
}
