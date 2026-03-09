"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

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

  const navItems = [
    "Home",
    "Solutions",
    "Network",
    "Education",
    "Partners",
    "Princing",
    "About us",
    "Contact us",
  ];

  return (
    <>
      {/* Header with dynamic background */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm"
            : "bg-transparent border-transparent"
        }`}
      >
        <div className="container-custom">
          <div className="flex justify-between items-center h-16">
            {/* Logo - changes color on scroll */}
            <div
              className={`text-xl font-semibold transition-colors duration-300 ${
                isScrolled ? "text-[#1e3a8a]" : "text-white"
              }`}
            >
              <img
                src="pics/10001.png"
                alt="Company logo"
                style={{
                  height: "45px",
                  width: "auto",
                  borderRadius: "50%",
                  // filter: isScrolled ? "none" : "brightness(0) invert(1)", // Makes logo white on transparent header
                }}
              />
            </div>

            {/* Desktop Navigation - text color changes on scroll */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`text-sm font-bold transition-colors duration-300 ${
                    isScrolled
                      ? "text-gray-700 hover:text-[#2563eb]"
                      : "text-white hover:text-white/80"
                  }`}
                >
                  {item}
                </a>
              ))}
            </div>

            {/* Desktop Contact button - style changes on scroll */}
            <button
              className={`hidden md:block px-5 py-2 text-sm font-medium rounded-md transition-all duration-300 ${
                isScrolled
                  ? "bg-[#1e3a8a] text-white hover:bg-[#2563eb]"
                  : "bg-white/10 backdrop-blur-sm text-white border border-white/30 hover:bg-white/20"
              }`}
            >
              Join Now
            </button>

            {/* Mobile menu button */}
            <div className="flex items-center gap-3 md:hidden">
              <button
                className={`px-4 py-1.5 text-sm font-medium rounded-md transition-all duration-300 ${
                  isScrolled
                    ? "bg-[#1e3a8a] text-white hover:bg-[#2563eb]"
                    : "bg-white/10 backdrop-blur-sm text-white border border-white/30 hover:bg-white/20"
                }`}
              >
                Join
              </button>
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

          {/* Mobile Menu Dropdown */}
          <div
            className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
              isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div
              className={`py-4 space-y-3 border-t ${
                isScrolled ? "border-gray-200" : "border-white/20"
              }`}
            >
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={toggleMobileMenu}
                  className={`block text-base font-bold transition-colors py-2 ${
                    isScrolled
                      ? "text-gray-700 hover:text-[#2563eb]"
                      : "text-white hover:text-white/80"
                  }`}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>
      <main className="pt-0">{children}</main>{" "}
      {/* Removed pt-16 since header is transparent */}
      {/* Overlay when mobile menu is open */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
          onClick={toggleMobileMenu}
        />
      )}
    </>
  );
}
