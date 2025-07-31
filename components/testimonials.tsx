import { Star, Quote } from "lucide-react"
import Image from "next/image"

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Chief Sustainability Officer",
      company: "Global Manufacturing Corp",
      content:
        "DECARB's expertise helped us achieve a 40% reduction in emissions within 18 months. Their strategic approach made the impossible seem achievable.",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "Michael Rodriguez",
      role: "CEO",
      company: "TechForward Solutions",
      content:
        "The team's deep understanding of both climate science and business strategy was exactly what we needed to navigate our sustainability transformation.",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "Dr. Priya Patel",
      role: "Head of ESG",
      company: "Financial Services Group",
      content:
        "Their comprehensive approach to ESG reporting elevated our sustainability credentials and improved our investor relations significantly.",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80",
    },
  ]

  return (
    <section id="testimonials" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-6xl font-serif font-normal text-gray-900 mb-8">What Our Clients Say</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Do not just take our word for it. Here is what industry leaders have to say about their sustainability
            transformation journey with DECARB.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <Quote className="h-8 w-8 text-teal-200 mb-6" />

              <p className="text-gray-700 mb-8 leading-relaxed text-lg italic">{testimonial.content}</p>

              <div className="flex items-center">
                <Image
                height={100}
                width={100}
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full mr-4 object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-900 text-lg">{testimonial.name}</h4>
                  <p className="text-gray-600">{testimonial.role}</p>
                  <p className="text-sm text-gray-500">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-white rounded-2xl p-12 shadow-lg inline-block">
            <h3 className="text-3xl font-serif text-gray-900 mb-6">Join Our Success Stories</h3>
            <p className="text-gray-600 mb-8 max-w-2xl leading-relaxed">
              Ready to transform your organization sustainability journey and become part of our growing community of
              climate leaders?
            </p>
            <button className="bg-teal-500 text-white px-10 py-4 rounded-full text-lg font-medium hover:bg-teal-600 transition-colors">
              Start Your Transformation
              <svg className="ml-3 h-5 w-5 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
