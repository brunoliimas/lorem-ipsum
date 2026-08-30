import Image from 'next/image'
import { Button, Container } from '../ds'

const stackLogos = [
  { src: '/assets/logos/react.svg', alt: 'React' },
  { src: '/assets/logos/next.svg', alt: 'Next.js' },
  { src: '/assets/logos/tailwind.svg', alt: 'Tailwind CSS' },
]

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-24">
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
      >
        <div className="absolute left-1/2 top-1/3 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-accent/10 blur-[140px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(0,85,255,0.08),transparent_50%)]" />
      </div>

      <Container className="relative flex min-h-[calc(100vh-6rem)] flex-col items-center justify-center py-20 text-center">
        <p className="mb-6 font-mono text-body-s uppercase tracking-widest text-grey-6">
          scroll for more
        </p>

        <h1 className="max-w-4xl text-h2 font-semibold tracking-tighter md:text-display-lg lg:text-display-xl">
          Desenvolvedor Full Stack
          <br />
          <span className="font-mono text-accent">[ Software ]</span>
          <br />
          para produtos digitais de impacto.
        </h1>

        <p className="mt-8 max-w-2xl text-body-l text-grey-6">
          Especializado em React, Next.js e TypeScript. Mais de 6 anos criando
          interfaces performáticas, acessíveis e escaláveis — do protótipo à
          produção.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button href="#projects" variant="primary">
            Ver projetos
          </Button>
          <Button href="/resume" variant="secondary">
            Currículo
          </Button>
        </div>

        <div className="mt-16 flex flex-col items-center gap-4">
          <div className="flex items-center gap-3">
            <Image
              src="/assets/team/avatar-02.png"
              width={40}
              height={40}
              alt="Bruno Lima"
              className="rounded-full border border-border"
            />
            <span className="text-body-s text-grey-6">
              Disponível para freelas e projetos fixos
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 opacity-60">
            {stackLogos.map((logo) => (
              <Image
                key={logo.alt}
                src={logo.src}
                width={28}
                height={28}
                alt={logo.alt}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
