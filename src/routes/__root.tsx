import "@fontsource-variable/inter"
import { createRootRoute, HeadContent, Outlet, Scripts, useRouterState } from "@tanstack/react-router"
import type { ReactNode } from "react"
import { Navbar } from "~/components/navbar"
import { ThemeProvider, themeInitScript } from "~/components/theme/provider"
import { TooltipProvider } from "~/components/ui/tooltip"
import { htmlLang, LocaleProvider, localeFromPath } from "~/lib/i18n"
import appCss from "~/styles/globals.css?url"

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#fcfbfa" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      // Favicon：暖橙「D」（design/make_favicon.py 產生）
      { rel: "icon", href: "/favicon.ico", sizes: "48x48" },
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
    ],
    scripts: [
      // Umami 分析（沿用舊網站）
      { src: "https://cloud.umami.is/script.js", defer: true, "data-website-id": "c9c715f4-f1d1-4d08-acf9-c2376d5ec63d" },
    ],
  }),
  shellComponent: RootDocument,
  component: RootComponent,
})

/** 整份 HTML：<html lang> 跟住網址嘅語言 */
function RootDocument({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname })
  return (
    <html lang={htmlLang[localeFromPath(pathname)]} suppressHydrationWarning>
      <head>
        {/* 喺畫面出現之前套用深色模式，避免閃白 */}
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <HeadContent />
      </head>
      <body className="mx-auto min-h-screen max-w-3xl bg-background px-6 py-12 font-sans antialiased sm:py-20">
        {children}
        <Scripts />
      </body>
    </html>
  )
}

function RootComponent() {
  const pathname = useRouterState({ select: (s) => s.location.pathname })
  return (
    <LocaleProvider locale={localeFromPath(pathname)}>
      <ThemeProvider>
        <TooltipProvider delayDuration={0}>
          <Outlet />
          <Navbar />
        </TooltipProvider>
      </ThemeProvider>
    </LocaleProvider>
  )
}
