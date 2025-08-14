"use client"

import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/providers/language-provider"
import { Languages } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="w-9 px-0">
          <Languages className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Toggle language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setLanguage("en")}>
          <span className="mr-2">🇺🇸</span>
          <span>English</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLanguage("ar")}>
          <span className="mr-2">🇸🇦</span>
          <span>العربية</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
