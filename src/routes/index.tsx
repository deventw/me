import { createFileRoute } from "@tanstack/react-router"
import { HomePage } from "~/components/home"
import { seoHead } from "~/lib/seo"

// 英文版（原文）
export const Route = createFileRoute("/")({
  head: () => seoHead("en"),
  component: HomePage,
})
