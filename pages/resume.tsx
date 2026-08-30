import Head from 'next/head'
import ResumeCV from '../components/ResumeCV'
import { resumeData } from '../resumeData'

export default function Resume() {
  return (
    <>
      <Head>
        <title>Currículo — Bruno Lima | Desenvolvedor Full Stack</title>
        <meta
          name="description"
          content="Currículo de Bruno Lima — Desenvolvedor Full Stack com experiência em React, Next.js, TypeScript, Veeva CRM e produtos digitais para saúde."
        />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <ResumeCV resumeData={resumeData} />
    </>
  )
}
