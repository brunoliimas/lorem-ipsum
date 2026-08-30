'use client'

import { useRouter } from 'next/router'
import { useCallback, useEffect, useRef, useState } from 'react'

const CELL_SIZE = 40
const COVER_MS = 780
const REVEAL_MS = 680
const CELL_FADE_MS = 160

type Phase = 'idle' | 'cover' | 'reveal'

interface TransitionCell {
  id: number
  x: number
  y: number
  delay: number
  peak: number
}

function shuffle<T>(items: T[]): T[] {
  const copy = [...items]

  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[copy[i], copy[j]] = [copy[j], copy[i]]
  }

  return copy
}

function buildCells(cols: number, rows: number): TransitionCell[] {
  const total = cols * rows
  const order = shuffle(Array.from({ length: total }, (_, id) => id))

  return order.map((id, index) => ({
    id,
    x: id % cols,
    y: Math.floor(id / cols),
    delay: (index / total) * COVER_MS * 0.92 + Math.random() * 24,
    peak: Math.random() > 0.28 ? 1 : 0.45 + Math.random() * 0.35,
  }))
}

function getInternalPath(href: string, origin: string): string | null {
  try {
    const url = new URL(href, origin)

    if (url.origin !== origin) return null

    return url.pathname + url.search
  } catch {
    return null
  }
}

function shouldAnimateLink(anchor: HTMLAnchorElement, currentPath: string): string | null {
  const href = anchor.getAttribute('href')

  if (!href || href.startsWith('#')) return null
  if (anchor.target === '_blank') return null
  if (anchor.hasAttribute('download')) return null
  if (anchor.dataset.noTransition !== undefined) return null

  const path = getInternalPath(href, window.location.origin)

  if (!path || path === currentPath) return null

  return path
}

export function PageTransition() {
  const router = useRouter()
  const [phase, setPhase] = useState<Phase>('idle')
  const [cells, setCells] = useState<TransitionCell[]>([])
  const [coverActive, setCoverActive] = useState(false)
  const phaseRef = useRef<Phase>('idle')
  const navigatingRef = useRef(false)
  const timersRef = useRef<number[]>([])
  const disabledRef = useRef(false)

  const clearTimers = useCallback(() => {
    timersRef.current.forEach((timer) => window.clearTimeout(timer))
    timersRef.current = []
  }, [])

  const schedule = useCallback((fn: () => void, ms: number) => {
    const timer = window.setTimeout(fn, ms)
    timersRef.current.push(timer)
  }, [])

  const setPhaseSafe = useCallback((next: Phase) => {
    phaseRef.current = next
    setPhase(next)
  }, [])

  const startCover = useCallback(() => {
    const cols = Math.ceil(window.innerWidth / CELL_SIZE)
    const rows = Math.ceil(window.innerHeight / CELL_SIZE)

    setCells(buildCells(cols, rows))
    setCoverActive(false)
    setPhaseSafe('cover')
  }, [setPhaseSafe])

  useEffect(() => {
    if (phase !== 'cover' || cells.length === 0) return

    const frame = requestAnimationFrame(() => {
      requestAnimationFrame(() => setCoverActive(true))
    })

    return () => cancelAnimationFrame(frame)
  }, [phase, cells])

  const startReveal = useCallback(() => {
    setCoverActive(false)
    setPhaseSafe('reveal')
    schedule(() => {
      setPhaseSafe('idle')
      setCells([])
      navigatingRef.current = false
    }, REVEAL_MS + 40)
  }, [schedule, setPhaseSafe])

  const navigateWithTransition = useCallback(
    (href: string) => {
      if (disabledRef.current || phaseRef.current !== 'idle' || navigatingRef.current) return

      navigatingRef.current = true
      startCover()

      schedule(() => {
        router.push(href)
      }, COVER_MS)
    },
    [router, schedule, startCover],
  )

  useEffect(() => {
    disabledRef.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  }, [])

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (disabledRef.current || event.defaultPrevented || event.button !== 0) return
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return

      const anchor = (event.target as Element | null)?.closest('a')

      if (!anchor) return

      const path = shouldAnimateLink(anchor, router.asPath.split('#')[0])

      if (!path) return

      event.preventDefault()
      navigateWithTransition(path)
    }

    document.addEventListener('click', onClick, true)
    return () => document.removeEventListener('click', onClick, true)
  }, [navigateWithTransition, router.asPath])

  useEffect(() => {
    const onStart = (url: string) => {
      if (disabledRef.current) return

      const nextPath = url.split('#')[0]
      const currentPath = router.asPath.split('#')[0]

      if (nextPath === currentPath) return
      if (navigatingRef.current || phaseRef.current !== 'idle') return

      navigatingRef.current = true
      startCover()
    }

    const onComplete = () => {
      if (disabledRef.current) {
        navigatingRef.current = false
        return
      }

      if (phaseRef.current === 'idle') return

      startReveal()
    }

    const onError = () => {
      navigatingRef.current = false
      clearTimers()
      setPhaseSafe('idle')
      setCells([])
    }

    router.events.on('routeChangeStart', onStart)
    router.events.on('routeChangeComplete', onComplete)
    router.events.on('routeChangeError', onError)

    return () => {
      router.events.off('routeChangeStart', onStart)
      router.events.off('routeChangeComplete', onComplete)
      router.events.off('routeChangeError', onError)
      clearTimers()
    }
  }, [clearTimers, router, startCover, startReveal, setPhaseSafe])

  if (phase === 'idle' || cells.length === 0) return null

  const isCover = phase === 'cover'

  return (
    <div className="pointer-events-none fixed inset-0 z-[2000] overflow-hidden" aria-hidden="true">
      {cells.map((cell) => (
        <div
          key={cell.id}
          className="absolute bg-accent will-change-[opacity]"
          style={{
            left: cell.x * CELL_SIZE,
            top: cell.y * CELL_SIZE,
            width: CELL_SIZE,
            height: CELL_SIZE,
            opacity: isCover && coverActive ? cell.peak : 0,
            transitionProperty: 'opacity',
            transitionDuration: `${CELL_FADE_MS}ms`,
            transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
            transitionDelay: isCover ? `${cell.delay}ms` : `${(1 - cell.delay / COVER_MS) * REVEAL_MS * 0.85}ms`,
          }}
        />
      ))}
    </div>
  )
}
