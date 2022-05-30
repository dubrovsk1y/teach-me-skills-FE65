import React, { useEffect } from "react";
import "./Post.css";
import { useDispatch, useSelector } from "react-redux";
import { loadPost, PostSelectors } from "../../redux/reducers/postReducer";
import { useParams } from "react-router-dom";

const Post = () => {
  const dispatch = useDispatch();

  const { id } = useParams();

  useEffect(() => {
    if (id) {
      dispatch(loadPost(id));
    }
  }, [id]);

  const selectedPost = useSelector(PostSelectors.getSelectedPost);

  return (
    <div className="post">
      <div className="post__container _container">
        <h1 className="post__title">{selectedPost?.title ?? "Title"}</h1>
        <div className="post__card">
          <div className="post__card__image">
            <img
              src={
                selectedPost?.image ?? "https://img5.goodfon.ru/wallpaper/nbig/d/11/abstraktsiia-fon-tsvet-chernyi.jpg"
              }
              alt="image"
            />
          </div>
          <h3 className="post__card__title">{selectedPost?.title ?? "Title"}</h3>
          <p className="post__card__text">{selectedPost?.text ?? "Text"}</p>
          <p className="post__card__date">{selectedPost?.date ?? "01.01.2022"}</p>
        </div>
      </div>
    </div>
  );
};

export default Post;
