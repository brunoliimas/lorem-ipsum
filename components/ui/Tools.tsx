import React from 'react';

interface ToolsProps {
    name: string;
    primary?: boolean
}

export const Tools = ({ name, primary }: ToolsProps) => {
    return (
        <div
            className={`uppercase px-4 py-2 rounded-full border bg-transparent
            ${!primary ?
                    'hidden md:inline-block border-white' :
                    'inline-block border-green-800 text-green-800'}`}>
            <p className='text-sm'>{name}</p>
        </div>
    );
};
