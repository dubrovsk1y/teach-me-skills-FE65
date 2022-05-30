import React from "react";
import Card from "../Card/Card";
import "./CardList.css";
import { Card as CardType } from "../../common/types";

const CardList = ({ data }: any) => {
  return (
    <div className="cardList">
      <div className="cardList__conatiner">
        {data.map((card: CardType) => (
          <Card data={card} key={card.id}></Card>
        ))}
      </div>
    </div>
  );
};

export default CardList;
