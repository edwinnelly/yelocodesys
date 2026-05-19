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
    default: "Best IT Training Center in Port Harcourt | Yelocode systems – IT Courses, Cybersecurity &amp; Web Development",
    template: "%s | Yelocode Systems",
  },

  description:
    "Yelocode systems is a leading IT training center in Port Harcourt, offering IT courses in Nigeria, online training, cybersecurity, programming, web development, data analysis, cloud/DevOps engineering and professional certifications. Enroll today for individual, corporate, or online learning.",

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
    title: "Best IT Training Center in Port Harcourt | Yelocode systems – IT Courses, Cybersecurity &amp; Web Development",
    description:
      "Yelocode systems is a leading IT training center in Port Harcourt, offering IT courses in Nigeria, online training, cybersecurity, programming, web development, data analysis, cloud/DevOps engineering and professional certifications. Enroll today for individual, corporate, or online learning.",
    url: "https://yelocodesys.com",
    siteName: "Yelocode Systems",
    images: [
      {
        url: "/og-home.png",
        width: 1200,
        height: 630,
        alt: "Best IT Training Center in Port Harcourt | Yelocode systems – IT Courses, Cybersecurity &amp; Web Development",
      },
    ],
    locale: "en_NG",
    type: "website",
    phoneNumbers: ["+2349162865693"],
    countryName: "Nigeria",
  },

  twitter: {
    card: "summary_large_image",
    title: "Best IT Training Center in Port Harcourt | Yelocode systems – IT Courses, Cybersecurity &amp; Web Development",
    description:
      "Yelocode systems is a leading IT training center in Port Harcourt, offering IT courses in Nigeria, online training, cybersecurity, programming, web development, data analysis, cloud/DevOps engineering and professional certifications. Enroll today for individual, corporate, or online learning.",
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