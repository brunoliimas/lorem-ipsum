import { CLM_LEVELS, REFERENCE_LEVEL } from './lib/clm-pricing'

export type VaComplexity = 'Média'
export type ClmComplexity =
  | 'CLM Básico'
  | 'CLM Simples'
  | 'CLM Médio'
  | 'CLM Complexo'
  | 'CLM Muito Complexo'

export interface QuoteProject {
  id: string
  screens: number
  wave: string
  complexity: VaComplexity
  clmComplexity: ClmComplexity
  clmImplementation: number
}

export interface QuoteWave {
  id: string
  label: string
  period: string
  month: 'Setembro' | 'Outubro'
}

const referenceRate = CLM_LEVELS[REFERENCE_LEVEL].amount

export const CLM_SETUP_AMOUNT = 5_000

export const quoteProjects: QuoteProject[] = [
  { id: 'VA 01', screens: 21, wave: 'set-1', complexity: 'Média', clmComplexity: 'CLM Médio', clmImplementation: 1_500 },
  { id: 'VA 02', screens: 40, wave: 'set-2', complexity: 'Média', clmComplexity: 'CLM Médio', clmImplementation: 1_500 },
  { id: 'VA 03', screens: 2, wave: 'set-1', complexity: 'Média', clmComplexity: 'CLM Complexo', clmImplementation: 2_100 },
  { id: 'VA 04', screens: 18, wave: 'set-2', complexity: 'Média', clmComplexity: 'CLM Médio', clmImplementation: 1_300 },
  { id: 'VA 05', screens: 10, wave: 'out-2', complexity: 'Média', clmComplexity: 'CLM Simples', clmImplementation: 950 },
  { id: 'VA 06', screens: 10, wave: 'out-2', complexity: 'Média', clmComplexity: 'CLM Simples', clmImplementation: 950 },
  { id: 'VA 07', screens: 5, wave: 'out-1', complexity: 'Média', clmComplexity: 'CLM Simples', clmImplementation: 850 },
  { id: 'VA 08', screens: 3, wave: 'out-1', complexity: 'Média', clmComplexity: 'CLM Médio', clmImplementation: 1_300 },
  { id: 'VA 09', screens: 20, wave: 'out-2', complexity: 'Média', clmComplexity: 'CLM Médio', clmImplementation: 1_350 },
  { id: 'VA 10', screens: 10, wave: 'out-1', complexity: 'Média', clmComplexity: 'CLM Simples', clmImplementation: 1_000 },
  { id: 'VA 11', screens: 10, wave: 'out-2', complexity: 'Média', clmComplexity: 'CLM Simples', clmImplementation: 950 },
  { id: 'VA 12', screens: 10, wave: 'out-1', complexity: 'Média', clmComplexity: 'CLM Simples', clmImplementation: 1_000 },
  { id: 'VA 13', screens: 10, wave: 'out-2', complexity: 'Média', clmComplexity: 'CLM Simples', clmImplementation: 950 },
  { id: 'VA 14', screens: 10, wave: 'out-2', complexity: 'Média', clmComplexity: 'CLM Simples', clmImplementation: 950 },
  { id: 'VA 15', screens: 10, wave: 'out-2', complexity: 'Média', clmComplexity: 'CLM Simples', clmImplementation: 950 },
  { id: 'VA 16', screens: 10, wave: 'out-1', complexity: 'Média', clmComplexity: 'CLM Simples', clmImplementation: 1_000 },
  { id: 'VA 17', screens: 33, wave: 'out-2', complexity: 'Média', clmComplexity: 'CLM Médio', clmImplementation: 1_450 },
  { id: 'VA 18', screens: 111, wave: 'out-1', complexity: 'Média', clmComplexity: 'CLM Médio', clmImplementation: 1_950 },
]

export const quoteWaves: QuoteWave[] = [
  { id: 'set-1', label: 'Onda 1', period: '01/09 a 15/09', month: 'Setembro' },
  { id: 'set-2', label: 'Onda 2', period: '15/09 a 30/09', month: 'Setembro' },
  { id: 'out-1', label: 'Onda 3', period: '01/10 a 15/10', month: 'Outubro' },
  { id: 'out-2', label: 'Onda 4', period: '15/10 a 30/10', month: 'Outubro' },
]

export function projectDevEstimate(project: QuoteProject) {
  return project.screens * referenceRate
}

export function projectTotal(project: QuoteProject) {
  return projectDevEstimate(project) + project.clmImplementation
}

export function projectsInWave(waveId: string) {
  return quoteProjects.filter((project) => project.wave === waveId)
}

export function waveBudget(wave: QuoteWave) {
  const projects = projectsInWave(wave.id)
  const screens = projects.reduce((sum, project) => sum + project.screens, 0)
  const development = screens * referenceRate
  const clmImplementation = projects.reduce(
    (sum, project) => sum + project.clmImplementation,
    0,
  )

  return {
    ...wave,
    projects,
    screens,
    development,
    clmImplementation,
    total: development + clmImplementation,
  }
}

export const quoteWaveBudgets = quoteWaves.map(waveBudget)

export const totalScreens = quoteProjects.reduce((sum, project) => sum + project.screens, 0)
export const totalDevEstimate = totalScreens * referenceRate
export const CLM_IMPLEMENTATION_TOTAL = quoteProjects.reduce(
  (sum, project) => sum + project.clmImplementation,
  0,
)
export const totalClmImplementation = CLM_IMPLEMENTATION_TOTAL

export const investmentItems = [
  {
    name: 'Desenvolvimento dos Visual Aids',
    description:
      '18 Visual Aids · 343 telas. HTML5, CSS3 e JavaScript: conteúdo visual, animações, interações, pop-ups, navegação prevista no layout, vídeos quando o Figma pedir e adequação ao iPad. Referência Média (R$ 300 / tela).',
    amount: totalDevEstimate,
  },
  {
    name: 'Setup e Arquitetura Técnica Veeva CLM',
    description:
      'Valor único do projeto — não se repete em cada Visual Aid. Configuração da arquitetura técnica base, padrões de desenvolvimento, estrutura de navegação, componentes reutilizáveis e diretrizes para implementação dos materiais.',
    amount: CLM_SETUP_AMOUNT,
  },
  {
    name: 'Implementação Técnica dos 18 Visual Aids',
    description:
      'Cobrado por Visual Aid, conforme o esforço técnico de cada material — não pela quantidade de telas. Navegação, barra, pop-ups, overlays, vídeos, tracking nativo, QA e homologação.',
    amount: CLM_IMPLEMENTATION_TOTAL,
  },
]

export const totalEstimate = investmentItems.reduce((sum, item) => sum + item.amount, 0)

export const quoteData = {
  meta: {
    id: 'ORC-2026-001',
    issuedAt: '2026-09-01',
    validUntil: '2026-09-30',
    issuedLabel: 'Setembro / 2026',
    client: 'Swordfish Brasil',
    contactName: 'Danielle Moura',
    project: 'Desenvolvimento e Implementação Técnica de Veeva CLM',
    subtitle: '18 Visual Aids • 343 telas',
    source: 'Briefing Swordfish Brasil, planilha Cotação CLMs SFB e CLM dummy de referência',
    preparedBy: 'Bruno Lima',
    location: 'São Paulo / SP',
  },
  intro: [
    'A proposta contempla o desenvolvimento dos Visual Aids e a implementação técnica para execução no ambiente Veeva CLM. Visual Aid (VA) é o conteúdo — o material visual e as telas previstas no Figma. A implementação técnica transforma cada Visual Aid aprovado em um material funcional para execução no ambiente Veeva CLM, contemplando navegação, interações e recursos técnicos previstos no escopo.',
    'São 18 Visual Aids destinados à implementação em Veeva CLM, totalizando 343 telas. O desenvolvimento do VA é cobrado por tela. A implementação CLM é cobrada por Visual Aid, segundo o esforço técnico — independente da classificação do conteúdo. O setup e a arquitetura técnica são um valor único do projeto.',
  ],
  scope: [
    '18 Visual Aids destinados à implementação em Veeva CLM, com 343 telas declaradas na planilha, organizados em quatro ondas entre setembro e outubro de 2026.',
    'Entrega final do layout em Figma. Navegação simples, pop-ups, barra de navegação e vídeos, conforme cada material.',
    'Desenvolvimento dos Visual Aids em HTML5, CSS3 e JavaScript, otimizado para iPad, alinhado às melhores práticas Veeva e ao dummy enviado como referência.',
    'Implementação técnica de cada Visual Aid para execução no ambiente Veeva CLM, com eventos e rastreamento exclusivamente nativos.',
  ],
  layers: [
    {
      title: 'Desenvolvimento dos Visual Aids',
      detail:
        'O conteúdo: telas, animações, interações, pop-ups, navegação do layout, vídeos quando previstos e adequação ao iPad. Cobrado por tela.',
    },
    {
      title: 'Implementação técnica Veeva CLM',
      detail:
        'A transformação do VA em material Veeva CLM funcional. Cobrado por Visual Aid, segundo o esforço técnico — não pelo número de telas. O setup de arquitetura é único no projeto.',
    },
  ],
  waveNote:
    'Os valores são definidos individualmente por Visual Aid. As ondas representam a organização do cronograma de execução, entrega, acompanhamento, aprovação e faturamento dos materiais.',
  waveTotalsNote:
    'Os subtotais das janelas somam o desenvolvimento dos VAs e a implementação CLM de cada material. O setup de arquitetura (R$ 5.000) é único e entra só no orçamento consolidado.',
  analysisNotes: [
    'A planilha informa quantidade e janela de início. A quantidade final de telas será validada a partir do Figma final de cada material.',
    'A estimativa de desenvolvimento dos VAs usa o nível Média (R$ 300 / tela), alinhada à navegação, pop-ups e vídeos descritos pela cliente. Essa classificação é independente da complexidade da implementação CLM.',
    'A implementação técnica Veeva CLM é precificada individualmente por Visual Aid, considerando o esforço técnico necessário para sua implementação e não apenas a quantidade de telas.',
    'A complexidade da implementação considera fatores como arquitetura de navegação, quantidade de fluxos, menus, pop-ups, overlays, vídeos, interações, conexão entre Visual Aids, tracking nativo e demais comportamentos previstos no escopo.',
    'Por esse motivo, um Visual Aid com poucas telas pode apresentar maior custo de implementação técnica quando envolver arquitetura de navegação mais complexa, como Hubs, múltiplos fluxos ou conexão entre diferentes materiais.',
    'O dummy da Swordfish é referência técnica de implementação, não especificação definitiva. A classificação CLM de cada material se confirma no Figma aprovado.',
  ],
  notBillable: [
    'Pop-ups e overlays embutidos, sem menu completo de navegação do CLM.',
    'Estados duplicados de card destacado (hover / highlighted) em overviews.',
    'Páginas de spec interno, legenda, menu isolado ou páginas em branco.',
    'Cards “Resumo” acionados por botão, embutidos na tela que os aciona.',
    'Estados intermediários de formulário (checkbox marcado, ranking populando).',
  ],
  clmSetup: {
    title: 'Setup e Arquitetura Técnica Veeva CLM',
    amount: CLM_SETUP_AMOUNT,
    description:
      'Configuração da arquitetura técnica base para os materiais Veeva CLM, definição de padrões de desenvolvimento, estrutura de navegação, componentes reutilizáveis, padrões de interação, organização técnica e diretrizes para implementação dos materiais.',
    note: 'Valor único do projeto. Não se repete em cada Visual Aid e não substitui a implementação técnica de cada material.',
  },
  clmScope: [
    'Estruturação técnica dos materiais para Veeva CLM.',
    'Implementação da navegação entre telas.',
    'Barra de navegação.',
    'Pop-ups e overlays.',
    'Interações previstas no layout aprovado.',
    'Incorporação de vídeos quando previstos no material.',
    'Componentes e estruturas reutilizáveis.',
    'Adequação para execução em ambiente Veeva / CRM.',
    'Implementação de eventos e rastreamento com recursos nativos suportados pelo Veeva.',
    'Otimização de HTML5, CSS3 e JavaScript e boas práticas de performance.',
    'Compatibilidade com iPad / Veeva CRM.',
    'Testes técnicos e correções decorrentes da homologação, dentro do escopo aprovado.',
  ],
  clmScopeNote:
    'Os indicadores, eventos e rastreamentos serão implementados utilizando exclusivamente os recursos nativos do ecossistema Veeva, conforme suportado pelo ambiente e pelos padrões técnicos disponibilizados pela cliente. Essas funcionalidades entram conforme o escopo de cada Visual Aid — não estão em todos os 18 materiais por padrão. O que já está na classificação da tela do VA não é cobrado de novo na implementação CLM.',
  deliverables: [
    'Código-fonte de cada material Veeva CLM (HTML / CSS / JS) e assets utilizados.',
    'Componentes e padrões técnicos reutilizáveis, alinhados ao dummy da cliente.',
    'Navegação, pop-ups, overlays e vídeos implementados conforme o Figma de cada Visual Aid.',
    'Eventos de tracking nativo Veeva previstos no escopo técnico daquele material.',
    'Checklist de QA e correções de homologação dentro do escopo, no ambiente disponibilizado pela cliente.',
    'Versão técnica aprovada no ambiente de homologação da cliente.',
  ],
  excluded: [
    'Publicação dos materiais no ambiente produtivo Veeva.',
    'Configuração ou administração do ambiente Veeva.',
    'Criação de contas ou perfis no ambiente Veeva.',
    'Integrações externas ou APIs de terceiros.',
    'Desenvolvimento de Approved Emails / VAEs.',
    'Produção ou edição de vídeos.',
    'Criação de conteúdo científico, redação ou copywriting.',
    'Alterações estruturais após aprovação do layout.',
    'Novas funcionalidades, novos módulos ou interações não previstas no escopo aprovado.',
    'Funcionalidades avançadas que não estejam contempladas no modelo ou na referência fornecidos pela cliente.',
  ],
  scopeChangeNote:
    'Demandas que impliquem alteração de escopo, novas funcionalidades, novas telas, mudanças estruturais ou novas integrações serão avaliadas e orçadas separadamente.',
  slas: [
    'O prazo de cada Visual Aid começa a contar após o recebimento de todos os insumos daquele material: Figma / layout final, conteúdos, assets, vídeos, referências técnicas e informações necessárias para a implementação.',
    'O cronograma é organizado por ondas, nas janelas já combinadas. Atrasos no recebimento de materiais, aprovações, acessos ou feedbacks da cliente podem impactar o cronograma da respectiva onda.',
    'Revisões respeitam o cronograma aprovado da própria onda.',
    'Dependências da cliente — Figma, aprovação, acesso ao ambiente de homologação — pausam o SLA enquanto não forem resolvidas.',
  ],
  revisionsIncluded: [
    'Duas rodadas de revisão por material, dentro do escopo aprovado.',
    'Testes no ambiente Veeva disponibilizado pela cliente.',
    'Validação técnica dos componentes, da navegação, dos pop-ups e dos vídeos.',
    'Correção de bugs do desenvolvimento entregue.',
    'Correções identificadas na homologação e relacionadas ao escopo aprovado.',
  ],
  revisionsExcluded: [
    'Novas telas, alteração estrutural ou mudança significativa de navegação.',
    'Nova funcionalidade, nova interação ou nova integração.',
    'Mudança de layout já aprovado ou mudança de escopo.',
    'Approved Emails / VAEs, publicação e configuração de ambiente.',
  ],
  payment: [
    'A precificação é por Visual Aid. A execução e o faturamento são organizados por onda.',
    'O setup e a arquitetura técnica (R$ 5.000) são cobrados uma única vez no início do projeto.',
    'Desenvolvimento e implementação dos Visual Aids são faturados por onda: 50% no início da execução da respectiva onda e 50% na entrega / homologação dos materiais daquela janela.',
    'O prazo de pagamento conta a partir da emissão e do aceite da nota fiscal.',
    'Impostos e emissão de nota (pessoa física ou jurídica) sob combinação no aceite.',
  ],
  terms: [
    'Valores em reais (BRL). O desenvolvimento dos VAs é estimativa de teto sobre as 343 telas da planilha, no nível Média.',
    'O valor definitivo de cada Visual Aid se confirma após o Figma final e a definição das interações daquele material.',
    'A implementação CLM é definida por Visual Aid, segundo o esforço técnico. As ondas não são unidade de precificação.',
    'A classificação de complexidade do Visual Aid e a da implementação CLM são independentes.',
    'O dummy fornecido é referência técnica de implementação, não especificação definitiva.',
    'O tracking utiliza apenas recursos nativos do Veeva. Não há integração externa de dados.',
    'Funcionalidades fora do padrão apresentado no dummy e no Figma serão reavaliadas antes do desenvolvimento.',
    'Proposta válida até 30 de setembro de 2026, alinhada ao início da primeira onda.',
  ],
  nextSteps: [
    'Enviar o Figma final dos Visual Aids da onda 1 — VA 01 e VA 03 — para fechar a contagem real e iniciar em 01/09 a 15/09.',
    'Confirmar pessoa física ou jurídica e o acesso ao ambiente de homologação Veeva.',
    'Validar, no dummy e no Figma, a barra de navegação, os pop-ups e os vídeos de cada material da primeira onda.',
    'Aceite da onda 1 para reservar a janela; as ondas seguintes seguem o mesmo fluxo.',
  ],
  rateCard: {
    levels: Object.values(CLM_LEVELS),
    referenceLevel: CLM_LEVELS[REFERENCE_LEVEL],
  },
  clmComplexityLevels: [
    {
      label: 'CLM Básico',
      criterion:
        'Navegação linear, swipe entre telas, tracking mínimo. Sem menu, Hub ou conexão com outros Visual Aids.',
    },
    {
      label: 'CLM Simples',
      criterion:
        'Barra de navegação, pop-ups pontuais e poucos fluxos. Tracking nativo do percurso principal.',
    },
    {
      label: 'CLM Médio',
      criterion:
        'Pop-ups, overlays, vídeos, interações e tracking nativo conforme o material. Navegação predominante do próprio VA.',
    },
    {
      label: 'CLM Complexo',
      criterion:
        'Navegação não linear, menus, múltiplos fluxos, retorno entre conteúdos ou conexão entre Visual Aids — inclusive Hubs com poucas telas.',
    },
    {
      label: 'CLM Muito Complexo',
      criterion:
        'Hub denso, vários retornos, lógica entre materiais e tracking avançado de fluxos. Classificação confirmada no Figma aprovado.',
    },
  ],
  clmPricingNotes: [
    'A implementação técnica Veeva CLM é precificada individualmente por Visual Aid, considerando o esforço técnico necessário para sua implementação e não apenas a quantidade de telas.',
    'A complexidade da implementação considera fatores como arquitetura de navegação, quantidade de fluxos, menus, pop-ups, overlays, vídeos, interações, conexão entre Visual Aids, tracking nativo e demais comportamentos previstos no escopo.',
    'Por esse motivo, um Visual Aid com poucas telas pode apresentar maior custo de implementação técnica quando envolver arquitetura de navegação mais complexa, como Hubs, múltiplos fluxos ou conexão entre diferentes materiais.',
  ],
  contact: {
    name: 'Bruno Lima',
    role: 'Desenvolvedor Full Stack — Veeva CLM / CRM',
    email: 'ibrunoliimas@gmail.com',
    phone: '+55 11 9 6074 4779',
    whatsapp: 'https://wa.me/5511960744779',
    linkedin: 'https://linkedin.com/in/brunoliimas',
    site: 'https://brunolima.dev.br/',
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
