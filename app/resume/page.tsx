import type { Metadata } from 'next'
import ResumeCV from '../../components/ResumeCV'
import { resumeData } from '../../resumeData'

export const metadata: Metadata = {
  title: 'Currículo — Bruno Lima | Desenvolvedor Full Stack',
  description:
    'Currículo de Bruno Lima — Desenvolvedor Full Stack com experiência em React, Next.js, TypeScript, Veeva CRM e produtos digitais para saúde.',
}

export default function ResumePage() {
  return <ResumeCV resumeData={resumeData} />
}
