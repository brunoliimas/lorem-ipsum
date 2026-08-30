import { Container, SectionLabel } from '../ds'

const capabilities = [
  {
    index: '001',
    title: 'Front-end moderno',
    description:
      'Interfaces responsivas com React, Next.js e Tailwind — foco em performance, acessibilidade e UX.',
  },
  {
    index: '002',
    title: 'Integrações & APIs',
    description:
      'Consumo e criação de APIs RESTful, automações e fluxos que conectam produto, design e backend.',
  },
  {
    index: '003',
    title: 'Entrega de ponta a ponta',
    description:
      'Do Figma ao deploy — testes, animações, CI/CD e infraestrutura cloud quando o projeto exige.',
  },
]

export function AboutSection() {
  return (
    <section id="about" className="border-t border-border py-24 md:py-32">
      <Container>
        <SectionLabel index={1} total={6} label="about" className="mb-8" />

        <h2 className="max-w-3xl text-h2 font-semibold tracking-tighter md:text-h1">
          / Menos complexidade.
          <br />
          Mais execução inteligente. /
        </h2>

        <p className="mt-8 max-w-2xl text-body-l text-grey-6">
          Sou desenvolvedor de software com experiência em projetos de alto
          impacto no setor da saúde — McCann Health e Havas Life — incluindo
          ecossistema Veeva CRM, plugins Figma e automações de workflow.
        </p>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {capabilities.map((item) => (
            <article
              key={item.index}
              className="rounded-2xl border border-border bg-surface p-8 transition-colors hover:border-accent/40"
            >
              <p className="font-mono text-body-xs text-grey-7">// {item.index}</p>
              <h3 className="mt-4 text-title-m font-semibold text-grey-1">
                {item.title}
              </h3>
              <p className="mt-3 text-body-m text-grey-6">{item.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}
