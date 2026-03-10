import Hero from "../components/hero";
import Footer from "../components/footer";
import Content from "./content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Yelocode Systems | Contact Us - Tech Training & Software Development in Port Harcourt",
    template: "%s | Yelocode Systems",
  },

  description:
    "Get in touch with Yelocode Systems in Port Harcourt. Visit our campus at No. 11 Elekahia, call 09162865693, or email info@yelocodesys.com. Our team is ready to answer your questions about tech training, bootcamps, and software development services.",

  keywords: [
    // Brand
    "Yelocode Systems",
    "yelocodesys.com",
    
    // Contact specific
    "contact Yelocode",
    "Port Harcourt tech company address",
    "No. 11 Elekahia",
    "tech training contact Nigeria",
    "software development inquiry",
    "coding bootcamp registration",
    
    // Communication
    "09162865693",
    "+2349162865693",
    "info@yelocodesys.com",
    "admissions@yelocodesys.com",
    "solutions@yelocodesys.com",
    
    // Location
    "tech campus Port Harcourt",
    "coding school address",
    "IT training center Rivers State",
    "software company location Nigeria",
    "Elekahia Port Harcourt",
    
    // Support
    "customer support tech training",
    "bootcamp enrollment help",
    "software project inquiry",
    "IT consulting consultation",
    "tech questions Port Harcourt",
    
    // Business hours
    "tech company hours",
    "training center opening times",
    "Monday to Saturday",
  ],

  authors: [{ name: "Yelocode Systems", url: "https://yelocodesys.com/aboutus" }],
  creator: "Yelocode Systems",
  publisher: "Yelocode Systems",

  metadataBase: new URL("https://yelocodesys.com"),

  openGraph: {
    title: "Yelocode Systems | Contact Us - Tech Training & Software Development",
    description:
      "Reach out to Yelocode Systems in Port Harcourt. Visit No. 11 Elekahia, call 09162865693, or email info@yelocodesys.com. We're here to help with tech training, bootcamps, and software solutions.",
    url: "https://yelocodesys.com/contacts",
    siteName: "Yelocode Systems",
    images: [
      {
        url: "/og-contact.png",
        width: 1200,
        height: 630,
        alt: "Yelocode Systems - Contact Us at No. 11 Elekahia, Port Harcourt",
      },
    ],
    locale: "en_NG",
    type: "website",
    phoneNumbers: ["+2349162865693"],
    countryName: "Nigeria",
  },

  twitter: {
    card: "summary_large_image",
    title: "Yelocode Systems | Contact Us",
    description:
      "Get in touch with Yelocode Systems in Port Harcourt. Visit No. 11 Elekahia or call 09162865693.",
    images: ["/twitter-contact.png"],
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
    canonical: "https://yelocodesys.com/contacts",
  },

  // Structured data for contact page
  other: {
    "og:type": "contact",
    "business:contact_data:street_address": "No. 11 Elekahia",
    "business:contact_data:locality": "Port Harcourt",
    "business:contact_data:region": "Rivers State",
    "business:contact_data:country_name": "Nigeria",
    "business:contact_data:postal_code": "500001",
    "business:contact_data:phone_number": "+2349162865693",
    "business:contact_data:email": "info@yelocodesys.com",
    "business:contact_data:email:admissions": "admissions@yelocodesys.com",
    "business:contact_data:email:solutions": "solutions@yelocodesys.com",
    "business:hours:day:1": "Monday 9:00 AM - 6:00 PM",
    "business:hours:day:2": "Tuesday 9:00 AM - 6:00 PM",
    "business:hours:day:3": "Wednesday 9:00 AM - 6:00 PM",
    "business:hours:day:4": "Thursday 9:00 AM - 6:00 PM",
    "business:hours:day:5": "Friday 9:00 AM - 6:00 PM",
    "business:hours:day:6": "Saturday 10:00 AM - 4:00 PM",
    "business:hours:day:7": "Sunday Closed",
    "business:latitude": "4.789012", // Add actual coordinates
    "business:longitude": "7.123456", // Add actual coordinates
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
