"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  const navItems = ["Home", "Solutions", "Network", "Education", "Partners"];

  return (
    <>
      {/* White header with dark blue text */}
      <nav className="fixed top-0 w-full z-50 bg-white border-b border-gray-200">
        <div className="container-custom">
          <div className="flex justify-between items-center h-16">
            {/* Logo - dark blue */}
            <div className="text-xl font-semibold text-[#1e3a8a]">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDzuGuLGufLo10QO0lWSo2byLo9mOmiAwZmQ&s"
                alt="Company logo"
                style={{
                  height: "50px",
                  width: "auto",
                  borderRadius: "50%",
                }}
              />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm font-bold text-black hover:text-[#2563eb] transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>

            {/* Desktop Contact button */}
            <button className="hidden md:block px-5 py-2 bg-[#1e3a8a] text-white text-sm font-medium rounded-md hover:bg-[#2563eb] transition-colors">
              Join Now
            </button>

            {/* Mobile menu button */}
            <div className="flex items-center gap-3 md:hidden">
              <button className="px-4 py-1.5 bg-[#1e3a8a] text-white text-sm font-medium rounded-md hover:bg-[#2563eb] transition-colors">
                Join
              </button>
              <button
                onClick={toggleMobileMenu}
                className="p-2 text-[#1e3a8a] hover:bg-gray-100 rounded-lg transition-colors"
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
            <div className="py-4 space-y-3 border-t border-gray-200">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={toggleMobileMenu}
                  className="block text-base font-bold text-black hover:text-[#2563eb] transition-colors py-2"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-16">{children}</main>

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