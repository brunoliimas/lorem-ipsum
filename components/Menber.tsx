import React from "react"
import Link from "next/link"
import Image from "next/image"


interface Props {
   id: string
   name: string
   jobTitle: string
   socialId: string
   link: string
}
const Member: React.FC<Props> = ({ id, name, jobTitle, socialId, link }) => (
   <div className="flex flex-col items-center justify-center">
      <Image
         src={`/assets/team/avatar-${id}.jpeg`}
         alt={name}
         width={200}
         height={200}
         className="rounded-md"
      />
      <p className="text-2xl xl:text-3xl font-bold">{name}</p>
      <p className="text-base text-gray-500">{jobTitle}</p>
      <p className="text-base text-blue-400">
         <Link href={link}>
            <a target="_blank" rel="noopener noreferrer">{socialId}</a>
         </Link>
      </p>
   </div>
)
export default Member;