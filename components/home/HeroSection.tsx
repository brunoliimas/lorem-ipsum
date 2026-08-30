import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react'
import { Button, Container } from '../ds'
import { useSectionScrollProgress } from '../../hooks/useSectionScrollProgress'
import { HeroGridTrail } from './HeroGridTrail'
import { HeroPixelStrip } from './HeroPixelStrip'
import { HeroTypingHighlight } from './HeroTypingHighlight'

const stackLogos = [
  { src: '/assets/logos/react.svg', alt: 'React' },
  { src: '/assets/logos/next.svg', alt: 'Next.js' },
  { src: '/assets/logos/tailwind.png', alt: 'Tailwind CSS' },
]

const partnerLogos = [
  { src: '/assets/logos/logo-01.svg', alt: 'Partner 01' },
  { src: '/assets/logos/logo-02.svg', alt: 'Partner 02' },
  { src: '/assets/logos/logo-03.svg', alt: 'Partner 03' },
  { src: '/assets/logos/logo-04.svg', alt: 'Partner 04' },
  { src: '/assets/logos/logo-05.svg', alt: 'Partner 05' },
  { src: '/assets/logos/logo-06.svg', alt: 'Partner 06' },
]

function HeroDarkTopBar() {
  return (
    <div className="flex items-end justify-between gap-4">
      <Link href="/" className="flex items-end gap-3">
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

      <p className="flex shrink-0 items-center gap-2 font-mono text-body-xs uppercase text-grey-6">
        scroll for more
        <span aria-hidden="true">↓</span>
      </p>
    </div>
  )
}

function HeroHeadline({
  style,
  className = '',
}: {
  style?: React.CSSProperties
  className?: string
}) {
  return (
    <h1
      className={`w-full md:w-1/2 text-h2 leading-height-s tracking-l lg:text-h1 ${className}`}
      style={style}
    >
      Desenvolvedor Full Stack 
      <br />
      <HeroTypingHighlight /> 
      <br />
      para produtos digitais de impacto.
    </h1>
  )
}

function HeroAside() {
  return (
    <div className="flex w-full max-w-[36rem] flex-col gap-8">
      <div className="flex flex-wrap items-center gap-4">
        <Image
          src="/assets/team/avatar-02.png"
          width={48}
          height={48}
          alt="Bruno Lima"
          className="size-12 shrink-0 rounded-full border border-grey-4 object-cover"
        />
        <p className="text-body-s font-medium text-grey-7">
          Disponível para{' '}
          <span className="font-semibold text-grey-8">freelas</span> e projetos fixos
        </p>
      </div>

      <p className="text-body-l leading-height-xl text-grey-8">
        Especializado em React, Next.js e TypeScript. Mais de 6 anos criando
        interfaces performáticas, acessíveis e escaláveis — do protótipo à produção.
      </p>

      <div className="flex flex-wrap items-center gap-4">
        <Button href="#projects" variant="primary">
          Ver projetos
        </Button>
        <Button href="/resume" variant="line">
          Currículo
        </Button>
      </div>

      <div className="flex flex-wrap items-center gap-6 opacity-80">
        {stackLogos.map((logo) => (
          <Image
            key={logo.alt}
            src={logo.src}
            width={28}
            height={28}
            alt={logo.alt}
            className="size-7 object-contain"
          />
        ))}
      </div>
    </div>
  )
}

function HeroLogoBar() {
  return (
    <div className="border-y border-grey-4 bg-grey-1">
      <Container>
        <div className="grid grid-cols-2 divide-x divide-grey-4 border-x border-grey-4 sm:grid-cols-3 lg:grid-cols-6">
          {partnerLogos.map((logo) => (
            <div
              key={logo.alt}
              className="flex h-20 items-center justify-center px-4 opacity-50 grayscale transition-opacity hover:opacity-80"
            >
              <Image
                src={logo.src}
                width={100}
                height={32}
                alt={logo.alt}
                className="h-8 w-auto max-w-full object-contain"
              />
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

function HeroStatic() {
  const gridRef = useRef<HTMLDivElement>(null)

  return (
    <div className="lg:motion-safe:hidden" data-hero-static>
      <section className="bg-grey-1">
        <div ref={gridRef} className="hero-grid relative bg-grey-9 pb-8 pt-28 md:pt-32">
          <HeroGridTrail trackRef={gridRef} />
          <Container className="relative z-10 pointer-events-none [&_a]:pointer-events-auto">
            <HeroDarkTopBar />
          </Container>
        </div>
        <Container className="flex w-full flex-col gap-12 py-section-sm">
          <HeroHeadline />
          <HeroAside />
        </Container>
        <HeroLogoBar />
        <HeroPixelStrip />
      </section>
    </div>
  )
}

function HeroParallax() {
  const sectionRef = useRef<HTMLElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)
  const progress = useSectionScrollProgress(sectionRef, { stickyRatio: 0 })

  const panelTop = 38 - progress * 38
  const gridShift = progress * -20
  const showExtras = progress >= 0.55

  return (
    <section
      id="hero-parallax"
      ref={sectionRef}
      className="relative hidden bg-grey-1 lg:motion-safe:block"
      style={{ height: '200vh' }}
      aria-label="Introdução"
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        <div
          ref={gridRef}
          className="hero-grid absolute inset-x-0 top-0 bg-grey-9 text-grey-1"
          style={{
            height: `${Math.max(22, 38 - progress * 16)}%`,
            transform: `translate3d(0, ${gridShift}px, 0)`,
          }}
        >
          <HeroGridTrail trackRef={gridRef} />
          <Container className="relative z-10 flex h-full flex-col pt-28 pb-6 pointer-events-none [&_a]:pointer-events-auto">
            <HeroDarkTopBar />
          </Container>
        </div>

        <div
          className="absolute inset-x-0 z-10 overflow-y-auto bg-grey-1"
          style={{ top: `${panelTop}%`, bottom: 0 }}
        >
          <Container className="pb-10 pt-8 md:pt-12">
            <div className="flex max-full gap-10 md:gap-12">
              <HeroHeadline />
              <HeroAside />
            </div>
          </Container>

          {showExtras && (
            <div style={{ opacity: Math.min(1, (progress - 0.55) / 0.25) }}>
              <HeroLogoBar />
              <HeroPixelStrip />
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export function HeroSection() {
  return (
    <>
      <HeroStatic />
      <HeroParallax />
    </>
  )
}
