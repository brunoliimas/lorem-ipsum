'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import {
  QUOTE_COOKIE_NAME,
  QUOTE_PATH,
  getQuoteCookieValue,
  isValidQuotePassword,
} from '../../lib/quote-auth'

export async function unlockQuote(formData: FormData) {
  const password = String(formData.get('password') ?? '')

  if (!isValidQuotePassword(password)) {
    redirect(`${QUOTE_PATH}?erro=1`)
  }

  const jar = await cookies()
  jar.set(QUOTE_COOKIE_NAME, getQuoteCookieValue(), {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: QUOTE_PATH,
    maxAge: 60 * 60 * 24 * 7,
  })

  redirect(QUOTE_PATH)
}
