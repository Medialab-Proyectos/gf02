"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [mobileMenuOpen])

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false)
    setTimeout(() => {
      const element = document.getElementById(id)
      if (element) {
        const headerOffset = 80
        const elementPosition = element.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        })
      }
    }, 100)
  }

  const scrollToTop = () => {
    setMobileMenuOpen(false)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[rgba(30,31,34,0.95)] backdrop-blur-md border-b border-[rgba(255,255,255,0.1)]">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <button onClick={scrollToTop} className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Image src="/garagefolio-logo.svg" alt="Garagefolio" width={40} height={40} className="size-40" />
            <span className="text-[#E5DCC5] font-heading text-xl font-bold">{""}</span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("features")}
              className="text-[#E5DCC5] hover:text-[#C9B68F] transition-colors font-body"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("how-it-works")}
              className="text-[#E5DCC5] hover:text-[#C9B68F] transition-colors font-body"
            >
              How It Works
            </button>
            <button
              onClick={() => scrollToSection("credibility")}
              className="text-[#E5DCC5] hover:text-[#C9B68F] transition-colors font-body"
            >
              Testimonials
            </button>
            <Button
              onClick={() => scrollToSection("waitlist")}
              className="bg-[#C9B68F] hover:bg-[#B49F79] text-[#1E1F22] font-semibold"
            >
              Join Waitlist
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-[#E5DCC5] hover:text-[#C9B68F] transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#232527] border-t border-[rgba(255,255,255,0.1)]"
          >
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("features")}
                className="text-[#E5DCC5] hover:text-[#C9B68F] transition-colors font-body text-left py-2"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection("how-it-works")}
                className="text-[#E5DCC5] hover:text-[#C9B68F] transition-colors font-body text-left py-2"
              >
                How It Works
              </button>
              <button
                onClick={() => scrollToSection("credibility")}
                className="text-[#E5DCC5] hover:text-[#C9B68F] transition-colors font-body text-left py-2"
              >
                Testimonials
              </button>
              <Button
                onClick={() => scrollToSection("waitlist")}
                className="bg-[#C9B68F] hover:bg-[#B49F79] text-[#1E1F22] font-semibold w-full"
              >
                Join Waitlist
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
