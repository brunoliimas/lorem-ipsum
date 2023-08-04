import Link from 'next/link';
import React from 'react';
import { FiDownload } from 'react-icons/fi';
import { MdArrowBack } from 'react-icons/md';

interface ButtonProps {
    name?: string;
    href: string;
    download?: string;
    back?: boolean;
}

const Button: React.FC<ButtonProps> = ({ name, href, download, back }) => {
    const styleButton = "inline-flex items-center justify-center bg-green-700 text-white text-lg px-4 py-2 rounded-full font-semibold transition-all duration-500 hover:bg-green-800";

    const isDownloadButton = download && href;
    const isBackButton = back && href;

    // Renderiza o botão de download
    if (isDownloadButton) {
        return (
            <button className={styleButton}>
                <FiDownload className='mr-2' size={20} />
                <a href={href} download={download}>
                    {name}
                </a>
            </button>
        );
    } else if (isBackButton) {
        return (
            <Link href={href}>
                <button className={styleButton}>
                    <MdArrowBack className='mr-2' size={30} />
                    Voltar
                </button>
            </Link>
        );
    }

    // Renderiza o botão normal
    return (
        <button className={styleButton}>
            <Link href={href}>
                {name}
            </Link>
        </button>
    );
};

export default Button;
