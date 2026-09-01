'use client'

import { Button } from '../ds'

export function DownloadQuoteButton() {
  return (
    <Button variant="primary" size="sm" onClick={() => window.print()}>
      Baixar PDF
    </Button>
  )
}
