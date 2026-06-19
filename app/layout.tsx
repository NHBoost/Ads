import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const SITE_URL = "https://nhboost.agency";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title:
    "NHBoost Agency — Plus de clients, plus de chiffre d'affaires grâce à un système d'acquisition clé en main",
  description:
    "NHBoost vous génère plus de demandes qualifiées, plus de rendez-vous, plus de clients et plus de chiffre d'affaires. Stratégie, publicités, contenus, campagnes et optimisation : on s'occupe de tout pour vous.",
  keywords: [
    "acquisition client",
    "génération de leads",
    "agence marketing",
    "publicité Google Ads",
    "Meta Ads",
    "campagne publicitaire",
    "NHBoost",
  ],
  openGraph: {
    title: "NHBoost Agency — Système d'acquisition client clé en main",
    description:
      "Multipliez votre chiffre d'affaires avec un système qui ramène des clients tous les jours.",
    url: SITE_URL,
    siteName: "NHBoost Agency",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NHBoost Agency",
    description:
      "Plus de demandes qualifiées, plus de rendez-vous, plus de clients.",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: SITE_URL },
};

export const viewport: Viewport = {
  themeColor: "#2A2E5E",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
