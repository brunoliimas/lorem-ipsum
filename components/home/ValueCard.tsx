import React from 'react'

type IconVariant = 'processing' | 'workflows' | 'results'

interface ValueCardProps {
  index: string
  title: string
  description: string
  tag: string
  icon: IconVariant
}

function ValueIcon({ variant, filled }: { variant: IconVariant; filled?: boolean }) {
  const stroke = filled ? '#0055FF' : '#474747'
  const fill = filled ? '#0055FF' : 'none'

  if (variant === 'processing') {
    return (
      <svg viewBox="0 0 160 160" fill="none" className="h-full w-full" aria-hidden="true">
        <ellipse cx="80" cy="88" rx="36" ry="14" stroke={stroke} strokeWidth="1.5" />
        <path
          d="M80 52c-22 0-40 12-40 36s18 36 40 36 40-12 40-36-18-36-40-36Z"
          stroke={stroke}
          strokeWidth="1.5"
        />
        <path
          d="M108 44c8-10 22-8 28 4s2 24-10 30"
          stroke={stroke}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        {filled && (
          <>
            <rect x="68" y="68" width="6" height="6" fill={fill} />
            <rect x="78" y="68" width="6" height="6" fill={fill} />
            <rect x="88" y="68" width="6" height="6" fill={fill} />
            <rect x="73" y="78" width="6" height="6" fill={fill} />
            <rect x="83" y="78" width="6" height="6" fill={fill} />
          </>
        )}
      </svg>
    )
  }

  if (variant === 'workflows') {
    return (
      <svg viewBox="0 0 160 160" fill="none" className="h-full w-full" aria-hidden="true">
        <path
          d="M48 92 80 74l32 18v24L80 134 48 116V92Z"
          stroke={stroke}
          strokeWidth="1.5"
          fill={filled ? 'rgba(0,85,255,0.15)' : 'none'}
        />
        <path
          d="M56 72 88 54l32 18v24l-32 18-32-18V72Z"
          stroke={stroke}
          strokeWidth="1.5"
          fill={filled ? 'rgba(0,85,255,0.35)' : 'none'}
        />
        <path
          d="M64 52 96 34l32 18v24l-32 18-32-18V52Z"
          stroke={stroke}
          strokeWidth="1.5"
          fill={filled ? fill : 'none'}
        />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 160 160" fill="none" className="h-full w-full" aria-hidden="true">
      {filled ? (
        <>
          <rect x="74" y="44" width="12" height="12" fill={fill} />
          <rect x="62" y="56" width="12" height="12" fill={fill} />
          <rect x="86" y="56" width="12" height="12" fill={fill} />
          <rect x="50" y="68" width="12" height="12" fill={fill} />
          <rect x="74" y="68" width="12" height="12" fill={fill} />
          <rect x="98" y="68" width="12" height="12" fill={fill} />
          <rect x="62" y="80" width="12" height="12" fill={fill} />
          <rect x="86" y="80" width="12" height="12" fill={fill} />
          <rect x="74" y="92" width="12" height="12" fill={fill} />
        </>
      ) : (
        <path
          d="M80 34 92 62h30l-24 18 9 28-27-19-27 19 9-28-24-18h30L80 34Z"
          stroke={stroke}
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      )}
    </svg>
  )
}

export function ValueCard({ index, title, description, tag, icon }: ValueCardProps) {
  return (
    <article className="group flex min-h-[31rem] flex-col justify-between border border-grey-4 p-6 lg:border-r-0 lg:last:border-r">
      <div className="flex items-start justify-between">
        <div className="relative h-40 w-40 max-w-[10rem] shrink-0">
          <div
            className="absolute inset-0 transition-opacity duration-300 lg:opacity-100 lg:group-hover:opacity-0 max-lg:opacity-0"
            aria-hidden="true"
          >
            <ValueIcon variant={icon} />
          </div>
          <div
            className="absolute inset-0 transition-opacity duration-300 lg:opacity-0 lg:group-hover:opacity-100 max-lg:opacity-100"
            aria-hidden="true"
          >
            <ValueIcon variant={icon} filled />
          </div>
        </div>
        <span className="font-mono text-body-m font-medium text-grey-8">//{index}</span>
      </div>

      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-4">
          <h3 className="text-title-m font-medium transition-colors duration-300 max-lg:text-accent lg:group-hover:text-accent">
            {title}
          </h3>
          <div className="grid grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-out lg:grid-rows-[0fr] lg:group-hover:grid-rows-[1fr]">
            <div className="overflow-hidden">
              <p className="text-body-m text-grey-8">{description}</p>
            </div>
          </div>
        </div>

        <span className="inline-flex self-start bg-grey-3 px-1 py-0.5 font-mono text-body-s font-medium uppercase tracking-s text-grey-8">
          {tag}
        </span>
      </div>
    </article>
  )
}
