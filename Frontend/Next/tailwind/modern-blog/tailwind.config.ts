import type { Config } from "tailwindcss"
import defaultConfig from "shadcn/ui/tailwind.config"

const config: Config = {
  ...defaultConfig,
  content: [
    ...defaultConfig.content,
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    ...defaultConfig.theme,
    extend: {
      ...defaultConfig.theme.extend,
      colors: {
        ...defaultConfig.theme.extend.colors,
        "light-bg": "rgb(var(--color-light-bg) / <alpha-value>)",
        "dark-bg": "rgb(var(--color-dark-bg) / <alpha-value>)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        serif: ["var(--font-playfair)", "Georgia", "serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
        "scale-in": "scaleIn 0.4s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.9)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "none",
            color: "inherit",
            a: {
              color: "rgb(59 130 246)",
              textDecoration: "none",
              "&:hover": {
                textDecoration: "underline",
              },
            },
            "h1, h2, h3, h4, h5, h6": {
              color: "inherit",
              fontFamily: "var(--font-inter)",
            },
            code: {
              color: "inherit",
              backgroundColor: "rgb(243 244 246)",
              padding: "0.25rem 0.375rem",
              borderRadius: "0.25rem",
              fontSize: "0.875em",
            },
            "code::before": {
              content: '""',
            },
            "code::after": {
              content: '""',
            },
            pre: {
              backgroundColor: "rgb(31 41 55)",
              color: "rgb(243 244 246)",
            },
            blockquote: {
              borderLeftColor: "rgb(59 130 246)",
              color: "inherit",
            },
          },
        },
      },
    },
  },
  plugins: [...defaultConfig.plugins, require("@tailwindcss/typography"), require("tailwindcss-animate")],
}

export default config
