import { Target, Eye, Lightbulb } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-6xl font-serif font-normal text-gray-900 mb-8">
            About DECARB Climate Research
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We are a sustainability-oriented business advisory firm dedicated to helping organizations navigate the
            complex landscape of decarbonization and climate action.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-16">
          <div className="text-center">
            <div className="w-20 h-20 bg-teal-50 rounded-full flex items-center justify-center mx-auto mb-8">
              <Target className="h-10 w-10 text-teal-600" />
            </div>
            <h3 className="text-2xl font-serif text-gray-900 mb-6">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed text-lg">
              To accelerate the transition to a low-carbon economy by providing businesses with the knowledge, tools,
              and strategies needed for successful decarbonization.
            </p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 bg-teal-50 rounded-full flex items-center justify-center mx-auto mb-8">
              <Eye className="h-10 w-10 text-teal-600" />
            </div>
            <h3 className="text-2xl font-serif text-gray-900 mb-6">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed text-lg">
              A world where every business operates sustainably, contributing to global climate goals while thriving
              economically and creating lasting positive impact.
            </p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 bg-teal-50 rounded-full flex items-center justify-center mx-auto mb-8">
              <Lightbulb className="h-10 w-10 text-teal-600" />
            </div>
            <h3 className="text-2xl font-serif text-gray-900 mb-6">Our Values</h3>
            <p className="text-gray-600 leading-relaxed text-lg">
              Scientific rigor, practical solutions, collaborative partnerships, and unwavering commitment to
              environmental stewardship and business excellence.
            </p>
          </div>
        </div>

        <div className="mt-20 text-center">
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            With deep expertise in climate science, policy, and business strategy, we bridge the gap between
            environmental necessity and commercial viability, ensuring our clients achieve their sustainability goals
            effectively.
          </p>
        </div>
      </div>
    </section>
  )
}
