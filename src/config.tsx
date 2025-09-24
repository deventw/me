import { Icons } from "~/components/icons"

const en = {
  name: "DevenTW",
  slogan: "Think. Code. Build. Repeat.",
  url: "https://deven.tw",
  location: "Hong Kong",
  locationLink: "https://maps.app.goo.gl/BNSJUVybj1jgwiY48",
  description:
    "Hello, I'm a full-stack developer based in Hong Kong!",
  personalMessage:
    "I hope to do something interesting and having some unforgettable memories.",
  title: "Full-Stack Developer & Designer",
  summary:
    "",
  workDescription:
    "DevenTW is a full-stack developer based in Hong Kong with a passion for building innovative digital solutions. He has a knack for all things software development, from planning and designing all the way to solving real-life problems with code. When not coding, he loves photography, strength training, and exploring new technologies. Currently, he is working on various projects and continuously learning to stay at the forefront of technology.",
  bio: [
    {
      year: "2022",
      event: "Graduated with Bachelor's degree in Information Management"
    },
    {
      year: "2022",
      event: "Started working as a Frontend Programmer in the educational technology sector"
    },
    {
      year: "2025",
      event: "Moved to Analyst Programmer in custom software development"
    },
    {
      year: "Present",
      event: "Working as a full-stack developer, building innovative solutions"
    }
  ],
  // avatarUrl: "/me.png",
  avatarUrl: "https://avatars.githubusercontent.com/u/63999575?v=4",
  tweetId: "1547578458787631104",
  skills: [
    "HTML",
    "CSS",
    "TypeScript",
    "React",
    "React Native",
    "Next.js",
    "Node.js",
    "Express",
    "Hono",
    "Python",
    // "Django",
    // "Flask",
    "PostgreSQL",
    // "Docker",
    // "AWS",
    // "Vercel",
    "Git",
    "Figma",
    "REST APIs",
    "Swift",
    "SwiftUI",
    "WordPress",
  ],
  interests: [
    "Coding",
    "Photography", 
    "Strength Training",
    "Travel",
    "Music"
  ],
  navbar: [
    {
      href: "/",
      icon: <Icons.me className="size-full" />,
      label: "Blog",
    },
    // {
    //   href: "https://camlife.cn",
    //   icon: <Icons.aperture className="size-full" />,
    //   label: "Plog",
    // },
  ],
  contact: {
    email: "contact@deven.tw",
    tel: "+123456789",
    social: {
      Twitter: {
        name: "X",
        url: "https://twitter.com/deven_tw",
        icon: <Icons.twitter className="size-full" />,
        navbar: false,
      },
      Email: {
        name: "Email",
        url: "mailto: hi@deven.tw",
        icon: <Icons.email className="size-full" />,
        navbar: true,
      },
      GitHub: {
        name: "GitHub",
        url: "https://github.com/deventw",
        icon: <Icons.github className="size-full" />,
        navbar: true,
      },
    },
  },
  work: [
    {
      company: "Custom Software Development",
      href: "",
      badges: [],
      location: "Hong Kong",
      title: "Analyst Programmer",
      logoUrl: "",
      start: "Aug 2025",
      end: "Present",
      description: "Develop custom business solutions and enterprise software systems, focusing on requirements analysis and system architecture",
    },
    {
      company: "Educational Technology",
      href: "",
      badges: [],
      location: "Hong Kong",
      title: "Frontend Programmer",
      logoUrl: "",
      start: "Aug 2022",
      end: "Jan 2025",
      description: "Built responsive web applications and mobile apps for educational platforms, collaborating with cross-functional teams",
    },
  ],
  education: [
    {
      school: "National Taiwan University of Science and Technology",
      href: "https://www.ntust.edu.tw",
      degree: "Information Management",
      logoUrl: "/ntust.png",
      start: "Sep 2020",
      end: "Jun 2022",
      description: "Have a wonderful two years",
    },
    {
      school: "Community College of City University",
      href: "https://www.uowchk.edu.hk/",
      degree: "Information Systems Development",
      logoUrl: "/uow.jpg",
      start: "Sep 2018",
      end: "Jun 2020",
      description: "Exploring the field, advancing skills",
    },
  ],
  projects: [
    {
      title: "Swing Fridge Pro",
      href: "https://apps.apple.com/hk/app/swing-fridge-pro/id6670784659?l=en-GB",
      dates: "Mar 2024 - Jan 2025",
      active: true,
      description:
        "An efficient iOS app to manage your fridge, ensuring food freshness and reducing waste",
      technologies: ["SwiftUI", "Core Data", "NFC", "Alamofire"],
      links: [
        {
          type: "Website",
          href: "https://bento.me/swingfridge",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/swingfridge.png",
      video: "",
    },
    {
      title: "Astro Air Bento",
      href: "https://blog.deven.tw",
      dates: "Dec 2024 - Now",
      active: true,
      description: "Bento-styled, minimal, personal blog theme for Astro",
      technologies: ["Astro", "React", "Typescript", "TailwindCSS"],
      links: [
        {
          type: "Website",
          href: "https://astro-air-bento.netlify.app/en/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/deventw/astro-air-bento",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/air-bento.png",
      video: "",
    },
  ],
  awesome: [
    {
      title: "LLM Minimal AI Chat Demo",
      dates: "Feb 2025",
      location: "🌍",
      description:
        "A responsive React app using Mistral 7B via OpenRouter API for interactive AI conversations.",
      image: "/cute-ai-chat.png",
      mlh: "",
      links: [
        {
          title: "Website",
          type: "",
          href: "https://material-ai-chat.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          title: "Source",
          href: "https://github.com/deventw/material-ai-chat",
          icon: <Icons.github className="size-3" />,
        },
      ],
    },
    {
      title: "Number Klotski Puzzle Game",
      dates: "Dec 2024",
      location: "🌍",
      description:
        "A fun and challenging puzzle by arrange numbered tiles in the correct order!",
      image: "/number-klotski.jpeg",
      mlh: "",
      links: [
        {
          title: "Website",
          type: "",
          href: "https://number-klotski.netlify.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          title: "Source",
          href: "https://github.com/deventw/number-klotski-app",
          icon: <Icons.github className="size-3" />,
        },
      ],
    },
  ],
}

const zh = {
  name: "DevenTW",
  slogan: "「一花一世界」",
  url: "https://deven.tw",
  location: "香港",
  locationLink: "https://maps.app.goo.gl/BNSJUVybj1jgwiY48",
  description: "你好，我是一名在香港的全端開發者！",
  personalMessage: "希望能做一些有趣的事情，並留下一些難忘的回憶～",
  title: "全端開發者 & 設計師",
  summary:
    "",
  workDescription:
    "DevenTW 是一名在香港的全端開發者，熱衷於構建創新的數位解決方案。他享受從規劃到部署的整個過程，也熱愛學習新技術。不寫程式的時候，他會去拍照、健身，或是探索最新的科技趨勢。",
  bio: [
    {
      year: "2022",
      event: "畢業於資訊管理學士學位"
    },
    {
      year: "2022",
      event: "開始在教育科技領域擔任前端程式設計師"
    },
    {
      year: "2025",
      event: "轉至客製化軟體開發領域擔任分析程式設計師"
    },
    {
      year: "至今",
      event: "從事全端開發工作，構建創新解決方案"
    }
  ],
  // avatarUrl: "/me.png",
  avatarUrl: "https://avatars.githubusercontent.com/u/63999575?v=4",
  tweetId: en.tweetId,
  skills: en.skills,
  interests: [
    "編程",
    "攝影", 
    "健身",
    "旅行",
    "音樂"
  ],
  navbar: [
    {
      href: "/",
      icon: <Icons.me className="size-full" />,
      label: "部落格",
    },
    // {
    //   href: "https://camlife.cn",
    //   icon: <Icons.aperture className="size-full" />,
    //   label: "影集",
    // },
  ],
  contact: {
    email: en.contact.email,
    tel: "+123456789",
    social: {
      Twitter: {
        name: "X",
        url: "https://twitter.com/deven_tw",
        icon: <Icons.x className="size-full" />,
        navbar: false,
      },
      Email: {
        name: "郵件",
        url: "mailto: hi@deven.tw",
        icon: <Icons.email className="size-full" />,
        navbar: true,
      },
      GitHub: {
        name: "GitHub",
        url: "https://github.com/deventw",
        icon: <Icons.github className="size-full" />,
        navbar: true,
      },
    },
  },
  work: [
    {
      company: "客製化軟體開發",
      href: "",
      badges: [],
      location: "香港",
      title: "分析程式員",
      logoUrl: "",
      start: "2025.08",
      end: "至今",
      description: "開發客製化商業解決方案和企業軟體系統，專注於需求分析和系統架構",
    },
    {
      company: "教育科技",
      href: "",
      badges: [],
      location: "香港",
      title: "前端開發工程師",
      logoUrl: "",
      start: "2022.08",
      end: "2025.01",
      description: "開發教育平台的響應式網頁和行動應用，團隊協作",
    },
  ],
  education: [
    {
      school: "國立臺灣科技大學",
      href: "https://www.ntust.edu.tw",
      degree: "資訊管理",
      logoUrl: "/ntust.png",
      start: "2020.09",
      end: "2022.06",
      description: "度過了美好的兩年",
    },
    {
      school: "香港城市大學專上學院",
      href: "https://www.uowchk.edu.hk/",
      degree: "資訊系統開發",
      logoUrl: "/uow.jpg",
      start: "2018.09",
      end: "2020.06",
      description: "領域探索，提升技能",
    },
  ],
  projects: [
    {
      title: "叫醒冰箱 Pro",
      href: "https://apps.apple.com/hk/app/swing-fridge-pro/id6670784659?l=en-GB",
      dates: "2024.03 - 2025.01",
      active: true,
      description:
        "一個簡約設計的 iOS APP，管理你的冰箱，確保食物新鮮，減少浪費",
      technologies: ["SwiftUI", "Core Data", "NFC", "Alamofire"],
      links: [
        {
          type: "Website",
          href: "https://bento.me/swingfridge",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/swingfridge.png",
      video: "",
    },
    {
      title: "Astro Air Bento",
      href: "https://blog.deven.tw",
      dates: "2024.12 - Now",
      active: true,
      description: "Bento 簡約風格 - Astro 部落格主題",
      technologies: ["Astro", "React", "Typescript", "TailwindCSS"],
      links: en.projects[1]?.links,
      image: "/air-bento.png",
      video: "",
    },
  ],
  awesome: [
    {
      title: "LLM AI 聊天示範",
      dates: "2025.02",
      location: "🌍",
      description:
        "一個使用 Mistral 7B 和 OpenRouter API 的 React 聊天應用程式。",
      image: "/cute-ai-chat.png",
      mlh: "",
      links: [
        {
          title: "Website",
          type: "",
          href: "https://material-ai-chat.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          title: "Source",
          href: "https://github.com/deventw/material-ai-chat",
          icon: <Icons.github className="size-3" />,
        },
      ],
    },
    {
      title: "數字華容道",
      dates: "2024.12",
      location: "🌍",
      description:
        "一個有趣且具挑戰性的謎題，透過將編號的方塊按正確的順序排列！",
      image: "/number-klotski.jpeg",
      mlh: "",
      links: [
        {
          title: "Website",
          type: "",
          href: "https://number-klotski.netlify.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          title: "Source",
          href: "https://github.com/deventw/number-klotski-app",
          icon: <Icons.github className="size-3" />,
        },
      ],
    },
  ],
}

export const getLocaleData = (locale: string) => {
  return locale === "zh" ? zh : en
}

export type LocaleData = typeof en
