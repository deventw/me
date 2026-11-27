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
      title: "Yado Stay",
      kind: "Web app",
      year: "2026",
      description:
        "An operations system for guesthouses and small hotels: bookings, check-in and check-out, housekeeping and staff in one place. Checking a guest out sends a cleaning task straight to the staff app, and everything is large and clear so older hosts can use it with ease.",
      stack: ["React", "Hono", "PostgreSQL", "Drizzle", "Docker"],
      href: "https://yado-stay.mmqm.dev/",
      icon: "/apps/yado-stay.png",
    },
    {
      title: "Yohaku",
      kind: "iOS app",
      year: "2025",
      description:
        "Thirty film-inspired frames that turn photos into prints. Every photo is processed on the device and never uploaded.",
      stack: ["Flutter", "On-device processing", "5 languages"],
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
    { group: "Languages", items: ["TypeScript", "Swift", "Dart", "Python", "HTML & CSS"] },
    { group: "Web", items: ["React", "Next.js", "TanStack Start", "Astro", "Vite", "Tailwind CSS"] },
    { group: "Mobile", items: ["SwiftUI", "Flutter", "React Native", "Core Data", "NFC"] },
    { group: "Backend & data", items: ["Node.js", "Bun", "Express", "Hono", "PostgreSQL", "REST APIs"] },
    { group: "AI integration", items: ["LLM APIs", "OpenRouter", "DeepSeek"] },
    { group: "AI dev tools", items: ["Claude Code", "Cursor", "Codex", "OpenCode"] },
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
      kind: "網頁系統",
      description: "給民宿和小型旅館的營運系統：訂房、入住退房、房務清潔和員工管理集中在一處。辦理退房後，清潔任務會自動送到員工手機；字大、按鈕清楚，年長的房東也能輕鬆使用。",
    },
    {
      ...en.work[2]!,
      kind: "iOS App",
      description: "30 款靈感來自底片攝影的邊框，把照片變成作品。所有照片都在裝置上處理，不會上傳。",
      stack: ["Flutter", "裝置端處理", "五種語言"],
    },
    {
      ...en.work[3]!,
      kind: "iOS App",
      description: "安靜好用的訂閱管理 App，有總覽、續訂提醒和四種主題，資料只留在手機裡。",
      stack: ["iOS", "本機儲存", "五種語言"],
    },
    {
      ...en.work[4]!,
      kind: "網站",
      description: "六種語言的企業網站：每一頁都預先產生以利搜尋，另外還有藏在二維碼後面的電子名片。",
    },
    {
      ...en.work[5]!,
      title: "叫醒冰箱 Pro",
      kind: "iOS App",
      description: "記錄冰箱裡有什麼，讓食物在過期前被吃掉。用 NFC 標籤一碰就能快速記錄。",
    },
    {
      ...en.work[6]!,
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
    { group: "程式語言", items: en.skills[0]!.items },
    { group: "網頁", items: en.skills[1]!.items },
    { group: "行動裝置", items: en.skills[2]!.items },
    { group: "後端與資料", items: en.skills[3]!.items },
    { group: "AI 整合", items: ["LLM API", "OpenRouter", "DeepSeek"] },
    { group: "AI 開發工具", items: en.skills[5]!.items },
    { group: "雲端與工具", items: en.skills[6]!.items },
  ],
  contact: {
    ...en.contact,
    title: "一起做點什麼吧。",
    body: "有專案、職缺，或只是想問問題？寄信給我最快。每封信我都會看，也會盡快回覆。",
    social: { ...social, Email: { ...social.Email, name: "電郵" } },
  },
}

/** 韓文：用해요체，同 MMQM 網站嘅韓文語氣一致 */
const ko: LocaleData = {
  ...en,
  name: "Deven Kwong",
  role: "풀스택 개발자",
  location: "홍콩",
  meta: {
    title: "Deven Kwong — 홍콩의 풀스택 개발자",
    description: "홍콩의 풀스택 개발자. 첫 스케치부터 App Store 출시까지 웹과 iOS 앱을 직접 만들어요.",
  },
  hero: {
    greeting: "안녕하세요, Deven이에요.",
    headline: ["웹과 모바일 제품을", "처음부터 끝까지 만들어요."],
    intro:
      "홍콩에서 일하는 풀스택 개발자예요. 낮에는 분석 프로그래머로 기업 맞춤형 소프트웨어를 만들고, 일 밖에서는 제 iOS 앱을 직접 디자인하고 출시해요.",
    cta: "연락하기",
    secondary: "작업 보기",
  },
  about: [
    "프런트엔드에서 시작해 교육 플랫폼의 웹과 모바일 앱을 만들었어요. 지금은 스택 전체를 다뤄요. React와 SwiftUI로 화면을, Node.js와 Python으로 API를, PostgreSQL로 데이터를 다루고, 만들기 전에 필요한 요구사항 분석과 시스템 설계도 맡아요.",
    "작고 잘 만든 소프트웨어를 좋아해요. 빠르게 열리고, 차분하게 쓸 수 있고, 사용자의 데이터를 소중히 다루는 것이요. 키보드를 떠나면 사진을 찍고, 운동하고, 여행하고, 맛있는 라멘을 찾아다녀요.",
  ],
  work: [
    {
      ...en.work[0]!,
      kind: "iOS 앱",
      description: "홍콩 KMB·Citybus 실시간 도착 정보. 실시간 현황과 위젯, 그리고 언제 나가면 되는지 알려 주는 알림까지.",
      status: "출시 예정",
    },
    {
      ...en.work[1]!,
      kind: "웹 앱",
      description: "게스트하우스·소형 호텔 운영 시스템. 예약, 입실·퇴실, 객실 청소, 직원 관리를 한곳에서 해요. 퇴실 처리를 하면 청소 작업이 직원 앱으로 바로 전달되고, 나이 드신 호스트도 쉽게 쓰도록 크고 분명하게 만들었어요.",
    },
    {
      ...en.work[2]!,
      kind: "iOS 앱",
      description: "필름 사진에서 영감을 받은 30가지 프레임으로 사진을 작품으로 만들어요. 모든 사진은 기기 안에서 처리되고 업로드되지 않아요.",
      stack: ["Flutter", "기기 내 처리", "5개 언어"],
    },
    {
      ...en.work[3]!,
      kind: "iOS 앱",
      description: "개요, 갱신 알림, 네 가지 테마를 갖춘 차분한 구독 관리 앱. 데이터는 휴대폰에만 남아요.",
      stack: ["iOS", "로컬 저장", "5개 언어"],
    },
    {
      ...en.work[4]!,
      kind: "웹사이트",
      description: "6개 언어로 된 기업 웹사이트. 검색을 위해 모든 페이지를 미리 생성하고, QR 코드 뒤에 숨은 디지털 명함도 있어요.",
    },
    {
      ...en.work[5]!,
      kind: "iOS 앱",
      description: "냉장고에 무엇이 있는지 기록해서 유통기한 전에 먹을 수 있게 도와줘요. NFC 태그를 대면 바로 기록돼요.",
    },
    {
      ...en.work[6]!,
      kind: "오픈 소스",
      description: "벤토 스타일의 미니멀한 Astro 블로그 테마예요.",
      links: [
        { label: "데모", href: "https://astro-air-bento.netlify.app/" },
        { label: "소스", href: "https://github.com/deventw/astro-air-bento" },
      ],
    },
  ],
  playground: [
    {
      ...en.playground[0]!,
      title: "AI 채팅 데모",
      description: "OpenRouter API로 Mistral 7B와 대화하는 작은 React 채팅 앱이에요.",
      links: [
        { label: "데모", href: "https://material-ai-chat.vercel.app/" },
        { label: "소스", href: "https://github.com/deventw/material-ai-chat" },
      ],
    },
    {
      ...en.playground[1]!,
      title: "숫자 슬라이드 퍼즐",
      description: "브라우저에서 즐기는 숫자 슬라이드 퍼즐. 타일을 올바른 순서로 되돌려 보세요.",
      links: [
        { label: "플레이", href: "https://number-klotski.netlify.app" },
        { label: "소스", href: "https://github.com/deventw/number-klotski-app" },
      ],
    },
  ],
  experience: [
    {
      ...en.experience[0]!,
      period: "2025.08 — 현재",
      title: "분석 프로그래머",
      org: "기업 맞춤형 소프트웨어 개발",
      description: "기업 맞춤형 시스템의 요구사항 분석, 시스템 설계, 개발을 맡고 있어요.",
    },
    {
      ...en.experience[1]!,
      period: "2022.08 — 2025.01",
      title: "프런트엔드 프로그래머",
      org: "에듀테크",
      description: "여러 직군의 팀과 함께 교육 플랫폼의 반응형 웹과 모바일 앱을 만들었어요.",
    },
  ],
  education: [
    { ...en.education[0]!, title: "경영학 학사 (정보관리학과)", org: "국립 대만과학기술대학교" },
    { ...en.education[1]!, title: "정보시스템 개발", org: "홍콩시티대학교 커뮤니티 칼리지" },
  ],
  skills: [
    { group: "프로그래밍 언어", items: en.skills[0]!.items },
    { group: "웹", items: en.skills[1]!.items },
    { group: "모바일", items: en.skills[2]!.items },
    { group: "백엔드와 데이터", items: en.skills[3]!.items },
    { group: "AI 연동", items: en.skills[4]!.items },
    { group: "AI 개발 도구", items: en.skills[5]!.items },
    { group: "클라우드와 도구", items: en.skills[6]!.items },
  ],
  contact: {
    ...en.contact,
    title: "함께 무언가를 만들어요.",
    body: "프로젝트, 채용, 아니면 그냥 궁금한 점이 있나요? 이메일이 가장 빨라요. 모든 메일을 읽고 최대한 빨리 답장할게요.",
    social: { ...social, Email: { ...social.Email, name: "이메일" } },
  },
}

export const getLocaleData = (locale: string): LocaleData => {
  return locale === "zh" ? zh : locale === "ko" ? ko : en
}
