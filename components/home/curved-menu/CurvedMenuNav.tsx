import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { menuSlide } from './anim'
import { CurvedMenuCurve } from './CurvedMenuCurve'
import { CurvedMenuFooter } from './CurvedMenuFooter'
import { CurvedMenuLink } from './CurvedMenuLink'

const navItems = [
  { title: 'Home', href: '/' },
  { title: 'Sobre', href: '#about' },
  { title: 'Experiência', href: '#experience' },
  { title: 'Projetos', href: '#projects' },
  { title: 'Contato', href: '#contact' },
]

interface CurvedMenuNavProps {
  activePath: string
  onClose: () => void
}

export function CurvedMenuNav({ activePath, onClose }: CurvedMenuNavProps) {
  const [selectedIndicator, setSelectedIndicator] = useState(activePath)

  return (
    <motion.div
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className="curved-menu-panel fixed inset-y-0 right-0 z-[1000] h-screen w-full max-w-[32rem] overflow-visible bg-grey-9 text-grey-1 sm:w-[55vw] sm:max-w-none"
    >
      <div className="flex h-full flex-col justify-between px-10 pb-16 pt-28 md:px-24 md:pt-32">
        <div>
          <Link
            href="/"
            onClick={onClose}
            className="mb-12 inline-flex items-end gap-3 no-underline"
          >
            <Image
              src="/assets/logo.svg"
              width={32}
              height={32}
              alt="Bruno Lima"
              className="brightness-0 invert"
            />
            <span className="hidden bg-grey-8 px-1.5 py-0.5 font-mono text-body-xs uppercase text-grey-6 sm:inline">
              v2.0-beta
            </span>
          </Link>

          <nav
            className="flex flex-col gap-3"
            aria-label="Menu principal"
            onMouseLeave={() => setSelectedIndicator(activePath)}
          >
            <p className="mb-8 border-b border-grey-8 pb-4 font-mono text-body-xs uppercase text-grey-6">
              Navegação
            </p>

            {navItems.map((item, index) => (
              <CurvedMenuLink
                key={item.href}
                title={item.title}
                href={item.href}
                index={index}
                isActive={selectedIndicator === item.href}
                onHover={() => setSelectedIndicator(item.href)}
                onNavigate={onClose}
              />
            ))}
          </nav>
        </div>

        <CurvedMenuFooter />
      </div>

      <CurvedMenuCurve />
    </motion.div>
  )
}
