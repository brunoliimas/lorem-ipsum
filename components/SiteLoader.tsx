'use client'

import Image from 'next/image'
import { useLayoutEffect, useState } from 'react'
import {
  MOSAIC_CELL_FADE_MS,
  MOSAIC_CELL_SIZE,
  MosaicCell,
  buildMosaicCells,
  getMosaicGridDimensions,
} from '../lib/mosaicTransition'

const STORAGE_KEY = 'site-loader-seen'
const LOGO_HOLD_MS = 900
const DISSOLVE_MS = 760
const LOGO_FADE_MS = 320

type LoaderPhase = 'logo' | 'dissolve' | 'hidden'

function shouldShowLoader() {
  if (typeof window === 'undefined') return false
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return false
  return sessionStorage.getItem(STORAGE_KEY) !== '1'
}

export function SiteLoader() {
  const [phase, setPhase] = useState<LoaderPhase>('hidden')
  const [cells, setCells] = useState<MosaicCell[]>([])
  const [dissolveActive, setDissolveActive] = useState(false)

  useLayoutEffect(() => {
    if (!shouldShowLoader()) return

    sessionStorage.setItem(STORAGE_KEY, '1')
    setPhase('logo')
    document.body.style.overflow = 'hidden'

    const dissolveTimer = window.setTimeout(() => {
      const { cols, rows } = getMosaicGridDimensions()
      setCells(buildMosaicCells(cols, rows, DISSOLVE_MS, true))
      setDissolveActive(false)
      setPhase('dissolve')
    }, LOGO_HOLD_MS)

    return () => {
      window.clearTimeout(dissolveTimer)
      document.body.style.overflow = ''
    }
  }, [])

  useLayoutEffect(() => {
    if (phase !== 'dissolve' || cells.length === 0) return

    const frame = requestAnimationFrame(() => {
      requestAnimationFrame(() => setDissolveActive(true))
    })

    return () => cancelAnimationFrame(frame)
  }, [phase, cells])

  useLayoutEffect(() => {
    if (!dissolveActive) return

    const finishTimer = window.setTimeout(() => {
      document.body.style.overflow = ''
      setPhase('hidden')
    }, DISSOLVE_MS + MOSAIC_CELL_FADE_MS + 80)

    return () => window.clearTimeout(finishTimer)
  }, [dissolveActive])

  if (phase === 'hidden') return null

  const solidBlueVisible = phase === 'logo' || (phase === 'dissolve' && !dissolveActive)
  const logoVisible = phase === 'logo' || (phase === 'dissolve' && !dissolveActive)

  return (
    <div
      className="fixed inset-0 z-[3000] overflow-hidden"
      role="status"
      aria-live="polite"
      aria-label="Carregando site"
    >
      {solidBlueVisible && <div className="absolute inset-0 bg-accent" aria-hidden="true" />}

      <div
        className={`pointer-events-none absolute inset-0 z-10 flex items-center justify-center transition-opacity ${
          logoVisible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ transitionDuration: `${LOGO_FADE_MS}ms` }}
      >
        <Image
          src="/assets/logo.svg"
          width={56}
          height={56}
          alt="Bruno Lima"
          priority
          className="brightness-0 invert"
        />
      </div>

      {phase === 'dissolve' &&
        cells.map((cell) => (
          <div
            key={cell.id}
            className="absolute z-20 bg-accent will-change-[opacity]"
            style={{
              left: cell.x * MOSAIC_CELL_SIZE,
              top: cell.y * MOSAIC_CELL_SIZE,
              width: MOSAIC_CELL_SIZE,
              height: MOSAIC_CELL_SIZE,
              opacity: dissolveActive ? 0 : 1,
              transitionProperty: 'opacity',
              transitionDuration: `${MOSAIC_CELL_FADE_MS}ms`,
              transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
              transitionDelay: `${cell.delay}ms`,
            }}
          />
        ))}
    </div>
  )
}
