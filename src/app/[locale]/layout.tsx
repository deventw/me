import { NextIntlClientProvider } from "next-intl"
import { getMessages } from "next-intl/server"
import { Inter as FontSans } from "next/font/google"
import { notFound } from "next/navigation"
import { Navbar } from "~/components/navbar"
import { ThemeProvider } from "~/components/theme/provider"
import { TooltipProvider } from "~/components/ui/tooltip"
import { getLocaleData } from "~/config"
import { routing } from "~/i18n/routing"
import { cn } from "~/lib/utils"
import "~/styles/globals.css"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

type Params = Promise<{ locale: string }>

export async function generateMetadata({ params }: { params: Params }) {
  const { locale } = await params
  const data = getLocaleData(locale)

  return {
    metadataBase: new URL(data.url),
    title: {
      default: data.meta.title,
      template: `%s — ${data.name}`,
    },
    description: data.meta.description,
    alternates: { canonical: data.url },
    openGraph: {
      title: data.meta.title,
      description: data.meta.description,
      url: data.url,
      siteName: data.name,
      locale: locale,
      type: "website",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    twitter: {
      title: data.meta.title,
      card: "summary_large_image",
      description: data.meta.description,
      images: ["/twitter-image.png"],
      creator: "@deven_tw",
    },
  }
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Params
}) {
  const { locale } = await params

  // Ensure that the incoming `locale` is valid
  // eslint-disable-next-line
  if (!routing.locales.includes(locale as any)) {
    notFound()
  }
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages()

  return (
    <html lang={locale === "zh" ? "zh-Hant" : "en"} suppressHydrationWarning>
      <head>
        {/* <link rel="icon" href="/favicon.png" type="image/x-icon" /> */}
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={`/favicon-32x32.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={`/favicon-16x16.png`}
        />
        <script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="c9c715f4-f1d1-4d08-acf9-c2376d5ec63d"
        />
      </head>
      <body
        className={cn(
          "mx-auto min-h-screen max-w-3xl bg-background px-6 py-12 font-sans antialiased sm:py-20",
          fontSans.variable,
        )}
        style={{ position: "relative" }}
      >
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <TooltipProvider delayDuration={0}>
              {children}
              <Navbar />
            </TooltipProvider>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
