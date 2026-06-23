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
    default: "Best IT Training Center in Port Harcourt | Yelocode Systems – IT Courses, Cybersecurity & Web Development",
    template: "%s | Yelocode Systems",
  },

  description:
    "Yelocode Systems is a leading IT training center in Port Harcourt, offering IT courses in Nigeria, online training, cybersecurity, programming, web development, data analysis, cloud/DevOps engineering and professional certifications. Enroll today for individual, corporate, or online learning.",

  keywords: [
    "Yelocode Systems",
    "coding bootcamp port harcourt",
    "it training center in port harcourt",
    "computer training school in port harcourt",
    "data analytics training in port harcourt",
    "ui ux design training port harcourt",
    "software engineering academy in port harcourt",
    "cybersecurity training in port harcourt",
    "tech bootcamp Port Harcourt",
    "programming classes Nigeria",
    "web development training",
    "data science course Port Harcourt",
    "DevOps training",
    "software engineering bootcamp",
    "IT consulting Rivers State",
  ],

  authors: [{ name: "Yelocode Systems", url: "https://yelocodesys.com/aboutus" }],
  creator: "Yelocode Systems",
  publisher: "Yelocode Systems",

  metadataBase: new URL("https://yelocodesys.com"),

  openGraph: {
    title: "Best IT Training Center in Port Harcourt | Yelocode Systems – IT Courses, Cybersecurity & Web Development",
    description:
      "Yelocode Systems is a leading IT training center in Port Harcourt, offering IT courses in Nigeria, online training, cybersecurity, programming, web development, data analysis, cloud/DevOps engineering and professional certifications. Enroll today for individual, corporate, or online learning.",
    url: "https://yelocodesys.com",
    siteName: "Yelocode Systems",
    images: [
      {
        url: "/og-home.png",
        width: 1200,
        height: 630,
        alt: "Best IT Training Center in Port Harcourt | Yelocode Systems – IT Courses, Cybersecurity & Web Development",
      },
    ],
    locale: "en_NG",
    type: "website",
    phoneNumbers: ["+2349162865693"],
    countryName: "Nigeria",
  },

  twitter: {
    card: "summary_large_image",
    title: "Best IT Training Center in Port Harcourt | Yelocode Systems – IT Courses, Cybersecurity & Web Development",
    description:
      "Yelocode Systems is a leading IT training center in Port Harcourt, offering IT courses in Nigeria, online training, cybersecurity, programming, web development, data analysis, cloud/DevOps engineering and professional certifications. Enroll today for individual, corporate, or online learning.",
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
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["EducationalOrganization", "LocalBusiness"],
              "name": "Yelocode Systems",
              "url": "https://yelocodesys.com",
              "logo": "https://yelocodesys.com/pics/10001.png",
              "image": "https://yelocodesys.com/pics/10001.png",
              "description": "Premium IT training center in Port Harcourt offering software engineering, cybersecurity, web development, and data analytics, and UI/UX design bootcamps.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "No. 11 Elekahia Road, Rebisi",
                "addressLocality": "Port Harcourt",
                "addressRegion": "Rivers State",
                "addressCountry": "NG"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "4.8020",
                "longitude": "7.0205"
              },
              "telephone": "+2349162865693",
              "email": "info@yelocodesys.com",
              "priceRange": "NGN120000 - NGN1500000",
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
              "sameAs": [
                "https://twitter.com/yelocode",
                "https://linkedin.com/company/yelocode-systems"
              ],
              "areaServed": {
                "@type": "City",
                "name": "Port Harcourt",
                "sameAs": "https://en.wikipedia.org/wiki/Port_Harcourt"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "IT Training Courses",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Course",
                      "name": "Software Engineering Bootcamp",
                      "description": "Comprehensive software engineering training covering full-stack development,python, cybersecurity and modern web technologies",
                      "provider": {
                        "@type": "EducationalOrganization",
                        "name": "Yelocode Systems",
                        "url": "https://yelocodesys.com"
                      }
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Course",
                      "name": "Cybersecurity Training",
                      "description": "Professional cybersecurity certification and practical training",
                      "provider": {
                        "@type": "EducationalOrganization",
                        "name": "Yelocode Systems",
                        "url": "https://yelocodesys.com"
                      }
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Course",
                      "name": "Data Analytics Training",
                      "description": "Data analysis, visualization, and business intelligence training",
                      "provider": {
                        "@type": "EducationalOrganization",
                        "name": "Yelocode Systems",
                        "url": "https://yelocodesys.com"
                      }
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Course",
                      "name": "UI/UX Design Training",
                      "description": "User interface and user experience design professional course",
                      "provider": {
                        "@type": "EducationalOrganization",
                        "name": "Yelocode Systems",
                        "url": "https://yelocodesys.com"
                      }
                    }
                  }
                ]
              }
            }),
          }}
        />

        <ClientLayout>
          {children}
          <WhatsAppWidget
            phoneNumber="2349162865693"
            name="Yelocode Systems"
            position="Online | Replies within 1 hour"
            welcomeMessage="Hello! 👋 Welcome to Yelocode Systems. How can we help you today?"
          />
        </ClientLayout>
      </body>
    </html>
  );
}