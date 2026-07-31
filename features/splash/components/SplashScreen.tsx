"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";

export function SplashScreen({ onComplete }: { onComplete?: () => void }) {
  const [shouldRender, setShouldRender] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [targetProgress, setTargetProgress] = useState(0);
  const [displayedProgress, setDisplayedProgress] = useState(0);
  const preventScrollRef = useRef<(event: Event) => void>(() => {});

  const cleanupScrollLock = () => {
    document.body.style.overflow = "";
    document.documentElement.style.overflow = "";
    const handler = preventScrollRef.current;
    window.removeEventListener("wheel", handler);
    window.removeEventListener("touchmove", handler);
    window.removeEventListener("touchstart", handler);
  };

  const handleDismiss = () => {
    cleanupScrollLock();
    setIsVisible(false);
  };

  useEffect(() => {
    const hasSeen = sessionStorage.getItem("hasSeenSplashScreen");
    if (hasSeen) {
      if (onComplete) onComplete();
      return;
    }

    setShouldRender(true);
    setIsVisible(true);

    const preventScroll = (event: Event) => {
      event.preventDefault();
    };

    preventScrollRef.current = preventScroll;
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    window.addEventListener("wheel", preventScroll, { passive: false });
    window.addEventListener("touchmove", preventScroll, { passive: false });

    const assets = [
      { type: "image", src: "/logo.png" },
      { type: "image", src: "/images/parthenon-ruins.png" },
      { type: "image", src: "/images/stone-bottom.png" },
      { type: "image", src: "/images/stone-crack-bottom.png" },
      { type: "image", src: "/images/stone-crack.png" },
      { type: "image", src: "/images/buried-greek-ruins.png" },
      { type: "image", src: "/images/cave-rock-transition.png" },
      { type: "image", src: "/images/cave-timeline-continuation.png" },
      { type: "image", src: "/images/card-bg-gcsc.png" },
      { type: "image", src: "/images/card-bg-geoepic.png" },
      { type: "image", src: "/images/card-bg-geoleague.png" },
      { type: "image", src: "/images/card-bg-geopaper.png" },
      { type: "image", src: "/images/card-bg-gtalk.png" },
      { type: "image", src: "/images/competition/icon-gcsc.png" },
      { type: "image", src: "/images/competition/icon-geoepic.png" },
      { type: "image", src: "/images/competition/icon-geoleague.png" },
      { type: "image", src: "/images/competition/icon-geopaper.png" },
      { type: "image", src: "/images/competition/icon-gtalk.png" },
      { type: "video", src: "/videos/fog-1.webm" },
    ];

    let loadedCount = 0;
    const totalCount = assets.length + 1;

    const updateAssetCount = () => {
      loadedCount += 1;
      const targetPercent = Math.min(100, Math.floor((loadedCount / totalCount) * 100));
      setTargetProgress((prev) => Math.max(prev, targetPercent));
    };

    if (document.readyState === "complete") {
      updateAssetCount();
    } else {
      window.addEventListener("load", updateAssetCount, { once: true });
    }

    assets.forEach((asset) => {
      if (asset.type === "image") {
        const img = new window.Image();
        img.src = asset.src;
        if (img.complete) {
          updateAssetCount();
        } else {
          img.onload = updateAssetCount;
          img.onerror = updateAssetCount;
        }
      } else if (asset.type === "video") {
        const video = document.createElement("video");
        video.src = asset.src;
        video.preload = "auto";
        if (video.readyState >= 3) {
          updateAssetCount();
        } else {
          video.oncanplaythrough = updateAssetCount;
          video.onerror = updateAssetCount;
        }
      }
    });

    const fallbackTimer = setTimeout(() => {
      setTargetProgress(100);
    }, 5000);

    return () => {
      clearTimeout(fallbackTimer);
      cleanupScrollLock();
      window.removeEventListener("load", updateAssetCount);
    };
  }, [onComplete]);

  useEffect(() => {
    if (!shouldRender) return;

    let timer: NodeJS.Timeout;
    const step = () => {
      setDisplayedProgress((prev) => {
        if (prev >= targetProgress && targetProgress < 100) {
          return prev;
        }

        const goal = Math.max(targetProgress, 100);
        if (prev < goal) {
          const next = prev + 1;
          timer = setTimeout(step, 28);
          return next;
        }
        return prev;
      });
    };

    timer = setTimeout(step, 30);
    return () => clearTimeout(timer);
  }, [targetProgress, shouldRender]);

  useEffect(() => {
    if (displayedProgress >= 100 && isVisible) {
      const post100HoldTimer = setTimeout(() => {
        handleDismiss();
      }, 600);

      return () => clearTimeout(post100HoldTimer);
    }
  }, [displayedProgress, isVisible]);

  const handleExitComplete = () => {
    sessionStorage.setItem("hasSeenSplashScreen", "true");
    cleanupScrollLock();
    setShouldRender(false);
    if (onComplete) onComplete();
  };

  if (!shouldRender) return null;

  return (
    <AnimatePresence onExitComplete={handleExitComplete}>
      {isVisible && (
        <motion.div
          key="splash-screen"
          initial={{ y: "0%" }}
          exit={{ y: "-100%" }}
          transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-between bg-[#121212] text-white px-0 py-8 select-none pointer-events-auto"
        >
          <div className="w-full flex justify-center pt-6 px-6">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0, ease: "easeOut" }}
            >
              <Image
                src="/logo.png"
                alt="GEOSPHERE Logo"
                width={80}
                height={80}
                priority
                className="object-contain filter drop-shadow-[0_0_16px_rgba(255,255,255,0.25)]"
              />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 1.0, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col max-w-4xl px-6 w-full"
          >
            <blockquote className="font-serif text-lg sm:text-2xl md:text-3xl text-white/90 leading-relaxed font-normal tracking-wide text-left">
              “ Semua cabang ilmu bumi harus saling melengkapi untuk menyingkap rahasia planet kita. ”
            </blockquote>
            <div className="w-full flex flex-col items-end mt-4">
              <cite className="font-sans text-xs sm:text-sm text-[#E6C875] tracking-[0.15em] uppercase not-italic font-medium">
                — Alfred Wegener
              </cite>
              <span className="mt-1 text-[11px] sm:text-xs text-white/50 tracking-wider">
                Die Entstehung der Kontinente und Ozeane (1915)
              </span>
            </div>
          </motion.div>

          <div className="w-full flex justify-end px-6 sm:px-12 pb-8 pointer-events-none">
            <span className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#FFF5D6] via-[#E6C875] to-[#B89335] tracking-tight drop-shadow-lg">
              {displayedProgress}%
            </span>
          </div>

          <div className="absolute top-full left-0 w-full h-[120px] sm:h-[180px] overflow-hidden pointer-events-none -mt-1">
            <svg
              viewBox="0 0 1440 320"
              preserveAspectRatio="none"
              className="w-full h-full fill-[#121212]"
            >
              <path d="M0,0 L1440,0 L1440,60 Q720,320 0,60 Z" />
            </svg>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
