import { Icons } from "~/components/icons"

const en = {
  name: "DevenTW",
  slogan: "I think therefore I am.",
  url: "https://deven.tw",
  location: "Hong Kong",
  locationLink: "https://maps.app.goo.gl/BNSJUVybj1jgwiY48",
  description:
    "Software Engineer. I enjoy thinking, coding, photographing and strength training.",
  summary:
    "After graduating in 2022, I have been working in software development. I hope to do something interesting and having some unforgettable memories.",
  // avatarUrl: "/me.png",
  avatarUrl: "https://avatars.githubusercontent.com/u/63999575?v=4",
  tweetId: "1547578458787631104",
  skills: [
    "React",
    "Next",
    // "JavaScript",
    "Typescript",
    // "Astro",
    "HTML",
    "CSS",
    "NodeJS",
    "Python",
    "Flask",
    "Django",
    "Swift",
    "SwiftUI",
    "React Native",
    "Flutter",
    "WordPress",
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
    email: "deven.tw+me@outlook.com",
    tel: "+123456789",
    social: {
      Twitter: {
        name: "X",
        url: "https://twitter.com/deven_tw",
        icon: <Icons.twitter className="size-full" />,
        navbar: false,
      },
      // WeChat: {
      //   name: "WeChat",
      //   url: "https://mp.deven.tw",
      //   icon: <Icons.wechat className="size-full" />,
      //   navbar: true,
      // },
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
      company: "Start Up Company",
      href: "",
      badges: [],
      location: "Hong Kong",
      title: "Frontend Programmer",
      logoUrl: "",
      start: "Aug 2022",
      end: "Now",
      description: "Learn technology and experience entrepreneurship",
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
  ],
  projects: [
    {
      title: "Swing Fridge Pro",
      href: "https://apps.apple.com/hk/app/swing-fridge-pro/id6670784659?l=en-GB",
      dates: "Mar 2024 - Now",
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
  ],
  awesome: [
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
  slogan: "我思故我在",
  url: "https://sunguoqi.com",
  location: "香港",
  locationLink: "https://maps.app.goo.gl/BNSJUVybj1jgwiY48",
  description: "喜歡思考；寫代碼、攝影、旅行、重量訓練～",
  summary:
    "自 2022 年畢業後，一直從事代碼開發工作。希望能做一些有趣的事情，並留下一些難忘的回憶~",
  // avatarUrl: "/me.png",
  avatarUrl: "https://avatars.githubusercontent.com/u/63999575?v=4",
  tweetId: en.tweetId,
  skills: en.skills,
  navbar: [
    {
      href: "/",
      icon: <Icons.me className="size-full" />,
      label: "博客",
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
      company: "某初創公司",
      href: "",
      badges: [],
      location: "香港",
      title: "前端開發程序員",
      logoUrl: "",
      start: "2022.08",
      end: "Now",
      description: "精簡技術，參與創業開發",
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
  ],
  projects: [
    {
      title: "叫醒冰箱 Pro",
      href: "https://apps.apple.com/hk/app/swing-fridge-pro/id6670784659?l=en-GB",
      dates: "Mar 2024 - Now",
      active: true,
      description:
        "一個簡約設計的 iOS APP，管理你的雪櫃，確保食物新鮮，減少浪費",
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
  ],
  awesome: [
    {
      title: "數字華容道",
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

export const getLocaleData = (locale: string) => {
  return locale === "zh" ? zh : en
}

export type LocaleData = typeof en
