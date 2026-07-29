"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, PanInfo } from "motion/react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { COMPETITIONS_DATA } from "../data/competitions-data";


export function CompetitionsAccordion() {
  const [activeId, setActiveId] = useState<string>("gcsc");
  const [mobileIndex, setMobileIndex] = useState(0);

  const handleDragEnd = (_: any, info: PanInfo) => {
    const swipeThreshold = 50;
    if (info.offset.x < -swipeThreshold && mobileIndex < COMPETITIONS_DATA.length - 1) {
      setMobileIndex((prev) => prev + 1);
    } else if (info.offset.x > swipeThreshold && mobileIndex > 0) {
      setMobileIndex((prev) => prev - 1);
    }
  };

  const scrollPrev = () => {
    setMobileIndex((prev) => Math.max(0, prev - 1));
  };

  const scrollNext = () => {
    setMobileIndex((prev) => Math.min(COMPETITIONS_DATA.length - 1, prev + 1));
  };

  return (
    <>
      <div className="w-full lg:hidden flex flex-col gap-4 overflow-hidden">
        <div className="w-full overflow-hidden touch-pan-y">
          <motion.div
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={handleDragEnd}
            animate={{ translateX: `-${mobileIndex * 100}%` }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="flex flex-row w-full cursor-grab active:cursor-grabbing"
          >
            {COMPETITIONS_DATA.map((comp) => (
              <div
                key={comp.id}
                className="w-full shrink-0 px-1"
              >
                <div className="relative flex flex-col justify-between p-6 sm:p-7 w-full h-[460px] sm:h-[480px] rounded-md overflow-hidden border border-[#E6C875]/20 bg-black/90 shadow-2xl select-none">
                  <div className="absolute inset-0 pointer-events-none z-0 opacity-60">
                    <Image
                      src={comp.bgImage}
                      alt={`${comp.title} Background`}
                      fill
                      priority
                      className="object-cover object-center w-full h-full filter brightness-90 contrast-105 pointer-events-none"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#090604] via-[#090604]/70 to-[#090604]/50 pointer-events-none" />
                  </div>

                  <div className="relative z-10 flex items-center justify-between w-full pointer-events-none">
                    <span className="font-[family-name:var(--font-serif)] text-3xl text-[#E6C875]">
                      {comp.number}.
                    </span>
                    <span className="font-mono text-xs text-[#FDFBF7]/60 uppercase tracking-[0.2em]">
                      {comp.shortTitle}
                    </span>
                  </div>

                  <div className="relative z-10 flex-1 flex flex-col justify-end my-4 pointer-events-none">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="relative w-8 h-8 opacity-90">
                        <Image
                          src={comp.logo}
                          alt={`${comp.shortTitle} Logo`}
                          fill
                          className="object-contain"
                        />
                      </div>
                      <span className="font-mono text-[11px] text-[#E6C875] uppercase tracking-[0.25em]">
                        {comp.category}
                      </span>
                    </div>

                    <h3 className="font-[family-name:var(--font-serif)] text-2xl sm:text-3xl text-[#FDFBF7] font-normal leading-tight mb-3">
                      {comp.title}
                    </h3>

                    <p className="font-sans text-xs sm:text-sm text-[#FDFBF7]/75 font-light leading-relaxed line-clamp-3">
                      {comp.description}
                    </p>
                  </div>

                  <div className="relative z-10 flex items-center justify-end w-full pt-4 border-t border-white/15">
                    <Link
                      href={`/competitions/${comp.id}`}
                      prefetch={true}
                      className="font-mono text-xs text-[#E6C875] font-normal tracking-wider inline-flex items-center gap-1 hover:underline cursor-pointer"
                    >
                      EXPLORE <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="flex items-center justify-center gap-3 pt-2">
          <button
            onClick={scrollPrev}
            disabled={mobileIndex === 0}
            aria-label="Previous Item"
            className="p-2.5 rounded-md border border-[#E6C875]/30 bg-black/80 text-[#FDFBF7] disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#E6C875] hover:text-black transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={scrollNext}
            disabled={mobileIndex === COMPETITIONS_DATA.length - 1}
            aria-label="Next Item"
            className="p-2.5 rounded-md border border-[#E6C875]/30 bg-black/80 text-[#FDFBF7] disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#E6C875] hover:text-black transition-colors"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="hidden lg:flex w-full h-[600px] flex-row items-stretch border border-[#E6C875]/20 bg-black/90 backdrop-blur-md overflow-hidden rounded-md shadow-2xl">
        {COMPETITIONS_DATA.map((comp, idx) => {
          const isActive = comp.id === activeId;
          const isLast = idx === COMPETITIONS_DATA.length - 1;

          return (
            <div
              key={comp.id}
              onClick={() => setActiveId(comp.id)}
              className={`relative flex flex-col justify-between p-8 cursor-pointer overflow-hidden transition-[flex,background-color,border-color] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                !isLast ? "border-r border-[#E6C875]/20" : ""
              } ${
                isActive
                  ? "flex-[3.5] bg-[#0E0A07]/95"
                  : "flex-1 bg-transparent hover:bg-white/[0.02]"
              }`}
            >
              <div
                className={`absolute inset-0 pointer-events-none z-0 transition-all duration-700 ease-out ${
                  isActive ? "opacity-70 scale-100" : "opacity-20 scale-105"
                }`}
              >
                <Image
                  src={comp.bgImage}
                  alt={`${comp.title} Background`}
                  fill
                  priority
                  className="object-cover object-center w-full h-full filter brightness-90 contrast-105"
                />
                <div
                  className={`absolute inset-0 transition-colors duration-500 ${
                    isActive
                      ? "bg-gradient-to-t from-[#090604] via-[#090604]/65 to-[#090604]/40"
                      : "bg-gradient-to-t from-black via-black/85 to-black/70"
                  }`}
                />
              </div>

              <div className="relative z-10 flex items-center justify-between w-full">
                <span className="font-[family-name:var(--font-serif)] text-3xl text-[#E6C875]">
                  {comp.number}.
                </span>

                <span className="font-mono text-[10px] text-[#FDFBF7]/60 uppercase tracking-[0.2em]">
                  {comp.shortTitle}
                </span>
              </div>

              <div className="relative z-10 flex-1 flex flex-col justify-center my-6">
                {!isActive ? (
                  <div className="flex flex-col items-center justify-center gap-6 h-full">
                    <div className="relative w-8 h-8 opacity-75">
                      <Image
                        src={comp.logo}
                        alt={`${comp.shortTitle} Logo`}
                        fill
                        className="object-contain"
                      />
                    </div>

                    <span className="font-[family-name:var(--font-serif)] text-2xl text-[#FDFBF7]/80 tracking-wide uppercase rotate-180 [writing-mode:vertical-lr]">
                      {comp.shortTitle}
                    </span>
                  </div>
                ) : (
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={comp.id}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      transition={{ duration: 0.4 }}
                      className="flex flex-col items-start text-left"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div className="relative w-9 h-9 opacity-95">
                          <Image
                            src={comp.logo}
                            alt={`${comp.shortTitle} Logo`}
                            fill
                            className="object-contain"
                          />
                        </div>
                        <span className="font-mono text-[11px] text-[#E6C875] uppercase tracking-[0.25em]">
                          {comp.category}
                        </span>
                      </div>

                      <h3 className="font-[family-name:var(--font-serif)] text-3xl sm:text-4xl text-[#FDFBF7] font-normal leading-tight mb-4">
                        {comp.title}
                      </h3>

                      <p className="font-sans text-sm sm:text-base text-[#FDFBF7]/80 font-light leading-relaxed max-w-xl">
                        {comp.description}
                      </p>
                    </motion.div>
                  </AnimatePresence>
                )}
              </div>

              <div className="relative z-10 flex items-center justify-end w-full pt-4 border-t border-white/15">
                {isActive ? (
                  <Link
                    href={`/competitions/${comp.id}`}
                    onClick={(e) => e.stopPropagation()}
                    className="font-mono text-xs text-[#E6C875] font-normal tracking-wider inline-flex items-center gap-1 hover:underline cursor-pointer"
                  >
                    EXPLORE <ArrowRight className="w-3 h-3" />
                  </Link>
                ) : (
                  <span className="font-mono text-xs text-[#FDFBF7]/40 font-normal tracking-wider">
                    CLICK TO EXPAND
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
