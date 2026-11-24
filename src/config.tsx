import { Icons } from "~/components/icons"

/**
 * 個人網站嘅全部內容（英文 + 繁體中文）。
 * 改文案、加作品、加經歷都喺呢度改；版面喺 src/app/[locale]/page.tsx。
 */

const email = "hi@deven.tw"

const social = {
  GitHub: {
    name: "GitHub",
    url: "https://github.com/deventw",
    icon: <Icons.github className="size-full" />,
    navbar: true,
  },
  X: {
    name: "X",
    url: "https://x.com/deven_tw",
    icon: <Icons.x className="size-full" />,
    navbar: true,
  },
  Email: {
    name: "Email",
    url: `mailto:${email}`,
    icon: <Icons.email className="size-full" />,
    navbar: true,
  },
}

/** 作品：app 用 icon，網站用截圖 */
type Work = {
  title: string
  kind: string
  year: string
  description: string
  stack: string[]
  href: string
  icon?: string
  image?: string
  status?: string
  links?: { label: string; href: string }[]
}

type Experience = {
  period: string
  title: string
  org: string
  href?: string
  description: string
}

const en = {
  name: "Deven Kwong",
  handle: "DevenTW",
  url: "https://deven.tw",
  role: "Full-stack developer",
  location: "Hong Kong",
  locationLink: "https://maps.app.goo.gl/BNSJUVybj1jgwiY48",
  avatarUrl: "https://avatars.githubusercontent.com/u/63999575?v=4",
  meta: {
    title: "Deven Kwong — Full-stack developer in Hong Kong",
    description:
      "Full-stack developer in Hong Kong. I build web and iOS apps end to end, from the first sketch to the App Store.",
  },
  hero: {
    greeting: "Hi, I'm Deven.",
    headline: ["I build web and mobile", "products, end to end."],
    intro:
      "Full-stack developer in Hong Kong. By day I build custom business software as an analyst programmer. Outside of work I design and ship my own iOS apps.",
    cta: "Get in touch",
    secondary: "See my work",
  },
  about: [
    "I started in front-end, building web and mobile apps for education platforms. Today I work across the whole stack: interfaces in React and SwiftUI, APIs in Node.js and Python, data in PostgreSQL, and the requirements and architecture that come before any of it.",
    "I like small, well-made software: quick to load, calm to use and careful with people's data. Away from the keyboard I take photos, lift, travel, and look for good ramen.",
  ],
  work: [
    {
      title: "BUSROO",
      kind: "iOS app",
      year: "2026",
      description:
        "Real-time KMB and Citybus arrivals for Hong Kong, with Live Activities, widgets and a reminder that tells you exactly when to leave.",
      stack: ["Swift", "Live Activities", "WidgetKit", "API"],
      href: "https://busroo.mmqm.dev/",
      icon: "/apps/busroo.png",
      status: "Coming soon",
    },
    {
      title: "Yohaku",
      kind: "iOS app",
      year: "2025",
      description:
        "Thirty film-inspired frames that turn photos into prints. Every photo is processed on the device and never uploaded.",
      stack: ["iOS", "On-device processing", "5 languages"],
      href: "https://yohaku.mmqm.dev/",
      icon: "/apps/yohaku.png",
    },
    {
      title: "Subscription Bird",
      kind: "iOS app",
      year: "2025",
      description:
        "A calm subscription tracker with insights, renewal reminders and four themes. Data stays on the phone.",
      stack: ["iOS", "Local storage", "5 languages"],
      href: "https://subscription-bird.mmqm.dev/",
      icon: "/apps/subscription-bird.png",
    },
    {
      title: "mmqm.dev",
      kind: "Website",
      year: "2026",
      description:
        "A company website in six languages: every page pre-rendered for search, plus unlisted digital business cards behind a QR code.",
      stack: ["Next.js", "TypeScript", "Cloudflare"],
      href: "https://mmqm.dev/",
    },
    {
      title: "Swing Fridge Pro",
      kind: "iOS app",
      year: "2024",
      description:
        "Keeps track of what's in the fridge so food gets eaten before it expires. Tap an NFC tag to log items quickly.",
      stack: ["SwiftUI", "Core Data", "NFC", "Alamofire"],
      href: "https://apps.apple.com/hk/app/swing-fridge-pro/id6670784659",
      image: "/work/swingfridge.jpg",
    },
    {
      title: "Astro Air Bento",
      kind: "Open source",
      year: "2024",
      description: "A minimal, bento-style personal blog theme for Astro.",
      stack: ["Astro", "React", "TypeScript", "Tailwind CSS"],
      href: "https://github.com/deventw/astro-air-bento",
      image: "/work/air-bento.jpg",
      links: [
        { label: "Demo", href: "https://astro-air-bento.netlify.app/en/" },
        { label: "Source", href: "https://github.com/deventw/astro-air-bento" },
      ],
    },
  ] as Work[],
  playground: [
    {
      title: "AI chat demo",
      year: "2025",
      description: "A small React chat app talking to Mistral 7B through the OpenRouter API.",
      image: "/work/ai-chat.jpg",
      links: [
        { label: "Demo", href: "https://material-ai-chat.vercel.app/" },
        { label: "Source", href: "https://github.com/deventw/material-ai-chat" },
      ],
    },
    {
      title: "Number Klotski",
      year: "2024",
      description: "A sliding number puzzle for the browser: put the tiles back in order.",
      image: "/work/klotski.jpg",
      links: [
        { label: "Play", href: "https://number-klotski.netlify.app" },
        { label: "Source", href: "https://github.com/deventw/number-klotski-app" },
      ],
    },
  ],
  experience: [
    {
      period: "Aug 2025 — Now",
      title: "Analyst Programmer",
      org: "Custom software development",
      description: "Requirements analysis, system design and development for custom business and enterprise software.",
    },
    {
      period: "Aug 2022 — Jan 2025",
      title: "Frontend Programmer",
      org: "Educational technology",
      description: "Built responsive web apps and mobile apps for education platforms with a cross-functional team.",
    },
  ] as Experience[],
  education: [
    {
      period: "2020 — 2022",
      title: "BBA, Information Management",
      org: "National Taiwan University of Science and Technology",
      href: "https://www.ntust.edu.tw",
      description: "",
    },
    {
      period: "2018 — 2020",
      title: "Information Systems Development",
      org: "Community College of City University",
      href: "https://www.uowchk.edu.hk/",
      description: "",
    },
  ] as Experience[],
  skills: [
    {
      group: "Frontend",
      items: ["TypeScript", "React", "Next.js", "TanStack Start", "Astro", "Vite", "HTML & CSS", "Tailwind CSS"],
    },
    { group: "Mobile", items: ["Swift", "SwiftUI", "Core Data", "NFC", "Flutter", "React Native"] },
    { group: "Backend", items: ["Node.js", "Bun", "Express", "Hono", "Python", "PostgreSQL", "REST APIs"] },
    { group: "AI", items: ["LLM API integration", "OpenRouter", "AI-assisted development", "Claude Code"] },
    { group: "Cloud & tools", items: ["Cloudflare Workers & Pages", "Vercel", "Git", "Figma", "WordPress"] },
  ],
  contact: {
    email,
    title: "Let's build something.",
    body: "Have a project, a role or just a question? Email is the best way to reach me. I read everything and reply as soon as I can.",
    social,
  },
  navbar: [] as { href: string; icon: React.ReactNode; label: string }[],
}

export type LocaleData = typeof en

const zh: LocaleData = {
  ...en,
  name: "Deven Kwong",
  role: "全端開發者",
  location: "香港",
  meta: {
    title: "Deven Kwong — 香港全端開發者",
    description: "香港的全端開發者。從第一張草圖到上架 App Store，網頁和 iOS App 都一手包辦。",
  },
  hero: {
    greeting: "你好，我是 Deven。",
    headline: ["從構想到上線，", "一手做好網頁和 App。"],
    intro:
      "香港的全端開發者。白天以分析程式員的身分開發企業客製化系統；工作之外，我也設計並推出自己的 iOS App。",
    cta: "聯絡我",
    secondary: "看看作品",
  },
  about: [
    "我從前端起步，為教育平台開發網頁和手機 App。現在橫跨整個技術棧：用 React 和 SwiftUI 做介面，用 Node.js 和 Python 寫 API，用 PostgreSQL 管理資料，也負責動工之前的需求分析和系統架構。",
    "我喜歡小而精緻的軟體：載入快、用起來安靜、尊重使用者的資料。離開鍵盤的時候，我會去拍照、健身、旅行，順便找一碗好吃的拉麵。",
  ],
  work: [
    {
      ...en.work[0]!,
      kind: "iOS App",
      description: "香港九巴、城巴即時到站時間，有即時動態、主畫面小工具，還會提醒你什麼時候該出門。",
      status: "即將推出",
    },
    {
      ...en.work[1]!,
      kind: "iOS App",
      description: "30 款靈感來自底片攝影的邊框，把照片變成作品。所有照片都在裝置上處理，不會上傳。",
      stack: ["iOS", "裝置端處理", "五種語言"],
    },
    {
      ...en.work[2]!,
      kind: "iOS App",
      description: "安靜好用的訂閱管理 App，有總覽、續訂提醒和四種主題，資料只留在手機裡。",
      stack: ["iOS", "本機儲存", "五種語言"],
    },
    {
      ...en.work[3]!,
      kind: "網站",
      description: "六種語言的企業網站：每一頁都預先產生以利搜尋，另外還有藏在二維碼後面的電子名片。",
    },
    {
      ...en.work[4]!,
      title: "叫醒冰箱 Pro",
      kind: "iOS App",
      description: "記錄冰箱裡有什麼，讓食物在過期前被吃掉。用 NFC 標籤一碰就能快速記錄。",
    },
    {
      ...en.work[5]!,
      kind: "開源專案",
      description: "Bento 風格的極簡 Astro 部落格主題。",
      links: [
        { label: "示範", href: "https://astro-air-bento.netlify.app/" },
        { label: "原始碼", href: "https://github.com/deventw/astro-air-bento" },
      ],
    },
  ],
  playground: [
    {
      ...en.playground[0]!,
      title: "AI 聊天示範",
      description: "一個小型 React 聊天 App，透過 OpenRouter API 和 Mistral 7B 對話。",
      links: [
        { label: "示範", href: "https://material-ai-chat.vercel.app/" },
        { label: "原始碼", href: "https://github.com/deventw/material-ai-chat" },
      ],
    },
    {
      ...en.playground[1]!,
      title: "數字華容道",
      description: "在瀏覽器玩的數字滑塊拼圖：把方塊排回正確的順序。",
      links: [
        { label: "試玩", href: "https://number-klotski.netlify.app" },
        { label: "原始碼", href: "https://github.com/deventw/number-klotski-app" },
      ],
    },
  ],
  experience: [
    {
      ...en.experience[0]!,
      period: "2025.08 — 現在",
      title: "分析程式員",
      org: "企業客製化軟體開發",
      description: "負責企業客製化系統的需求分析、系統設計與開發。",
    },
    {
      ...en.experience[1]!,
      period: "2022.08 — 2025.01",
      title: "前端程式員",
      org: "教育科技",
      description: "與跨職能團隊合作，為教育平台開發響應式網頁和手機 App。",
    },
  ],
  education: [
    { ...en.education[0]!, title: "管理學學士（資訊管理系）", org: "國立臺灣科技大學" },
    { ...en.education[1]!, title: "資訊系統開發", org: "香港城市大學專上學院" },
  ],
  skills: [
    { group: "前端", items: en.skills[0]!.items },
    { group: "行動裝置", items: en.skills[1]!.items },
    { group: "後端", items: en.skills[2]!.items },
    { group: "AI", items: ["LLM API 串接", "OpenRouter", "AI 輔助開發", "Claude Code"] },
    { group: "雲端與工具", items: en.skills[4]!.items },
  ],
  contact: {
    ...en.contact,
    title: "一起做點什麼吧。",
    body: "有專案、職缺，或只是想問問題？寄信給我最快。每封信我都會看，也會盡快回覆。",
    social: { ...social, Email: { ...social.Email, name: "電郵" } },
  },
}

export const getLocaleData = (locale: string): LocaleData => {
  return locale === "zh" ? zh : en
}
