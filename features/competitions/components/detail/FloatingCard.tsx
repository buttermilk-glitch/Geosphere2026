"use client";

import Image from "next/image";
import { motion, useTransform, MotionValue } from "motion/react";
import type { FloatingMemoryItem } from "../../domain/memories";

interface FloatingCardProps {
  item: FloatingMemoryItem;
  scrollYProgress: MotionValue<number>;
}

export function FloatingCard({ item, scrollYProgress }: FloatingCardProps) {
  const y = useTransform(
    scrollYProgress,
    [item.startRange, item.endRange],
    ["110vh", "-110vh"]
  );

  const opacity = useTransform(
    scrollYProgress,
    [
      item.startRange,
      item.startRange + 0.06,
      item.endRange - 0.06,
      item.endRange,
    ],
    [0, 1, 1, 0]
  );

  const scale = useTransform(
    scrollYProgress,
    [
      item.startRange,
      item.startRange + 0.12,
      item.endRange - 0.06,
      item.endRange,
    ],
    [0.82, 1.05, 1, 0.92]
  );

  const mid = (item.startRange + item.endRange) / 2;
  const blurAmount = useTransform(
    scrollYProgress,
    [item.startRange, mid - 0.05, mid + 0.05, item.endRange],
    [32, 0, 0, 24]
  );
  const filter = useTransform(blurAmount, (v) => `blur(${v}px)`);

  const isLeft = item.side === "left";

  return (
    <motion.div
      style={{
        y,
        opacity,
        scale,
        filter,
        rotate: item.rotation,
      }}
      className={`absolute ${
        isLeft
          ? "left-[2%] sm:left-[5%] md:left-[8%] lg:left-[10%]"
          : "right-[2%] sm:right-[5%] md:right-[8%] lg:right-[10%]"
      } top-1/2 -translate-y-1/2 w-[280px] sm:w-[380px] md:w-[460px] lg:w-[500px] pointer-events-auto z-20 group`}
    >
      <div className="relative rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.9)] transition-all duration-500">
        <div className="relative h-56 sm:h-72 md:h-80 lg:h-96 w-full overflow-hidden">
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-95 contrast-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent" />
          <div className="absolute bottom-4 left-5 right-5">
            <h3 className="font-[family-name:var(--font-serif)] text-base sm:text-xl md:text-2xl text-[#FFF5D6] font-normal leading-snug drop-shadow-md">
              {item.title}
            </h3>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
