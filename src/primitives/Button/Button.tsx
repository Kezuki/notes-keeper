import "./Button.scss";

import React from "react";

const Button = ({ children, onClick, type, className }: any) => {
    const handler = (e: any) => {
        e.preventDefault();
        onClick();
    };

    return (
        <button className={`button ${className}`} type={type} onClick={handler}>
            {children}
        </button>
    );
};

export default Button;
