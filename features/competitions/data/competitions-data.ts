import { Competition } from "../types/competition";

export const COMPETITIONS_DATA: Competition[] = [
  {
    id: "gcsc",
    number: "01",
    title: "Geothermal Case Study Competition",
    shortTitle: "GCSC",
    category: "Geothermal Exploration",
    depth: "Undergraduate Level",
    description:
      "Kompetisi berbasis studi kasus yang berfokus pada eksplorasi bawah permukaan dan evaluasi sumber daya panas bumi",
    tag: "Case Study",
    prizePool: "IDR 6.500.000",
    badgeText: "Flagship",
    bgImage: "/images/card-bg-gcsc.png",
    logo: "/images/competition/icon-gcsc.png",
    themeHeadline: "Unlocking Subsurface Geothermal Potential to Accelerate Sustainable Energy Development",
    accentColor: "#E6C875",
    glowColor: "rgba(230, 200, 117, 0.15)",
    heroSubtitle: "Subsurface Reservoir Characterization & De-risking Challenge",
    subterraneanTitle: "Integrated Geothermal System Modeling & Prospect Evaluation",
    subterraneanDescription:
      " yang mensimulasikan alur kerja industri. Peserta ditantang mengintegrasikan data geologi, geofisika, geokimia, dan reservoir untuk menyusun model bawah permukaan serta strategi pengembangan panas bumi ",
    parameters: [
      { label: "Scope", value: "Undergraduate Students", detail: "Active University Students across Indonesia & Global" },
      { label: "Stages", value: "2 Stages", detail: "Online Preliminary & Onsite Final at ITS Surabaya" },
      { label: "Deliverables", value: "Abstract, Paper & PPT", detail: "40-min Presentation (15-min pitch, 20-min Q&A)" },
      { label: "Team Size", value: "3 Members", detail: "1 Team Leader + 2 Members from same institution" }
    ],
    subThemes: [
      { title: "Subsurface De-risking & Interpretation", desc: "Integrating MT, gravity, heat flow logs, and geochemistry to delineate drillable targets." },
      { title: "Conceptual Geothermal Reservoir Modeling", desc: "Mapping clay cap structures, faults, permeability zones, and heat source architecture." },
      { title: "Development Strategy & Risk Assessment", desc: "Translating subsurface models into actionable capacity estimates and drilling site recommendations." }
    ],
    timeline: [
      { phase: "Batch 1 Reg.", title: "Early Bird Registration", date: "02 July – 18 August 2026", description: "Rp. 125.000/team" },
      { phase: "Batch 2 Reg.", title: "Normal Registration", date: "19 July – 19 August 2026", description: "Rp. 150.000/team" },
      { phase: "Batch 3 Reg.", title: "Extended Registration", date: "20 August – 28 August 2026", description: "Rp. 200.000/team" },
      { phase: "Stage 02", title: "Case Data Release", date: "01 September 2026", description: "Geothermal case dataset distributed to team leader email." },
      { phase: "Stage 03", title: "Abstract Submission", date: "21 September 2026", description: "Initial subsurface interpretation framework upload." },
      { phase: "Stage 04", title: "Finalist Announcement", date: "01 October 2026", description: "Top 6 teams selected for Final Stage. Finalist fee : Rp. 500.000/team" },
      { phase: "Stage 05", title: "Full Paper & PPT Upload", date: "15 October 2026", description: "Complete technical report and presentation submission." },
      { phase: "Final Stage", title: "Onsite Final Presentation", date: "17 October 2026", description: "Pelaksanaan offline." }
    ],
    eligibility: [
      "Active undergraduate students enrolled in a university or equivalent higher education institution.",
      "Teams consist of maximum 3 members (1 Team Leader + 2 Members) from the same institution.",
      "Top 6 finalist teams must present onsite at ITS Surabaya in formal attire."
    ],
    guidebookUrl: "/docs/GCSC.pdf",
    registrationUrl: "https://its.id/m/REGISTRATIONGCSC2026"
  },
  {
    id: "geoepic",
    number: "02",
    title: "GEOEPIG",
    shortTitle: "GEOEPIG",
    category: "Exclusive Event",
    depth: "National Level (Undergraduate)",
    description:
      "Closing Event and Gala Dinner For Finalists of Geosphere 2026",
    tag: "Essay & Innovation",
    prizePool: "Exclusive for Finalist",
    badgeText: "",
    bgImage: "/images/card-bg-geoepic.png",
    logo: "/images/competition/icon-geoepic.png",
    themeHeadline: "Veni, vidi, vici",
    accentColor: "#E6C875",
    glowColor: "rgba(230, 200, 117, 0.15)",
    heroSubtitle: "Closing Ceremony",
    subterraneanTitle: "Strategic Conceptual Blueprint & Geoscience Innovation Defense",
    subterraneanDescription:
      "Sebagai puncak rangkaian Geosphere 2026, Closing Ceremony menjadi momen eksklusif bagi para finalis untuk merayakan perjalanan mereka sekaligus menerima apresiasi atas dedikasi dan pencapaian yang telah diraih. Acara ini juga menjadi ajang penganugerahan bagi finalis yang berhasil menunjukkan performa terbaik di bidang ilmu kebumian.",
    parameters: [
      { label: "Peserta", value: "Mahasiswa S1 / D4", detail: "Tim 2-3 orang per kampus" },
      { label: "Format", value: "Essay & Presentation", detail: "Gagasan konseptual & presentasi final" },
      { label: "Topik", value: "Energy & Disaster", detail: "Eksplorasi, Mitigasi, & Energi Berkelanjutan" },
      { label: "Hadiah", value: "Rp 3.500.000 + Trophy", detail: "Sertifikat & Awarding Gala" }
    ],
    subThemes: [
      { title: "Perancangan Jalur Transisi Energi", desc: "Strategi pengelolaan sumber daya optimal dan teknologi energi berkelanjutan." },
      { title: "Inovasi Sistem Energi Kebumian", desc: "Riset dan pengembangan solusi teknologi geosains ramah lingkungan." },
      { title: "Penguatan Ketahanan Energi Masa Depan", desc: "Kolaborasi akademis dan industri dalam membangun sistem energi adaptif." }
    ],
    timeline: [
      { phase: "", title: "Opening", date: "", description: "" },
      { phase: "", title: "Awarding", date: "", description: "" },
      { phase: "", title: "Gala Dinner and Show", date: "", description: "" },
      { phase: "", title: "Closing", date: "", description: "" },
    ],
    eligibility: [
      "Mahasiswa aktif jenjang S1/D4 dari perguruan tinggi di seluruh Indonesia.",
      "Tim terdiri dari 2 hingga 3 anggota.",
      "Karya esai harus asli, orisinal, dan belum pernah dipublikasikan."
    ],
    guidebookUrl: "",
    registrationUrl: ""
  },
  {
    id: "geoleague",
    number: "03",
    title: "National High School Earth Science & Physics Olympiad",
    shortTitle: "GEOLEAGUE",
    category: "Olympiad & Smart Quiz",
    depth: "National Level (High School)",
    description:
      "Kompetisi individu tingkat nasional untuk siswa/i SMA/sederajat yang menguji pengetahuan dan analisis di bidang Kebumian, Fisika, dan Geofisika Dasar.",
    tag: "National Olympiad",
    prizePool: "Rp 4.500.000 + FREE PASS ITS",
    badgeText: "High School Olympiad",
    bgImage: "/images/card-bg-geoleague.png",
    logo: "/images/competition/icon-geoleague.png",
    themeHeadline: "Shaping Pathways for a Sustainable Energy Transition and Resilient Future",
    accentColor: "#E6C875",
    glowColor: "rgba(230, 200, 117, 0.15)",
    heroSubtitle: "Kompetisi Kebumian & Geofisika Tingkat SMA/Sederajat Nasional",
    subterraneanTitle: "Individual Knowledge & Analytical Earth Science Competition",
    subterraneanDescription:
      "GeoLeague mengajak siswa/i SMA/sederajat se-Indonesia untuk berpikir kritis dan aplikatif terhadap isu-isu kebumian melalui babak CBT Online, GeoMind Viva & Poster Semifinal, serta Babak Final Cerdas Cermat GeoBuzz di Kampus ITS Surabaya.",
    parameters: [
      { label: "Peserta", value: "Siswa SMA/Sederajat", detail: "Individu se-Indonesia" },
      { label: "Format", value: "Multi-Stage Competition", detail: "CBT Online, GeoMind & GeoPoster, GeoBuzz Offline" },
      { label: "Topik", value: "Geosains & Fisika", detail: "Kebumian, Fisika, & Geofisika Dasar" },
      { label: "Hadiah", value: "Rp 4.500.000 + Trophy", detail: "Termasuk FREE PASS Teknik Geofisika ITS" }
    ],
    subThemes: [
      { title: "Kebumian & Geologi Dasar", desc: "Konsep struktur bumi, batuan, tektonik lempeng, dan sistem energi kebumian." },
      { title: "Fisika Kebumian", desc: "Penerapan hukum-hukum fisika mekanika, gelombang, dan termodinamika pada fenomena bumi." },
      { title: "Geofisika & Isu Energi Terbarukan", desc: "Analisis dasar eksplorasi kebumian dan transisi energi menuju masa depan yang tangguh." }
    ],
    timeline: [
      { phase: "Batch 1 Reg.", title: "Early Bird Registration", date: "10 Juni – 12 Juli 2026", description: "Rp65.000/orang." },
      { phase: "Batch 2 Reg.", title: "Regular Registration", date: "13 Juli – 23 Agustus 2026", description: "Rp70.000/orang." },
      { phase: "Batch 3 Reg.", title: "Late Registration", date: "24 Agustus – 25 September 2026", description: "Rp75.000/orang." },
      { phase: "Pre-Event", title: "TM Pre-Eliminary Round", date: "26 September 2026", description: "19.00 WIB" },
      { phase: "Stage 01", title: "Preliminary CBT Round", date: "27 September 2026", description: "Seleksi online 100 soal pilihan ganda (120 menit)." },
      { phase: "Stage 02", title: "Semifinal GeoMind & Poster", date: "04 Oktober 2026", description: "Sesi tanya jawab Viva Online & pengumpulan poster ilmiah." },
      { phase: "Final Stage", title: "Offline Grand Final at ITS", date: "17 Oktober 2026", description: "GeoPuzzle, GeoBuzz Cerdas Cermat & Presentasi Final di ITS Surabaya." }
    ],
    eligibility: [
      "Siswa/i aktif tingkat SMA/MA/SMK/Sederajat di seluruh Indonesia (dibuktikan dengan kartu pelajar).",
      "Pendaftaran bersifat individu (bukan kelompok).",
      "Peserta wajib melengkapi berkas pendaftaran dan menyelesaikan biaya registrasi."
    ],
    guidebookUrl: "/docs/guidebook-geoleague.pdf",
    registrationUrl: " https://its.id/m/registrasi_geoleague2026"
  },
  {
    id: "geopaper",
    number: "04",
    title: "National Paper & Poster Competition",
    shortTitle: "GEOPAPER",
    category: "Scientific Paper & Innovation",
    depth: "National Level (Undergraduate)",
    description:
      "Kompetisi karya tulis ilmiah dan poster tingkat nasional untuk mahasiswa S1/D4 dalam merumuskan inovasi keberlanjutan sektor energi dan migas.",
    tag: "Paper & Poster",
    prizePool: "Rp 6.500.000 + Trophy",
    badgeText: "Paper Contest",
    bgImage: "/images/card-bg-geopaper.png",
    logo: "/images/competition/icon-geopaper.png",
    themeHeadline: "Advancing Sustainable Innovation in the Oil and Gas Industry Toward an Integrated Energy Future",
    accentColor: "#E6C875",
    glowColor: "rgba(230, 200, 117, 0.15)",
    heroSubtitle: "Kompetisi Karya Tulis Ilmiah & Poster Mahasiswa Nasional",
    subterraneanTitle: "Scientific Energy Innovation & Sustainable Subsurface Defense",
    subterraneanDescription:
      "GeoPaper menjadi katalis gagasan riset orisinal mahasiswa tingkat nasional dalam menghadapi tantangan industri migas melalui efisiensi energi, teknologi CCUS, integrasi energi terbarukan, dan penerapan prinsip ESG.",
    parameters: [
      { label: "Peserta", value: "Mahasiswa S1 / D4", detail: "Tim 2-3 orang per kampus" },
      { label: "Format", value: "Abstract & Full Paper", detail: "Abstrak, Full Paper, & Defense Offline" },
      { label: "Topik", value: "Migas & Transisi Energi", detail: "Dekarbonisasi, CCUS, & ESG" },
      { label: "Hadiah", value: "Rp 6.500.000 + Trophy", detail: "Sertifikat & Awarding Gala" }
    ],
    subThemes: [
      { title: "Decarbonization & Technological Innovation", desc: "Mendorong efisiensi energi dan reduksi emisi karbon melalui kemajuan teknologi di industri migas." },
      { title: "Carbon Capture, Utilization, & Storage (CCUS)", desc: "Pemanfaatan dan penyimpanan karbon sebagai strategi kunci mitigasi jejak karbon kebumian." },
      { title: "Renewable Integration & ESG Principles", desc: "Sinergi infrastruktur konvensional migas dengan energi terbarukan serta standar tata kelola ESG." }
    ],
    timeline: [
      { phase: "Batch 1 Reg.", title: "Early Bird Registration", date: "02 Juli – 18 Juli 2026", description: "Rp35.000/karya." },
      { phase: "Batch 2 Reg.", title: "Normal Registration", date: "19 Juli – 19 Agustus 2026", description: "Rp50.000/karya." },
      { phase: "Batch 3 Reg.", title: "Extended Registration", date: "20 Agustus – 28 Agustus 2026", description: "Rp65.000/karya." },
      { phase: "Stage 01", title: "Essay Submission", date: "28 Agustus – 06 September 2026", description: "Pengumpulan naskah esai dan berkas inovasi." },
      { phase: "Stage 02", title: "Finalist Announcement", date: "17 September 2026", description: "Pengumuman tim finalis yang lolos ke tahap akhir." },
      { phase: "Final Stage", title: "Offline Grand Final Presentation", date: "17 Oktober 2026", description: "Presentasi dan pengujian Offline. Additional Fee Rp.350.000/orang" }
    ],
    eligibility: [
      "Mahasiswa aktif jenjang S1/D4 dari perguruan tinggi di seluruh Indonesia.",
      "Tim terdiri dari 2 hingga 3 anggota dari perguruan tinggi yang sama (boleh beda jurusan).",
      "Karya merupakan hasil penelitian orisinal dan belum pernah dipublikasikan di kompetisi lain."
    ],
    guidebookUrl: "/docs/guidebook-geopaper.pdf",
    registrationUrl: "https://its.id/m/registration_geopaper2026"
  },
  {
    id: "gtalk",
    number: "05",
    title: "Geosphere Talk & National Hybrid Seminar",
    shortTitle: "GTALK",
    category: "Hybrid Talkshow & Seminar",
    depth: "Public & Academic",
    description:
      "Forum diskusi nasional yang menghadirkan praktisi industri energi, akademisi, dan mahasiswa untuk membahas peran strategis geofisika.",
    tag: "National Seminar",
    prizePool: "FREE – Rp 40.000",
    badgeText: "National Seminar",
    bgImage: "/images/card-bg-gtalk.png",
    logo: "/images/competition/icon-gtalk.png",
    themeHeadline: "Energy Transition & Disaster Resilience: Shaping Future Energy Ecosystems",
    accentColor: "#E6C875",
    glowColor: "rgba(230, 200, 117, 0.15)",
    heroSubtitle: "Seminar & Talkshow Hybrid Kebumian Nasional",
    subterraneanTitle: "Energy Transition Outlook & Disaster Resilience Insights",
    subterraneanDescription:
      "G-Talk menghubungkan pakar energi, profesional migas, peneliti panas bumi, dan mahasiswa dalam mengurai posisi Oil & Gas serta potensi geothermal di era transisi energi global.",
    parameters: [
      { label: "Peserta", value: "Umum & Mahasiswa", detail: "Hybrid (Online Zoom & Offline ITS)" },
      { label: "Format", value: "Keynote & Panel Discussion", detail: "2 Serial Show Talkshow Interaktif" },
      { label: "Paket", value: "Free / General / Premium", detail: "Fasilitas E-Cert / Hard Cert & Slide" },
      { label: "Output", value: "Knowledge & Career Roadmap", detail: "Sertifikat Terakreditasi ITS" }
    ],
    subThemes: [
      { title: "Show 1: Oil & Gas in the Age of Sustainable Energy", desc: "" },
      { title: "Show 2: Unlocking Subsurface Geothermal Potential", desc: "" }
    ],
    timeline: [
      { phase: "Registration", title: "Participant Registration", date: "27 Juni – 12 September 2026", description: "Pendaftaran gelombang online (G-Form)." },
      { phase: "Show 01", title: "GTalk Show 1 Event", date: "29 Agustus 2026", description: "Pelaksanaan Hybrid Show 1 (Oil & Gas in Sustainable Era)." },
      { phase: "Show 02", title: "GTalk Show 2 Event", date: "19 September 2026", description: "Pelaksanaan Hybrid Show 2 (Geothermal Energy Potential)." }
    ],
    eligibility: [
      "Terbuka untuk umum, mahasiswa seluruh jurusan, pelajar SMA/Sederajat, dan profesional.",
      "Pendaftaran bersifat individu melalui form resmi."
    ],
    guidebookUrl: "",
    registrationUrl: ""
  }
];
