"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { HelpCircle } from "lucide-react";
import { useState, useEffect, useMemo } from "react";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("");

  const navItems = useMemo(() => [
    { id: "about", label: "About" },
    { id: "goals", label: "Goals" },
    { id: "details", label: "Services" },
    { id: "testimonials", label: "Testimonials" },
    { id: "contact", label: "Contact" },
  ], []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.id);
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

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-black rounded-sm flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-sm"></div>
              </div>
              <div className="text-base font-bold text-gray-900 leading-tight">
                DECARB CLIMATE
                <div className="text-xs font-normal text-gray-600 -mt-0.5">
                  RESEARCH
                </div>
              </div>
            </div>
          </div>

          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={`#${item.id}`}
                className={`text-sm font-medium transition-colors ${
                  activeSection === item.id
                    ? "text-teal-600 hover:text-teal-700"
                    : "text-gray-700 hover:text-gray-900"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <Button className="bg-teal-500 cursor-pointer text-white hover:bg-teal-600 rounded-full px-6 py-2 text-sm font-medium">
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
            <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center">
              <HelpCircle className="h-4 w-4 text-teal-600" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}