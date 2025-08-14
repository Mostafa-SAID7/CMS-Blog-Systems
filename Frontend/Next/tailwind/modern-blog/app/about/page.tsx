import { AboutHero } from "@/components/about/about-hero"
import { AboutContent } from "@/components/about/about-content"
import { AboutStats } from "@/components/about/about-stats"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About | InkFlow",
  description: "Learn more about InkFlow and our mission to create amazing content",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <AboutHero />
      <AboutContent />
      <AboutStats />
    </div>
  )
}
