import Image from "next/image"
import { TitleSection } from "./ui/TitleSection"
import { Tools } from "./ui/Tools"
import { BsWhatsapp, BsLinkedin, BsGithub } from 'react-icons/bs'
import { HiOutlineMail } from 'react-icons/hi'
import Footer from "./Footer"
import { ResumeData } from "../resumeData"
import Button from "./ui/Button"

interface ResumeCVProps {
    resumeData: ResumeData; // Usando o tipo definido anteriormente
}

const ResumeCV: React.FC<ResumeCVProps> = ({ resumeData }) => {
    return (
        <>
            <main className="py-20 transition-all duration-500">
                <div className="container px-4 md:px-8 2xl:px-20">
                    <header className="flex flex-col text-center md:text-left md:flex-row items-center justify-start">
                        <div className="mb-8 md:mb-0 bg-green-800 p-8 rounded-full shadow-lg hover:bg-green-700 transition-all duration-500">
                            <Image
                                src="/assets/logo.svg"
                                width={100}
                                height={100}
                                alt="Logo"
                            />
                        </div>
                        <div className="md:ml-8">
                            <h1 className="text-5xl font-semibold">{resumeData.profile.name}</h1>
                            <h2 className="text-2xl font-medium">{resumeData.profile.occupation}</h2>
                            <h3 className="text-lg font-medium">{resumeData.profile.city}</h3>
                        </div>
                    </header>
                    <article className="my-10 w-full xl:w-4/5">
                        <p className="text-base">
                            {resumeData.profile.description}
                        </p>
                        <span className="text-green-800 text-base font-bold">Disponível para novos projetos</span>.
                    </article>
                    <section className="my-10 border-t pt-10">
                        <TitleSection title="Experiência" />
                        {resumeData.works.map((work, index) => (
                            <div key={index} className="my-10">
                                <h3 className="font-semibold text-2xl leading-6">{work.occupation} - <span>{work.level}</span></h3>
                                <h3 className="font-semibold text-xl leading-8 text-green-800">{work.companyName}</h3>
                                <span className="italic">{work.entry} - {work.exit}</span>
                                <div className="my-6 flex flex-wrap gap-x-4 gap-y-2">
                                    {work.tools.map((tool, index) => (
                                        <Tools key={index} name={tool} primary />
                                    ))}
                                </div>
                                <ul className="list-disc">
                                    {work.roles.map((role, index) => (
                                        <li className="text-base" key={index}>{role}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </section>
                    <section className="my-10 border-t pt-10">
                        <TitleSection title="Formação" />
                        {resumeData.academicEducation.map((academy, index) => (
                            <div key={index} className="my-6">
                                <h3 className="font-semibold text-lg">{academy.specialization}</h3>
                                <h3 className="font-semibold text-green-800">{academy.schoolName}</h3>
                                <span className="block italic">{academy.time}</span>
                                <span className="block">{academy.status}</span>
                            </div>
                        ))}
                    </section>
                    <section className="my-10 border-t pt-10">
                        <TitleSection title="Formação Extra e Certificados" />
                        {resumeData.certifications.map((certification, index) => (
                            <div className="mt-6" key={index}>
                                <h3 className="font-semibold text-lg">{certification.specialization}</h3>
                                <h3 className="font-semibold text-green-800">{certification.schoolName}</h3>
                                <span className="italic">{certification.duration}</span>
                            </div>
                        ))}
                    </section>
                    <section className="my-10 border-t pt-10">
                        <TitleSection title="Contato" />
                        <div className="mt-8 flex flex-col items-start gap-4">
                            {resumeData.profile.socialLinks.map((socialLink, index) => (
                                <a className="flex items-center justify-start" href={socialLink.url} target="_blank" rel="noopener noreferrer" key={index}>
                                    {socialLink.icon === 'BsWhatsapp' &&
                                        <BsWhatsapp className="bg-green-800 hover:bg-green-700 transition-all duration-500 p-2 rounded-lg" size={40} color="#ffffff" />}
                                    {socialLink.icon === 'BsLinkedin' &&
                                        <BsLinkedin className="bg-green-800 hover:bg-green-700 transition-all duration-500 p-2 rounded-lg" size={40} color="#ffffff" />}
                                    {socialLink.icon === 'BsGithub' &&
                                        <BsGithub className="bg-green-800 hover:bg-green-700 transition-all duration-500 p-2 rounded-lg" size={40} color="#ffffff" />}
                                    {socialLink.icon === 'HiOutlineMail' &&
                                        <HiOutlineMail className="bg-green-800 hover:bg-green-700 transition-all duration-500 p-2 rounded-lg" size={40} color="#ffffff" />}
                                    <span className="ml-2 text-lg">{socialLink.name}</span>
                                </a>
                            ))}
                        </div>
                    </section>
                </div>
                <div className="flex items-center justify-center">
                    <Button name="Baixar Currículo" href="/assets/curriculo_bruno_lima.pdf" download="Currículo - Bruno Lima" />
                </div>
            </main>
            <Footer />
        </>
    )
}
export default ResumeCV