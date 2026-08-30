import { useRef } from 'react'
import { BsGithub, BsLinkedin, BsWhatsapp } from 'react-icons/bs'
import { HiOutlineMail } from 'react-icons/hi'
import { Button, Container, SectionLabel } from '../ds'
import { HeroGridArea } from './HeroGridArea'
import { useInViewOnce } from '../../hooks/useInViewOnce'
import { useTypingOnce } from '../../hooks/useTypingOnce'
import { TypingCaret } from './TypingCaret'

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

function ContactCardCorners() {
  const positions = [
    'left-4 top-4 md:left-6 md:top-6',
    'right-4 top-4 md:right-6 md:top-6',
    'bottom-4 left-4 md:bottom-6 md:left-6',
    'bottom-4 right-4 md:bottom-6 md:right-6',
  ]

  return (
    <>
      {positions.map((position) => (
        <span
          key={position}
          className={`absolute ${position} size-2 bg-grey-9`}
          aria-hidden="true"
        />
      ))}
    </>
  )
}

function ContactCtaTitle() {
  const ref = useRef<HTMLHeadingElement>(null)
  const inView = useInViewOnce(ref)
  const { displayed } = useTypingOnce('algo incrível', { enabled: inView })

  return (
    <h2
      ref={ref}
      className="mx-auto mt-6 max-w-2xl text-h2 leading-height-s tracking-l md:text-h1"
      aria-label="Vamos construir, algo incrível, Entre em contato hoje!"
    >
      Vamos construir,
      <br />
      <span className="heading-highlight whitespace-nowrap">
        [{' '}
        <span aria-live="polite" className="inline-flex items-baseline">
          {displayed}
          {inView && <TypingCaret />}
        </span>
        {' '}]
      </span>
      <br />
      Entre em contato hoje!
    </h2>
  )
}

export function ContactSection() {
  return (
    <HeroGridArea as="section" id="contact" className="border-t border-grey-4 py-section">
      <Container>
        <SectionLabel index={8} total={8} label="contact" className="mb-10" />

        <div className="relative mx-auto max-w-4xl border border-grey-4 bg-grey-1 px-6 py-14 text-center text-grey-9 md:px-12 md:py-20">
          <ContactCardCorners />

          <p className="font-mono text-body-xs uppercase tracking-[0.08em] text-grey-6">
            Comece em minutos
          </p>

          <ContactCtaTitle />

          <p className="mx-auto mt-6 max-w-md text-body-m text-grey-7">
            Disponível para freelas, projetos fixos ou colaborações remotas.
          </p>

          <div className="mt-10 flex justify-center">
            <Button
              href="https://wa.me/5511960744779?text=Ol%C3%A1%2C+tudo+bem%3F"
              external
              variant="primary"
            >
              Falar no WhatsApp
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            {socialLinks.map(({ href, label, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex size-11 items-center justify-center border border-grey-4 bg-grey-1 text-grey-9 transition-colors hover:border-accent hover:text-accent"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </Container>
    </HeroGridArea>
  )
}
