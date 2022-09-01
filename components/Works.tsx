import React from "react"
import { TileBackground, TileContent, TileWrapper } from "./Tile";


const Works = () => (
   <TileWrapper numOfPages={3}>
      <TileBackground></TileBackground>
      <TileContent>AAA</TileContent>
      <TileContent>BBB</TileContent>
      <TileContent>CCC</TileContent>
   </TileWrapper>
)
export default Works;