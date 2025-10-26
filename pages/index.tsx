import type { NextPage } from 'next'
import Head from 'next/head'
import Masterhead from '../components/Masterhead'
import AboutUs from '../components/AboutUs'
// import Skills from '../components/Skilss'
import Works from '../components/Works'
import TrustedBy from '../components/TrustedBy'
import Footer from '../components/Footer'
import ContactUs from '../components/ContactUs'
import Findflix from './findflix'




const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Bruno Lima - Desenvolvedor Front End JavaScript | ReactJS e Next.js</title>
        <meta name="description" content="Sou um desenvolvedor Front End especializado em JavaScript, ReactJS e Next.js, com experiência na criação de interfaces de usuário responsivas e interativas. Confira meu portfolio para ver meus projetos recentes" />
        <link rel="icon" href="/favicon.svg" />
        <meta name="keywords" content="Front End, Desenvolvedor de Software, HTML, CSS, Javascript, ReactJS, NexJS, SASS, TailwindCSS, desenvolvimento web, UI/UX, desenvolvedor front end freelancer" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="Portuguese" />
        <meta name="generator" content="N/A" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />

      </Head>

      <Masterhead />
      <Findflix />
      <AboutUs />
      {/* <Skills /> */}
      <Works />
      <TrustedBy />
      <ContactUs />
      <Footer />
    </>
  )
}

export default Home
