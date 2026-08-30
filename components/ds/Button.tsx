'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import { PrimaryButtonContent } from './PrimaryButtonContent'

type ButtonVariant = 'primary' | 'nav' | 'line' | 'ghost'
type ButtonSize = 'sm' | 'md'
type LineDirection = 'forward' | 'back'

interface ButtonBaseProps {
  children: React.ReactNode
  variant?: ButtonVariant
  size?: ButtonSize
  className?: string
  /** Seta do botão line: forward (→ à direita) ou back (← à esquerda) */
  direction?: LineDirection
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

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'min-h-10 text-body-s',
  md: 'min-h-12 text-body-m',
}

function ArrowIcon({ direction = 'forward' }: { direction?: LineDirection }) {
  if (direction === 'back') {
    return (
      <svg viewBox="0 0 16 16" fill="none" className="size-full" aria-hidden="true">
        <path
          d="M13 8H3M7 4 3 8l4 4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="square"
        />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 16 16" fill="none" className="size-full" aria-hidden="true">
      <path
        d="M3 8h10M9 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="square"
      />
    </svg>
  )
}

function ButtonInner({
  children,
  variant,
  hovered,
  direction = 'forward',
}: {
  children: React.ReactNode
  variant: ButtonVariant
  hovered: boolean
  direction?: LineDirection
}) {
  if (variant === 'nav') {
    return (
      <>
        <span className="relative z-10 uppercase">{children}</span>
        <span className="relative z-10 size-5 shrink-0" aria-hidden="true">
          <ArrowIcon direction="forward" />
        </span>
      </>
    )
  }

  if (variant === 'line') {
    const isBack = direction === 'back'

    return (
      <span className="relative z-10 inline-flex items-center gap-2 border-b border-grey-9 pb-2">
        {isBack && (
          <span className="size-5 shrink-0" aria-hidden="true">
            <ArrowIcon direction="back" />
          </span>
        )}
        <span className="uppercase">{children}</span>
        {!isBack && (
          <span className="size-5 shrink-0" aria-hidden="true">
            <ArrowIcon direction="forward" />
          </span>
        )}
        <span
          className="absolute inset-x-0 bottom-0 z-0 h-1 w-0 bg-accent transition-all duration-300 group-hover:w-full"
          aria-hidden="true"
        />
      </span>
    )
  }

  if (variant === 'ghost') {
    return <span>{children}</span>
  }

  const label = typeof children === 'string' ? children : null

  if (label) {
    return <PrimaryButtonContent label={label} hovered={hovered} />
  }

  return (
    <>
      <span className="relative z-10 whitespace-nowrap uppercase">{children}</span>
      <span
        className="relative z-10 size-2 shrink-0 bg-grey-1 transition-transform duration-300 ease-out group-hover:rotate-90"
        aria-hidden="true"
      />
    </>
  )
}

function getVariantClasses(variant: ButtonVariant, size: ButtonSize): string {
  const base =
    'group relative inline-flex items-center gap-3 overflow-hidden font-mono font-semibold uppercase transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2'

  if (variant === 'primary') {
    return `${base} ${sizeStyles[size]} bg-grey-9 px-4 py-2 text-grey-1`
  }

  if (variant === 'nav') {
    return `${base} ${sizeStyles.sm} border border-grey-8 bg-grey-1 px-4 py-2 text-grey-9 hover:bg-grey-4`
  }

  if (variant === 'line') {
    return `${base} ${sizeStyles[size]} gap-2 px-0 py-0 font-medium text-grey-9`
  }

  return `${base} ${sizeStyles.sm} px-0 py-1 font-medium normal-case text-grey-8 hover:text-accent`
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  direction = 'forward',
  ...props
}: ButtonProps) {
  const [hovered, setHovered] = useState(false)
  const classes = `${getVariantClasses(variant, size)} ${className}`

  const hoverHandlers =
    variant === 'primary'
      ? {
          onMouseEnter: () => setHovered(true),
          onMouseLeave: () => setHovered(false),
        }
      : {}

  const hoverBg =
    variant === 'primary' ? (
      <span
        className="absolute inset-0 z-0 -translate-x-full bg-accent transition-transform duration-300 group-hover:translate-x-0"
        aria-hidden="true"
      />
    ) : null

  const content = (
    <>
      {hoverBg}
      <ButtonInner variant={variant} hovered={hovered} direction={direction}>
        {children}
      </ButtonInner>
    </>
  )

  if ('href' in props && props.href) {
    if (props.external) {
      return (
        <a
          href={props.href}
          className={classes}
          target="_blank"
          rel="noopener noreferrer"
          download={props.download}
          {...hoverHandlers}
        >
          {content}
        </a>
      )
    }

    if (props.download) {
      return (
        <a href={props.href} className={classes} download={props.download} {...hoverHandlers}>
          {content}
        </a>
      )
    }

    return (
      <Link href={props.href} className={classes} {...hoverHandlers}>
        {content}
      </Link>
    )
  }

  const buttonProps = props as ButtonAsButton

  return (
    <button
      type={buttonProps.type ?? 'button'}
      className={classes}
      onClick={buttonProps.onClick}
      {...hoverHandlers}
    >
      {content}
    </button>
  )
}
