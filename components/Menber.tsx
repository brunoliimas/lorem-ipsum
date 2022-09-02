import React from "react"
import Link from "next/link"
import Image from "next/image"


interface Props {
   id: string
   name: string
   socialId: string
   link: string
}
const Member: React.FC<Props> = ({ id, name, socialId, link }) => (
   <div className="flex flex-col items-center justify-center">
      <Image
         src={`/assets/team/avatar-${id}.jpeg`}
         alt={name}
         width={1400}
         height={1082}
         className="rounded-md"
      />
      <p className="text-2xl xl:text-3xl">{name}</p>
      <p className="text-base text-blue-400">
         <Link href={link}>
            <a target="_blank" rel="noopener noreferrer">{socialId}</a>
         </Link>
      </p>
   </div>
)
export default Member;