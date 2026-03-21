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
    "Affordable pricing plans for tech training at Yelocode Systems in Port Harcourt. Choose from NOVA PRIME (₦120k-₦420k), AXIS IGNITE (₦250k-₦1.4M), or QUANTA ELITE (₦850k-₦1.5M). Flexible payment options available at No. 11 Elekahia.",

  keywords: [
    // Brand
    "Yelocode Systems",
    "yelocodesys.com",
    
    // Pricing specific
    "tech training prices Port Harcourt",
    "coding bootcamp cost Nigeria",
    "programming course fees",
    "affordable tech training",
    "payment plans for coding bootcamp",
    "NOVA PRIME pricing",
    "AXIS IGNITE cost",
    "QUANTA ELITE fees",
    "software development course price",
    "data science training cost",
    "cybersecurity certification fees",
    "UI UX design course price",
    "Python training cost Nigeria",
    "digital marketing course fees",
    
    // Value
    "best value tech training",
    "affordable coding bootcamp Port Harcourt",
    "flexible payment options",
    "tech education investment",
    "scholarship opportunities",
    
    // Location
    "Port Harcourt",
    "No. 11 Elekahia",
    "Rivers State",
    "Nigeria",
  ],

  authors: [{ name: "Yelocode Systems", url: "https://yelocodesys.com/about" }],
  creator: "Yelocode Systems",
  publisher: "Yelocode Systems",

  metadataBase: new URL("https://yelocodesys.com"),

  openGraph: {
    title: "Yelocode Systems | Affordable Tech Training Pricing in Port Harcourt",
    description:
      "Explore flexible pricing plans for tech training at Yelocode Systems. NOVA PRIME: ₦120k-₦420k, AXIS IGNITE: ₦250k-₦1.4M, QUANTA ELITE: ₦850k-₦1.5M. Payment plans available. Located at No. 11 Elekahia, Port Harcourt.",
    url: "https://yelocodesys.com/pricing",
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
    phoneNumbers: ["+2349162865693"],
    countryName: "Nigeria",
  },

  twitter: {
    card: "summary_large_image",
    title: "Yelocode Systems | Pricing",
    description:
      "Affordable tech training in Port Harcourt. NOVA PRIME: ₦120k-₦420k, AXIS IGNITE: ₦250k-₦1.4M, QUANTA ELITE: ₦850k-₦1.5M. Flexible payment plans available.",
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
    canonical: "https://yelocodesys.com/pricing",
  },

  // Structured data for pricing information
  other: {
    "og:type": "product",
    "og:availability": "instock",
    "product:price:amount": "120000",
    "product:price:currency": "NGN",
    "business:contact_data:street_address": "No. 11 Elekahia",
    "business:contact_data:locality": "Port Harcourt",
    "business:contact_data:region": "Rivers State",
    "business:contact_data:country_name": "Nigeria",
    "business:contact_data:phone_number": "+2349162865693",
  },
}
export default function Home() {
  return (
    <main>
      <Content />
      <Footer />
     
    </main>
  );
}
