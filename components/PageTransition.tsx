'use client'

import { usePathname, useRouter } from 'next/navigation'
import { useCallback, useEffect, useRef, useState } from 'react'
import {
  MOSAIC_CELL_FADE_MS,
  MOSAIC_CELL_SIZE,
  MOSAIC_COVER_MS,
  MOSAIC_REVEAL_MS,
  MosaicCell,
  buildMosaicCells,
  getMosaicCellStyle,
  getMosaicGridDimensions,
} from '../lib/mosaicTransition'

type Phase = 'idle' | 'cover' | 'reveal'

function normalizePath(path: string) {
  const withoutHash = path.split('#')[0].split('?')[0]
  if (withoutHash === '/') return '/'
  return withoutHash.replace(/\/$/, '') || '/'
}

function getInternalPath(href: string, origin: string): string | null {
  try {
    const url = new URL(href, origin)
    if (url.origin !== origin) return null
    return normalizePath(url.pathname)
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
  const pathname = usePathname()
  const [phase, setPhase] = useState<Phase>('idle')
  const [cells, setCells] = useState<MosaicCell[]>([])
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
    return timer
  }, [])

  const setPhaseSafe = useCallback((next: Phase) => {
    phaseRef.current = next
    setPhase(next)
  }, [])

  const resetTransition = useCallback(() => {
    navigatingRef.current = false
    setCoverActive(false)
    setPhaseSafe('idle')
    setCells([])
  }, [setPhaseSafe])

  const startCover = useCallback(() => {
    const { cols, rows } = getMosaicGridDimensions()
    setCells(buildMosaicCells(cols, rows))
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
    if (phaseRef.current === 'idle' || phaseRef.current === 'reveal') return

    setCoverActive(false)
    setPhaseSafe('reveal')

    schedule(() => {
      resetTransition()
    }, MOSAIC_REVEAL_MS + 40)
  }, [resetTransition, schedule, setPhaseSafe])

  const completeNavigation = useCallback(() => {
    if (phaseRef.current === 'cover') {
      startReveal()
    }
  }, [startReveal])

  const navigateWithTransition = useCallback(
    (href: string) => {
      if (disabledRef.current || phaseRef.current !== 'idle' || navigatingRef.current) return

      navigatingRef.current = true
      startCover()

      schedule(() => {
        router.push(href)

        schedule(() => {
          if (navigatingRef.current && phaseRef.current === 'cover') {
            completeNavigation()
          }
        }, 1200)
      }, MOSAIC_COVER_MS)
    },
    [completeNavigation, router, schedule, startCover],
  )

  useEffect(() => {
    disabledRef.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  }, [])

  useEffect(() => {
    return () => clearTimers()
  }, [clearTimers])

  useEffect(() => {
    if (!navigatingRef.current || phaseRef.current !== 'cover') return
    completeNavigation()
  }, [pathname, completeNavigation])

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (disabledRef.current || event.defaultPrevented || event.button !== 0) return
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return

      const anchor = (event.target as Element | null)?.closest('a')
      if (!anchor) return

      const currentPath = normalizePath(pathname ?? '/')
      const path = shouldAnimateLink(anchor, currentPath)
      if (!path) return

      event.preventDefault()
      navigateWithTransition(path)
    }

    document.addEventListener('click', onClick, true)
    return () => document.removeEventListener('click', onClick, true)
  }, [navigateWithTransition, pathname])

  if (phase === 'idle' || cells.length === 0) return null

  const isCover = phase === 'cover'

  return (
    <div className="pointer-events-none fixed inset-0 z-[2000] overflow-hidden" aria-hidden="true">
      {cells.map((cell) => (
        <div
          key={cell.id}
          className="absolute bg-accent will-change-[opacity]"
          style={getMosaicCellStyle(cell, { visible: isCover && coverActive })}
        />
      ))}
    </div>
  )
}
