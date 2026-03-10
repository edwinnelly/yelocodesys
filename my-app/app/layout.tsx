import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ClientLayout from "./client-layout";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Yelocode Systems | Tech Training & Software Development in Port Harcourt",
    template: "%s | Yelocode Systems",
  },

  description:
    "Yelocode Systems is a technology training and software development company in Port Harcourt, Nigeria. Learn programming, cybersecurity, data science, DevOps, UI/UX design, and digital marketing from industry professionals.",

  keywords: [
    "Yelocode Systems",
    "coding school Port Harcourt",
    "software development Nigeria",
    "programming training Port Harcourt",
    "cybersecurity training Nigeria",
    "data science training Nigeria",
    "DevOps training Nigeria",
    "tech academy Port Harcourt",
  ],

  authors: [{ name: "Yelocode Systems" }],
  creator: "Yelocode Systems",
  publisher: "Yelocode Systems",

  metadataBase: new URL("https://yelocode.com"),

  openGraph: {
    title: "Yelocode Systems | Technology Training in Nigeria",
    description:
      "Start your tech career with Yelocode Systems. Professional training in software engineering, cybersecurity, data science, DevOps, and digital marketing in Port Harcourt.",
    url: "https://yelocode.com",
    siteName: "Yelocode Systems",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Yelocode Systems Technology Training",
      },
    ],
    locale: "en_NG",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Yelocode Systems | Tech Training",
    description:
      "Learn high-income tech skills in Port Harcourt with Yelocode Systems.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} antialiased`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}