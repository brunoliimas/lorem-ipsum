import React from "react";
import Member from "./Menber";
import Button from "./ui/Button";



const AboutUs: React.FC = () =>{
   return (
      <section className="flex flex-col bg-white py-20 text-3xl md:text-4xl">
         <div className="container mx-auto px-11">
            <p className="leading-tight max-w-5xl mx-auto text-lg md:text-2xl tracking-tight">
            <strong>Desenvolvedor Front End</strong> com conhecimentos em <strong>ReactJS</strong> e <strong>NextJS</strong>, com habilidades avançadas em <strong>HTML, CSS e JavaScript</strong>. Paixão por criar interfaces interativas e responsivas, entregando soluções de qualidade. Abordagem focada no usuário, trabalhando em equipe para cumprir prazos e garantir a qualidade. Sempre atualizado nas últimas tendências de design e desenvolvimento. <strong className="text-green-700 underline">Disponível para novos projetos</strong>.
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
               <Member id="01" name="Bruno" jobTitle="Front End" socialId="@brunoliimas" link="https://github.com/brunoliimas"/>
            </div>
            <div className="mt-8">
               <Button href="/assets/curriculo_bruno_lima.pdf" name="Currículo" download="Curriculo Bruno Lima"/>
            </div>
         </div>
      </section>
   )
}
export default AboutUs;