// app/promo/page.tsx
import Hero from "../components/hero";
import Footer from "../components/footer";
import PromoContent from "./content";

import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: {
    default: "Yelocode Systems | 27% OFF Flash Sale - Limited Time Tech Training Discount",
    template: "%s | Yelocode Systems",
  },

  description:
    "🚀 LIMITED TIME: Get 27% OFF all tech training programs at Yelocode Systems in Port Harcourt! Web Development, Data Science, Cybersecurity, UI/UX Design and more. Offer ends in 14 days. Enroll now at No. 11 Elekahia, Port Harcourt. Don't miss this huge discount!",

  keywords: [
    // Brand & Promo
    "Yelocode Systems",
    "yelocodesys.com",
    "27% off tech training",
    "coding bootcamp discount Nigeria",
    "flash sale programming courses",
    "limited time offer tech training",
    "tech training sale Port Harcourt",
    
    // Course-specific promo
    "NOVA PRIME discount",
    "AXIS IGNITE promo code",
    "QUANTA ELITE sale price",
    "software development course discount",
    "data science training offer",
    "cybersecurity certification promo",
    "UI UX design course sale",
    "Python training discount Nigeria",
    "digital marketing course offer",
    "mobile app development sale",
    "cloud computing training discount",
    "database management course promo",
    
    // Value-driven
    "best value tech training Port Harcourt",
    "affordable coding bootcamp Nigeria",
    "cheap programming courses",
    "tech education discount",
    "flexible payment plans",
    "scholarship opportunities",
    
    // Urgency
    "limited time offer",
    "flash sale coding bootcamp",
    "14 day discount",
    "early bird tech training",
    
    // Location
    "Port Harcourt",
    "No. 11 Elekahia",
    "Rivers State",
    "Nigeria",
  ],

  authors: [{ name: "Yelocode Systems", url: "https://yelocodesys.com/aboutus" }],
  creator: "Yelocode Systems",
  publisher: "Yelocode Systems",

  metadataBase: new URL("https://yelocodesys.com"),

  openGraph: {
    title: "Yelocode Systems | 🚀 27% OFF Flash Sale - Limited Time Only!",
    description:
      "🔥 LIMITED TIME OFFER: Save 27% on all tech training programs at Yelocode Systems! Web Development, Data Science, Cybersecurity, UI/UX Design and more. Offer expires in 14 days. Located at No. 11 Elekahia, Port Harcourt.",
    url: "https://yelocodesys.com/promotions",
    siteName: "Yelocode Systems",
    images: [
      {
        url: "/og-promo-27.png",
        width: 1200,
        height: 630,
        alt: "Yelocode Systems - 27% OFF Flash Sale - Limited Time Tech Training Discount",
      },
    ],
    locale: "en_NG",
    type: "website",
    phoneNumbers: ["+2349162865693"],
    countryName: "Nigeria",
    emails: ["info@yelocodesys.com"],
  },

  twitter: {
    card: "summary_large_image",
    title: "Yelocode Systems | 27% OFF Flash Sale! 🚀",
    description:
      "Save 27% on all tech training programs! Web Development, Data Science, Cybersecurity, UI/UX Design. Limited time offer - ends in 14 days. Enroll now!",
    images: ["/twitter-promo-27.png"],
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
    canonical: "https://yelocodesys.com/promotions",
  },

  // JSON-LD Structured Data will be injected via a separate component
};

export default function PromoPage() {
  return (
    <>
      {/* TikTok Pixel Code */}
      <Script
        id="tiktok-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function (w, d, t) {
              w.TiktokAnalyticsObject=t;
              var ttq=w[t]=w[t]||[];
              ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie","holdConsent","revokeConsent","grantConsent"];
              ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};
              for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);
              ttq.instance=function(t){
                for(var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);
                return e
              };
              ttq.load=function(e,n){
                var r="https://analytics.tiktok.com/i18n/pixel/events.js",
                o=n&&n.partner;
                ttq._i=ttq._i||{},
                ttq._i[e]=[],
                ttq._i[e]._u=r,
                ttq._t=ttq._t||{},
                ttq._t[e]=+new Date,
                ttq._o=ttq._o||{},
                ttq._o[e]=n||{};
                n=document.createElement("script");
                n.type="text/javascript",
                n.async=!0,
                n.src=r+"?sdkid="+e+"&lib="+t;
                e=document.getElementsByTagName("script")[0];
                e.parentNode.insertBefore(n,e)
              };
              ttq.load('D6RT123C77UFCQ8ROHNG');
              ttq.page();
            }(window, document, 'ttq');
          `,
        }}
      />
      
      <main>
        {/* <Hero /> */}
        <PromoContent />
        <Footer />
      </main>
    </>
  );
}