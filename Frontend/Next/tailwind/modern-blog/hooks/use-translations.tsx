"use client"

import { useLanguage } from "@/components/providers/language-provider"
import { translations } from "@/lib/translations"

export function useTranslations() {
  const { language } = useLanguage()

  const t = (key: string): string => {
    const keys = key.split(".")
    let value: any = translations[language]

    for (const k of keys) {
      value = value?.[k]
    }

    return value || key
  }

  return { t, language }
}
