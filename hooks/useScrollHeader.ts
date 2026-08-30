import { useEffect, useRef, useState } from 'react'

const TOP_THRESHOLD = 8
const SCROLL_DELTA = 6
const TOP_HOVER_HEIGHT = 16

export function useScrollHeader() {
  const [scrollY, setScrollY] = useState(0)
  const [visible, setVisible] = useState(true)
  const [hoverTop, setHoverTop] = useState(false)
  const lastScrollY = useRef(0)

  useEffect(() => {
    lastScrollY.current = window.scrollY
    setScrollY(window.scrollY)

    const onScroll = () => {
      const current = window.scrollY
      const delta = current - lastScrollY.current

      if (current <= TOP_THRESHOLD) {
        setVisible(true)
      } else if (delta > SCROLL_DELTA) {
        setVisible(false)
      } else if (delta < -SCROLL_DELTA) {
        setVisible(true)
      }

      lastScrollY.current = current
      setScrollY(current)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const isVisible = visible || hoverTop
  const onDarkHero = scrollY <= TOP_THRESHOLD

  return {
    scrollY,
    isVisible,
    onDarkHero,
    hoverTop,
    setHoverTop,
    topHoverHeight: TOP_HOVER_HEIGHT,
  }
}
