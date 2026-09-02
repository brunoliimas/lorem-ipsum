import { redirect } from 'next/navigation'
import { QUOTE_PATH } from '../../lib/quote-auth'

export default async function OrcamentoIndexPage({
  searchParams,
}: {
  searchParams: Promise<{ erro?: string }>
}) {
  const { erro } = await searchParams
  redirect(erro === '1' ? `${QUOTE_PATH}?erro=1` : QUOTE_PATH)
}
