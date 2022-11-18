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
               alt="logo 01"
               objectFit="contain"
            />
         </SliderItem>
         <SliderItem width={100}>
            <Image
               src="/assets/logos/xd.png"
               width={50}
               height={50}
               alt="logo 01"
               objectFit="contain"
            />
         </SliderItem>
         <SliderItem width={100}>
            <Image
               src="/assets/logos/illustrator.png"
               width={50}
               height={50}
               alt="logo 01"
               objectFit="contain"
            />
         </SliderItem>
         <SliderItem width={100}>
            <Image
               src="/assets/logos/figma.png"
               width={50}
               height={50}
               alt="logo 01"
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
               alt="logo 01"
               objectFit="contain"
            />
         </SliderItem>
         <SliderItem width={100}>
            <Image
               src="/assets/logos/css-3.png"
               width={50}
               height={50}
               alt="logo 01"
               objectFit="contain"
            />
         </SliderItem>
         <SliderItem width={100}>
            <Image
               src="/assets/logos/js.png"
               width={50}
               height={50}
               alt="logo 01"
               objectFit="contain"
            />
         </SliderItem>
         <SliderItem width={100}>
            <Image
               src="/assets/logos/typescript.png"
               width={50}
               height={50}
               alt="logo 01"
               objectFit="contain"
            />
         </SliderItem>
         <SliderItem width={100}>
            <Image
               src="/assets/logos/react.svg"
               width={50}
               height={50}
               alt="logo 01"
               objectFit="contain"
            />
         </SliderItem>
         <SliderItem width={100}>
            <Image
               src="/assets/logos/tailwind.png"
               width={50}
               height={50}
               alt="logo 01"
               objectFit="contain"
            />
         </SliderItem>
      </SliderContainer>
   </>
)

export default ClientLogos