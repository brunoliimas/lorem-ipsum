import type { Metadata } from 'next'
import { HomePage } from '../../components/pages/HomePage'

export const metadata: Metadata = {
  title: 'Bruno Lima — Desenvolvedor Full Stack | React, Next.js & TypeScript',
  description:
    'Desenvolvedor Full Stack especializado em React, Next.js e TypeScript. Mais de 6 anos de experiência em interfaces performáticas, acessíveis e produtos digitais de impacto.',
  keywords: [
    'Desenvolvedor Full Stack',
    'React',
    'Next.js',
    'TypeScript',
    'Tailwind CSS',
    'Front End',
    'Portfólio',
    'Freelancer',
  ],
  robots: 'index, follow',
  openGraph: {
    title: 'Bruno Lima — Desenvolvedor Full Stack',
    description:
      'Portfólio de Bruno Lima — React, Next.js, TypeScript e produtos digitais de impacto.',
    type: 'website',
  },
}

export default function Page() {
  return <HomePage />
}
