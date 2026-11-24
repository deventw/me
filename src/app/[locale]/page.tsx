import { useLocale, useTranslations } from "next-intl"
import Link from "next/link"
import type { ReactNode } from "react"
import { RView } from "~/components/rview"
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar"
import BlurFade from "~/components/ui/blur-fade"
import { getLocaleData } from "~/config"

const DELAY = 0.04

/** 區塊：上面一條細線，左邊編號 + 標籤 */
function Section({ id, no, label, intro, children }: { id: string; no: string; label: string; intro?: string; children: ReactNode }) {
  return (
    <section id={id} className="scroll-mt-12 border-t border-border pt-6">
      <BlurFade delay={DELAY}>
        <header className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
          <h2 className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">
            <span className="mr-3 text-brand">{no}</span>
            {label}
          </h2>
          {intro ? <p className="text-sm text-muted-foreground">{intro}</p> : null}
        </header>
      </BlurFade>
      {children}
    </section>
  )
}

function Arrow() {
  return (
    <svg viewBox="0 0 24 24" className="size-4 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true">
      <path d="M8 16 16 8m-7 0h7v7" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function Page() {
  const locale = useLocale()
  const t = useTranslations()
  const DATA = getLocaleData(locale)

  return (
    <main className="flex min-h-[100dvh] flex-col gap-24 pb-40">
      {/* ---------- Hero ---------- */}
      <section id="hero" className="pt-4">
        <BlurFade delay={DELAY}>
          <div className="flex items-center gap-3">
            <Avatar className="size-11 ring-1 ring-border">
              <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
              <AvatarFallback>D</AvatarFallback>
            </Avatar>
            <div className="leading-tight">
              <p className="font-medium">{DATA.name}</p>
              <p className="font-mono text-xs text-muted-foreground">
                {DATA.role} ·{" "}
                <Link href={DATA.locationLink} target="_blank" className="hover:text-foreground">
                  {DATA.location}
                </Link>
              </p>
            </div>
          </div>
        </BlurFade>

        <BlurFade delay={DELAY * 2}>
          <p className="mt-14 font-mono text-sm text-brand">{DATA.hero.greeting}</p>
          <h1 className="mt-4 text-balance text-4xl font-semibold leading-[1.08] tracking-tight sm:text-6xl">
            {DATA.hero.headline[0]}
            <br />
            <span className="text-muted-foreground">{DATA.hero.headline[1]}</span>
          </h1>
        </BlurFade>

        <BlurFade delay={DELAY * 3}>
          <p className="mt-8 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">{DATA.hero.intro}</p>
          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
            <Link
              href={`mailto:${DATA.contact.email}`}
              className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background transition-opacity hover:opacity-85"
              data-umami-event="hero-email"
            >
              {DATA.hero.cta}
            </Link>
            <Link href="#work" className="text-sm font-medium underline decoration-border underline-offset-4 hover:decoration-foreground">
              {DATA.hero.secondary} ↓
            </Link>
          </div>
        </BlurFade>
      </section>

      {/* ---------- About ---------- */}
      <Section id="about" no="01" label={t("about")}>
        <div className="space-y-5">
          {DATA.about.map((p, i) => (
            <BlurFade key={i} delay={DELAY * (2 + i)}>
              <p className="text-pretty text-lg leading-relaxed">{p}</p>
            </BlurFade>
          ))}
        </div>
      </Section>

      {/* ---------- Selected work ---------- */}
      <Section id="work" no="02" label={t("work")} intro={t("work-intro")}>
        <ul className="divide-y divide-border border-y border-border">
          {DATA.work.map((w, i) => (
            <BlurFade key={w.title} delay={DELAY * (2 + i)}>
              <li>
                <Link
                  href={w.href}
                  target="_blank"
                  className="group grid grid-cols-[3.5rem_1fr] gap-x-5 gap-y-1 py-6 sm:grid-cols-[4rem_1fr_auto]"
                  data-umami-event={`work-${w.title}`}
                >
                  <div className="row-span-3 size-14 overflow-hidden rounded-[22%] bg-muted ring-1 ring-border sm:size-16">
                    {w.icon ? (
                      <img src={w.icon} alt="" className="size-full object-cover" loading="lazy" />
                    ) : w.image ? (
                      <img src={w.image} alt="" className="size-full object-cover object-left-top" loading="lazy" />
                    ) : (
                      <span className="grid size-full place-items-center font-mono text-xs text-muted-foreground">www</span>
                    )}
                  </div>
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <h3 className="text-lg font-semibold tracking-tight group-hover:text-brand">{w.title}</h3>
                    <span className="font-mono text-xs text-muted-foreground">
                      {w.kind} · {w.year}
                    </span>
                    {w.status ? (
                      <span className="rounded-full border border-border px-2 py-0.5 font-mono text-[11px] text-muted-foreground">
                        {w.status}
                      </span>
                    ) : null}
                  </div>
                  <span className="hidden items-center gap-1 self-start pt-1 text-sm text-muted-foreground group-hover:text-foreground sm:row-span-3 sm:inline-flex">
                    {t("visit")}
                    <Arrow />
                  </span>
                  <p className="text-pretty text-sm leading-relaxed text-muted-foreground">{w.description}</p>
                  <p className="mt-1 font-mono text-xs text-muted-foreground/80">{w.stack.join(" · ")}</p>
                </Link>
                {w.links ? (
                  <div className="-mt-3 flex gap-4 pb-6 pl-[4.75rem] sm:pl-[5.25rem]">
                    {w.links.map((l) => (
                      <Link key={l.href} href={l.href} target="_blank" className="font-mono text-xs underline underline-offset-4 hover:text-brand">
                        {l.label}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </li>
            </BlurFade>
          ))}
        </ul>
      </Section>

      {/* ---------- Playground ---------- */}
      <Section id="playground" no="03" label={t("playground")} intro={t("playground-intro")}>
        <div className="grid gap-4 sm:grid-cols-2">
          {DATA.playground.map((p, i) => (
            <BlurFade key={p.title} delay={DELAY * (2 + i)}>
              <article className="overflow-hidden rounded-xl border border-border">
                <img src={p.image} alt="" className="aspect-[16/10] w-full object-cover" loading="lazy" />
                <div className="space-y-2 p-5">
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="font-semibold tracking-tight">{p.title}</h3>
                    <span className="font-mono text-xs text-muted-foreground">{p.year}</span>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">{p.description}</p>
                  <div className="flex gap-4 pt-1">
                    {p.links.map((l) => (
                      <Link key={l.href} href={l.href} target="_blank" className="font-mono text-xs underline underline-offset-4 hover:text-brand">
                        {l.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </article>
            </BlurFade>
          ))}
        </div>
      </Section>

      {/* ---------- Experience + education ---------- */}
      <Section id="experience" no="04" label={t("experience")}>
        <ol className="space-y-8">
          {[...DATA.experience].map((e, i) => (
            <BlurFade key={e.title + e.org} delay={DELAY * (2 + i)}>
              <li className="grid gap-1 sm:grid-cols-[10rem_1fr] sm:gap-6">
                <span className="font-mono text-xs leading-6 text-muted-foreground">{e.period}</span>
                <div>
                  <h3 className="font-semibold tracking-tight">
                    {e.title}
                    <span className="font-normal text-muted-foreground"> · </span>
                    {e.href ? (
                      <Link href={e.href} target="_blank" className="font-normal underline decoration-border underline-offset-4 hover:text-brand">
                        {e.org}
                      </Link>
                    ) : (
                      <span className="font-normal">{e.org}</span>
                    )}
                  </h3>
                  {e.description ? <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{e.description}</p> : null}
                </div>
              </li>
            </BlurFade>
          ))}
        </ol>
        <h3 className="mb-6 mt-14 font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">{t("education")}</h3>
        <ol className="space-y-6">
          {DATA.education.map((e) => (
            <li key={e.org} className="grid gap-1 sm:grid-cols-[10rem_1fr] sm:gap-6">
              <span className="font-mono text-xs leading-6 text-muted-foreground">{e.period}</span>
              <div>
                <h3 className="font-semibold tracking-tight">{e.title}</h3>
                <Link href={e.href ?? "#"} target="_blank" className="text-sm text-muted-foreground hover:text-foreground">
                  {e.org}
                </Link>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      {/* ---------- Skills ---------- */}
      <Section id="skills" no="05" label={t("skills")}>
        <dl className="divide-y divide-border border-y border-border">
          {DATA.skills.map((s) => (
            <div key={s.group} className="grid gap-1 py-4 sm:grid-cols-[10rem_1fr] sm:gap-6">
              <dt className="font-mono text-xs leading-6 text-muted-foreground">{s.group}</dt>
              <dd className="text-sm leading-6">{s.items.join(" · ")}</dd>
            </div>
          ))}
        </dl>
      </Section>

      {/* ---------- Contact ---------- */}
      <Section id="contact" no="06" label={t("contact")}>
        <BlurFade delay={DELAY * 2}>
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-5xl">{DATA.contact.title}</h2>
          <p className="mt-5 max-w-xl text-pretty leading-relaxed text-muted-foreground">{DATA.contact.body}</p>
          <Link
            href={`mailto:${DATA.contact.email}`}
            className="mt-8 inline-block text-2xl font-medium tracking-tight underline decoration-brand decoration-2 underline-offset-8 hover:text-brand sm:text-3xl"
            data-umami-event="contact-email"
          >
            {DATA.contact.email}
          </Link>
          <div className="mt-8 flex gap-6">
            {Object.values(DATA.contact.social)
              .filter((s) => !s.url.startsWith("mailto:"))
              .map((s) => (
                <Link key={s.name} href={s.url} target="_blank" className="group inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
                  {s.name}
                  <Arrow />
                </Link>
              ))}
          </div>
        </BlurFade>
      </Section>

      {/* 蝴蝶動畫（保留原有作品） */}
      <section id="rview">
        <BlurFade delay={DELAY}>
          <RView />
        </BlurFade>
      </section>
    </main>
  )
}
