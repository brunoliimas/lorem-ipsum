import Image from 'next/image'
import {
  CLM_IMPLEMENTATION_TOTAL,
  CLM_SETUP_AMOUNT,
  formatBRL,
  formatQuoteDate,
  investmentItems,
  projectDevEstimate,
  projectTotal,
  quoteData,
  quoteProjects,
  quoteWaveBudgets,
  totalDevEstimate,
  totalEstimate,
  totalScreens,
} from '../../quoteData'
import { Button, Container } from '../ds'
import { HeroGridArea } from '../home/HeroGridArea'
import { DownloadQuoteButton } from './DownloadQuoteButton'

function QuoteSectionTitle({ label, title }: { label: string; title: string }) {
  return (
    <div className="mb-8">
      <p className="font-mono text-body-xs uppercase text-grey-7">// {label}</p>
      <h2 className="mt-3 text-h5 leading-height-s tracking-l md:text-h3">
        <span className="heading-slash">/</span> {title}{' '}
        <span className="heading-slash">/</span>
      </h2>
    </div>
  )
}

function MetaCell({
  label,
  hint,
  value,
}: {
  label: string
  hint?: string
  value: string
}) {
  return (
    <div className="bg-grey-1 p-4 md:p-5">
      <p className="font-mono text-body-xs uppercase text-grey-7">{label}</p>
      {hint ? (
        <p className="mt-1 font-mono text-body-xs uppercase text-grey-7">{hint}</p>
      ) : null}
      <p className="mt-2 text-body-m text-grey-9">{value}</p>
    </div>
  )
}

function BulletList({
  items,
  accent = false,
}: {
  items: string[]
  accent?: boolean
}) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li
          key={item}
          className={`relative pl-4 text-body-m text-grey-8 before:absolute before:left-0 before:top-[0.55em] before:size-1.5 ${
            accent ? 'before:bg-accent' : 'before:bg-grey-5'
          }`}
        >
          {item}
        </li>
      ))}
    </ul>
  )
}

export function QuoteDocument() {
  const {
    meta,
    intro,
    scope,
    layers,
    analysisNotes,
    notBillable,
    waveNote,
    waveTotalsNote,
    clmSetup,
    clmScope,
    clmScopeNote,
    deliverables,
    excluded,
    scopeChangeNote,
    slas,
    revisionsIncluded,
    revisionsExcluded,
    payment,
    terms,
    nextSteps,
    rateCard,
    clmComplexityLevels,
    clmPricingNotes,
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
            <p className="mt-4 text-title-m text-grey-5">{meta.subtitle}</p>
            <p className="mt-3 text-title-s text-grey-6">
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
            <MetaCell label="Materiais" value={`${quoteProjects.length} Visual Aids`} />
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

            <div className="mt-8 grid gap-3 md:grid-cols-2">
              {layers.map((layer) => (
                <article key={layer.title} className="border border-grey-4 bg-grey-1 p-5">
                  <p className="font-mono text-body-xs uppercase text-accent">{layer.title}</p>
                  <p className="mt-3 text-body-m text-grey-8">{layer.detail}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="border-t border-grey-4 py-section">
            <QuoteSectionTitle label="pricing" title="Tabela de valores" />
            <p className="mb-8 max-w-3xl text-body-m text-grey-8">
              A classificação por tela contempla exclusivamente o desenvolvimento do
              Visual Aid. A classificação da implementação CLM é independente: um
              material pode ser nível Média no desenvolvimento e CLM Complexo na
              implementação, ou o inverso. O setup de arquitetura é um valor único do
              projeto.
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
              Referência desta proposta para o desenvolvimento dos VAs:{' '}
              {rateCard.referenceLevel.label} (
              {formatBRL(rateCard.referenceLevel.amount ?? 0)} / tela). Em dúvida entre
              dois níveis, classifica-se pelo mais alto.
            </p>

            <h3 className="mt-10 font-mono text-body-xs uppercase text-grey-7">
              Complexidade da Implementação CLM
            </h3>
            <div className="mt-4 mb-8 max-w-3xl space-y-4">
              {clmPricingNotes.map((paragraph) => (
                <p key={paragraph} className="text-body-m text-grey-8">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="overflow-x-auto border border-grey-4">
              <table className="w-full min-w-xl border-collapse text-left">
                <thead>
                  <tr className="border-b border-grey-4 bg-grey-2">
                    <th className="px-4 py-4 font-mono text-body-xs uppercase text-grey-7">
                      Nível
                    </th>
                    <th className="px-4 py-4 font-mono text-body-xs uppercase text-grey-7">
                      Critério
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {clmComplexityLevels.map((level) => (
                    <tr key={level.label} className="border-b border-grey-4 last:border-b-0">
                      <td className="whitespace-nowrap px-4 py-4 text-body-m text-grey-9">
                        {level.label}
                      </td>
                      <td className="px-4 py-4 text-body-s text-grey-8">{level.criterion}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 font-mono text-body-xs text-grey-7">
              Os níveis justificam a classificação de cada Visual Aid. O valor é
              individual, conforme o esforço daquele material — não há tarifa fixa por
              nível. A definição final depende do Figma aprovado.
            </p>
          </section>

          <section className="border-t border-grey-4 py-section">
            <QuoteSectionTitle label="waves" title="Ondas de entrega" />
            <p className="mb-8 max-w-3xl text-body-m text-grey-8">{waveNote}</p>

            <div className="mb-10 grid gap-px border border-grey-4 bg-grey-4 sm:grid-cols-2 lg:grid-cols-4">
              {quoteWaveBudgets.map((wave, index) => (
                <div key={wave.id} className="bg-grey-1 p-4 md:p-5">
                  <p className="font-mono text-body-xs uppercase text-accent">
                    {String(index + 1).padStart(2, '0')} · {wave.label}
                  </p>
                  <p className="mt-2 text-body-m text-grey-9">{wave.period}</p>
                  <p className="mt-2 font-mono text-body-xs uppercase text-grey-7">
                    {wave.projects.length} materiais · {wave.screens} telas
                  </p>
                  <p className="mt-1 font-mono text-body-xs uppercase text-grey-7">
                    VA + implementação
                  </p>
                  <p className="mt-1 font-mono text-body-s text-grey-9">
                    {formatBRL(wave.total)}
                  </p>
                </div>
              ))}
            </div>
            <p className="mb-10 mt-4 max-w-3xl font-mono text-body-xs text-grey-7">
              {waveTotalsNote}
            </p>

            <div className="space-y-10">
              {(['Setembro', 'Outubro'] as const).map((month) => {
                const waves = quoteWaveBudgets.filter((wave) => wave.month === month)
                const monthIndex = month === 'Setembro' ? 1 : 2

                return (
                  <div key={month}>
                    <div className="eyebrow-section mb-4">
                      <div className="eyebrow-main">
                        <span className="eyebrow-text">
                          [n.{String(monthIndex).padStart(2, '0')} / 02]
                        </span>
                        <span className="eyebrow-text total">&gt;</span>
                        <span className="eyebrow-text">{month} / 2026</span>
                      </div>
                      <span className="eyebrow-line" aria-hidden="true" />
                    </div>

                    <div className="space-y-8">
                      {waves.map((wave) => {
                        const index = quoteWaveBudgets.findIndex((item) => item.id === wave.id)

                        return (
                          <article
                            key={wave.id}
                            className="break-inside-avoid border border-grey-4 border-l-2 border-l-accent"
                          >
                            <div className="flex flex-col gap-4 border-b border-grey-4 bg-grey-2 px-6 py-5 md:flex-row md:items-center md:justify-between">
                              <div className="flex items-center gap-4">
                                <span className="font-mono text-h5 leading-none text-accent">
                                  {String(index + 1).padStart(2, '0')}
                                </span>
                                <div>
                                  <h3 className="text-title-m font-medium">{wave.label}</h3>
                                  <p className="mt-1 font-mono text-body-xs uppercase text-grey-7">
                                    {wave.period}
                                  </p>
                                </div>
                              </div>
                              <p className="font-mono text-body-s uppercase text-grey-7">
                                {wave.projects.length} materiais · {wave.screens} telas
                              </p>
                            </div>

                  <div className="overflow-x-auto">
                    <table className="w-full min-w-4xl border-collapse text-left">
                      <thead>
                        <tr className="border-b border-grey-4">
                          <th className="px-4 py-3 font-mono text-body-xs uppercase text-grey-7">
                            Material
                          </th>
                          <th className="px-4 py-3 font-mono text-body-xs uppercase text-grey-7">
                            Telas
                          </th>
                          <th className="px-4 py-3 font-mono text-body-xs uppercase text-grey-7">
                            Complexidade VA
                          </th>
                          <th className="px-4 py-3 font-mono text-body-xs uppercase text-grey-7">
                            Complexidade CLM
                          </th>
                          <th className="px-4 py-3 text-right font-mono text-body-xs uppercase text-grey-7">
                            Desenvolvimento VA
                          </th>
                          <th className="px-4 py-3 text-right font-mono text-body-xs uppercase text-grey-7">
                            Implementação CLM
                          </th>
                          <th className="px-4 py-3 text-right font-mono text-body-xs uppercase text-grey-7">
                            Total
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {wave.projects.map((project) => (
                          <tr key={project.id} className="border-b border-grey-4">
                            <td className="px-4 py-4 font-mono text-body-s">{project.id}</td>
                            <td className="px-4 py-4 text-body-m">{project.screens}</td>
                            <td className="px-4 py-4 text-body-s text-grey-8">
                              {project.complexity}
                            </td>
                            <td className="px-4 py-4 text-body-s text-grey-8">
                              {project.clmComplexity}
                            </td>
                            <td className="whitespace-nowrap px-4 py-4 text-right font-mono text-body-s">
                              {formatBRL(projectDevEstimate(project))}
                            </td>
                            <td className="whitespace-nowrap px-4 py-4 text-right font-mono text-body-s">
                              {formatBRL(project.clmImplementation)}
                            </td>
                            <td className="whitespace-nowrap px-4 py-4 text-right font-mono text-body-s">
                              {formatBRL(projectTotal(project))}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                      <tfoot>
                        <tr className="bg-grey-9 text-grey-1">
                          <th className="px-4 py-4 text-left font-mono text-body-xs uppercase">
                            Subtotal da janela
                          </th>
                          <td className="px-4 py-4 font-mono text-body-s">{wave.screens}</td>
                          <td className="px-4 py-4 font-mono text-body-s">—</td>
                          <td className="px-4 py-4 font-mono text-body-s">—</td>
                          <td className="px-4 py-4 text-right font-mono text-body-s">
                            {formatBRL(wave.development)}
                          </td>
                          <td className="px-4 py-4 text-right font-mono text-body-s">
                            {formatBRL(wave.clmImplementation)}
                          </td>
                          <td className="px-4 py-4 text-right font-mono text-body-s">
                            {formatBRL(wave.total)}
                          </td>
                        </tr>
                      </tfoot>
                    </table>
                  </div>
                </article>
                        )
                      })}
                    </div>
                  </div>
                )
              })}
            </div>
          </section>

          <section className="border-t border-grey-4 py-section">
            <QuoteSectionTitle label="analysis" title="Leitura do material" />
            <BulletList items={analysisNotes} accent />

            <h3 className="mt-10 font-mono text-body-xs uppercase text-grey-7">
              O que não conta como tela separada
            </h3>
            <div className="mt-4">
              <BulletList items={notBillable} />
            </div>
          </section>

          <section className="border-t border-grey-4 py-section">
            <QuoteSectionTitle label="setup" title="Setup e Arquitetura Técnica Veeva CLM" />
            <p className="mb-8 max-w-3xl text-body-m text-grey-8">{clmSetup.description}</p>
            <article className="flex flex-col gap-4 border border-grey-4 bg-grey-1 p-6 md:flex-row md:items-center md:justify-between md:p-8">
              <div>
                <p className="font-mono text-body-xs uppercase text-accent">{clmSetup.title}</p>
                <p className="mt-3 max-w-2xl text-body-m text-grey-8">{clmSetup.note}</p>
              </div>
              <p className="whitespace-nowrap font-mono text-title-m">{formatBRL(clmSetup.amount)}</p>
            </article>
          </section>

          <section className="border-t border-grey-4 py-section">
            <QuoteSectionTitle label="clm" title="Escopo da Implementação Técnica CLM" />
            <p className="mb-8 max-w-3xl text-body-m text-grey-8">
              É o que transforma cada Visual Aid em um material Veeva CLM funcional.
              O valor é definido por material, segundo o esforço técnico — não por
              onda e não pela quantidade de telas.
            </p>
            <ul className="space-y-4 border border-grey-4 p-6 md:p-8">
              {clmScope.map((item) => (
                <li
                  key={item}
                  className="relative pl-4 text-body-m text-grey-8 before:absolute before:left-0 before:top-[0.55em] before:size-1.5 before:bg-accent"
                >
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 max-w-3xl text-body-s text-grey-7">{clmScopeNote}</p>
          </section>

          <section className="border-t border-grey-4 py-section">
            <QuoteSectionTitle label="investment" title="Orçamento" />

            <div className="mb-8 grid gap-px border border-grey-4 bg-grey-4 sm:grid-cols-2 lg:grid-cols-4">
              <MetaCell
                label="Desenvolvimento dos VAs"
                hint="18 materiais · 343 telas"
                value={formatBRL(totalDevEstimate)}
              />
              <MetaCell
                label="Setup + Arquitetura Técnica CLM"
                value={formatBRL(CLM_SETUP_AMOUNT)}
              />
              <MetaCell
                label="Implementação Técnica CLM"
                hint="18 materiais"
                value={formatBRL(CLM_IMPLEMENTATION_TOTAL)}
              />
              <MetaCell label="Total do projeto" value={formatBRL(totalEstimate)} />
            </div>

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
                  {investmentItems.map((item) => (
                    <tr key={item.name} className="border-b border-grey-4">
                      <td className="px-6 py-5">
                        <p className="text-body-m text-grey-9">{item.name}</p>
                        <p className="mt-1 text-body-s text-grey-7">{item.description}</p>
                      </td>
                      <td className="whitespace-nowrap px-6 py-5 text-right font-mono text-body-m">
                        {formatBRL(item.amount)}
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr className="bg-grey-9 text-grey-1">
                    <th className="px-6 py-5 text-left font-mono text-body-s uppercase">
                      Total do projeto · {quoteProjects.length} materiais · {totalScreens}{' '}
                      telas
                    </th>
                    <td className="px-6 py-5 text-right font-mono text-title-m">
                      {formatBRL(totalEstimate)}
                    </td>
                  </tr>
                </tfoot>
              </table>
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
              <BulletList items={excluded} />
              <p className="mt-6 text-body-m text-grey-8">{scopeChangeNote}</p>
            </div>
            <div className="lg:pl-12">
              <QuoteSectionTitle label="terms" title="Premissas" />
              <BulletList items={terms} accent />
            </div>
          </section>

          <section className="grid gap-12 border-t border-grey-4 py-section lg:grid-cols-2 lg:gap-0 lg:divide-x lg:divide-grey-4">
            <div className="lg:pr-12">
              <QuoteSectionTitle label="sla" title="SLAs" />
              <BulletList items={slas} accent />
            </div>
            <div className="lg:pl-12">
              <QuoteSectionTitle label="revisions" title="QA e homologação" />
              <h3 className="mb-4 font-mono text-body-xs uppercase text-grey-7">
                Incluído
              </h3>
              <BulletList items={revisionsIncluded} accent />
              <h3 className="mb-4 mt-8 font-mono text-body-xs uppercase text-grey-7">
                Não incluído sem novo orçamento
              </h3>
              <BulletList items={revisionsExcluded} />
            </div>
          </section>

          <section className="break-inside-avoid border-t border-grey-4 py-section">
            <QuoteSectionTitle label="payment" title="Condições de pagamento" />
            <ul className="space-y-4 border border-grey-4 p-6 md:p-8">
              {payment.map((item) => (
                <li
                  key={item}
                  className="relative pl-4 text-body-m text-grey-8 before:absolute before:left-0 before:top-[0.55em] before:size-1.5 before:bg-accent"
                >
                  {item}
                </li>
              ))}
            </ul>
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
                <p className="mt-2 font-mono text-body-s">brunolima.dev.br</p>
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
            if ( aprovado ) → brunolima.dev.br/
          </p>
          <p className="font-mono text-body-xs text-grey-7">
            {meta.id} · {meta.issuedLabel} · {contact.name}
          </p>
        </Container>
      </footer>
    </div>
  )
}
