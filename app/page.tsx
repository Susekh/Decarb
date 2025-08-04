import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import About from "@/components/about"
import Details from "@/components/details"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <Details />
      <Contact />
      <Footer />
    </main>
  )
}
