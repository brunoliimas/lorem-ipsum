import Head from 'next/head'
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
    <>
      <Head>
        <title>Site em manutenção | Bruno Lima</title>
        <meta
          name="description"
          content="Estamos preparando algumas novidades. Voltaremos em breve."
        />
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <div className="relative flex min-h-screen flex-col bg-background">
        <div
          className="pointer-events-none absolute inset-0 overflow-hidden"
          aria-hidden="true"
        >
          <div className="absolute -left-1/4 top-0 h-[500px] w-[500px] rounded-full bg-accent/10 blur-[120px]" />
          <div className="absolute -right-1/4 bottom-0 h-[400px] w-[400px] rounded-full bg-accent/5 blur-[100px]" />
        </div>

        <header className="relative z-10 flex items-center justify-between px-6 py-6 md:px-10">
          <Image
            src="/assets/logo.svg"
            width={32}
            height={32}
            alt="Bruno Lima"
            className="opacity-90"
          />
          <span className="rounded-full border border-border bg-surface px-3 py-1 font-mono text-body-xs text-grey-6">
            v2.0-beta
          </span>
        </header>

        <main className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 pb-16 text-center">
          <p className="mb-6 font-mono text-body-s uppercase tracking-widest text-accent">
            // rebuilding
          </p>

          <h1 className="max-w-2xl text-h2 font-semibold tracking-tighter text-grey-1 md:text-display-lg">
            Site em manutenção
          </h1>

          <p className="mt-6 max-w-md text-body-l text-grey-6">
            Estamos preparando algumas novidades. Voltaremos em breve.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button href="https://wa.me/5511960744779" external variant="primary">
              Falar comigo
            </Button>
            <Button
              href="https://www.linkedin.com/in/brunoliimas/"
              external
              variant="secondary"
            >
              LinkedIn
            </Button>
          </div>
        </main>

        <Marquee items={marqueeItems} className="relative z-10" />

        <footer className="relative z-10 px-6 py-6 text-center font-mono text-body-xs text-grey-7 md:px-10">
          © {new Date().getFullYear()} Bruno Lima — Desenvolvedor de Software
        </footer>
      </div>
    </>
  )
}
