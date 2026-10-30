import { useCallback, useEffect, useState } from 'react'
import { ArrowUpRight, CalendarDays, Menu, Phone, X } from 'lucide-react'
import { useActiveSection } from '../hooks/useActiveSection'
import { useBodyScrollLock } from '../hooks/useBodyScrollLock'
import { useModalA11y } from '../hooks/useModalA11y'
import { useLanguage } from '../language/useLanguage'
import { clinic } from '../content/site'
import { cx } from '../lib/cx'
import { ButtonLink } from './ui/ButtonLink'
import { LanguageToggle } from './ui/LanguageToggle'
import { Logo } from './ui/Logo'

const SECTION_IDS = ['home', 'services', 'about', 'doctors', 'branches', 'contact'] as const

export function Header() {
  const { t, lang } = useLanguage()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const active = useActiveSection(SECTION_IDS)

  const closeMenu = useCallback(() => setOpen(false), [])
  const panelRef = useModalA11y<HTMLDivElement>(open, closeMenu)

  useBodyScrollLock(open)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links: { id: string; label: string }[] = [
    { id: 'services', label: t.nav.services },
    { id: 'about', label: t.nav.about },
    { id: 'doctors', label: t.nav.doctors },
    { id: 'branches', label: t.nav.branches },
    { id: 'contact', label: t.nav.contact },
  ]

  return (
    <header
      className={cx(
        'sticky top-0 z-50 transition-all duration-500',
        scrolled ? 'border-b border-line/80' : 'border-b border-transparent',
      )}
    >
      <div
        aria-hidden="true"
        className={cx(
          'pointer-events-none absolute inset-0 -z-10 transition-all duration-500',
          scrolled
            ? 'bg-white/95 shadow-[0_18px_50px_-40px_rgba(5,37,38,0.6)] backdrop-blur-md'
            : 'bg-[#fbfaf6]',
        )}
      />

      <div
        className={cx(
          'mx-auto flex w-full max-w-[1360px] items-center justify-between gap-4 px-5 transition-all duration-500 sm:px-8 lg:px-10',
          scrolled ? 'h-[70px] lg:h-[78px]' : 'h-[80px] lg:h-[92px]',
        )}
      >
        <div className="flex items-center gap-5">
          <Logo href="#home" />
        </div>

        <nav
          aria-label={t.header.menuTitle}
          className="hidden items-center gap-7 lg:flex xl:gap-9"
        >
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              aria-current={active === link.id ? 'location' : undefined}
              className={cx(
                'group relative py-2 text-[12.5px] font-medium whitespace-nowrap transition-colors duration-300',
                active === link.id
                  ? 'text-teal'
                  : 'text-ink-soft hover:text-teal',
              )}
            >
              {link.label}
              <span
                aria-hidden="true"
                className={cx(
                  'absolute inset-x-0 -bottom-0.5 h-px origin-center bg-sand transition-transform duration-300',
                  active === link.id
                    ? 'scale-x-100'
                    : 'scale-x-0 group-hover:scale-x-100',
                )}
              />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2.5 sm:gap-3">
          <a
            href={clinic.phoneHref}
            className="hidden items-center gap-2 rounded-full border border-teal/15 px-3.5 py-2.5 text-[11.5px] font-semibold tracking-[0.04em] text-teal transition-colors duration-300 hover:border-teal/35 hover:bg-sand-soft/60 xl:inline-flex"
          >
            <Phone aria-hidden="true" className="h-3.5 w-3.5 text-sea" />
            <span dir="ltr">{clinic.phoneDisplay}</span>
          </a>

          <a
            href="#contact"
            aria-label={t.actions.book}
            className="grid h-10 w-10 place-items-center rounded-full bg-teal text-mist transition-colors duration-300 hover:bg-sea-dark lg:hidden"
          >
            <CalendarDays aria-hidden="true" className="h-4 w-4" />
          </a>

          <LanguageToggle />

          <ButtonLink
            href="#contact"
            className="max-lg:hidden whitespace-nowrap"
          >
            {t.actions.book}
            <ArrowUpRight
              aria-hidden="true"
              className="h-3.5 w-3.5 transition-transform duration-300 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5 rtl:-scale-x-100"
            />
          </ButtonLink>

          <button
            type="button"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={t.actions.menu}
            onClick={() => setOpen(true)}
            className="grid h-10 w-10 place-items-center rounded-full border border-teal/20 text-teal transition-colors duration-300 hover:border-teal/45 hover:bg-sand-soft/60 lg:hidden"
          >
            <Menu aria-hidden="true" className="h-[18px] w-[18px]" />
          </button>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-[70] lg:hidden">
          <div
            aria-hidden="true"
            onClick={closeMenu}
            className="drawer-backdrop absolute inset-0 bg-teal/50 backdrop-blur-sm"
          />
          <div
            id="mobile-menu"
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-label={t.header.menuTitle}
            tabIndex={-1}
            className="drawer-panel absolute inset-y-0 end-0 flex w-[90%] max-w-[400px] flex-col bg-mist shadow-2xl"
          >
            <div className="flex items-center justify-between border-b border-line px-6 py-5">
              <Logo href="#home" />
              <button
                type="button"
                onClick={closeMenu}
                aria-label={t.actions.close}
                className="grid h-10 w-10 place-items-center rounded-full border border-teal/20 text-teal transition-colors duration-300 hover:border-teal/45 hover:bg-white"
              >
                <X aria-hidden="true" className="h-[18px] w-[18px]" />
              </button>
            </div>

            <nav
              aria-label={t.header.menuTitle}
              className="drawer-scroll flex-1 overflow-y-auto px-6 py-3"
            >
              <ul>
                {links.map((link, index) => (
                  <li key={link.id} className="border-b border-line/80">
                    <a
                      href={`#${link.id}`}
                      onClick={closeMenu}
                      aria-current={active === link.id ? 'location' : undefined}
                      className="flex items-center justify-between gap-4 py-5"
                    >
                      <span
                        className={cx(
                          'font-display text-[25px] leading-tight tracking-[-0.01em]',
                          active === link.id ? 'text-sea' : 'text-teal',
                        )}
                      >
                        {link.label}
                      </span>
                      <span
                        aria-hidden="true"
                        className="text-[10px] font-semibold tracking-[0.18em] text-sand"
                      >
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>

              <div className="mt-6 rounded-2xl border border-line bg-white/70 p-4">
                <p className="micro-label text-ink-soft">{t.header.hotline}</p>
                <a
                  href={clinic.phoneHref}
                  dir="ltr"
                  className="mt-2 inline-flex items-center gap-2 font-display text-[26px] tracking-[0.02em] text-teal"
                >
                  <Phone aria-hidden="true" className="h-4 w-4 text-sea" />
                  {clinic.phoneDisplay}
                </a>
                <p className="mt-1 text-[11px] text-ink-soft">
                  {t.appointment.supporting}
                </p>
              </div>
            </nav>

            <div className="border-t border-line px-6 pt-5 pb-7">
              <div className="mb-4 flex items-center justify-between gap-3">
                <span className="eyebrow text-ink-soft">{t.actions.language}</span>
                <LanguageToggle />
              </div>

              <ButtonLink href="#contact" onClick={closeMenu} fullWidth size="lg">
                {t.actions.book}
                <ArrowUpRight
                  aria-hidden="true"
                  className="h-4 w-4 rtl:-scale-x-100"
                />
              </ButtonLink>

              <p className="mt-4 text-center text-[11px] text-ink-soft">
                {lang === 'ar' ? clinic.nameEn : clinic.nameAr}
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
