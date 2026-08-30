import React, { useRef } from 'react'
import { HeroDotsTrail } from './HeroDotsTrail'
import { HeroSnakeGame } from './HeroSnakeGame'

interface HeroDotsAreaProps {
  children: React.ReactNode
  className?: string
  as?: 'section' | 'div'
  id?: string
  interaction?: 'trail' | 'snake'
}

const baseClassName = 'hero-dots relative'

export function HeroDotsArea({
  children,
  className = '',
  as: Component = 'div',
  id,
  interaction = 'trail',
}: HeroDotsAreaProps) {
  const areaRef = useRef<HTMLDivElement>(null)
  const mergedClassName = `${baseClassName} ${className}`

  const content = (
    <>
      {interaction === 'snake' ? (
        <HeroSnakeGame trackRef={areaRef} />
      ) : (
        <HeroDotsTrail trackRef={areaRef} />
      )}
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
