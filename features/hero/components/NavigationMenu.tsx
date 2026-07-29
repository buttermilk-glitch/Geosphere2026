"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";

import {
  SUB_COMPETITIONS,
  CONTACT_PERSONS,
  SOCIALS,
  CAMPUS_ADDRESS,
} from "../domain/constants";

export function NavigationMenu({ startAnimation = true }: { startAnimation?: boolean }) {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [activeCompIndex, setActiveCompIndex] = useState<number>(0);

  useEffect(() => {
    if (isNavOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isNavOpen]);

  const currentComp = SUB_COMPETITIONS[activeCompIndex];

  return (
    <>
      <motion.aside
        initial={{ opacity: 0, x: -20 }}
        animate={startAnimation ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
        transition={{ duration: 1.0, delay: 1.4, ease: [0.16, 1, 0.3, 1] }}
        className="fixed left-0 top-1/2 -translate-y-1/2 z-[90] flex flex-col items-center gap-4 px-4 py-5 bg-[#121212] border-r border-t border-b border-white/10 rounded-r-lg shadow-2xl pointer-events-auto"
      >
        <Link
          href="/"
          className="group flex items-center justify-center cursor-pointer transition-opacity hover:opacity-80"
          aria-label="Geosphere Logo"
        >
          <Image
            src="/logo.png"
            alt="GEOSPHERE Logo"
            width={30}
            height={30}
            className="object-contain opacity-90 transition-transform duration-300 group-hover:scale-105"
          />
        </Link>

        <div className="w-5 h-[1px] bg-white/15" />

        <button
          type="button"
          onClick={() => setIsNavOpen(!isNavOpen)}
          className="flex flex-col items-center justify-center w-7 h-7 text-[#FDFBF7]/80 hover:text-white transition-opacity hover:opacity-100 cursor-pointer"
          aria-label="Toggle Navigation Menu"
        >
          {isNavOpen ? (
            <X className="w-5 h-5 text-[#E6C875] transition-transform duration-200 rotate-90" />
          ) : (
            <div className="flex flex-col items-center justify-center gap-1.5 w-5 h-4">
              <span className="w-5 h-[1.5px] bg-current rounded-full" />
              <span className="w-3.5 h-[1.5px] bg-current rounded-full" />
            </div>
          )}
        </button>
      </motion.aside>

      <AnimatePresence>
        {isNavOpen && (
          <motion.div
            initial={{ clipPath: "circle(0% at 36px 50%)" }}
            animate={{ clipPath: "circle(150% at 36px 50%)" }}
            exit={{ clipPath: "circle(0% at 36px 50%)" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[100] bg-[#0A0705] text-[#FDFBF7] pointer-events-auto flex flex-col"
            onMouseLeave={() => setActiveCompIndex(0)}
          >
            <div className="absolute top-8 right-10 sm:top-10 sm:right-14 z-10">
              <button
                type="button"
                onClick={() => setIsNavOpen(false)}
                className="p-2 text-[#FDFBF7]/60 hover:text-[#E6C875] transition-colors cursor-pointer"
                aria-label="Close Navigation"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="flex flex-1 min-h-0">
              <div className="hidden lg:flex w-1/2 flex-col justify-center px-16 xl:px-24 py-12 relative overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentComp.id}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col gap-6 max-w-xl"
                  >
                    <div className="w-28 h-28 xl:w-36 xl:h-36 shrink-0 relative">
                      <Image
                        src={currentComp.logo}
                        alt={currentComp.name}
                        width={144}
                        height={144}
                        className="object-contain w-full h-full filter drop-shadow-xl"
                      />
                    </div>

                    <div className="flex flex-col gap-3">
                      <h3 className="font-[family-name:var(--font-serif)] text-2xl xl:text-3xl text-[#FFF5D6] tracking-wide leading-snug">
                        {currentComp.fullName}
                      </h3>
                      <p className="font-sans text-lg xl:text-xl text-[#FDFBF7]/85 font-light leading-relaxed">
                        {currentComp.description}
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              <nav className="flex w-full lg:w-1/2 flex-col justify-center px-10 sm:px-16 lg:px-20 gap-0.5">
                {SUB_COMPETITIONS.map((item, index) => {
                  const isActive = activeCompIndex === index;
                  return (
                    <Link
                      key={item.id}
                      href={item.href}
                      onMouseEnter={() => setActiveCompIndex(index)}
                      onClick={() => setIsNavOpen(false)}
                      prefetch
                      className={`group flex items-center gap-5 py-2.5 transition-all duration-300 cursor-pointer ${
                        isActive ? "text-[#FFF5D6]" : "text-[#FDFBF7]/22 hover:text-[#FDFBF7]/60"
                      }`}
                    >
                      <span
                        className={`shrink-0 w-1.5 h-1.5 rounded-full bg-[#E6C875] transition-all duration-300 ${
                          isActive ? "opacity-100 scale-100" : "opacity-0 scale-50"
                        }`}
                      />
                      <span
                        className={`font-[family-name:var(--font-serif)] text-4xl sm:text-5xl xl:text-6xl tracking-wide transition-all duration-300 ${
                          isActive ? "translate-x-0" : "group-hover:translate-x-1"
                        }`}
                      >
                        {item.name}
                      </span>
                    </Link>
                  );
                })}
              </nav>
            </div>

            <div className="flex flex-col sm:flex-row items-start justify-between gap-6 px-10 sm:px-16 pb-8 sm:pb-10 pt-4 text-[10px] font-mono text-[#FDFBF7]/40">
              <div className="flex flex-row gap-10 sm:gap-14">
                <div className="flex flex-col gap-1">
                  <span className="text-[#FDFBF7]/60 uppercase tracking-widest">
                    Institut Teknologi Sepuluh Nopember
                  </span>
                  <span>Fakultas Teknik Sipil, Lingkungan & Kebumian</span>
                  <span className="text-[#FDFBF7]/25">{CAMPUS_ADDRESS}</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[#FDFBF7]/30 uppercase tracking-widest mb-0.5">
                    Contact Person
                  </span>
                  {CONTACT_PERSONS.map((cp, i) => (
                    <span key={cp.name} className="text-[#E6C875]/70">
                      CP {i + 1}: {cp.name} — {cp.phone}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-end gap-8">
                <div className="flex flex-col gap-1">
                  {SOCIALS.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#E6C875] transition-colors uppercase tracking-widest"
                    >
                      {s.label}
                    </a>
                  ))}
                </div>
                <div className="flex flex-col items-end gap-1">
                  <a
                    href="#privacy"
                    onClick={() => setIsNavOpen(false)}
                    className="hover:text-[#FFF5D6] transition-colors tracking-widest uppercase"
                  >
                    Privacy Policy
                  </a>
                  <span className="text-[#FDFBF7]/20">© 2026 GEOSPHERE ITS</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
