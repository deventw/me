import { createFileRoute } from "@tanstack/react-router"
import { HomePage } from "~/components/home"
import { seoHead } from "~/lib/seo"

// 韓文版
export const Route = createFileRoute("/ko/")({
  head: () => seoHead("ko"),
  component: HomePage,
})
