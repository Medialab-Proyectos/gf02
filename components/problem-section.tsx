"use client"

import { motion } from "framer-motion"
import { User, Building2, Users } from "lucide-react"

const columns = [
  {
    icon: User,
    title: "Enthusiast",
    description:
      "Records scattered across phones, inboxes, folders, and filing cabinets.",
  },
  {
    icon: Building2,
    title: "Vehicle Storage & Stewardship",
    description:
      "Custody logs, service notes, and member records scattered across inboxes, spreadsheets, and internal tools.",
  },
  {
    icon: Users,
    title: "Future Custodians",
    description:
      "Important history disappears with every ownership transfer.",
  },
]

export function ProblemSection() {
  return (
    <section id="problem" className="py-24 px-4 bg-[#1E1F22]">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#E5DCC5] mb-4 text-balance">
            The Industry Preserves Cars.{" "}
            <span className="text-[#C9B68F]">Nobody Preserves Provenance.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {columns.map((col, index) => (
            <motion.div
              key={col.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-[#232527] rounded-xl p-8 border border-[rgba(255,255,255,0.06)] flex flex-col gap-4"
            >
              <div className="p-3 bg-[#C9B68F]/10 rounded-lg w-fit">
                <col.icon className="w-6 h-6 text-[#C9B68F]" />
              </div>
              <h3 className="text-xl font-semibold text-[#E5DCC5]">{col.title}</h3>
              <p className="text-[#A6A4A1] font-body leading-relaxed">{col.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <p className="text-2xl md:text-3xl font-semibold text-[#E5DCC5] text-balance">
            Valuable vehicles deserve a history that survives.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
