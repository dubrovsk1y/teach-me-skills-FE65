import React, { FC } from "react";
import './Input.css'

type InputProps = {
    type: string;
    className: string;
    id: string;
    placeholder: string;
}

const Input: FC<InputProps> = ({type, className, id, placeholder}) => {
    return <input type={type} className={className} id={id} placeholder={placeholder}/>
}

export default Input