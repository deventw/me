import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react"

/**
 * 淺色／深色主題（取代 next-themes）。
 * 首次載入時由 __root 嘅 inline script 先加上 .dark，避免閃白；呢度負責之後切換同記住選擇。
 */
type Theme = "light" | "dark"

export const themeInitScript = `(function(){try{var t=localStorage.getItem("theme");var d=t?t==="dark":matchMedia("(prefers-color-scheme: dark)").matches;document.documentElement.classList.toggle("dark",d)}catch(e){}})()`

const ThemeContext = createContext<{ resolvedTheme: Theme; setTheme: (t: Theme) => void }>({
  resolvedTheme: "light",
  setTheme: () => {},
})

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [resolvedTheme, setResolved] = useState<Theme>("light")

  useEffect(() => {
    setResolved(document.documentElement.classList.contains("dark") ? "dark" : "light")
  }, [])

  const setTheme = useCallback((t: Theme) => {
    document.documentElement.classList.toggle("dark", t === "dark")
    try {
      localStorage.setItem("theme", t)
    } catch {
      // 私密瀏覽等情況寫唔到，就只係今次有效
    }
    setResolved(t)
  }, [])

  return <ThemeContext.Provider value={{ resolvedTheme, setTheme }}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  return useContext(ThemeContext)
}
