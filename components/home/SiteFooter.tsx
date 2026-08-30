import Image from 'next/image'
import Link from 'next/link'
import { Container } from '../ds'

export function SiteFooter() {
  return (
    <footer className="border-t border-border py-10">
      <Container className="flex flex-col items-center justify-between gap-6 md:flex-row">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/assets/logo.svg" width={24} height={24} alt="Bruno Lima" />
          <span className="text-body-s text-grey-6">Bruno Lima</span>
        </Link>

        <p className="font-mono text-body-xs text-grey-7">
          © {new Date().getFullYear()} — Desenvolvedor de Software
        </p>

        <Link
          href="/style-guide"
          className="font-mono text-body-xs text-grey-7 transition-colors hover:text-accent"
        >
          Style Guide
        </Link>
      </Container>
    </footer>
  )
}
