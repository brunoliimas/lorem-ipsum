import { motion } from 'framer-motion'
import Link from 'next/link'
import { scale, slide } from './anim'

interface CurvedMenuLinkProps {
  title: string
  href: string
  index: number
  isActive: boolean
  onHover: () => void
  onNavigate: () => void
}

export function CurvedMenuLink({
  title,
  href,
  index,
  isActive,
  onHover,
  onNavigate,
}: CurvedMenuLinkProps) {
  const isHash = href.startsWith('#')

  const content = (
    <>
      <motion.span
        variants={scale}
        animate={isActive ? 'open' : 'closed'}
        className="absolute -left-8 top-0 bottom-0 my-auto size-2.5 rounded-full bg-accent"
        aria-hidden="true"
      />
      {title}
    </>
  )

  return (
    <motion.div
      className="relative flex items-center"
      onMouseEnter={onHover}
      custom={index}
      variants={slide}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      {isHash ? (
        <a
          href={href}
          onClick={onNavigate}
          className="relative font-sans text-[clamp(2.5rem,6vw,3.5rem)] font-normal leading-height-s tracking-l text-grey-1 no-underline transition-colors hover:text-accent"
        >
          {content}
        </a>
      ) : (
        <Link
          href={href}
          onClick={onNavigate}
          className="relative font-sans text-[clamp(2.5rem,6vw,3.5rem)] font-normal leading-height-s tracking-l text-grey-1 no-underline transition-colors hover:text-accent"
        >
          {content}
        </Link>
      )}
    </motion.div>
  )
}
