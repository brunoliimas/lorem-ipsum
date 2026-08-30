import Link from 'next/link'
import React from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'ghost'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonBaseProps {
  children: React.ReactNode
  variant?: ButtonVariant
  size?: ButtonSize
  className?: string
}

interface ButtonAsLink extends ButtonBaseProps {
  href: string
  external?: boolean
  download?: string
}

interface ButtonAsButton extends ButtonBaseProps {
  href?: never
  type?: 'button' | 'submit'
  onClick?: () => void
}

type ButtonProps = ButtonAsLink | ButtonAsButton

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-accent text-white hover:bg-accent-hover border border-transparent',
  secondary:
    'bg-transparent text-grey-1 border border-grey-8 hover:border-accent hover:text-accent',
  ghost: 'bg-transparent text-grey-6 hover:text-grey-1 border border-transparent',
}

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-body-s',
  md: 'px-6 py-3 text-body-m',
  lg: 'px-8 py-4 text-body-l',
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center rounded-full font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background ${variantStyles[variant]} ${sizeStyles[size]} ${className}`

  if ('href' in props && props.href) {
    if (props.external) {
      return (
        <a
          href={props.href}
          className={classes}
          target="_blank"
          rel="noopener noreferrer"
          download={props.download}
        >
          {children}
        </a>
      )
    }

    if (props.download) {
      return (
        <a href={props.href} className={classes} download={props.download}>
          {children}
        </a>
      )
    }

    return (
      <Link href={props.href} className={classes}>
        {children}
      </Link>
    )
  }

  const buttonProps = props as ButtonAsButton

  return (
    <button
      type={buttonProps.type ?? 'button'}
      className={classes}
      onClick={buttonProps.onClick}
    >
      {children}
    </button>
  )
}
