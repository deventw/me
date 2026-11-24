import { createFileRoute } from "@tanstack/react-router"
import { HomePage } from "~/components/home"
import { seoHead } from "~/lib/seo"

// 繁體中文版
export const Route = createFileRoute("/zh/")({
  head: () => seoHead("zh"),
  component: HomePage,
})
