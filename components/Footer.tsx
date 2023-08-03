import Image from "next/image";
import Link from "next/link";
import React from "react"

const Footer: React.FC = () => (
   <footer className="min-h-full flex flex-col gap-8 items-center justify-center bg-black text-white p-10">
      
      <Link href="/">
         <Image
            src="/assets/logo.svg"
            width={18}
            height={18}
            alt="Logo"
            className="cursor-pointer"
         />
      </Link>
      {/* <Link href="/terms">Terms</Link>
      <Link href="/privacy">Privacy Polity</Link> */}
   </footer>
)

export default Footer;