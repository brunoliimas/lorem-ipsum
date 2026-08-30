import { useRef } from 'react'
import { useInViewOnce } from '../../hooks/useInViewOnce'
import { useTypingOnce } from '../../hooks/useTypingOnce'

interface SectionTypingTitleProps {
  lines: string[]
  className?: string
  highlightLines?: number[]
  /** When set, static `lines` stay fixed and only this text types inside `[ ]`. */
  typingBracket?: string
}

function ClosingSlash({ visible }: { visible: boolean }) {
  if (!visible) return null

  return (
    <>
      {' '}
      <span className="heading-slash">/</span>
    </>
  )
}

export function SectionTypingTitle({
  lines,
  className = 'text-h2',
  highlightLines = [],
  typingBracket,
}: SectionTypingTitleProps) {
  const ref = useRef<HTMLHeadingElement>(null)
  const inView = useInViewOnce(ref)
  const fullText = typingBracket ?? lines.join('\n')
  const { displayed } = useTypingOnce(fullText, { enabled: inView })
  const visibleLines = displayed.split('\n')

  const ariaLabel = typingBracket
    ? [...lines, `[ ${typingBracket} ]`].join(' ')
    : lines.join(' ')

  return (
    <h2 ref={ref} className={className} aria-label={ariaLabel}>
      <span className="heading-slash">/</span>
      {inView && (
        <>
          {' '}
          <span aria-live={typingBracket ? 'off' : 'polite'} className="inline">
            {typingBracket ? (
              <>
                {lines.map((line, index) => (
                  <span key={`static-${index}`}>
                    {index > 0 && <br />}
                    {line}
                  </span>
                ))}
                <br />
                <span className="heading-highlight whitespace-nowrap">
                  [{' '}
                  <span aria-live="polite">{displayed}</span>
                  {' '}]
                  <ClosingSlash visible={displayed.length > 0} />
                </span>
              </>
            ) : (
              <>
                {lines.map((_, index) => {
                  if (index >= visibleLines.length) return null

                  const line = visibleLines[index] ?? ''

                  return (
                    <span key={`line-${index}`}>
                      {index > 0 && <br />}
                      <span
                        className={
                          highlightLines.includes(index) ? 'heading-highlight' : undefined
                        }
                      >
                        {line}
                      </span>
                    </span>
                  )
                })}
                <ClosingSlash visible={displayed.length > 0} />
              </>
            )}
          </span>
        </>
      )}
    </h2>
  )
}
