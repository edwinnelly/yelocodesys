import Hero from "../components/hero";
import Footer from "../components/footer";
import Content from "./content";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: {
    default: "About Us | Best Tech School in Port Harcourt | Yelocode Systems",
    template: "%s | Yelocode Systems",
  },

  description:
    "Yelocode Systems is the best tech school and IT training center in Port Harcourt, Nigeria. We offer coding bootcamps, software engineering, cybersecurity, data analytics, and UI/UX design training with job placement at No. 11 Elekahia.",

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
    
    // About specific
    "about Yelocode",
    "tech company Port Harcourt",
    "Free coding training in port harcourt nigeria",
    "Top 10 tech schools in Port Harcourt",
    "Top tech schools in Port Harcourt and their fees",
    "tech instructors Nigeria",
    "software experts Rivers State",
    "coding mentors Port Harcourt",
    
    // Company info
    "technology training company Nigeria",
    "software development firm Port Harcourt",
    "IT solutions provider Rivers State",
    "tech education pioneers",
    "No. 11 Elekahia",
    "Port Harcourt tech hub",
    
    // Leadership
    "tech leadership Nigeria",
    "industry experts Port Harcourt",
    "certified instructors",
    "software engineering team",
    "data science mentors",
    "cybersecurity professionals",
    
    // Values
    "tech education mission",
    "bridging skills gap Nigeria",
    "empowering Nigerian youth",
    "career transformation",
    "tech community Port Harcourt",
  ],

  authors: [{ name: "Yelocode Systems", url: "https://yelocodesys.com/aboutus" }],
  creator: "Yelocode Systems",
  publisher: "Yelocode Systems",

  metadataBase: new URL("https://yelocodesys.com"),

  openGraph: {
    title: "About Yelocode Systems | Best Tech School & IT Training Center in Port Harcourt",
    description:
      "Discover the story behind Yelocode Systems, the best tech school in Port Harcourt. We offer coding bootcamps, software engineering, cybersecurity, data analytics, and UI/UX design training with job placement at No. 11 Elekahia.",
    url: "https://yelocodesys.com/aboutus",
    siteName: "Yelocode Systems",
    images: [
      {
        url: "/og-about.png",
        width: 1200,
        height: 630,
        alt: "Yelocode Systems - Best tech school and IT training center in Port Harcourt",
      },
    ],
    locale: "en_NG",
    type: "website",
    phoneNumbers: ["+2349162865693"],
    countryName: "Nigeria",
  },

  twitter: {
    card: "summary_large_image",
    title: "About Yelocode Systems | Best Tech School in Port Harcourt",
    description:
      "Meet the team behind Port Harcourt's best tech school and IT training center. Coding bootcamps, software engineering, cybersecurity, and more with job placement.",
    images: ["/twitter-about.png"],
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
    canonical: "https://yelocodesys.com/aboutus",
  },

  // Structured data for organization
  other: {
    "og:type": "company",
    "business:contact_data:street_address": "No. 11 Elekahia",
    "business:contact_data:locality": "Port Harcourt",
    "business:contact_data:region": "Rivers State",
    "business:contact_data:country_name": "Nigeria",
    "business:contact_data:phone_number": "+2349162865693",
    "business:contact_data:email": "info@yelocodesys.com",
    "business:hours:day:1": "Monday 9:00 AM - 6:00 PM",
    "business:hours:day:2": "Tuesday 9:00 AM - 6:00 PM",
    "business:hours:day:3": "Wednesday 9:00 AM - 6:00 PM",
    "business:hours:day:4": "Thursday 9:00 AM - 6:00 PM",
    "business:hours:day:5": "Friday 9:00 AM - 6:00 PM",
    "business:hours:day:6": "Saturday 10:00 AM - 4:00 PM",
    "business:hours:day:7": "Sunday Closed",
  },
}

export default function AboutPage() {
  return (
    <main>
      <Content />
      <Footer />
    </main>
  );
}