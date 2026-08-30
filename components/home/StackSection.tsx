import Image from 'next/image'
import { Container, Marquee, SectionLabel } from '../ds'
import { SectionTypingTitle } from './SectionTypingTitle'

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
    <section className="border-t border-grey-4 bg-grey-1">
      <Container className="py-section">
        <SectionLabel index={5} total={8} label="stack" className="mb-8" />

        <SectionTypingTitle
          className="max-w-3xl text-h2"
          lines={['Ferramentas que uso', 'no dia a dia.']}
        />

        <div className="mt-12 flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {tools.map((tool) => (
            <div
              key={tool.alt}
              className="flex h-14 w-14 items-center justify-center border border-grey-4 bg-grey-1 transition-colors hover:border-accent"
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
