import React, { FC } from "react";
import "./Button.css";

type ButtonProps = {
  className: string;
  text: string;
  onClick?: () => void;
};

const Button: FC<ButtonProps> = ({ onClick, className, text }) => {
  return (
    <button onClick={onClick} className={className}>
      {text}
    </button>
  );
};

export default Button;
