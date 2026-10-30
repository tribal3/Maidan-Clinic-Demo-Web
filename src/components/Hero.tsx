import { ArrowRight, ArrowUpRight, Check, MapPin, Phone } from 'lucide-react'
import { clinic } from '../content/site'
import { useLanguage } from '../language/useLanguage'
import { ButtonLink } from './ui/ButtonLink'
import { Container } from './ui/Container'
import { Reveal } from './ui/Reveal'
import { SmartImage } from './ui/SmartImage'

export function Hero() {
  const { t } = useLanguage()

  return (
    <section id="home" className="relative overflow-hidden bg-[#fbfaf6]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(90%_80%_at_88%_8%,rgba(226,211,183,0.55),transparent_60%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -start-32 top-24 h-[420px] w-[420px] rounded-full border border-sand/25"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -start-20 top-36 h-[260px] w-[260px] rounded-full border border-sand/20"
      />

      <Container className="relative pt-10 pb-16 sm:pt-14 lg:pt-20 lg:pb-24">
        <div className="grid items-center gap-14 lg:grid-cols-[1.02fr_0.98fr] lg:gap-12 xl:gap-20">
          <div className="relative z-10 max-w-[640px]">
            <Reveal>
              <p className="eyebrow flex items-center gap-3 text-sea">
                <span aria-hidden="true" className="h-px w-10 bg-sand" />
                {t.hero.eyebrow}
              </p>
            </Reveal>

            <Reveal delay={70}>
              <h1 className="hero-title mt-6 font-display text-[clamp(3rem,6.4vw,5.5rem)] leading-[0.94] tracking-[-0.035em] text-teal">
                <span className="block">{t.hero.titleLead}</span>
                <span className="accent-italic mt-1 block text-sea italic">
                  {t.hero.titleAccent}
                </span>
              </h1>
            </Reveal>

            <Reveal delay={140}>
              <p className="mt-7 max-w-[50ch] text-[14.5px] leading-[1.85] text-ink-soft sm:text-[15.5px]">
                {t.hero.body}
              </p>
            </Reveal>

            <Reveal delay={200}>
              <div className="mt-9 flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
                <ButtonLink href="#contact" size="lg" className="w-full sm:w-auto">
                  {t.actions.book}
                  <ArrowUpRight
                    aria-hidden="true"
                    className="h-4 w-4 transition-transform duration-300 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5 rtl:-scale-x-100"
                  />
                </ButtonLink>

                <a
                  href="#services"
                  className="group inline-flex w-full items-center justify-center gap-3 rounded-full border border-teal/25 px-6 py-4 text-[12px] font-semibold tracking-[0.06em] text-teal uppercase transition-all duration-300 hover:border-teal/55 hover:bg-white/70 sm:w-auto"
                >
                  {t.actions.explore}
                  <ArrowRight
                    aria-hidden="true"
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 rtl:-scale-x-100 rtl:group-hover:-translate-x-1"
                  />
                </a>
              </div>
            </Reveal>

            <Reveal delay={260}>
              <ul className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3 border-t border-teal/10 pt-6">
                {t.hero.trust.map((item) => (
                  <li
                    key={item}
                    className="inline-flex items-center gap-2 text-[11.5px] font-medium text-ink-soft"
                  >
                    <span className="grid h-4 w-4 shrink-0 place-items-center rounded-full bg-sand-soft text-sea">
                      <Check
                        aria-hidden="true"
                        className="h-2.5 w-2.5"
                        strokeWidth={3}
                      />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal delay={160} className="relative">
            <div className="relative mx-auto w-full max-w-[500px] lg:max-w-none">
              <div
                aria-hidden="true"
                className="absolute inset-x-5 top-5 -bottom-4 rounded-[2.1rem] border border-sand/60 sm:inset-x-7 sm:top-7"
              />
              <div
                aria-hidden="true"
                className="absolute end-0 top-0 h-[78%] w-[78%] rounded-[2rem] bg-sand-soft/80"
              />

              <div className="relative overflow-hidden rounded-[1.8rem] border border-white/70 shadow-[0_40px_90px_-50px_rgba(5,37,38,0.55)] sm:rounded-[2rem]">
                <div className="aspect-[4/5]">
                  <SmartImage
                    src="/images/hero-smile.webp"
                    alt={t.hero.imageAlt}
                    priority
                    className="h-full w-full object-cover object-[center_22%]"
                  />
                </div>
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-[linear-gradient(to_top,rgba(5,37,38,0.32),transparent_42%)]"
                />

                <div className="absolute top-5 end-5 flex flex-col items-end gap-1 rounded-2xl border border-white/50 bg-white/85 px-4 py-3 text-end backdrop-blur-md sm:top-6 sm:end-6">
                  <span className="micro-label text-sea">
                    {t.hero.badgeLabel}
                  </span>
                  <span className="font-display text-[19px] leading-none text-teal">
                    {t.hero.badgeValue}
                  </span>
                </div>

                <a
                  href="#branches"
                  className="group absolute inset-x-4 bottom-4 flex items-center gap-3.5 rounded-2xl border border-white/80 bg-white/95 p-4 shadow-[0_20px_50px_-30px_rgba(5,37,38,0.6)] backdrop-blur-md transition-transform duration-300 hover:-translate-y-0.5 sm:end-auto sm:bottom-6 sm:start-6 sm:w-[286px]"
                >
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-sand-soft text-sea">
                    <MapPin aria-hidden="true" className="h-4 w-4" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="micro-label text-ink-soft">
                      {t.hero.cardLabel}
                    </span>
                    <span className="mt-1 flex items-baseline justify-between gap-2">
                      <span className="font-display text-[20px] leading-none text-teal">
                        {t.hero.cardTitle}
                      </span>
                      <ArrowUpRight
                        aria-hidden="true"
                        className="h-3.5 w-3.5 shrink-0 text-sea transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 rtl:-scale-x-100"
                      />
                    </span>
                    <span className="mt-1.5 block text-[10.5px] leading-snug text-ink-soft">
                      {t.hero.cardBody}
                    </span>
                  </span>
                </a>
              </div>

              <a
                href={clinic.phoneHref}
                aria-label={`${t.header.hotline} ${clinic.phoneDisplay}`}
                className="absolute -bottom-7 end-2 hidden items-center gap-2.5 rounded-full border border-line bg-white px-4 py-2.5 shadow-[0_14px_40px_-28px_rgba(5,37,38,0.55)] transition-colors duration-300 hover:border-sea/30 lg:inline-flex"
              >
                <Phone aria-hidden="true" className="h-3.5 w-3.5 text-sea" />
                <span
                  dir="ltr"
                  className="text-[12px] font-semibold tracking-[0.04em] text-teal"
                >
                  {clinic.phoneDisplay}
                </span>
              </a>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
