import Link from "next/link";
import { Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex flex-wrap justify-between">
          {/* Company Info & Socials */}
          <div className="space-y-6">
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-sm flex items-center justify-center">
                <Image
                  height={100}
                  width={100}
                  alt="Decarb Climate Research icon"
                  src={"/favicon.png"}
                />
              </div>
              <div className="ml-3 text-base font-bold leading-tight">
                DECARB CLIMATE
                <div className="text-xs font-normal text-gray-400 -mt-0.5">
                  RESEARCH
                </div>
              </div>
            </div>
            <p className="text-gray-300 max-w-xl leading-relaxed">
              Leading sustainability advisory firm helping businesses navigate
              their decarbonization journey.
            </p>
            <div className="flex space-x-4 pt-2">
              <Link
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-teal-500 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-teal-500 transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-serif mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#about"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#details"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Our Services
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          {/* <div>
            <h3 className="text-xl font-serif mb-6">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-teal-500 flex-shrink-0" />
                <span className="text-gray-300">info@decarbclimate.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-teal-500 flex-shrink-0" />
                <span className="text-gray-300">+91 9439173220</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-teal-500 flex-shrink-0 mt-1" />
                <span className="text-gray-300 leading-relaxed">
                  Address: F-2, Chandaka Industrial Estate In front of Infocity,
                  Infocity Chandrasekharpur, Bhubaneshwar
                  <br />
                  Odisha - 751024
                </span>
              </div>
            </div>
          </div> */}
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
            <p className="text-gray-400 mx-auto text-sm">
              © {new Date().getFullYear()} DECARB Climate Research. All rights
              reserved.
            </p>
            {/* <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                href="#"
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                Terms of Service
              </Link>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
}
