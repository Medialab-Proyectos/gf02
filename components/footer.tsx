"use client"

import Image from "next/image"
import { Instagram } from "lucide-react"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-[#111214] border-t border-[rgba(255,255,255,0.1)] py-16 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Logo and Tagline */}
          <div className="space-y-3">
            <button onClick={scrollToTop} className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <Image
                src="/garagefolio-logo.svg"
                alt="Garagefolio"
                width={40}
                height={40}
                className="size-28 h-[33px]"
              />
              <span className="text-2xl font-bold text-[#E5DCC5]">{""}</span>
            </button>
            <p className="text-[#A6A4A1] font-body italic">Made by enthusiasts. Built for every story.</p>
          </div>

          <div className="flex justify-start md:justify-end items-start">
            <a
              href="https://www.instagram.com/garagefolio?igsh=MTZxb2xsd213NmIzZg=="
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#E5DCC5] hover:text-[#C9B68F] transition-colors"
              aria-label="Follow us on Instagram"
            >
              <Instagram className="w-8 h-8" />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[rgba(255,255,255,0.1)] text-center">
          <p className="text-[#A6A4A1] font-body italic">Built with passion and precision.</p>
        </div>
      </div>
    </footer>
  )
}
