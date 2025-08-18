import { Target, Eye, Lightbulb, TrendingUp } from "lucide-react" // Added TrendingUp for the extra point

export default function About() {
  return (
    <section id="about" className=" bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-6xl font-serif font-normal text-gray-900 mb-8">
            About DECARB Climate Research
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            DECARB is a <b>sustainability-focused business advisory</b> committed to guiding organizations toward
            environmentally responsible and economically viable growth through expert solutions in carbon management,
            ESG integration, and green transition strategies.
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
          <h3 className="text-3xl font-serif text-gray-900 mb-6">Why Choose DECARB?</h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Each engagement with DECARB delivers <b>practical outcomes</b>, whether it&#39;s achieving compliance,
            improving ESG performance, or driving innovation. Our approach is rooted in deep research,
            regulatory understanding, and a strong belief in the long-term value of responsible business.
            We bridge environmental necessity with commercial viability.
          </p>
          {/* You could add an additional small value proposition here if desired, e.g., for the team aspect */}
          <div className="mt-8 flex justify-center">
            <div className="text-center max-w-sm">
              <div className="w-16 h-16 bg-teal-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-teal-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Future-Ready Growth</h4>
              <p className="text-gray-600 text-sm">
                Our domain specialists and collaborators align your goals with global sustainability standards, ensuring you remain competitive.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}