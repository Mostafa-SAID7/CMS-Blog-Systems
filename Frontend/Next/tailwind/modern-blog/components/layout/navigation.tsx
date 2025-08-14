"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { LanguageToggle } from "@/components/ui/language-toggle"
import { useTranslations } from "@/hooks/use-translations"
import { useLanguage } from "@/components/providers/language-provider"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const { t } = useTranslations()
  const { isRTL } = useLanguage()

  const navigation = [
    { name: t("nav.home"), href: "/" },
    { name: t("nav.blog"), href: "/blog" },
    { name: t("nav.about"), href: "/about" },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">I</span>
            </div>
            <span className="font-bold text-xl gradient-text">InkFlow</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`font-medium transition-colors hover:text-primary ${
                  pathname === item.href ? "text-primary" : "text-gray-600 dark:text-gray-300"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Controls */}
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <LanguageToggle />

            {/* Mobile menu button */}
            <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-800">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`font-medium transition-colors hover:text-primary ${
                    pathname === item.href ? "text-primary" : "text-gray-600 dark:text-gray-300"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
