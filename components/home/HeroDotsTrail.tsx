import { useCallback, useEffect, useRef, useState } from 'react'

const CELL_SIZE = 16
const TRAIL_MS = 600
const SPREAD = 2

interface CellState {
  expire: number
  peak: number
}

interface HeroDotsTrailProps {
  trackRef?: React.RefObject<HTMLElement | null>
}

export function HeroDotsTrail({ trackRef }: HeroDotsTrailProps = {}) {
  const overlayRef = useRef<HTMLDivElement>(null)
  const cellsRef = useRef<Map<string, CellState>>(new Map())
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

      for (const [key, cell] of cellsRef.current) {
        if (cell.expire <= now) {
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

  const paintProximity = useCallback(
    (clientX: number, clientY: number) => {
      if (disabledRef.current) return

      const el = getTrackElement()
      if (!el) return

      const rect = el.getBoundingClientRect()
      const centerX = Math.floor((clientX - rect.left) / CELL_SIZE)
      const centerY = Math.floor((clientY - rect.top) / CELL_SIZE)
      const maxX = Math.ceil(rect.width / CELL_SIZE)
      const maxY = Math.ceil(rect.height / CELL_SIZE)
      const now = Date.now()
      let changed = false

      for (let dx = -SPREAD; dx <= SPREAD; dx++) {
        for (let dy = -SPREAD; dy <= SPREAD; dy++) {
          const dist = Math.hypot(dx, dy)
          if (dist > SPREAD) continue

          const x = centerX + dx
          const y = centerY + dy

          if (x < 0 || y < 0 || x >= maxX || y >= maxY) continue

          const peak = 1 - dist / (SPREAD + 0.75)
          const key = `${x},${y}`
          const existing = cellsRef.current.get(key)
          const expire = now + TRAIL_MS

          if (!existing || peak >= existing.peak) {
            cellsRef.current.set(key, { expire, peak })
          } else {
            cellsRef.current.set(key, { expire, peak: existing.peak })
          }

          changed = true
        }
      }

      if (changed) {
        setTick((t) => t + 1)
        startFadeLoop()
      }
    },
    [getTrackElement, startFadeLoop],
  )

  useEffect(() => {
    const el = getTrackElement()
    if (!el) return

    const onMouseMove = (event: MouseEvent) => paintProximity(event.clientX, event.clientY)

    el.addEventListener('mousemove', onMouseMove)
    return () => el.removeEventListener('mousemove', onMouseMove)
  }, [getTrackElement, paintProximity, trackRef])

  const cells = cellsRef.current
  const dotSize = 2
  const dotOffset = (CELL_SIZE - dotSize) / 2

  return (
    <div ref={overlayRef} className="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
      {Array.from(cells.entries()).map(([key, cell]) => {
        const [x, y] = key.split(',').map(Number)
        const fade = Math.max(0, Math.min(1, (cell.expire - Date.now()) / TRAIL_MS))
        const opacity = cell.peak * fade

        return (
          <div
            key={key}
            className="absolute rounded-full bg-accent will-change-[opacity]"
            style={{
              left: x * CELL_SIZE + dotOffset,
              top: y * CELL_SIZE + dotOffset,
              width: dotSize,
              height: dotSize,
              opacity,
            }}
          />
        )
      })}
    </div>
  )
}
