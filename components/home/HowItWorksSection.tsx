import { useMemo, useRef } from 'react'
import { Button, Container, SectionLabel } from '../ds'
import { useSectionScrollProgress } from '../../hooks/useSectionScrollProgress'
import { HiwIconVariant, HiwStepIcon } from './HiwStepIcon'
import { SectionTypingTitle } from './SectionTypingTitle'

const steps: {
  index: string
  title: string
  description: string
  icon: HiwIconVariant
}[] = [
  {
    index: '001',
    title: 'Entender o contexto',
    description:
      'Briefing, requisitos e alinhamento com stakeholders — entender o problema antes de escrever código.',
    icon: 'input',
  },
  {
    index: '002',
    title: 'Arquitetar & construir',
    description:
      'Transformo requisitos em componentes, APIs e fluxos claros — com foco em performance e manutenção.',
    icon: 'process',
  },
  {
    index: '003',
    title: 'Entregar valor',
    description:
      'Deploy, testes e handoff — entregas prontas para uso, refinamento ou escala no produto.',
    icon: 'results',
  },
  {
    index: '004',
    title: 'Iterar & evoluir',
    description:
      'Feedback, ajustes e melhorias contínuas — o produto evolui junto com as necessidades do negócio.',
    icon: 'refine',
  },
]

function stepActive(progress: number, index: number, total: number) {
  const threshold = index / total
  const nextThreshold = (index + 1) / total
  if (progress >= nextThreshold) return 1
  if (progress <= threshold) return 0
  return (progress - threshold) / (nextThreshold - threshold)
}

export function HowItWorksSection() {
  const rayRef = useRef<HTMLElement>(null)
  const progress = useSectionScrollProgress(rayRef, { stickyRatio: 0.1 })

  const activeSteps = useMemo(
    () => steps.map((_, i) => progress >= i / steps.length),
    [progress],
  )

  return (
    <>
      {/* Desktop — scroll-driven */}
      <section
        ref={rayRef}
        id="process"
        className="relative hidden lg:block"
        style={{ height: '200vh' }}
        aria-label="Como trabalho"
      >
        <div className="sticky top-[10vh] pb-section">
          <Container>
            <div className="flex flex-wrap items-start justify-between gap-8">
              <div className="flex max-w-3xl flex-col gap-8">
                <SectionLabel index={3} total={8} label="how it work" />
                <SectionTypingTitle
                  lines={['Entenda o fluxo.', 'Veja como tudo se conecta.']}
                />
              </div>
              <Button href="#contact" variant="primary" className="shrink-0">
                Contato
              </Button>
            </div>

            <div className="relative mt-16 border-t border-b border-grey-4">
              {/* Progress track */}
              <div
                className="pointer-events-none absolute inset-x-0 top-1/2 z-20 -translate-y-1/2"
                aria-hidden="true"
              >
                <div className="relative h-6 overflow-hidden border-y border-grey-4 bg-grey-2">
                  <div
                    className="absolute inset-0 opacity-40"
                    style={{
                      backgroundImage:
                        'repeating-linear-gradient(90deg, transparent, transparent 6px, #ccc 6px, #ccc 7px)',
                    }}
                    aria-hidden="true"
                  />
                  <div
                    className="absolute inset-y-0 left-0 bg-accent will-change-[width]"
                    style={{ width: `${progress * 100}%` }}
                  />
                  {steps.map((_, i) => {
                    const dotActive = progress >= (i + 1) / steps.length
                    return (
                      <span
                        key={i}
                        className="absolute top-0 h-full w-2 bg-accent transition-opacity duration-200"
                        style={{
                          left: `${((i + 1) / steps.length) * 100}%`,
                          opacity: dotActive ? 1 : 0,
                        }}
                      />
                    )
                  })}
                </div>
              </div>

              <div className="grid grid-cols-4">
                {steps.map((step, i) => {
                  const active = activeSteps[i]
                  const fade = stepActive(progress, i, steps.length)

                  return (
                    <article
                      key={step.index}
                      className="relative flex min-h-[24rem] border-r border-grey-4 p-4 last:border-r-0"
                    >
                      <div
                        className="flex w-full flex-col justify-between transition-opacity duration-300"
                        style={{ opacity: 0.3 + fade * 0.7 }}
                      >
                        <div className="flex min-h-[8.5rem] flex-col gap-3">
                          <span
                            className={`font-mono text-body-m font-medium transition-colors duration-300 ${
                              active ? 'text-accent' : 'text-grey-6'
                            }`}
                          >
                            //{step.index}
                          </span>
                          <p
                            className="max-w-[14rem] text-body-s text-grey-8 transition-opacity duration-300"
                            style={{ opacity: active ? 1 : 0 }}
                          >
                            {step.description}
                          </p>
                        </div>

                        <div className="flex items-end justify-between gap-4 pt-16">
                          <h3
                            className={`text-title-m transition-colors duration-300 ${
                              active ? 'font-medium text-accent' : 'text-grey-6'
                            }`}
                          >
                            {step.title}
                          </h3>
                          <HiwStepIcon variant={step.icon} active={active} />
                        </div>
                      </div>
                    </article>
                  )
                })}
              </div>
            </div>
          </Container>
        </div>
      </section>

      {/* Mobile / tablet — static fallback */}
      <section
        id="process-mobile"
        className="border-t border-grey-4 bg-grey-1 py-section lg:hidden"
        aria-label="Como trabalho"
      >
        <Container>
          <div className="flex flex-col gap-8">
            <SectionLabel index={3} total={8} label="how it work" />
            <SectionTypingTitle
              className="text-h3"
              lines={['Entenda o fluxo.', 'Veja como tudo se conecta.']}
            />
          </div>

          <div className="mt-12 space-y-0 border border-grey-4">
            {steps.map((step, i) => (
              <article
                key={step.index}
                className="border-b border-grey-4 p-6 last:border-b-0"
              >
                <span className="font-mono text-body-s font-medium text-accent">
                  //{step.index}
                </span>
                <p className="mt-3 text-body-s text-grey-8">{step.description}</p>
                <div className="mt-6 flex items-end justify-between gap-4">
                  <h3 className="text-title-m font-medium text-accent">{step.title}</h3>
                  <HiwStepIcon variant={step.icon} active />
                </div>
                {i < steps.length - 1 && (
                  <div className="mt-6 h-1 w-full bg-accent" aria-hidden="true" />
                )}
              </article>
            ))}
          </div>

          <div className="mt-8">
            <Button href="#contact" variant="primary">
              Contato
            </Button>
          </div>
        </Container>
      </section>
    </>
  )
}
