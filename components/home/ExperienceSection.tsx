import { Container, SectionLabel } from '../ds'
import { SectionTypingTitle } from './SectionTypingTitle'

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
    <section id="experience" className="border-t border-grey-4 bg-grey-1 py-section">
      <Container>
        <SectionLabel index={2} total={8} label="experience" className="mb-8" />

        <SectionTypingTitle
          className="max-w-3xl text-h2"
          lines={['Experiência real.', 'Resultados mensuráveis.']}
        />

        <div className="relative mt-16">
          <div className="grid grid-cols-2 border border-grey-4 bg-grey-1 md:absolute md:-top-9 md:right-0 md:w-[35%] md:max-w-[28rem] md:grid-cols-2">
            {metrics.map((metric) => (
              <div
                key={metric.label}
                className="flex flex-col gap-4 border-b border-l border-grey-4 p-6"
              >
                <p className="text-title-l">{metric.value}</p>
                <p className="text-body-m text-grey-8">{metric.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 space-y-0 md:mt-0 md:w-[60%]">
            {experiences.map((exp) => (
              <article
                key={exp.company}
                className="flex flex-col gap-2 border-b border-grey-4 py-6 md:flex-row md:items-center md:justify-between"
              >
                <div>
                  <h3 className="text-title-m font-medium">{exp.role}</h3>
                  <p className="text-body-m text-accent">{exp.company}</p>
                </div>
                <div className="md:text-right">
                  <p className="font-mono text-body-s text-grey-6">{exp.period}</p>
                  <p className="mt-1 text-body-s text-grey-8">{exp.highlight}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
