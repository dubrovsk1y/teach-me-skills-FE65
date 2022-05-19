import React, { FC } from "react";
import './Card.css'
import { useNavigate } from "react-router-dom";
import Popup from 'reactjs-popup';
import { useDispatch, useSelector } from "react-redux";
import { PostSelectors, setSelectedPost } from "../../redux/reducers/postReducer";
import { Card as CardType} from "../../common/types";

type CardProps = {
    data: CardType
    onCardClick?: () => void
}

const Card: FC<CardProps> = ({data, onCardClick}) => {
    const { image, title, text, date } = data
    const navigate = useNavigate()
    const dispatch = useDispatch()
    // const selectedCard = useSelector(PostSelectors.getSelectedPost);


    const onHoverCard = (data: CardType | null) => {
        data ? dispatch(setSelectedPost(data)) : dispatch(setSelectedPost(null))
        // console.log(selectedCard)
        console.log(data)
    }

    return (
        <div className="card" onMouseEnter={() => onHoverCard(data)} onMouseLeave={() => onHoverCard(null)} onClick={() => navigate('/post', {state: {image, title, text, date}})}>
            <div className="card__image">
                <img src={image} alt="image" width="260" height="100" />
            </div>
            <h3 className="card__title">{title}</h3>
            <p className="card__text">{text}</p>
            <p className="card__date">{date}</p>
            <Popup 
                trigger={<span onClick={onCardClick} className="material-symbols-outlined card__visibility"> visibility </span>} 
                position={'top center'}
                on={['hover', 'focus']}
                >
                
                <div className="popup__image">
                    <img src={image} alt="" />
                </div>
                <div className="popup__btns">            
                    <span className="material-symbols-outlined chevron _left"> chevron_left </span> 
                    <span className="material-symbols-outlined chevron _right"> chevron_right </span>
                </div>                
            </Popup> 
        </div>
    )
}

export default Card