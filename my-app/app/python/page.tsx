import type { Metadata } from "next";
import Hero from "../components/hero";
import Footer from "../components/footer";
import Content from "./content";

export const metadata: Metadata = {
  title: {
    default: "Python Programming Bootcamp | Learn Python in Port Harcourt | Yelocode Systems",
    template: "%s | Yelocode Systems",
  },

  description:
    "Master Python programming at Yelocode Systems in Port Harcourt. 16-week intensive bootcamp with 30+ hands-on projects. Learn web development, data science, automation, and AI. No prior experience required. Enroll now at No. 11 Elekahia.",

  keywords: [
    // Brand
    "Yelocode Systems",
    "yelocodesys.com",
    
    // Course specific
    "Python bootcamp Port Harcourt",
    "Python programming course Nigeria",
    "learn Python Port Harcourt",
    "Python training Rivers State",
    "coding bootcamp Python",
    
    // Python related
    "Python developer course",
    "Python programming classes",
    "Python for beginners",
    "advanced Python training",
    "Python web development",
    "Python data science",
    "Python automation",
    "Django course Nigeria",
    "Flask training",
    "Python machine learning",
    
    // Outcomes
    "become Python developer",
    "Python career Nigeria",
    "Python job opportunities",
    "learn to code Python",
    
    // Location
    "Port Harcourt",
    "No. 11 Elekahia",
    "Rivers State",
    "Nigeria",
    
    // Program specifics
    "16-week coding bootcamp",
    "hands-on Python projects",
    "Python certification",
    "mentor-led Python training",
  ],

  authors: [{ name: "Yelocode Systems", url: "https://yelocodesys.com/aboutus" }],
  creator: "Yelocode Systems",
  publisher: "Yelocode Systems",

  metadataBase: new URL("https://yelocodesys.com"),

  openGraph: {
    title: "Python Programming Bootcamp | Yelocode Systems Port Harcourt",
    description:
      "Join Yelocode Systems' 16-week Python bootcamp in Port Harcourt. Master Python through 30+ hands-on projects. Learn web dev, data science, automation & AI. No experience needed. Start your tech career at No. 11 Elekahia.",
    url: "https://yelocodesys.com/python",
    siteName: "Yelocode Systems",
    images: [
      {
        url: "/og-python.png",
        width: 1200,
        height: 630,
        alt: "Yelocode Systems Python Programming Bootcamp in Port Harcourt",
      },
    ],
    locale: "en_NG",
    type: "website",
    phoneNumbers: ["+2349162865693"],
    countryName: "Nigeria",
  },

  twitter: {
    card: "summary_large_image",
    title: "Python Bootcamp | Yelocode Systems",
    description:
      "Learn Python in Port Harcourt with Yelocode Systems. 16-week bootcamp with 30+ projects. No experience required.",
    images: ["/twitter-python.png"],
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
    canonical: "https://yelocodesys.com/python",
  },

  // Structured data for course
  other: {
    "og:type": "website",
    "og:see_also": "https://yelocodesys.com/coursecatalog",
    "course:title": "Python Programming Bootcamp",
    "course:description": "16-week intensive Python bootcamp with 30+ hands-on projects. Learn web development, data science, automation, and AI.",
    "course:duration": "16 weeks",
    "course:numberOfProjects": "30+",
    "course:difficulty": "Beginner to Advanced",
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
  },
};

export default function Home() {
  return (
    <main>
      <Content />
      <Footer />
    </main>
  );
}