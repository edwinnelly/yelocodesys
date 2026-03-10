import Hero from "../components/hero";
import Footer from "../components/footer";
import Content from "./content";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: {
    default: "Yelocode Systems | Software Development & Tech Solutions in Port Harcourt",
    template: "%s | Yelocode Systems",
  },

  description:
    "Yelocode Systems delivers custom software and technology solutions in Port Harcourt, Nigeria. Specializing in web development, mobile apps, cloud solutions, cybersecurity, and DevOps. Transform your business with expert consulting at No. 11 Elekahia.",

  keywords: [
    // Brand
    "Yelocode Systems",
    "yelocodesys.com",
    
    // Services
    "software development Port Harcourt",
    "web development Nigeria",
    "mobile app development",
    "cloud solutions",
    "cybersecurity services",
    "IT consulting Port Harcourt",
    "DevOps services",
    "custom software Nigeria",
    "data analytics",
    "enterprise software",
    "business automation",
    "API integration",
    
    // Location
    "tech company Port Harcourt",
    "software company Nigeria",
    "No. 11 Elekahia",
    "IT services Rivers State",
    
    // Business intent
    "digital transformation Nigeria",
    "software outsourcing",
    "cloud migration services",
    "business technology solutions",
  ],

  authors: [{ name: "Yelocode Systems", url: "https://yelocodesys.com/about" }],
  creator: "Yelocode Systems",
  publisher: "Yelocode Systems",

  metadataBase: new URL("https://yelocodesys.com"),

  openGraph: {
    title: "Yelocode Systems | Software Development & Tech Solutions",
    description:
      "Transform your business with Yelocode Systems' technology solutions. Custom web, mobile, cloud, and cybersecurity services in Port Harcourt, Nigeria.",
    url: "https://yelocodesys.com/solutions",
    siteName: "Yelocode Systems",
    images: [
      {
        url: "/og-solutions.png", // Use a descriptive name
        width: 1200,
        height: 630,
        alt: "Yelocode Systems - Software Development & Tech Solutions in Port Harcourt",
      },
    ],
    locale: "en_NG",
    type: "website",
    // Add these for richer sharing
    phoneNumbers: ["+2349162865693"],
    countryName: "Nigeria",
  },

  twitter: {
    card: "summary_large_image",
    title: "Yelocode Systems | Software & Tech Solutions",
    description:
      "Custom software, web, mobile, cloud, and cybersecurity solutions for businesses in Port Harcourt.",
    images: ["/twitter-solutions.png"], // Could use different image for Twitter
    site: "@yelocode", // If you have Twitter handle
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

  manifest: "/site.webmanifest", // If you have one

  alternates: {
    canonical: "https://yelocodesys.com/solutions",
  },

  // If you have multiple language versions
  // languages: {
  //   'en-NG': 'https://yelocodesys.com/solutions',
  // },
}

export default function Home() {
  return (
    <main>
      <Content />
      <Footer />
     
    </main>
  );
}
