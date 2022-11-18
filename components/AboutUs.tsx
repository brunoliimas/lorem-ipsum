import React from "react";
import Member from "./Menber";



const AboutUs: React.FC = () =>{
   return (
      <section className="flex flex-col bg-white py-20 text-3xl md:text-4xl">
         <div className="container mx-auto px-11">
            <p className="leading-tight max-w-5xl mx-auto text-4xl tracking-tight">
               <strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</strong> sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
         </div>
         <div className="container mx-auto px-11 text-center mt-28">
            <h2 className="text-4xl md:text-5xl font-bold">
               Our team
            </h2>
            <p className="mt-2 text-2xl md:text-3xl">
               the experts
            </p>
            <div className="mt-10 grid grid-cols-1 gap-6 lg:gap-20">
               <Member id="01" name="Bruno" jobTitle="O Front End" socialId="@brunoliimas" link="https://github.com/brunoliimas"/>
            </div>
         </div>
      </section>
   )
}
export default AboutUs;