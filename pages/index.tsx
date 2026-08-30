import type { NextPage } from 'next'
import Head from 'next/head'
import {
  AboutSection,
  ContactSection,
  ExperienceSection,
  HeroSection,
  ProjectsSection,
  SiteFooter,
  SiteHeader,
  StackSection,
} from '../components/home'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Bruno Lima — Desenvolvedor Full Stack | React, Next.js & TypeScript</title>
        <meta
          name="description"
          content="Desenvolvedor Full Stack especializado em React, Next.js e TypeScript. Mais de 6 anos de experiência em interfaces performáticas, acessíveis e produtos digitais de impacto."
        />
        <link rel="icon" href="/favicon.svg" />
        <meta
          name="keywords"
          content="Desenvolvedor Full Stack, React, Next.js, TypeScript, Tailwind CSS, Front End, Portfólio, Freelancer"
        />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="Portuguese" />
        <meta property="og:title" content="Bruno Lima — Desenvolvedor Full Stack" />
        <meta
          property="og:description"
          content="Portfólio de Bruno Lima — React, Next.js, TypeScript e produtos digitais de impacto."
        />
        <meta property="og:type" content="website" />
      </Head>

      <SiteHeader />
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <StackSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  )
}

export default Home
