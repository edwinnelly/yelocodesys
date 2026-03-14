import Hero from "../components/hero";
import Footer from "../components/footer";
import Content from "./content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Yelocode Systems | FAQ - Frequently Asked Questions About Tech Courses in Port Harcourt",
    template: "%s | Yelocode Systems",
  },

  description:
    "Find answers to frequently asked questions about Yelocode Systems tech courses, bootcamps, and software development training in Port Harcourt. Learn about programs, pricing, career opportunities, portfolio building, and job placement assistance.",

  keywords: [
    // Brand
    "Yelocode Systems FAQ",
    "yelocodesys.com questions",
    
    // FAQ specific
    "tech courses frequently asked questions",
    "coding bootcamp FAQ Port Harcourt",
    "software development training questions",
    "IT certification answers Nigeria",
    "programming courses help",
    
    // Programs
    "NOVA PRIME program details",
    "AXIS IGNITE course information",
    "QUANTA ELITE training questions",
    "tech program pricing Nigeria",
    "course duration Port Harcourt",
    
    // Career
    "tech job placement assistance",
    "portfolio building help",
    "tech career salary Nigeria",
    "job opportunities after training",
    "tech interview preparation",
    
    // Enrollment
    "how to enroll in tech courses",
    "prerequisites for coding bootcamp",
    "no experience tech training",
    "beginner friendly courses",
    "tech admission requirements",
    
    // Location & Contact
    "tech training FAQ Port Harcourt",
    "Elekahia tech campus questions",
    "IT courses Rivers State",
  ],

  authors: [{ name: "Yelocode Systems", url: "https://yelocodesys.com/aboutus" }],
  creator: "Yelocode Systems",
  publisher: "Yelocode Systems",

  metadataBase: new URL("https://yelocodesys.com"),

  openGraph: {
    title: "Yelocode Systems | FAQ - Your Questions About Tech Training Answered",
    description:
      "Get answers to frequently asked questions about Yelocode Systems tech courses in Port Harcourt. Learn about program details, pricing, career opportunities, and how to get started.",
    url: "https://yelocodesys.com/faq",
    siteName: "Yelocode Systems",
    images: [
      {
        url: "/og-faq.png",
        width: 1200,
        height: 630,
        alt: "Yelocode Systems - FAQ: Tech Training Questions Answered",
      },
    ],
    locale: "en_NG",
    type: "website",
    phoneNumbers: ["+2349162865693"],
    countryName: "Nigeria",
  },

  twitter: {
    card: "summary_large_image",
    title: "Yelocode Systems | FAQ - Tech Training Questions",
    description:
      "Find answers to common questions about Yelocode Systems tech courses, bootcamps, and career opportunities in Port Harcourt.",
    images: ["/twitter-faq.png"],
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
    canonical: "https://yelocodesys.com/faq",
  },

  // Structured data for FAQ page
  other: {
    "og:type": "website",
    "og:section": "FAQ",
    "article:tag": "tech training, coding bootcamp, IT courses, career development, portfolio building",
    
    // FAQ Schema will be added via script tag in the component
    // This is a placeholder for additional metadata
    "business:contact_data:phone_number": "+2349162865693",
    "business:contact_data:email": "info@yelocodesys.com",
    "business:contact_data:email:admissions": "admissions@yelocodesys.com",
    "business:hours:day:1": "Monday 9:00 AM - 6:00 PM",
    "business:hours:day:2": "Tuesday 9:00 AM - 6:00 PM",
    "business:hours:day:3": "Wednesday 9:00 AM - 6:00 PM",
    "business:hours:day:4": "Thursday 9:00 AM - 6:00 PM",
    "business:hours:day:5": "Friday 9:00 AM - 6:00 PM",
    "business:hours:day:6": "Saturday 10:00 AM - 4:00 PM",
    "business:latitude": "4.789012",
    "business:longitude": "7.123456",
  },
}

// FAQ Schema structured data for JSON-LD
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do I choose the right course for me?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Consider your interests, current skills, and career goals. Beginners should start with NOVA PRIME programs. If you have some experience, AXIS IGNITE offers deeper learning. For expert-level mastery, QUANTA ELITE prepares you for leadership roles."
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer job placement assistance?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! We provide career coaching, resume reviews, interview preparation, and access to our exclusive job board with partner companies. AXIS IGNITE and QUANTA ELITE programs include enhanced career support."
      }
    },
    {
      "@type": "Question",
      "name": "How do I build a portfolio after completing a course?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Each course includes portfolio-building projects. We guide you on showcasing your work on platforms like GitHub, Behance, Tableau Public, or your personal website. Our career coaches help you present your projects effectively."
      }
    },
    {
      "@type": "Question",
      "name": "Where can I find jobs after completing the program?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Graduates find opportunities on LinkedIn, Indeed, Glassdoor, and specialized job boards for each field. We also have partnerships with hiring companies and an internal job board for graduates."
      }
    },
    {
      "@type": "Question",
      "name": "What salary can I expect after completing a course?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Salaries vary by role, location, and experience. Entry-level positions typically start at ₦3-5M/year. Mid-level roles range from ₦5-8M/year. Senior/Expert roles can earn ₦8-15M+/year."
      }
    },
    {
      "@type": "Question",
      "name": "Do I need prior experience to enroll?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. NOVA PRIME programs are designed for beginners with no prior experience. AXIS IGNITE and QUANTA ELITE build upon skills from earlier levels or equivalent experience."
      }
    },
    {
      "@type": "Question",
      "name": "How long does it take to complete each program?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "NOVA PRIME: 2-3 months, AXIS IGNITE: 4-6 months, QUANTA ELITE: 7-12 months. All programs are flexible with self-paced learning options."
      }
    }
  ]
};

// Breadcrumb Schema
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://yelocodesys.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "FAQ",
      "item": "https://yelocodesys.com/faq"
    }
  ]
};

// Organization Schema
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Yelocode Systems",
  "url": "https://yelocodesys.com",
  "logo": "https://yelocodesys.com/logo.png",
  "sameAs": [
    "https://www.facebook.com/yelocode",
    "https://www.twitter.com/yelocode",
    "https://www.linkedin.com/company/yelocode",
    "https://www.instagram.com/yelocode"
  ],
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "No. 11 Elekahia",
    "addressLocality": "Port Harcourt",
    "addressRegion": "Rivers State",
    "postalCode": "500001",
    "addressCountry": "NG"
  },
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "telephone": "+2349162865693",
      "contactType": "customer service",
      "areaServed": "NG",
      "availableLanguage": "English"
    },
    {
      "@type": "ContactPoint",
      "telephone": "+2349162865693",
      "contactType": "sales",
      "areaServed": "NG",
      "availableLanguage": "English"
    },
    {
      "@type": "ContactPoint",
      "email": "info@yelocodesys.com",
      "contactType": "general inquiries",
      "areaServed": "NG",
      "availableLanguage": "English"
    },
    {
      "@type": "ContactPoint",
      "email": "admissions@yelocodesys.com",
      "contactType": "admissions",
      "areaServed": "NG",
      "availableLanguage": "English"
    }
  ],
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
  ]
};

export default function Home() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      
      <main>
        <Content />
        <Footer />
      </main>
    </>
  );
}