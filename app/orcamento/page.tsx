import type { Metadata } from 'next'
import { cookies } from 'next/headers'
import { QuoteDocument } from '../../components/quote/QuoteDocument'
import { QuoteGate } from '../../components/quote/QuoteGate'
import { QUOTE_COOKIE_NAME, isQuoteCookieValid } from '../../lib/quote-auth'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Proposta Veeva CLM — Swordfish Brasil',
  description:
    'Desenvolvimento e implementação técnica de Veeva CLM. Proposta comercial protegida.',
  robots: 'noindex, nofollow',
}

export default async function OrcamentoPage({
  searchParams,
}: {
  searchParams: Promise<{ erro?: string }>
}) {
  const { erro } = await searchParams
  const jar = await cookies()
  const unlocked = isQuoteCookieValid(jar.get(QUOTE_COOKIE_NAME)?.value)

  if (!unlocked) {
    return <QuoteGate error={erro === '1'} />
  }

  return <QuoteDocument />
}
