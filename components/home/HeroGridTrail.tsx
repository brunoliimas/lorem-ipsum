'use client'

import { useCallback, useEffect, useRef, useState } from 'react'

const CELL_SIZE = 40
const TRAIL_MS = 700

interface HeroGridTrailProps {
  trackRef?: React.RefObject<HTMLElement | null>
}

export function HeroGridTrail({ trackRef }: HeroGridTrailProps = {}) {
  const overlayRef = useRef<HTMLDivElement>(null)
  const cellsRef = useRef<Map<string, number>>(new Map())
  const frameRef = useRef<number>(0)
  const [, setTick] = useState(0)
  const disabledRef = useRef(false)

  useEffect(() => {
    disabledRef.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  }, [])

  const getTrackElement = useCallback(() => trackRef?.current ?? overlayRef.current, [trackRef])

  const startFadeLoop = useCallback(() => {
    if (frameRef.current) return

    const loop = () => {
      const now = Date.now()
      let changed = false

      for (const [key, expire] of cellsRef.current) {
        if (expire <= now) {
          cellsRef.current.delete(key)
          changed = true
        }
      }

      if (changed || cellsRef.current.size > 0) {
        setTick((t) => t + 1)
      }

      if (cellsRef.current.size > 0) {
        frameRef.current = requestAnimationFrame(loop)
      } else {
        frameRef.current = 0
      }
    }

    frameRef.current = requestAnimationFrame(loop)
  }, [])

  useEffect(() => {
    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current)
    }
  }, [])

  const paintCell = useCallback(
    (clientX: number, clientY: number) => {
      if (disabledRef.current) return

      const el = getTrackElement()
      if (!el) return

      const rect = el.getBoundingClientRect()
      const x = Math.floor((clientX - rect.left) / CELL_SIZE)
      const y = Math.floor((clientY - rect.top) / CELL_SIZE)

      if (x < 0 || y < 0) return
      if (x * CELL_SIZE >= rect.width || y * CELL_SIZE >= rect.height) return

      const key = `${x},${y}`
      cellsRef.current.set(key, Date.now() + TRAIL_MS)
      setTick((t) => t + 1)
      startFadeLoop()
    },
    [getTrackElement, startFadeLoop],
  )

  useEffect(() => {
    const el = getTrackElement()
    if (!el) return

    const onMouseMove = (event: MouseEvent) => paintCell(event.clientX, event.clientY)

    el.addEventListener('mousemove', onMouseMove)
    return () => el.removeEventListener('mousemove', onMouseMove)
  }, [getTrackElement, paintCell, trackRef])

  const cells = cellsRef.current

  return (
    <div ref={overlayRef} className="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
      {Array.from(cells.entries()).map(([key, expire]) => {
        const [x, y] = key.split(',').map(Number)
        const opacity = Math.max(0, Math.min(1, (expire - Date.now()) / TRAIL_MS))

        return (
          <div
            key={key}
            className="absolute bg-accent will-change-[opacity]"
            style={{
              left: x * CELL_SIZE,
              top: y * CELL_SIZE,
              width: CELL_SIZE,
              height: CELL_SIZE,
              opacity,
            }}
          />
        )
      })}
    </div>
  )
}
