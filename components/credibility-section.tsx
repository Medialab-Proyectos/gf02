"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

const quotes = [
  {
    text: "Complete documentation and provenance directly influence a vehicle’s value and collectability.",
    source: "Hagerty",
  },
  {
    text: "Listings with detailed photos, records, and history consistently perform 10% - 20% better final price.",
    source: "Bring a Trailer",
  },
  {
    text: "Well-documented service history helps retain value and buyer confidence.",
    source: "Kelley Blue Book",
  },
  {
    text: "Transparency and digital trust features increase buyer confidence.",
    source: "Deloitte",
  },
]

export function CredibilitySection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % quotes.length)
    }, 8000)

    return () => clearInterval(interval)
  }, [])

  const scrollToWaitlist = () => {
    const element = document.getElementById("waitlist")
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="credibility" className="py-24 px-4 bg-[#1E1F22]">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#E5DCC5] mb-4">The Shift to Digital Heritage</h2>
        </motion.div>

        <div className="relative h-64 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
            >
              <p className="text-2xl md:text-3xl text-[#E5DCC5] font-body mb-6 max-w-3xl">
                {quotes[currentIndex].text}
              </p>
              <p className="text-[#C9B68F] font-semibold italic">— {quotes[currentIndex].source}</p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {quotes.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-[#C9B68F] w-8" : "bg-[#A6A4A1]"
              }`}
              aria-label={`Go to quote ${index + 1}`}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mt-12"
        >
          <button
            onClick={scrollToWaitlist}
            className="bg-[#C9B68F] text-[#111214] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#E5DCC5] transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Build It, Log It, Sell It for More
          </button>
        </motion.div>
      </div>
    </section>
  )
}
