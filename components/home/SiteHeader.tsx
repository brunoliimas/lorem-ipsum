import Image from 'next/image'
import Link from 'next/link'
import { Button } from '../ds'

const navLinks = [
  { label: 'Sobre', href: '#about' },
  { label: 'Experiência', href: '#experience' },
  { label: 'Projetos', href: '#projects' },
  { label: 'Contato', href: '#contact' },
]

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between px-6 py-4 md:px-10">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/assets/logo.svg" width={28} height={28} alt="Bruno Lima" />
          <span className="hidden font-mono text-body-xs text-grey-6 sm:inline">
            v2.0-beta
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Principal">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-body-s uppercase tracking-wide text-grey-6 transition-colors hover:text-grey-1"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <Button href="#contact" variant="primary" size="sm">
          Contato
        </Button>
      </div>
    </header>
  )
}
