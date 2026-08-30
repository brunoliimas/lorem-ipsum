'use client'

import { useEffect, useState } from 'react'
import { delay } from '../../hooks/useTypingOnce'

interface PrimaryButtonContentProps {
  label: string
  hovered: boolean
}

export function PrimaryButtonContent({ label, hovered }: PrimaryButtonContentProps) {
  const [displayed, setDisplayed] = useState(label)

  useEffect(() => {
    if (!hovered) {
      setDisplayed(label)
      return
    }

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) {
      setDisplayed(label)
      return
    }

    let cancelled = false

    const run = async () => {
      setDisplayed('')
      for (let i = 1; i <= label.length; i++) {
        if (cancelled) return
        setDisplayed(label.slice(0, i))
        await delay(45)
      }
    }

    run()

    return () => {
      cancelled = true
    }
  }, [hovered, label])

  return (
    <>
      <span className="relative z-10 inline-block text-left">
        <span className="invisible block whitespace-nowrap uppercase" aria-hidden="true">
          {label}
        </span>
        <span className="absolute inset-y-0 left-0 flex items-center whitespace-nowrap uppercase">
          {displayed}
        </span>
      </span>
      <span
        className="relative z-10 size-2 shrink-0 bg-grey-1 transition-transform duration-300 ease-out group-hover:rotate-90"
        aria-hidden="true"
      />
    </>
  )
}
