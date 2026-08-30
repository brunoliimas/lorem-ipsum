import React from 'react'

interface SectionLabelProps {
  index: number
  total: number
  label: string
  className?: string
}

export function SectionLabel({
  index,
  total,
  label,
  className = '',
}: SectionLabelProps) {
  const paddedIndex = String(index).padStart(2, '0')
  const paddedTotal = String(total).padStart(2, '0')

  return (
    <div className={`eyebrow-section ${className}`}>
      <div className="eyebrow-main">
        <span className="eyebrow-text">
          [n.{paddedIndex} / {paddedTotal}]
        </span>
        <span className="eyebrow-text total">&gt;</span>
        <span className="eyebrow-text">{label}</span>
      </div>
      <span className="eyebrow-line" aria-hidden="true" />
    </div>
  )
}
