import Image from 'next/image'
import React, { useCallback, useState } from 'react'
import axios from 'axios'

interface FormInputs {
    companyName: string;
    email: string;
    name: string;
    message: string;
}

interface Status {
    submitted: boolean;
    submitting: boolean;
    info: {
        error: boolean;
        msg: string | null; // Alteração no tipo da propriedade msg
    };
}

const ContactUs: React.FC = () => {
    const [status, setStatus] = useState<Status>({
        submitted: false,
        submitting: false,
        info: {
            error: false,
            msg: null
        }
    })
    const [inputs, setInputs] = useState<FormInputs>({
        companyName: '',
        email: '',
        name: '',
        message: ''
    })

    const handleOnChange = useCallback((e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        e.persist()
        setInputs(prev => ({
            ...prev,
            [e.target.id]: e.target.value
        }))
        setStatus({
            submitted: false,
            submitting: false,
            info: {
                error: false,
                msg: null
            }
        })
    }, []);

    const handleServerResponse = useCallback((ok: boolean, msg: string) => {
        if (ok) {
            setStatus({
                submitted: true,
                submitting: false,
                info: {
                    error: false,
                    msg
                }
            })
            setInputs({
                companyName: '',
                email: '',
                name: '',
                message: ''
            })
        } else {
            setStatus({
                submitted: false,
                submitting: false,
                info: {
                    error: true,
                    msg
                }
            })
        }
    }, []);

    const handleSubmmit = useCallback((e: React.FormEvent) => {
        e.preventDefault()
        setStatus(prevStatus => ({ ...prevStatus, submitting: true }))
        axios({
            method: 'POST',
            url: process.env.NEXT_PUBLIC_FORM,
            data: inputs
        }).then(_response => {
            handleServerResponse(true, 'Obrigado pelo contato, sua mensagem foi enviada!')
        })
    }, [inputs, handleServerResponse])


    return (
        <div className="bg-black text-white flex flex-col justify-center min-h-screen">
            <div className="flex-1 flex flex-col justify-center items-center py-10">
                <div className="pb-10">
                    <Image
                        src="/assets/logo.svg"
                        width={30}
                        height={30}
                        alt="Logo"
                    />
                </div>
                <h2 className="text-4xl font-bold text-center">Entre em contato comigo!</h2>

                <form onSubmit={handleSubmmit} className='flex flex-col gap-4 mt-16 px-10 lg:mt-20 min-w-full md:min-w-[500px]'>
                    {status.info.error && (
                        <div className='bg-red-100 border-red-400 text-red-700 px-4 py-3 rounded relative' role='alert'>
                            <strong className='font-bold'>Error:</strong>
                            <span className='block sm:inline'>{status.info.msg}</span>
                        </div>
                    )}
                    {status.submitted ? (
                        <div className='text-white text-xl font-bold px-4 py-3 rounded relative text-center' role='alert'>
                            <p>Sua mensagem foi enviada com sucesso!</p>
                            <p>Em breve entrarei em contato para batermos um papo.</p>
                            <p className='text-4xl'>😉</p>
                        </div>
                    ) : (
                        <>
                            <input
                                type="text"
                                id="companyName"
                                name="companyName"
                                maxLength={128}
                                placeholder="Nome da empresa"
                                className="bg-black text-white outline-none border-2 border-white rounded-lg px-4 py-2"
                                onChange={handleOnChange}
                                value={inputs.companyName}
                            />
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                maxLength={128}
                                placeholder="Seu melhor e-mail"
                                className="bg-black text-white outline-none border-2 border-white rounded-lg px-4 py-2"
                                onChange={handleOnChange}
                                value={inputs.email}
                            />
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                maxLength={128}
                                placeholder="Seu nome"
                                className="bg-black text-white outline-none border-2 border-white rounded-lg px-4 py-2"
                                onChange={handleOnChange}
                                value={inputs.name}
                            />
                            <textarea
                                id="message"
                                name="message"
                                required
                                maxLength={1024}
                                placeholder="Olá Bruno..."
                                className="bg-black text-white outline-none border-2 border-white rounded-lg px-4 py-2 min-h-[16em]"
                                onChange={handleOnChange}
                                value={inputs.message}
                            >
                            </textarea>
                            <div className="text-center mt-6">
                                <button type="submit" className="bg-white text-black rounded-lg px-8 py-2">
                                    {!status.submitting
                                        ? !status.submitted
                                            ? 'Enviar'
                                            : 'Enviado'
                                        : 'Enviando ...'
                                    }

                                </button>
                            </div>
                        </>
                    )}

                </form>
            </div>
        </div>
    )
}

export default ContactUs