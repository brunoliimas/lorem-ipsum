import Image from 'next/image'
import { Button, Container, SectionLabel } from '../ds'
import { SectionTypingTitle } from './SectionTypingTitle'

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
    <section id="projects" className="border-t border-grey-4 bg-grey-1 py-section">
      <Container>
        <SectionLabel index={4} total={8} label="projects" className="mb-8" />

        <SectionTypingTitle
          className="max-w-3xl text-h2"
          lines={['Projetos selecionados.', 'Código que entrega valor.']}
        />

        <div className="mt-16 grid gap-0 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group flex flex-col border border-grey-4 lg:border-r-0 lg:last:border-r"
            >
              <div className="relative min-h-[13rem] overflow-hidden bg-grey-2 p-6">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={400}
                  className="mx-auto block w-[90%] translate-y-[30%] object-cover grayscale transition-[filter,transform] duration-500 group-hover:scale-[1.02] group-hover:grayscale-0"
                />
              </div>
              <div className="flex flex-1 flex-col justify-between p-6">
                <div>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="bg-grey-3 px-1 py-0.5 font-mono text-body-xs font-medium uppercase text-grey-8"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <p className="mt-4 font-mono text-body-xs uppercase text-grey-8">
                    {project.subtitle}
                  </p>
                  <h3 className="mt-2 text-title-m font-medium">{project.title}</h3>
                </div>
                <div className="mt-6 border-t border-grey-9 pt-2">
                  <Button href={project.href} external variant="line" size="sm">
                    Ver projeto
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
