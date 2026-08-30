import { useEffect, useState } from 'react'

export const HERO_PARALLAX_ID = 'hero-parallax'

/** Progress 0→1 where header begins to reveal */
export const HERO_HEADER_SHOW_START = 0.52

/** Progress where header is fully visible */
export const HERO_HEADER_SHOW_END = 0.82

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value))
}

function isParallaxActive() {
  return window.matchMedia(
    '(min-width: 1024px) and (prefers-reduced-motion: no-preference)',
  ).matches
}

export function useHeroParallaxProgress() {
  const [progress, setProgress] = useState(0)
  const [pastHero, setPastHero] = useState(false)
  const [usesParallax, setUsesParallax] = useState(false)

  useEffect(() => {
    const update = () => {
      const parallax = isParallaxActive()
      setUsesParallax(parallax)

      if (!parallax) {
        const scrollY = window.scrollY
        setProgress(scrollY > 120 ? 1 : scrollY / 120)
        setPastHero(scrollY > 480)
        return
      }

      const hero = document.getElementById(HERO_PARALLAX_ID)
      if (!hero) {
        setProgress(0)
        setPastHero(false)
        return
      }

      const viewportHeight = window.innerHeight
      const scrollableDistance = hero.offsetHeight - viewportHeight
      const rect = hero.getBoundingClientRect()

      if (rect.bottom <= 0) {
        setProgress(1)
        setPastHero(true)
        return
      }

      setPastHero(false)

      if (rect.top > 0 || scrollableDistance <= 0) {
        setProgress(0)
        return
      }

      const scrolled = -rect.top
      setProgress(clamp(scrolled / scrollableDistance, 0, 1))
    }

    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)

    const media = window.matchMedia(
      '(min-width: 1024px) and (prefers-reduced-motion: no-preference)',
    )
    media.addEventListener('change', update)

    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
      media.removeEventListener('change', update)
    }
  }, [])

  const reveal = pastHero
    ? 1
    : clamp(
        (progress - HERO_HEADER_SHOW_START) /
          (HERO_HEADER_SHOW_END - HERO_HEADER_SHOW_START),
        0,
        1,
      )

  return { progress, pastHero, usesParallax, reveal }
}
