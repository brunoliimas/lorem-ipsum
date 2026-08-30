import { useEffect, useState } from 'react'

import { delay } from './useTypingOnce'

export function useTypingCycle(
  words: readonly string[],
  { typeMs = 85, deleteMs = 55, pauseMs = 1800 } = {},
) {
  const [text, setText] = useState('')

  useEffect(() => {
    if (words.length === 0) return

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) {
      setText(words[0])
      return
    }

    let cancelled = false
    let wordIndex = 0

    const run = async () => {
      while (!cancelled) {
        const word = words[wordIndex]

        for (let i = 1; i <= word.length; i++) {
          if (cancelled) return
          setText(word.slice(0, i))
          await delay(typeMs)
        }

        await delay(pauseMs)

        for (let i = word.length - 1; i >= 0; i--) {
          if (cancelled) return
          setText(word.slice(0, i))
          await delay(deleteMs)
        }

        wordIndex = (wordIndex + 1) % words.length
      }
    }

    run()

    return () => {
      cancelled = true
    }
  }, [words, typeMs, deleteMs, pauseMs])

  return text
}
