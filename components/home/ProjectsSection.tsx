import Image from 'next/image'
import { Button, Container, SectionLabel } from '../ds'

const projects = [
  {
    title: 'Superflix',
    subtitle: 'Consumo de API — TheMovieDB',
    href: 'https://github.com/brunoliimas/superflix',
    image: '/assets/works/superflix_react.png',
    stack: ['React', 'Axios', 'React Router'],
  },
  {
    title: 'Pizzaria Comanda',
    subtitle: 'Sistema de pedidos — Desktop & Mobile',
    href: 'https://github.com/brunoliimas/pizzaria-udemy',
    image: '/assets/works/pizzaria_comanda.png',
    stack: ['Next.js', 'Prisma', 'React Native'],
  },
  {
    title: 'Parallax GSAP',
    subtitle: 'Site com animações ao scroll',
    href: 'https://parallax-gsap.vercel.app/',
    image: '/assets/works/parallax.png',
    stack: ['Next.js', 'GSAP', 'Tailwind'],
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="border-t border-border py-24 md:py-32">
      <Container>
        <SectionLabel index={3} total={6} label="projects" className="mb-8" />

        <h2 className="max-w-3xl text-h2 font-semibold tracking-tighter md:text-h1">
          / Projetos selecionados.
          <br />
          Código que entrega valor. /
        </h2>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group overflow-hidden rounded-2xl border border-border bg-surface transition-colors hover:border-accent/40"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-surface-elevated">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <p className="font-mono text-body-xs text-grey-7">
                  {project.subtitle}
                </p>
                <h3 className="mt-2 text-title-m font-semibold text-grey-1">
                  {project.title}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-border px-3 py-1 font-mono text-body-xs text-grey-6"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-6">
                  <Button href={project.href} external variant="ghost" size="sm">
                    Ver projeto →
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}
