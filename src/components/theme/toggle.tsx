import { Icons } from "~/components/icons"
import { useTheme } from "~/components/theme/provider"
import { Tooltip, TooltipContent, TooltipTrigger } from "~/components/ui/tooltip"
import { useT } from "~/lib/i18n"

export const ModeToggle = () => {
  const { setTheme, resolvedTheme } = useTheme()
  const t = useT()

  const toggleTheme = () => {
    const next = resolvedTheme === "light" ? "dark" : "light"
    if (!document.startViewTransition) setTheme(next)
    else document.startViewTransition(() => setTheme(next))
  }

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <button
          type="button"
          aria-label={resolvedTheme === "light" ? t("dark") : t("light")}
          className="rounded-full p-[10px] hover:bg-accent"
          data-umami-event="toggle-theme"
          onClick={toggleTheme}
        >
          <Icons.sun className="size-full text-neutral-800 dark:hidden dark:text-neutral-200" />
          <Icons.moon className="hidden size-full text-neutral-800 dark:block dark:text-neutral-200" />
        </button>
      </TooltipTrigger>
      <TooltipContent>
        <p>{resolvedTheme === "light" ? t("light") : t("dark")}</p>
      </TooltipContent>
    </Tooltip>
  )
}
