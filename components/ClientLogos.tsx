import Image from 'next/image'
import React from 'react'
import SliderContainer, { SliderItem } from './Slider'

const ClientLogos: React.FC = () => (
   <>
      <SliderContainer
         className=""
         contentWidth={1290}
         initialOffsetX={0}>
         <SliderItem width={150}>
            <Image
               src="/assets/logos/logo-01.svg"
               width={200}
               height={50}
               alt="logo 01"
               objectFit="contain"
            />
         </SliderItem>
         <SliderItem width={150}>
            <Image
               src="/assets/logos/logo-02.svg"
               width={200}
               height={50}
               alt="logo 01"
               objectFit="contain"
            />
         </SliderItem>
         <SliderItem width={150}>
            <Image
               src="/assets/logos/logo-03.svg"
               width={200}
               height={50}
               alt="logo 01"
               objectFit="contain"
            />
         </SliderItem>
         <SliderItem width={150}>
            <Image
               src="/assets/logos/logo-04.svg"
               width={200}
               height={50}
               alt="logo 01"
               objectFit="contain"
            />
         </SliderItem>
         <SliderItem width={150}>
            <Image
               src="/assets/logos/logo-05.svg"
               width={200}
               height={50}
               alt="logo 01"
               objectFit="contain"
            />
         </SliderItem>
         <SliderItem width={150}>
            <Image
               src="/assets/logos/logo-06.svg"
               width={200}
               height={50}
               alt="logo 01"
               objectFit="contain"
            />
         </SliderItem>
         <SliderItem width={150}>
            <Image
               src="/assets/logos/logo-07.svg"
               width={200}
               height={50}
               alt="logo 01"
               objectFit="contain"
            />
         </SliderItem>
         <SliderItem width={150}>
            <Image
               src="/assets/logos/logo-08.svg"
               width={200}
               height={50}
               alt="logo 01"
               objectFit="contain"
            />
         </SliderItem>
         <SliderItem width={150}>
            <Image
               src="/assets/logos/logo-09.svg"
               width={200}
               height={50}
               alt="logo 01"
               objectFit="contain"
            />
         </SliderItem>
      </SliderContainer>
   </>
)

export default ClientLogos