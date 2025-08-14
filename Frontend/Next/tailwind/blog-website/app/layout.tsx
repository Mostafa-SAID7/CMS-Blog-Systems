import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/providers/theme-provider"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "ModernBlog - Insights & Stories",
  description:
    "A modern blog featuring the latest insights, stories, and thoughts on technology, design, and innovation.",
  keywords: ["blog", "technology", "design", "innovation", "insights"],
  authors: [{ name: "ModernBlog Team" }],
  openGraph: {
    title: "ModernBlog - Insights & Stories",
    description:
      "A modern blog featuring the latest insights, stories, and thoughts on technology, design, and innovation.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "ModernBlog - Insights & Stories",
    description:
      "A modern blog featuring the latest insights, stories, and thoughts on technology, design, and innovation.",
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
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="min-h-screen bg-background text-foreground">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
