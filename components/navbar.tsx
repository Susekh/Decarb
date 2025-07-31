import Link from "next/link"
import { Button } from "@/components/ui/button"
import { HelpCircle } from "lucide-react"

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-black rounded-sm flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-sm"></div>
              </div>
              <div className="text-base font-bold text-gray-900 leading-tight">
                DECARB CLIMATE
                <div className="text-xs font-normal text-gray-600 -mt-0.5">RESEARCH</div>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link href="#advisory" className="text-gray-700 hover:text-gray-900 text-sm font-medium transition-colors">
              Advisory
            </Link>
            <Link href="#services" className="text-gray-700 hover:text-gray-900 text-sm font-medium transition-colors">
              Services
            </Link>
            <Link href="#solutions" className="text-gray-700 hover:text-gray-900 text-sm font-medium transition-colors">
              Solutions
            </Link>
            <Link href="#research" className="text-gray-700 hover:text-gray-900 text-sm font-medium transition-colors">
              Research
            </Link>
            <Link href="#insights" className="text-gray-700 hover:text-gray-900 text-sm font-medium transition-colors">
              Insights
            </Link>
            <Link href="#about" className="text-gray-700 hover:text-gray-900 text-sm font-medium transition-colors">
              About
            </Link>
          </div>

          {/* CTA Button and Help */}
          <div className="flex items-center space-x-4">
            <Button className="bg-teal-500 cursor-pointer text-white hover:bg-teal-600 rounded-full px-6 py-2 text-sm font-medium">
              Schedule a consultation
              <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Button>
            <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center">
              <HelpCircle className="h-4 w-4 text-teal-600" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
