import { useEffect, useState } from 'react'

const delay = (ms: number) => new Promise<void>((resolve) => setTimeout(resolve, ms))

export { delay }

export function useTypingOnce(
  text: string,
  { typeMs = 85, enabled = true }: { typeMs?: number; enabled?: boolean } = {},
) {
  const [displayed, setDisplayed] = useState('')
  const [done, setDone] = useState(false)

  useEffect(() => {
    if (!enabled) return

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) {
      setDisplayed(text)
      setDone(true)
      return
    }

    let cancelled = false
    setDisplayed('')
    setDone(false)

    const run = async () => {
      for (let i = 1; i <= text.length; i++) {
        if (cancelled) return
        setDisplayed(text.slice(0, i))
        await delay(typeMs)
      }
      if (!cancelled) setDone(true)
    }

    run()

    return () => {
      cancelled = true
    }
  }, [text, typeMs, enabled])

  return { displayed, done }
}
