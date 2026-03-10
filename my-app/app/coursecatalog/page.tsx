import Hero from "../components/hero";
import Footer from "../components/footer";
import Content from "./content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Yelocode Systems | Course Catalog - Tech Training Programs in Port Harcourt",
    template: "%s | Yelocode Systems",
  },

  description:
    "Explore Yelocode Systems' comprehensive course catalog in Port Harcourt. Choose from Web Development (₦250k-₦850k), Data Science (₦200k-₦850k), Cybersecurity (₦250k-₦1.5M), UI/UX Design (₦120k-₦250k), Python (₦200k-₦900k), and more. Find your perfect tech program at No. 11 Elekahia.",

  keywords: [
    // Brand
    "Yelocode Systems",
    "yelocodesys.com",
    
    // Course catalog specific
    "tech course catalog Port Harcourt",
    "coding bootcamp list Nigeria",
    "programming courses directory",
    "IT training programs",
    "software development courses",
    
    // Web Development
    "web development bootcamp Port Harcourt",
    "full stack course Nigeria",
    "frontend development training",
    "backend programming classes",
    "NOVA PRIME web",
    "AXIS IGNITE web",
    "QUANTA ELITE web",
    
    // Data Science
    "data science course Port Harcourt",
    "machine learning training Nigeria",
    "data analysis bootcamp",
    "Python for data science",
    "NOVA PRIME data",
    "AXIS IGNITE data",
    "QUANTA ELITE data",
    
    // Cybersecurity
    "cybersecurity course Port Harcourt",
    "ethical hacking training Nigeria",
    "security certification",
    "penetration testing course",
    "NOVA PRIME cyber",
    "AXIS IGNITE cyber",
    "QUANTA ELITE cyber",
    
    // Design
    "UI UX design course Port Harcourt",
    "graphic design training Nigeria",
    "Figma course",
    "product design bootcamp",
    "NOVA PRIME design",
    "AXIS IGNITE design",
    
    // Python
    "Python programming course",
    "Django training Nigeria",
    "Flask bootcamp",
    "Python automation",
    "NOVA PRIME Python",
    "AXIS IGNITE Python",
    "QUANTA ELITE Python",
    
    // Digital Marketing
    "digital marketing course Port Harcourt",
    "SEO training Nigeria",
    "social media marketing bootcamp",
    "Google Ads certification",
    "NOVA PRIME marketing",
    "AXIS IGNITE marketing",
    
    // Mobile Development
    "mobile app development course",
    "Flutter training Nigeria",
    "React Native bootcamp",
    "iOS Android development",
    "NOVA PRIME mobile",
    "AXIS IGNITE mobile",
    
    // Cloud & DevOps
    "cloud computing course Port Harcourt",
    "DevOps training Nigeria",
    "AWS certification",
    "Azure bootcamp",
    "NOVA PRIME cloud",
    "AXIS IGNITE cloud",
    "QUANTA ELITE cloud",
    
    // Database
    "database management course",
    "SQL training Nigeria",
    "MongoDB bootcamp",
    "PostgreSQL course",
    "NOVA PRIME database",
    "AXIS IGNITE database",
    "QUANTA ELITE database",
    
    // Program Levels
    "NOVA PRIME beginner courses",
    "AXIS IGNITE intermediate training",
    "QUANTA ELITE advanced programs",
    "tech certification levels",
    
    // Location
    "No. 11 Elekahia",
    "Port Harcourt",
    "Rivers State",
    "Nigeria",
    
    // Pricing
    "tech course prices Port Harcourt",
    "affordable coding bootcamp",
    "program training fees",
    "best value tech courses",
  ],

  authors: [{ name: "Yelocode Systems", url: "https://yelocodesys.com/about" }],
  creator: "Yelocode Systems",
  publisher: "Yelocode Systems",

  metadataBase: new URL("https://yelocodesys.com"),

  openGraph: {
    title: "Yelocode Systems | Complete Course Catalog - Tech Training in Port Harcourt",
    description:
      "Browse Yelocode Systems' full course catalog in Port Harcourt. Web Development (₦250k-₦850k), Data Science (₦200k-₦850k), Cybersecurity (₦250k-₦1.5M), UI/UX Design (₦120k-₦250k), Python (₦200k-₦900k), and more. Find your program at No. 11 Elekahia.",
    url: "https://yelocodesys.com/coursecatalog",
    siteName: "Yelocode Systems",
    images: [
      {
        url: "/og-coursecatalog.png",
        width: 1200,
        height: 630,
        alt: "Yelocode Systems - Complete Tech Course Catalog in Port Harcourt",
      },
    ],
    locale: "en_NG",
    type: "website",
    phoneNumbers: ["+2349162865693"],
    countryName: "Nigeria",
  },

  twitter: {
    card: "summary_large_image",
    title: "Yelocode Systems | Course Catalog",
    description:
      "Explore our tech courses in Port Harcourt. Web Dev, Data Science, Cybersecurity, UI/UX Design, Python & more. Find your perfect program at No. 11 Elekahia.",
    images: ["/twitter-coursecatalog.png"],
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
    canonical: "https://yelocodesys.com/coursecatalog",
  },

  // Structured data for catalog page
  other: {
    "og:type": "website",
    "og:see_also": "https://yelocodesys.com/education",
    // "og:see_also": "https://yelocodesys.com/pricing",
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
}

export default function AboutPage() {
  return (
    <main>
      <Content />
      <Footer />
    </main>
  );
}