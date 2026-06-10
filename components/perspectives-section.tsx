"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Wrench, Building2, Cog, ArrowRight } from "lucide-react"

const perspectives = [
  {
    icon: Wrench,
    title: "Enthusiasts",
    tagline: "Preserve the story behind your vehicle.",
    bullets: [
      "Maintenance",
      "Upgrades",
      "Photos",
      "Documentation",
      "Resale preparation",
    ],
    cta: "Learn More",
    href: "/about",
  },
  {
    icon: Building2,
    title: "Vehicle Storage & Stewardship",
    tagline: "Extend your stewardship from the vehicle to its provenance.",
    bullets: [
      "Vehicle records",
      "Member communications",
      "Documentation management",
      "Premium ownership experience",
    ],
    cta: "Learn More",
    href: "/about",
    featured: true,
  },
  {
    icon: Cog,
    title: "Service Providers",
    tagline: "Make your work part of the vehicle\u2019s story.",
    bullets: [
      "Service documentation",
      "Historical attribution",
      "Customer transparency",
    ],
    cta: "Learn More",
    href: "/about",
  },
]

export function PerspectivesSection() {
  return (
    <section id="perspectives" className="py-24 px-4 bg-[#111214]">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#E5DCC5] mb-4 text-balance">
            Choose Your Perspective
          </h2>
          <p className="text-[#A6A4A1] font-body text-lg">GarageFolio works for everyone in a vehicle&apos;s life.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {perspectives.map((p, index) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`group relative rounded-xl p-8 flex flex-col gap-6 border transition-all duration-300 hover:-translate-y-1.5 ${
                p.featured
                  ? "bg-[#C9B68F]/10 border-[#C9B68F]/50 shadow-[0_0_40px_rgba(201,182,143,0.12)] hover:shadow-[0_8px_56px_rgba(201,182,143,0.2)]"
                  : "bg-[#232527] border-[rgba(255,255,255,0.06)] hover:border-[#C9B68F]/30 hover:shadow-[0_8px_40px_rgba(201,182,143,0.1)]"
              }`}
            >
              {p.featured && (
                <span className="absolute top-4 right-4 text-[10px] uppercase tracking-widest text-[#1E1F22] bg-[#C9B68F] px-2 py-1 rounded font-semibold">
                  Featured
                </span>
              )}
              <div className="flex flex-col gap-3">
                <div className="p-3 bg-[#C9B68F]/10 rounded-lg w-fit">
                  <p.icon className="w-6 h-6 text-[#C9B68F]" />
                </div>
                <h3 className="text-2xl font-bold text-[#E5DCC5]">{p.title}</h3>
                <p className="text-[#A6A4A1] font-body leading-relaxed">{p.tagline}</p>
              </div>

              <ul className="flex flex-col gap-2 flex-1">
                {p.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2 text-[#E5DCC5] font-body text-sm">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#C9B68F] flex-shrink-0" />
                    {bullet}
                  </li>
                ))}
              </ul>

              <Link
                href={p.href}
                className={`inline-flex items-center gap-2 text-sm font-semibold transition-colors duration-200 ${
                  p.featured
                    ? "text-[#C9B68F] hover:text-[#E5DCC5]"
                    : "text-[#A6A4A1] hover:text-[#C9B68F]"
                }`}
              >
                {p.cta}
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
