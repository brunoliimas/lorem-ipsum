import Image from "next/image"
import Link from "next/link"
import Footer from "../Footer"
import { TitleSection } from "../ui/TitleSection"
import { Subtitle } from "../ui/Subtitle"




const Elos = () => {
    return (
        <>
            <header className="w-full bg-black py-10">
                <div className="container px-4 md:px-8 flex justify-start">
                    <h1>Proposta comercial</h1>
                </div>
            </header>
            <main className="pt-20 transition-all duration-500">
                <div className="container px-4 md:px-8">
                    <header className="flex flex-col text-center md:text-left md:flex-row items-center justify-start">
                        <div className="mb-8 md:mb-0 bg-green-800 p-8 rounded-full shadow-lg hover:bg-green-700 transition-all duration-500">
                            <Link href="/">
                                <Image
                                    src="/assets/logo.svg"
                                    width={100}
                                    height={100}
                                    alt="Logo"
                                />
                            </Link>
                        </div>
                        <h1 className="text-5xl font-bold lg:ml-10">Proposta comercial</h1>
                    </header>
                    <section className="my-10 border-t pt-10">
                        <TitleSection title="Elos - Projeto de UI Design de App de Cobrança de Empréstimos" />
                        <div className="mt-8">
                            <p>Olá Elos</p>
                            <br />
                            <p>Agradecemos pela oportunidade de apresentar nossa proposta para o projeto de UI Design do seu aplicativo de cobrança de empréstimos. Estamos empolgados em trabalhar com você para criar uma interface de usuário eficiente e atraente para seu aplicativo.</p>
                            <br />
                            <p className="italic">*Essa proposta comercial não deve ser compartilhada para terceiros</p>
                        </div>
                    </section>

                    <section className="my-10 border-t pt-10">
                        <TitleSection title="Escopo do Projeto:" />
                        <div className="my-8">
                            <p>De acordo com o briefing que foi passado, indentificamos que o projeto incluirá o design de 12 telas, a criação de um protótipo de alta fidelidade e a elaboração de um mapa de fluxo para garantir a melhor experiência do usuário. Abaixo, detalhamos os elementos do projeto:</p>
                            <div className="my-6">
                                <Subtitle subtitle="1 - Design de 12 Telas:" />
                                <ul className="list-disc">
                                    <li className="my-2">Cada tela será desenvolvida com atenção aos detalhes, usabilidade e consistência de design.</li>
                                    <li className="my-2">Tempo estimado por tela: <b>4 horas</b>. Total de horas estimadas: <b>48 horas</b>.</li>
                                </ul>
                            </div>
                            <div className="my-6">
                                <Subtitle subtitle="2 - Protótipo de Alta Fidelidade:" />
                                <ul className="list-disc">
                                    <li className="my-2">O protótipo permitirá visualizar a aparência e a interação do aplicativo antes do desenvolvimento.</li>
                                    <li className="my-2">Tempo estimado: <b>8 horas</b>.</li>

                                </ul>
                            </div>
                            <div className="my-6">
                                <Subtitle subtitle="3 - Mapa de Fluxo:" />
                                <ul className="list-disc">
                                    <li className="my-2">Cada tela será desenvolvida com atenção aos detalhes, usabilidade e consistência de design.</li>
                                    <li className="my-2">O mapa de fluxo definirá a jornada do usuário no aplicativo, identificando todas as interações possíveis.</li>
                                    <li className="my-2">Tempo estimado: <b>3 horas</b>.</li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    <section className="my-10 border-t pt-10">
                        <TitleSection title="Cronograma de Trabalho" />
                        <div className="my-8">
                            <p>Com base em sua disponibilidade para o projeto e considerando uma média de 4 a 6 horas de trabalho por dia, propomos o seguinte cronograma:</p>
                            <div className="my-6">
                                <Subtitle subtitle="1 Semana e 1 dia:" />
                                <ul className="list-disc">
                                    <li className="my-2"><span className="text-green-800 font-semibold">Dias 1-2:</span> Design das primeiras 4 telas + Revisão e ajustes finais <b>(16 horas de trabalho)</b>.</li>
                                    <li className="my-2"><span className="text-green-800 font-semibold">Dias 3-4:</span> Continuação do design das telas + Revisão e ajustes finais <b>(16 horas de trabalho)</b>.</li>
                                    <li className="my-2"><span className="text-green-800 font-semibold">Dias 5-6:</span> Design das telas restantes + Revisão e ajustes finais <b>(16 horas de trabalho)</b>.</li>
                                    <li className="my-2"><span className="text-green-800 font-semibold">Dia 7:</span> Criação do mapa de fluxo + Revisão e ajustes finais <b>(3 horas de trabalho)</b>.</li>
                                    <li className="my-2"><span className="text-green-800 font-semibold">Dia 8:</span> Elaboração do protótipo de alta fidelidade + Revisão e ajustes finais <b>(8 horas de trabalho)</b>.</li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    <section className="my-10 border-t pt-10">
                        <TitleSection title="Custo Total" />
                        <div className="my-8">
                            <p>O valor por hora de trabalho é de <b>R$35,00</b>, e o total estimado de horas é de 59 horas. Portanto, o custo total do projeto é de <b>R$2.065,00 (59 horas x R$35,00)</b>.</p>
                            <br />
                            <p className="italic text-green-800">*Caso não opite por ter o protótipo, só desconsiderar as 8 horas de trabalho dele.
                                Nesse caso o valor ficaria de <b>R$1.785,00 (51 horas x R$35,00)</b></p>
                        </div>
                    </section>
                    <section className="my-10 border-t pt-10">
                        <TitleSection title="Termos e Condições" />
                        <div className="my-8">
                            <ul className="list-disc">
                                <li className="my-2"><span className="text-green-800 font-semibold">Pagamento:</span> O pagamento pode ser feito em parcelas, com 50% adiantados e 50% após a entrega final.</li>
                                <li className="my-2"><span className="text-green-800 font-semibold">Revisões:</span> Estamos comprometidos em fornecer até duas rodadas de revisões após a entrega final, caso necessário, sem custos adicionais.</li>
                                <li className="my-2"><span className="text-green-800 font-semibold">Entrega:</span> Os arquivos finais serão entregues em formatos compatíveis com desenvolvimento, como Adobe XD ou Figma.</li>
                                <li className="my-2"><span className="text-green-800 font-semibold">Prazo:</span> O prazo estimado para conclusão do projeto é de <b>1 semana e 1 dia</b>, mas podemos ajustar isso conforme suas necessidades.</li>
                            </ul>
                        </div>
                    </section>
                    <section className="mt-10 border-t pt-10">
                        <TitleSection title="Compromisso de Qualidade" />
                        <div className="my-8">
                            <p>Garantimos a qualidade e o profissionalismo em nosso trabalho. Estou ansioso para criar uma interface de usuário impressionante para o seu aplicativo de cobrança de empréstimos.</p>
                            <br />
                            <p>Se você concordar com nossa proposta, ficaremos felizes em dar início ao projeto. Entre em contato conosco para discutir detalhes adicionais, esclarecer quaisquer dúvidas e ajustar o cronograma conforme necessário.</p>
                            <br />
                            <p>Agradecemos novamente pela oportunidade e esperamos trabalhar juntos neste emocionante projeto.</p>
                            <br />
                            <p>Atenciosamente, Bruno Lima</p>
                        </div>
                        
                        <div className="flex items-center justify-center">
                            <Image
                                src="/assets/proposals/bruno-avatar.png"
                                width={300}
                                height={300}
                                alt="Logo"
                            />
                        </div>
                    </section>
                </div >
            </main >
            <Footer />
        </>
    )
}
export default Elos