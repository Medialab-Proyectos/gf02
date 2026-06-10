import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ProblemSection } from "@/components/problem-section"
import { EcosystemSection } from "@/components/ecosystem-section"
import { ProcessSection } from "@/components/process-section"
import { PerspectivesSection } from "@/components/perspectives-section"
import { FeaturesSection } from "@/components/features-section"
import { CredibilitySection } from "@/components/credibility-section"
import { WaitlistSection } from "@/components/waitlist-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <ProblemSection />
      <EcosystemSection />
      <ProcessSection />
      <PerspectivesSection />
      <FeaturesSection />
      <CredibilitySection />
      <WaitlistSection />
      <Footer />
    </main>
  )
}
