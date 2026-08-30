import { useTypingCycle } from '../../hooks/useTypingCycle'
import { TypingCaret } from './TypingCaret'

const ROTATING_WORDS = ['UI', 'UX', 'Software', 'SEO/AEO', 'Veeva'] as const

export function HeroTypingHighlight() {
  const text = useTypingCycle(ROTATING_WORDS)

  return (
    <span
      className="heading-highlight whitespace-nowrap"
      aria-label={`Especialidades: ${ROTATING_WORDS.join(', ')}`}
    >
      [{' '}
      <span aria-live="polite" className="inline-flex items-baseline">
        {text}
        <TypingCaret />
      </span>
      {' '}]
    </span>
  )
}
