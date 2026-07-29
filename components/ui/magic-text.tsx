"use client";

import * as React from "react";
import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "motion/react";

export interface MagicTextProps {
  text: string;
  className?: string;
  wordClassName?: string;
}

interface WordProps {
  children: string;
  progress: MotionValue<number>;
  range: number[];
  className?: string;
}

const Word: React.FC<WordProps> = ({ children, progress, range, className }) => {
  const opacity = useTransform(progress, range, [0, 1]);

  return (
    <span className={`relative mt-2 mr-2 md:mr-3 inline-block ${className || ""}`}>
      <span className="absolute opacity-15 select-none">{children}</span>
      <motion.span style={{ opacity }}>{children}</motion.span>
    </span>
  );
};

export const MagicText: React.FC<MagicTextProps> = ({ text, className, wordClassName }) => {
  const container = useRef<HTMLParagraphElement>(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 0.85", "start 0.25"],
  });

  const words = text.split(" ");

  return (
    <p ref={container} className={`flex flex-wrap ${className || ""}`}>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;

        return (
          <Word key={`${word}-${i}`} progress={scrollYProgress} range={[start, end]} className={wordClassName}>
            {word}
          </Word>
        );
      })}
    </p>
  );
};
