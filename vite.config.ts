import { tanstackStart } from "@tanstack/react-start/plugin/vite"
import viteReact from "@vitejs/plugin-react"
import { defineConfig } from "vite"

// 純靜態網站：build 時預先產生 /、/zh/、/ko/ 嘅 HTML，部署去 Cloudflare Pages，唔使伺服器
export default defineConfig({
  resolve: {
    tsconfigPaths: true,
  },
  plugins: [
    tanstackStart({
      prerender: {
        enabled: true,
        crawlLinks: true,
        failOnError: true,
      },
      pages: [{ path: "/" }, { path: "/zh/" }, { path: "/ko/" }],
      sitemap: {
        enabled: true,
        host: "https://deven.tw",
      },
    }),
    // react 嘅 plugin 一定要排喺 start 後面
    viteReact(),
  ],
})
