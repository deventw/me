import { useLocale, useTranslations } from "next-intl"
import Link from "next/link"
import Markdown from "react-markdown"
import { AwesomeCard } from "~/components/awesome-card"
import { ProjectCard } from "~/components/project-card"
import { ResumeCard } from "~/components/resume-card"
import { RView } from "~/components/rview"
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar"
import { Badge } from "~/components/ui/badge"
import BlurFade from "~/components/ui/blur-fade"
import BlurFadeText from "~/components/ui/blur-fade-text"
import { getLocaleData } from "~/config"

const BLUR_FADE_DELAY = 0.03

export default function Page() {
  const locale = useLocale()
  const t = useTranslations()
  const DATA = getLocaleData(locale)

  return (
    <main className="flex min-h-[100dvh] flex-col space-y-10 pb-40">
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="flex justify-between items-center gap-4">
            <div className="flex-1">
              <BlurFadeText
                delay={BLUR_FADE_DELAY * 1.5}
                className="text-3xl font-bold tracking-tighter sm:text-4xl"
                yOffset={8}
                text={DATA.name}
              />
              <BlurFadeText
                className="text-lg font-medium text-muted-foreground mt-2"
                delay={BLUR_FADE_DELAY * 2}
                text={DATA.title}
              />
              <BlurFadeText
                className="text-sm text-muted-foreground mt-3"
                delay={BLUR_FADE_DELAY * 2.5}
                text={DATA.personalMessage}
              />
            </div>
            <Link href={DATA.contact.social.GitHub.url ?? "#"} target="_blank">
              <BlurFade delay={BLUR_FADE_DELAY * 1.5}>
                <Avatar className="size-28">
                  <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                  <AvatarFallback>{DATA.name[0]}</AvatarFallback>
                </Avatar>
              </BlurFade>
            </Link>
          </div>
        </div>
      </section>

      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 2}>
            <h2 className="text-xl font-bold">{t("work-narrative")}</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {DATA.workDescription}
            </p>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <Markdown
              className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert"
            >
              {DATA.summary}
            </Markdown>
          </BlurFade>
        </div>
      </section>

      <section id="love">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-xl font-bold">{t("love")}</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 6}>
            <div className="flex flex-wrap justify-center gap-2">
              {DATA.interests.map((interest, index) => (
                <span key={index} className="rounded-full bg-muted px-3 py-1 text-sm">
                  {interest}
                </span>
              ))}
            </div>
          </BlurFade>
        </div>
      </section>

      <section id="bio">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-xl font-bold">{t("bio")}</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 8}>
            <div className="space-y-2">
              {DATA.bio.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <span className="font-mono text-sm text-muted-foreground min-w-[60px]">
                    {item.year}
                  </span>
                  <span className="text-sm">{item.event}</span>
                </div>
              ))}
            </div>
          </BlurFade>
        </div>
      </section>

      <section id="work-experience">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-xl font-bold">{t("work")}</h2>
          </BlurFade>
          {DATA.work.map((work, id) => (
            <BlurFade
              key={work.company}
              delay={BLUR_FADE_DELAY * 16 + id * 0.05}
            >
              <ResumeCard
                key={work.company}
                logoUrl={work.logoUrl}
                altText={work.company}
                title={work.company}
                subtitle={work.title}
                href={work.href}
                badges={work.badges}
                period={`${work.start} - ${work.end ?? t("present")}`}
                description={work.description}
              />
            </BlurFade>
          ))}
        </div>
      </section>

      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <h2 className="text-xl font-bold">{t("education")}</h2>
          </BlurFade>
          {DATA.education.map((education, id) => (
            <BlurFade
              key={education.school}
              delay={BLUR_FADE_DELAY * 16 + id * 0.05}
            >
              <ResumeCard
                key={education.school}
                href={education.href}
                logoUrl={education.logoUrl}
                altText={education.school}
                title={education.school}
                subtitle={education.degree}
                period={`${education.start} - ${education.end}`}
                description={education.description}
              />
            </BlurFade>
          ))}
        </div>
      </section>

      {/*  */}
      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <h2 className="text-xl font-bold">{t("skills")}</h2>
          </BlurFade>
          <div className="flex flex-wrap gap-1">
            {DATA.skills.map((skill, id) => (
              <BlurFade key={skill} delay={BLUR_FADE_DELAY * 16 + id * 0.05}>
                <Badge key={skill}>{skill}</Badge>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      {/*  */}
      <section id="projects">
        <div className="w-full space-y-12 py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground px-3 py-1 text-sm text-background">
                  {t("projects")}
                </div>
                <h2
                  className="text-3xl font-bold tracking-tighter sm:text-5xl"
                >
                  {t("check-my-work")}
                </h2>
                <p
                  className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
                >
                  {t("my-work-description")}
                </p>
              </div>
            </div>
          </BlurFade>
          <div className="mx-auto grid max-w-[800px] grid-cols-1 gap-3 sm:grid-cols-2">
            {DATA.projects.map((project, id) => (
              <BlurFade
                key={project.title}
                delay={BLUR_FADE_DELAY * 16 + id * 0.05}
              >
                <ProjectCard
                  href={project.href}
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  dates={project.dates}
                  tags={project.technologies}
                  image={project.image}
                  video={project.video}
                  links={project.links}
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="awesome">
        <div className="w-full space-y-12 py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground px-3 py-1 text-sm text-background">
                  {t("awesome")}
                </div>
                <h2
                  className="text-3xl font-bold tracking-tighter sm:text-5xl"
                >
                  {t("building-things")}
                </h2>
                <p
                  className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
                >
                  {t("have-done")}
                </p>
              </div>
            </div>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <ul className="mb-4 ml-4 divide-y divide-dashed border-l">
              {DATA.awesome.map((project, id) => (
                <BlurFade
                  key={project.title + project.dates}
                  delay={BLUR_FADE_DELAY * 16 + id * 0.05}
                >
                  <AwesomeCard
                    title={project.title}
                    description={project.description}
                    location={project.location}
                    dates={project.dates}
                    image={project.image}
                    links={project.links}
                  />
                </BlurFade>
              ))}
            </ul>
          </BlurFade>
        </div>
      </section>
      {/* <section id="map" className="w-full">
        <div className="grid w-full items-center justify-center gap-4 px-4 py-12 text-center md:px-6">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <div className="space-y-3">
              <div className="inline-block rounded-lg bg-foreground px-3 py-1 text-sm text-background">
                {t("travel")}
              </div>
              <h2
                className="text-3xl font-bold tracking-tighter sm:text-5xl"
              >
                {t("places-i-visited")}
              </h2>
              <p
                className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
              >
                {t("data-from")}{" "}
                <Link
                  href="https://camlife.cn"
                  className="text-blue-500"
                  data-umami-event="map-to-camlife"
                >
                  CamLife
                </Link>
              </p>
            </div>
          </BlurFade>
        </div>
        <iframe
          src={`https://camlife.cn/map?hide_controls=true&lang=${locale}`}
          className="h-[400px] w-full"
          style={{ border: "none" }}
        />
      </section> */}
      {/* <section id="contact">
        <div className="grid w-full items-center justify-center gap-4 px-4 py-12 text-center md:px-6">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <div className="space-y-3">
              <div className="inline-block rounded-lg bg-foreground px-3 py-1 text-sm text-background">
                {t("contact")}
              </div>
              <h2
                className="text-3xl font-bold tracking-tighter sm:text-5xl"
              >
                {t("get-in-touch")}
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                {t("want-to-chat")}? {t("shoot-me")}{" "}
                <Link
                  href={DATA.contact.social.Twitter.url}
                  className="text-blue-500 hover:underline"
                  data-umami-event="contact-twitter-link"
                >
                  {t("direct-twitter")}
                </Link>{" "}
                {t("will-respond")}
              </p>
              <div className="flex justify-center">
                <TweetCard id={DATA.tweetId} className="!mt-5" />
              </div>
            </div>
          </BlurFade>
        </div>
      </section> */}
      
      {/* RView Component */}
      <section id="rview">
        <BlurFade delay={BLUR_FADE_DELAY * 16}>
          <RView />
        </BlurFade>
      </section>
    </main>
  )
}
