import Link from "next/link"
import { Linkedin, Twitter, Mail, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
          {/* Company Info */}
          <div className="space-y-8">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-teal-500 rounded-sm flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-sm"></div>
              </div>
              <div className="ml-3 text-base font-bold leading-tight">
                DECARB CLIMATE
                <div className="text-xs font-normal text-gray-400 -mt-0.5">RESEARCH</div>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed text-lg">
              Leading sustainability advisory firm helping businesses navigate their decarbonization journey with
              science-based solutions and expert guidance.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-teal-500 transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </Link>
              <Link
                href="#"
                className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-teal-500 transition-colors"
              >
                <Twitter className="h-6 w-6" />
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-serif mb-8">Services</h3>
            <ul className="space-y-4">
              <li>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors text-lg">
                  Carbon Assessment
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors text-lg">
                  Sustainability Strategy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors text-lg">
                  ESG Reporting
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors text-lg">
                  Climate Risk Assessment
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors text-lg">
                  Net Zero Planning
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-xl font-serif mb-8">Resources</h3>
            <ul className="space-y-4">
              <li>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors text-lg">
                  Research Papers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors text-lg">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors text-lg">
                  Industry Insights
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors text-lg">
                  Sustainability Tools
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors text-lg">
                  Webinars & Events
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-serif mb-8">Contact</h3>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Mail className="h-6 w-6 text-teal-500 flex-shrink-0" />
                <span className="text-gray-300 text-lg">info@decarbclimate.com</span>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="h-6 w-6 text-teal-500 flex-shrink-0" />
                <span className="text-gray-300 text-lg">+91 98765 43210</span>
              </div>
              <div className="text-gray-300 text-lg leading-relaxed">
                Climate Research Center
                <br />
                Sustainability District
                <br />
                New Delhi, India 110001
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-16 pt-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-lg">
              © {new Date().getFullYear()} DECARB Climate Research. All rights reserved.
            </p>
            <div className="flex space-x-8 mt-6 md:mt-0">
              <Link href="#" className="text-gray-300 hover:text-white transition-colors text-lg">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white transition-colors text-lg">
                Terms of Service
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white transition-colors text-lg">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
