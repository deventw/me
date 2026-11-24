import { Icons } from "~/components/icons"
import { Tooltip, TooltipContent, TooltipTrigger } from "~/components/ui/tooltip"
import { localePath, useLocale, useT } from "~/lib/i18n"

/** 英文 / 中文切換：兩種語言各有自己嘅網址（/ 同 /zh/），所以係普通連結 */
export function LanguageToggle() {
  const locale = useLocale()
  const t = useT()
  const other = locale === "en" ? "zh" : "en"

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <a
          href={localePath[other]}
          hrefLang={other === "zh" ? "zh-Hant" : "en"}
          aria-label={t("language")}
          className="block rounded-full p-[10px] hover:bg-accent"
          data-umami-event="toggle-language"
        >
          <Icons.language className="size-full" />
        </a>
      </TooltipTrigger>
      <TooltipContent>
        <p>{t("language")}</p>
      </TooltipContent>
    </Tooltip>
  )
}
