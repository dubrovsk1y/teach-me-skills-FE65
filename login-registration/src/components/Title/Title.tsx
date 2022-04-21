import React from "react";
import './Title.css'

const Title = (props: any) => {
    return <h3 className={props.className}>{props.text}</h3>
}

export default Title