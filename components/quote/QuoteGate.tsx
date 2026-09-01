import { Button } from '../ds'
import { unlockQuote } from '../../app/orcamento/actions'

export function QuoteGate({ error }: { error?: boolean }) {
  return (
    <div className="flex min-h-screen flex-col bg-grey-1 text-grey-9">
      <header className="padding-global border-b border-grey-4">
        <div className="container-base flex items-center justify-between py-4">
          <span className="font-mono text-body-xs uppercase text-grey-7">
            Acesso restrito
          </span>
          <span className="bg-grey-3 px-2 py-0.5 font-mono text-body-xs uppercase text-grey-7">
            ORC-2026-0014
          </span>
        </div>
      </header>

      <main className="flex flex-1 flex-col items-center justify-center px-6 py-16">
        <div className="w-full max-w-md border border-grey-4 bg-grey-1 p-8 md:p-10">
          <p className="font-mono text-body-xs uppercase text-accent">// quote</p>
          <h1 className="mt-4 text-h4 leading-height-s tracking-l md:text-h3">
            Pipeline Veeva CLM
          </h1>
          <p className="mt-3 text-body-m text-grey-8">
            Swordfish Brasil — proposta protegida. Use a senha enviada junto com este
            link.
          </p>

          <form action={unlockQuote} className="mt-8 space-y-4">
            <label className="block">
              <span className="font-mono text-body-xs uppercase text-grey-7">
                Senha
              </span>
              <input
                type="password"
                name="password"
                required
                autoComplete="current-password"
                className="mt-2 w-full border border-grey-4 bg-grey-1 px-4 py-3 font-mono text-body-m text-grey-9 outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent"
                placeholder="••••••••"
              />
            </label>

            {error ? (
              <p className="font-mono text-body-xs text-accent" role="alert">
                Senha incorreta. Confira o código enviado com o link.
              </p>
            ) : null}

            <Button type="submit" variant="primary" className="w-full justify-center">
              Acessar orçamento
            </Button>
          </form>
        </div>
      </main>
    </div>
  )
}
