"use client"

import { Button } from "@/components/ui/button"
import { HeroAnimation } from "@/components/ui/hero-animation"
import { useTranslations } from "@/hooks/use-translations"
import Link from "next/link"
import { ArrowRight, BookOpen } from "lucide-react"

export function HeroSection() {
  const { t } = useTranslations()

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 z-0">
        <HeroAnimation />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 z-10" />

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold font-serif mb-6 animate-fade-in">
            <span className="gradient-text">{t("hero.title")}</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 animate-fade-in animation-delay-200">
            {t("hero.subtitle")}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in animation-delay-400">
            <Button asChild size="lg" className="btn-primary group">
              <Link href="/blog">
                <BookOpen className="mr-2 h-5 w-5" />
                {t("hero.readBlog")}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>

            <Button asChild variant="outline" size="lg" className="btn-secondary bg-transparent">
              <Link href="/about">{t("hero.learnMore")}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
