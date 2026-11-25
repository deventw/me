import { useEffect, useRef, useState } from "react"
import { Icons } from "~/components/icons"
import { Tooltip, TooltipContent, TooltipTrigger } from "~/components/ui/tooltip"
import { htmlLang, localeLabel, localePath, locales, useLocale, useT } from "~/lib/i18n"

/**
 * 語言選單：英文 /、繁中 /zh/、韓文 /ko/。
 * 每種語言有自己嘅網址，所以選項係普通連結；選單喺 dock 上面向上彈出。
 */
export function LanguageToggle() {
  const locale = useLocale()
  const t = useT()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    const onDown = (e: PointerEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false)
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false)
    }
    document.addEventListener("pointerdown", onDown)
    document.addEventListener("keydown", onKey)
    return () => {
      document.removeEventListener("pointerdown", onDown)
      document.removeEventListener("keydown", onKey)
    }
  }, [open])

  return (
    <div ref={ref} className="relative">
      <Tooltip>
        <TooltipTrigger asChild>
          <button
            type="button"
            aria-label={t("language")}
            aria-haspopup="menu"
            aria-expanded={open}
            className="block rounded-full p-[10px] hover:bg-accent"
            data-umami-event="toggle-language"
            onClick={() => setOpen((v) => !v)}
          >
            <Icons.language className="size-full" />
          </button>
        </TooltipTrigger>
        {!open ? (
          <TooltipContent>
            <p>{t("language")}</p>
          </TooltipContent>
        ) : null}
      </Tooltip>
      {open ? (
        <ul
          role="menu"
          className="absolute bottom-full left-1/2 mb-4 min-w-36 -translate-x-1/2 rounded-xl border border-border bg-background p-1 shadow-lg"
        >
          {locales.map((l) => (
            <li key={l} role="none">
              <a
                role="menuitem"
                href={localePath[l]}
                hrefLang={htmlLang[l]}
                lang={htmlLang[l]}
                aria-current={l === locale ? "true" : undefined}
                className="block whitespace-nowrap rounded-lg px-3 py-2 text-sm hover:bg-accent aria-[current=true]:font-semibold aria-[current=true]:text-brand"
              >
                {localeLabel[l]}
              </a>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  )
}
