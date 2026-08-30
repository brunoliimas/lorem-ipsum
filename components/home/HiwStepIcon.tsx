import React from 'react'

export type HiwIconVariant = 'input' | 'process' | 'results' | 'refine'

interface HiwStepIconProps {
  variant: HiwIconVariant
  active?: boolean
  className?: string
}

function IconSvg({
  variant,
  filled,
}: {
  variant: HiwIconVariant
  filled?: boolean
}) {
  const stroke = filled ? '#0055FF' : '#ADADAD'
  const fill = filled ? '#0055FF' : 'none'
  const fillSoft = filled ? 'rgba(0,85,255,0.25)' : 'none'

  if (variant === 'input') {
    return (
      <svg viewBox="0 0 80 80" fill="none" className="h-full w-full" aria-hidden="true">
        <path d="M20 52V28l20-10 20 10v24" stroke={stroke} strokeWidth="1.5" />
        <path d="M40 18v24M28 46h24" stroke={stroke} strokeWidth="1.5" />
        <rect x="30" y="34" width="20" height="8" stroke={stroke} strokeWidth="1.5" fill={fillSoft} />
        {filled && (
          <>
            <rect x="34" y="38" width="4" height="4" fill={fill} />
            <rect x="42" y="38" width="4" height="4" fill={fill} />
          </>
        )}
      </svg>
    )
  }

  if (variant === 'process') {
    return (
      <svg viewBox="0 0 80 80" fill="none" className="h-full w-full" aria-hidden="true">
        <rect x="24" y="24" width="32" height="32" stroke={stroke} strokeWidth="1.5" fill={fillSoft} />
        <path d="M40 24v-6M40 56v6M24 40h-6M56 40h6" stroke={stroke} strokeWidth="1.5" />
        <rect x="34" y="34" width="12" height="12" stroke={stroke} strokeWidth="1.5" fill={filled ? fill : 'none'} />
      </svg>
    )
  }

  if (variant === 'results') {
    return (
      <svg viewBox="0 0 80 80" fill="none" className="h-full w-full" aria-hidden="true">
        <path d="M28 52 40 28l12 24" stroke={stroke} strokeWidth="1.5" fill={fillSoft} />
        <ellipse cx="40" cy="54" rx="16" ry="6" stroke={stroke} strokeWidth="1.5" />
        {filled && (
          <>
            <rect x="36" y="40" width="4" height="4" fill={fill} />
            <rect x="44" y="44" width="4" height="4" fill={fill} />
            <rect x="38" y="48" width="4" height="4" fill={fill} />
          </>
        )}
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 80 80" fill="none" className="h-full w-full" aria-hidden="true">
      <path
        d="M28 28 52 52M52 28 28 52"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <rect x="22" y="22" width="14" height="14" stroke={stroke} strokeWidth="1.5" fill={fillSoft} />
      <rect x="44" y="44" width="14" height="14" stroke={stroke} strokeWidth="1.5" fill={fillSoft} />
      {filled && (
        <>
          <rect x="26" y="26" width="4" height="4" fill={fill} />
          <rect x="48" y="48" width="4" height="4" fill={fill} />
        </>
      )}
    </svg>
  )
}

export function HiwStepIcon({ variant, active = false, className = '' }: HiwStepIconProps) {
  return (
    <div className={`relative size-20 ${className}`}>
      <div
        className={`absolute inset-0 transition-opacity duration-300 ${active ? 'opacity-0' : 'opacity-100'}`}
        aria-hidden="true"
      >
        <IconSvg variant={variant} />
      </div>
      <div
        className={`absolute inset-0 transition-opacity duration-300 ${active ? 'opacity-100' : 'opacity-0'}`}
        aria-hidden="true"
      >
        <IconSvg variant={variant} filled />
      </div>
    </div>
  )
}
