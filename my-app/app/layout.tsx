import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ClientLayout from "./client-layout";
import "./globals.css";
import WhatsAppWidget from "./components/whatsapp-widget";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Yelocode Systems | #1 Tech Training & Software Development in Port Harcourt",
    template: "%s | Yelocode Systems",
  },

  description:
    "Yelocode Systems is Port Harcourt's premier technology training and software development company. Transform your career with expert-led bootcamps in web development, data science, cybersecurity, and more. Custom software solutions for businesses. Located at No. 11 Elekahia.",

  keywords: [
    // Brand & Primary
    "Yelocode Systems",
    "yelocodesys.com",
    "Port Harcourt tech company",
    "coding school Port Harcourt",
    
    // Training Services
    "tech bootcamp Port Harcourt",
    "programming classes Nigeria",
    "web development training",
    "data science course Port Harcourt",
    "cybersecurity certification Nigeria",
    "DevOps training",
    "UI UX design course",
    "Python programming Nigeria",
    "digital marketing training",
    "software engineering bootcamp",
    
    // Development Services
    "software development Nigeria",
    "web development company Port Harcourt",
    "mobile app development",
    "custom software solutions",
    "IT consulting Rivers State",
    "cloud solutions Nigeria",
    "business automation",
    
    // Location
    "No. 11 Elekahia",
    "Port Harcourt",
    "Rivers State",
    "Nigeria",
    "tech hub Port Harcourt",
    
    // Student Intent
    "learn to code Port Harcourt",
    "tech career Nigeria",
    "best coding bootcamp Nigeria",
    "affordable tech training",
    "IT certification Port Harcourt",
    "become a programmer",
    
    // Business Intent
    "software company Port Harcourt",
    "tech solutions provider Nigeria",
    "business technology services",
    "digital transformation Nigeria",
  ],

  authors: [{ name: "Yelocode Systems", url: "https://yelocodesys.com/aboutus" }],
  creator: "Yelocode Systems",
  publisher: "Yelocode Systems",

  metadataBase: new URL("https://yelocodesys.com"),

  openGraph: {
    title: "Yelocode Systems | #1 Tech Training & Software Development in Port Harcourt",
    description:
      "Transform your career or business with Yelocode Systems, Port Harcourt's leading tech training and software development company. Expert-led bootcamps, custom software solutions, and IT consulting at No. 11 Elekahia.",
    url: "https://yelocodesys.com",
    siteName: "Yelocode Systems",
    images: [
      {
        url: "/og-home.png",
        width: 1200,
        height: 630,
        alt: "Yelocode Systems - Premier Tech Training & Software Development in Port Harcourt",
      },
    ],
    locale: "en_NG",
    type: "website",
    phoneNumbers: ["+2349162865693"],
    countryName: "Nigeria",
  },

  twitter: {
    card: "summary_large_image",
    title: "Yelocode Systems | Tech Training & Development",
    description:
      "Port Harcourt's premier tech training and software development company. Start your tech journey at No. 11 Elekahia.",
    images: ["/twitter-home.png"],
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
    canonical: "https://yelocodesys.com",
  },

  // Verification for search consoles (add your codes)
  // verification: {
  //   google: "your-google-verification-code",
  //   yandex: "your-yandex-code",
  //   bing: "your-bing-code",
  // },

  // Structured data for local business
  other: {
    "og:site_name": "Yelocode Systems",
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} antialiased`}>
        <ClientLayout>{children} <WhatsAppWidget 
          phoneNumber="2349162865693" // Your number without +
          name="Yelocode Systems"
          position="Online | Replies within 1 hour"
          welcomeMessage="Hello! 👋 Welcome to Yelocode Systems. How can we help you today?"
        /></ClientLayout>
      </body>
    </html>
  );
}