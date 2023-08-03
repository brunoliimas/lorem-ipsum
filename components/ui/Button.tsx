import Link from 'next/link';
import React from 'react';


import { FiDownload } from 'react-icons/fi'

interface ButtonProps {
    name: string;
    href: string;
    download?: string;

}

const Button: React.FC<ButtonProps> = ({ name, href, download }) => {
    const styleButton = "inline-flex items-center justify-center bg-green-700  text-white text-lg px-4 py-1 rounded-full font-semibold uppercase transition-all duration-500 hover:bg-green-800"

    const isDownloadButton = download && href;
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

