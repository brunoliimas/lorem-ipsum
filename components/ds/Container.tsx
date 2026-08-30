import React from 'react'

interface ContainerProps {
  children: React.ReactNode
  className?: string
  as?: 'div' | 'section' | 'header' | 'footer' | 'main'
}

export function Container({
  children,
  className = '',
  as: Component = 'div',
}: ContainerProps) {
  return (
    <Component className={`container mx-auto ${className}`}>
      {children}
    </Component>
  )
}
