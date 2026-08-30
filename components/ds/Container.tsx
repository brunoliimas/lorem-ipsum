import React from 'react'

interface ContainerProps {
  children: React.ReactNode
  className?: string
  as?: 'div' | 'section' | 'header' | 'footer' | 'main'
  /** When false, skips horizontal padding-global wrapper */
  padded?: boolean
}

export function Container({
  children,
  className = '',
  as: Component = 'div',
  padded = true,
}: ContainerProps) {
  const inner = (
    <Component className={`container-base ${className}`}>{children}</Component>
  )

  if (!padded) {
    return inner
  }

  return <div className="padding-global">{inner}</div>
}
