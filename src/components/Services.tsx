import { useCallback, useState } from 'react'
import { ArrowUpRight, Info } from 'lucide-react'
import { clinic, type ServiceCopy } from '../content/site'
import { useLanguage } from '../language/useLanguage'
import { Reveal } from './ui/Reveal'
import { Container } from './ui/Container'
import { ServiceDialog } from './ServiceDialog'
import { serviceIcons } from './serviceIcons'

export function Services() {
  const { t } = useLanguage()
  const [selected, setSelected] = useState<ServiceCopy | null>(null)
  const close = useCallback(() => setSelected(null), [])

  return (
    <section id="services" className="relative overflow-hidden bg-white">
      <Container className="py-20 sm:py-24 lg:py-28">
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-end lg:gap-16">
          <Reveal>
            <p className="eyebrow flex items-center gap-3 text-sea">
              <span aria-hidden="true" className="h-px w-9 bg-sand" />
              {t.services.eyebrow}
            </p>
            <h2 className="mt-5 max-w-[18ch] font-display text-[clamp(2.1rem,4.2vw,3.4rem)] leading-[1.04] tracking-[-0.02em] text-teal">
              {t.services.title}
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="max-w-[46ch] text-[13.5px] leading-[1.85] text-ink-soft lg:justify-self-end lg:text-[14px]">
              {t.services.intro}
            </p>
          </Reveal>
        </div>

        <ul className="mt-12 grid gap-3 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {t.servicesList.map((service, index) => {
            const Icon = serviceIcons[service.id]
            return (
              <li key={service.id} className="h-full">
                <Reveal delay={(index % 3) * 60} className="h-full">
                  <button
                    type="button"
                    onClick={() => setSelected(service)}
                    aria-haspopup="dialog"
                    className="group relative flex h-full min-h-[248px] w-full flex-col overflow-hidden rounded-[1.4rem] border border-line bg-[#fbfaf6] p-6 text-start transition-all duration-500 hover:-translate-y-1 hover:border-sand/70 hover:bg-white hover:shadow-[0_30px_60px_-40px_rgba(5,37,38,0.4)] focus-visible:-translate-y-1 sm:p-7"
                  >
                    <span
                      aria-hidden="true"
                      className="absolute -end-16 -top-16 h-40 w-40 rounded-full bg-sand-soft/0 transition-colors duration-500 group-hover:bg-sand-soft/60"
                    />

                    <div className="relative flex items-start justify-between gap-4">
                      <span className="grid h-12 w-12 place-items-center rounded-full border border-sand/40 bg-white text-sea transition-colors duration-500 group-hover:border-sea group-hover:bg-sea group-hover:text-mist">
                        <Icon
                          aria-hidden="true"
                          className="h-[21px] w-[21px]"
                          strokeWidth={1.4}
                        />
                      </span>
                      <span
                        aria-hidden="true"
                        className="font-display text-[12px] tracking-[0.16em] text-sand"
                      >
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>

                    <h3 className="relative mt-7 max-w-[19ch] font-display text-[22px] leading-[1.15] tracking-[-0.01em] text-teal sm:text-[24px]">
                      {service.title}
                    </h3>
                    <p className="relative mt-3 flex-1 max-w-[34ch] text-[12.5px] leading-[1.75] text-ink-soft">
                      {service.description}
                    </p>

                    <span className="relative mt-6 flex items-center justify-between border-t border-line pt-4 text-[10.5px] font-semibold tracking-[0.12em] text-sea uppercase">
                      {t.services.cardCta}
                      <span className="grid h-7 w-7 place-items-center rounded-full border border-sea/20 transition-all duration-300 group-hover:border-sea group-hover:bg-sea group-hover:text-mist">
                        <ArrowUpRight
                          aria-hidden="true"
                          className="h-3.5 w-3.5 rtl:-scale-x-100"
                        />
                      </span>
                    </span>
                  </button>
                </Reveal>
              </li>
            )
          })}
        </ul>

        <div className="mt-8 flex flex-col gap-4 rounded-2xl border border-line bg-mist px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="flex max-w-[78ch] items-start gap-3 text-[11.5px] leading-relaxed text-ink-soft">
            <Info
              aria-hidden="true"
              className="mt-0.5 h-3.5 w-3.5 shrink-0 text-sea"
            />
            {t.services.note}
          </p>
          <a
            href={clinic.servicesUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-1.5 text-[11px] font-semibold tracking-[0.04em] text-sea underline-offset-4 transition-colors hover:text-teal hover:underline"
          >
            {t.actions.officialSite}
            <ArrowUpRight
              aria-hidden="true"
              className="h-3 w-3 rtl:-scale-x-100"
            />
          </a>
        </div>
      </Container>

      <ServiceDialog service={selected} onClose={close} />
    </section>
  )
}
