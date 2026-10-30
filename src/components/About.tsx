import { ArrowRight, Star } from 'lucide-react'
import { useLanguage } from '../language/useLanguage'
import { ButtonLink } from './ui/ButtonLink'
import { Container } from './ui/Container'
import { Reveal } from './ui/Reveal'
import { SmartImage } from './ui/SmartImage'

export function About() {
  const { t } = useLanguage()

  return (
    <section id="about" className="relative overflow-hidden bg-mist">
      <Container className="py-20 sm:py-24 lg:py-28">
        <div className="grid items-center gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16 xl:gap-20">
          <Reveal className="order-2 lg:order-1">
            <div className="relative mx-auto w-full max-w-[520px]">
              <div
                aria-hidden="true"
                className="absolute -bottom-4 -start-4 h-full w-full rounded-[2rem] border border-sand/60 sm:-bottom-6 sm:-start-6 sm:rounded-[2.4rem]"
              />

              <div className="relative aspect-[4/4.4] overflow-hidden rounded-[1.8rem] border border-white/60 sm:rounded-[2rem]">
                <SmartImage
                  src="/images/clinic-interior.webp"
                  alt={t.about.imageAlt}
                  className="h-full w-full object-cover object-center"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-[linear-gradient(to_top,rgba(5,37,38,0.32),transparent_48%)]"
                />

                <div className="absolute top-5 start-5 inline-flex items-center gap-2 rounded-full border border-white/50 bg-white/90 px-3.5 py-2 backdrop-blur">
                  <Star
                    aria-hidden="true"
                    className="h-3 w-3 fill-sand text-sand"
                  />
                  <span className="micro-label text-teal">{t.about.badge}</span>
                </div>

                <div className="absolute bottom-5 end-5 rounded-[1.2rem] border border-white/70 bg-white/95 px-5 py-4 text-center shadow-lg backdrop-blur">
                  <p className="font-display text-[38px] leading-none tracking-[-0.03em] text-teal">
                    {t.about.cardValue}
                  </p>
                  <p className="mt-1.5 max-w-[110px] text-[10px] font-semibold tracking-[0.08em] text-ink-soft uppercase">
                    {t.about.cardLabel}
                  </p>
                </div>
              </div>

              <p className="mt-8 text-[10px] leading-relaxed text-ink-soft">
                {t.about.imageCaption}
              </p>
            </div>
          </Reveal>

          <div className="order-1 lg:order-2">
            <Reveal>
              <p className="eyebrow flex items-center gap-3 text-sea">
                <span aria-hidden="true" className="h-px w-9 bg-sand" />
                {t.about.eyebrow}
              </p>
              <h2 className="mt-5 max-w-[17ch] font-display text-[clamp(2.1rem,4.2vw,3.5rem)] leading-[1.04] tracking-[-0.02em] text-teal">
                {t.about.title}
              </h2>
            </Reveal>

            <Reveal delay={80}>
              <p className="mt-6 max-w-[54ch] border-s-2 border-sand ps-4 text-[14.5px] leading-[1.85] text-teal sm:text-[15.5px]">
                {t.about.intro}
              </p>
              <div className="mt-5 max-w-[56ch] space-y-3.5">
                {t.about.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="text-[13px] leading-[1.9] text-ink-soft sm:text-[13.5px]"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </Reveal>

            <Reveal delay={140}>
              <ul className="mt-9 grid gap-x-8 gap-y-6 sm:grid-cols-2">
                {t.about.points.map((point, index) => (
                  <li
                    key={point.title}
                    className="border-t border-line pt-4"
                  >
                    <span
                      aria-hidden="true"
                      className="font-display text-[11px] tracking-[0.16em] text-sand"
                    >
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <h3 className="mt-2 text-[13px] leading-snug font-semibold text-teal">
                      {point.title}
                    </h3>
                    <p className="mt-1.5 text-[11.5px] leading-[1.7] text-ink-soft">
                      {point.body}
                    </p>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={200}>
              <div className="mt-10 flex flex-col gap-5 rounded-2xl border border-sand/45 bg-white/60 p-5 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="font-display text-[19px] leading-snug text-teal">
                    {t.about.quote}
                  </p>
                  <p className="mt-1 text-[10.5px] text-ink-soft">
                    {t.about.quoteNote}
                  </p>
                </div>
                <ButtonLink href="#doctors" variant="outline" className="shrink-0">
                  {t.nav.doctors}
                  <ArrowRight
                    aria-hidden="true"
                    className="h-3.5 w-3.5 rtl:-scale-x-100"
                  />
                </ButtonLink>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  )
}
