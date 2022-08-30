import React from "react"


const Footer: React.FC= () => {
   return (
      <footer className="w-full h-24 bg-gray-50 flex flex-col justify-center items-center">
         <h2 className="text-base">Copyright © 2022 - <a href="https://github.com/brunoliimas/" target="_blank" rel="noopener noreferrer">Bruno<span className="text-emerald-600">Lima</span></a></h2>
      </footer>
   )
}
export default Footer;