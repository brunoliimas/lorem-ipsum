import React from 'react';

interface ToolsProps {
    name: string;
}

const Tools: React.FC<ToolsProps> = ({ name }) => {
    return (
        <div className='mt-4 mr-2 px-4 py-2 rounded-full inline-block border border-white bg-transparent'>
            <p className='text-sm'>{name}</p>
        </div>
    );
};

export default Tools;
