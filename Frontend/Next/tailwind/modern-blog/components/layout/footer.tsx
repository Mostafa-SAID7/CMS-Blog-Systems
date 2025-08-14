"use client"

import Link from "next/link"
import { useTranslations } from "@/hooks/use-translations"
import { Github, Twitter, Linkedin } from "lucide-react"

export function Footer() {
  const { t } = useTranslations()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">I</span>
              </div>
              <span className="font-bold text-xl gradient-text">InkFlow</span>
            </Link>
            <p className="text-gray-600 dark:text-gray-400 mb-4 max-w-md">{t("footer.description")}</p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Github className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-4">{t("footer.quickLinks")}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">
                  {t("nav.home")}
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">
                  {t("nav.blog")}
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">
                  {t("nav.about")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-4">{t("footer.legal")}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">
                  {t("footer.privacy")}
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">
                  {t("footer.terms")}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            © {currentYear} InkFlow. {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  )
}
