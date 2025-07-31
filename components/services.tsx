import { Leaf, TrendingDown, BarChart3, Users } from "lucide-react"

export default function Services() {
  const services = [
    {
      icon: TrendingDown,
      title: "Carbon Footprint Assessment",
      description: "Comprehensive analysis of your organization's greenhouse gas emissions across all scopes.",
    },
    {
      icon: Leaf,
      title: "Sustainability Strategy",
      description: "Develop tailored roadmaps for achieving net-zero goals and sustainable business practices.",
    },
    {
      icon: BarChart3,
      title: "ESG Reporting",
      description: "Expert guidance on environmental, social, and governance reporting and compliance.",
    },
    {
      icon: Users,
      title: "Stakeholder Engagement",
      description: "Build consensus and drive change through effective sustainability communication.",
    },
  ]

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-gray-900 mb-6">Our Advisory Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive sustainability advisory services to help businesses navigate their decarbonization
            journey and achieve their climate goals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-emerald-200 transition-colors">
                <service.icon className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
