import React from "react";
import "./Tab.css";

const Tab = (props: any) => {
  const { className, text, onClick } = props;
  return (
    <button onClick={onClick} className={className}>
      {text}
    </button>
  );
};

export default Tab;
