import { CompetitionTimelineStep } from "../types/competition";

export const MONTH_MAP: Record<string, number> = {
  januari: 0, january: 0, jan: 0,
  februari: 1, february: 1, feb: 1,
  maret: 2, march: 2, mar: 2,
  april: 3, apr: 3,
  mei: 4, may: 4,
  juni: 5, june: 5, jun: 5,
  juli: 6, july: 6, jul: 6,
  agustus: 7, august: 7, aug: 7,
  september: 8, sep: 8, sept: 8,
  oktober: 9, october: 9, oct: 9,
  november: 10, nov: 10,
  desember: 11, december: 11, dec: 11,
};

export function parseStepDates(stepDateStr: string): { start: Date; end: Date } {
  const normalized = stepDateStr.replace(/[–—]/g, "-").trim();
  const yearMatch = normalized.match(/\d{4}/);
  const year = yearMatch ? parseInt(yearMatch[0], 10) : 2026;

  if (normalized.includes("-")) {
    const parts = normalized.split("-").map((s) => s.trim());
    const endMatch = parts[1].match(/(\d{1,2})\s+([A-Za-z]+)/);
    const startMatch = parts[0].match(/(\d{1,2})\s+([A-Za-z]+)/);

    let endMonth = 11;
    let endDay = 31;
    if (endMatch && MONTH_MAP[endMatch[2].toLowerCase()] !== undefined) {
      endDay = parseInt(endMatch[1], 10);
      endMonth = MONTH_MAP[endMatch[2].toLowerCase()];
    }

    let startMonth = endMonth;
    let startDay = 1;
    if (startMatch && MONTH_MAP[startMatch[2].toLowerCase()] !== undefined) {
      startDay = parseInt(startMatch[1], 10);
      startMonth = MONTH_MAP[startMatch[2].toLowerCase()];
    } else {
      const dayOnlyMatch = parts[0].match(/\d{1,2}/);
      if (dayOnlyMatch) {
        startDay = parseInt(dayOnlyMatch[0], 10);
      }
    }

    return {
      start: new Date(year, startMonth, startDay, 0, 0, 0),
      end: new Date(year, endMonth, endDay, 23, 59, 59),
    };
  }

  const match = normalized.match(/([A-Za-z]+)\s+(\d{1,2})|(\d{1,2})\s+([A-Za-z]+)/);
  if (match) {
    const day = parseInt(match[2] || match[3], 10);
    const monthStr = match[1] || match[4];
    const month = MONTH_MAP[monthStr.toLowerCase()] ?? 0;
    return {
      start: new Date(year, month, day, 0, 0, 0),
      end: new Date(year, month, day, 23, 59, 59),
    };
  }

  return {
    start: new Date(year, 0, 1, 0, 0, 0),
    end: new Date(year, 11, 31, 23, 59, 59),
  };
}

export function calculateTimelineStatuses(steps: CompetitionTimelineStep[]): ("completed" | "current" | "upcoming")[] {
  const now = new Date();
  const parsed = steps.map((s) => parseStepDates(s.date));

  let currentIndex = parsed.findIndex((p) => now <= p.end);
  if (currentIndex === -1) {
    currentIndex = steps.length - 1;
  }

  return steps.map((_, idx) => {
    if (idx < currentIndex) return "completed";
    if (idx === currentIndex) return "current";
    return "upcoming";
  });
}
