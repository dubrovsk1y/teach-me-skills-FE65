import React from "react";
import './Card.css'

const Card = (props: any) => {
    return (
        <div className="card">
            <div className="card__image">
                <img src={props.src} alt="image" width="260" height="100" />
            </div>
            <h3 className="card__title">{props.title}</h3>
            <p className="card__text">{props.text}</p>
            <p className="card__date">{props.date}</p>
        </div>
    )
}

export default Card