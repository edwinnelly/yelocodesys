import type { Metadata } from "next";
import Hero from "../components/hero";
import Footer from "../components/footer";
import Content from "./content";

export const metadata: Metadata = {
  title: {
    default: "Web Development Bootcamp | Full Stack Developer Course in Port Harcourt | Yelocode Systems",
    template: "%s | Yelocode Systems",
  },

  description:
    "Master full stack web development at Yelocode Systems in Port Harcourt. 16-week intensive bootcamp with 30+ hands-on projects. Learn HTML, CSS, JavaScript, React, Node.js, and databases. No experience required. Enroll now at No. 11 Elekahia.",

  keywords: [
    // Brand
    "Yelocode Systems",
    "yelocodesys.com",
    
    // Course specific
    "web development bootcamp Port Harcourt",
    "full stack developer course Nigeria",
    "coding bootcamp Port Harcourt",
    "programming training Rivers State",
    "learn web development Nigeria",
    
    // Frontend technologies
    "HTML CSS course",
    "JavaScript training",
    "React bootcamp",
    "frontend development course",
    
    // Backend technologies
    "Node.js training",
    "backend development course",
    "MongoDB database course",
    "Express.js training",
    "PostgreSQL course",
    
    // Full stack
    "full stack developer certification",
    "MERN stack course Nigeria",
    "web developer training",
    
    // Outcomes
    "become web developer",
    "coding career Nigeria",
    "software developer job opportunities",
    "learn to code Port Harcourt",
    
    // Location
    "Port Harcourt",
    "No. 11 Elekahia",
    "Rivers State",
    "Nigeria",
    
    // Program specifics
    "16-week coding bootcamp",
    "hands-on web projects",
    "web development certification",
    "mentor-led programming training",
  ],

  authors: [{ name: "Yelocode Systems", url: "https://yelocodesys.com/aboutus" }],
  creator: "Yelocode Systems",
  publisher: "Yelocode Systems",

  metadataBase: new URL("https://yelocodesys.com"),

  openGraph: {
    title: "Web Development Bootcamp | Full Stack Developer Course | Yelocode Systems Port Harcourt",
    description:
      "Join Yelocode Systems' 16-week Web Development bootcamp in Port Harcourt. Master full stack development with 30+ hands-on projects. Learn HTML, CSS, JavaScript, React, Node.js, and databases. Start your coding career at No. 11 Elekahia.",
    url: "https://yelocodesys.com/webdevelopment",
    siteName: "Yelocode Systems",
    images: [
      {
        url: "/og-webdevelopment.png",
        width: 1200,
        height: 630,
        alt: "Yelocode Systems Web Development Bootcamp in Port Harcourt",
      },
    ],
    locale: "en_NG",
    type: "website",
    phoneNumbers: ["+2349162865693"],
    countryName: "Nigeria",
  },

  twitter: {
    card: "summary_large_image",
    title: "Web Development Bootcamp | Yelocode Systems",
    description:
      "Learn full stack web development in Port Harcourt. 16-week bootcamp with 30+ projects. No experience required.",
    images: ["/twitter-webdevelopment.png"],
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
    canonical: "https://yelocodesys.com/webdevelopment",
  },

  // Structured data for course
  other: {
    "og:type": "website",
    "og:see_also": "https://yelocodesys.com/coursecatalog",
    "course:title": "Web Development Bootcamp",
    "course:description": "16-week intensive full stack web development bootcamp. Master frontend and backend development with 30+ hands-on projects.",
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