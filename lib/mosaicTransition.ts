import type { CSSProperties } from 'react'

export const MOSAIC_CELL_SIZE = 80
export const MOSAIC_COVER_MS = 720
export const MOSAIC_REVEAL_MS = 640
export const MOSAIC_CELL_FADE_MS = 160

export interface MosaicCell {
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

export function getMosaicGridDimensions(cellSize = MOSAIC_CELL_SIZE) {
  return {
    cols: Math.ceil(window.innerWidth / cellSize),
    rows: Math.ceil(window.innerHeight / cellSize),
  }
}

export function buildMosaicCells(
  cols: number,
  rows: number,
  durationMs = MOSAIC_COVER_MS,
  fullOpacity = false,
): MosaicCell[] {
  const total = cols * rows
  const order = shuffle(Array.from({ length: total }, (_, id) => id))

  return order.map((id, index) => ({
    id,
    x: id % cols,
    y: Math.floor(id / cols),
    delay: (index / total) * durationMs * 0.92 + Math.random() * 24,
    peak: fullOpacity ? 1 : Math.random() > 0.28 ? 1 : 0.45 + Math.random() * 0.35,
  }))
}

export function getMosaicCellStyle(
  cell: MosaicCell,
  {
    cellSize = MOSAIC_CELL_SIZE,
    visible,
    coverDuration = MOSAIC_COVER_MS,
    revealDuration = MOSAIC_REVEAL_MS,
    fadeMs = MOSAIC_CELL_FADE_MS,
  }: {
    cellSize?: number
    visible: boolean
    coverDuration?: number
    revealDuration?: number
    fadeMs?: number
  },
): CSSProperties {
  return {
    left: cell.x * cellSize,
    top: cell.y * cellSize,
    width: cellSize,
    height: cellSize,
    opacity: visible ? cell.peak : 0,
    transitionProperty: 'opacity',
    transitionDuration: `${fadeMs}ms`,
    transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
    transitionDelay: visible
      ? `${cell.delay}ms`
      : `${(1 - cell.delay / coverDuration) * revealDuration * 0.85}ms`,
  }
}
