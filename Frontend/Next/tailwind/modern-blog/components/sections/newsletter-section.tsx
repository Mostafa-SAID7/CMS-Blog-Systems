"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useTranslations } from "@/hooks/use-translations"
import { Mail, CheckCircle } from "lucide-react"

export function NewsletterSection() {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const { t } = useTranslations()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsSubscribed(true)
    setIsLoading(false)
    setEmail("")
  }

  if (isSubscribed) {
    return (
      <section className="py-20 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-md mx-auto">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4">Thank you for subscribing!</h2>
            <p className="text-gray-600 dark:text-gray-400">
              You'll receive our latest updates and articles in your inbox.
            </p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 bg-gradient-to-r from-primary/10 to-accent/10">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <Mail className="h-12 w-12 text-primary mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">{t("newsletter.title")}</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg">{t("newsletter.subtitle")}</p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder={t("newsletter.placeholder")}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1"
              required
            />
            <Button type="submit" disabled={isLoading} className="btn-primary whitespace-nowrap">
              {isLoading ? "Subscribing..." : t("newsletter.subscribe")}
            </Button>
          </form>

          <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">No spam, unsubscribe at any time.</p>
        </div>
      </div>
    </section>
  )
}
