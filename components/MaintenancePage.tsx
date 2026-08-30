import Image from 'next/image'
import { Button, Marquee } from './ds'

const marqueeItems = [
  '#react',
  '#nextjs',
  '#typescript',
  '#software',
  '#development',
  '#portfolio',
]

export default function MaintenancePage() {
  return (
    <div className="flex min-h-screen flex-col bg-grey-1 text-grey-9">
        <header className="padding-global border-b border-grey-4">
          <div className="container-base flex items-center justify-between py-4">
            <Image src="/assets/logo.svg" width={32} height={32} alt="Bruno Lima" />
            <span className="bg-grey-3 px-2 py-0.5 font-mono text-body-xs uppercase text-grey-7">
              v2.0-beta
            </span>
          </div>
        </header>

        <main className="flex flex-1 flex-col items-center justify-center px-6 pb-16 text-center">
          <p className="mb-6 font-mono text-body-s uppercase text-accent">
            // rebuilding
          </p>

          <h1 className="max-w-2xl text-h2 leading-height-s tracking-l">
            Site em manutenção
          </h1>

          <p className="mt-6 max-w-md text-body-l leading-height-xl text-grey-7">
            Estamos preparando algumas novidades. Voltaremos em breve.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button href="https://wa.me/5511960744779" external variant="primary">
              Falar comigo
            </Button>
            <Button
              href="https://www.linkedin.com/in/brunoliimas/"
              external
              variant="line"
            >
              LinkedIn
            </Button>
          </div>
        </main>

        <Marquee items={marqueeItems} />

        <footer className="padding-global py-6 text-center font-mono text-body-xs text-grey-6">
          © {new Date().getFullYear()} Bruno Lima — Desenvolvedor de Software
        </footer>
      </div>
  )
}
