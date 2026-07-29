"use client";

import { useEffect, useState } from "react";
import { SplashScreen } from "@/features/splash";
import { HeroSection, NavigationMenu } from "@/features/hero";
import { AboutSection } from "@/features/about";
import { CompetitionsSection } from "@/features/competitions";
import { SponsorsSection } from "@/features/sponsors/components/SponsorsSection";
import { FaqSection } from "@/features/faq";
import { FooterSection } from "@/features/footer";

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);
  const [isSplashFinished, setIsSplashFinished] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const hasSeen = sessionStorage.getItem("hasSeenSplashScreen");
    if (hasSeen) {
      setIsSplashFinished(true);
    }
  }, []);

  if (!isMounted) {
    return <main className="w-full min-h-screen bg-[#121212]" />;
  }

  return (
    <main className="w-full min-h-screen bg-black">
      <SplashScreen onComplete={() => setIsSplashFinished(true)} />
      <NavigationMenu startAnimation={isSplashFinished} />
      <HeroSection startAnimation={isSplashFinished} />
      <AboutSection />
      <CompetitionsSection />
      <SponsorsSection /> 
      <FaqSection />
      <FooterSection />
    </main>
  );
}
