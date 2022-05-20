import React from "react";
import './Post.css'
import { useSelector } from "react-redux";
import { PostSelectors } from "../../redux/reducers/postReducer";

const Post = () => {
    const selectedCard = useSelector(PostSelectors.getSelectedPost)

    return ( 
        <div className="post">
            <div className="post__container _container">
                <h1 className="post__title">{selectedCard.title ?? 'Content title'}</h1>
                <div className="post__card">
                    <div className="post__card__image">
                        <img src={selectedCard?.image ?? 'https://img5.goodfon.ru/wallpaper/nbig/d/11/abstraktsiia-fon-tsvet-chernyi.jpg'} alt="image"/>
                    </div>
                    <h3 className="post__card__title">{selectedCard.title ?? 'Content title'}</h3>
                    <p className="post__card__text">{selectedCard.text ?? 'Content text'}</p>
                    <p className="post__card__date">{selectedCard.date ?? '01.01.2001'}</p>
                </div>            
            </div>
        </div>
    )
}

export default Post