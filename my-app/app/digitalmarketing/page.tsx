import Content from "./content";
import Footer from "../components/footer";

// Structured data for the course
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
      {/* Structured Data - must be outside main for valid HTML */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <main itemScope itemType="https://schema.org/Course">
        {/* Schema.org meta tags for the course */}
        <meta itemProp="name" content="Digital Marketing with AI Bootcamp" />
        <meta itemProp="description" content="Master AI-powered digital marketing in Port Harcourt. 12-week bootcamp with 25+ projects." />
        <meta itemProp="provider" content="Yelocode Systems" />
        <meta itemProp="address" content="No. 11 Elekahia, Port Harcourt, Rivers State, Nigeria" />
        
        <Content />
        <Footer />
      </main>
    </>
  );
}