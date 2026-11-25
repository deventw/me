import { createContext, useContext, type ReactNode } from "react"
import en from "../../messages/en.json"
import ko from "../../messages/ko.json"
import zh from "../../messages/zh.json"

/**
 * 簡單嘅多語言：英文喺 /，中文喺 /zh/，韓文喺 /ko/。
 * 取代 next-intl；介面文字喺 messages/*.json，內容喺 src/config.tsx。
 */
export type Locale = "en" | "zh" | "ko"
export const locales: Locale[] = ["en", "zh", "ko"]
type Key = keyof typeof en

const messages: Record<Locale, Record<Key, string>> = { en, zh, ko }

export const localePath: Record<Locale, string> = { en: "/", zh: "/zh/", ko: "/ko/" }
export const htmlLang: Record<Locale, string> = { en: "en", zh: "zh-Hant", ko: "ko" }
/** 語言選單顯示嘅名（用該語言自己寫） */
export const localeLabel: Record<Locale, string> = { en: "English", zh: "繁體中文", ko: "한국어" }

export function localeFromPath(pathname: string): Locale {
  for (const l of ["zh", "ko"] as const) {
    if (pathname === `/${l}` || pathname.startsWith(`/${l}/`)) return l
  }
  return "en"
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
