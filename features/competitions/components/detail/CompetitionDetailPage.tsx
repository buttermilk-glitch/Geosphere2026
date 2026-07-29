"use client";

import { NavigationMenu } from "@/features/hero";
import { FooterSection } from "@/features/footer";
import { Competition } from "../../types/competition";
import { CompetitionHeroScene } from "./CompetitionHeroScene";
import { CompetitionOverviewSection } from "./CompetitionOverviewSection";
import { CompetitionTimeline } from "./CompetitionTimeline";
import { CompetitionMemoriesSection } from "./CompetitionMemoriesSection";
import { CompetitionCtaSection } from "./CompetitionCtaSection";

interface CompetitionDetailPageProps {
  competition: Competition;
}

export function CompetitionDetailPage({ competition }: CompetitionDetailPageProps) {
  return (
    <main className="min-h-screen bg-[#090604] text-[#FDFBF7] selection:bg-[#E6C875] selection:text-black relative">
      <NavigationMenu startAnimation={true} />
      <CompetitionHeroScene competition={competition} />
      <CompetitionOverviewSection competition={competition} />
      <CompetitionTimeline competition={competition} />
      <CompetitionMemoriesSection />
      <CompetitionCtaSection competition={competition} />
      <FooterSection />
    </main>
  );
}
