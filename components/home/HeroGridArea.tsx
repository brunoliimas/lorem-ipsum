import React, { useRef } from 'react'
import { HeroGridTrail } from './HeroGridTrail'

interface HeroGridAreaProps {
  children: React.ReactNode
  className?: string
  as?: 'section' | 'div'
  id?: string
}

const baseClassName = 'hero-grid relative bg-grey-9 text-grey-1'

export function HeroGridArea({
  children,
  className = '',
  as: Component = 'div',
  id,
}: HeroGridAreaProps) {
  const areaRef = useRef<HTMLDivElement>(null)
  const mergedClassName = `${baseClassName} ${className}`

  const content = (
    <>
      <HeroGridTrail trackRef={areaRef} />
      <div className="relative z-10">{children}</div>
    </>
  )

  if (Component === 'section') {
    return (
      <section ref={areaRef} id={id} className={mergedClassName}>
        {content}
      </section>
    )
  }

  return (
    <div ref={areaRef} id={id} className={mergedClassName}>
      {content}
    </div>
  )
}
