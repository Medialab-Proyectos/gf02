import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ProblemSection } from "@/components/problem-section"
import { EcosystemSection } from "@/components/ecosystem-section"
import { ProcessSection } from "@/components/process-section"
import { PerspectivesSection } from "@/components/perspectives-section"
import { FeaturesSection } from "@/components/features-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { CredibilitySection } from "@/components/credibility-section"
import { WaitlistSection } from "@/components/waitlist-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      {/* 1. Hero — Awareness */}
      <HeroSection />
      {/* 2. Problem — Identify the gap */}
      <ProblemSection />
      {/* 3. Ecosystem — Frame the opportunity */}
      <EcosystemSection />
      {/* 4. How It Works — Solution clarity */}
      <ProcessSection />
      {/* 5. Choose Your Perspective — Segmentation */}
      <PerspectivesSection />
      {/* 6. Features — Product depth */}
      <FeaturesSection />
      {/* 7. Testimonials — Social proof */}
      <TestimonialsSection />
      {/* 8. Quote — Authority / credibility signal (McKeel Hagerty) */}
      <CredibilitySection />
      {/* 9. Waitlist CTA — Conversion */}
      <WaitlistSection />
      <Footer />
    </main>
  )
}
