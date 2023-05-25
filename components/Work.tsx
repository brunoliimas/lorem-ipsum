import React from "react";
import Link from "next/link";


export const WorkContainer = ({ children }: { children: React.ReactNode }) => (
   <div className="grid grid-cols-1 lg:grid-cols-2 w-full min-h-screen">{children}</div>
)

export const WorkBackground = () => (
   <div className="grid grid-cols-1 lg:grid-cols-2 w-full min-h-screen top-0 sticky">
      <div className="bg-black h-[30vh] lg:h-auto"></div>
      <div className="bg-white h-[70vh] lg:h-auto"></div>
   </div>
)


export const WorkLeft: React.FC<{
   children: React.ReactNode
   progress: number
}> = ({ children, progress }) => {
   let translateY = Math.max(0, 50 - progress * 3 * 50)
   if (progress > .85) translateY = Math.max(-50, -(progress - .85) * 2 * 50)
   return (
      <div
         className="work-left flex flex-col items-start justify-center text-3xl px-10 lg:text-3xl h-[30vh] lg:h-auto"
         style={{
            transform: `translateY(${translateY}px)`
         }}>
         <div className="leading-10">
         <p className="text-xl font-bold text-green-700">Projetos</p>
            {children}
         </div>
      </div>
   )
}

export const WorkRight: React.FC<{
   children: React.ReactNode
   progress: number
}> = ({ children, progress }) => {
   let translateY = Math.max(-50, -(progress - .5) * 50)
   return (
      <div
         className="flex flex-1 lg:items-center justify-center h-screen"
         style={{ transform: `translateY(${translateY}px)` }}>
         <div className="w-full max-w-md pt-10 lg:pt-0 px-10 md:px-0">
            {children}
         </div>
      </div>
   )
}

interface LinkProps {
   href: string
   children: React.ReactNode
}
export const WorkLink: React.FC<LinkProps> = ({
   href,
   children
}: LinkProps) => (
   <Link href={href}>
      <a
         target="_blank"
         rel="noopener noreferrer"
         className="underline underline-offset-8 decoration-1"
      >
         {children}
      </a>
   </Link>
)