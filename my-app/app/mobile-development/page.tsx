import type { Metadata } from "next";
import Hero from "../components/hero";
import Footer from "../components/footer";
import Content from "./content";

export const metadata: Metadata = {
  title: {
    default:
      "Mobile App Development Bootcamp | Android & iOS Course in Port Harcourt | Yelocode Systems",
    template: "%s | Yelocode Systems",
  },

  description:
    "Master Mobile App Development at Yelocode Systems in Port Harcourt. 16-week intensive bootcamp with 30+ hands-on projects. Learn Android (Kotlin), iOS (Swift), React Native, and Flutter. No experience required. Enroll now at No. 11 Elekahia.",

  keywords: [
    // Brand
    "Yelocode Systems",
    "yelocodesys.com",

    // Course specific
    "mobile app development bootcamp Port Harcourt",
    "android development course Nigeria",
    "iOS development training Port Harcourt",
    "app development course Rivers State",
    "mobile developer certification Nigeria",
    "cross platform app development bootcamp Port Harcourt",
    "react native training Port Harcourt",
    "flutter course Nigeria",

    // Android Development
    "Kotlin training Port Harcourt",
    "Android Studio course",
    "Android app development Nigeria",
    "Jetpack Compose training",
    "Room database course",
    "Material Design for Android",

    // iOS Development
    "Swift programming course",
    "iOS app development Port Harcourt",
    "SwiftUI training Nigeria",
    "Xcode course",
    "CoreData training",
    "iOS design patterns",

    // Cross-Platform
    "React Native bootcamp Port Harcourt",
    "Flutter development course Nigeria",
    "Dart programming language",
    "cross platform app development",
    "write once deploy anywhere",

    // Mobile Technologies
    "Firebase training Port Harcourt",
    "REST APIs mobile development",
    "mobile app database course",
    "push notifications training",
    "mobile payment integration",
    "Google Maps API course",
    "camera integration in apps",

    // App Store & Deployment
    "Google Play Console training",
    "App Store Connect course",
    "app publishing Nigeria",
    "mobile app monetization",
    "TestFlight testing",
    "Firebase App Distribution",

    // Career Outcomes
    "become mobile developer",
    "Android developer jobs Nigeria",
    "iOS developer career",
    "freelance app developer",
    "mobile app entrepreneur",

    // Location
    "Port Harcourt",
    "No. 11 Elekahia",
    "Rivers State",
    "Nigeria",

    // Program specifics
    "16-week mobile bootcamp",
    "hands-on app projects",
    "mobile development certification",
    "mentor-led app training",
    "portfolio of 30+ apps",
  ],

  authors: [
    { name: "Yelocode Systems", url: "https://yelocodesys.com/aboutus" },
  ],
  creator: "Yelocode Systems",
  publisher: "Yelocode Systems",

  metadataBase: new URL("https://yelocodesys.com"),

  openGraph: {
    title:
      "Mobile App Development Bootcamp | Android & iOS Course | Yelocode Systems Port Harcourt",
    description:
      "Join Yelocode Systems' 16-week Mobile App Development bootcamp in Port Harcourt. Master Android, iOS, and cross-platform development with 30+ hands-on projects. Learn Kotlin, Swift, React Native, and Flutter. Start your app development career at No. 11 Elekahia.",
    url: "https://yelocodesys.com/mobile-development",
    siteName: "Yelocode Systems",
    images: [
      {
        url: "/og-mobileapp.png",
        width: 1200,
        height: 630,
        alt: "Yelocode Systems Mobile App Development Bootcamp in Port Harcourt",
      },
    ],
    locale: "en_NG",
    type: "website",
    phoneNumbers: ["+2349162865693"],
    countryName: "Nigeria",
  },

  twitter: {
    card: "summary_large_image",
    title: "Mobile App Development Bootcamp | Yelocode Systems",
    description:
      "Learn Mobile App Development in Port Harcourt. 16-week bootcamp with 30+ projects. Master Android, iOS, React Native, and Flutter. No experience required.",
    images: ["/twitter-mobileapp.png"],
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
    canonical: "https://yelocodesys.com/mobile-development",
  },

  // Structured data for course
  other: {
    "og:type": "website",
    "og:see_also": "https://yelocodesys.com/coursecatalog",
    "course:title": "Mobile App Development Bootcamp",
    "course:description":
      "16-week intensive Mobile App Development bootcamp. Master Android (Kotlin), iOS (Swift), and cross-platform development (React Native, Flutter) with 30+ hands-on projects. Learn to build and deploy real-world apps to Google Play and App Store.",
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

    // Additional structured data specific to Mobile Development
    "course:skills":
      "Kotlin, Swift, React Native, Flutter, Dart, Java, JavaScript, Android Studio, Xcode, Firebase, Room Database, CoreData, REST APIs, GraphQL, Git, Material Design, SwiftUI, Jetpack Compose, Push Notifications, Google Maps, Camera API, Biometric Authentication, In-App Purchases",
    "course:careers":
      "Android Developer, iOS Developer, React Native Developer, Flutter Developer, Mobile App Developer, Cross-Platform Developer, Freelance App Developer, Mobile Tech Lead, App Entrepreneur, Mobile Solutions Architect",
    "course:prerequisites":
      "Basic computer literacy, logical thinking, no prior programming experience required",
    "course:mode": "In-person at No. 11 Elekahia, Port Harcourt",
    
    // Mobile-specific structured data
    "mobile:platforms": "Android, iOS, Cross-Platform (React Native, Flutter)",
    "mobile:tools": "Android Studio, Xcode, VS Code, Firebase, Git, Postman, Figma",
    "mobile:languages": "Kotlin, Swift, JavaScript, TypeScript, Dart",
    "mobile:features": "Camera, Location, Maps, Push Notifications, Biometrics, Offline Storage, Real-time Updates, Payments",
    "mobile:portfolio": "30+ real-world apps for professional portfolio including e-commerce, social media, food delivery, and utility apps",
    "mobile:certification": "Mobile App Development Professional Certificate",
    
    // Course outcomes
    "course:outcome:1": "Build native Android apps with Kotlin and Jetpack Compose",
    "course:outcome:2": "Create iOS apps with Swift and SwiftUI",
    "course:outcome:3": "Develop cross-platform apps with React Native and Flutter",
    "course:outcome:4": "Integrate Firebase, REST APIs, and third-party services",
    "course:outcome:5": "Implement camera, location, maps, and push notifications",
    "course:outcome:6": "Publish apps to Google Play Store and Apple App Store",
    "course:outcome:7": "Build a portfolio with 30+ professional apps",
    "course:outcome:8": "Master app testing, debugging, and performance optimization",
    
    // App categories covered
    "mobile:app_types": "E-commerce Apps, Social Media Apps, Food Delivery Apps, Fitness Trackers, Expense Managers, Weather Apps, News Apps, QR Scanner Apps, Maps & Navigation Apps, Chat Apps, Video Streaming Apps, Music Apps, Gaming Apps",
    
    // Clone apps students will build
    "mobile:clone_apps": "WhatsApp Clone, Instagram Clone, Spotify Clone, Uber Clone, Airbnb Clone, Amazon Clone, Twitter Clone, TikTok Clone",
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