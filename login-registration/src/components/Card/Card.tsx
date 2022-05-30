import React, { FC, useState } from "react";
import "./Card.css";
import Popup from "reactjs-popup";
import { useDispatch, useSelector } from "react-redux";
import { PostSelectors, setLikePost, setSavedPost, setSelectedImage } from "../../redux/reducers/postReducer";
import { Card as CardType } from "../../common/types";
import classNames from "classnames";

type CardProps = {
  data: CardType;
};

const Card: FC<CardProps> = ({ data }) => {
  const { image, title, text, date, id, likeStatus, save } = data;
  const dispatch = useDispatch();
  const selectedImage = useSelector(PostSelectors.getSelectedImage);

  const onCardClick = (event: any) => {
    event.stopPropagation();
    window.location.href = `/post/${id}`;
  };

  const handleButtonClick = (action: string, event: any) => {
    event.stopPropagation();
    if (action === "like" || action === "dislike") {
      dispatch(setLikePost({ id, value: likeStatus === action ? null : action }));
    } else if (action === "save") {
      dispatch(setSavedPost({ id, value: !save }));
    }
  };

  return (
    <div className="card" onClick={onCardClick}>
      <div className="card__image">
        <img
          src={image ?? "https://img5.goodfon.ru/wallpaper/nbig/d/11/abstraktsiia-fon-tsvet-chernyi.jpg"}
          alt="image"
          width="260"
          height="100"
        />
      </div>
      <h3 className="card__title">{title}</h3>
      <p className="card__text">{text}</p>
      <p className="card__date">{date}</p>
      <Popup
        trigger={<span className="material-symbols-outlined card__visibility"> visibility </span>}
        position={"top left"}
        onOpen={() =>
          dispatch(
            setSelectedImage(
              image ? image : "https://img5.goodfon.ru/wallpaper/nbig/d/11/abstraktsiia-fon-tsvet-chernyi.jpg"
            )
          )
        }
        onClose={() => dispatch(setSelectedImage(null))}
      >
        <div className="popup__image">
          <img src={selectedImage} alt="" />
        </div>
        <div className="popup__btns">
          <span className="material-symbols-outlined chevron _left"> chevron_left </span>
          <span className="material-symbols-outlined chevron _right"> chevron_right </span>
        </div>
      </Popup>
      <div className="card__btns">
        <span
          onClick={(event) => handleButtonClick("like", event)}
          className={classNames("material-symbols-outlined", "card__like", {
            ["_active"]: likeStatus === "like",
          })}
        >
          {" "}
          thumb_up{" "}
        </span>
        <span
          onClick={(event) => handleButtonClick("dislike", event)}
          className={classNames("material-symbols-outlined", "card__dislike", {
            ["_active"]: likeStatus === "dislike",
          })}
        >
          {" "}
          thumb_down{" "}
        </span>
        <span
          onClick={(event) => handleButtonClick("save", event)}
          className={classNames("material-symbols-outlined", "card__save", {
            ["_active"]: save,
          })}
        >
          {" "}
          bookmark{" "}
        </span>
      </div>
    </div>
  );
};

export default Card;
