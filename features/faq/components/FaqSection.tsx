"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { MessageSquare } from "lucide-react";
import Container from "@/components/container";
import { FAQ_DATA, CONTACT_PERSONS } from "../data/faq-data";
import { FaqAccordion } from "./FaqAccordion";

export function FaqSection() {
  return (
    <section
      id="faq"
      className="relative z-40 w-full bg-black text-[#FDFBF7] flex flex-col items-center justify-center overflow-hidden py-28 md:py-40"
    >
      <div className="absolute top-0 inset-x-0 h-28 md:h-44 bg-gradient-to-b from-black via-black/80 to-transparent pointer-events-none z-10" />
      <div className="absolute bottom-0 inset-x-0 h-28 md:h-44 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none z-10" />

      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 opacity-12 pointer-events-none">
          <Image
            src="/images/cave-rock-transition.png"
            alt="Subtle Cave Rock Background Texture"
            fill
            priority
            className="object-cover object-center w-full h-full filter brightness-85 contrast-120 pointer-events-none"
          />
        </div>
      </div>

      <Container className="relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col items-start text-left gap-6 lg:sticky lg:top-28"
          >
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#E6C875] animate-pulse" />
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#E6C875]/80">
                Information Desk
              </span>
            </div>

            <h2 className="font-[family-name:var(--font-glimmer-of-light)] text-4xl sm:text-5xl md:text-6xl text-[#FFF5D6] tracking-tight">
              Frequently Asked Questions
            </h2>

            <div className="w-full flex flex-col gap-3 pt-4 border-t border-white/10">
              <div className="flex flex-col gap-3 w-full">
                {CONTACT_PERSONS.map((cp) => (
                  <a
                    key={cp.name}
                    href={cp.whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between p-4 rounded-md border border-white/12 bg-black/40 backdrop-blur-sm group transition-all duration-300 hover:border-[#E6C875]/60 hover:bg-[#E6C875]/5 cursor-pointer"
                  >
                    <span className="font-[family-name:var(--font-serif)] text-base text-[#FDFBF7] font-normal group-hover:text-[#E6C875] transition-colors">
                      {cp.name}
                    </span>

                    <div className="inline-flex items-center gap-2 font-mono text-xs text-[#E6C875] shrink-0">
                      <MessageSquare className="w-3.5 h-3.5" />
                      {cp.contact}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:col-span-7 w-full"
          >
            <FaqAccordion items={FAQ_DATA} />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
