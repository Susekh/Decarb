import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import About from "@/components/about"
import Goals from "@/components/goals"
import Details from "@/components/details"
import Testimonials from "@/components/testimonials"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <Goals />
      <Details />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}
