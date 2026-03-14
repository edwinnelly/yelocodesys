import type { Metadata } from "next";
import Hero from "../components/hero";
import Footer from "../components/footer";
import Content from "./content";

export const metadata: Metadata = {
  title: {
    default:
      "UI/UX Design Bootcamp | Product Design Course in Port Harcourt | Yelocode Systems",
    template: "%s | Yelocode Systems",
  },

  description:
    "Master UI/UX Design at Yelocode Systems in Port Harcourt. 16-week intensive bootcamp with 30+ hands-on projects. Learn Figma, user research, wireframing, prototyping, and design thinking. No experience required. Enroll now at No. 11 Elekahia.",

  keywords: [
    // Brand
    "Yelocode Systems",
    "yelocodesys.com",

    // Course specific
    "UI UX design bootcamp Port Harcourt",
    "product design course Nigeria",
    "user experience design training Port Harcourt",
    "user interface design course Rivers State",
    "UI design certification Nigeria",
    "UX design bootcamp Port Harcourt",
    "figma training Port Harcourt",

    // Design Fundamentals
    "UI UX design fundamentals",
    "design thinking course",
    "user research training",
    "wireframing and prototyping",
    "visual design principles",
    "color theory for designers",
    "typography in UI design",

    // Tools & Software
    "Figma training Nigeria",
    "Adobe XD course",
    "Sketch app training",
    "prototyping tools course",
    "design software training Port Harcourt",
    "Miro for wireframing",
    "Protopie training",

    // UX Specializations
    "user experience research",
    "usability testing course",
    "information architecture training",
    "interaction design course",
    "UX writing training",
    "accessibility in design",
    "user journey mapping",

    // UI Specializations
    "mobile app design course",
    "web design training Nigeria",
    "responsive design course",
    "design systems training",
    "micro-interactions design",
    "dashboard design course",
    "e-commerce design training",

    // Career Outcomes
    "become UI UX designer",
    "product design career Nigeria",
    "UX designer jobs",
    "UI designer training",
    "freelance designer course",
    "design portfolio development",
    "UX researcher career",

    // Location
    "Port Harcourt",
    "No. 11 Elekahia",
    "Rivers State",
    "Nigeria",

    // Program specifics
    "16-week design bootcamp",
    "hands-on design projects",
    "UI UX certification",
    "mentor-led design training",
    "portfolio development course",
    "design mentorship program",
  ],

  authors: [
    { name: "Yelocode Systems", url: "https://yelocodesys.com/aboutus" },
  ],
  creator: "Yelocode Systems",
  publisher: "Yelocode Systems",

  metadataBase: new URL("https://yelocodesys.com"),

  openGraph: {
    title:
      "UI/UX Design Bootcamp | Product Design Course | Yelocode Systems Port Harcourt",
    description:
      "Join Yelocode Systems' 16-week UI/UX Design bootcamp in Port Harcourt. Master user interface and experience design with 30+ hands-on projects. Learn Figma, user research, prototyping, and design thinking. Start your design career at No. 11 Elekahia.",
    url: "https://yelocodesys.com/uiuxdesign",
    siteName: "Yelocode Systems",
    images: [
      {
        url: "/og-uiuxdesign.png",
        width: 1200,
        height: 630,
        alt: "Yelocode Systems UI/UX Design Bootcamp in Port Harcourt",
      },
    ],
    locale: "en_NG",
    type: "website",
    phoneNumbers: ["+2349162865693"],
    countryName: "Nigeria",
  },

  twitter: {
    card: "summary_large_image",
    title: "UI/UX Design Bootcamp | Yelocode Systems",
    description:
      "Learn UI/UX Design in Port Harcourt. 16-week bootcamp with 30+ projects. Master Figma, user research, prototyping, and design thinking. No experience required.",
    images: ["/twitter-uiuxdesign.png"],
    site: "@yelocode",
    creator: "@yelocode",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },

  manifest: "/site.webmanifest",

  alternates: {
    canonical: "https://yelocodesys.com/uiuxdesign",
  },

  // Structured data for course
  other: {
    "og:type": "website",
    "og:see_also": "https://yelocodesys.com/coursecatalog",
    "course:title": "UI/UX Design Bootcamp",
    "course:description":
      "16-week intensive UI/UX Design bootcamp. Master user interface design, user experience research, prototyping, and design thinking with 30+ hands-on projects. Learn Figma, Adobe XD, and industry-standard design tools.",
    "course:duration": "16 weeks",
    "course:numberOfProjects": "30+",
    "course:difficulty": "Beginner to Advanced",
    "business:contact_data:street_address": "No. 11 Elekahia",
    "business:contact_data:locality": "Port Harcourt",
    "business:contact_data:region": "Rivers State",
    "business:contact_data:country_name": "Nigeria",
    "business:contact_data:phone_number": "+2349162865693",
    "business:contact_data:email": "admissions@yelocodesys.com",
    "business:hours:day:1": "Monday 9:00 AM - 6:00 PM",
    "business:hours:day:2": "Tuesday 9:00 AM - 6:00 PM",
    "business:hours:day:3": "Wednesday 9:00 AM - 6:00 PM",
    "business:hours:day:4": "Thursday 9:00 AM - 6:00 PM",
    "business:hours:day:5": "Friday 9:00 AM - 6:00 PM",
    "business:hours:day:6": "Saturday 10:00 AM - 4:00 PM",
    "business:hours:day:7": "Sunday Closed",

    // Additional structured data specific to UI/UX Design
    "course:skills":
      "Figma, Adobe XD, Sketch, User Research, Wireframing, Prototyping, Visual Design, Design Thinking, Information Architecture, Usability Testing, Interaction Design, UX Writing, Design Systems, Accessibility, Mobile Design, Web Design, Miro, Protopie, User Journey Mapping, Persona Creation",
    "course:careers":
      "UI/UX Designer, Product Designer, UX Researcher, UI Developer, Interaction Designer, Design Lead, Freelance Designer, Design Consultant, Product Manager, UX Writer, Design System Specialist, Mobile Designer",
    "course:prerequisites":
      "Basic computer literacy, creativity, passion for design, no prior design experience required",
    "course:mode": "In-person at No. 11 Elekahia, Port Harcourt",
    
    // Design-specific structured data
    "design:tools": "Figma, Adobe XD, Sketch, Miro, Protopie, InVision, Zeplin, Webflow, Maze, Notion",
    "design:specializations": "Mobile App Design, Web Design, Dashboard Design, E-commerce Design, Design Systems, SaaS Products, Enterprise Software",
    "design:portfolio": "30+ real-world projects for professional portfolio including mobile apps, websites, dashboards, and design systems",
    "design:certification": "UI/UX Design Professional Certificate",
    "design:methodologies": "Design Thinking, Double Diamond, Lean UX, Agile Design, User-Centered Design",
    
    // Course outcomes
    "course:outcome:1": "Master Figma and industry-standard design tools",
    "course:outcome:2": "Conduct user research and usability testing",
    "course:outcome:3": "Create wireframes and interactive prototypes",
    "course:outcome:4": "Build a professional design portfolio with 30+ projects",
    "course:outcome:5": "Understand design systems and component libraries",
    "course:outcome:6": "Design for web, mobile, and emerging technologies",
  },
};

export default function Home() {
  return (
    <main>
      <Content />
      <Footer />
    </main>
  );
}