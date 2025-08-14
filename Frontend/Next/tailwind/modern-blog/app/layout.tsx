import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/providers/theme-provider"
import { LanguageProvider } from "@/components/providers/language-provider"
import { Navigation } from "@/components/layout/navigation"
import { Footer } from "@/components/layout/footer"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

export const metadata: Metadata = {
  title: "InkFlow - Modern Blog Platform",
  description: "A modern, scalable blog platform with multi-language support",
  keywords: ["blog", "writing", "technology", "modern"],
  authors: [{ name: "InkFlow Team" }],
  openGraph: {
    title: "InkFlow - Modern Blog Platform",
    description: "A modern, scalable blog platform with multi-language support",
    type: "website",
    locale: "en_US",
    alternateLocale: "ar_SA",
  },
  twitter: {
    card: "summary_large_image",
    title: "InkFlow - Modern Blog Platform",
    description: "A modern, scalable blog platform with multi-language support",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        <ThemeProvider>
          <LanguageProvider>
            <div className="min-h-screen bg-light-bg dark:bg-dark-bg text-gray-900 dark:text-gray-100 transition-colors duration-300">
              <Navigation />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
