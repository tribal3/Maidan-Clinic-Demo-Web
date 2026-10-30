import { useState, type KeyboardEvent } from 'react'
import { ArrowUpRight, MapPin, Navigation, Phone } from 'lucide-react'
import { branches, branchMapUrl, clinic, type BranchId } from '../content/site'
import { useLanguage } from '../language/useLanguage'
import { cx } from '../lib/cx'
import { ButtonLink } from './ui/ButtonLink'
import { Container } from './ui/Container'
import { Reveal } from './ui/Reveal'

export function Branches() {
  const { t, lang } = useLanguage()
  const [activeId, setActiveId] = useState<BranchId>('jahra')
  const active = branches.find((branch) => branch.id === activeId) ?? branches[0]
  const activeIndex = branches.findIndex((branch) => branch.id === active.id)

  const onTabKeyDown = (
    event: KeyboardEvent<HTMLButtonElement>,
    index: number,
  ) => {
    let next: number | null = null
    if (event.key === 'ArrowDown' || event.key === 'ArrowRight') {
      next = (index + 1) % branches.length
    } else if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') {
      next = (index - 1 + branches.length) % branches.length
    } else if (event.key === 'Home') {
      next = 0
    } else if (event.key === 'End') {
      next = branches.length - 1
    }
    if (next === null) return

    event.preventDefault()
    setActiveId(branches[next].id)
    const tabs =
      event.currentTarget.parentElement?.querySelectorAll<HTMLButtonElement>(
        '[role="tab"]',
      )
    tabs?.[next]?.focus()
  }

  return (
    <section id="branches" className="relative overflow-hidden bg-[#f4efe5]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -end-40 -top-40 h-[520px] w-[520px] rounded-full border border-sand/30"
      />

      <Container className="relative py-20 sm:py-24 lg:py-28">
        <div className="grid gap-6 lg:grid-cols-[1fr_0.85fr] lg:items-end lg:gap-16">
          <Reveal>
            <p className="eyebrow flex items-center gap-3 text-sea">
              <span aria-hidden="true" className="h-px w-9 bg-sand" />
              {t.branches.eyebrow}
            </p>
            <h2 className="mt-5 max-w-[17ch] font-display text-[clamp(2.1rem,4.2vw,3.5rem)] leading-[1.04] tracking-[-0.02em] text-teal">
              {t.branches.title}
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="max-w-[42ch] text-[13.5px] leading-[1.85] text-ink-soft lg:justify-self-end lg:text-[14px]">
              {t.branches.intro}
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 lg:mt-16 lg:grid-cols-[0.92fr_1.08fr] lg:gap-8">
          <Reveal>
            <div
              role="tablist"
              aria-label={t.branches.tabsLabel}
              aria-orientation="vertical"
              className="flex flex-col gap-2"
            >
              {branches.map((branch, index) => {
                const selected = branch.id === active.id
                return (
                  <button
                    key={branch.id}
                    id={`branch-tab-${branch.id}`}
                    type="button"
                    role="tab"
                    aria-selected={selected}
                    aria-controls="branch-panel"
                    tabIndex={selected ? 0 : -1}
                    onClick={() => setActiveId(branch.id)}
                    onKeyDown={(event) => onTabKeyDown(event, index)}
                    className={cx(
                      'group flex w-full items-center justify-between gap-4 rounded-xl border px-4 py-3.5 text-start transition-all duration-300 sm:px-5',
                      selected
                        ? 'border-teal bg-teal text-mist shadow-[0_16px_36px_-28px_rgba(5,37,38,0.7)]'
                        : 'border-line bg-white/55 text-teal hover:border-sand/80 hover:bg-white',
                    )}
                  >
                    <span className="flex min-w-0 items-center gap-3.5">
                      <span
                        aria-hidden="true"
                        className="font-display text-[10.5px] tracking-[0.14em] text-sand"
                      >
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span className="min-w-0">
                        <span className="block truncate font-display text-[18px] leading-tight sm:text-[19px]">
                          {lang === 'ar' ? branch.nameAr : branch.nameEn}
                        </span>
                        {branch.featured && (
                          <span
                            className={cx(
                              'mt-1 block text-[9px] font-semibold tracking-[0.14em] uppercase',
                              selected ? 'text-mist/60' : 'text-sea/80',
                            )}
                          >
                            {t.branches.featuredLabel}
                          </span>
                        )}
                      </span>
                    </span>
                    <ArrowUpRight
                      aria-hidden="true"
                      className={cx(
                        'h-4 w-4 shrink-0 transition-transform duration-300',
                        selected
                          ? 'text-sand'
                          : 'text-sea/50 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 rtl:-scale-x-100',
                      )}
                    />
                  </button>
                )
              })}
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div
              id="branch-panel"
              role="tabpanel"
              aria-labelledby={`branch-tab-${active.id}`}
              className="relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-line bg-white p-6 sm:p-8 lg:p-10"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 200 200"
                fill="none"
                className="pointer-events-none absolute -end-16 -top-20 h-52 w-52 text-sand/20"
              >
                <circle cx="100" cy="100" r="99" stroke="currentColor" />
                <circle cx="100" cy="100" r="72" stroke="currentColor" />
                <circle
                  cx="100"
                  cy="100"
                  r="44"
                  stroke="currentColor"
                  strokeDasharray="2 6"
                />
              </svg>

              <div className="relative flex flex-wrap items-center justify-between gap-3">
                <span className="micro-label text-ink-soft" dir="ltr">
                  {String(activeIndex + 1).padStart(2, '0')} /{' '}
                  {String(branches.length).padStart(2, '0')}
                </span>
                {active.featured && (
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-sand-soft px-3 py-1.5 text-[9px] font-semibold tracking-[0.14em] text-sea uppercase">
                    <span
                      aria-hidden="true"
                      className="h-1 w-1 rounded-full bg-sea"
                    />
                    {t.branches.featuredLabel}
                  </span>
                )}
              </div>

              <h3 className="relative mt-5 font-display text-[clamp(2.3rem,4vw,3.2rem)] leading-none tracking-[-0.025em] text-teal">
                {lang === 'ar' ? active.nameAr : active.nameEn}
              </h3>
              <p
                className="relative mt-1.5 text-start text-[11.5px] tracking-[0.02em] text-ink-soft"
                lang={lang === 'ar' ? 'en' : 'ar'}
              >
                {lang === 'ar' ? active.nameEn : active.nameAr}
              </p>

              <dl className="relative mt-8 space-y-6 border-t border-line pt-7">
                <div>
                  <dt className="micro-label flex items-center gap-2 text-sea">
                    <MapPin aria-hidden="true" className="h-3.5 w-3.5" />
                    {t.branches.addressLabel}
                  </dt>
                  <dd className="mt-2 max-w-[42ch] text-[13.5px] leading-[1.75] font-medium text-teal">
                    {lang === 'ar' ? active.addressAr : active.addressEn}
                  </dd>
                </div>
                <div>
                  <dt className="micro-label text-sea">{t.branches.noteLabel}</dt>
                  <dd className="mt-2 max-w-[44ch] text-[12px] leading-[1.8] text-ink-soft">
                    {lang === 'ar' ? active.noteAr : active.noteEn}
                  </dd>
                </div>
              </dl>

              <div className="relative mt-auto flex flex-col gap-3 pt-8 sm:flex-row">
                <ButtonLink
                  href={branchMapUrl(active)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto"
                >
                  <Navigation aria-hidden="true" className="h-4 w-4" />
                  {t.branches.directions}
                  <ArrowUpRight
                    aria-hidden="true"
                    className="h-3.5 w-3.5 rtl:-scale-x-100"
                  />
                </ButtonLink>
                <a
                  href={clinic.phoneHref}
                  className="inline-flex items-center justify-center gap-2.5 rounded-full border border-teal/20 px-6 py-3.5 text-[12px] font-semibold tracking-[0.06em] text-teal uppercase transition-colors duration-300 hover:border-teal/45 hover:bg-mist"
                >
                  <Phone aria-hidden="true" className="h-4 w-4 text-sea" />
                  <span dir="ltr">{clinic.phoneDisplay}</span>
                </a>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-sand/50 pt-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-[76ch] text-[10.5px] leading-relaxed text-ink-soft">
            {t.branches.note}
          </p>
          <a
            href={clinic.branchesUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-1.5 text-[10.5px] font-semibold text-sea underline-offset-4 transition-colors hover:text-teal hover:underline"
          >
            {t.actions.officialSite}
            <ArrowUpRight
              aria-hidden="true"
              className="h-3 w-3 rtl:-scale-x-100"
            />
          </a>
        </div>
      </Container>
    </section>
  )
}
