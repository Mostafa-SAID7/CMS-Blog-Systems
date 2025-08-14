"use client"

import type React from "react"

import { createContext, useContext, useEffect, useState } from "react"

type Language = "en" | "ar"

interface LanguageContextType {
  language: Language
  setLanguage: (language: Language) => void
  isRTL: boolean
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")
  const isRTL = language === "ar"

  useEffect(() => {
    // Load language from localStorage
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage) {
      setLanguage(savedLanguage)
    }
  }, [])

  useEffect(() => {
    // Update document direction and language
    document.documentElement.lang = language
    document.documentElement.dir = isRTL ? "rtl" : "ltr"

    // Save to localStorage
    localStorage.setItem("language", language)
  }, [language, isRTL])

  return <LanguageContext.Provider value={{ language, setLanguage, isRTL }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
