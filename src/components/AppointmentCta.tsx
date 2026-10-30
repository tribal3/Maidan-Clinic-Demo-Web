import {
  ArrowUpRight,
  Globe,
  Mail,
  MapPin,
  Navigation,
  Phone,
} from 'lucide-react'
import { clinic } from '../content/site'
import { useLanguage } from '../language/useLanguage'
import { ButtonLink } from './ui/ButtonLink'
import { Container } from './ui/Container'
import { Reveal } from './ui/Reveal'

export function AppointmentCta() {
  const { t } = useLanguage()

  return (
    <section
      id="contact"
      aria-labelledby="appointment-heading"
      className="relative overflow-hidden bg-teal text-mist"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(100%_130%_at_92%_0%,rgba(20,99,95,0.65),transparent_60%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -start-32 -bottom-40 h-[500px] w-[500px] rounded-full border border-mint/10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -start-16 -bottom-24 h-[320px] w-[320px] rounded-full border border-mint/10"
      />

      <Container className="relative py-16 sm:py-20 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-20">
          <Reveal>
            <p className="eyebrow flex items-center gap-3 text-sand">
              <span aria-hidden="true" className="h-px w-9 bg-sand/70" />
              {t.appointment.eyebrow}
            </p>
            <h2
              id="appointment-heading"
              className="mt-5 max-w-[14ch] font-display text-[clamp(2.5rem,5vw,4.3rem)] leading-[0.98] tracking-[-0.03em] text-mist"
            >
              {t.appointment.title}
            </h2>
            <p className="mt-6 max-w-[44ch] text-[13.5px] leading-[1.9] text-mist/70 sm:text-[14.5px]">
              {t.appointment.body}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-[11px] text-mist/60">
              <span className="inline-flex items-center gap-2">
                <MapPin aria-hidden="true" className="h-3.5 w-3.5 text-sand" />
                {t.appointment.locationLine}
              </span>
              <span className="inline-flex items-center gap-2">
                <Phone aria-hidden="true" className="h-3.5 w-3.5 text-sand" />
                {t.appointment.supporting}
              </span>
            </div>

            <p className="mt-8 max-w-[58ch] rounded-xl border border-white/12 bg-white/[0.04] px-4 py-3 text-[10.5px] leading-relaxed text-mist/55">
              {t.appointment.note}
            </p>
          </Reveal>

          <Reveal delay={120}>
            <div className="rounded-[1.75rem] border border-white/15 bg-white/[0.055] p-6 backdrop-blur-sm sm:p-8">
              <p className="micro-label text-sand">{t.appointment.phoneLabel}</p>
              <a
                href={clinic.phoneHref}
                dir="ltr"
                className="mt-2 inline-flex items-center gap-3 font-display text-[clamp(2.4rem,5vw,3.3rem)] leading-none tracking-[0.02em] text-mist transition-colors duration-300 hover:text-[#e4d3b3]"
              >
                <Phone
                  aria-hidden="true"
                  className="h-6 w-6 shrink-0 text-sand sm:h-7 sm:w-7"
                />
                {clinic.phoneDisplay}
              </a>

              <div className="mt-6 grid gap-2.5">
                <ButtonLink
                  href={clinic.phoneHref}
                  variant="onDark"
                  size="lg"
                  fullWidth
                >
                  <Phone aria-hidden="true" className="h-4 w-4" />
                  {t.actions.callNow}
                </ButtonLink>
                <ButtonLink
                  href="#branches"
                  variant="ghostOnDark"
                  size="lg"
                  fullWidth
                >
                  <Navigation aria-hidden="true" className="h-4 w-4" />
                  {t.actions.findBranch}
                </ButtonLink>
              </div>

              <dl className="mt-7 space-y-3.5 border-t border-white/15 pt-6">
                <div className="flex items-start gap-3">
                  <Mail
                    aria-hidden="true"
                    className="mt-0.5 h-3.5 w-3.5 shrink-0 text-sand"
                  />
                  <div className="min-w-0">
                    <dt className="micro-label text-mist/55">
                      {t.appointment.emailLabel}
                    </dt>
                    <dd className="mt-0.5">
                      <a
                        href={`mailto:${clinic.email}`}
                        className="text-[12px] text-mist/80 transition-colors hover:text-mist"
                      >
                        {clinic.email}
                      </a>
                    </dd>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Globe
                    aria-hidden="true"
                    className="mt-0.5 h-3.5 w-3.5 shrink-0 text-sand"
                  />
                  <div className="min-w-0">
                    <dt className="micro-label text-mist/55">
                      {t.appointment.websiteLabel}
                    </dt>
                    <dd className="mt-0.5">
                      <a
                        href={clinic.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[12px] text-mist/80 transition-colors hover:text-mist"
                      >
                        maidangroup.com
                        <ArrowUpRight
                          aria-hidden="true"
                          className="h-3 w-3 rtl:-scale-x-100"
                        />
                      </a>
                    </dd>
                  </div>
                </div>
              </dl>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
