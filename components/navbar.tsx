"use client";
import { Button } from "@/components/ui/button";
import {  Menu, X } from "lucide-react";
import { useState, useEffect, useMemo } from "react";
import Image from "next/image";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("");
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const navItems = useMemo(
    () => [
      { id: "about", label: "About" },
      { id: "details", label: "Services" },
      { id: "contact", label: "Contact" },
    ],
    []
  );

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.id);
      let currentActive = "";

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionId = sections[i];
        const section = document.getElementById(sectionId);

        if (section) {
          const rect = section.getBoundingClientRect();
          const buffer = 100;

          const isSectionVisible =
            rect.top <= window.innerHeight - buffer &&
            rect.bottom >= buffer;

          if (isSectionVisible) {
            currentActive = sectionId;
            break;
          }
        }
      }
      setActiveSection(currentActive);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [navItems]);

  const handleLinkClick = (id: string) => {
    setIsMobileOpen(false); // close menu on mobile after click
    const section = document.getElementById(id);
    if (section) {
      const yOffset = -80; // adjust for fixed navbar
      const y = section.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-sm flex items-center justify-center">
              <Image
                height={100}
                width={100}
                alt="Decarb Climate Research icon"
                src={'/favicon.png'}
              />
            </div>
            <div className="text-base font-bold text-gray-900 leading-tight">
              DECARB CLIMATE
              <div className="text-xs font-normal text-gray-600 -mt-0.5">
                RESEARCH
              </div>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleLinkClick(item.id)}
                className={`text-sm cursor-pointer font-medium transition-colors ${
                  activeSection === item.id
                    ? "text-teal-600"
                    : "text-gray-700 hover:text-gray-900"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            <Button className="hidden sm:inline-flex bg-teal-500 cursor-pointer text-white hover:bg-teal-600 rounded-full px-6 py-2 text-sm font-medium">
              Schedule a consultation
              <svg
                className="ml-2 h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Button>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-gray-700 hover:text-gray-900"
              onClick={() => setIsMobileOpen(!isMobileOpen)}
            >
              {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-sm">
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleLinkClick(item.id)}
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${
                  activeSection === item.id
                    ? "text-teal-600 bg-gray-50"
                    : "text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                }`}
              >
                {item.label}
              </button>
            ))}
            <Button className="w-full bg-teal-500 text-white hover:bg-teal-600 rounded-full px-6 py-2 text-sm font-medium">
              Schedule a consultation
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
