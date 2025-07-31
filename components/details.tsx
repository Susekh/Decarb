import { Search, Lightbulb, Cog, TrendingUp, CheckCircle } from "lucide-react"

export default function Details() {
  const services = [
    {
      title: "Carbon Footprint Assessment",
      description: "Comprehensive analysis of your organization's greenhouse gas emissions across all scopes",
      features: [
        "Scope 1, 2 & 3 emissions",
        "Data collection & verification",
        "Baseline establishment",
        "Benchmarking analysis",
      ],
    },
    {
      title: "Sustainability Strategy Development",
      description: "Tailored roadmaps for achieving net-zero goals and sustainable business practices",
      features: ["Science-based targets", "Decarbonization pathways", "Risk assessment", "Implementation planning"],
    },
    {
      title: "ESG Reporting & Compliance",
      description: "Expert guidance on environmental, social, and governance reporting standards",
      features: ["TCFD reporting", "GRI standards", "SASB frameworks", "EU taxonomy alignment"],
    },
  ]

  const process = [
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
    <section id="details" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Services Section */}
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-6xl font-serif font-normal text-gray-900 mb-8">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Comprehensive sustainability advisory services designed to help businesses navigate their decarbonization
            journey with confidence and expertise.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 mb-24">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-2xl font-serif text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              <ul className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-700">
                    <CheckCircle className="h-5 w-5 text-teal-600 mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="text-center mb-16">
          <h3 className="text-4xl font-serif text-gray-900 mb-8">Our Process</h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We follow a systematic, science-based approach to help organizations achieve their sustainability objectives
            through proven methodologies.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 mb-20">
          {process.map((step, index) => (
            <div key={index} className="text-center relative">
              <div className="w-20 h-20 bg-teal-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <step.icon className="h-10 w-10 text-teal-600" />
              </div>
              <h4 className="text-xl font-serif text-gray-900 mb-4">{step.title}</h4>
              <p className="text-gray-600 leading-relaxed">{step.description}</p>

              {/* Connector Arrow */}
              {index < process.length - 1 && (
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

        {/* Statistics */}
        <div className="bg-teal-50 rounded-3xl p-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-serif text-gray-900 mb-4">Impact by Numbers</h3>
            <p className="text-gray-600 text-lg">Measurable results that drive meaningful change</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-teal-600 mb-2">200+</div>
              <div className="text-gray-700 font-medium">Companies Advised</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-teal-600 mb-2">1M+</div>
              <div className="text-gray-700 font-medium">Tons CO₂ Reduced</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-teal-600 mb-2">95%</div>
              <div className="text-gray-700 font-medium">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-teal-600 mb-2">50+</div>
              <div className="text-gray-700 font-medium">Countries Served</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
