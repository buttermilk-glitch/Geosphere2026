export type SponsorTier = "titanium" | "gold" | "silver" | "media";

export interface Sponsor {
  id: string;
  name: string;
  tier: SponsorTier;
  category: string;
  logo: string;
  website?: string;
}
