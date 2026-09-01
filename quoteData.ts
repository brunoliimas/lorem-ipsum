import {
  APPROVED_EMAIL,
  CLM_LEVELS,
  PUBLICATION_BANDS,
  REFERENCE_LEVEL,
  publicationFee,
  publicationLabel,
} from './lib/clm-pricing'

export interface QuoteJob {
  id: string
  screens: number
  wave: string
}

export interface QuoteWave {
  id: string
  label: string
  period: string
  screens: number
}

export const quoteJobs: QuoteJob[] = [
  { id: 'CLM 1', screens: 21, wave: 'set-1' },
  { id: 'CLM 2', screens: 40, wave: 'set-2' },
  { id: 'CLM 3', screens: 2, wave: 'set-1' },
  { id: 'CLM 4', screens: 18, wave: 'set-2' },
  { id: 'CLM 5', screens: 10, wave: 'out-2' },
  { id: 'CLM 6', screens: 10, wave: 'out-2' },
  { id: 'CLM 7', screens: 5, wave: 'out-1' },
  { id: 'CLM 8', screens: 3, wave: 'out-1' },
  { id: 'CLM 9', screens: 20, wave: 'out-2' },
  { id: 'CLM 10', screens: 10, wave: 'out-1' },
  { id: 'CLM 11', screens: 10, wave: 'out-2' },
  { id: 'CLM 12', screens: 10, wave: 'out-1' },
  { id: 'CLM 13', screens: 10, wave: 'out-2' },
  { id: 'CLM 14', screens: 10, wave: 'out-2' },
  { id: 'CLM 15', screens: 10, wave: 'out-2' },
  { id: 'CLM 16', screens: 10, wave: 'out-1' },
  { id: 'CLM 17', screens: 33, wave: 'out-2' },
  { id: 'CLM 18', screens: 111, wave: 'out-1' },
]

export const quoteWaves: QuoteWave[] = [
  { id: 'set-1', label: 'Onda 1', period: '1–15 de setembro', screens: 23 },
  { id: 'set-2', label: 'Onda 2', period: '15–30 de setembro', screens: 58 },
  { id: 'out-1', label: 'Onda 3', period: '1–15 de outubro', screens: 149 },
  { id: 'out-2', label: 'Onda 4', period: '15–30 de outubro', screens: 113 },
]

const referenceRate = CLM_LEVELS[REFERENCE_LEVEL].amount

export function jobPublication(job: QuoteJob) {
  return publicationFee(job.screens)
}

export function jobDevEstimate(job: QuoteJob) {
  return job.screens * referenceRate
}

export function jobsInWave(waveId: string) {
  return quoteJobs.filter((job) => job.wave === waveId)
}

export const totalScreens = quoteJobs.reduce((sum, job) => sum + job.screens, 0)
export const totalPublication = quoteJobs.reduce((sum, job) => sum + jobPublication(job), 0)
export const totalDevEstimate = totalScreens * referenceRate
export const totalEstimate = totalDevEstimate + totalPublication

export const quoteData = {
  meta: {
    id: 'ORC-2026-001',
    issuedAt: '2026-09-01',
    validUntil: '2026-09-16',
    issuedLabel: 'Setembro / 2026',
    client: 'Swordfish Brasil',
    contactName: 'Danielle Moura',
    project: 'Pipeline Veeva CLM — setembro a outubro / 2026',
    source: 'Planilha Cotação CLMs SFB (18 materiais, 343 telas declaradas)',
    preparedBy: 'Bruno Lima',
    location: 'São Paulo / SP',
  },
  intro: [
    'Proposta comercial para desenvolvimento de materiais Veeva CLM (HTML5, CSS3 e JavaScript) no volume planejado pela Swordfish Brasil entre setembro e outubro de 2026.',
    'O valor de referência abaixo usa a tabela por tela e a contagem enviada na planilha. Um PDF de 20 páginas costuma virar menos telas reais de CLM — pop-ups, estados de card e variações de carrossel entram no slide pai. O valor de cada job só fecha depois da análise do PDF (e, o ideal, do Figma) daquele material.',
  ],
  scope: [
    '18 jobs de Veeva CLM listados na planilha, com 343 telas declaradas no total.',
    'Desenvolvimento em HTML5, CSS3 e JavaScript, com navegação customizada e UX de CLM (iPad / iRep / Engage).',
    'Publicação por material: empacotamento Vault, metadados e keyed messages, teste de carga/navegação no iRep e validação de sincronização em campo.',
    'Duas rodadas de revisão por material sobre o build alinhado ao layout aprovado.',
  ],
  analysisNotes: [
    'A planilha informa quantidade e janela de início — não classifica complexidade tela a tela. Sem o PDF de cada visual aid, não é possível fechar o número real de telas nem o nível de cada uma.',
    'A estimativa de desenvolvimento usa o nível Média (R$ 300 / tela): animações e cliques simples (pop-up, card, tab), coerente com o que foi descrito no briefing.',
    'CLMs com volume alto na planilha (em especial o CLM 18, com 111 telas) tendem a incluir páginas que não são telas faturáveis — overlays, estados e specs. Esses jobs devem ser recontados no PDF antes de iniciar.',
    'O Figma ainda será enviado. Se o comportamento real (o que é clicável, transições, lógica) diferir do PDF, o valor daquele material é ajustado.',
  ],
  notBillable: [
    'Pop-ups e overlays embutidos, sem menu completo de navegação do CLM.',
    'Estados duplicados de card destacado (hover / highlighted) em overviews.',
    'Páginas de spec interno, legenda, menu isolado ou páginas em branco.',
    'Cards “Resumo” acionados por botão, embutidos na tela que os aciona.',
    'Estados intermediários de formulário (checkbox marcado, ranking populando).',
  ],
  deliverables: [
    'Código-fonte de cada CLM (HTML / CSS / JS).',
    'Pacote pronto para upload no Vault (pastas, thumbnails e assets).',
    'Documentação curta de navegação, estados e eventos de tracking.',
    'Checklist de QA iPad / iRep por material.',
  ],
  excluded: [
    'Licenças Veeva, Vault, CRM ou dispositivos (iPad).',
    'Redação científica, direção de arte, ilustrações e novas peças de layout.',
    'Approved Email (VAE) — cotado à parte, se entrar no job.',
    'Submissão e workflow regulatório no Vault (o handoff técnico está incluso).',
    'Treinamento da força de vendas e configuração de ambientes da Swordfish ou do laboratório.',
  ],
  terms: [
    'Valores em reais (BRL), tabela cheia. Impostos e emissão de nota sob combinação no aceite (pessoa física ou jurídica).',
    'Pagamento por job: 50% no kickoff daquele material e 50% na entrega do pacote final.',
    'O valor desta página é estimativa de teto sobre a contagem da planilha. Cada CLM recebe um fechamento próprio após o PDF.',
    'Duas rodadas de revisão por material estão inclusas. Mudança de briefing, novos fluxos ou refação de telas já aprovadas são cotados à parte.',
    'Proposta válida até 16 de setembro de 2026, alinhada ao início da primeira onda.',
  ],
  nextSteps: [
    'Enviar o PDF (e o Figma, quando disponível) dos jobs da onda 1 — CLM 1 e CLM 3 — para fechar a contagem real e iniciar em 1–15 de setembro.',
    'Confirmar se a cobrança será para pessoa física ou jurídica e o fluxo de publicação (Vault / iRep da Swordfish ou do laboratório).',
    'Validar se algum job inclui Approved Email ou telas com lógica avançada (formulário, CRM, drag and drop).',
    'Aceite desta estimativa de capacidade para reservar as janelas de setembro e outubro.',
  ],
  extras: APPROVED_EMAIL.map((item) => ({
    name: `Approved Email — ${item.type}`,
    amount: item.amount,
  })),
  rateCard: {
    levels: Object.values(CLM_LEVELS),
    publication: PUBLICATION_BANDS,
    referenceLevel: CLM_LEVELS[REFERENCE_LEVEL],
  },
  contact: {
    name: 'Bruno Lima',
    role: 'Desenvolvedor Full Stack — Veeva CLM / CRM',
    email: 'ibrunoliimas@gmail.com',
    phone: '+55 11 9 6074 4779',
    whatsapp: 'https://wa.me/5511960744779',
    linkedin: 'https://linkedin.com/in/brunoliimas',
    site: 'https://brunolimadev.dev.br/',
  },
}

export function formatQuoteDate(isoDate: string) {
  return new Date(`${isoDate}T12:00:00`).toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  })
}

export function formatBRL(amount: number) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(amount)
}

export function quoteTotal(items: { amount: number }[]) {
  return items.reduce((sum, item) => sum + item.amount, 0)
}

export { publicationLabel }
