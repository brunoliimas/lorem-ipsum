import Image from 'next/image'
import {
  formatBRL,
  formatQuoteDate,
  jobDevEstimate,
  jobPublication,
  jobsInWave,
  publicationLabel,
  quoteData,
  quoteJobs,
  quoteWaves,
  totalDevEstimate,
  totalEstimate,
  totalPublication,
  totalScreens,
} from '../../quoteData'
import { Button, Container } from '../ds'
import { HeroGridArea } from '../home/HeroGridArea'
import { DownloadQuoteButton } from './DownloadQuoteButton'

function QuoteSectionTitle({ label, title }: { label: string; title: string }) {
  return (
    <div className="mb-8">
      <p className="font-mono text-body-xs uppercase text-grey-7">// {label}</p>
      <h2 className="mt-3 text-h4 leading-height-s tracking-l md:text-h3">
        <span className="heading-slash">/</span> {title}{' '}
        <span className="heading-slash">/</span>
      </h2>
    </div>
  )
}

function MetaCell({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-grey-1 p-4 md:p-5">
      <p className="font-mono text-body-xs uppercase text-grey-7">{label}</p>
      <p className="mt-2 text-body-m text-grey-9">{value}</p>
    </div>
  )
}

export function QuoteDocument() {
  const {
    meta,
    intro,
    scope,
    analysisNotes,
    notBillable,
    deliverables,
    excluded,
    terms,
    nextSteps,
    extras,
    rateCard,
    contact,
  } = quoteData

  return (
    <div className="min-h-screen bg-grey-1 text-grey-9">
      <header className="quote-no-print border-b border-grey-4 padding-global py-6">
        <div className="container-base grid grid-cols-[1fr_auto_1fr] items-center gap-4">
          <div className="justify-self-start">
            <span className="font-mono text-body-xs uppercase text-grey-7">
              {meta.id}
            </span>
          </div>

          <div className="flex items-center gap-3 justify-self-center">
            <Image src="/assets/logo.svg" width={28} height={28} alt="Bruno Lima" />
            <span className="hidden font-mono text-body-xs uppercase text-grey-7 sm:inline">
              Proposta comercial
            </span>
          </div>

          <div className="justify-self-end">
            <DownloadQuoteButton />
          </div>
        </div>
      </header>

      <main>
        <HeroGridArea
          as="section"
          className="border-b border-grey-4 py-section-sm md:py-section"
        >
          <Container>
            <p className="font-mono text-body-xs uppercase text-accent">
              Bruno Lima Dev · {meta.issuedLabel}
            </p>
            <h1 className="mt-4 max-w-3xl text-h3 leading-height-s tracking-l md:text-h2">
              {meta.project}
            </h1>
            <p className="mt-4 text-title-m text-grey-5">
              Preparado para <span className="text-grey-1">{meta.client}</span>
              {meta.contactName ? ` · ${meta.contactName}` : null}
            </p>
            <p className="mt-2 font-mono text-body-s text-grey-6">
              {meta.id} · válido até {formatQuoteDate(meta.validUntil)}
            </p>
          </Container>
        </HeroGridArea>

        <Container className="py-section">
          <div className="grid gap-px border border-grey-4 bg-grey-4 sm:grid-cols-2 lg:grid-cols-4">
            <MetaCell label="Cliente" value={meta.client} />
            <MetaCell label="Materiais" value={`${quoteJobs.length} CLMs`} />
            <MetaCell label="Telas declaradas" value={String(totalScreens)} />
            <MetaCell label="Emissão" value={meta.issuedLabel} />
          </div>

          <article className="max-w-3xl space-y-4 border-b border-grey-4 py-section">
            {intro.map((paragraph) => (
              <p key={paragraph} className="text-body-l leading-height-xl text-grey-8">
                {paragraph}
              </p>
            ))}
            <p className="font-mono text-body-xs uppercase text-grey-7">{meta.source}</p>
          </article>

          <section className="break-inside-avoid py-section">
            <QuoteSectionTitle label="scope" title="Escopo analisado" />
            <ul className="space-y-4 border border-grey-4 p-6 md:p-8">
              {scope.map((item) => (
                <li
                  key={item}
                  className="relative pl-4 text-body-m text-grey-8 before:absolute before:left-0 before:top-[0.55em] before:size-1.5 before:bg-accent"
                >
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section className="border-t border-grey-4 py-section">
            <QuoteSectionTitle label="pricing" title="Tabela de valores" />
            <p className="mb-8 max-w-3xl text-body-m text-grey-8">
              Um Veeva CLM não é PDF nem export de imagens — é interface HTML, CSS e
              JavaScript dentro do CRM. A cobrança é por tela de desenvolvimento, porque o
              esforço muda com a interação, não com o volume de texto.
            </p>

            <div className="overflow-x-auto border border-grey-4">
              <table className="w-full min-w-xl border-collapse text-left">
                <thead>
                  <tr className="border-b border-grey-4 bg-grey-2">
                    <th className="px-4 py-4 font-mono text-body-xs uppercase text-grey-7">
                      Nível
                    </th>
                    <th className="px-4 py-4 font-mono text-body-xs uppercase text-grey-7">
                      Valor
                    </th>
                    <th className="px-4 py-4 font-mono text-body-xs uppercase text-grey-7">
                      Critério
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {rateCard.levels.map((level) => (
                    <tr
                      key={level.id}
                      className={`border-b border-grey-4 last:border-b-0 ${
                        level.id === rateCard.referenceLevel.id ? 'bg-accent-muted' : ''
                      }`}
                    >
                      <td className="px-4 py-4 text-body-m text-grey-9">{level.label}</td>
                      <td className="whitespace-nowrap px-4 py-4 font-mono text-body-s">
                        {level.amount ? `${formatBRL(level.amount)} / tela` : 'Sob avaliação'}
                      </td>
                      <td className="px-4 py-4 text-body-s text-grey-8">
                        {level.criterion} Ex.: {level.example}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="mt-4 font-mono text-body-xs text-grey-7">
              Referência desta proposta: {rateCard.referenceLevel.label} (
              {formatBRL(rateCard.referenceLevel.amount ?? 0)} / tela). Em dúvida entre
              dois níveis, classifica-se pelo mais alto.
            </p>

            <h3 className="mt-10 font-mono text-body-xs uppercase text-grey-7">
              Publicação Veeva (uma vez por material)
            </h3>
            <ul className="mt-4 divide-y divide-grey-4 border border-grey-4">
              {rateCard.publication.map((band) => (
                <li
                  key={band.range}
                  className="flex flex-col gap-1 px-6 py-4 sm:flex-row sm:items-center sm:justify-between"
                >
                  <span className="text-body-m text-grey-8">
                    {band.range} — {band.label}
                  </span>
                  <span className="font-mono text-body-s uppercase text-grey-7">
                    {formatBRL(band.amount)}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-4 max-w-3xl text-body-s text-grey-7">
              Cobre empacotamento Vault, metadados e keyed messages, teste no iRep/Engage
              e validação de sincronização em campo. O valor sobe com o volume porque
              cresce a superfície de teste — não porque a publicação fique mais complexa
              por tela. A tabela não define a faixa de 21 a 30 telas: nesses casos
              aplica-se a faixa Complexa (R$ 650).
            </p>
          </section>

          <section className="border-t border-grey-4 py-section">
            <QuoteSectionTitle label="pipeline" title="Jobs da planilha" />
            <div className="overflow-x-auto border border-grey-4">
              <table className="w-full min-w-xl border-collapse text-left">
                <thead>
                  <tr className="border-b border-grey-4 bg-grey-2">
                    <th className="px-4 py-4 font-mono text-body-xs uppercase text-grey-7">
                      Job
                    </th>
                    <th className="px-4 py-4 font-mono text-body-xs uppercase text-grey-7">
                      Telas
                    </th>
                    <th className="px-4 py-4 font-mono text-body-xs uppercase text-grey-7">
                      Janela
                    </th>
                    <th className="px-4 py-4 font-mono text-body-xs uppercase text-grey-7">
                      Publicação
                    </th>
                    <th className="px-4 py-4 text-right font-mono text-body-xs uppercase text-grey-7">
                      Dev. ref.
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {quoteJobs.map((job) => {
                    const wave = quoteWaves.find((item) => item.id === job.wave)
                    return (
                      <tr key={job.id} className="border-b border-grey-4">
                        <td className="px-4 py-4 font-mono text-body-s">{job.id}</td>
                        <td className="px-4 py-4 text-body-m">{job.screens}</td>
                        <td className="px-4 py-4 text-body-s text-grey-8">
                          {wave?.period}
                        </td>
                        <td className="px-4 py-4 text-body-s text-grey-8">
                          {publicationLabel(job.screens)} · {formatBRL(jobPublication(job))}
                        </td>
                        <td className="whitespace-nowrap px-4 py-4 text-right font-mono text-body-s">
                          {formatBRL(jobDevEstimate(job))}
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
                <tfoot>
                  <tr className="bg-grey-9 text-grey-1">
                    <th className="px-4 py-4 text-left font-mono text-body-xs uppercase">
                      Total
                    </th>
                    <td className="px-4 py-4 font-mono text-body-s">{totalScreens}</td>
                    <td className="px-4 py-4" />
                    <td className="px-4 py-4 font-mono text-body-s">
                      {formatBRL(totalPublication)}
                    </td>
                    <td className="px-4 py-4 text-right font-mono text-body-s">
                      {formatBRL(totalDevEstimate)}
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </section>

          <section className="border-t border-grey-4 py-section">
            <QuoteSectionTitle label="waves" title="Capacidade por onda" />
            <div className="border border-grey-4">
              {quoteWaves.map((wave, index) => {
                const jobs = jobsInWave(wave.id)
                const publication = jobs.reduce((sum, job) => sum + jobPublication(job), 0)
                const development = wave.screens * rateCard.referenceLevel.amount
                return (
                  <article
                    key={wave.id}
                    className={`break-inside-avoid p-6 md:p-8 ${index > 0 ? 'border-t border-grey-4' : ''}`}
                  >
                    <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between">
                      <h3 className="text-title-m font-medium">
                        {wave.label} — {wave.period}
                      </h3>
                      <p className="font-mono text-body-s uppercase text-grey-7">
                        {wave.screens} telas
                      </p>
                    </div>
                    <p className="mt-3 text-body-m text-grey-8">
                      {jobs.map((job) => `${job.id} (${job.screens})`).join(' · ')}
                    </p>
                    <p className="mt-4 font-mono text-body-s text-grey-7">
                      Dev. {formatBRL(development)} + publicação {formatBRL(publication)} ={' '}
                      <span className="text-grey-9">{formatBRL(development + publication)}</span>
                    </p>
                  </article>
                )
              })}
            </div>
          </section>

          <section className="border-t border-grey-4 py-section">
            <QuoteSectionTitle label="analysis" title="Leitura do material" />
            <ul className="space-y-4">
              {analysisNotes.map((item) => (
                <li
                  key={item}
                  className="relative pl-4 text-body-m text-grey-8 before:absolute before:left-0 before:top-[0.55em] before:size-1.5 before:bg-accent"
                >
                  {item}
                </li>
              ))}
            </ul>

            <h3 className="mt-10 font-mono text-body-xs uppercase text-grey-7">
              O que não conta como tela separada
            </h3>
            <ul className="mt-4 space-y-3">
              {notBillable.map((item) => (
                <li
                  key={item}
                  className="relative pl-4 text-body-m text-grey-8 before:absolute before:left-0 before:top-[0.55em] before:size-1.5 before:bg-grey-5"
                >
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section className="border-t border-grey-4 py-section">
            <QuoteSectionTitle label="investment" title="Orçamento" />

            <div className="overflow-x-auto border border-grey-4">
              <table className="w-full min-w-xl border-collapse text-left">
                <thead>
                  <tr className="border-b border-grey-4 bg-grey-2">
                    <th className="px-6 py-4 font-mono text-body-xs uppercase text-grey-7">
                      Item
                    </th>
                    <th className="px-6 py-4 text-right font-mono text-body-xs uppercase text-grey-7">
                      Valor
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-grey-4">
                    <td className="px-6 py-5">
                      <p className="text-body-m text-grey-9">
                        Desenvolvimento estimado ({totalScreens} telas ×{' '}
                        {rateCard.referenceLevel.label})
                      </p>
                      <p className="mt-1 text-body-s text-grey-7">
                        Teto sobre a contagem da planilha, sujeito a reclassificação no
                        PDF de cada job.
                      </p>
                    </td>
                    <td className="whitespace-nowrap px-6 py-5 text-right font-mono text-body-m">
                      {formatBRL(totalDevEstimate)}
                    </td>
                  </tr>
                  <tr className="border-b border-grey-4">
                    <td className="px-6 py-5">
                      <p className="text-body-m text-grey-9">
                        Publicação Veeva ({quoteJobs.length} materiais)
                      </p>
                      <p className="mt-1 text-body-s text-grey-7">
                        Faixa por volume declarado de cada CLM.
                      </p>
                    </td>
                    <td className="whitespace-nowrap px-6 py-5 text-right font-mono text-body-m">
                      {formatBRL(totalPublication)}
                    </td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr className="bg-grey-9 text-grey-1">
                    <th className="px-6 py-5 text-left font-mono text-body-s uppercase">
                      Total estimado
                    </th>
                    <td className="px-6 py-5 text-right font-mono text-title-m">
                      {formatBRL(totalEstimate)}
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>

            <div className="mt-8 break-inside-avoid">
              <h3 className="font-mono text-body-xs uppercase text-grey-7">
                Itens opcionais
              </h3>
              <ul className="mt-4 divide-y divide-grey-4 border border-grey-4">
                {extras.map((extra) => (
                  <li
                    key={extra.name}
                    className="flex flex-col gap-1 px-6 py-4 sm:flex-row sm:items-center sm:justify-between"
                  >
                    <span className="text-body-m text-grey-8">{extra.name}</span>
                    <span className="font-mono text-body-s uppercase text-grey-7">
                      {extra.amount}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="break-inside-avoid border-t border-grey-4 py-section">
            <QuoteSectionTitle label="deliverables" title="Entregas" />
            <ul className="grid gap-3 md:grid-cols-2">
              {deliverables.map((item) => (
                <li
                  key={item}
                  className="border border-grey-4 bg-grey-1 p-5 text-body-m text-grey-8"
                >
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section className="grid gap-12 border-t border-grey-4 py-section lg:grid-cols-2 lg:gap-0 lg:divide-x lg:divide-grey-4">
            <div className="lg:pr-12">
              <QuoteSectionTitle label="out of scope" title="Fora do escopo" />
              <ul className="space-y-3">
                {excluded.map((item) => (
                  <li
                    key={item}
                    className="relative pl-4 text-body-m text-grey-8 before:absolute before:left-0 before:top-[0.55em] before:size-1.5 before:bg-grey-5"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:pl-12">
              <QuoteSectionTitle label="terms" title="Premissas" />
              <ul className="space-y-3">
                {terms.map((item) => (
                  <li
                    key={item}
                    className="relative pl-4 text-body-m text-grey-8 before:absolute before:left-0 before:top-[0.55em] before:size-1.5 before:bg-accent"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="break-inside-avoid border-t border-grey-4 py-section">
            <QuoteSectionTitle label="next" title="Próximos passos" />
            <ol className="space-y-4">
              {nextSteps.map((step, index) => (
                <li key={step} className="flex gap-4 border border-grey-4 p-5">
                  <span className="font-mono text-body-s text-accent">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="text-body-m text-grey-8">{step}</span>
                </li>
              ))}
            </ol>
          </section>

          <section className="break-inside-avoid border-t border-grey-4 py-section">
            <QuoteSectionTitle label="accept" title="Aceite" />
            <div className="grid gap-6 md:grid-cols-2">
              <div className="border border-grey-4 p-6">
                <p className="font-mono text-body-xs uppercase text-grey-7">
                  Bruno Lima Dev
                </p>
                <p className="mt-3 text-body-m">{contact.name}</p>
                <div className="mt-12 border-t border-grey-4 pt-3 font-mono text-body-xs text-grey-7">
                  Assinatura / data
                </div>
              </div>
              <div className="border border-grey-4 p-6">
                <p className="font-mono text-body-xs uppercase text-grey-7">
                  {meta.client}
                </p>
                <p className="mt-3 text-body-m">{meta.contactName}</p>
                <div className="mt-12 border-t border-grey-4 pt-3 font-mono text-body-xs text-grey-7">
                  Assinatura / data
                </div>
              </div>
            </div>
          </section>

          <section className="break-inside-avoid border-t border-grey-4 py-section">
            <QuoteSectionTitle label="contact" title="Contato" />
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="border border-grey-4 p-5">
                <p className="text-title-m">{contact.name}</p>
                <p className="mt-1 text-body-s text-grey-7">{contact.role}</p>
              </div>
              <a
                href={`mailto:${contact.email}`}
                className="border border-grey-4 p-5 text-grey-9 transition-colors hover:border-accent"
              >
                <p className="font-mono text-body-xs uppercase text-grey-7">E-mail</p>
                <p className="mt-2 font-mono text-body-s">{contact.email}</p>
              </a>
              <a
                href={contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-grey-4 p-5 text-grey-9 transition-colors hover:border-accent"
              >
                <p className="font-mono text-body-xs uppercase text-grey-7">WhatsApp</p>
                <p className="mt-2 font-mono text-body-s">{contact.phone}</p>
              </a>
              <a
                href={contact.site}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-grey-4 p-5 text-grey-9 transition-colors hover:border-accent"
              >
                <p className="font-mono text-body-xs uppercase text-grey-7">Site</p>
                <p className="mt-2 font-mono text-body-s">brunolimadev.dev.br</p>
              </a>
            </div>

            <div className="quote-no-print mt-10 flex flex-wrap gap-4">
              <DownloadQuoteButton />
              <Button href={contact.whatsapp} external variant="line">
                Falar no WhatsApp
              </Button>
            </div>
          </section>
        </Container>
      </main>

      <footer className="border-t border-grey-4 py-8">
        <Container className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <p className="font-mono text-body-xs uppercase text-grey-7">
            if ( aprovado ) → brunolimadev.dev.br/
          </p>
          <p className="font-mono text-body-xs text-grey-7">
            {meta.id} · {meta.issuedLabel} · {contact.name}
          </p>
        </Container>
      </footer>
    </div>
  )
}
