"use client"

import { motion } from "framer-motion"
import { Car, User, Building2, Wrench, Cog, Truck, Gavel, Sparkles } from "lucide-react"

const nodes = [
  { icon: User, label: "Owner", angle: 0 },
  { icon: Building2, label: "Vehicle Storage & Stewardship", angle: 51 },
  { icon: Wrench, label: "Restoration Shop", angle: 103 },
  { icon: Cog, label: "Mechanic", angle: 154 },
  { icon: Sparkles, label: "Detailer", angle: 206 },
  { icon: Truck, label: "Transporter", angle: 257 },
  { icon: Gavel, label: "Auction House", angle: 309 },
]

function polarToCartesian(angleDeg: number, radiusPx: number) {
  const rad = ((angleDeg - 90) * Math.PI) / 180
  return {
    x: Math.cos(rad) * radiusPx,
    y: Math.sin(rad) * radiusPx,
  }
}

export function EcosystemSection() {
  const radius = 190

  return (
    <section id="ecosystem" className="py-24 px-4 bg-[#111214]">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#E5DCC5] mb-4 text-balance">
            Every Vehicle Has Multiple Stewards
          </h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Diagram */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex-shrink-0"
            style={{ width: 480, height: 480 }}
            aria-hidden="true"
          >
            {/* SVG lines from center to each node */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              viewBox="0 0 480 480"
            >
              {nodes.map((node) => {
                const { x, y } = polarToCartesian(node.angle, radius)
                return (
                  <line
                    key={node.label}
                    x1={240}
                    y1={240}
                    x2={240 + x}
                    y2={240 + y}
                    stroke="#C9B68F"
                    strokeOpacity={0.25}
                    strokeWidth={1.5}
                    strokeDasharray="4 4"
                  />
                )
              })}
            </svg>

            {/* Center node */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative z-10 flex flex-col items-center gap-2">
                <div className="w-20 h-20 rounded-full bg-[#C9B68F] flex items-center justify-center shadow-[0_0_40px_rgba(201,182,143,0.35)]">
                  <Car className="w-10 h-10 text-[#1E1F22]" />
                </div>
                <span className="text-[#C9B68F] text-xs font-semibold tracking-widest uppercase">Vehicle</span>
              </div>
            </div>

            {/* Outer nodes */}
            {nodes.map((node, i) => {
              const { x, y } = polarToCartesian(node.angle, radius)
              return (
                <motion.div
                  key={node.label}
                  initial={{ opacity: 0, scale: 0.7 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
                  className="absolute flex flex-col items-center gap-1"
                  style={{
                    left: 240 + x,
                    top: 240 + y,
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <div className="w-12 h-12 rounded-full bg-[#232527] border border-[#C9B68F]/30 flex items-center justify-center hover:border-[#C9B68F] hover:bg-[#C9B68F]/10 transition-all duration-300">
                    <node.icon className="w-5 h-5 text-[#C9B68F]" />
                  </div>
                  <span className="text-[#A6A4A1] text-[10px] font-body text-center leading-tight max-w-[80px] whitespace-normal">
                    {node.label}
                  </span>
                </motion.div>
              )
            })}
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="max-w-lg space-y-6"
          >
            <p className="text-[#E5DCC5] font-body text-xl leading-relaxed">
              Every participant creates valuable information as a byproduct of doing their job well.
            </p>
            <p className="text-[#A6A4A1] font-body text-lg leading-relaxed">
              GarageFolio connects those contributions into a single transferable record.
            </p>
            <a
              href="/about"
              className="inline-flex items-center gap-2 text-[#C9B68F] hover:text-[#E5DCC5] font-semibold text-base transition-colors duration-200"
            >
              Learn more about GarageFolio &rarr;
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
