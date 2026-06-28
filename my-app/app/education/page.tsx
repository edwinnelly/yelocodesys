import type { Metadata } from "next";
import Footer from "../components/footer";
import Content from "./content";

export const metadata: Metadata = {
  title: {
    default: "Best Tech School in Port Harcourt | Coding Bootcamp & IT Training | Yelocode Systems",
    template: "%s | Yelocode Systems",
  },

  description:
    "Yelocode Systems is the best tech school and IT training center in Port Harcourt, Nigeria. We offer coding bootcamps, software engineering, cybersecurity, data analytics, and UI/UX design training with job placement at No. 11 Elekahia. Start your tech career today.",

  keywords: [
    "Yelocode Systems",
    "best tech school in port harcourt",
    "coding bootcamp port harcourt",
    "it training center in port harcourt",
    "computer training school in port harcourt",
    "data analytics training in port harcourt",
    "ui ux design training port harcourt",
    "software engineering academy in port harcourt",
    "cybersecurity training in port harcourt",
    "tech training in port harcourt with job placement",
    "affordable computer training centers in ph",
    "tech training Nigeria",
    "programming school Port Harcourt",
    "software development course Nigeria",
    "data science training Port Harcourt",
    "cybersecurity certification Nigeria",
    "Python programming Nigeria",
    "digital marketing training",
    "web development bootcamp",
    "DevOps training Nigeria",
    "cloud computing course",
    "tech school Port Harcourt",
    "coding classes Rivers State",
    "IT training Nigeria",
    "No. 11 Elekahia",
    "learn to code Port Harcourt",
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
    title: "Best Tech School in Port Harcourt | Coding Bootcamps & IT Training | Yelocode Systems",
    description:
      "Launch your tech career at the best tech school in Port Harcourt. We offer coding bootcamps, software engineering, cybersecurity, data analytics, and UI/UX design training with job placement. Learn from industry experts at No. 11 Elekahia.",
    url: "https://yelocodesys.com/education",
    siteName: "Yelocode Systems",
    images: [
      {
        url: "/og-education.png",
        width: 1200,
        height: 630,
        alt: "Yelocode Systems coding bootcamp - Web development, cybersecurity, data analytics, and UI/UX design training center at No. 11 Elekahia Port Harcourt Nigeria",
      },
    ],
    locale: "en_NG",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Best Tech School in Port Harcourt | Yelocode Systems",
    description:
      "Join the best coding bootcamp in Port Harcourt. Software engineering, cybersecurity, data analytics, and UI/UX design training with job placement.",
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

  verification: {
    google: "VERIFIED",
  },
};

export default function Home() {
  // Complete JSON-LD Schema with ALL 9 courses, FAQ, Reviews, and Breadcrumbs
  const educationSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "EducationalOrganization",
        "@id": "https://yelocodesys.com/education#organization",
        "name": "Yelocode Systems",
        "url": "https://yelocodesys.com/education",
        "logo": "https://yelocodesys.com/pics/200.jpg",
        "image": "https://yelocodesys.com/og-education.png",
        "description": "Best tech school and IT training center in Port Harcourt, Nigeria offering coding bootcamps, software engineering, cybersecurity, data analytics, UI/UX design, mobile development, cloud computing, Python programming, and digital marketing training with job placement.",
        "telephone": "+2349162865693",
        "email": "info@yelocodesys.com",
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
          "https://linkedin.com/company/yelocode",
          "https://instagram.com/yelocode"
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+2349162865693",
          "email": "info@yelocodesys.com",
          "contactType": "admissions",
          "availableLanguage": ["English"]
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "reviewCount": "1675",
          "bestRating": "5"
        }
      },
      {
        "@type": "ItemList",
        "name": "Tech Training Programs at Yelocode Systems",
        "description": "Complete list of 9 tech courses offered at Yelocode Systems training center in Port Harcourt, Nigeria",
        "numberOfItems": 9,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "item": {
              "@type": "Course",
              "@id": "https://yelocodesys.com/education#course-web-dev",
              "name": "Full Stack Web Development Bootcamp",
              "description": "Comprehensive 12-32 week full stack web development training covering HTML5, CSS3, JavaScript, React, Node.js, TypeScript, MongoDB with 30+ practical projects and job placement support at the best tech school in Port Harcourt.",
              "provider": {
                "@type": "EducationalOrganization",
                "@id": "https://yelocodesys.com/education#organization",
                "name": "Yelocode Systems"
              },
              "timeRequired": "P32W",
              "educationalCredentialAwarded": "Full Stack Web Developer Certificate",
              "occupationalCredentialAwarded": "Full Stack Web Developer",
              "teaches": [
                "HTML5",
                "CSS3",
                "JavaScript ES6+",
                "React.js",
                "Node.js",
                "MongoDB",
                "Express.js",
                "Git & GitHub"
              ],
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
            }
          },
          {
            "@type": "ListItem",
            "position": 2,
            "item": {
              "@type": "Course",
              "@id": "https://yelocodesys.com/education#course-data-science",
              "name": "Data Science & AI Training",
              "description": "Comprehensive 16-21 week data science and artificial intelligence training covering Python, Pandas, Machine Learning, TensorFlow, and SQL at Yelocode Systems Port Harcourt.",
              "provider": {
                "@type": "EducationalOrganization",
                "@id": "https://yelocodesys.com/education#organization",
                "name": "Yelocode Systems"
              },
              "educationalCredentialAwarded": "Data Science Professional Certificate",
              "teaches": [
                "Python Programming",
                "Pandas",
                "Machine Learning",
                "TensorFlow",
                "SQL",
                "Deep Learning",
                "Data Visualization",
                "Statistical Analysis"
              ],
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
            }
          },
          {
            "@type": "ListItem",
            "position": 3,
            "item": {
              "@type": "Course",
              "@id": "https://yelocodesys.com/education#course-data-analysis",
              "name": "Data Analysis & AI Training",
              "description": "Practical 12-16 week data analytics training in Port Harcourt covering Python, SQL, data visualization, machine learning, and business intelligence.",
              "provider": {
                "@type": "EducationalOrganization",
                "@id": "https://yelocodesys.com/education#organization",
                "name": "Yelocode Systems"
              },
              "educationalCredentialAwarded": "Data Analytics Professional Certificate",
              "teaches": [
                "Python",
                "SQL",
                "Data Visualization",
                "Machine Learning",
                "Power BI",
                "Excel Analytics",
                "Statistical Analysis"
              ],
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
            }
          },
          {
            "@type": "ListItem",
            "position": 4,
            "item": {
              "@type": "Course",
              "@id": "https://yelocodesys.com/education#course-uiux",
              "name": "UI/UX Design Professional Training",
              "description": "Comprehensive 10-week UI/UX design training covering user research, wireframing, prototyping, design systems, and Figma at Yelocode Systems Port Harcourt.",
              "provider": {
                "@type": "EducationalOrganization",
                "@id": "https://yelocodesys.com/education#organization",
                "name": "Yelocode Systems"
              },
              "educationalCredentialAwarded": "UI/UX Design Professional Certificate",
              "teaches": [
                "Figma",
                "User Research",
                "Prototyping",
                "Wireframing",
                "Design Systems",
                "Usability Testing"
              ],
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
            }
          },
          {
            "@type": "ListItem",
            "position": 5,
            "item": {
              "@type": "Course",
              "@id": "https://yelocodesys.com/education#course-mobile",
              "name": "Mobile App Development Training",
              "description": "16-week cross-platform mobile development training covering Flutter, React Native, Firebase, and API integration at the best IT training center in Port Harcourt.",
              "provider": {
                "@type": "EducationalOrganization",
                "@id": "https://yelocodesys.com/education#organization",
                "name": "Yelocode Systems"
              },
              "educationalCredentialAwarded": "Mobile Developer Certificate",
              "teaches": [
                "Flutter",
                "React Native",
                "Firebase",
                "API Integration",
                "App Store Deployment",
                "Cross-Platform Development"
              ],
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
            }
          },
          {
            "@type": "ListItem",
            "position": 6,
            "item": {
              "@type": "Course",
              "@id": "https://yelocodesys.com/education#course-cybersecurity",
              "name": "Cybersecurity Training & Certification",
              "description": "26-week hands-on cybersecurity training covering network security, ethical hacking, penetration testing, and security operations at Port Harcourt's best tech school.",
              "provider": {
                "@type": "EducationalOrganization",
                "@id": "https://yelocodesys.com/education#organization",
                "name": "Yelocode Systems"
              },
              "educationalCredentialAwarded": "Cybersecurity Professional Certificate",
              "teaches": [
                "Network Security",
                "Ethical Hacking",
                "Penetration Testing",
                "Security Audits",
                "Compliance",
                "Vulnerability Assessment"
              ],
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
            }
          },
          {
            "@type": "ListItem",
            "position": 7,
            "item": {
              "@type": "Course",
              "@id": "https://yelocodesys.com/education#course-cloud",
              "name": "Cloud Computing Training",
              "description": "12-week cloud computing training covering AWS, Azure, DevOps, Docker, and Kubernetes at Yelocode Systems Port Harcourt.",
              "provider": {
                "@type": "EducationalOrganization",
                "@id": "https://yelocodesys.com/education#organization",
                "name": "Yelocode Systems"
              },
              "educationalCredentialAwarded": "Cloud Computing Certificate",
              "teaches": [
                "AWS",
                "Azure",
                "DevOps",
                "Docker",
                "Kubernetes",
                "Cloud Architecture"
              ],
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
            }
          },
          {
            "@type": "ListItem",
            "position": 8,
            "item": {
              "@type": "Course",
              "@id": "https://yelocodesys.com/education#course-python",
              "name": "Python Programming Training",
              "description": "16-week beginner-friendly Python programming training covering Python basics, OOP, APIs, data structures, and automation at the best computer training school in Port Harcourt.",
              "provider": {
                "@type": "EducationalOrganization",
                "@id": "https://yelocodesys.com/education#organization",
                "name": "Yelocode Systems"
              },
              "educationalCredentialAwarded": "Python Developer Certificate",
              "teaches": [
                "Python Basics",
                "Object-Oriented Programming",
                "APIs",
                "Data Structures",
                "Automation",
                "Web Scraping"
              ],
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
            }
          },
          {
            "@type": "ListItem",
            "position": 9,
            "item": {
              "@type": "Course",
              "@id": "https://yelocodesys.com/education#course-digital-marketing",
              "name": "Digital Marketing Training",
              "description": "12-week beginner-friendly digital marketing training covering SEO, social media marketing, content marketing, Google Ads, and analytics at Yelocode Systems Port Harcourt.",
              "provider": {
                "@type": "EducationalOrganization",
                "@id": "https://yelocodesys.com/education#organization",
                "name": "Yelocode Systems"
              },
              "educationalCredentialAwarded": "Digital Marketing Certificate",
              "teaches": [
                "SEO",
                "Social Media Marketing",
                "Content Marketing",
                "Google Ads",
                "Analytics",
                "Email Marketing"
              ],
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
            }
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Do I need any prior experience to enroll?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No! Our beginner-friendly programs are designed for complete beginners. We start from the fundamentals at our coding bootcamp in Port Harcourt and gradually build up to advanced concepts."
            }
          },
          {
            "@type": "Question",
            "name": "What is the time commitment per week?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We recommend 15-20 hours per week for part-time programs and 30-40 hours for full-time bootcamps. This includes live sessions, self-study, and project work."
            }
          },
          {
            "@type": "Question",
            "name": "Will I receive a certificate upon completion?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes! All graduates receive an industry-recognized certificate from Yelocode Systems, the best tech school in Port Harcourt."
            }
          },
          {
            "@type": "Question",
            "name": "Do you offer payment plans or scholarships?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Absolutely! We offer flexible payment plans and have scholarships available. We're the most affordable computer training center in PH."
            }
          },
          {
            "@type": "Question",
            "name": "What job placement assistance do you provide?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We provide tech training in Port Harcourt with job placement including resume reviews, LinkedIn optimization, mock interviews, and access to our job board with partner companies."
            }
          },
          {
            "@type": "Question",
            "name": "Can I attend online or in-person?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Both! We offer online, hybrid, and in-person options at our IT training center in Port Harcourt at No. 11 Elekahia."
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
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Education & Tech Training",
            "item": "https://yelocodesys.com/education"
          }
        ]
      }
    ]
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(educationSchema) }}
      />
      <Content />
      <Footer />
    </main>
  );
}