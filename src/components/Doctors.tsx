import { ArrowUpRight } from 'lucide-react'
import { clinic } from '../content/site'
import { useLanguage } from '../language/useLanguage'
import { Container } from './ui/Container'
import { Reveal } from './ui/Reveal'

export function Doctors() {
  const { t } = useLanguage()

  return (
    <section id="doctors" className="relative overflow-hidden bg-white">
      <Container className="py-20 sm:py-24 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16 xl:gap-24">
          <div>
            <Reveal>
              <p className="eyebrow flex items-center gap-3 text-sea">
                <span aria-hidden="true" className="h-px w-9 bg-sand" />
                {t.doctors.eyebrow}
              </p>
              <h2 className="mt-5 max-w-[14ch] font-display text-[clamp(2.1rem,4.2vw,3.5rem)] leading-[1.04] tracking-[-0.02em] text-teal">
                {t.doctors.title}
              </h2>
              <p className="mt-5 max-w-[40ch] text-[13.5px] leading-[1.85] text-ink-soft">
                {t.doctors.intro}
              </p>
            </Reveal>

            <Reveal delay={100}>
              <div className="mt-8 rounded-[1.5rem] bg-teal-deep p-6 text-mist sm:p-7">
                <p className="font-display text-[52px] leading-none tracking-[-0.04em] text-[#e4d3b3]">
                  {t.doctors.statValue}
                </p>
                <p className="mt-2 text-[11px] font-semibold tracking-[0.12em] text-mist/80 uppercase">
                  {t.doctors.statLabel}
                </p>
                <p className="mt-5 border-t border-white/15 pt-4 text-[10.5px] tracking-[0.06em] text-mist/55 uppercase">
                  {t.appointment.locationLine}
                </p>
              </div>
            </Reveal>

            <Reveal delay={160}>
              <a
                href={clinic.doctorsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-[11.5px] font-semibold text-sea underline-offset-4 transition-colors hover:text-teal hover:underline"
              >
                {t.actions.viewDoctors}
                <ArrowUpRight
                  aria-hidden="true"
                  className="h-3.5 w-3.5 rtl:-scale-x-100"
                />
              </a>
            </Reveal>
          </div>

          <div>
            <ul className="grid sm:grid-cols-2">
              {t.doctors.teams.map((team, index) => (
                <li key={team.title} className="border-t border-line">
                  <Reveal
                    delay={(index % 2) * 60}
                    className="group h-full px-0 py-6 transition-colors duration-300 sm:px-2"
                  >
                    <div>
                      <span
                        aria-hidden="true"
                        className="font-display text-[11px] tracking-[0.16em] text-sand"
                      >
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <h3 className="mt-2 max-w-[22ch] text-[14px] leading-snug font-semibold text-teal transition-colors duration-300 group-hover:text-sea">
                        {team.title}
                      </h3>
                      <p className="mt-2 max-w-[36ch] text-[11.5px] leading-[1.75] text-ink-soft">
                        {team.body}
                      </p>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ul>

            <Reveal delay={120}>
              <p className="mt-6 rounded-2xl border border-line bg-mist px-5 py-4 text-[10.5px] leading-relaxed text-ink-soft">
                {t.doctors.note}
              </p>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  )
}
