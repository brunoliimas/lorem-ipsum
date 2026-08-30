'use client'

import { useCallback, useEffect, useRef, useState } from 'react'

const CELL_SIZE = 16
const TICK_MS = 130
const FOOD_SIZE = 10
const BODY_SIZE = 11
const HEAD_SIZE = 13

type Point = { x: number; y: number }
type Direction = 'up' | 'down' | 'left' | 'right'

export interface SnakeGameState {
  active: boolean
  score: number
}

interface HeroSnakeGameProps {
  trackRef?: React.RefObject<HTMLElement | null>
  onStateChange?: (state: SnakeGameState) => void
}

const DIRECTION_DELTA: Record<Direction, Point> = {
  up: { x: 0, y: -1 },
  down: { x: 0, y: 1 },
  left: { x: -1, y: 0 },
  right: { x: 1, y: 0 },
}

const OPPOSITE: Record<Direction, Direction> = {
  up: 'down',
  down: 'up',
  left: 'right',
  right: 'left',
}

const KEY_TO_DIRECTION: Record<string, Direction> = {
  ArrowUp: 'up',
  ArrowDown: 'down',
  ArrowLeft: 'left',
  ArrowRight: 'right',
  w: 'up',
  a: 'left',
  s: 'down',
  d: 'right',
}

function wrapCoord(value: number, max: number) {
  return ((value % max) + max) % max
}

function spawnFood(snake: Point[], cols: number, rows: number): Point | null {
  if (cols * rows <= snake.length) return null

  const occupied = new Set(snake.map((point) => `${point.x},${point.y}`))

  for (let attempt = 0; attempt < 200; attempt++) {
    const point = {
      x: Math.floor(Math.random() * cols),
      y: Math.floor(Math.random() * rows),
    }

    if (!occupied.has(`${point.x},${point.y}`)) return point
  }

  return null
}

function createInitialSnake(cols: number, rows: number): Point[] {
  const headX = Math.max(2, Math.floor(cols / 2))
  const headY = Math.floor(rows / 2)

  return [
    { x: headX - 2, y: headY },
    { x: headX - 1, y: headY },
    { x: headX, y: headY },
  ]
}

function cellStyle(x: number, y: number, size: number) {
  return {
    left: x * CELL_SIZE + (CELL_SIZE - size) / 2,
    top: y * CELL_SIZE + (CELL_SIZE - size) / 2,
    width: size,
    height: size,
  }
}

function MobileControls({
  onDirection,
}: {
  onDirection: (direction: Direction) => void
}) {
  const buttonClass =
    'flex size-9 items-center justify-center border border-grey-4 bg-grey-1/90 font-mono text-body-s text-grey-9 backdrop-blur-sm active:bg-accent active:text-grey-1'

  return (
    <div
      className="pointer-events-auto absolute bottom-3 left-1/2 z-20 -translate-x-1/2 sm:hidden"
      aria-label="Controles do snake"
    >
      <div className="grid grid-cols-3 gap-1">
        <span aria-hidden="true" />
        <button type="button" className={buttonClass} onClick={() => onDirection('up')} aria-label="Cima">
          ↑
        </button>
        <span aria-hidden="true" />
        <button type="button" className={buttonClass} onClick={() => onDirection('left')} aria-label="Esquerda">
          ←
        </button>
        <button type="button" className={buttonClass} onClick={() => onDirection('down')} aria-label="Baixo">
          ↓
        </button>
        <button type="button" className={buttonClass} onClick={() => onDirection('right')} aria-label="Direita">
          →
        </button>
      </div>
    </div>
  )
}

export function HeroSnakeGame({ trackRef, onStateChange }: HeroSnakeGameProps) {
  const [grid, setGrid] = useState({ cols: 0, rows: 0 })
  const [snake, setSnake] = useState<Point[]>([])
  const [food, setFood] = useState<Point | null>(null)
  const [active, setActive] = useState(false)
  const [score, setScore] = useState(0)
  const [inView, setInView] = useState(false)
  const [disabled, setDisabled] = useState(true)
  const [isTouch, setIsTouch] = useState(false)

  const directionRef = useRef<Direction>('right')
  const nextDirectionRef = useRef<Direction>('right')
  const snakeRef = useRef<Point[]>([])
  const foodRef = useRef<Point | null>(null)
  const scoreRef = useRef(0)
  const touchStartRef = useRef<Point | null>(null)

  useEffect(() => {
    foodRef.current = food
  }, [food])

  useEffect(() => {
    onStateChange?.({ active, score })
  }, [active, onStateChange, score])

  const resetGame = useCallback((cols: number, rows: number, resetScore = false) => {
    const initialSnake = createInitialSnake(cols, rows)

    snakeRef.current = initialSnake
    directionRef.current = 'right'
    nextDirectionRef.current = 'right'
    setSnake(initialSnake)
    setFood(spawnFood(initialSnake, cols, rows))

    if (resetScore) {
      scoreRef.current = 0
      setScore(0)
    }
  }, [])

  const measureGrid = useCallback(() => {
    const el = trackRef?.current
    if (!el) return

    const { width, height } = el.getBoundingClientRect()
    const cols = Math.max(0, Math.floor(width / CELL_SIZE))
    const rows = Math.max(0, Math.floor(height / CELL_SIZE))

    setGrid({ cols, rows })

    if (cols >= 6 && rows >= 4 && snakeRef.current.length === 0) {
      resetGame(cols, rows)
    }
  }, [resetGame, trackRef])

  useEffect(() => {
    setDisabled(window.matchMedia('(prefers-reduced-motion: reduce)').matches)
    setIsTouch(window.matchMedia('(pointer: coarse)').matches)
  }, [])

  useEffect(() => {
    measureGrid()
    window.addEventListener('resize', measureGrid)
    return () => window.removeEventListener('resize', measureGrid)
  }, [measureGrid])

  useEffect(() => {
    const el = trackRef?.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.25 },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [trackRef])

  const queueDirection = useCallback((direction: Direction) => {
    if (direction === OPPOSITE[directionRef.current]) return
    nextDirectionRef.current = direction
  }, [])

  const startGame = useCallback(() => {
    if (disabled || grid.cols < 6 || grid.rows < 4) return

    if (snakeRef.current.length === 0) {
      resetGame(grid.cols, grid.rows)
    }

    setActive(true)
  }, [disabled, grid.cols, grid.rows, resetGame])

  useEffect(() => {
    if (!active || !inView || grid.cols === 0 || grid.rows === 0) return

    const interval = window.setInterval(() => {
      const direction = nextDirectionRef.current
      directionRef.current = direction

      const head = snakeRef.current[snakeRef.current.length - 1]
      const delta = DIRECTION_DELTA[direction]
      const nextHead = {
        x: wrapCoord(head.x + delta.x, grid.cols),
        y: wrapCoord(head.y + delta.y, grid.rows),
      }

      const hitSelf = snakeRef.current.some(
        (segment) => segment.x === nextHead.x && segment.y === nextHead.y,
      )

      if (hitSelf) {
        setActive(false)
        resetGame(grid.cols, grid.rows, true)
        return
      }

      const currentFood = foodRef.current
      const ateFood =
        currentFood !== null && nextHead.x === currentFood.x && nextHead.y === currentFood.y

      const nextSnake = ateFood
        ? [...snakeRef.current, nextHead]
        : [...snakeRef.current.slice(1), nextHead]

      snakeRef.current = nextSnake
      setSnake(nextSnake)

      if (ateFood) {
        scoreRef.current += 1
        setScore(scoreRef.current)
        setFood(spawnFood(nextSnake, grid.cols, grid.rows))
      }
    }, TICK_MS)

    return () => window.clearInterval(interval)
  }, [active, grid.cols, grid.rows, inView, resetGame])

  useEffect(() => {
    if (!inView) return

    const onKeyDown = (event: KeyboardEvent) => {
      const direction = KEY_TO_DIRECTION[event.key]
      if (!direction) return

      event.preventDefault()
      if (!active) startGame()
      queueDirection(direction)
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [active, inView, queueDirection, startGame])

  useEffect(() => {
    const el = trackRef?.current
    if (!el || disabled) return

    const onClick = () => startGame()

    el.addEventListener('click', onClick)
    return () => el.removeEventListener('click', onClick)
  }, [disabled, startGame, trackRef])

  useEffect(() => {
    const el = trackRef?.current
    if (!el || disabled) return

    const onTouchStart = (event: TouchEvent) => {
      const touch = event.touches[0]
      touchStartRef.current = { x: touch.clientX, y: touch.clientY }
    }

    const onTouchEnd = (event: TouchEvent) => {
      const start = touchStartRef.current
      const touch = event.changedTouches[0]

      touchStartRef.current = null
      if (!start || !touch) return

      const dx = touch.clientX - start.x
      const dy = touch.clientY - start.y
      const absX = Math.abs(dx)
      const absY = Math.abs(dy)

      if (Math.max(absX, absY) < 24) {
        startGame()
        return
      }

      if (!active) startGame()

      if (absX > absY) {
        queueDirection(dx > 0 ? 'right' : 'left')
      } else {
        queueDirection(dy > 0 ? 'down' : 'up')
      }
    }

    el.addEventListener('touchstart', onTouchStart, { passive: true })
    el.addEventListener('touchend', onTouchEnd, { passive: true })

    return () => {
      el.removeEventListener('touchstart', onTouchStart)
      el.removeEventListener('touchend', onTouchEnd)
    }
  }, [active, disabled, queueDirection, startGame, trackRef])

  const handleMobileDirection = useCallback(
    (direction: Direction) => {
      if (!active) startGame()
      queueDirection(direction)
    },
    [active, queueDirection, startGame],
  )

  if (disabled || grid.cols === 0 || grid.rows === 0) return null

  const head = snake[snake.length - 1]

  return (
    <>
      <div className="pointer-events-none absolute inset-0 z-[1]" aria-hidden="true">
        {food && (
          <div
            className="absolute rounded-sm bg-grey-9"
            style={cellStyle(food.x, food.y, FOOD_SIZE)}
          />
        )}

        {snake.map((segment, index) => {
          const isHead = segment.x === head?.x && segment.y === head?.y
          const size = isHead ? HEAD_SIZE : BODY_SIZE

          return (
            <div
              key={`${segment.x}-${segment.y}-${index}`}
              className={`absolute rounded-sm ${isHead ? 'bg-accent' : 'bg-accent/85'}`}
              style={cellStyle(segment.x, segment.y, size)}
            />
          )
        })}
      </div>

      {active && isTouch && <MobileControls onDirection={handleMobileDirection} />}
    </>
  )
}
