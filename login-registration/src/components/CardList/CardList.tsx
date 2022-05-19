import React from "react";
import Card from "../Card/Card";
import './CardList.css'
import { Card as CardType } from "../../common/types";


const CardList = ({data}: any) => {
    

    return (
        <div className="cardList">
            <div className="cardList__conatiner">
                { data.map((item: CardType) => {
                    return (
                        <Card 
                            data={item}                              
                            key={item.id} 
                            
                            // src={item.image ? item.image : 'https://img5.goodfon.ru/wallpaper/nbig/d/11/abstraktsiia-fon-tsvet-chernyi.jpg'}
                        ></Card>  
                    )
                }) }
            </div>
        </div>
    )
}

export default CardList