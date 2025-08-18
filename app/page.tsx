"use client"

import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import About from "@/components/about"
import Details from "@/components/details"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import { motion } from "motion/react"

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
}

const fadeRight = {
  hidden: { opacity: 0},
  show: { opacity: 1 },
}

const fadeLeft = {
  hidden: { opacity: 0 },
  show: { opacity: 1},
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <Hero />
      </motion.div>

      {/* About */}
      <motion.div
        variants={fadeRight}
        initial="hidden"
        whileInView="show"
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <About />
      </motion.div>

      {/* Details */}
      <motion.div
        variants={fadeLeft}
        initial="hidden"
        whileInView="show"
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <Details />
      </motion.div>

      {/* Contact */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <Contact />
      </motion.div>

      {/* Footer (simple fade in) */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Footer />
      </motion.div>
    </main>
  )
}
