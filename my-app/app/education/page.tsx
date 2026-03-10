import Hero from "../components/hero";
import Footer from "../components/footer";
import Content from "./content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Yelocode Systems | Tech Training & Coding Bootcamps in Port Harcourt",
    template: "%s | Yelocode Systems",
  },

  description:
    "Start your tech career with Yelocode Systems in Port Harcourt, Nigeria. Professional training in web development, data science, cybersecurity, UI/UX design, Python, and digital marketing. Hands-on learning with expert mentors at No. 11 Elekahia.",

  keywords: [
    // Brand
    "Yelocode Systems",
    "yelocodesys.com",
    
    // Education/Training
    "coding bootcamp Port Harcourt",
    "tech training Nigeria",
    "programming school Port Harcourt",
    "software development course Nigeria",
    "data science training Port Harcourt",
    "cybersecurity certification Nigeria",
    "UI UX design course Port Harcourt",
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
  ],

  authors: [{ name: "Yelocode Systems", url: "https://yelocodesys.com/about" }],
  creator: "Yelocode Systems",
  publisher: "Yelocode Systems",

  metadataBase: new URL("https://yelocodesys.com"),

  openGraph: {
    title: "Yelocode Systems | Tech Training & Coding Bootcamps in Nigeria",
    description:
      "Launch your tech career with Yelocode Systems in Port Harcourt. Professional bootcamps in web development, data science, cybersecurity, UI/UX design, and digital marketing. Learn from industry experts at No. 11 Elekahia.",
    url: "https://yelocodesys.com/education",
    siteName: "Yelocode Systems",
    images: [
      {
        url: "/og-education.png",
        width: 1200,
        height: 630,
        alt: "Yelocode Systems - Tech Training & Coding Bootcamps in Port Harcourt",
      },
    ],
    locale: "en_NG",
    type: "website",
    phoneNumbers: ["+2349162865693"],
    countryName: "Nigeria",
  },

  twitter: {
    card: "summary_large_image",
    title: "Yelocode Systems | Tech Training",
    description:
      "Learn to code and launch your tech career in Port Harcourt. Professional bootcamps in web development, data science, cybersecurity, and more.",
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

  // Add structured data for educational organization
  other: {
    "og:education": "coding bootcamp, tech training",
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
