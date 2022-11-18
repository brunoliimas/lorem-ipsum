import Image from 'next/image'
import React, { useCallback, useState } from 'react'

const ContactUs: React.FC = () => {
    return (
        <div className="bg-black text-white flex flex-col justify-center min-h-screen">
            <div className="flex-1 flex flex-col justify-center items-center py-10 lg:py-6">
                <div className="pb-10">
                    <Image
                        src="/assets/logo.svg"
                        width={30}
                        height={30}
                        alt="Logo"
                    />
                </div>
                <h2 className="text-4xl font-bold">Contact Us</h2>

                <form action="" className='flex flex-col gap-4 mt-16 px-10 lg:mt-20 min-w-full md:min-w-[500px]'>
                    <input
                        type="text"
                        id="companyName"
                        name="companyName"
                        required
                        maxLength={128}
                        placeholder="Company name"
                        className="bg-black text-white outline-none border-2 border-white rounded-lg px-4 py-2"
                    />
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        maxLength={128}
                        placeholder="Your e-mail"
                        className="bg-black text-white outline-none border-2 border-white rounded-lg px-4 py-2"
                    />
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        maxLength={128}
                        placeholder="Your name"
                        className="bg-black text-white outline-none border-2 border-white rounded-lg px-4 py-2"
                    />
                    <textarea
                        id="message"
                        name="message"
                        required
                        maxLength={1024}
                        placeholder="Additional information"
                        className="bg-black text-white outline-none border-2 border-white rounded-lg px-4 py-2 min-h-[16em]"
                    >
                    </textarea>
                    <div className="text-center mt-6">
                        <button type="submit" className="bg-white text-black rounded-lg px-8 py-2">Enviar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ContactUs