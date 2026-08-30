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
    <div
      className={`flex flex-wrap items-center gap-2 font-mono text-body-xs uppercase tracking-wide text-grey-6 ${className}`}
    >
      <span className="text-grey-7">[n.</span>
      <span className="text-accent">{paddedIndex}</span>
      <span className="text-grey-7">/ {paddedTotal}]</span>
      <span className="text-grey-7">&gt;</span>
      <span className="text-grey-1">{label}</span>
    </div>
  )
}
