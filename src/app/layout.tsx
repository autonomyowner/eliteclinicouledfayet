import type { Metadata } from "next";
import { Cinzel, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Analytics from "@/components/Analytics";
import { siteConfig } from "@/config/site";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cinzel",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});


export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} — Dental Clinic`,
    template: `%s — ${siteConfig.name}`,
  },
  description: "Cabinet dentaire d'exception à Alger. Soins de luxe dans un cadre raffiné : orthodontie invisible, implantologie avancée, esthétique dentaire premium.",
  metadataBase: new URL(siteConfig.baseUrl),
  alternates: { canonical: "/" },
  openGraph: {
    title: `${siteConfig.name} — Dental Clinic`,
    description:
      "Cabinet dentaire d'exception à Alger. Soins de luxe dans un cadre raffiné : orthodontie invisible, implantologie avancée, esthétique dentaire premium.",
    url: "/",
    siteName: siteConfig.name,
    type: "website",
    locale: "fr_FR",
    images: [
      {
        url: "/og-default.jpg",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — Dental Clinic`,
    description:
      "Cabinet dentaire d'exception à Alger. Soins de luxe dans un cadre raffiné : orthodontie invisible, implantologie avancée, esthétique dentaire premium.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cinzel.variable} ${cormorant.variable}`}>
      <body className="antialiased pt-20">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
