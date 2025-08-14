"use client"

import { useTranslations } from "@/hooks/use-translations"

export function BlogHeader() {
  const { t } = useTranslations()

  return (
    <div className="text-center mb-12">
      <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4">{t("blog.title")}</h1>
      <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">{t("blog.subtitle")}</p>
    </div>
  )
}
