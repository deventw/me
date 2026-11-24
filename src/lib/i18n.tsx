import { createContext, useContext, type ReactNode } from "react"
import en from "../../messages/en.json"
import zh from "../../messages/zh.json"

/**
 * 簡單嘅多語言：英文喺 /，中文喺 /zh/。
 * 取代 next-intl；介面文字喺 messages/*.json，內容喺 src/config.tsx。
 */
export type Locale = "en" | "zh"
type Key = keyof typeof en

const messages: Record<Locale, Record<Key, string>> = { en, zh }

export const localePath: Record<Locale, string> = { en: "/", zh: "/zh/" }
export const htmlLang: Record<Locale, string> = { en: "en", zh: "zh-Hant" }

export function localeFromPath(pathname: string): Locale {
  return pathname === "/zh" || pathname.startsWith("/zh/") ? "zh" : "en"
}

const LocaleContext = createContext<Locale>("en")

export function LocaleProvider({ locale, children }: { locale: Locale; children: ReactNode }) {
  return <LocaleContext.Provider value={locale}>{children}</LocaleContext.Provider>
}

export function useLocale() {
  return useContext(LocaleContext)
}

export function useT() {
  const locale = useLocale()
  return (key: Key) => messages[locale][key]
}
