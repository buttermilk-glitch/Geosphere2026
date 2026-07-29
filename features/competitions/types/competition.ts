export interface CompetitionParameter {
  label: string;
  value: string;
  detail: string;
}

export interface CompetitionTimelineStep {
  phase: string;
  title: string;
  date: string;
  description: string;
}

export interface CompetitionSubTheme {
  title: string;
  desc: string;
}

export interface Competition {
  id: string;
  number: string;
  title: string;
  shortTitle: string;
  category: string;
  depth: string;
  description: string;
  tag: string;
  prizePool?: string;
  badgeText: string;
  bgImage: string;
  logo: string;
  themeHeadline: string;
  accentColor: string;
  glowColor: string;
  heroSubtitle: string;
  subterraneanTitle: string;
  subterraneanDescription: string;
  parameters: CompetitionParameter[];
  timeline: CompetitionTimelineStep[];
  subThemes: CompetitionSubTheme[];
  eligibility: string[];
  guidebookUrl: string;
  registrationUrl: string;
}

