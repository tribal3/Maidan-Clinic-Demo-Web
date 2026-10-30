import { clinic } from '../../content/site'
import { useLanguage } from '../../language/useLanguage'
import { cx } from '../../lib/cx'

interface LogoProps {
  tone?: 'dark' | 'light'
  className?: string
  /** Wraps the lockup in an anchor when a href is supplied. */
  href?: string
}

/**
 * Official Maidan Clinic lockup, rendered as a mask so it can sit on light or
 * dark surfaces without changing the artwork.
 */
export function Logo({ tone = 'dark', className, href }: LogoProps) {
  const { lang } = useLanguage()
  const label =
    lang === 'ar'
      ? `${clinic.nameAr} — الصفحة الرئيسية`
      : `${clinic.nameEn} — home`

  const content = (
    <span
      role="img"
      aria-label={clinic.nameEn}
      className={cx(
        'logo-mark block h-11 w-[108px] shrink-0 sm:h-[52px] sm:w-[128px]',
        tone === 'dark' ? 'text-teal' : 'text-mist',
      )}
    />
  )

  if (!href) return <span className={cx('inline-flex', className)}>{content}</span>

  return (
    <a
      href={href}
      aria-label={label}
      className={cx(
        'inline-flex rounded-sm transition-opacity duration-300 hover:opacity-70',
        className,
      )}
    >
      {content}
    </a>
  )
}
