import React, { InputHTMLAttributes } from 'react';

import './styles.css'; 

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    name: string;
    label: string;
}
//rest operation: pegar todas as propriedades (que não seja a label e name) e colocar dentro de um ob rest
const Input: React.FC<InputProps> = ({ label, name, ...rest }) => {
    return(
        <div className="input-block">
            <label htmlFor={name}>{label}</label>
            <input type="text" id={name} {...rest} />
        </div>
    );
}

export default Input;