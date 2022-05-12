import React, { FC } from "react";
import './Button.css';

type ButtonProps = {
    className: string;
    text: string;
    onClick?: () => void;
}

const Button: FC<ButtonProps> = (props) => {
    return <button onClick={props.onClick} className={props.className}>{props.text}</button>;
}

export default Button;