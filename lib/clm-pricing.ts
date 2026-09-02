export const CLM_LEVELS = {
  basico: {
    id: 'basico',
    label: 'Básico',
    amount: 250,
    criterion: 'Página estática, sem animações. Navegação apenas via swipe.',
    example: 'Slide de imagem ou infográfico fixo, sem JS além da troca de tela.',
  },
  simples: {
    id: 'simples',
    label: 'Simples',
    amount: 280,
    criterion: 'Sem interações de clique, mas com animação de entrada.',
    example: 'Fade-in de elementos, contador animado ao carregar a tela.',
  },
  media: {
    id: 'media',
    label: 'Média',
    amount: 300,
    criterion: 'Interações simples com gatilho de clique.',
    example: 'Pop-up de uma tela só, abertura/fechamento de card, tab simples.',
  },
  complexa: {
    id: 'complexa',
    label: 'Complexa',
    amount: 350,
    criterion: 'Múltiplas camadas de interação e/ou lógica condicional.',
    example:
      'Carrossel com pop-ups próprios, múltiplas camadas de clique, vídeo em tela.',
  },
  muitoComplexa: {
    id: 'muitoComplexa',
    label: 'Muito complexa',
    amount: null,
    criterion: 'Funcionalidades avançadas de engenharia — valor caso a caso.',
    example: 'Drag and drop, animações elaboradas, lógica avançada de navegação.',
  },
} as const

export type ClmLevelId = keyof typeof CLM_LEVELS

export const REFERENCE_LEVEL: Exclude<ClmLevelId, 'muitoComplexa'> = 'media'

export function publicationFee(screens: number) {
  if (screens <= 10) return 250
  if (screens <= 20) return 450
  return 650
}

export function publicationLabel(screens: number) {
  if (screens <= 10) return 'Simples'
  if (screens <= 20) return 'Média'
  return 'Complexa'
}

export const PUBLICATION_BANDS = [
  { range: 'Até 10 telas', label: 'Simples', amount: 250 },
  { range: 'Até 20 telas', label: 'Média', amount: 450 },
  { range: 'Acima de 30 telas', label: 'Complexa', amount: 650 },
] as const

export const APPROVED_EMAIL = [
  { type: 'Simples — layout estático, sem lógica', amount: 'R$ 100' },
  {
    type: 'Editável / personalizável — com lógica, modularização ou personalização',
    amount: 'A partir de R$ 250',
  },
] as const
