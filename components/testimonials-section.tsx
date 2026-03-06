"use client"

import { motion } from "framer-motion"

const testimonials = [
  {
    persona: "The Builder",
    quote: "Finally, a way to prove every part, mod, and milestone.",
    image: "/builder.png",
  },
  {
    persona: "The Professional",
    quote: "My clients trust cars backed by clean, verifiable histories.",
    image: "/professional.png",
  },
  {
    persona: "The Collector",
    quote: "Now every car in my collection carries a story that endures.",
    image: "/collector.png",
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 px-4 bg-[#111214]">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#E5DCC5] mb-4">For Enthusiasts, By Enthusiasts</h2>
          <p className="text-[#A6A4A1] font-body text-lg">
            Built by people who know every car has a soul worth preserving.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.persona}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-[#232527] rounded-xl overflow-hidden hover:shadow-[0_0_30px_rgba(201,182,143,0.15)] transition-all duration-300"
            >
              <div className="overflow-hidden">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.persona}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#C9B68F] mb-3">{testimonial.persona}</h3>
                <p className="text-[#E5DCC5] font-body text-lg italic">"{testimonial.quote}"</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
