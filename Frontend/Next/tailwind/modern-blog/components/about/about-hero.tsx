"use client"

import { useTranslations } from "@/hooks/use-translations"

export function AboutHero() {
  const { t } = useTranslations()

  return (
    <section className="py-20 bg-gradient-to-br from-primary/10 to-accent/10">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold font-serif mb-6">{t("about.title")}</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">{t("about.subtitle")}</p>
      </div>
    </section>
  )
}
