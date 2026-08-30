import { Button, Container, SectionLabel } from '../ds'
import { SectionTypingTitle } from './SectionTypingTitle'
import { ValueCard } from './ValueCard'

const capabilities = [
  {
    index: '001',
    title: 'Front-end moderno',
    description:
      'Interfaces responsivas com React, Next.js e Tailwind — foco em performance, acessibilidade e experiência do usuário.',
    tag: 'Menos atrito, mais entrega',
    icon: 'processing' as const,
  },
  {
    index: '002',
    title: 'Integrações & APIs',
    description:
      'Consumo e criação de APIs RESTful, automações e fluxos que conectam produto, design e backend sem retrabalho.',
    tag: 'Código que escala com o produto',
    icon: 'workflows' as const,
  },
  {
    index: '003',
    title: 'Entrega de ponta a ponta',
    description:
      'Do Figma ao deploy — testes, animações, CI/CD e infraestrutura cloud quando o projeto exige.',
    tag: 'Plug in, ship fast',
    icon: 'results' as const,
  },
]

export function AboutSection() {
  return (
    <section id="about" className="border-t border-grey-4 bg-grey-1 py-section">
      <Container>
        <div className="flex flex-wrap items-start justify-between gap-8">
          <div className="flex max-w-3xl flex-col gap-8">
            <SectionLabel index={1} total={8} label="key value" />
            <SectionTypingTitle
              lines={['Menos complexidade.', 'Mais execução inteligente.']}
            />
          </div>
          <Button href="#contact" variant="primary" className="shrink-0">
            Começar
          </Button>
        </div>

        <div className="mt-16 grid gap-0 md:grid-cols-3">
          {capabilities.map((item) => (
            <ValueCard key={item.index} {...item} />
          ))}
        </div>
      </Container>
    </section>
  )
}
