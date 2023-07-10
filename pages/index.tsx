import type { NextPage } from 'next'
import Head from 'next/head'
import Masterhead from '../components/Masterhead'
import AboutUs from '../components/AboutUs'
// import Skills from '../components/Skilss'
import Works from '../components/Works'
import TrustedBy from '../components/TrustedBy'
import Footer from '../components/Footer'
import ContactUs from '../components/ContactUs'




const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Bruno Lima - Desenvolvedor Front End</title>
        <meta name="description" content=" Desenvolvedor Front End Javascript - ReactJS e NextJs" />
        <link rel="icon" href="/favicon.svg" />
        <meta name="keywords" content="Front End, Desenvolvedor de Software, HTML, CSS, Javascript, ReactJS, NexJS, SASS, TailwindCSS" />
        <meta name="robots" content="" />
        <meta name="revisit-after" content="1 day" />
        <meta name="language" content="Portuguese" />
        <meta name="generator" content="N/A" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      </Head>

      <Masterhead />
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
