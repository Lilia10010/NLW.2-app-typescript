import React, { TextareaHTMLAttributes } from 'react';

import './styles.css'; 

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement>{
    name: string;
    label: string;
}
//rest operation: pegar todas as propriedades (que não seja a label e name) e colocar dentro de um ob rest
const Textarea: React.FC<TextareaProps> = ({ label, name, ...rest }) => {
    return(
        <div className="textarea-block">
            <label htmlFor={name}>{label}</label>
            <textarea id={name} {...rest} />
        </div>
    );
}

export default Textarea;