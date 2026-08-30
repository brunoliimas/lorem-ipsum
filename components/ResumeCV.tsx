import Image from 'next/image'
import Link from 'next/link'
import { BsGithub, BsLinkedin, BsWhatsapp } from 'react-icons/bs'
import { HiOutlineMail } from 'react-icons/hi'
import { Button, Container } from './ds'
import { HeroGridArea } from './home/HeroGridArea'
import { SiteFooter } from './home/SiteFooter'
import { ResumeData } from '../resumeData'

interface ResumeCVProps {
  resumeData: ResumeData
}

const socialIcons = {
  BsWhatsapp,
  BsLinkedin,
  BsGithub,
  HiOutlineMail,
} as const

function formatPeriod(entry: string, exit: string) {
  const format = (value: string) => {
    const [year, month] = value.split('-')
    if (!month) return year

    const date = new Date(Number(year), Number(month) - 1)
    return date.toLocaleDateString('pt-BR', { month: 'short', year: 'numeric' })
  }

  return `${format(entry)} — ${format(exit)}`
}

function ResumeSectionTitle({ label, title }: { label: string; title: string }) {
  return (
    <div className="mb-10">
      <p className="font-mono text-body-xs uppercase text-grey-7">// {label}</p>
      <h2 className="mt-4 text-h4 leading-height-s tracking-l md:text-h3">
        <span className="heading-slash">/</span> {title}{' '}
        <span className="heading-slash">/</span>
      </h2>
    </div>
  )
}

function Tag({ name }: { name: string }) {
  return (
    <span className="bg-grey-3 px-1.5 py-0.5 font-mono text-body-xs font-medium uppercase text-grey-8">
      {name}
    </span>
  )
}

export default function ResumeCV({ resumeData }: ResumeCVProps) {
  const { profile, works, academicEducation, certifications } = resumeData

  return (
    <div className="min-h-screen bg-grey-1 text-grey-9">
      <header className="border-b border-grey-4 padding-global py-6">
        <div className="container-base grid grid-cols-[1fr_auto_1fr] items-center gap-4">
          <div className="justify-self-start">
            <Button href="/" variant="line" size="sm" direction="back">
              Voltar
            </Button>
          </div>

          <Link href="/" className="flex items-center gap-3 justify-self-center">
            <Image src="/assets/logo.svg" width={28} height={28} alt="Bruno Lima" />
            <span className="hidden font-mono text-body-xs uppercase text-grey-7 sm:inline">
              v2.0-beta
            </span>
          </Link>

          <div className="justify-self-end">
            <Button
              href="/assets/Curriculo_Bruno_Lima_ATS.pdf"
              download="Currículo - Bruno Lima"
              variant="primary"
              size="sm"
            >
              Baixar PDF
            </Button>
          </div>
        </div>
      </header>

      <main>
        <HeroGridArea as="section" className="border-b border-grey-4 py-section-sm md:py-section">
          <Container>
            <div className="flex flex-col items-start gap-8 md:flex-row md:items-center">
              <Image
                src="/assets/team/avatar-02.png"
                width={96}
                height={96}
                alt={profile.name}
                className="size-24 shrink-0 rounded-full border border-grey-4 object-cover"
              />
              <div className="flex-1">
                <p className="font-mono text-body-xs uppercase text-grey-6">Currículo</p>
                <h1 className="mt-2 text-h3 leading-height-s tracking-l md:text-h2">
                  {profile.name}
                </h1>
                <p className="mt-2 text-title-m text-grey-4">{profile.occupation}</p>
                <p className="mt-1 font-mono text-body-s text-grey-6">{profile.city}</p>
                <p className="mt-4 inline-block bg-grey-3 px-2 py-1 font-mono text-body-xs uppercase text-accent">
                  Disponível para novos projetos
                </p>
              </div>
            </div>
          </Container>
        </HeroGridArea>

        <Container className="py-section">
          <article className="max-w-3xl space-y-4 border-b border-grey-4 pb-section">
            {profile.description.map((paragraph, index) => (
              <p key={index} className="text-body-l leading-height-xl text-grey-8">
                {paragraph}
              </p>
            ))}
          </article>

          <section className="py-section">
            <ResumeSectionTitle label="experience" title="Experiência profissional" />

            <div className="space-y-0 border border-grey-4">
              {works.map((work, index) => (
                <article
                  key={`${work.companyName}-${work.entry}`}
                  className={`p-6 md:p-8 ${index > 0 ? 'border-t border-grey-4' : ''}`}
                >
                  <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                    <div>
                      <h3 className="text-title-m font-medium">
                        {work.occupation}{' '}
                        <span className="text-grey-7">— {work.level}</span>
                      </h3>
                      <p className="mt-1 text-body-m text-accent">{work.companyName}</p>
                    </div>
                    <p className="shrink-0 font-mono text-body-s uppercase text-grey-7">
                      {formatPeriod(work.entry, work.exit)}
                    </p>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {work.tools.map((tool) => (
                      <Tag key={tool} name={tool} />
                    ))}
                  </div>

                  <div className="mt-8 grid gap-8 md:grid-cols-2">
                    <div>
                      <h4 className="font-mono text-body-xs uppercase text-grey-7">
                        Funções exercidas
                      </h4>
                      <ul className="mt-4 space-y-3">
                        {work.roles.map((role) => (
                          <li
                            key={role}
                            className="relative pl-4 text-body-m text-grey-8 before:absolute before:left-0 before:top-[0.55em] before:size-1.5 before:bg-accent"
                          >
                            {role}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-mono text-body-xs uppercase text-grey-7">
                        Conhecimentos adquiridos
                      </h4>
                      <ul className="mt-4 space-y-3">
                        {work.knowledge.map((item) => (
                          <li
                            key={item}
                            className="relative pl-4 text-body-m text-grey-8 before:absolute before:left-0 before:top-[0.55em] before:size-1.5 before:bg-grey-5"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="border-t border-grey-4 py-section">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-0 lg:divide-x lg:divide-grey-4">
              <div className="lg:pr-12">
                <ResumeSectionTitle label="education" title="Formação" />
                <div className="space-y-8">
                  {academicEducation.map((item) => (
                    <article key={`${item.schoolName}-${item.specialization}`}>
                      <h3 className="text-title-m font-medium">{item.specialization}</h3>
                      <p className="mt-1 text-body-m text-accent">{item.schoolName}</p>
                      <p className="mt-2 font-mono text-body-s text-grey-7">{item.time}</p>
                      <p className="mt-1 text-body-s text-grey-8">{item.status}</p>
                    </article>
                  ))}
                </div>
              </div>

              <div className="lg:pl-12">
                <ResumeSectionTitle label="certifications" title="Certificados" />
                <div className="space-y-8">
                  {certifications.map((item) => (
                    <article key={`${item.schoolName}-${item.specialization}`}>
                      <h3 className="text-title-m font-medium leading-height-l">
                        {item.specialization}
                      </h3>
                      <p className="mt-2 text-body-m text-accent">{item.schoolName}</p>
                      {item.duration && (
                        <p className="mt-2 font-mono text-body-s text-grey-7">{item.duration}</p>
                      )}
                      <p className="mt-1 text-body-s text-grey-8">{item.status}</p>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="border-t border-grey-4 py-section">
            <ResumeSectionTitle label="contact" title="Contato" />

            <div className="grid gap-3 sm:grid-cols-2">
              {profile.socialLinks.map((link) => {
                const Icon = socialIcons[link.icon as keyof typeof socialIcons]

                return (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 border border-grey-4 bg-grey-1 p-4 transition-colors hover:border-accent"
                  >
                    <span className="flex size-11 items-center justify-center border border-grey-4 bg-grey-2 text-grey-9 transition-colors group-hover:border-accent group-hover:text-accent">
                      {Icon && <Icon size={20} />}
                    </span>
                    <span className="font-mono text-body-s text-grey-8 group-hover:text-grey-9">
                      {link.name}
                    </span>
                  </a>
                )
              })}
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button
                href="/assets/Curriculo_Bruno_Lima_ATS.pdf"
                download="Currículo - Bruno Lima"
                variant="primary"
              >
                Baixar currículo
              </Button>
              <Button href="/#contact" variant="line">
                Falar comigo
              </Button>
            </div>
          </section>
        </Container>
      </main>

      <SiteFooter />
    </div>
  )
}
