import type { Metadata } from "next";
import Hero from "../components/hero";
import Footer from "../components/footer";
import Content from "./content";

export const metadata: Metadata = {
  title: {
    default: "Cloud Computing Bootcamp | AWS, Azure, GCP in Port Harcourt | Yelocode Systems",
    template: "%s | Yelocode Systems",
  },

  description:
    "Master Cloud Computing at Yelocode Systems in Port Harcourt. 12-week intensive bootcamp with 30+ hands-on projects. Learn AWS, Azure, Google Cloud, Docker, Kubernetes, and DevOps. No prior experience required. Enroll now at No. 11 Elekahia.",

  keywords: [
    // Brand
    "Yelocode Systems",
    "yelocodesys.com",
    
    // Course specific
    "cloud computing bootcamp Port Harcourt",
    "AWS course Nigeria",
    "Azure training Port Harcourt",
    "Google Cloud certification Rivers State",
    "DevOps bootcamp Nigeria",
    "cloud engineering course",
    
    // Cloud platforms
    "Amazon Web Services training",
    "Microsoft Azure course",
    "Google Cloud Platform certification",
    "AWS Port Harcourt",
    "Azure Nigeria",
    "GCP training",
    
    // DevOps & Tools
    "Docker course",
    "Kubernetes training",
    "Terraform course",
    "Jenkins training",
    "CI/CD pipeline course",
    "Infrastructure as Code",
    
    // Cloud concepts
    "cloud architecture",
    "cloud security",
    "serverless computing",
    "microservices",
    "containerization",
    "cloud migration",
    
    // Certifications
    "AWS certification preparation",
    "Azure certification training",
    "Google Cloud certification",
    "CKA certification",
    "Terraform Associate",
    
    // Career outcomes
    "become cloud engineer",
    "cloud architect career",
    "DevOps engineer Nigeria",
    "cloud computing jobs",
    "cloud salary Nigeria",
    
    // Location
    "Port Harcourt",
    "No. 11 Elekahia",
    "Rivers State",
    "Nigeria",
    
    // Program specifics
    "12-week coding bootcamp",
    "hands-on cloud projects",
    "cloud certification",
    "mentor-led cloud training",
    "multi-cloud training",
  ],

  authors: [{ name: "Yelocode Systems", url: "https://yelocodesys.com/aboutus" }],
  creator: "Yelocode Systems",
  publisher: "Yelocode Systems",

  metadataBase: new URL("https://yelocodesys.com"),

  openGraph: {
    title: "Cloud Computing Bootcamp | AWS, Azure, GCP | Yelocode Systems Port Harcourt",
    description:
      "Join Yelocode Systems' 12-week cloud computing bootcamp in Port Harcourt. Master AWS, Azure, Google Cloud, and DevOps with 30+ hands-on projects. Learn Docker, Kubernetes, Terraform, and cloud architecture. Start your cloud career at No. 11 Elekahia.",
    url: "https://yelocodesys.com/cloud-computing",
    siteName: "Yelocode Systems",
    images: [
      {
        url: "/og-cloud.png",
        width: 1200,
        height: 630,
        alt: "Yelocode Systems Cloud Computing Bootcamp in Port Harcourt - Master AWS, Azure, and GCP",
      },
    ],
    locale: "en_NG",
    type: "website",
    phoneNumbers: ["+2349162865693"],
    countryName: "Nigeria",
  },

  twitter: {
    card: "summary_large_image",
    title: "Cloud Computing Bootcamp | Yelocode Systems",
    description:
      "Master AWS, Azure, and Google Cloud in Port Harcourt. 12-week bootcamp with 30+ hands-on projects. No experience required.",
    images: ["/twitter-cloud.png"],
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
    canonical: "https://yelocodesys.com/cloud-computing",
  },

  // Structured data for course
  other: {
    "og:type": "website",
    "og:see_also": "https://yelocodesys.com/coursecatalog",
    "course:title": "Cloud Computing Bootcamp",
    "course:description": "12-week intensive cloud computing bootcamp with 30+ hands-on projects. Master AWS, Azure, Google Cloud, Docker, Kubernetes, Terraform, and DevOps practices.",
    "course:duration": "12 weeks",
    "course:numberOfProjects": "30+",
    "course:difficulty": "Beginner to Advanced",
    "course:prerequisites": "Basic computer literacy, No prior cloud experience required",
    "course:learning_outcomes": "Master AWS, Azure, and GCP; Deploy infrastructure as code; Containerize applications with Docker; Orchestrate with Kubernetes; Implement CI/CD pipelines; Design cloud architectures; Prepare for cloud certifications",
    
    // Business information
    "business:contact_data:street_address": "No. 11 Elekahia",
    "business:contact_data:locality": "Port Harcourt",
    "business:contact_data:region": "Rivers State",
    "business:contact_data:country_name": "Nigeria",
    "business:contact_data:phone_number": "+2349162865693",
    "business:contact_data:email": "admissions@yelocodesys.com",
    
    // Business hours
    "business:hours:day:1": "Monday 9:00 AM - 6:00 PM",
    "business:hours:day:2": "Tuesday 9:00 AM - 6:00 PM",
    "business:hours:day:3": "Wednesday 9:00 AM - 6:00 PM",
    "business:hours:day:4": "Thursday 9:00 AM - 6:00 PM",
    "business:hours:day:5": "Friday 9:00 AM - 6:00 PM",
    "business:hours:day:6": "Saturday 10:00 AM - 4:00 PM",
    "business:hours:day:7": "Sunday Closed",
    
    // Course specific structured data
    "cloud:platforms": "AWS, Microsoft Azure, Google Cloud Platform",
    "cloud:tools": "Docker, Kubernetes, Terraform, Jenkins, GitHub Actions, Ansible, Prometheus, Grafana",
    "cloud:certifications": "AWS Solutions Architect, Azure Administrator, Google Associate Cloud Engineer, CKA, Terraform Associate",
    "cloud:projects": "Static Website Hosting, Web App Deployment, Data Processing Pipeline, Infrastructure as Code, Microservices, Kubernetes Cluster, CI/CD Pipeline, Serverless API, Multi-Region Deployment, Disaster Recovery",
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