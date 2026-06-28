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
  ArrowUpRight,
} from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // Structured Data for Organization with SEO keywords
  const organizationStructuredData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Yelocode Systems",
    "url": "https://yelocodesys.com",
    "logo": "https://yelocodesys.com/logo.png",
    "description": "Best tech school and IT training center in Port Harcourt, Nigeria offering coding bootcamps, software engineering, cybersecurity, data analytics, and UI/UX design training with job placement.",
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
    ]
  };

  // Quick links
  const quickLinks = [
    { name: "About Us", href: "/aboutus" },
    { name: "Our Tech Programs", href: "/solutions" },
    { name: "Success Stories", href: "/testimonials" },
    { name: "Tech Blog", href: "/blog" },
    { name: "Careers", href: "/careers" },
    { name: "Partner With Us", href: "/partners" },
    { name: "Contact", href: "/contact" },
  ];

  const programs = [
    { name: "Software Engineering", href: "/software-engineering" },
    { name: "Cybersecurity Training", href: "/cybersecurity" },
    { name: "Data Analytics", href: "/data-analytics" },
    { name: "UI/UX Design", href: "/ui-ux-design" },
    { name: "Python Programming", href: "/python" },
    { name: "Full Stack Web Dev", href: "/webdevelopment" },
    { name: "Cloud & DevOps", href: "/cloud-computing" },
    { name: "Mobile App Development", href: "/mobile-app-development" },
  ];

  const resources = [
    { name: "Course Catalog", href: "/coursecatalog" },
    { name: "Career Outcomes", href: "/career-outcomes" },
    { name: "FAQ", href: "/faq" },
    { name: "Scholarships", href: "/bootcampsapply" },
    { name: "Learning Resources", href: "/resources" },
    { name: "Alumni Network", href: "/alumni" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms-of-service" },
  ];

  return (
    <>
      <footer 
        className="relative bg-black dark:bg-white text-white dark:text-black pt-20 pb-8 overflow-hidden"
        aria-label="Yelocode Systems footer - Best tech school and IT training center in Port Harcourt"
      >
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]" aria-hidden="true">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-16">
            {/* Column 1: Company Info */}
            <div className="col-span-1">
              <div className="mb-6">
                <div className="text-2xl font-bold text-white dark:text-black mb-4">
                  Yelocode Systems
                </div>
                <p className="text-gray-400 dark:text-gray-600 text-sm leading-relaxed mb-4">
                  The{" "}
                  <strong className="text-white dark:text-black font-semibold">
                    best tech school in Port Harcourt
                  </strong>
                  . Empowering the next generation of tech leaders through innovative learning at our{" "}
                  <strong className="text-white dark:text-black font-semibold">
                    IT training center in Port Harcourt
                  </strong>
                  .
                </p>

                {/* Contact Info */}
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-3 text-gray-400 dark:text-gray-600">
                    <MapPin className="w-4 h-4 flex-shrink-0" />
                    <span>
                      No. 11 Elekahia, Port Harcourt, Rivers State, Nigeria
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-400 dark:text-gray-600">
                    <Phone className="w-4 h-4 flex-shrink-0" />
                    <a href="tel:+2349162865693" className="hover:text-white dark:hover:text-black transition-colors">
                      +234 (0) 916 286 5693
                    </a>
                  </div>
                  <div className="flex items-center gap-3 text-gray-400 dark:text-gray-600">
                    <Mail className="w-4 h-4 flex-shrink-0" />
                    <a href="mailto:info@yelocodesys.com" className="hover:text-white dark:hover:text-black transition-colors">
                      info@yelocodesys.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-3 mb-6">
                {[
                  { icon: Twitter, href: "https://twitter.com/yelocode", label: "Follow on Twitter" },
                  { icon: Linkedin, href: "https://linkedin.com/company/yelocode", label: "Connect on LinkedIn" },
                  { icon: Github, href: "https://github.com/yelocode", label: "Follow on GitHub" },
                  { icon: Facebook, href: "https://facebook.com/yelocode", label: "Like on Facebook" },
                  { icon: Instagram, href: "https://instagram.com/yelocode", label: "Follow on Instagram" },
                ].map((social, i) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={i}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 bg-white/10 dark:bg-black/10 border border-white/20 dark:border-black/20 hover:bg-white dark:hover:bg-black hover:text-black dark:hover:text-white flex items-center justify-center transition-all duration-300 group"
                      aria-label={social.label}
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-white dark:text-black mb-6">
                Quick Links
              </h4>
              <ul className="space-y-2.5">
                {quickLinks.map((item, i) => (
                  <li key={i}>
                    <Link
                      href={item.href}
                      className="text-sm text-gray-400 dark:text-gray-600 hover:text-white dark:hover:text-black transition-colors flex items-center gap-1 group"
                    >
                      <span>{item.name}</span>
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Programs & Resources */}
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-white dark:text-black mb-6">
                Tech Programs
              </h4>
              <ul className="space-y-2.5 mb-8">
                {programs.map((item, i) => (
                  <li key={i}>
                    <Link
                      href={item.href}
                      className="text-sm text-gray-400 dark:text-gray-600 hover:text-white dark:hover:text-black transition-colors flex items-center gap-1 group"
                    >
                      <span>{item.name}</span>
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                    </Link>
                  </li>
                ))}
              </ul>

              <h4 className="text-sm font-bold uppercase tracking-wider text-white dark:text-black mb-6">
                Resources
              </h4>
              <ul className="space-y-2.5">
                {resources.map((item, i) => (
                  <li key={i}>
                    <Link
                      href={item.href}
                      className="text-sm text-gray-400 dark:text-gray-600 hover:text-white dark:hover:text-black transition-colors flex items-center gap-1 group"
                    >
                      <span>{item.name}</span>
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Contact & Updates */}
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-white dark:text-black mb-6">
                Get In Touch
              </h4>

              {/* Quick Contact Card */}
              <div className="bg-white/5 dark:bg-black/5 border border-white/10 dark:border-black/10 p-5 mb-6">
                <h5 className="font-semibold text-white dark:text-black mb-2">Need assistance?</h5>
                <p className="text-xs text-gray-400 dark:text-gray-600 mb-3">
                  Our admissions team is here to help you start your tech journey at our{" "}
                  <strong className="text-gray-300 dark:text-gray-700">coding bootcamp in Port Harcourt</strong>
                </p>
                <a
                  href="mailto:info@yelocodesys.com"
                  className="text-sm text-white dark:text-black hover:text-gray-300 dark:hover:text-gray-700 transition-colors flex items-center gap-2 font-medium"
                >
                  <Mail className="w-4 h-4" />
                  info@yelocodesys.com
                </a>
              </div>

              {/* Office Hours */}
              <div className="mb-6">
                <h5 className="text-sm font-semibold text-white dark:text-black mb-3">
                  Office Hours
                </h5>
                <div className="space-y-1.5 text-xs text-gray-400 dark:text-gray-600">
                  <p>Monday - Friday: 9am - 6pm</p>
                  <p>Saturday: 10am - 4pm</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>

              {/* Download Brochure */}
              <Link
                href="/brochure.pdf"
                className="inline-flex items-center gap-2 text-sm text-white dark:text-black hover:text-gray-300 dark:hover:text-gray-700 transition-colors font-medium group"
                aria-label="Download Yelocode Systems program brochure"
              >
                <BookOpen className="w-4 h-4" />
                <span>Download Brochure</span>
                <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="border-t border-white/10 dark:border-black/10 pt-12 pb-8">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              <div className="max-w-md">
                <h5 className="text-lg font-bold text-white dark:text-black mb-2">
                  Stay Updated
                </h5>
                <p className="text-sm text-gray-400 dark:text-gray-600">
                  Get updates on new courses, tech events, and industry insights from the{" "}
                  <strong className="text-gray-300 dark:text-gray-700">best tech school in Port Harcourt</strong>.
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
                      placeholder="Enter your email"
                      required
                      className="w-full px-4 py-3 bg-white/5 dark:bg-black/5 border border-white/20 dark:border-black/20 text-white dark:text-black placeholder-gray-500 focus:outline-none focus:border-white dark:focus:border-black transition-colors"
                      aria-label="Email address for newsletter"
                    />
                  </div>
                  <button 
                    type="submit"
                    className="px-6 py-3 bg-white dark:bg-black text-black dark:text-white font-semibold hover:bg-gray-200 dark:hover:bg-gray-900 transition-all duration-300 flex items-center gap-2 whitespace-nowrap"
                    aria-label="Subscribe to newsletter"
                  >
                    <Send className="w-4 h-4" />
                    Subscribe
                  </button>
                </form>
                <p className="text-xs text-gray-500 dark:text-gray-500 mt-2">
                  By subscribing, you agree to our Privacy Policy.
                </p>
              </div>
            </div>
          </div>

          {/* SEO Keywords */}
          {/* <div className="border-t border-white/10 dark:border-black/10 pt-8 pb-4">
            <p className="text-xs text-gray-500 dark:text-gray-500 max-w-4xl leading-relaxed">
              <strong className="text-gray-400 dark:text-gray-600 font-medium">Yelocode Systems —</strong>{" "}
              Best Tech School in Port Harcourt • Coding Bootcamp Port Harcourt • IT Training Center in Port Harcourt • 
              Computer Training School in Port Harcourt • Software Engineering Academy in Port Harcourt • 
              Cybersecurity Training in Port Harcourt • Data Analytics Training in Port Harcourt • 
              UI/UX Design Training in Port Harcourt • Tech Training with Job Placement • 
              Affordable Computer Training Centers in PH
            </p>
          </div> */}

          {/* Bottom Bar */}
          <div className="border-t border-white/10 dark:border-black/10 mt-6 pt-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="text-sm text-gray-400 dark:text-gray-600">
                © {currentYear} <strong className="text-gray-300 dark:text-gray-700">Yelocode Systems</strong>. 
                All rights reserved. Port Harcourt, Rivers State, Nigeria.
              </div>

              <div className="flex flex-wrap items-center gap-6">
                {["Privacy Policy", "Terms of Service", "Cookie Policy", "Accessibility"].map((item, i) => (
                  <Link
                    key={i}
                    href={`/${item.toLowerCase().replace(/ /g, '-')}`}
                    className="text-xs text-gray-500 dark:text-gray-500 hover:text-white dark:hover:text-black transition-colors"
                  >
                    {item}
                  </Link>
                ))}
              </div>

              <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-500">
                <span>Made with</span>
                <Heart className="w-3 h-3" />
                <span>in Port Harcourt</span>
              </div>
            </div>
          </div>

          {/* Back to top */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="absolute right-8 bottom-8 w-10 h-10 bg-white dark:bg-black text-black dark:text-white border border-white/20 dark:border-black/20 hover:bg-gray-200 dark:hover:bg-gray-900 flex items-center justify-center transition-all duration-300 group"
            aria-label="Scroll back to top"
          >
            <ArrowRight className="w-5 h-5 group-hover:-translate-y-1 transition-transform -rotate-90" />
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