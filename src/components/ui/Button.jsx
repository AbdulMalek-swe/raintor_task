import React from 'react';

const Button = ({children,onClick,className}) => {
    return (
        <button onClick={onClick} className={`inline-flex border border-black rounded-full cursor-pointer  ${className} `}>
            {children}
        </button>
    );
};

export default Button;