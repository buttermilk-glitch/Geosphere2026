import { FaqItem, ContactPerson } from "../types/faq";

export const FAQ_DATA: FaqItem[] = [
  {
    id: "eligibility",
    category: "general",
    question: "apakah perserta yang sudah mendaftar pada salah satu lomba GEOSPHERE ITS 2026 boleh mengikuti lomba lainnya yang di selenggarakan oleh GEOSPHERE 2026?",
    answer: "Peserta hanya di perbolehkan mengikuti satu lomba saja, tidak bisa mengikuti dua lomba sekaligus.",
  },
  {
    id: "team-composition",
    category: "registration",
    question: "apakah anggota tim bisa berasal dari jurusan atau institusi yang berbeda?",
    answer: "Anggota tim harus berasal dari institusi yang sama untuk sebagian besar sub-competitions. Namun, anggota tim yang memiliki keahlian lintas disiplin dari fakultas yang berbeda dalam satu universitas sangatlah dianjurkan.",
  },
  {
    id: "sub-competitions",
    category: "competition",
    question: "Sub-Kompetisi apa saja yang ada di GEOSPHERE ITS 2026?",
    answer: "Terdapat 3 sub-kompetisi, yaitu Geothermal Case Study Competition (GCSC), Geolague, dan Geopaper. Selain itu, terdapat event seminar yang dapat diikuti (GTALK)",
  },
  {
    id: "guidebook-download",
    category: "general",
    question: "Dimana kita bisa mengakses guidebook resmi dan template karya?",
    answer: "Guidebook acara resmi dan template sub-kompetisi dapat diunduh langsung dari portal resmi Geosphere ITS 2026.",
  },
  {
    id: "submission-format",
    category: "submission",
    question: "Apakah kita bisa mengganti anggota tim setelah pendaftaran?",
    answer: "Tidak, anggota tim tidak diperbolehkan untuk mengganti anggota nya setelah melakukan pendaftaran, sebaiknya pergantian anggota dilakukan sebelum pendaftaran.",
  },

];

export const CONTACT_PERSONS: ContactPerson[] = [
  {
    name: "Fauzan",
    role: "",
    contact: "+62 852-1606-0002",
    whatsappUrl: "https://wa.me/6285216060002",
  },
  {
    name: "Fikar",
    role: "",
    contact: "+62 812-9175-0013",
    whatsappUrl: "https://wa.me/6281291750013",
  },
];
