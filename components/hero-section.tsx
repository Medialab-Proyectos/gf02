"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function HeroSection() {
  const scrollToWaitlist = () => {
    const element = document.getElementById("waitlist")
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url(/hero-garage-bg.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Gradient Overlay with vignette effect */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(30,31,34,0.3) 0%, rgba(17,18,20,0.75) 50%, rgba(17,18,20,0.95) 100%), linear-gradient(180deg, rgba(30,31,34,0.0) 0%, rgba(17,18,20,0.85) 70%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto leading-7 tracking-normal">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="leading-tight text-balance" style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}>
              <span className="font-extrabold text-[#C9B68F]">Every vehicle has a story.</span>
              <br />
              <span className="font-extrabold text-[#E5DCC5]">GarageFolio makes sure it stays with it.</span>
            </h1>

            <p className="font-body text-[#A6A4A1] text-lg max-w-[520px]">
              The enthusiast vehicle industry has become exceptionally good at preserving cars. What remains fragmented is the history behind them.
            </p>

            <p className="font-body text-[#E5DCC5] text-lg max-w-[520px]">
              Document, organize, and transfer the maintenance history, restoration work, stewardship records, and stories that define a vehicle&apos;s long-term credibility and value.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                className="bg-[#C9B68F] hover:bg-[#B49F79] text-[#1E1F22] font-semibold rounded-lg"
                onClick={scrollToWaitlist}
              >
                Start Your GarageFolio
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="bg-[rgba(201,182,143,0.15)] border border-[#C9B68F] text-[#E5DCC5] hover:bg-[#C9B68F] hover:text-[#1E1F22] rounded-lg"
                onClick={() => {
                  const element = document.getElementById("perspectives")
                  if (element) {
                    const offset = 80
                    const pos = element.getBoundingClientRect().top + window.pageYOffset - offset
                    window.scrollTo({ top: pos, behavior: "smooth" })
                  }
                }}
              >
                For Vehicle Storage &amp; Stewardship
              </Button>
            </div>

            <p className="text-[#C9B68F] text-[15px] font-body leading-7">
              Your information is always private and secured.
            </p>
          </motion.div>

          {/* Right Content - App Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:flex justify-center"
          >
            <img
              src="/app-mockup.png"
              alt="Garagefolio App Preview"
              className="max-w-[600px] size-auto w-[73%]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
