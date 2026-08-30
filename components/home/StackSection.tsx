import Image from 'next/image'
import { Container, Marquee, SectionLabel } from '../ds'

const tools = [
  { src: '/assets/logos/react.svg', alt: 'React' },
  { src: '/assets/logos/next.svg', alt: 'Next.js' },
  { src: '/assets/logos/typescript.png', alt: 'TypeScript' },
  { src: '/assets/logos/tailwind.png', alt: 'Tailwind' },
  { src: '/assets/logos/figma.png', alt: 'Figma' },
  { src: '/assets/logos/js.png', alt: 'JavaScript' },
  { src: '/assets/logos/html-5.png', alt: 'HTML5' },
  { src: '/assets/logos/css-3.png', alt: 'CSS3' },
]

const marqueeItems = [
  '#react',
  '#nextjs',
  '#typescript',
  '#tailwindcss',
  '#figma',
  '#aws',
]

export function StackSection() {
  return (
    <section className="border-t border-border">
      <Container className="py-24 md:py-32">
        <SectionLabel index={4} total={6} label="stack" className="mb-8" />

        <h2 className="max-w-3xl text-h2 font-semibold tracking-tighter md:text-h1">
          / Ferramentas que uso
          <br />
          no dia a dia. /
        </h2>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {tools.map((tool) => (
            <div
              key={tool.alt}
              className="flex h-14 w-14 items-center justify-center rounded-xl border border-border bg-surface transition-colors hover:border-accent/40"
            >
              <Image src={tool.src} width={32} height={32} alt={tool.alt} />
            </div>
          ))}
        </div>
      </Container>

      <Marquee items={marqueeItems} />
    </section>
  )
}
