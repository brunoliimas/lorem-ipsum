import React from 'react'

interface MarqueeProps {
  items: string[]
  className?: string
  speed?: number
}

function MarqueeGroup({
  items,
  id,
  hidden,
}: {
  items: string[]
  id: string
  hidden?: boolean
}) {
  return (
    <div className="marquee__group" aria-hidden={hidden}>
      {items.map((item, index) => (
        <span key={`${id}-${index}`} className="marquee__item">
          {item}
        </span>
      ))}
    </div>
  )
}

export function Marquee({ items, className = '', speed = 28 }: MarqueeProps) {
  const loopItems = [...items, ...items]

  return (
    <div
      className={`marquee ${className}`}
      style={{ '--marquee-duration': `${speed}s` } as React.CSSProperties}
      aria-hidden="true"
    >
      <div className="marquee__track">
        <MarqueeGroup items={loopItems} id="a" />
        <MarqueeGroup items={loopItems} id="b" hidden />
      </div>
    </div>
  )
}
