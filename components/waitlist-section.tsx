"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle2 } from 'lucide-react'

export function WaitlistSection() {
  const [email, setEmail] = useState("")
  const [interest, setInterest] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, interest }),
      })

      if (!response.ok) {
        throw new Error('Failed to send email')
      }

      setIsSubmitted(true)
      setEmail("")
      setInterest("")
    } catch (err) {
      setError("Hubo un error al enviar el formulario. Por favor intenta de nuevo.")
      console.error('[v0] Error:', err)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section
      id="waitlist"
      className="relative py-24 px-4 overflow-hidden"
      style={{
        backgroundImage: "url(/waitlist-garage-bg.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[rgba(30,31,34,0.85)]" />

      <div className="container mx-auto max-w-2xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#E5DCC5] mb-4">Get Early Access</h2>
          <p className="text-[#A6A4A1] font-body text-lg">
            {"Great stories don't belong in dusty folders.\nPreserve your car's legacy — one log at a time.\n"}
          </p>
        </motion.div>

        {isSubmitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-[#232527] p-8 md:p-12 rounded-xl text-center space-y-6"
          >
            <div className="flex justify-center">
              <div className="bg-[#C9B68F] rounded-full p-4">
                <CheckCircle2 className="w-12 h-12 text-[#1E1F22]" />
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="text-3xl font-bold text-[#E5DCC5]">Thanks for signing up!</h3>
              <p className="text-[#A6A4A1] font-body text-lg leading-relaxed">
                You're now part of the GarageFolio community. We'll keep you posted as we roll out new features and updates.
              </p>
            </div>

            <Button
              onClick={() => setIsSubmitted(false)}
              variant="outline"
              className="border-[#C9B68F] text-[#C9B68F] hover:bg-[#C9B68F] hover:text-[#1E1F22] font-semibold"
            >
              {"Add another email"}
            </Button>
          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="space-y-4 bg-[#232527] p-8 rounded-xl"
          >
            <div>
              <Input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-[#1E1F22] border-[rgba(255,255,255,0.1)] text-[#E5DCC5] placeholder:text-[#A6A4A1] focus:border-[#C9B68F] h-12"
              />
            </div>

            <div>
              <Select value={interest} onValueChange={setInterest} required>
                <SelectTrigger className="bg-[#1E1F22] border-[rgba(255,255,255,0.1)] text-[#E5DCC5] h-12">
                  <SelectValue placeholder="What will you use GarageFolio for" />
                </SelectTrigger>
                <SelectContent className="bg-[#232527] border-[rgba(255,255,255,0.1)]">
                  <SelectItem value="tracking-maintenance" className="text-[#E5DCC5]">
                    Tracking maintenance & repairs
                  </SelectItem>
                  <SelectItem value="documenting-upgrades" className="text-[#E5DCC5]">
                    Documenting upgrades & mods
                  </SelectItem>
                  <SelectItem value="preparing-sale" className="text-[#E5DCC5]">
                    Preparing for a future sale
                  </SelectItem>
                  <SelectItem value="building-provenance" className="text-[#E5DCC5]">
                    Building provenance for my collection
                  </SelectItem>
                  <SelectItem value="managing-multiple" className="text-[#E5DCC5]">
                    Managing multiple vehicles
                  </SelectItem>
                  <SelectItem value="other" className="text-[#E5DCC5]">
                    Other
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            {error && (
              <p className="text-red-400 text-sm text-center font-body">{error}</p>
            )}

            <Button
              type="submit"
              size="lg"
              disabled={isLoading}
              className="w-full bg-[#C9B68F] hover:bg-[#B49F79] text-[#1E1F22] font-semibold h-12 disabled:opacity-50"
            >
              {isLoading ? "Enviando..." : "Start Your Logbook"}
            </Button>

            <p className="text-[#A6A4A1] text-sm text-center font-body">No spam. Just provenance.</p>
          </motion.form>
        )}
      </div>
    </section>
  )
}
