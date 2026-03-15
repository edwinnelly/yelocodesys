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

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative  from-black to-black text-white dark:text-white pt-20 pb-8 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Gradient orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        {/* Main Footer Content - 4 column layout for better organization */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-16">
          {/* Column 1: Company Info */}
          <div className="col-span-1">
            <div className="mb-6">
              <div className="text-2xl font-bold dark:text-white bg-black bg-clip-text text-transparent mb-4">
                Yelocode Systems
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                Empowering the next generation of tech leaders through
                innovative learning in Port Harcourt and beyond.
              </p>

              {/* Contact Info */}
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-3 text-gray-400">
                  <MapPin className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                  <span>
                    No11 Elekahia, Port Harcourt, Rivers State, Nigeria
                  </span>
                </div>
                <div className="flex items-center gap-3 text-gray-400">
                  <Phone className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                  <span>+234 (0) 916 286 5693</span>
                </div>
                <div className="flex items-center gap-3 text-gray-400">
                  <Mail className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                  <span>info@yelocodesys.com</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 mb-6">
              {[
                {
                  icon: Twitter,
                  href: "https://twitter.com/yelocode",
                  label: "Twitter",
                },
                {
                  icon: Linkedin,
                  href: "https://linkedin.com/company/yelocode",
                  label: "LinkedIn",
                },
                {
                  icon: Github,
                  href: "https://github.com/yelocode",
                  label: "GitHub",
                },
                {
                  icon: Facebook,
                  href: "https://facebook.com/yelocode",
                  label: "Facebook",
                },
                {
                  icon: Instagram,
                  href: "https://instagram.com/yelocode",
                  label: "Instagram",
                },
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
                    <Icon className="w-4 h-4 text-white-400 group-hover:text-white" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-600 mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[
                { name: "About Yelocode", href: "/aboutus" },
                { name: "Our Programs", href: "/solutions" },
                { name: "Why Choose Us", href: "/aboutus" },
                { name: "Success Stories", href: "/aboutus" },
                { name: "Blog", href: "/aboutus" },
                { name: "Careers", href: "/education" },
                { name: "Become a Mentor", href: "/" },
                { name: "Partner with Us", href: "/" },
              ].map((item, i) => (
                <li key={i}>
                  <a
                    href={item.href}
                    className="text-sm text-gray-500 hover:text-white transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Programs & Resources */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-600 mb-4">
              Programs
            </h4>
            <ul className="space-y-2 mb-6">
              {[
                { name: "Web Development", url: "webdevelopment" },
                { name: "Data Science & AI", url: "datascience" },
                { name: "Cloud Computing", url: "cloud-computing" },
                { name: "Cybersecurity", url: "cybersecurity" },
                { name: "UI/UX Design", url: "ui-ux-design" },
                {
                  name: "mobile-development",
                  url: "",
                },
                {
                  name: "python",
                  url: "",
                },
                {
                  name: "digitalmarketing",
                  url: "",
                },
              ].map((item, i) => (
                <li key={i}>
                  <a
                    href={item.url}
                    className="text-sm text-gray-500 hover:text-white transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>

            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-600 mb-4 mt-6">
              Resources
            </h4>
            <ul className="space-y-2">
              {[
                { name: "Course Catalog", url: "/coursecatalog" },
                { name: "Career Outcomes", url: "/Careers" },
                { name: "FAQ", url: "/faq" },
                { name: "Scholarships", url: "/bootcampsapply" },
                { name: "Resource Center", url: "/resources" },
                { name: "Alumni Network", url: "/alumni" },
              ].map((item, i) => (
                <li key={i}>
                  <a
                    href={item.url}
                    className="text-sm text-gray-500 hover:text-white transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Updates */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-600 mb-4">
              Get In Touch
            </h4>

            {/* Quick Contact */}
            <div className="bg-gray-800/50 rounded-xl p-4 mb-6">
              <h5 className="font-medium text-white mb-2">Need assistance?</h5>
              <p className="text-xs text-white-800 mb-3">
                Our admissions team is here to help
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
                Office Hours
              </h5>
              <p className="text-xs text-gray-500">
                Monday - Friday: 9am - 6pm
              </p>
              <p className="text-xs text-gray-500">Saturday: 10am - 4pm</p>
              <p className="text-xs text-gray-500">Sunday: Closed</p>
            </div>

            {/* Download Brochure */}
            <a
              href="/brochure.pdf"
              download
              className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray transition-colors"
            >
              <BookOpen className="w-4 h-4" />
              Download Program Brochure
            </a>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-gray-800 pt-12 pb-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="max-w-md">
              <h5 className="text-lg font-semibold text-white mb-2">
                Stay in the loop
              </h5>
              <p className="text-sm text-gray-500">
                Get the latest updates on new courses, events, and tech insights
                from Yelocode Systems.
              </p>
            </div>

            <div className="flex-1 max-w-md">
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500 transition-colors"
                  />
                  <Mail className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white" />
                </div>
                <button className="px-6 py-3 bg-gradient-to-r from-yellow-600 to-gray-600 text-white rounded-lg hover:shadow-lg hover:shadow-yellow-500/25 transition-all flex items-center gap-2 whitespace-nowrap">
                  <Send className="w-4 h-4" />
                  Subscribe
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-2">
                By subscribing, you agree to our Privacy Policy and consent to
                receive updates.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="text-sm text-gray-400">
              © {currentYear} Yelocode Systems. All rights reserved. Port
              Harcourt, Nigeria.
            </div>

            <div className="flex items-center gap-6">
              {[
                "Privacy Policy",
                "Terms of Service",
                "Cookie Policy",
                "Accessibility",
              ].map((item, i) => (
                <a
                  key={i}
                  href="#"
                  className="text-xs text-gray-500 hover:text-gray-300 transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-1 text-xs text-gray-400">
              <span>Made with</span>
              <Heart className="w-3 h-3 text-red-500 fill-yellow-500" />
              <span>in Port Harcourt for learners worldwide</span>
            </div>
          </div>
        </div>

        {/* Back to top button */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="absolute right-8 bottom-8 w-10 h-10 bg-yellow-600 hover:bg-yellow-700 rounded-lg flex items-center justify-center transition-colors group shadow-lg"
          aria-label="Back to top"
        >
          <ArrowRight className="w-5 h-5 text-white group-hover:translate-y-[-2px] transition-transform -rotate-90" />
        </button>
      </div>
    </footer>
  );
}
