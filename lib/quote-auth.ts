import { createHmac, timingSafeEqual } from 'node:crypto'

export const QUOTE_COOKIE_NAME = 'quote-access'
export const QUOTE_PATH = '/orcamento/swordfish-brasil-001'

function hmac(value: string) {
  const secret = process.env.QUOTE_SESSION ?? ''
  return createHmac('sha256', secret).update(value).digest()
}

export function isValidQuotePassword(password: string) {
  const expected = process.env.QUOTE_PASSWORD ?? ''
  const secret = process.env.QUOTE_SESSION ?? ''

  if (!expected || !secret) return false

  try {
    return timingSafeEqual(hmac(password), hmac(expected))
  } catch {
    return false
  }
}

export function getQuoteCookieValue() {
  return hmac('granted').toString('hex')
}

export function isQuoteCookieValid(value: string | undefined) {
  if (!value || !process.env.QUOTE_SESSION) return false

  const expected = Buffer.from(getQuoteCookieValue())
  const received = Buffer.from(value)

  if (expected.length !== received.length) return false

  try {
    return timingSafeEqual(expected, received)
  } catch {
    return false
  }
}
