import Hero from "../components/hero";
import Footer from "../components/footer";
import Content from "./content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Yelocode Systems | Pricing & Plans for Tech Training in Port Harcourt",
    template: "%s | Yelocode Systems",
  },

  description:
    "Affordable pricing plans for tech training at Yelocode Systems in Port Harcourt. Choose from NOVA PRIME (₦120k-₦250k), AXIS IGNITE (₦250k-₦550k), or QUANTA ELITE (₦850k-₦900k). Flexible payment options available at No. 11 Elekahia.",

  keywords: [
    "Yelocode Systems",
    "tech training prices Port Harcourt",
    "coding bootcamp cost Nigeria",
    "programming course fees",
    "NOVA PRIME pricing",
    "AXIS IGNITE cost",
    "QUANTA ELITE fees",
    "Port Harcourt",
    "No. 11 Elekahia"
  ],

  authors: [{ name: "Yelocode Systems", url: "https://yelocodesys.com/about" }],
  creator: "Yelocode Systems",
  publisher: "Yelocode Systems",

  metadataBase: new URL("https://yelocodesys.com"),

  openGraph: {
    title: "Yelocode Systems | Affordable Tech Training Pricing in Port Harcourt",
    description:
      "Explore flexible pricing plans for tech training at Yelocode Systems. NOVA PRIME: ₦120k-₦250k, AXIS IGNITE: ₦250k-₦550k, QUANTA ELITE: ₦850k-₦900k. Payment plans available. Located at No. 11 Elekahia, Port Harcourt.",
    url: "https://yelocodesys.com/careers",
    siteName: "Yelocode Systems",
    images: [
      {
        url: "/og-pricing.png",
        width: 1200,
        height: 630,
        alt: "Yelocode Systems - Affordable Tech Training Pricing in Port Harcourt",
      },
    ],
    locale: "en_NG",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Yelocode Systems | Pricing",
    description:
      "Affordable tech training in Port Harcourt. NOVA PRIME: ₦120k-₦250k, AXIS IGNITE: ₦250k-₦550k, QUANTA ELITE: ₦850k-₦900k. Flexible payment plans available.",
    images: ["/twitter-pricing.png"],
    site: "@yelocode",
    creator: "@yelocode",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },

  manifest: "/site.webmanifest",

  alternates: {
    canonical: "https://yelocodesys.com/careers",
  },
}

export default function Home() {
  return (
    <main>
      {/* <Hero /> */}
      <Content />
      <Footer />
    </main>
  );
}
