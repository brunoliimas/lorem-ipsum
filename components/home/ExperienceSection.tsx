import { Container, SectionLabel } from '../ds'

const metrics = [
  { value: '6+', label: 'Anos de experiência' },
  { value: '4', label: 'Empresas & agências' },
  { value: '5+', label: 'Projetos em destaque' },
  { value: '100%', label: 'Foco em qualidade' },
]

const experiences = [
  {
    company: 'Havas Life',
    role: 'Desenvolvedor Full Stack Jr',
    period: '2023 — 2025',
    highlight: 'React, Next.js, Veeva CRM, AWS, Figma plugins',
  },
  {
    company: 'McCann Health',
    role: 'Desenvolvedor Front End Pleno',
    period: '2020 — 2023',
    highlight: 'Campanhas digitais saúde, GSAP, Veeva Visual Aids',
  },
  {
    company: 'Tango Tech',
    role: 'Front End & UI Designer',
    period: '2019 — 2020',
    highlight: 'Marketplace React/Vue, Cypress, CI/CD',
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="border-t border-border py-24 md:py-32">
      <Container>
        <SectionLabel index={2} total={6} label="experience" className="mb-8" />

        <h2 className="max-w-3xl text-h2 font-semibold tracking-tighter md:text-h1">
          / Experiência real.
          <br />
          Resultados mensuráveis. /
        </h2>

        <div className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-4">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="rounded-2xl border border-border bg-surface p-6 text-center"
            >
              <p className="text-h2 font-semibold text-accent md:text-h1">
                {metric.value}
              </p>
              <p className="mt-2 text-body-s text-grey-6">{metric.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 space-y-4">
          {experiences.map((exp) => (
            <article
              key={exp.company}
              className="flex flex-col gap-2 rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-accent/30 md:flex-row md:items-center md:justify-between"
            >
              <div>
                <h3 className="text-title-m font-semibold text-grey-1">
                  {exp.role}
                </h3>
                <p className="text-body-m text-accent">{exp.company}</p>
              </div>
              <div className="md:text-right">
                <p className="font-mono text-body-s text-grey-6">{exp.period}</p>
                <p className="mt-1 text-body-s text-grey-7">{exp.highlight}</p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}
