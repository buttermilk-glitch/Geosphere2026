export type FaqCategory = "general" | "registration" | "competition" | "submission";

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category?: FaqCategory;
}

export interface ContactPerson {
  name: string;
  role: string;
  contact: string;
  whatsappUrl?: string;
}
