import React from "react";
import Member from "./Menber";
import Button from "./ui/Button";



const AboutUs: React.FC = () => {
   return (
      <section className="flex flex-col bg-white py-20 text-3xl md:text-4xl">
         <div className="container mx-auto px-11">
            <p className="leading-tight max-w-5xl mx-auto text-lg md:text-2xl tracking-tight mb-4">
               <b>Desenvolvedor de Software</b> especializado em interfaces web modernas e soluções digitais completas.
               Com mais de 6 anos de experiência em tecnologia, atuo com foco em ReactJS, Next.js, Node.js e TypeScript, além de amplo domínio em HTML, CSS, JavaScript, Tailwind CSS e integração com APIs REST. Tenho vivência prática com testes automatizados (Jest e Cypress), animações avançadas com GSAP e Framer Motion, e desenvolvimento voltado à performance, acessibilidade e experiência do usuário.
            </p>
            <p className="leading-tight max-w-5xl mx-auto text-lg md:text-2xl tracking-tight mb-4">
               Já contribuí com projetos de grande impacto no setor da saúde em agências como McCann Health e Havas Life, incluindo desenvolvimento para o ecossistema Veeva CRM e automações via plugins personalizados no Figma.
            </p>
            <p className="leading-tight max-w-5xl mx-auto text-lg md:text-2xl tracking-tight mb-4">
               Sou criativo, proativo e apaixonado por criar soluções que realmente façam a diferença. Estou disponível para freelas, projetos fixos ou remoto/presencial.
            </p>
            <p className="leading-tight max-w-5xl mx-auto text-lg md:text-2xl tracking-tight font-bold text-green-700">
               Vamos construir algo incrível?
            </p>
         </div>
         <div className="container mx-auto px-11 text-center mt-28">
            <h2 className="text-4xl md:text-5xl font-bold">
               O dev
            </h2>
            {/* <p className="mt-2 text-2xl md:text-3xl">
               O dev
            </p> */}
            <div className="mt-10 grid grid-cols-1 gap-6 lg:gap-20">
               <Member id="01" name="Bruno" jobTitle="Front End" socialId="@brunoliimas" link="https://github.com/brunoliimas" />
            </div>
            <div className="mt-8">
               <Button href="/resume" name="Currículo" />
            </div>
         </div>
      </section>
   )
}
export default AboutUs;