import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { COMPETITIONS_DATA, CompetitionDetailPage } from "@/features/competitions";

export async function generateStaticParams() {
  return COMPETITIONS_DATA.map((comp) => ({
    id: comp.id,
  }));
}

interface CompetitionPageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: CompetitionPageProps): Promise<Metadata> {
  const { id } = await params;
  const competition = COMPETITIONS_DATA.find((c) => c.id === id);

  if (!competition) {
    return {
      title: "Competition Not Found",
    };
  }

  const title = `${competition.shortTitle} — ${competition.title}`;
  const description = `${competition.description} Theme: "${competition.themeHeadline}". Organized by GEOSPHERE ITS 2026.`;

  return {
    title,
    description,
    keywords: [
      competition.shortTitle,
      competition.title,
      competition.category,
      competition.tag,
      "GEOSPHERE 2026",
      "Teknik Geofisika ITS",
      "ITS Surabaya",
    ],
    openGraph: {
      title: `${title} | GEOSPHERE ITS 2026`,
      description,
      url: `https://geosphere.its.ac.id/competitions/${competition.id}`,
      siteName: "GEOSPHERE ITS 2026",
      images: [
        {
          url: competition.logo,
          width: 600,
          height: 600,
          alt: `${competition.shortTitle} Logo`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | GEOSPHERE ITS 2026`,
      description,
      images: [competition.logo],
    },
  };
}

export default async function CompetitionPage({ params }: CompetitionPageProps) {
  const { id } = await params;
  const competition = COMPETITIONS_DATA.find((c) => c.id === id);

  if (!competition) {
    notFound();
  }

  return <CompetitionDetailPage competition={competition} />;
}
