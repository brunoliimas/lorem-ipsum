import { RefObject, useEffect, useState } from 'react'

interface Options {
  /** Sticky offset from top of viewport, 0–1 (default 0.1 = 10vh) */
  stickyRatio?: number
}

export function useSectionScrollProgress(
  ref: RefObject<HTMLElement | null>,
  { stickyRatio = 0.1 }: Options = {},
) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const update = () => {
      const rect = el.getBoundingClientRect()
      const viewportHeight = window.innerHeight
      const stickyTop = viewportHeight * stickyRatio
      const scrollableDistance = el.offsetHeight - viewportHeight + stickyTop

      if (scrollableDistance <= 0) {
        setProgress(rect.top <= stickyTop ? 1 : 0)
        return
      }

      const scrolled = stickyTop - rect.top
      const next = Math.min(1, Math.max(0, scrolled / scrollableDistance))
      setProgress(next)
    }

    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)

    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [ref, stickyRatio])

  return progress
}
