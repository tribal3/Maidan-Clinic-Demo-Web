import { useLanguage } from '../language/useLanguage'
import { Container } from './ui/Container'
import { Reveal } from './ui/Reveal'

export function TrustStrip() {
  const { t } = useLanguage()

  return (
    <section
      aria-labelledby="trust-heading"
      className="relative overflow-hidden bg-teal-deep text-mist"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(80%_120%_at_100%_0%,rgba(20,99,95,0.55),transparent_65%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -end-40 top-1/2 h-[540px] w-[540px] -translate-y-1/2 rounded-full border border-mint/10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -end-24 top-1/2 h-[360px] w-[360px] -translate-y-1/2 rounded-full border border-mint/10"
      />

      <Container className="relative py-16 sm:py-20 lg:py-24">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-end lg:gap-16">
          <Reveal>
            <p className="eyebrow flex items-center gap-3 text-sand">
              <span aria-hidden="true" className="h-px w-9 bg-sand/70" />
              {t.stats.eyebrow}
            </p>
            <h2
              id="trust-heading"
              className="mt-5 max-w-[22ch] font-display text-[clamp(2rem,3.8vw,3.2rem)] leading-[1.08] text-mist"
            >
              {t.stats.title}
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="max-w-[42ch] text-[13px] leading-[1.85] text-mist/65 sm:text-[13.5px] lg:justify-self-end">
              {t.stats.intro}
            </p>
          </Reveal>
        </div>

        <dl className="mt-12 grid grid-cols-2 gap-y-10 border-t border-white/15 pt-10 sm:mt-14 lg:grid-cols-4 lg:gap-y-0">
          {t.stats.items.map((item, index) => (
            <Reveal
              key={item.label}
              delay={index * 70}
              className="lg:border-e lg:border-white/12 lg:px-8 lg:first:ps-0 lg:last:border-e-0 lg:last:pe-0"
            >
              <div>
                <dt className="font-display text-[clamp(2.7rem,4.4vw,3.9rem)] leading-none tracking-[-0.03em] text-[#e4d3b3]">
                  {item.value}
                </dt>
                <dd className="mt-3">
                  <span className="block text-[12.5px] font-semibold tracking-[0.02em] text-mist">
                    {item.label}
                  </span>
                  <span className="mt-1.5 block max-w-[24ch] text-[11px] leading-relaxed text-mist/55">
                    {item.detail}
                  </span>
                </dd>
              </div>
            </Reveal>
          ))}
        </dl>

        <p className="mt-10 max-w-[70ch] border-t border-white/10 pt-5 text-[10.5px] leading-relaxed text-mist/55">
          {t.stats.source}
        </p>
      </Container>
    </section>
  )
}
