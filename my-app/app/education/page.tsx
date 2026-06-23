import Hero from "../components/hero";
import Footer from "../components/footer";
import Content from "./content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Best Tech School in Port Harcourt | Coding Bootcamp & IT Training | Yelocode Systems",
    template: "%s | Yelocode Systems",
  },

  description:
    "Yelocode Systems is the best tech school and IT training center in Port Harcourt, Nigeria. We offer coding bootcamps, software engineering, cybersecurity, data analytics, and UI/UX design training with job placement at No. 11 Elekahia. Start your tech career today.",

  keywords: [
    // Brand
    "Yelocode Systems",
    "yelocodesys.com",
    
    // High-Intent Enrollment Keywords
    "best tech school in port harcourt",
    "coding bootcamp port harcourt",
    "it training center in port harcourt",
    "computer training school in port harcourt",
    
    // High-Demand Skill Keywords
    "data analytics training in port harcourt",
    "ui ux design training port harcourt",
    "software engineering academy in port harcourt",
    "cybersecurity training in port harcourt",
    
    // Career & Value-Driven Keywords
    "tech training in port harcourt with job placement",
    "affordable computer training centers in ph",
    
    // Education/Training
    "tech training Nigeria",
    "programming school Port Harcourt",
    "software development course Nigeria",
    "data science training Port Harcourt",
    "cybersecurity certification Nigeria",
    "Python programming Nigeria",
    "digital marketing training",
    "web development bootcamp",
    "DevOps training Nigeria",
    "cloud computing course",
    
    // Location
    "tech school Port Harcourt",
    "coding classes Rivers State",
    "IT training Nigeria",
    "No. 11 Elekahia",
    "learn to code Port Harcourt",
    
    // Student intent
    "become a programmer Nigeria",
    "tech career change",
    "learn software development",
    "coding for beginners",
    "IT certification Port Harcourt",
    "job-ready tech skills",
    "free coding training in port harcourt nigeria",
    "top 10 tech schools in Port Harcourt",
    "top tech schools in Port Harcourt and their fees",
  ],

  authors: [{ name: "Yelocode Systems", url: "https://yelocodesys.com/about" }],
  creator: "Yelocode Systems",
  publisher: "Yelocode Systems",

  metadataBase: new URL("https://yelocodesys.com"),

  openGraph: {
    title: "Best Tech School in Port Harcourt | Coding Bootcamps & IT Training | Yelocode Systems",
    description:
      "Launch your tech career at the best tech school in Port Harcourt. We offer coding bootcamps, software engineering, cybersecurity, data analytics, and UI/UX design training with job placement. Learn from industry experts at No. 11 Elekahia.",
    url: "https://yelocodesys.com/education",
    siteName: "Yelocode Systems",
    images: [
      {
        url: "/og-education.png",
        width: 1200,
        height: 630,
        alt: "Yelocode Systems - Best tech school and IT training center in Port Harcourt, Nigeria",
      },
    ],
    locale: "en_NG",
    type: "website",
    phoneNumbers: ["+2349162865693"],
    countryName: "Nigeria",
  },

  twitter: {
    card: "summary_large_image",
    title: "Best Tech School in Port Harcourt | Yelocode Systems",
    description:
      "Join the best coding bootcamp in Port Harcourt. Software engineering, cybersecurity, data analytics, and UI/UX design training with job placement.",
    images: ["/twitter-education.png"],
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
    canonical: "https://yelocodesys.com/education",
  },

  // Structured data for educational organization
  other: {
    "og:education": "coding bootcamp, tech training, software engineering, cybersecurity, data analytics, ui ux design",
    "business:contact_data:street_address": "No. 11 Elekahia",
    "business:contact_data:locality": "Port Harcourt",
    "business:contact_data:region": "Rivers State",
    "business:contact_data:country_name": "Nigeria",
    "business:contact_data:phone_number": "+2349162865693",
    "business:contact_data:email": "info@yelocodesys.com",
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