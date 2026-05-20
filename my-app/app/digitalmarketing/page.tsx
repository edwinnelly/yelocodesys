import type { Metadata } from "next";
import Hero from "../components/hero";
import Footer from "../components/footer";
import Content from "./content";

export const metadata: Metadata = {
  title: {
    default: "Digital Marketing Training &amp; Course in Port Harcourt | Yelocode Systems",
    template: "%s | Yelocode Systems Port Harcourt",
  },

  description:
    "Learn digital marketing with hands-on training in Port Harcourt. Master SEO strategy, paid search, social media, lead generation, content strategy &amp; digital advertising.",

  keywords: [
    // Brand & Primary
    "Yelocode Systems",
    "yelocodesys.com",
    "digital marketing Port Harcourt",
    "AI marketing course Nigeria",
    "learn digital marketing Port Harcourt",
    
    // Digital Marketing Core
    "SEO course Nigeria",
    "social media marketing training Port Harcourt",
    "email marketing automation course",
    "Google Ads certification Nigeria",
    "content marketing training",
    "Facebook advertising course",
    "Instagram marketing training",
    "LinkedIn marketing strategy",
    "marketing analytics course",
    "ChatGPT for marketing",
    "AI content creation tools",
    "marketing automation Nigeria",
    
    // AI Tools & Technologies
    "ChatGPT for marketers training",
    "Midjourney AI course",
    "Jasper AI training Port Harcourt",
    "SurferSEO optimization course",
    "Google Analytics 4 course",
    "Looker Studio training Nigeria",
    "HubSpot certification course",
    "SEMrush training",
    "Ahrefs SEO course",
    
    // Career Outcomes
    "become digital marketer Nigeria",
    "AI marketing career Port Harcourt",
    "digital marketing job Nigeria",
    "marketing automation specialist",
    "social media manager course",
    "SEO specialist training",
    
    // Location Specific (Local SEO)
    "Port Harcourt digital marketing school",
    "No. 11 Elekahia tech training",
    "Rivers State marketing bootcamp",
    "Nigeria AI marketing certification",
    "best digital marketing course in Port Harcourt",
    "affordable marketing training Rivers State",
    
    // Program Specifics
    "12-week marketing bootcamp",
    "hands-on marketing projects",
    "AI marketing certification Nigeria",
    "mentor-led marketing training",
    "digital marketing with AI",
    "marketing automation bootcamp",
  ],

  authors: [{ name: "Yelocode Systems", url: "https://yelocodesys.com/aboutus" }],
  creator: "Yelocode Systems",
  publisher: "Yelocode Systems",

  metadataBase: new URL("https://yelocodesys.com"),

  openGraph: {
    title: "Digital Marketing with AI Bootcamp | 12-Week Program at Yelocode Systems Port Harcourt",
    description:
      "Join Yelocode Systems' 12-week Digital Marketing with AI bootcamp in Port Harcourt. Master SEO, social media, email marketing, paid ads, and AI tools with 25+ hands-on projects. Start your marketing career at No. 11 Elekahia, Rivers State, Nigeria. Limited spots available!",
    url: "https://yelocodesys.com/digitalmarketing",
    siteName: "Yelocode Systems - Digital Marketing Bootcamp",
    images: [
      {
        url: "/og-digitalmarketing.png",
        width: 1200,
        height: 630,
        alt: "Yelocode Systems Digital Marketing with AI Bootcamp - Learn at No. 11 Elekahia, Port Harcourt, Nigeria",
      },
    ],
    locale: "en_NG",
    type: "website",
    phoneNumbers: ["+2349162865693"],
    countryName: "Nigeria",
    emails: ["admissions@yelocodesys.com"],
  },

  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing with AI Bootcamp | Yelocode Systems Port Harcourt",
    description:
      "Learn AI-powered digital marketing in Port Harcourt, Nigeria. 12-week bootcamp with 25+ hands-on projects. No experience required. Enroll now at No. 11 Elekahia!",
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
    languages: {
      'en-NG': 'https://yelocodesys.com/digitalmarketing',
    },
  },

  verification: {
    google: "your-google-search-console-verification-code", // Add your verification code
    // other: ["your-bing-verification-code"], // Add if needed
  },

  category: "Education",
  
  // Additional metadata
  applicationName: "Yelocode Systems",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
};

// Add structured data as a separate component
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Course",
      "@id": "https://yelocodesys.com/digitalmarketing#course",
      "name": "Digital Marketing with AI Bootcamp",
      "description": "Master AI-powered digital marketing in 12 weeks. Learn SEO, social media, email marketing, paid advertising, and marketing analytics with 25+ hands-on projects using cutting-edge AI tools.",
      "provider": {
        "@type": "Organization",
        "@id": "https://yelocodesys.com/#organization",
        "name": "Yelocode Systems",
        "url": "https://yelocodesys.com",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "No. 11 Elekahia",
          "addressLocality": "Port Harcourt",
          "addressRegion": "Rivers State",
          "addressCountry": "NG"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+2349162865693",
          "contactType": "admissions",
          "email": "admissions@yelocodesys.com",
          "availableLanguage": ["English"]
        }
      },
      "courseCode": "DM-AI-2026",
      "coursePrerequisites": "No prior marketing experience required. Basic computer literacy recommended.",
      "educationalCredentialAwarded": "Yelocode Systems Digital Marketing with AI Certificate",
      "occupationalCredentialAwarded": "Digital Marketing Professional Certificate",
      "teaches": [
        "Search Engine Optimization (SEO)",
        "Social Media Marketing",
        "Email Marketing Automation",
        "Google Ads & PPC",
        "Content Marketing Strategy",
        "Marketing Analytics",
        "AI Content Generation",
        "Marketing Automation Tools"
      ],
      "totalJobTrainingHours": "48 hours live instruction + 20 hours projects",
      "timeRequired": "P12W",
      "hasCourseInstance": [
        {
          "@type": "CourseInstance",
          "courseMode": ["online", "onsite"],
          "location": {
            "@type": "Place",
            "name": "Yelocode Systems - No. 11 Elekahia",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "No. 11 Elekahia",
              "addressLocality": "Port Harcourt",
              "addressRegion": "Rivers State",
              "addressCountry": "NG"
            }
          },
          "startDate": "2026-06-15",
          "endDate": "2026-09-07",
          "courseSchedule": {
            "@type": "Schedule",
            "daysOfWeek": ["Monday", "Wednesday", "Friday"],
            "startTime": "18:00",
            "endTime": "20:00",
            "timezone": "Africa/Lagos"
          },
          "courseWorkload": "P12W",
          "instructor": {
            "@type": "Person",
            "name": "Lead Marketing Instructor",
            "jobTitle": "Digital Marketing Expert"
          }
        }
      ]
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://yelocodesys.com/#organization",
      "name": "Yelocode Systems",
      "image": "https://yelocodesys.com/logo.png",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "No. 11 Elekahia",
        "addressLocality": "Port Harcourt",
        "addressRegion": "Rivers State",
        "postalCode": "500101",
        "addressCountry": "NG"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "4.8156",
        "longitude": "7.0498"
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "09:00",
          "closes": "18:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Saturday",
          "opens": "10:00",
          "closes": "16:00"
        }
      ],
      "telephone": "+2349162865693",
      "email": "info@yelocodesys.com",
      "priceRange": "₦₦",
      "currenciesAccepted": "NGN, USD",
      "paymentAccepted": ["Cash", "Bank Transfer", "Card"],
      "hasCourse": {
        "@id": "https://yelocodesys.com/digitalmarketing#course"
      }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Do I need previous marketing experience?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No, the Digital Marketing with AI Bootcamp is designed for beginners. We start from fundamentals and progressively build advanced skills with AI integration."
          }
        },
        {
          "@type": "Question",
          "name": "What certificate will I receive?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You'll receive a Yelocode Systems Digital Marketing with AI Certificate, recognized by employers in Nigeria and internationally."
          }
        },
        {
          "@type": "Question",
          "name": "Is the bootcamp online or in-person?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We offer both options! You can join in-person at No. 11 Elekahia, Port Harcourt, or attend live online classes from anywhere in Nigeria."
          }
        }
      ]
    }
  ]
};

export default function DigitalMarketingPage() {
  return (
    <>
      <head>
        {/* Additional meta tags for better SEO */}
        <meta name="geo.region" content="NG-RI" />
        <meta name="geo.placename" content="Port Harcourt" />
        <meta name="geo.position" content="4.8156;7.0498" />
        <meta name="ICBM" content="4.8156, 7.0498" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        
        {/* Canonical link already in metadata, but explicit is better */}
        <link rel="canonical" href="https://yelocodesys.com/digitalmarketing" />
        
        {/* Alternate language versions */}
        <link rel="alternate" href="https://yelocodesys.com/digitalmarketing" hrefLang="en-NG" />
        <link rel="alternate" href="https://yelocodesys.com/digitalmarketing" hrefLang="x-default" />
        
        {/* Preload critical assets */}
        <link rel="preload" href="/og-digitalmarketing.png" as="image" />
      </head>
      
      <main itemScope itemType="https://schema.org/Course">
        <meta itemProp="name" content="Digital Marketing with AI Bootcamp" />
        <meta itemProp="description" content="Master AI-powered digital marketing in Port Harcourt. 12-week bootcamp with 25+ projects." />
        <meta itemProp="provider" content="Yelocode Systems" />
        <meta itemProp="address" content="No. 11 Elekahia, Port Harcourt, Rivers State, Nigeria" />
        
        <Content />
        <Footer />
      </main>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </>
  );
}