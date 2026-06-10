"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export function CredibilitySection() {
  const scrollToWaitlist = () => {
    document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="credibility" className="py-24 px-4 bg-[#1E1F22]">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center gap-8"
        >
          {/* Decorative quote mark */}
          <span className="text-[#C9B68F] text-8xl font-serif leading-none select-none" aria-hidden="true">
            &ldquo;
          </span>

          <blockquote className="text-2xl md:text-3xl text-[#E5DCC5] font-body leading-relaxed max-w-3xl text-balance -mt-10">
            Handing off a vehicle without its history is like sharing an album with half the photos missing. The car survives, but the meaning fades.
          </blockquote>

          <footer className="flex flex-col items-center gap-1">
            <cite className="text-[#C9B68F] font-semibold not-italic text-lg">McKeel Hagerty</cite>
            <span className="text-[#A6A4A1] font-body text-sm">CEO, Hagerty</span>
          </footer>

          {/* Divider */}
          <div className="w-24 h-px bg-[#C9B68F]/30 mt-2" />

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Button
              onClick={scrollToWaitlist}
              size="lg"
              className="bg-[#C9B68F] hover:bg-[#B49F79] text-[#1E1F22] font-semibold px-10"
            >
              Join GarageFolio
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
