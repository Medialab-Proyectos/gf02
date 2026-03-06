"use client"

import { motion } from "framer-motion"
import { Camera, Mic, Clock, Share2 } from "lucide-react"

const features = [
  {
    icon: Camera,
    title: "Photo Logging",
    description:
      "Capture every detail with high-quality photos, even recepits and invoices. Garagefolio will extract all the information to document repairs, upgrades, and milestones automatically.",
    image: "/Photolog.JPG",
  },
  {
    icon: Mic,
    title: "Voice to Log",
    description: " Record notes hands-free while you work. Your voice becomes instant documentation.",
    image: "/voicelog.JPG",
  },
  {
    icon: Clock,
    title: "Provenance Timeline",
    description:
      "Watch your vehicle's story unfold chronologically. Every entry, perfectly organized. Get maintenance reminders automatically.",
    image: "/track.png",
  },
  {
    icon: Share2,
    title: "Share & Sell",
    description: "Build trust with verified history. Show buyers the complete story of your vehicle via link or PDF.",
    image: "/sharesell.JPG",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 px-4 bg-[#111214] my-[-77px]">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#E5DCC5] mb-4">Built for Every Detail</h2>
          <p className="text-[#A6A4A1] font-body text-lg">Show features through storytelling, not specs.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-[#232527] rounded-xl p-6 hover:shadow-[0_0_30px_rgba(201,182,143,0.15)] transition-all duration-300"
            >
              <div className="mb-4 overflow-hidden rounded-lg">
                <img
                  src={feature.image || "/placeholder.svg"}
                  alt={feature.title}
                  className="w-full object-cover object-top group-hover:scale-105 transition-transform duration-300 h-96"
                />
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#C9B68F]/10 rounded-lg">
                  <feature.icon className="w-6 h-6 text-[#C9B68F]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#E5DCC5] mb-2">{feature.title}</h3>
                  <p className="text-[#A6A4A1] font-body">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
