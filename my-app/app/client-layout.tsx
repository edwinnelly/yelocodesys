"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  // Navigation items with routes
  const navItems = [
    { name: "Home", href: "/" },
    { name: "Solutions", href: "/solutions" },
    // { name: "Network", href: "/network" },
    { name: "Education", href: "/education" },
    // { name: "E-learning", href: "/elearning" },
    { name: "Pricing", href: "/Careers" },
    { name: "About Us", href: "/aboutus" },
    { name: "Contact Us", href: "/contacts" },
  ];

  return (
    <>
      {/* Navbar */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm"
            : "bg-transparent border-transparent"
        }`}
      >
        <div className="container-custom">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link
              href="/"
              className={`text-xl font-semibold transition-colors duration-300 ${
                isScrolled ? "text-[#1e3a8a]" : "text-white"
              }`}
            >
              <img
                src="/pics/10001.png"
                alt="Yelocode Systems Logo"
                style={{
                  height: "45px",
                  width: "auto",
                  borderRadius: "50%",
                }}
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-sm font-bold transition-colors duration-300 ${
                    isScrolled
                      ? "text-gray-700 hover:text-[#2563eb]"
                      : "text-white hover:text-white/80"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <Link
  href="/education"
  className={`hidden md:inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
    isScrolled
      ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-md hover:shadow-lg hover:from-blue-700 hover:to-blue-800"
      : "bg-white/10 backdrop-blur-sm text-white border border-white/30 hover:bg-white/20 hover:border-white/50 shadow-lg shadow-white/5"
  }`}
>
  <span>Enroll Now</span>
  <svg 
    className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" 
    fill="none" 
    viewBox="0 0 24 24" 
    stroke="currentColor"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
</Link>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-3 md:hidden">
            <Link
  href="/education"
  className={`inline-flex items-center justify-center px-5 py-2 text-sm font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
    isScrolled
      ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-md hover:shadow-lg hover:from-blue-700 hover:to-blue-800"
      : "bg-white/10 backdrop-blur-sm text-white border border-white/30 hover:bg-white/20 hover:border-white/50 shadow-lg shadow-white/5"
  }`}
>
  <span>Enroll now</span>
  <svg 
    className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" 
    fill="none" 
    viewBox="0 0 24 24" 
    stroke="currentColor"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
  </svg>
</Link>

              <button
                onClick={toggleMobileMenu}
                className={`p-2 rounded-lg transition-colors duration-300 ${
                  isScrolled
                    ? "text-[#1e3a8a] hover:bg-gray-100"
                    : "text-white hover:bg-white/10"
                }`}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div
            className={`md:hidden overflow-hidden transition-all duration-300 ${
              isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div
              className={`py-4 space-y-3 border-t ${
                isScrolled ? "border-gray-200" : "border-white/20"
              }`}
            >
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={toggleMobileMenu}
                  className={`block text-base font-bold transition-colors py-2 ${
                    isScrolled
                      ? "text-gray-700 hover:text-[#2563eb]"
                      : "text-white hover:text-white/80"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Page Content */}
      <main>{children}</main>

      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
          onClick={toggleMobileMenu}
        />
      )}
    </>
  );
}