import { RefObject, useEffect, useState } from 'react'

export function useInViewOnce<T extends Element>(
  ref: RefObject<T | null>,
  {
    threshold = 0.15,
    rootMargin = '0px',
    observeSection = true,
  }: {
    threshold?: number
    rootMargin?: string
    observeSection?: boolean
  } = {},
) {
  const [inView, setInView] = useState(false)

  useEffect(() => {
    if (inView) return

    const el = ref.current
    if (!el) return

    const target = (observeSection ? el.closest('section') : null) ?? el

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold, rootMargin },
    )

    observer.observe(target)
    return () => observer.disconnect()
  }, [ref, inView, threshold, rootMargin, observeSection])

  return inView
}
