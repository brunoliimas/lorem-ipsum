'use client'

import { useEffect, useRef, useState } from 'react'

function getScrollProgress() {
  const max = document.documentElement.scrollHeight - window.innerHeight

  if (max <= 0) return 0

  return Math.min(1, Math.max(0, window.scrollY / max))
}

export function ScrollProgressBar() {
  const [progress, setProgress] = useState(0)
  const frameRef = useRef(0)

  useEffect(() => {
    const update = () => setProgress(getScrollProgress())

    const onScroll = () => {
      if (frameRef.current) return

      frameRef.current = requestAnimationFrame(() => {
        update()
        frameRef.current = 0
      })
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', update)

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', update)

      if (frameRef.current) cancelAnimationFrame(frameRef.current)
    }
  }, [])

  return (
    <div
      className="pointer-events-none fixed inset-x-0 bottom-0 z-[999] h-[3px] bg-grey-4"
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(progress * 100)}
      aria-label="Progresso de leitura da página"
    >
      <div
        className="h-full w-full origin-left bg-accent will-change-transform"
        style={{ transform: `scaleX(${progress})` }}
      />
    </div>
  )
}
