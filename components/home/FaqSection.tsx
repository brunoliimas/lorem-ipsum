'use client'

import { useState } from 'react'
import { Container, SectionLabel } from '../ds'
import { SectionTypingTitle } from './SectionTypingTitle'

const faqItems = [
  {
    index: '001',
    question: 'Que tipo de projeto você desenvolve?',
    answer:
      'Sites, landing pages, dashboards, integrações com APIs, plugins Figma e produtos web completos com React, Next.js e TypeScript — do protótipo ao deploy.',
  },
  {
    index: '002',
    question: 'Preciso ter o design pronto?',
    answer:
      'Não necessariamente. Posso trabalhar a partir de Figma, briefings escritos ou iterar junto com você no layout e nos fluxos antes de codar.',
  },
  {
    index: '003',
    question: 'Como funciona a integração com APIs?',
    answer:
      'Consumo e criação de endpoints REST, autenticação, webhooks e automações. Já integrei Veeva CRM, serviços AWS e fluxos internos em agências de saúde.',
  },
  {
    index: '004',
    question: 'Trabalha com minha stack atual?',
    answer:
      'Sim — React, Next.js, Node, Tailwind e ferramentas comuns do ecossistema front-end. Se a stack for diferente, avaliamos juntos a viabilidade antes de começar.',
  },
  {
    index: '005',
    question: 'Atende projetos em produção?',
    answer:
      'Sim. Entrego com foco em performance, acessibilidade, testes quando necessário e deploy em Vercel, AWS ou infraestrutura que o projeto exigir.',
  },
]

function FaqToggle({ open }: { open: boolean }) {
  return (
    <span
      className={`flex size-8 shrink-0 items-center justify-center transition-colors duration-300 ${
        open ? 'bg-accent text-grey-1' : 'bg-grey-9 text-grey-1'
      }`}
      aria-hidden="true"
    >
      {open ? (
        <svg viewBox="0 0 16 16" className="size-4" fill="none">
          <path d="M4 4l8 8M12 4 4 12" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      ) : (
        <svg viewBox="0 0 16 16" className="size-4" fill="none">
          <path d="M8 4v8M4 8h8" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      )}
    </span>
  )
}

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="border-t border-grey-4 bg-grey-1 py-section">
      <Container>
        <div className="max-w-3xl">
          <SectionLabel index={7} total={8} label="faqs" className="mb-8" />
          <SectionTypingTitle lines={['Tem dúvidas?', 'Temos respostas.']} />
        </div>

        <div className="mt-16 border-t border-grey-4">
          {faqItems.map((item, i) => {
            const open = openIndex === i

            return (
              <article key={item.index} className="relative border-b border-grey-4">
                <div
                  className={`pointer-events-none absolute inset-0 border-y border-accent bg-grey-2 opacity-0 transition-opacity duration-300 ${
                    open ? 'opacity-100' : ''
                  }`}
                  style={{
                    backgroundImage: open
                      ? 'radial-gradient(circle, #e0e0e0 1px, transparent 1px)'
                      : undefined,
                    backgroundSize: open ? '16px 16px' : undefined,
                  }}
                  aria-hidden="true"
                />

                <button
                  type="button"
                  className="relative z-[2] flex w-full items-start gap-4 px-4 py-4 text-left md:px-8 md:py-6"
                  aria-expanded={open}
                  onClick={() => setOpenIndex(open ? null : i)}
                >
                  <div className="hidden w-32 shrink-0 items-baseline gap-4 md:flex">
                    <span
                      className={`font-mono text-body-m font-medium transition-colors duration-300 ${
                        open ? 'text-accent' : 'text-grey-9'
                      }`}
                    >
                      //{item.index}
                    </span>
                    <span className="h-px flex-1 border-b border-dashed border-grey-4" />
                  </div>

                  <div className="flex flex-1 items-start justify-between gap-6">
                    <div className="flex-1">
                      <div className="mb-2 flex items-baseline gap-3 md:hidden">
                        <span
                          className={`font-mono text-body-s font-medium ${
                            open ? 'text-accent' : 'text-grey-9'
                          }`}
                        >
                          //{item.index}
                        </span>
                      </div>
                      <h3
                        className={`text-title-m transition-colors duration-300 md:pr-12 ${
                          open ? 'text-accent' : 'text-grey-9'
                        }`}
                      >
                        {item.question}
                      </h3>

                      <div
                        className={`grid transition-[grid-template-rows] duration-500 ease-out ${
                          open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                        }`}
                      >
                        <div className="overflow-hidden">
                          <p className="mt-3 max-w-[30rem] text-body-m text-grey-8 md:mt-4">
                            {item.answer}
                          </p>
                        </div>
                      </div>
                    </div>

                    <FaqToggle open={open} />
                  </div>
                </button>
              </article>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
