import type { Metadata } from "next";
import Hero from "../components/hero";
import Footer from "../components/footer";
import Content from "./content";

export const metadata: Metadata = {
  title: {
    default:
      "Data Analysis Course | Excel, SQL, Python & Power BI Training in Port Harcourt | Yelocode Systems",
    template: "%s | Yelocode Systems",
  },

  description:
    "Master Data Analysis at Yelocode Systems in Port Harcourt. Learn Excel, SQL, Python, Power BI, and data visualization with real-world projects. Transform raw data into actionable insights. Beginner-friendly. Enroll now at No. 11 Elekahia.",

  keywords: [
    // Brand
    "Yelocode Systems",
    "yelocodesys.com",

    // Course specific
    "data analysis course Port Harcourt",
    "data analytics training Nigeria",
    "Excel course Port Harcourt",
    "SQL training Rivers State",
    "Power BI certification Nigeria",
    "data visualization course Port Harcourt",

    // Excel & Spreadsheets
    "Microsoft Excel training",
    "advanced Excel course",
    "Excel formulas and functions",
    "pivot tables training",
    "Excel dashboard course",

    // SQL & Databases
    "SQL course Port Harcourt",
    "database management training",
    "MySQL course Nigeria",
    "PostgreSQL training",
    "SQL queries for data analysis",

    // Python for Data Analysis
    "Python for data analysis",
    "Pandas course Nigeria",
    "NumPy training Port Harcourt",
    "Python data cleaning course",
    "Jupyter notebooks training",

    // Data Visualization
    "Power BI training Port Harcourt",
    "Tableau course Nigeria",
    "data visualization tools",
    "business intelligence course",
    "interactive dashboards training",

    // Business Intelligence
    "business intelligence analyst course",
    "BI tools training Nigeria",
    "data storytelling course",
    "KPI dashboard training",
    "business analytics course",

    // Statistics & Analytics
    "statistical analysis course",
    "descriptive statistics training",
    "data mining course",
    "exploratory data analysis",
    "predictive analytics basics",

    // Career Outcomes
    "become data analyst",
    "data analyst career Nigeria",
    "business analyst training",
    "data analytics jobs Port Harcourt",
    "data analyst certification",

    // Location
    "Port Harcourt",
    "No. 11 Elekahia",
    "Rivers State",
    "Nigeria",

    // Program specifics
    "hands-on data analysis projects",
    "real-world dataset training",
    "mentor-led analytics course",
    "data analysis certification Nigeria",
  ],

  authors: [
    { name: "Yelocode Systems", url: "https://yelocodesys.com/aboutus" },
  ],
  creator: "Yelocode Systems",
  publisher: "Yelocode Systems",

  metadataBase: new URL("https://yelocodesys.com"),

  openGraph: {
    title:
      "Data Analysis Course | Excel, SQL, Python & Power BI | Yelocode Systems Port Harcourt",
    description:
      "Join Yelocode Systems' Data Analysis course in Port Harcourt. Master Excel, SQL, Python, Power BI, and data visualization with real-world projects. Transform data into insights. Start your analytics career at No. 11 Elekahia.",
    url: "https://yelocodesys.com/data-analysis-ai",
    siteName: "Yelocode Systems",
    images: [
      {
        url: "/og-data-analysis.png",
        width: 1200,
        height: 630,
        alt: "Yelocode Systems Data Analysis Course in Port Harcourt - Excel, SQL, Python & Power BI Training",
      },
    ],
    locale: "en_NG",
    type: "website",
    phoneNumbers: ["+2349162865693"],
    countryName: "Nigeria",
  },

  twitter: {
    card: "summary_large_image",
    title: "Data Analysis Course | Yelocode Systems",
    description:
      "Learn Data Analysis in Port Harcourt. Master Excel, SQL, Python, Power BI, and data visualization with real-world projects. No experience required. Enroll now!",
    images: ["/twitter-data-analysis.png"],
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
    canonical: "https://yelocodesys.com/data-analysis-ai",
  },

  // Structured data for Data Analysis course
  other: {
    "og:type": "website",
    "og:see_also": "https://yelocodesys.com/coursecatalog",
    "course:title": "Data Analysis Course",
    "course:description":
      "Comprehensive Data Analysis course covering Excel, SQL, Python, Power BI, and data visualization. Learn to clean, analyze, and visualize data with real-world projects. Perfect for aspiring data analysts and business intelligence professionals.",
    "course:duration": "10 weeks | 12 weeks | 16 weeks available",
    "course:numberOfProjects": "25+ real-world projects",
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

    // Data Analysis specific structured data
    "course:skills":
      "Microsoft Excel, SQL, Python, Pandas, NumPy, Power BI, Tableau, Data Cleaning, Data Visualization, Exploratory Data Analysis, Statistical Analysis, Dashboard Creation, Report Generation",
    "course:careers":
      "Data Analyst, Business Intelligence Analyst, Data Visualization Specialist, Analytics Consultant, Operations Analyst, Marketing Analyst, Financial Analyst",
    "course:prerequisites":
      "Basic computer literacy, no prior programming experience required",
    "course:mode": "In-person at No. 11 Elekahia, Port Harcourt | Hybrid options available",
    "course:tools":
      "Excel, SQL Server, MySQL, Python, Jupyter Notebook, Power BI, Tableau, Google Sheets",
    "course:certification": "Industry-recognized Data Analysis Certification from Yelocode Systems",
    "course:learning_outcomes":
      "Clean and prepare data for analysis, Write complex SQL queries, Create interactive dashboards, Perform statistical analysis, Visualize data effectively, Present insights to stakeholders",
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