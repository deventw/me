import { getLocaleData } from "~/config"
import { htmlLang, localePath, locales, type Locale } from "~/lib/i18n"

/** 每個語言版本嘅 <head>：標題、描述、canonical、hreflang、分享預覽 */
export function seoHead(locale: Locale) {
  const data = getLocaleData(locale)
  const url = data.url + localePath[locale]
  return {
    meta: [
      { title: data.meta.title },
      { name: "description", content: data.meta.description },
      { property: "og:type", content: "website" },
      { property: "og:title", content: data.meta.title },
      { property: "og:description", content: data.meta.description },
      { property: "og:url", content: url },
      { property: "og:site_name", content: data.name },
      { property: "og:locale", content: { en: "en_US", zh: "zh_TW", ko: "ko_KR" }[locale] },
      { property: "og:image", content: `${data.url}/og.png` },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: data.meta.title },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: url },
      ...locales.map((l) => ({ rel: "alternate", hrefLang: htmlLang[l], href: data.url + localePath[l] })),
      { rel: "alternate", hrefLang: "x-default", href: data.url + localePath.en },
    ],
  }
}
