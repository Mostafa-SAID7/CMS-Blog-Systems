"use client"

import { useEffect, useRef } from "react"

interface LottieAnimationProps {
  src: string
  className?: string
  loop?: boolean
  autoplay?: boolean
}

export function LottieAnimation({ src, className = "", loop = true, autoplay = true }: LottieAnimationProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let animationInstance: any = null

    const loadLottie = async () => {
      try {
        // Dynamically import lottie-web to avoid SSR issues
        const lottie = (await import("lottie-web")).default

        if (containerRef.current) {
          animationInstance = lottie.loadAnimation({
            container: containerRef.current,
            renderer: "svg",
            loop,
            autoplay,
            path: src,
          })
        }
      } catch (error) {
        console.error("Failed to load Lottie animation:", error)
        // Fallback: show a simple animated div
        if (containerRef.current) {
          containerRef.current.innerHTML = `
            <div class="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg animate-pulse"></div>
          `
        }
      }
    }

    loadLottie()

    return () => {
      if (animationInstance) {
        animationInstance.destroy()
      }
    }
  }, [src, loop, autoplay])

  return <div ref={containerRef} className={className} />
}
