'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { Container } from '../ds'
import { HeroSnakeGame, SnakeGameState } from './HeroSnakeGame'

function SnakeHint() {
  const [isTouch, setIsTouch] = useState(false)

  useEffect(() => {
    setIsTouch(window.matchMedia('(pointer: coarse)').matches)
  }, [])

  return (
    <p className="mt-3 text-center font-mono text-body-xs uppercase text-grey-6">
      {isTouch ? 'toque ou deslize para jogar' : '↑ ↓ ← → snake'}
    </p>
  )
}

export function HeroPixelStrip() {
  const areaRef = useRef<HTMLDivElement>(null)
  const [gameState, setGameState] = useState<SnakeGameState>({ active: false, score: 0 })

  const handleStateChange = useCallback((state: SnakeGameState) => {
    setGameState(state)
  }, [])

  return (
    <div
      ref={areaRef}
      className="hero-dots relative border-b border-grey-4 bg-grey-2 py-32"
      aria-label="Mini game snake"
    >
      <HeroSnakeGame trackRef={areaRef} onStateChange={handleStateChange} />

      <div className="relative z-10">
        <Container className="relative min-h-[3.5rem]">
          <div
            className={`transition-opacity duration-300 ${
              gameState.active ? 'pointer-events-none opacity-0' : 'opacity-100'
            }`}
          >
            <p className="text-center font-pixel text-[clamp(0.75rem,2vw,1rem)] uppercase leading-height-xl text-accent">
              / add-on → camada de software para{' '}
              <span className="heading-highlight">[ stack ]</span> /
            </p>
            <SnakeHint />
          </div>

          {gameState.active && (
            <p className="absolute inset-x-0 top-0 text-center font-mono text-body-s font-medium uppercase tracking-[0.08em] text-accent">
              score {String(gameState.score).padStart(3, '0')}
            </p>
          )}
        </Container>
      </div>
    </div>
  )
}
