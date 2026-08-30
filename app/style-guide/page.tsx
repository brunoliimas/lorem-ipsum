import type { Metadata } from 'next'
import { Button, Container, Marquee, SectionLabel } from '../../components/ds'

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

export const metadata: Metadata = {
  title: 'Style Guide | Bruno Lima',
  robots: 'noindex, nofollow',
}

export default function StyleGuidePage() {
  return (
    <div className="min-h-screen bg-background py-20">
      <Container>
        <SectionLabel index={1} total={3} label="style guide" className="mb-6" />
        <h1 className="text-h1">Style Guide</h1>
        <p className="mt-4 max-w-2xl text-body-l text-grey-8">
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
                    className="mx-auto h-12 w-12 border border-grey-4"
                    style={{ backgroundColor: grey.value }}
                  />
                  <p className="mt-2 text-body-xs text-grey-6">{grey.name}</p>
                  <p className="font-mono text-body-xs text-grey-7">{grey.value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-16 border-t border-grey-4 pt-16">
          <p className="mb-6 font-mono text-body-xs text-grey-7">// 002</p>
          <h2 className="text-h3">Typography</h2>
          <div className="mt-8 space-y-6">
            <p className="text-h1">Heading 1</p>
            <p className="text-h2">Heading 2</p>
            <p className="text-h3">Heading 3</p>
            <p className="text-h4">Heading 4</p>
            <p className="text-h5">Heading 5</p>
            <p className="text-h6">Heading 6</p>
            <p className="text-title-l">Title L</p>
            <p className="text-title-m">Title M</p>
            <p className="text-title-s">Title S</p>
            <p className="text-body-l text-grey-8">Body L</p>
            <p className="text-body-m text-grey-8">Body M</p>
            <p className="text-body-s text-grey-8">Body S</p>
            <p className="text-body-xs text-grey-8">Body XS</p>
            <p className="font-mono text-body-m text-accent">Mono — // 001 [tag]</p>
            <p className="font-pixel text-h4 heading-highlight">[ Pixel ]</p>
          </div>
        </section>

        <section className="mt-16 border-t border-grey-4 pt-16">
          <p className="mb-6 font-mono text-body-xs text-grey-7">// 003</p>
          <h2 className="text-h3">Buttons</h2>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button variant="primary">Get Started</Button>
            <Button variant="nav">Watch Demo</Button>
            <Button variant="line">Contact Us</Button>
            <Button variant="ghost">Learn more</Button>
          </div>
        </section>
      </Container>

      <div className="mt-16">
        <Marquee items={['#software', '#development', '#portfolio']} />
      </div>
    </div>
  )
}
