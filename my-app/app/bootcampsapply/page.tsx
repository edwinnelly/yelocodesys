import Hero from "../components/hero";
import Footer from "../components/footer";
import Content from "./content";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Yelocode Systems | Apply for Tech Bootcamps in Port Harcourt",
    template: "%s | Yelocode Systems",
  },

  description:
    "Apply now for Yelocode Systems' intensive tech bootcamps in Port Harcourt. Start your journey in Web Development, Data Science, Cybersecurity, UI/UX Design, Python, and more. Limited seats available. Begin your application at No. 11 Elekahia.",

  keywords: [
    // Brand
    "Yelocode Systems",
    "yelocodesys.com",
    
    // Application specific
    "apply for bootcamp Port Harcourt",
    "tech bootcamp application Nigeria",
    "coding school enrollment",
    "register for training",
    "bootcamp sign up",
    "admissions Port Harcourt",
    
    // Program applications
    "web development bootcamp apply",
    "data science course registration",
    "cybersecurity training sign up",
    "UI UX design bootcamp enrollment",
    "Python programming apply",
    "digital marketing course register",
    "mobile app development bootcamp",
    "cloud computing training sign up",
    "DevOps bootcamp application",
    "database management course enrollment",
    
    // Tier applications
    "NOVA PRIME enrollment",
    "AXIS IGNITE registration",
    "QUANTA ELITE application",
    "beginner tech courses apply",
    "intermediate training sign up",
    "advanced bootcamp registration",
    
    // Process
    "bootcamp admission process",
    "how to apply for tech training",
    "enrollment requirements",
    "application deadline",
    "skills assessment",
    "interview process",
    
    // Location
    "No. 11 Elekahia",
    "Port Harcourt",
    "Rivers State",
    "Nigeria",
    
    // Urgency
    "limited seats available",
    "apply now Port Harcourt",
    "next cohort registration",
    "start your tech career",
    "bootcamp start dates",
    
    // Contact
    "admissions@yelocodesys.com",
    "09162865693",
    "bootcamp inquiries",
  ],

  authors: [{ name: "Yelocode Systems", url: "https://yelocodesys.com/about" }],
  creator: "Yelocode Systems",
  publisher: "Yelocode Systems",

  metadataBase: new URL("https://yelocodesys.com"),

  openGraph: {
    title: "Yelocode Systems | Apply for Tech Bootcamps in Port Harcourt",
    description:
      "Take the first step toward your tech career. Apply now for Yelocode Systems' bootcamps in Port Harcourt. Web Development, Data Science, Cybersecurity, UI/UX Design & more. Limited seats at No. 11 Elekahia.",
    url: "https://yelocodesys.com/bootcampsapply",
    siteName: "Yelocode Systems",
    images: [
      {
        url: "/og-bootcampsapply.png",
        width: 1200,
        height: 630,
        alt: "Yelocode Systems - Apply for Tech Bootcamps in Port Harcourt",
      },
    ],
    locale: "en_NG",
    type: "website",
    phoneNumbers: ["+2349162865693"],
    countryName: "Nigeria",
  },

  twitter: {
    card: "summary_large_image",
    title: "Yelocode Systems | Apply Now",
    description:
      "Apply for tech bootcamps in Port Harcourt. Web Development, Data Science, Cybersecurity & more. Limited seats at No. 11 Elekahia.",
    images: ["/twitter-bootcampsapply.png"],
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
    canonical: "https://yelocodesys.com/bootcampsapply",
  },

  // Structured data for application page
  other: {
    "og:type": "website",
    "og:see_also": "https://yelocodesys.com/coursecatalog",
    "business:contact_data:street_address": "No. 11 Elekahia",
    "business:contact_data:locality": "Port Harcourt",
    "business:contact_data:region": "Rivers State",
    "business:contact_data:country_name": "Nigeria",
    "business:contact_data:phone_number": "+2349162865693",
    "business:contact_data:email": "admissions@yelocodesys.com",
    "business:hours:day:1": "Monday 9:00 AM - 6:00 PM",
    "business:hours:day:2": "Tuesday 9:00 AM - 6:00 PM",
    "business:hours:day:3": "Wednesday 9:00 AM - 6:00 PM",
    "business:hours:day:4": "Thursday 9:00 AM - 6:00 PM",
    "business:hours:day:5": "Friday 9:00 AM - 6:00 PM",
    "business:hours:day:6": "Saturday 10:00 AM - 4:00 PM",
    "business:hours:day:7": "Sunday Closed",
    
    // Application specific structured data
    "application:deadline": "Rolling admissions",
    "application:next_cohort": "April 15, 2025",
    "application:contact": "admissions@yelocodesys.com",
    "application:phone": "+2349162865693",
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