"use client"

import { motion } from "framer-motion"
import { Camera, Link2, Archive } from "lucide-react"

const steps = [
  {
    icon: Camera,
    step: "01",
    title: "Capture",
    description: "Document meaningful events.",
    image: "/snap.JPG",
  },
  {
    icon: Link2,
    step: "02",
    title: "Connect",
    description:
      "Bring together contributions from enthusiasts, storage stewards, and service providers.",
    image: "/describe.JPG",
  },
  {
    icon: Archive,
    step: "03",
    title: "Preserve",
    description:
      "Create a lasting and transferable vehicle history — without changing how you already work.",
    image: "/track.png",
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
          <h2 className="text-4xl md:text-5xl font-bold text-[#E5DCC5] mb-4 text-balance">How It Works</h2>
          <p className="text-[#A6A4A1] font-body text-lg">Three steps. One transferable record.</p>
        </motion.div>

        <div className="relative">
          {/* Connector Line */}
          <div className="hidden lg:block absolute top-[88px] left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#C9B68F] to-transparent" />

          <div className="grid sm:grid-cols-3 gap-10 relative">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="flex flex-col items-center text-center space-y-5"
              >
                <div className="relative">
                  <img
                    src={step.image || "/placeholder.svg"}
                    alt={step.title}
                    className="w-44 h-44 object-cover rounded-full border-4 border-[#C9B68F]/20"
                  />
                  <div className="absolute -bottom-2 -right-2 p-3.5 bg-[#C9B68F] rounded-full">
                    <step.icon className="w-5 h-5 text-[#1E1F22]" />
                  </div>
                </div>
                <div>
                  <span className="text-[#C9B68F] text-sm font-semibold tracking-widest uppercase font-body">
                    {step.step}
                  </span>
                  <h3 className="text-2xl font-bold text-[#E5DCC5] mt-1 mb-2">{step.title}</h3>
                  <p className="text-[#A6A4A1] font-body leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex justify-center mt-16"
        >
          <a
            href="#waitlist"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" })
            }}
            className="inline-flex items-center gap-2 border border-[#C9B68F] text-[#C9B68F] px-8 py-4 rounded-lg font-semibold text-base hover:bg-[#C9B68F] hover:text-[#1E1F22] transition-all duration-300"
          >
            See a Sample Provenance Report
          </a>
        </motion.div>
      </div>
    </section>
  )
}
