import React, { FC } from "react";
import Card from "../Card/Card";
import "./CardList.css";
import { PostType, PostsListType } from "../../common/types";

type CardListProps = {
  data: PostsListType;
};

const CardList: FC<CardListProps> = ({ data }) => {
  return (
    <div className="cardList">
      <div className="cardList__conatiner">
        {data.map((post: PostType) => (
          <Card data={post} key={post.id}></Card>
        ))}
      </div>
    </div>
  );
};

export default CardList;
