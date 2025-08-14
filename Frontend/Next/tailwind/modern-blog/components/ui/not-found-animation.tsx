"use client"

import { useEffect, useRef } from "react"

export function NotFoundAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = 300
    canvas.height = 200

    let animationId: number

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw 404 with floating animation
      const time = Date.now() * 0.002
      const offsetY = Math.sin(time) * 10

      ctx.font = "bold 48px Arial"
      ctx.fillStyle = "#3B82F6"
      ctx.textAlign = "center"
      ctx.fillText("404", canvas.width / 2, canvas.height / 2 + offsetY)

      // Draw floating particles
      for (let i = 0; i < 5; i++) {
        const x = 50 + i * 50 + Math.sin(time + i) * 20
        const y = 50 + Math.cos(time + i * 0.5) * 30

        ctx.beginPath()
        ctx.arc(x, y, 3, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(99, 102, 241, ${0.5 + Math.sin(time + i) * 0.3})`
        ctx.fill()
      }

      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
    }
  }, [])

  return (
    <div className="flex justify-center mb-8">
      <canvas ref={canvasRef} className="max-w-full h-auto" />
    </div>
  )
}
