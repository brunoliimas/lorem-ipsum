import Image from "next/image";
import React from "react"
import { Tile, TileBackground, TileContent, TileWrapper } from "./Tile";
import { WorkBackground, WorkContainer, WorkLeft, WorkRight, WorkLink } from "./Work";

const Works = () => (
   <TileWrapper numOfPages={3}>
      <TileBackground>
         <WorkBackground />
      </TileBackground>
      <TileContent>
         <Tile
            page={0}
            renderContent={({ progress }) => (
               <WorkContainer>
                  <WorkLeft progress={progress}>
                     <h3>Lorem ipsum dolor</h3>
                     <p className="text-4xl md:text-5xl font-semibold tracking-tight">
                        <WorkLink href="https://github.com/brunoliimas/">Labore et dolore</WorkLink> ultricies integer
                     </p>
                  </WorkLeft>
                  <WorkRight progress={progress}>
                     <Image src="/assets/works/desktop-01.png" layout="responsive" width={828} height={1415} alt="Iphone" />
                  </WorkRight>
               </WorkContainer>
            )}
         ></Tile>
         <Tile
            page={1}
            renderContent={({ progress }) => (
               <WorkContainer>
                  <WorkLeft progress={progress}>
                     <h3>Duis aute irure dolor</h3>
                     <p className="text-4xl md:text-5xl font-semibold tracking-tight">
                        <WorkLink href="https://github.com/brunoliimas/">Turpis massa tincidunt</WorkLink>  dui ut ornare
                     </p>
                  </WorkLeft>
                  <WorkRight progress={progress}>
                     <Image src="/assets/works/app-02.png" layout="responsive" width={828} height={1415} alt="Iphone" />
                  </WorkRight>
               </WorkContainer>
            )}
         ></Tile>
         <Tile
            page={2}
            renderContent={({ progress }) => (
               <WorkContainer>
                  <WorkLeft progress={progress}>
                     <h3>Excepteur sint occaecat</h3>
                     <p className="text-4xl md:text-5xl font-semibold tracking-tight">
                        <WorkLink href="https://github.com/brunoliimas/">Suscipit adipiscing</WorkLink> bibendum
                     </p>
                  </WorkLeft>
                  <WorkRight progress={progress}>
                     <Image src="/assets/works/desktop-03.png" layout="responsive" width={828} height={1415} alt="Iphone" />
                  </WorkRight>
               </WorkContainer>
            )}
         ></Tile>
      </TileContent>
   </TileWrapper>
)
export default Works;