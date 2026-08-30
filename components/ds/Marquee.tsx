import React from 'react'

interface MarqueeProps {
  items: string[]
  className?: string
}

export function Marquee({ items, className = '' }: MarqueeProps) {
  const content = items.map((item) => (
    <span
      key={item}
      className="mx-6 shrink-0 font-mono text-body-s uppercase tracking-wider text-grey-7"
    >
      // {item}
    </span>
  ))

  return (
    <div
      className={`overflow-hidden border-y border-border bg-surface py-4 ${className}`}
      aria-hidden="true"
    >
      <div className="flex w-max animate-marquee">
        {content}
        {content}
      </div>
    </div>
  )
}
