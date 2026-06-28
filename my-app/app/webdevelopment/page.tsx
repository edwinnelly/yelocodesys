import type { Metadata } from "next";
import Footer from "../components/footer";
import Content from "./content";

export const metadata: Metadata = {
  // Front-loaded with the highest-volume local search terms
  title: {
    default: "Best Tech School in Port Harcourt | Web Development & Coding Bootcamp",
    template: "%s | Yelocode Systems",
  },

  // Infused with high-volume proximity phrases like "computer training center near me"
  description:
    "Looking for the best computer training center near me in Port Harcourt? Learn to code with Yelocode Systems' intensive 32-week full stack web development bootcamp.",

  authors: [{ name: "Yelocode Systems", url: "https://yelocodesys.com" }],
  creator: "Yelocode Systems",
  publisher: "Yelocode Systems",
  metadataBase: new URL("https://yelocodesys.com"),

  openGraph: {
    title: "Best Tech School in Port Harcourt | Yelocode Systems",
    description:
      "Join the top-rated coding bootcamp in Port Harcourt. Master full stack web development with 30+ practical projects in 32 weeks. Enroll at No. 11 Elekahia.",
    url: "https://yelocodesys.com",
    siteName: "Yelocode Systems",
    images: [
      {
        url: "/og-webdevelopment.png",
        width: 1200,
        height: 630,
        alt: "Yelocode Systems - Best Computer Training Center in Port Harcourt",
      },
    ],
    locale: "en_NG",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Best Tech Schools in Port Harcourt | Yelocode Systems Bootcamp",
    description:
      "Top computer training center in Port Harcourt. Learn full stack web development and software engineering in 32 weeks.",
    images: ["/twitter-webdevelopment.png"],
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

  verification: {
    google: "ADD_YOUR_GOOGLE_VERIFICATION_CODE_HERE",
  },
};

export default function Home() {
  // Enhanced JSON-LD Schema with complete properties for rich results
  const localSchoolSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://yelocodesys.com#organization",
        "name": "Yelocode Systems",
        "url": "https://yelocodesys.com",
        "logo": "https://yelocodesys.com/pics/200.jpg",
        "image": "https://yelocodesys.com/pics/200.jpg",
        "sameAs": [
          "https://twitter.com/yelocode",
          "https://facebook.com/yelocode",
          "https://linkedin.com/company/yelocode",
          "https://instagram.com/yelocode"
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+2349162865693",
          "email": "admissions@yelocodesys.com",
          "contactType": "admissions"
        }
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://yelocodesys.com#localbusiness",
        "name": "Yelocode Systems",
        "image": "https://yelocodesys.com/pics/200.jpg",
        "telephone": "+2349162865693",
        "email": "admissions@yelocodesys.com",
        "priceRange": "$$",
        "url": "https://yelocodesys.com",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "No. 11 Elekahia",
          "addressLocality": "Port Harcourt",
          "addressRegion": "Rivers State",
          "addressCountry": "NG"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "4.8146",
          "longitude": "7.0243"
        },
        "areaServed": {
          "@type": "City",
          "name": "Port Harcourt",
          "sameAs": "https://en.wikipedia.org/wiki/Port_Harcourt"
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
        "sameAs": [
          "https://twitter.com/yelocode",
          "https://facebook.com/yelocode",
          "https://linkedin.com/company/yelocode"
        ]
      },
      {
        "@type": "Course",
        "@id": "https://yelocodesys.com#course",
        "name": "Full Stack Web Development Bootcamp in Port Harcourt",
        "description": "Comprehensive 32-week full stack web development training program in Port Harcourt, Nigeria. Learn HTML, CSS, JavaScript, React, Node.js, TypeScript, MongoDB, PostgreSQL with 30+ practical projects at the premier tech hub.",
        "provider": {
          "@type": "LocalBusiness",
          "@id": "https://yelocodesys.com#localbusiness",
          "name": "Yelocode Systems"
        },
        "timeRequired": "P32W",
        "teaches": [
          "HTML5",
          "CSS3",
          "JavaScript ES6+",
          "TypeScript",
          "React.js",
          "Next.js",
          "Redux",
          "Node.js",
          "Express.js",
          "MongoDB",
          "PostgreSQL",
          "GraphQL",
          "REST APIs",
          "Git & GitHub",
          "Docker",
          "AWS Cloud",
          "Tailwind CSS",
          "Jest Testing",
          "CI/CD",
          "System Design"
        ],
        "educationalCredentialAwarded": "Full Stack Web Developer Certificate",
        "occupationalCredentialAwarded": "Full Stack Web Developer",
        "hasCourseInstance": {
          "@type": "CourseInstance",
          "courseMode": "onsite",
          "location": {
            "@type": "Place",
            "name": "Yelocode Systems Training Center",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "No. 11 Elekahia",
              "addressLocality": "Port Harcourt",
              "addressRegion": "Rivers State",
              "addressCountry": "NG"
            }
          }
        },
        "offers": {
          "@type": "Offer",
          "category": "Paid",
          "priceSpecification": {
            "@type": "PriceSpecification",
            "priceCurrency": "NGN"
          }
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is Web Development?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Web development is the process of building websites and web applications that run on the internet. It involves frontend development (what users see and interact with), backend development (server-side logic and databases), and full-stack development (both frontend and backend). Web developers use languages like HTML, CSS, and JavaScript to create everything from simple static pages to complex interactive applications."
            }
          },
          {
            "@type": "Question",
            "name": "Why should I learn Web Development in Port Harcourt?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Learning web development at Yelocode Systems in Port Harcourt offers high demand from businesses, excellent salary potential, remote work flexibility, quick career entry in 32 weeks, creative problem-solving skills, job security in a growing field, and entrepreneurship opportunities."
            }
          },
          {
            "@type": "Question",
            "name": "What is the best roadmap to become a web developer in Nigeria?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Start with HTML, CSS, and JavaScript fundamentals. Learn version control with Git. Master responsive design. Choose a frontend framework like React. Learn backend with Node.js and Express. Master databases (MongoDB and PostgreSQL). Understand deployment and DevOps. Build projects at every stage. Our 32-week course covers this complete roadmap with 30+ hands-on projects."
            }
          },
          {
            "@type": "Question",
            "name": "Do I need any prior experience to enroll in this coding bootcamp?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No prior experience is required. This course is designed for complete beginners. The only prerequisites are basic computer literacy, a willingness to learn, and dedication to practice regularly."
            }
          },
          {
            "@type": "Question",
            "name": "What is the time commitment for this full stack developer course?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We recommend 15-20 hours per week for 32 weeks. This includes live sessions and hands-on coding with 30+ projects, giving you extensive practical experience for software development jobs."
            }
          },
          {
            "@type": "Question",
            "name": "What technologies will I master in this web developer certification program?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "You'll master HTML5, CSS3, JavaScript ES6+, TypeScript, React.js, Next.js, Redux, Node.js, Express.js, MongoDB, PostgreSQL, GraphQL, Docker, AWS, Git/GitHub, REST APIs, JWT Authentication, Tailwind CSS, CI/CD, Testing with Jest, and more."
            }
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://yelocodesys.com"
          }
        ]
      }
    ]
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localSchoolSchema) }}
      />
      
      <Content />
      <Footer />
    </main>
  );
}