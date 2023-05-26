import Image from 'next/image'
import React from 'react'
import SliderContainer, { SliderItem } from './Slider'



const ClientLogos: React.FC = () => (
   <>
      <SliderContainer
         className="py-4"
         contentWidth={1290}
         initialOffsetX={0}>
         <SliderItem width={100}>
            <Image
               src="/assets/logos/photoshop.png"
               width={50}
               height={50}
               alt="Photoshop"
               objectFit="contain"
            />
         </SliderItem>
         <SliderItem width={100}>
            <Image
               src="/assets/logos/xd.png"
               width={50}
               height={50}
               alt="XD"
               objectFit="contain"
            />
         </SliderItem>
         <SliderItem width={100}>
            <Image
               src="/assets/logos/illustrator.png"
               width={50}
               height={50}
               alt="Illustrator"
               objectFit="contain"
            />
         </SliderItem>
         <SliderItem width={100}>
            <Image
               src="/assets/logos/figma.png"
               width={50}
               height={50}
               alt="Figma"
               objectFit="contain"
            />
         </SliderItem>
         
      </SliderContainer>
      <SliderContainer
         className="py-4"
         contentWidth={1290}
         initialOffsetX={0}>
         <SliderItem width={100}>
            <Image
               src="/assets/logos/html-5.png"
               width={50}
               height={50}
               alt="HTML"
               objectFit="contain"
            />
         </SliderItem>
         <SliderItem width={100}>
            <Image
               src="/assets/logos/css-3.png"
               width={50}
               height={50}
               alt="CSS"
               objectFit="contain"
            />
         </SliderItem>
         <SliderItem width={100}>
            <Image
               src="/assets/logos/js.png"
               width={50}
               height={50}
               alt="Javascript"
               objectFit="contain"
            />
         </SliderItem>
         <SliderItem width={100}>
            <Image
               src="/assets/logos/typescript.png"
               width={50}
               height={50}
               alt="Typescript"
               objectFit="contain"
            />
         </SliderItem>
         <SliderItem width={100}>
            <Image
               src="/assets/logos/react.svg"
               width={50}
               height={50}
               alt="React"
               objectFit="contain"
            />
         </SliderItem>
         <SliderItem width={100}>
            <Image
               src="/assets/logos/next.svg"
               width={50}
               height={50}
               alt="NextJs"
               objectFit="contain"
            />
         </SliderItem>
         <SliderItem width={100}>
            <Image
               src="/assets/logos/tailwind.png"
               width={50}
               height={50}
               alt="TailwindCSS"
               objectFit="contain"
            />
         </SliderItem>
      </SliderContainer>
   </>
)

export default ClientLogos