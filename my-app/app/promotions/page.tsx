// app/promo/page.tsx
import Hero from "../components/hero";
import Footer from "../components/footer";
import PromoContent from "./content";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Yelocode Systems | 27% OFF Flash Sale - Limited Time Tech Training Discount",
    template: "%s | Yelocode Systems",
  },

  description:
    "🚀 LIMITED TIME: Get 27% OFF all tech training programs at Yelocode Systems in Port Harcourt! Web Development, Data Science, Cybersecurity, UI/UX Design and more. Offer ends in 14 days. Enroll now at No. 11 Elekahia, Port Harcourt. Don't miss this huge discount!",

  keywords: [
    // Brand & Promo
    "Yelocode Systems",
    "yelocodesys.com",
    "27% off tech training",
    "coding bootcamp discount Nigeria",
    "flash sale programming courses",
    "limited time offer tech training",
    "tech training sale Port Harcourt",
    
    // Course-specific promo
    "NOVA PRIME discount",
    "AXIS IGNITE promo code",
    "QUANTA ELITE sale price",
    "software development course discount",
    "data science training offer",
    "cybersecurity certification promo",
    "UI UX design course sale",
    "Python training discount Nigeria",
    "digital marketing course offer",
    "mobile app development sale",
    "cloud computing training discount",
    "database management course promo",
    
    // Value-driven
    "best value tech training Port Harcourt",
    "affordable coding bootcamp Nigeria",
    "cheap programming courses",
    "tech education discount",
    "flexible payment plans",
    "scholarship opportunities",
    
    // Urgency
    "limited time offer",
    "flash sale coding bootcamp",
    "14 day discount",
    "early bird tech training",
    
    // Location
    "Port Harcourt",
    "No. 11 Elekahia",
    "Rivers State",
    "Nigeria",
  ],

  authors: [{ name: "Yelocode Systems", url: "https://yelocodesys.com/aboutus" }],
  creator: "Yelocode Systems",
  publisher: "Yelocode Systems",

  metadataBase: new URL("https://yelocodesys.com"),

  openGraph: {
    title: "Yelocode Systems | 🚀 27% OFF Flash Sale - Limited Time Only!",
    description:
      "🔥 LIMITED TIME OFFER: Save 27% on all tech training programs at Yelocode Systems! Web Development, Data Science, Cybersecurity, UI/UX Design and more. Offer expires in 14 days. Located at No. 11 Elekahia, Port Harcourt.",
    url: "https://yelocodesys.com/promotions",
    siteName: "Yelocode Systems",
    images: [
      {
        url: "/og-promo-27.png",
        width: 1200,
        height: 630,
        alt: "Yelocode Systems - 27% OFF Flash Sale - Limited Time Tech Training Discount",
      },
    ],
    locale: "en_NG",
    type: "website",
    phoneNumbers: ["+2349162865693"],
    countryName: "Nigeria",
    emails: ["info@yelocodesys.com"],
  },

  twitter: {
    card: "summary_large_image",
    title: "Yelocode Systems | 27% OFF Flash Sale! 🚀",
    description:
      "Save 27% on all tech training programs! Web Development, Data Science, Cybersecurity, UI/UX Design. Limited time offer - ends in 14 days. Enroll now!",
    images: ["/twitter-promo-27.png"],
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
    canonical: "https://yelocodesys.com/promotions",
  },

  // JSON-LD Structured Data will be injected via a separate component
};

export default function PromoPage() {
  return (
    <main>
      {/* <Hero /> */}
      <PromoContent />
      <Footer />
    </main>
  );
}