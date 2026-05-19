"use client";
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  MapPin,
  Phone,
  ArrowRight,
  Heart,
  Globe,
  Facebook,
  Instagram,
  Send,
  ChevronDown,
  BookOpen,
  Users,
  Award,
} from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // Structured Data for Organization
  const organizationStructuredData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Yelocode Systems",
    "url": "https://yelocodesys.com",
    "logo": "https://yelocodesys.com/logo.png",
    "description": "Tech education and software development company in Port Harcourt, Nigeria offering coding bootcamps, web development, and IT training.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "No. 11 Elekahia",
      "addressLocality": "Port Harcourt",
      "addressRegion": "Rivers State",
      "addressCountry": "NG"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+2349162865693",
      "contactType": "customer service",
      "email": "info@yelocodesys.com",
      "availableLanguage": ["English"]
    },
    "sameAs": [
      "https://twitter.com/yelocode",
      "https://linkedin.com/company/yelocode",
      "https://github.com/yelocode",
      "https://facebook.com/yelocode",
      "https://instagram.com/yelocode"
    ],
    "openingHours": [
      "Mo-Fr 09:00-18:00",
      "Sa 10:00-16:00"
    ],
    "priceRange": "₦"
  };

  // Quick links for better SEO
  const quickLinks = [
    { name: "About Yelocode Systems", href: "/aboutus", ariaLabel: "Learn about Yelocode Systems in Port Harcourt" },
    { name: "Our Tech Programs", href: "/solutions", ariaLabel: "View our technology programs and courses" },
    { name: "Why Choose Yelocode", href: "/aboutus#why-choose-us", ariaLabel: "Reasons to choose Yelocode for tech training" },
    { name: "Success Stories", href: "/testimonials", ariaLabel: "Student success stories from Yelocode" },
    { name: "Tech Blog", href: "/blog", ariaLabel: "Read our tech blog and industry insights" },
    { name: "Careers at Yelocode", href: "/careers", ariaLabel: "Careers and job opportunities at Yelocode" },
    { name: "Become a Mentor", href: "/mentor", ariaLabel: "Become a tech mentor at Yelocode" },
    { name: "Partner With Us", href: "/partners", ariaLabel: "Partner with Yelocode Systems" },
  ];

  const programs = [
    { name: "Full Stack Web Development", href: "/courses/full-stack-development", location: "Port Harcourt" },
    { name: "Data Science & AI", href: "/courses/data-science-ai", location: "Nigeria" },
    { name: "Cloud Computing (AWS/Azure)", href: "/courses/cloud-computing" },
    { name: "Cybersecurity Certification", href: "/courses/cybersecurity" },
    { name: "UI/UX Design Course", href: "/courses/ui-ux-design" },
    { name: "Mobile App Development", href: "/courses/mobile-development" },
    { name: "Python Programming", href: "/courses/python-programming" },
    { name: "Digital Marketing", href: "/courses/digital-marketing" },
  ];

  const resources = [
    { name: "Free Course Catalog", href: "/coursecatalog", ariaLabel: "Download free course catalog" },
    { name: "Career Outcomes", href: "/career-outcomes", ariaLabel: "Student career outcomes and placement" },
    { name: "FAQ - Tech Training", href: "/faq", ariaLabel: "Frequently asked questions" },
    { name: "Scholarships & Funding", href: "/bootcampsapply", ariaLabel: "Tech scholarships and funding options" },
    { name: "Learning Resources", href: "/resources", ariaLabel: "Free tech learning resources" },
    { name: "Alumni Network", href: "/alumni", ariaLabel: "Yelocode alumni network" },
    { name: "Privacy Policy", href: "/privacy", ariaLabel: "Privacy policy" },
    { name: "Current Promotions", href: "/promotions", ariaLabel: "Current course promotions" },
  ];

  return (
    <>
      <footer 
        className="relative bg-gradient-to-b from-gray-900 to-black text-white pt-20 pb-8 overflow-hidden"
        aria-label="Yelocode Systems footer - Contact and navigation information"
      >
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5" aria-hidden="true">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        {/* Gradient orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl" aria-hidden="true" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" aria-hidden="true" />

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-16">
            {/* Column 1: Company Info */}
            <div className="col-span-1">
              <div className="mb-6">
                <div className="text-2xl font-bold text-white mb-4">
                  Yelocode Systems
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  Empowering the next generation of tech leaders through
                  innovative learning at <strong>No. 11 Elekahia, Port Harcourt</strong> and beyond.
                </p>

                {/* Contact Info - Structured for SEO */}
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-3 text-gray-400">
                    <MapPin className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                    <span>
                      No. 11 Elekahia, Port Harcourt, Rivers State, Nigeria
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-400">
                    <Phone className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                    <a href="tel:+2349162865693" className="hover:text-yellow-400 transition-colors">
                      +234 (0) 916 286 5693
                    </a>
                  </div>
                  <div className="flex items-center gap-3 text-gray-400">
                    <Mail className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                    <a href="mailto:info@yelocodesys.com" className="hover:text-yellow-400 transition-colors">
                      info@yelocodesys.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-3 mb-6">
                {[
                  { icon: Twitter, href: "https://twitter.com/yelocode", label: "Follow on Twitter", name: "Twitter" },
                  { icon: Linkedin, href: "https://linkedin.com/company/yelocode", label: "Connect on LinkedIn", name: "LinkedIn" },
                  { icon: Github, href: "https://github.com/yelocode", label: "Follow on GitHub", name: "GitHub" },
                  { icon: Facebook, href: "https://facebook.com/yelocode", label: "Like on Facebook", name: "Facebook" },
                  { icon: Instagram, href: "https://instagram.com/yelocode", label: "Follow on Instagram", name: "Instagram" },
                ].map((social, i) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={i}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 bg-gray-800/50 hover:bg-yellow-600 rounded-lg flex items-center justify-center transition-all hover:scale-110 group"
                      aria-label={social.label}
                    >
                      <Icon className="w-4 h-4 text-gray-400 group-hover:text-white" />
                      <span className="sr-only">{social.name}</span>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-yellow-400 mb-4">
                Quick Links
              </h4>
              <ul className="space-y-2">
                {quickLinks.map((item, i) => (
                  <li key={i}>
                    <Link
                      href={item.href}
                      className="text-sm text-gray-400 hover:text-yellow-400 transition-colors"
                      aria-label={item.ariaLabel}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Programs & Resources */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-yellow-400 mb-4">
                Tech Programs
              </h4>
              <ul className="space-y-2 mb-6">
                {programs.map((item, i) => (
                  <li key={i}>
                    <Link
                      href={item.href}
                      className="text-sm text-gray-400 hover:text-yellow-400 transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>

              <h4 className="text-sm font-semibold uppercase tracking-wider text-yellow-400 mb-4 mt-6">
                Resources
              </h4>
              <ul className="space-y-2">
                {resources.map((item, i) => (
                  <li key={i}>
                    <Link
                      href={item.href}
                      className="text-sm text-gray-400 hover:text-yellow-400 transition-colors"
                      aria-label={item.ariaLabel}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Contact & Updates */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-yellow-400 mb-4">
                Get In Touch
              </h4>

              {/* Quick Contact */}
              <div className="bg-gray-800/50 rounded-xl p-4 mb-6">
                <h5 className="font-medium text-white mb-2">Need assistance?</h5>
                <p className="text-xs text-gray-400 mb-3">
                  Our admissions team in Port Harcourt is here to help you start your tech journey
                </p>
                <a
                  href="mailto:admissions@yelocode.com"
                  className="text-sm text-yellow-400 hover:text-yellow-300 transition-colors flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  admissions@yelocode.com
                </a>
              </div>

              {/* Office Hours */}
              <div className="mb-6">
                <h5 className="text-sm font-medium text-white mb-2">
                  Office Hours (Port Harcourt)
                </h5>
                <p className="text-xs text-gray-400">
                  Monday - Friday: 9am - 6pm WAT
                </p>
                <p className="text-xs text-gray-400">Saturday: 10am - 4pm WAT</p>
                <p className="text-xs text-gray-400">Sunday: Closed</p>
              </div>

              {/* Download Brochure */}
              <Link
                href="/brochure.pdf"
                className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-yellow-400 transition-colors"
                aria-label="Download Yelocode Systems program brochure PDF"
              >
                <BookOpen className="w-4 h-4" />
                Download Free Program Brochure
              </Link>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="border-t border-gray-800 pt-12 pb-8">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              <div className="max-w-md">
                <h5 className="text-lg font-semibold text-white mb-2">
                  Stay in the Loop
                </h5>
                <p className="text-sm text-gray-400">
                  Get the latest updates on new courses, tech events in Port Harcourt, and industry insights
                  from Yelocode Systems.
                </p>
              </div>

              <div className="flex-1 max-w-md">
                <form 
                  className="flex gap-2"
                  action="/subscribe" 
                  method="POST"
                  aria-label="Newsletter subscription form"
                >
                  <div className="relative flex-1">
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your email address"
                      required
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500 transition-colors"
                      aria-label="Email address for newsletter"
                    />
                    <Mail className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" aria-hidden="true" />
                  </div>
                  <button 
                    type="submit"
                    className="px-6 py-3 bg-gradient-to-r from-yellow-600 to-yellow-500 text-white rounded-lg hover:shadow-lg hover:shadow-yellow-500/25 transition-all flex items-center gap-2 whitespace-nowrap"
                    aria-label="Subscribe to newsletter"
                  >
                    <Send className="w-4 h-4" />
                    Subscribe
                  </button>
                </form>
                <p className="text-xs text-gray-500 mt-2">
                  By subscribing, you agree to our Privacy Policy and consent to receive updates.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 mt-8 pt-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="text-sm text-gray-400">
                © {currentYear} <strong>Yelocode Systems</strong>. All rights reserved. 
                <span className="ml-1">Port Harcourt, Rivers State, Nigeria.</span>
              </div>

              <div className="flex flex-wrap items-center gap-6">
                {[
                  "Privacy Policy",
                  "Terms of Service",
                  "Cookie Policy",
                  "Accessibility",
                ].map((item, i) => (
                  <Link
                    key={i}
                    href={`/${item.toLowerCase().replace(/ /g, '-')}`}
                    className="text-xs text-gray-500 hover:text-yellow-400 transition-colors"
                  >
                    {item}
                  </Link>
                ))}
              </div>

              <div className="flex items-center gap-1 text-xs text-gray-500">
                <span>Made with</span>
                <Heart className="w-3 h-3 text-red-500" />
                <span>in Port Harcourt for learners worldwide</span>
              </div>
            </div>
          </div>

          {/* Back to top button */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="absolute right-8 bottom-8 w-10 h-10 bg-yellow-600 hover:bg-yellow-700 rounded-lg flex items-center justify-center transition-colors group shadow-lg"
            aria-label="Scroll back to top of page"
          >
            <ArrowRight className="w-5 h-5 text-white group-hover:-translate-y-1 transition-transform -rotate-90" />
          </button>
        </div>
      </footer>

      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationStructuredData) }}
      />
    </>
  );
}