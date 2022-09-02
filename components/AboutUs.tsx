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
            <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 lg:gap-20">
               <Member id="01" name="Marc" socialId="@marcoli" link="https://github.com/brunoliimas"/>
               <Member id="02" name="Lucy" socialId="@lucYbeck" link="https://github.com/brunoliimas"/>
               <Member id="03" name="Antony" socialId="@antonyfrank" link="https://github.com/brunoliimas"/>
               <Member id="04" name="Kai" socialId="@kaipires" link="https://github.com/brunoliimas"/>
               <Member id="05" name="Tess" socialId="@tessli" link="https://github.com/brunoliimas"/>
               <Member id="06" name="Buddy" socialId="@buddygray" link="https://github.com/brunoliimas"/>
            </div>
         </div>
      </section>
   )
}
export default AboutUs;