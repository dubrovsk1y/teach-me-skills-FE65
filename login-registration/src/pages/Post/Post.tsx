import React from "react";
import './Post.css'
import { useLocation } from "react-router-dom";

const Post = () => {
    const location: any = useLocation()

    return ( 
        <div className="post">
            <div className="post__container _container">
                <h1 className="post__title">{location?.state?.title ?? 'Content title'}</h1>
                <div className="post__card">
                    <div className="post__card__image">
                        <img src={location?.state?.image ?? 'https://fakeimg.pl/200x100/282828/eae0d0/?retina=1'} alt="image"/>
                    </div>
                    <h3 className="post__card__title">{location?.state?.title ?? 'Content title'}</h3>
                    <p className="post__card__text">{location?.state?.text ?? 'Content text'}</p>
                    <p className="post__card__date">{location?.state?.date ?? '01.01.2001'}</p>
                </div>            
            </div>
        </div>
    )
}

export default Post