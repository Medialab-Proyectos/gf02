"use client"

import { motion } from "framer-motion"
import { Camera, FileText, TrendingUp, Key } from "lucide-react"

const steps = [
  {
    icon: Camera,
    title: "Snap",
    description: "Smart Capture",
    image: "/snap.JPG",
  },
  {
    icon: FileText,
    title: "Describe",
    description: "Hands-Free Logging",
    image: "/describe.JPG",
  },
  {
    icon: TrendingUp,
    title: "Track",
    description: "Provenance Timeline",
    image: "/track.JPG",
  },
  {
    icon: Key,
    title: "Showcase",
    description: "Preserved Legacy",
    image: "/owner-handing-car-keys.jpg",
  },
]

export function ProcessSection() {
  return (
    <section id="how-it-works" className="py-24 px-4 bg-[#1E1F22]">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#E5DCC5] mb-4">Your Story, Simplified</h2>
          <p className="text-[#A6A4A1] font-body text-lg">Four steps to preserve your automotive legacy.</p>
        </motion.div>

        <div className="relative">
          {/* Connector Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#C9B68F] to-transparent -translate-y-1/2" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="flex flex-col items-center text-center space-y-4"
              >
                <div className="relative">
                  <img
                    src={step.image || "/placeholder.svg"}
                    alt={step.title}
                    className="w-48 h-48 object-cover rounded-full border-4 border-[#C9B68F]/20"
                  />
                  <div className="absolute -bottom-2 -right-2 p-4 bg-[#C9B68F] rounded-full">
                    <step.icon className="w-6 h-6 text-[#1E1F22]" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#E5DCC5] mb-2">{step.title}</h3>
                  <p className="text-[#A6A4A1] font-body">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
