import Hero from "../components/hero";
import Footer from "../components/footer";
import Content from "./content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Yelocode Systems | Best Tech Company in Port Harcourt for IT Solutions & Training",
  description: "Yelocode Systems is Port Harcourt's leading technology partner offering innovative IT solutions, AI-powered development, and expert tech training. Join 376+ satisfied clients with 10+ years of excellence.",
  keywords: [
    "tech company Port Harcourt",
    "IT solutions Nigeria",
    "software development company",
    "tech training Port Harcourt",
    "AI solutions Nigeria",
    "Yelocode Systems",
    "best tech company in Port Harcourt",
    "IT consulting Nigeria",
    "web development Port Harcourt",
    "coding bootcamp Nigeria"
  ],
  authors: [{ name: "Yelocode Systems" }],
  creator: "Yelocode Systems",
  publisher: "Yelocode Systems",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Yelocode Systems | Best Tech Company in Port Harcourt for IT Solutions & Training",
    description: "Leading technology partner in Port Harcourt offering innovative IT solutions, AI-powered development, and expert tech training. 10+ years of excellence, 376+ satisfied clients.",
    url: "https://yelocode.com/aboutus",
    siteName: "Yelocode Systems",
    images: [
      {
        url: "https://yelocode.com/og-about.jpg",
        width: 1200,
        height: 630,
        alt: "Yelocode Systems - Leading Tech Company in Port Harcourt",
      },
    ],
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yelocode Systems | Best Tech Company in Port Harcourt",
    description: "Leading technology partner offering innovative IT solutions and expert tech training.",
    images: ["https://yelocode.com/twitter-about.jpg"],
    creator: "@yelocode",
    site: "@yelocode",
  },
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
  alternates: {
    canonical: "https://yelocode.com/about",
  },
  category: "technology",
};

export default function AboutPage() {
  return (
    <main>
      <Content />
      <Footer />
    </main>
  );
}