export function TypingCaret({ className = '' }: { className?: string }) {
  return (
    <span
      className={`hero-caret ml-0.5 inline-block h-[0.82em] w-[0.42em] shrink-0 translate-y-[0.06em] bg-accent ${className}`}
      aria-hidden="true"
    />
  )
}
