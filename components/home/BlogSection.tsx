import { Button, Container, SectionLabel } from '../ds'
import { SectionTypingTitle } from './SectionTypingTitle'
import { BlogCard, BlogImage } from './BlogCard'

const posts = {
  featured: {
    href: '#',
    category: 'Workflow',
    date: 'Mai 7, 2026',
    title: 'Designing AI Workflows That Actually Work',
    description:
      'Como estruturar inputs, processamento e outputs para construir fluxos confiáveis em produtos reais.',
  },
  system: {
    href: '#',
    category: 'System',
    date: 'Abr 12, 2026',
    title: 'Designing AI Systems, Not Just Features',
  },
  product: {
    href: '#',
    category: 'Product',
    date: 'Abr 10, 2026',
    title: 'From Prompt to Product: Making AI Useful',
  },
}

export function BlogSection() {
  return (
    <section id="blog" className="border-t border-grey-4 bg-grey-1 py-section">
      <Container>
        <div className="flex flex-wrap items-start justify-between gap-8">
          <div className="flex max-w-3xl flex-col gap-8">
            <SectionLabel index={6} total={8} label="blog" />
            <SectionTypingTitle
              lines={['Ideias, workflows.', 'Usos no mundo real.']}
            />
          </div>
          <Button href="#" variant="primary" className="shrink-0">
            Ver todos
          </Button>
        </div>

        <div className="mt-16 grid min-h-[36rem] grid-cols-1 border border-grey-4 lg:grid-cols-4 lg:grid-rows-2">
          <div className="group/blog-row contents">
            <BlogCard
              {...posts.featured}
              className="min-h-[24rem] border-b border-grey-4 lg:col-start-1 lg:row-span-2 lg:row-start-1 lg:border-b-0 lg:border-r"
            />

            <BlogImage
              src="/assets/works/desktop-03.jpeg"
              alt="Código em tela"
              className="min-h-[16rem] border-b border-grey-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:min-h-0 lg:border-b-0 lg:border-r"
            />
          </div>

          <div className="group/blog-row grid grid-cols-1 border-b border-grey-4 sm:grid-cols-2 lg:col-span-2 lg:col-start-3 lg:row-start-1 lg:border-b lg:border-grey-4">
            <BlogCard
              {...posts.system}
              className="min-h-[18rem] border-b border-grey-4 sm:border-b-0 sm:border-r sm:border-grey-4"
            />
            <BlogImage
              src="/assets/works/desktop-02.png"
              alt="Equipe trabalhando"
              className="min-h-[14rem] sm:min-h-0"
            />
          </div>

          <div className="group/blog-row grid grid-cols-1 sm:grid-cols-2 lg:col-span-2 lg:col-start-3 lg:row-start-2">
            <BlogCard
              {...posts.product}
              className="min-h-[18rem] border-b border-grey-4 sm:border-b-0 sm:border-r sm:border-grey-4"
            />
            <BlogImage
              src="/assets/works/parallax.png"
              alt="Visualização de dados"
              className="min-h-[14rem] sm:min-h-0"
            />
          </div>
        </div>
      </Container>
    </section>
  )
}
