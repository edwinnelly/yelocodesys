import type { Metadata } from "next";
import Hero from "../components/hero";
import Footer from "../components/footer";
import Content from "./content";

export const metadata: Metadata = {
  title: {
    default: "Digital Marketing with AI Bootcamp | Learn AI Marketing in Port Harcourt | Yelocode Systems",
    template: "%s | Yelocode Systems",
  },

  description:
    "Master AI-powered digital marketing at Yelocode Systems in Port Harcourt. 12-week intensive bootcamp with 25+ hands-on projects. Learn SEO, social media, email marketing, paid ads with AI tools. No experience required. Enroll now at No. 11 Elekahia.",

  keywords: [
    // Brand
    "Yelocode Systems",
    "yelocodesys.com",
    
    // Course specific
    "digital marketing bootcamp Port Harcourt",
    "AI marketing course Nigeria",
    "learn digital marketing Port Harcourt",
    "marketing training Rivers State",
    "AI tools for marketing",
    
    // Digital Marketing related
    "SEO course Nigeria",
    "social media marketing training",
    "email marketing automation",
    "Google Ads certification",
    "content marketing course",
    "Facebook advertising training",
    "Instagram marketing course",
    "LinkedIn marketing strategy",
    "marketing analytics course",
    "ChatGPT for marketing",
    "AI content creation",
    
    // AI Tools
    "ChatGPT for marketers",
    "Midjourney training",
    "Jasper AI course",
    "SurferSEO training",
    "Google Analytics course",
    "Looker Studio training",
    "HubSpot certification",
    
    // Outcomes
    "become digital marketer",
    "AI marketing career Nigeria",
    "marketing job opportunities",
    "learn marketing automation",
    
    // Location
    "Port Harcourt",
    "No. 11 Elekahia",
    "Rivers State",
    "Nigeria",
    
    // Program specifics
    "12-week marketing bootcamp",
    "hands-on marketing projects",
    "AI marketing certification",
    "mentor-led marketing training",
  ],

  authors: [{ name: "Yelocode Systems", url: "https://yelocodesys.com/aboutus" }],
  creator: "Yelocode Systems",
  publisher: "Yelocode Systems",

  metadataBase: new URL("https://yelocodesys.com"),

  openGraph: {
    title: "Digital Marketing with AI Bootcamp | Yelocode Systems Port Harcourt",
    description:
      "Join Yelocode Systems' 12-week Digital Marketing with AI bootcamp in Port Harcourt. Master SEO, social media, email marketing, and paid ads with 25+ hands-on projects and AI tools. Start your marketing career at No. 11 Elekahia.",
    url: "https://yelocodesys.com/digitalmarketing",
    siteName: "Yelocode Systems",
    images: [
      {
        url: "/og-digitalmarketing.png",
        width: 1200,
        height: 630,
        alt: "Yelocode Systems Digital Marketing with AI Bootcamp in Port Harcourt",
      },
    ],
    locale: "en_NG",
    type: "website",
    phoneNumbers: ["+2349162865693"],
    countryName: "Nigeria",
  },

  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing with AI Bootcamp | Yelocode Systems",
    description:
      "Learn AI-powered digital marketing in Port Harcourt. 12-week bootcamp with 25+ projects. No experience required.",
    images: ["/twitter-digitalmarketing.png"],
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
    canonical: "https://yelocodesys.com/digitalmarketing",
  },

  // Structured data for course
  other: {
    "og:type": "website",
    "og:see_also": "https://yelocodesys.com/coursecatalog",
    "course:title": "Digital Marketing with AI Bootcamp",
    "course:description": "12-week intensive digital marketing bootcamp with AI automation. Learn SEO, social media, email marketing, paid ads, and analytics with 25+ hands-on projects.",
    "course:duration": "12 weeks",
    "course:numberOfProjects": "25+",
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