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
        <title>Bruno Lima</title>
        <meta name="description" content="Desenvolvedor Front End - ReactJS e NextJS" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      
      <Masterhead />
      <AboutUs/>
      {/* <Skills /> */}
      <Works />
      <TrustedBy/>
      <ContactUs />
      <Footer />
    </>
  )
}

export default Home
