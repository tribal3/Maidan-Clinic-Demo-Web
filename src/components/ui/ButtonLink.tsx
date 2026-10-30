import type { AnchorHTMLAttributes, ReactNode } from 'react'
import { cx } from '../../lib/cx'

export type ButtonVariant =
  | 'primary'
  | 'outline'
  | 'soft'
  | 'onDark'
  | 'ghostOnDark'

interface ButtonLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode
  variant?: ButtonVariant
  size?: 'md' | 'lg'
  fullWidth?: boolean
}

const variants: Record<ButtonVariant, string> = {
  primary:
    'bg-teal text-mist hover:bg-sea-dark shadow-[0_18px_40px_-24px_rgba(5,37,38,0.85)]',
  outline:
    'border border-teal/25 text-teal hover:border-teal/55 hover:bg-white/70',
  soft: 'bg-sand-soft text-teal hover:bg-[#e9ddc7]',
  onDark: 'bg-mist text-teal hover:bg-white shadow-[0_18px_40px_-24px_rgba(0,0,0,0.5)]',
  ghostOnDark:
    'border border-white/30 text-mist hover:border-white/60 hover:bg-white/10',
}

export function ButtonLink({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className,
  ...props
}: ButtonLinkProps) {
  return (
    <a
      className={cx(
        'group/btn inline-flex items-center justify-center gap-2.5 rounded-full text-[12.5px] font-semibold tracking-[0.06em] uppercase transition-all duration-300',
        size === 'lg' ? 'px-7 py-4 text-[12px]' : 'px-6 py-3.5',
        variants[variant],
        fullWidth && 'w-full',
        className,
      )}
      {...props}
    >
      {children}
    </a>
  )
}
