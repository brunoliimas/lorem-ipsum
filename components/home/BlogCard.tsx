import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface BlogCardProps {
  href: string
  category: string
  date: string
  title: string
  description?: string
  external?: boolean
  className?: string
}

function ArrowIcon({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      className={`size-5 transition-colors duration-300 ${className}`}
      aria-hidden="true"
    >
      <path
        d="M4 12 12 4M12 4H6M12 4v6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="square"
      />
    </svg>
  )
}

export function BlogCard({
  href,
  category,
  date,
  title,
  description,
  external,
  className = '',
}: BlogCardProps) {
  const content = (
    <>
      <span
        className="pointer-events-none absolute inset-0 z-[2] border border-accent opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover/blog-row:opacity-100"
        aria-hidden="true"
      />
      <div className="relative z-[1] flex items-start justify-between gap-4">
        <span className="bg-grey-3 px-1 py-0.5 font-mono text-body-xs font-medium uppercase text-grey-8">
          {category}
        </span>
        <span className="font-mono text-body-s font-medium text-grey-8">// {date}</span>
      </div>

      <div className="relative z-[1] flex flex-1 flex-col justify-center gap-4 py-6">
        <h3 className="text-title-l transition-colors duration-300 group-hover:text-accent group-hover/blog-row:text-accent md:text-h5 md:leading-height-s">
          {title}
        </h3>
        {description && (
          <p className="max-w-md text-body-m text-grey-8">{description}</p>
        )}
      </div>

      <div className="relative z-[1] flex items-center justify-between">
        <ArrowIcon className="text-grey-9 group-hover:text-accent group-hover/blog-row:text-accent" />
        <span className="font-mono text-body-m font-medium uppercase text-grey-9 transition-colors duration-300 group-hover:text-accent group-hover/blog-row:text-accent">
          View
        </span>
      </div>
    </>
  )

  const classes = `group relative flex h-full min-h-[18rem] flex-col bg-grey-1 p-6 transition-colors ${className}`

  if (external) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    )
  }

  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  )
}

interface BlogImageProps {
  src: string
  alt: string
  className?: string
  linked?: boolean
}

export function BlogImage({ src, alt, className = '', linked = true }: BlogImageProps) {
  return (
    <div className={`relative min-h-[14rem] overflow-hidden bg-grey-9 ${className}`}>
      {linked && (
        <span
          className="pointer-events-none absolute inset-0 z-[2] border border-accent opacity-0 transition-opacity duration-300 group-hover/blog-row:opacity-100"
          aria-hidden="true"
        />
      )}
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover grayscale transition-[filter] duration-500 group-hover/blog-row:grayscale-0"
        sizes="(max-width: 1024px) 100vw, 25vw"
      />
    </div>
  )
}
