import type { Metadata } from "next";
import Hero from "../components/hero";
import Footer from "../components/footer";
import Content from "./content";

export const metadata: Metadata = {
  title: {
    default:
      "Data Science & AI Bootcamp | Machine Learning Course in Port Harcourt | Yelocode Systems",
    template: "%s | Yelocode Systems",
  },

  description:
    "Master Data Science and Artificial Intelligence at Yelocode Systems in Port Harcourt. 16-week intensive bootcamp with 30+ hands-on projects. Learn Python, Machine Learning, Deep Learning, NLP, and LLMs. No experience required. Enroll now at No. 11 Elekahia.",

  keywords: [
    // Brand
    "Yelocode Systems",
    "yelocodesys.com",

    // Course specific
    "data science bootcamp Port Harcourt",
    "AI course Nigeria",
    "machine learning training Port Harcourt",
    "artificial intelligence course Rivers State",
    "data science certification Nigeria",
    "AI bootcamp Port Harcourt",

    // Python & Data Science
    "Python for data science",
    "Pandas training",
    "NumPy course",
    "data visualization with Python",
    "statistical analysis course",

    // Machine Learning
    "machine learning course Nigeria",
    "scikit-learn training",
    "regression analysis course",
    "classification algorithms",
    "clustering techniques",

    // Deep Learning & AI
    "deep learning course Port Harcourt",
    "TensorFlow training Nigeria",
    "neural networks course",
    "NLP training",
    "computer vision course",
    "large language models course",
    "generative AI training",

    // Specialized areas
    "time series analysis course",
    "recommendation systems training",
    "MLOps course",
    "big data analytics",
    "Apache Spark training",

    // Outcomes
    "become data scientist",
    "AI career Nigeria",
    "machine learning engineer jobs",
    "data analyst training",

    // Location
    "Port Harcourt",
    "No. 11 Elekahia",
    "Rivers State",
    "Nigeria",

    // Program specifics
    "16-week data science bootcamp",
    "hands-on AI projects",
    "data science certification",
    "mentor-led ML training",
  ],

  authors: [
    { name: "Yelocode Systems", url: "https://yelocodesys.com/aboutus" },
  ],
  creator: "Yelocode Systems",
  publisher: "Yelocode Systems",

  metadataBase: new URL("https://yelocodesys.com"),

  openGraph: {
    title:
      "Data Science & AI Bootcamp | Machine Learning Course | Yelocode Systems Port Harcourt",
    description:
      "Join Yelocode Systems' 16-week Data Science & AI bootcamp in Port Harcourt. Master machine learning, deep learning, and AI with 30+ hands-on projects. Learn Python, TensorFlow, NLP, and LLMs. Start your AI career at No. 11 Elekahia.",
    url: "https://yelocodesys.com/datascience",
    siteName: "Yelocode Systems",
    images: [
      {
        url: "/og-datascience.png",
        width: 1200,
        height: 630,
        alt: "Yelocode Systems Data Science & AI Bootcamp in Port Harcourt",
      },
    ],
    locale: "en_NG",
    type: "website",
    phoneNumbers: ["+2349162865693"],
    countryName: "Nigeria",
  },

  twitter: {
    card: "summary_large_image",
    title: "Data Science & AI Bootcamp | Yelocode Systems",
    description:
      "Learn Data Science and AI in Port Harcourt. 16-week bootcamp with 30+ projects. Master Python, ML, Deep Learning, and LLMs. No experience required.",
    images: ["/twitter-datascience.png"],
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
    canonical: "https://yelocodesys.com/datascience",
  },

  // Structured data for course
  other: {
    "og:type": "website",
    "og:see_also": "https://yelocodesys.com/coursecatalog",
    "course:title": "Data Science & AI Bootcamp",
    "course:description":
      "16-week intensive Data Science and Artificial Intelligence bootcamp. Master Python, Machine Learning, Deep Learning, NLP, Computer Vision, and LLMs with 30+ hands-on projects.",
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

    // Additional structured data specific to Data Science
    "course:skills":
      "Python, Pandas, NumPy, Scikit-learn, TensorFlow, PyTorch, NLP, Computer Vision, LLMs, SQL, Spark, MLOps",
    "course:careers":
      "Data Scientist, Machine Learning Engineer, AI Engineer, Data Analyst, ML Ops Engineer, Research Scientist",
    "course:prerequisites":
      "Basic computer literacy, no programming experience required",
    "course:mode": "In-person at No. 11 Elekahia, Port Harcourt",
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
