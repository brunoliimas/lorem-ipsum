import type { NextPage } from 'next'
import Head from 'next/head'
import { Button, Container, Marquee, SectionLabel } from '../components/ds'

const greyScale = [
  { name: 'Grey 01', value: '#FFFFFF' },
  { name: 'Grey 02', value: '#F7F7F7' },
  { name: 'Grey 03', value: '#F5F5F5' },
  { name: 'Grey 04', value: '#E0E0E0' },
  { name: 'Grey 05', value: '#CCCCCC' },
  { name: 'Grey 06', value: '#ADADAD' },
  { name: 'Grey 07', value: '#7A7A7A' },
  { name: 'Grey 08', value: '#474747' },
  { name: 'Grey 09', value: '#1A1A1A' },
]

const StyleGuide: NextPage = () => {
  return (
    <>
      <Head>
        <title>Style Guide | Bruno Lima</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <div className="min-h-screen bg-background py-20">
        <Container>
          <SectionLabel index={1} total={3} label="style guide" className="mb-6" />
          <h1 className="text-h1 font-semibold tracking-tighter">Style Guide</h1>
          <p className="mt-4 max-w-2xl text-body-l text-grey-6">
            Referência visual baseada no{' '}
            <a
              href="https://aeye-saas.webflow.io/utility-pages/style-guide"
              className="text-accent underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Aeye Style Guide
            </a>
            , adaptada para o portfólio com accent azul.
          </p>

          {/* Colors */}
          <section className="mt-16">
            <p className="mb-6 font-mono text-body-xs text-grey-7">// 001</p>
            <h2 className="text-h3 font-semibold">Colors</h2>

            <div className="mt-8">
              <p className="mb-4 text-body-s text-grey-6">Accent</p>
              <div className="flex items-center gap-4">
                <div className="h-16 w-16 rounded-xl bg-accent" />
                <div>
                  <p className="font-mono text-body-m">Blue</p>
                  <p className="font-mono text-body-s text-grey-6">#0055FF</p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <p className="mb-4 text-body-s text-grey-6">Neutral Colors</p>
              <div className="grid grid-cols-3 gap-4 sm:grid-cols-5 md:grid-cols-9">
                {greyScale.map((grey) => (
                  <div key={grey.name} className="text-center">
                    <div
                      className="mx-auto h-12 w-12 rounded-lg border border-border"
                      style={{ backgroundColor: grey.value }}
                    />
                    <p className="mt-2 text-body-xs text-grey-6">{grey.name}</p>
                    <p className="font-mono text-body-xs text-grey-7">{grey.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Typography */}
          <section className="mt-16 border-t border-border pt-16">
            <p className="mb-6 font-mono text-body-xs text-grey-7">// 002</p>
            <h2 className="text-h3 font-semibold">Typography</h2>
            <div className="mt-8 space-y-6">
              <p className="text-h1 font-semibold">Heading 1</p>
              <p className="text-h2 font-semibold">Heading 2</p>
              <p className="text-h3 font-semibold">Heading 3</p>
              <p className="text-h4 font-semibold">Heading 4</p>
              <p className="text-h5 font-semibold">Heading 5</p>
              <p className="text-h6 font-semibold">Heading 6</p>
              <p className="text-title-l">Title L</p>
              <p className="text-title-m">Title M</p>
              <p className="text-title-s">Title S</p>
              <p className="text-body-l text-grey-6">Body L</p>
              <p className="text-body-m text-grey-6">Body M</p>
              <p className="text-body-s text-grey-6">Body S</p>
              <p className="text-body-xs text-grey-6">Body XS</p>
              <p className="font-mono text-body-m text-accent">
                Mono — // 001 [tag]
              </p>
            </div>
          </section>

          {/* Buttons */}
          <section className="mt-16 border-t border-border pt-16">
            <p className="mb-6 font-mono text-body-xs text-grey-7">// 003</p>
            <h2 className="text-h3 font-semibold">Buttons</h2>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button variant="primary">Get Started</Button>
              <Button variant="secondary">Watch Demo</Button>
              <Button variant="ghost">Contact Us</Button>
            </div>
          </section>
        </Container>

        <div className="mt-16">
          <Marquee items={['#software', '#development', '#portfolio']} />
        </div>
      </div>
    </>
  )
}

export default StyleGuide
