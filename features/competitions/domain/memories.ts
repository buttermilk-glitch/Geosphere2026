export interface FloatingMemoryItem {
  id: string;
  title: string;
  year: string;
  image: string;
  side: "left" | "right";
  startRange: number;
  endRange: number;
  rotation: number;
}

export const COMPETITION_MEMORIES: FloatingMemoryItem[] = [
  {
    id: "mem-1",
    title: "Grand Final Jury Presentation",
    year: "2025",
    image: "/images/Grand final presentation Geoleague.JPG",
    side: "left",
    startRange: 0.05,
    endRange: 0.38,
    rotation: -4,
  },
  {
    id: "mem-2",
    title: "Champions Awarding Gala",
    year: "2025",
    image: "/images/Galdin_geoleague_new.JPG",
    side: "right",
    startRange: 0.22,
    endRange: 0.55,
    rotation: 5,
  },
  {
    id: "mem-3",
    title: "Subsurface Case Workshop",
    year: "2024",
    image: "/images/Subsur_Geoleague.JPG",
    side: "left",
    startRange: 0.40,
    endRange: 0.72,
    rotation: 3,
  },
  {
    id: "mem-4",
    title: "Field Exploration Demo",
    year: "2024",
    image: "/images/Demo_Geoleague.JPG",
    side: "right",
    startRange: 0.58,
    endRange: 0.88,
    rotation: -5,
  },
  {
    id: "mem-5",
    title: "Networking Gala Dinner",
    year: "2023",
    image: "/images/Networking_Galdin.JPG",
    side: "left",
    startRange: 0.72,
    endRange: 0.98,
    rotation: 4,
  },
];
