import { TrendingDown, Leaf, BarChart3, Globe } from "lucide-react"

export default function Goals() {
  const goals = [
    {
      icon: TrendingDown,
      title: "Net Zero Achievement",
      description: "Guide organizations toward science-based net zero targets with clear, actionable roadmaps.",
      metric: "50%",
      metricLabel: "Average emission reduction",
    },
    {
      icon: Leaf,
      title: "Sustainable Operations",
      description: "Transform business operations to minimize environmental impact while maximizing efficiency.",
      metric: "95%",
      metricLabel: "Client satisfaction rate",
    },
    {
      icon: BarChart3,
      title: "ESG Excellence",
      description: "Achieve top-tier ESG ratings through comprehensive sustainability reporting and governance.",
      metric: "200+",
      metricLabel: "Companies advised",
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "Create meaningful change that contributes to global climate goals and sustainable development.",
      metric: "1M+",
      metricLabel: "Tons CO2 reduced",
    },
  ]

  return (
    <section id="goals" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-6xl font-serif font-normal text-gray-900 mb-8">Our Goals</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We are committed to achieving measurable outcomes that benefit our clients, their stakeholders, and the
            planet through science-based sustainability solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {goals.map((goal, index) => (
            <div key={index} className="text-center">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg">
                <goal.icon className="h-12 w-12 text-teal-600" />
              </div>
              <div className="text-3xl font-bold text-teal-600 mb-2">{goal.metric}</div>
              <div className="text-sm text-gray-500 mb-6">{goal.metricLabel}</div>
              <h3 className="text-xl font-serif text-gray-900 mb-4">{goal.title}</h3>
              <p className="text-gray-600 leading-relaxed">{goal.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-gray-900 rounded-3xl p-16 text-center">
          <h3 className="text-4xl font-serif text-white mb-8">Ready to Transform Your Business?</h3>
          <p className="text-gray-300 text-xl mb-10 max-w-3xl mx-auto leading-relaxed">
            Join the growing number of forward-thinking organizations that are leading the transition to a sustainable,
            low-carbon future.
          </p>
          <button className="bg-teal-500 text-white px-10 py-4 rounded-full text-lg font-medium hover:bg-teal-600 transition-colors">
            Begin Your Journey
            <svg className="ml-3 h-5 w-5 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
