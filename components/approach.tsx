import { Search, Lightbulb, Cog, TrendingUp } from "lucide-react"

export default function Approach() {
  const steps = [
    {
      icon: Search,
      title: "Assessment",
      description: "Comprehensive analysis of current sustainability practices and carbon footprint",
    },
    {
      icon: Lightbulb,
      title: "Strategy",
      description: "Development of customized decarbonization roadmap and sustainability goals",
    },
    {
      icon: Cog,
      title: "Implementation",
      description: "Execution support and change management for sustainability initiatives",
    },
    {
      icon: TrendingUp,
      title: "Monitoring",
      description: "Ongoing tracking, reporting, and optimization of sustainability performance",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-gray-900 mb-6">Our Approach</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We follow a systematic, science-based approach to help organizations achieve their sustainability objectives
            through proven methodologies and best practices.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center relative">
              <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <step.icon className="h-10 w-10 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">{step.description}</p>

              {/* Connector Arrow */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-full w-full">
                  <svg className="w-full h-2" viewBox="0 0 100 10">
                    <path
                      d="M0,5 L90,5 M85,1 L90,5 L85,9"
                      stroke="#d1d5db"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 bg-emerald-50 rounded-3xl p-12 text-center">
          <h3 className="text-3xl font-serif text-gray-900 mb-6">Ready to Start Your Sustainability Journey?</h3>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Let us help you develop a comprehensive sustainability strategy that aligns with your business objectives
            and contributes to global climate goals.
          </p>
          <button className="bg-emerald-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-emerald-600 transition-colors">
            Schedule Your Consultation
          </button>
        </div>
      </div>
    </section>
  )
}
