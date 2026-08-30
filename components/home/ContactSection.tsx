import { BsGithub, BsLinkedin, BsWhatsapp } from 'react-icons/bs'
import { HiOutlineMail } from 'react-icons/hi'
import { Button, Container, SectionLabel } from '../ds'

const socialLinks = [
  {
    href: 'https://wa.me/5511960744779',
    label: 'WhatsApp',
    icon: BsWhatsapp,
  },
  {
    href: 'https://www.linkedin.com/in/brunoliimas/',
    label: 'LinkedIn',
    icon: BsLinkedin,
  },
  {
    href: 'https://github.com/brunoliimas',
    label: 'GitHub',
    icon: BsGithub,
  },
  {
    href: 'mailto:ibrunoliimas@gmail.com',
    label: 'E-mail',
    icon: HiOutlineMail,
  },
]

export function ContactSection() {
  return (
    <section id="contact" className="border-t border-border py-24 md:py-32">
      <Container className="text-center">
        <SectionLabel index={5} total={6} label="contact" className="mb-8 justify-center" />

        <h2 className="text-h2 font-semibold tracking-tighter md:text-h1">
          / Vamos construir
          <br />
          <span className="font-mono text-accent">[ algo incrível ]</span> /
        </h2>

        <p className="mx-auto mt-6 max-w-lg text-body-l text-grey-6">
          Disponível para freelas, projetos fixos ou colaborações remotas.
          Entre em contato e vamos conversar sobre o seu próximo projeto.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button
            href="https://wa.me/5511960744779?text=Ol%C3%A1%2C+tudo+bem%3F"
            external
            variant="primary"
          >
            Falar no WhatsApp
          </Button>
          <Button href="/resume" variant="secondary">
            Ver currículo completo
          </Button>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
          {socialLinks.map(({ href, label, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-surface text-grey-1 transition-colors hover:border-accent hover:text-accent"
            >
              <Icon size={22} />
            </a>
          ))}
        </div>
      </Container>
    </section>
  )
}
