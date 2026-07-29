import type { Metadata } from "next";
import { Geist, Geist_Mono, Marcellus } from "next/font/google";
import localFont from "next/font/local";
import { SmoothScrollProvider } from "@/components/providers/smooth-scroll";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const marcellus = Marcellus({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400"],
});

const glimmerOfLight = localFont({
  src: "../public/fonts/glimmer_of_light/glimmer of light.otf",
  variable: "--font-glimmer-of-light",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://geosphere.its.ac.id"),
  title: {
    default: "GEOSPHERE ITS 2026 — National & International Geophysics Competition",
    template: "%s | GEOSPHERE ITS 2026",
  },
  description:
    "Official portal of GEOSPHERE ITS 2026 organized by Geophysical Engineering ITS Surabaya. Host of GCSC, GEOEPIC, GEOLEAGUE, GEOPAPER, and GTALK.",
  keywords: [
    "GEOSPHERE 2026",
    "GEOSPHERE ITS",
    "Teknik Geofisika ITS",
    "ITS Surabaya",
    "Geophysics Competition",
    "Olimpiade Kebumian",
    "Case Study Competition",
    "International Paper Contest",
    "GCSC",
    "GEOEPIC",
    "GEOLEAGUE",
    "GEOPAPER",
    "GTALK",
  ],
  authors: [{ name: "GEOSPHERE ITS 2026 Committee" }],
  creator: "Teknik Geofisika ITS",
  publisher: "ITS Surabaya",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://geosphere.its.ac.id",
    siteName: "GEOSPHERE ITS 2026",
    title: "GEOSPHERE ITS 2026 — National & International Geophysics Competition",
    description:
      "Official portal of GEOSPHERE ITS 2026 organized by Geophysical Engineering ITS Surabaya. Host of GCSC, GEOEPIC, GEOLEAGUE, GEOPAPER, and GTALK.",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 800,
        alt: "GEOSPHERE ITS 2026 Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GEOSPHERE ITS 2026 — National & International Geophysics Competition",
    description:
      "Official portal of GEOSPHERE ITS 2026 organized by Geophysical Engineering ITS Surabaya. Host of GCSC, GEOEPIC, GEOLEAGUE, GEOPAPER, and GTALK.",
    images: ["/logo.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${marcellus.variable} ${glimmerOfLight.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-[#2C1E18] text-[#FDFBF7] font-sans selection:bg-[#D4AF37] selection:text-[#2C1E18]">
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
