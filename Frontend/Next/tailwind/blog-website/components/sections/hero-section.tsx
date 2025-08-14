"use client"

import { Button } from "@/components/ui/button"
import { LottieAnimation } from "@/components/ui/lottie-animation"
import { ArrowRight, BookOpen } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 z-0">
        <LottieAnimation
          src="https://lottie.host/4f8c5c7e-8b5a-4c5a-9c8d-2e3f4a5b6c7d/abcdefghij.json"
          className="w-full h-full opacity-20"
          loop
          autoplay
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Welcome to{" "}
            <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">ModernBlog</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Discover insights, stories, and thoughts on technology, design, and innovation. Join our community of
            forward-thinking readers.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg" className="animate-pulse-glow">
              <Link href="/blog" className="flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                Explore Articles
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>

            <Button variant="outline" size="lg" asChild>
              <Link href="/about">Learn More</Link>
            </Button>
          </div>

          {/* Floating Elements */}
          <div className="flex justify-center space-x-8 mt-12">
            <div className="animate-float">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <BookOpen className="h-8 w-8 text-primary" />
              </div>
            </div>
            <div className="animate-float" style={{ animationDelay: "1s" }}>
              <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center">
                <ArrowRight className="h-8 w-8 text-secondary-foreground" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
