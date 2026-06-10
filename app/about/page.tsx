import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About GarageFolio | Our Story, Mission & Vision",
  description:
    "Learn why GarageFolio exists: to ensure that a vehicle's history never gets lost, connecting the people who create that history into a single trusted record.",
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#111214]">
      <Header />

      {/* Hero */}
      <section className="pt-40 pb-20 px-4">
        <div className="container mx-auto max-w-3xl text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-[#E5DCC5] mb-6 text-balance leading-tight">
            About <span className="text-[#C9B68F]">GarageFolio</span>
          </h1>
          <p className="text-[#A6A4A1] font-body text-xl leading-relaxed">
            We&apos;re building the layer that connects the people who already create vehicle history into a shared record that&apos;s preserved, organized, and credible.
          </p>
        </div>
      </section>

      {/* Sections */}
      <div className="container mx-auto max-w-3xl px-4 pb-24 space-y-20">

        {/* The Problem */}
        <article>
          <h2 className="text-3xl font-bold text-[#C9B68F] mb-6">The Problem</h2>
          <div className="space-y-5 text-[#A6A4A1] font-body text-lg leading-relaxed">
            <p>
              The enthusiast world has become exceptionally good at preserving cars. Premium storage vaults protect them, master craftsmen restore them, specialists maintain them, auction houses market them. Enormous care goes into the physical asset.
            </p>
            <p>
              But the asset that determines future value — the documented history behind the car — gets none of that protection. It lives in invoices, email inboxes, photo galleries, filing cabinets, and fading memories. And with every ownership transfer, more of it disappears.
            </p>
            <p className="text-[#E5DCC5] font-semibold text-xl">
              The industry preserves cars. Nobody preserves provenance.
            </p>
          </div>
        </article>

        <div className="w-full h-px bg-[rgba(255,255,255,0.08)]" />

        {/* The Insight */}
        <article>
          <h2 className="text-3xl font-bold text-[#C9B68F] mb-6">The Insight</h2>
          <div className="space-y-5 text-[#A6A4A1] font-body text-lg leading-relaxed">
            <p>
              The history already exists. It&apos;s being created every day.
            </p>
            <p>
              A restoration shop documents a rebuild. A mechanic logs the work. A vehicle storage and stewardship provider verifies the vehicle&apos;s custody. An auction house records the sale. An owner photographs an upgrade. Every participant in a vehicle&apos;s life contributes a piece of its story as a byproduct of doing their job well.
            </p>
            <p>
              Because history creates confidence. Confidence creates trust. And trust ultimately influences how enthusiast vehicles are valued, understood, and passed on.
            </p>
            <p>
              The records are real. They&apos;re just scattered, disconnected, and owned by no one. Everyone contributes to the story. Nobody connects the contributions.
            </p>
          </div>
        </article>

        <div className="w-full h-px bg-[rgba(255,255,255,0.08)]" />

        {/* The Mission */}
        <article>
          <h2 className="text-3xl font-bold text-[#C9B68F] mb-6">The Mission</h2>
          <div className="space-y-5 text-[#A6A4A1] font-body text-lg leading-relaxed">
            <p>
              GarageFolio exists to ensure a vehicle&apos;s history never gets lost.
            </p>
            <p>
              We&apos;re building the layer that connects the people who already create that history — owners, Vehicle Storage and Stewardship, and service providers — into a shared record that&apos;s preserved, organized, and credible. Not reconstructed years later from a shoebox of receipts. Captured as it happens, and verified by the people in the best position to verify it.
            </p>
          </div>
        </article>

        <div className="w-full h-px bg-[rgba(255,255,255,0.08)]" />

        {/* The Vision */}
        <article>
          <h2 className="text-3xl font-bold text-[#C9B68F] mb-6">The Vision</h2>
          <div className="space-y-5 text-[#A6A4A1] font-body text-lg leading-relaxed">
            <p>
              A vehicle&apos;s history should not be rebuilt every time ownership changes. Yet today, every sale, inheritance, restoration, and transfer risks losing part of the story.
            </p>
            <p>
              We&apos;re building toward a world where that does not happen. Where buying a collector vehicle means receiving its complete history along with the keys — ownership history, maintenance, restoration, storage, events, awards, parts, and market record — already assembled into a single trusted timeline. Where a vehicle&apos;s history travels with it, getting richer with every steward who adds to it.
            </p>
            <p>
              Today, GarageFolio helps enthusiasts, storage and stewardship businesses, and service professionals preserve, organize, and protect vehicle history.
            </p>
            <p>
              Tomorrow, GarageFolio becomes the shared provenance platform that connects them.
            </p>
            <p className="text-[#E5DCC5] font-semibold text-xl">
              Ultimately, our goal is simple: ensure that a vehicle&apos;s history can survive every owner, every steward, and every chapter of its life.
            </p>
          </div>
        </article>

        {/* Back CTA */}
        <div className="flex justify-center pt-4">
          <a
            href="/"
            className="inline-flex items-center gap-2 border border-[#C9B68F] text-[#C9B68F] px-8 py-4 rounded-lg font-semibold text-base hover:bg-[#C9B68F] hover:text-[#1E1F22] transition-all duration-300"
          >
            &larr; Back to GarageFolio
          </a>
        </div>
      </div>

      <Footer />
    </main>
  )
}
