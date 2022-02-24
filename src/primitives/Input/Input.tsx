import "./Input.scss";

import React from "react";

const Input = ({ type, onChange, value, className = "" }: any) => {
    return (
        <input
            className={`input ${className}`}
            onChange={onChange}
            type={type}
            value={value}
        />
    );
};

export default Input;
