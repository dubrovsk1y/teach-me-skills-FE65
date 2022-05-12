import React, { FC } from "react";
import './Input.css'

type InputProps = {
    type: string;
    className: string;
    id: string;
    placeholder: string;
    value?: string;
    onChange?: any;
}

const Input: FC<InputProps> = ({type, className, id, placeholder, onChange, value}) => {
    return <input value={value} onChange={onChange} type={type} className={className} id={id} placeholder={placeholder}/>
}

export default Input