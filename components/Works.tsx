import Image from "next/image";
import React from "react"
import { Tile, TileBackground, TileContent, TileWrapper } from "./Tile";
import { WorkBackground, WorkContainer, WorkLeft, WorkRight, WorkLink } from "./Work";
import Tools from "./ui/Tools";


const projectTools = {
   project1: {
      tool1: {
         name: "React"
      },
      tool2: {
         name: "React DOM"
      },
      tool3: {
         name: "React Router DOM"
      },
      tool4: {
         name: "Axios"
      },
      tool5: {
         name: "React Toastify"
      },
      tool6: {
         name: "Web Vitals"
      }
   },
   project2: {
      tool1: {
         name: "Express"
      },
      tool2: {
         name: "Prisma"
      },
      tool3: {
         name: "JWT"
      },
      tool4: {
         name: "Typescript"
      },
      tool5: {
         name: "Next"
      },
      tool6: {
         name: "Tailwind"
      },
      tool7: {
         name: "Axios"
      },
      tool8: {
         name: "React Native"
      },
      tool9: {
         name: "Expo"
      }
   },
   project3: {
      tool1: {
         name: "HTML"
      },
      tool2: {
         name: "CSS"
      },
      tool3: {
         name: "SASS"
      },
      tool4: {
         name: "Javascript"
      }
   },
   project4: {
      tool1: {
         name: "React"
      },
      tool2: {
         name: "React DOM"
      },
      tool3: {
         name: "Next"
      },
      tool4: {
         name: "Splitting"
      },
      tool5: {
         name: "Tailwind"
      },
      tool6: {
         name: "Greensock (GSAP)"
      }
   }
}

const Works = () => (
   <TileWrapper numOfPages={4}>
      <TileBackground>
         <WorkBackground />
      </TileBackground>
      <TileContent>
         <Tile
            page={0}
            renderContent={({ progress }) => (
               <WorkContainer>
                  <WorkLeft progress={progress}>
                     <h3 className="text-xl md:text-2xl">Projeto de consumo de API (themoviedb)</h3>
                     <p className="text-3xl md:text-4xl font-semibold tracking-tight">
                        <WorkLink href="https://github.com/brunoliimas/superflix">Superflix</WorkLink>
                     </p>
                     {Object.values(projectTools.project1).map((tool, index) => (
                        <Tools key={index} name={tool.name} />
                     ))}
                  </WorkLeft>
                  <WorkRight progress={progress}>
                     <Image src="/assets/works/superflix_react.png" layout="responsive" width={828} height={1415} alt="Iphone" />
                  </WorkRight>
               </WorkContainer>
            )}
         ></Tile>
         <Tile
            page={1}
            renderContent={({ progress }) => (
               <WorkContainer>
                  <WorkLeft progress={progress}>
                     <h3 className="text-xl md:text-2xl">Sistema de pedidos para pizzaria</h3>
                     <p className="text-3xl md:text-4xl font-semibold tracking-tight">
                        <WorkLink href="https://github.com/brunoliimas/pizzaria-udemy">Pizzaria comanda</WorkLink> (Desktop e Mobile)
                     </p>
                     {Object.values(projectTools.project2).map((tool, index) => (
                        <Tools key={index} name={tool.name} />
                     ))}
                  </WorkLeft>
                  <WorkRight progress={progress}>
                     <Image src="/assets/works/pizzaria_comanda.png" layout="responsive" width={828} height={1415} alt="Iphone" />
                  </WorkRight>
               </WorkContainer>
            )}
         ></Tile>
         <Tile
            page={2}
            renderContent={({ progress }) => (
               <WorkContainer>
                  <WorkLeft progress={progress}>
                     <h3 className="text-xl md:text-2xl">Site de assistência e loja de acessórios para celular</h3>
                     <p className="text-3xl md:text-4xl font-semibold tracking-tight">
                        <WorkLink href="https://github.com/brunoliimas/stop-cell">StopCell</WorkLink> 
                     </p>
                     {Object.values(projectTools.project3).map((tool, index) => (
                        <Tools key={index} name={tool.name} />
                     ))}
                  </WorkLeft>
                  <WorkRight progress={progress}>
                     <Image src="/assets/works/desktop-03.png" layout="responsive" width={828} height={1415} alt="Iphone" />
                  </WorkRight>
               </WorkContainer>
            )}
         ></Tile>
         <Tile
            page={3}
            renderContent={({ progress }) => (
               <WorkContainer>
                  <WorkLeft progress={progress}>
                     <h3 className="text-xl md:text-2xl">Site com parallax ao rolar a página</h3>
                     <p className="text-3xl md:text-4xl font-semibold tracking-tight">
                        <WorkLink href="https://github.com/brunoliimas/parallax-gsap/">parallax-gsap</WorkLink> 
                     </p>
                     {Object.values(projectTools.project4).map((tool, index) => (
                        <Tools key={index} name={tool.name} />
                     ))}
                  </WorkLeft>
                  <WorkRight progress={progress}>
                     <Image src="/assets/works/parallax.png" layout="responsive" width={828} height={1415} alt="Iphone" />
                  </WorkRight>
               </WorkContainer>
            )}
         ></Tile>
      </TileContent>
   </TileWrapper>
)
export default Works;