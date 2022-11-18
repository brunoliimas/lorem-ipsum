import React, { useRef, useContext, useState, useCallback } from "react";
import Image from "next/image"
import { ScrollContext } from "./utils/scroll-observer";
// import Logo from '/assets/logo.svg'

const Masterhead: React.FC = () => {
   const [imageLoaded, setImageLoaded] = useState(false)
   const refContainer = useRef<HTMLDivElement>(null)
   const { scrollY } = useContext(ScrollContext)

   let progress = 0

   const { current: elContainer } = refContainer
   if (elContainer) {
      progress = Math.min(1, scrollY / elContainer.clientHeight)
   }

   const handleImageLoaded = useCallback(() => {
      setImageLoaded(true)
   },[])

   return (
      <div
         ref={refContainer}
         className="min-h-screen flex flex-col items-center justify-center sticky top-0 -z-10"
         style={{ transform: `translateY(-${progress * 20}vh)` }}
      >
         <video
            autoPlay
            loop muted
            playsInline
            className="absolute w-full h-full object-cover" src="/assets/masthead-bg.mp4">
            {/* <source src="/assets/masthead-me-bg.mp4" type="video/mp4; codecs=hvc1" /> */}
            {/* <source src="/assets/masthead-bg03.mp4" type="video/mp4; codecs=hvc1" /> */}
            <source src="/assets/masthead-bg.mp4" type="video/webm; codecs=vp9" />
         </video>
         <div className={`flex-grow-0 pt-10 transition-opacity duration-1000 drop-shadow-[0_5px_3px_rgba(0,0,0,0.2)] ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}>
            <Image
               src="/assets/logo.svg"
               width={200 / 3}
               height={200 / 3}
               alt="Bruno Lima" />
         </div>
         <div className="py-12 px-8 font-bold z-10 text-white drop-shadow-[0_5px_3px_rgba(0,0,0,0.2)] text-center flex-1 flex items-center justify-center flex-col">
            <h1 className="mb-6 text-5xl xl:text-6xl">Bruno Lima</h1>
            <h2 className="mb-2 text-3xl xl:text-5xl tracking-tight">
               <span>Front End Developer</span>
            </h2>
         </div>
         <div className={`flex-grow-0 pb-20 md:pb-10 transition-all duration-1000 ${imageLoaded ? 'opacity-100' : 'opacity-0 -translate-y-10'
            }`}>
            <Image
               src="/assets/arrow-down.svg"
               width={200 / 3}
               height={200 / 3}
               alt="Scroll-down"
               onLoad={handleImageLoaded}
            />
         </div>
      </div>
   )
}

export default Masterhead;