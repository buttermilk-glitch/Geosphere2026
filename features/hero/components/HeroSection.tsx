"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { ArrowDown } from "lucide-react";
import { useIsMobile } from "../../../hooks/use-mobile";
import { FogVideo } from "./FogVideo";
import { NavigationMenu } from "./NavigationMenu";
import { StarsBackground } from "./StarsBackground";

export function HeroSection({ startAnimation = true }: { startAnimation?: boolean }) {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 280, damping: 32, mass: 0.1 };

  const rawTitleY = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);
  const titleY = useSpring(rawTitleY, springConfig);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.65], [1, 0]);

  const rawDescY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const descY = useSpring(rawDescY, springConfig);
  const descOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const rawBuildingY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const buildingY = useSpring(rawBuildingY, springConfig);
  const buildingOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.1]);

  const rawStoneY = useTransform(scrollYProgress, [0, 0.7], ["0vh", "-12vh"]);
  const stoneY = useSpring(rawStoneY, springConfig);
  const isMobile = useIsMobile();

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative h-[120vh] w-full bg-gradient-to-b from-[#02050B] via-[#080E1A] to-black text-white"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-200/15 via-sky-900/10 to-transparent" />

        <StarsBackground />
        <FogVideo />

        <motion.div
          style={{ y: titleY, opacity: titleOpacity }}
          className="absolute top-25 sm:top-6 md:top-8 left-0 w-full z-[8] flex flex-col items-center justify-start pointer-events-none transform-gpu"
        >
          <div className="flex flex-col w-full text-center px-4">
            <motion.h1
              initial={{ y: "80%", opacity: 0 }}
              animate={startAnimation ? { y: "0%", opacity: 1 } : { y: "80%", opacity: 0 }}
              transition={{ duration: 1.4, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="font-(family-name:--font-glimmer-of-light) text-[11vw] sm:text-[8vw] md:text-[120px] lg:text-[140px] xl:text-[150px] 2xl:text-[200px] leading-[0.85] tracking-tight text-[#FFF5D6] select-none drop-shadow-[0_10px_35px_rgba(0,0,0,0.9)]"
            >
              GEOSPHERE
            </motion.h1>
            <motion.p
              initial={{ y: "80%", opacity: 0 }}
              animate={startAnimation ? { y: "0%", opacity: 1 } : { y: "80%", opacity: 0 }}
              transition={{ duration: 1.4, delay: 1.35, ease: [0.16, 1, 0.3, 1] }}
              className="font-(family-name:--font-glimmer-of-light) text-[15vw] sm:text-[6vw] md:text-[120px] lg:text-[100px] xl:text-[120px] 2xl:text-[160px] leading-[0.85] tracking-tight text-[#E6C875]/70 select-none drop-shadow-[0_10px_35px_rgba(0,0,0,0.9)] sm:hidden mt-8"
            >
              2026
            </motion.p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={startAnimation ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
          transition={{ duration: 1.2, delay: 1.6, ease: [0.16, 1, 0.3, 1] }}
          className="absolute right-6 sm:right-12 md:right-16 lg:right-24 top-[50%] md:top-[54%] -translate-y-1/2 z-20 max-w-[260px] sm:max-w-xs md:max-w-sm pointer-events-auto hidden sm:block"
        >
          <motion.div
            style={{ y: descY, opacity: descOpacity }}
            className="flex flex-col items-start text-left space-y-5 transform-gpu bg-gradient-to-br from-white/10 via-slate-950/10 to-slate-900/10 border border-white/15 backdrop-blur-3xl shadow-[0_30px_80px_rgba(0,0,0,0.18)] rounded-[32px] p-6"
          >
            <p className="font-sans text-xs sm:text-sm text-[#FDFBF7]/90 font-light leading-relaxed tracking-wide">
              Geosphere 2026 is the annual event of the ITS Geophysical Engineering Student Association, connecting geoscience, innovation, and collaboration to advance a sustainable and resilient energy future.
            </p>
            <button
              type="button"
              onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
              className="group flex items-center gap-3 text-xs uppercase tracking-[0.2em] font-medium text-[#FDFBF7] hover:text-[#E6C875] transition-colors py-2 border-b border-white/20 hover:border-[#E6C875] cursor-pointer"
            >
              <span>Explore More</span>
              <ArrowDown className="w-3.5 h-3.5 text-[#E6C875] group-hover:translate-y-0.5 transition-transform duration-300" />
            </button>
          </motion.div>
        </motion.div>

        <motion.div
          style={{ y: buildingY, opacity: buildingOpacity }}
          initial={{ scale: 1.15, opacity: 0.6 }}
          animate={startAnimation ? { scale: 1.0, opacity: 1 } : { scale: 1.15, opacity: 0.6 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="absolute bottom-[14%] inset-x-0 h-[52.5vh] sm:bottom-[-5%] sm:h-full z-10 pointer-events-none transform-gpu"
        >
          <Image src={isMobile ? "/images/parthenon-mobile.webp" : "/images/parthenon.webp"} alt="Parthenon Temple" fill priority className={`object-cover w-full h-full ${isMobile ? "object-[50%_center]" : "object-center"}`} />
          <div className="absolute inset-0 sm:hidden bg-gradient-to-b from-transparent via-black/10 to-black/70 pointer-events-none" />
        </motion.div>

        <motion.div
          style={{ y: stoneY }}
          className="absolute bottom-[-5%] left-0 w-full h-[35vh] sm:bottom-[-36vh] sm:h-[76vh] z-30 pointer-events-none transform-gpu will-change-transform"
        >
          <motion.div
            initial={{ y: "100%", opacity: 0 }}
            animate={startAnimation ? { y: "0%", opacity: 1 } : { y: "100%", opacity: 0 }}
            transition={{ duration: 1.4, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full h-full"
          >
            <Image
              src={isMobile ? "/images/stone-bottom-mobile.png" : "/images/stone-bottom.png"}
              alt="Subterranean Rock Layers and Roots"
              fill
              priority
              className="object-cover object-top w-full h-full"
            />
            <div className="absolute inset-x-0 top-[25%] bottom-0 bg-gradient-to-b from-transparent via-black/20 to-black/60 pointer-events-none" />
          </motion.div>
        </motion.div>

        <div className="absolute bottom-0 inset-x-0 h-[45vh] sm:h-[35vh] bg-gradient-to-b from-transparent via-black/40 via-black/75 to-black z-40 pointer-events-none" />
      </div>
    </section>
  );
}
