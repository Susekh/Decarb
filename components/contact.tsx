import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-6xl font-serif font-normal text-gray-900 mb-8">Get In Touch</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Ready to begin your sustainability journey? Contact our team of climate experts to discuss how we can help
            your organization achieve its environmental goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-12">
            <div>
              <h3 className="text-3xl font-serif text-gray-900 mb-8">Contact Information</h3>
              <div className="space-y-8">
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-teal-50 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-8 w-8 text-teal-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 text-lg">Address</h4>
                    <p className="text-gray-600 leading-relaxed">
                      Climate Research Center
                      <br />
                      Sustainability District
                      <br />
                      New Delhi, India 110001
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-teal-50 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Phone className="h-8 w-8 text-teal-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 text-lg">Phone</h4>
                    <p className="text-gray-600">+91 98765 43210</p>
                    <p className="text-gray-600">+91 87654 32109</p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-teal-50 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Mail className="h-8 w-8 text-teal-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 text-lg">Email</h4>
                    <p className="text-gray-600">info@decarbclimate.com</p>
                    <p className="text-gray-600">consulting@decarbclimate.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-teal-50 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Clock className="h-8 w-8 text-teal-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 text-lg">Office Hours</h4>
                    <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-gray-600">Saturday: 10:00 AM - 2:00 PM</p>
                    <p className="text-gray-600">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 rounded-3xl p-10 text-white">
              <h4 className="text-2xl font-serif mb-6">Ready to Lead the Change?</h4>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Schedule a free consultation to discuss your sustainability goals and discover how we can help your
                organization become a climate leader.
              </p>
              <Button className="bg-teal-500 text-white hover:bg-teal-600 w-full py-3 text-lg">
                Schedule Free Consultation
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 rounded-3xl p-10">
            <h3 className="text-3xl font-serif text-gray-900 mb-8">Send us a Message</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-3">
                    First Name
                  </label>
                  <Input id="firstName" placeholder="Enter your first name" className="h-12" />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-3">
                    Last Name
                  </label>
                  <Input id="lastName" placeholder="Enter your last name" className="h-12" />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-3">
                  Company
                </label>
                <Input id="company" placeholder="Enter your company name" className="h-12" />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-3">
                  Email Address
                </label>
                <Input id="email" type="email" placeholder="Enter your email address" className="h-12" />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-3">
                  Service of Interest
                </label>
                <select
                  id="service"
                  className="w-full h-12 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                >
                  <option value="">Select a service</option>
                  <option value="assessment">Carbon Footprint Assessment</option>
                  <option value="strategy">Sustainability Strategy</option>
                  <option value="reporting">ESG Reporting</option>
                  <option value="comprehensive">Comprehensive Advisory</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-3">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your sustainability goals and challenges..."
                  rows={5}
                />
              </div>

              <Button type="submit" className="w-full bg-teal-500 text-white hover:bg-teal-600 h-12 text-lg">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
