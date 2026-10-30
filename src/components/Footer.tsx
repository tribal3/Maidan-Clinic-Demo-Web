import { ArrowUpRight } from 'lucide-react'
import type { ReactNode } from 'react'
import { branches, branchMapUrl, clinic } from '../content/site'
import { useLanguage } from '../language/useLanguage'
import { Container } from './ui/Container'
import { LanguageToggle } from './ui/LanguageToggle'
import { Logo } from './ui/Logo'

function SocialGlyph({ name }: { name: 'facebook' | 'instagram' | 'x' | 'youtube' }) {
  const paths: Record<typeof name, ReactNode> = {
    facebook: (
      <path d="M13.4 21v-7.2h2.4l.4-2.8h-2.8V9.2c0-.8.2-1.4 1.4-1.4h1.5V5.3c-.3 0-1.2-.1-2.2-.1-2.2 0-3.7 1.3-3.7 3.8V11H8v2.8h2.4V21h3Z" />
    ),
    instagram: (
      <>
        <rect x="4.5" y="4.5" width="15" height="15" rx="4.3" fill="none" stroke="currentColor" strokeWidth="1.7" />
        <circle cx="12" cy="12" r="3.4" fill="none" stroke="currentColor" strokeWidth="1.7" />
        <circle cx="17" cy="7" r="1.1" />
      </>
    ),
    x: (
      <path d="M4 4h4.6l3.9 5.3L17.2 4h3l-6.1 7 6.5 9h-4.6l-4.2-5.8L6.4 20h-3l6.6-7.5L4 4Z" />
    ),
    youtube: (
      <>
        <rect x="3" y="6" width="18" height="12" rx="3.4" />
        <path d="M10.5 9.4v5.2l4.5-2.6-4.5-2.6Z" fill="#052325" />
      </>
    ),
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-3.5 w-3.5" fill="currentColor">
      {paths[name]}
    </svg>
  )
}

const socials = [
  { label: 'Facebook', href: clinic.socials.facebook, name: 'facebook' as const },
  { label: 'Instagram', href: clinic.socials.instagram, name: 'instagram' as const },
  { label: 'X / Twitter', href: clinic.socials.x, name: 'x' as const },
  { label: 'YouTube', href: clinic.socials.youtube, name: 'youtube' as const },
]

export function Footer() {
  const { t, lang } = useLanguage()

  const navLinks = [
    { href: '#services', label: t.nav.services },
    { href: '#about', label: t.nav.about },
    { href: '#doctors', label: t.nav.doctors },
    { href: '#branches', label: t.nav.branches },
    { href: '#contact', label: t.nav.contact },
  ]

  return (
    <footer className="relative overflow-hidden bg-[#052325] text-mist/65">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(to_right,transparent,rgba(226,211,183,0.35),transparent)]"
      />

      <Container className="pt-14 pb-8 lg:pt-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_0.65fr_0.95fr_1.05fr] lg:gap-10">
          <div>
            <Logo tone="light" href="#home" />
            <p className="mt-5 max-w-[34ch] text-[12px] leading-[1.85] text-mist/55">
              {t.footer.blurb}
            </p>
            <p className="mt-4 text-[10.5px] tracking-[0.12em] text-sand/90 uppercase">
              {lang === 'ar' ? clinic.taglineAr : clinic.taglineEn} ·{' '}
              {clinic.since}
            </p>

            <div className="mt-6 flex items-center gap-2">
              {socials.map(({ label, href, name }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${clinic.nameEn} on ${label}`}
                  className="grid h-9 w-9 place-items-center rounded-full border border-white/15 text-mist/60 transition-colors duration-300 hover:border-sand/50 hover:bg-white/5 hover:text-mist"
                >
                  <SocialGlyph name={name} />
                </a>
              ))}
            </div>

            <div className="mt-7">
              <p className="micro-label text-mist/55">
                {t.footer.languageTitle}
              </p>
              <LanguageToggle tone="dark" className="mt-2.5" />
            </div>
          </div>

          <nav aria-label={t.footer.exploreTitle}>
            <h2 className="micro-label text-sand">{t.footer.exploreTitle}</h2>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[12px] text-mist/55 transition-colors duration-300 hover:text-mist"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label={t.footer.branchesTitle}>
            <h2 className="micro-label text-sand">{t.footer.branchesTitle}</h2>
            <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2.5 lg:grid-cols-1">
              {branches.map((branch) => (
                <li key={branch.id}>
                  <a
                    href={branchMapUrl(branch)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[12px] text-mist/55 transition-colors duration-300 hover:text-mist"
                  >
                    {lang === 'ar' ? branch.nameAr : branch.nameEn}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="micro-label text-sand">
              {t.footer.contactTitle}
            </h2>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={clinic.phoneHref}
                  dir="ltr"
                  className="inline-flex items-center gap-2 font-display text-[19px] tracking-[0.03em] text-mist transition-colors hover:text-[#e4d3b3]"
                >
                  {clinic.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${clinic.email}`}
                  className="text-[12px] text-mist/55 transition-colors hover:text-mist"
                >
                  {clinic.email}
                </a>
              </li>
              <li>
                <a
                  href={clinic.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[12px] text-mist/55 transition-colors hover:text-mist"
                >
                  maidangroup.com
                  <ArrowUpRight
                    aria-hidden="true"
                    className="h-3 w-3 rtl:-scale-x-100"
                  />
                </a>
              </li>
            </ul>

            <p className="mt-5 max-w-[30ch] text-[10.5px] leading-relaxed text-mist/55">
              {t.appointment.supporting}
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-5 border-t border-white/10 pt-6 lg:flex-row lg:items-center lg:justify-between">
          <p className="text-[10.5px] text-mist/55">{t.footer.copyright}</p>

          <p className="inline-flex w-fit items-start gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-2 text-[10px] leading-relaxed text-mist/70">
            <span
              aria-hidden="true"
              className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-sand"
            />
            {t.footer.disclaimer}
          </p>

          <p className="text-[10px] text-mist/55" lang={lang}>
            {t.footer.credit}
          </p>
        </div>
      </Container>
    </footer>
  )
}
