import React from "react";
import Card from "../Card/Card";
import './CardList.css'

const DATA = [
    {
        id: Math.random(),
        image: 'https://fakeimg.pl/200x100/282828/eae0d0/?retina=1',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia odit nobis alias natus?',
        date: '10.04.2022',
        lesson_num: 0,
        title: 'Title',
        author: 0
    },
    {
        id: Math.random(),
        image: 'https://fakeimg.pl/200x100/282828/eae0d0/?retina=1',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia odit nobis alias natus?',
        date: '11.04.2022',
        lesson_num: 0,
        title: 'Title',
        author: 0
    },
    {
        id: Math.random(),
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia odit nobis alias natus?',
        date: '12.04.2022',
        lesson_num: 0,
        title: 'Title',
        author: 0
    },
    {
        id: Math.random(),
        image: 'https://fakeimg.pl/200x100/282828/eae0d0/?retina=1',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia odit nobis alias natus?',
        date: '13.04.2022',
        lesson_num: 0,
        title: 'Title',
        author: 0
    },
    {
        id: Math.random(),
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia odit nobis alias natus?',
        date: '14.04.2022',
        lesson_num: 0,
        title: 'Title',
        author: 0
    },
    {
        id: Math.random(),
        image: 'https://fakeimg.pl/200x100/282828/eae0d0/?retina=1',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia odit nobis alias natus?',
        date: '15.04.2022',
        lesson_num: 0,
        title: 'Title',
        author: 0
    },
    {
        id: Math.random(),
        image: 'https://fakeimg.pl/200x100/282828/eae0d0/?retina=1',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia odit nobis alias natus?',
        date: '16.04.2022',
        lesson_num: 0,
        title: 'Title',
        author: 0
    },
    {
        id: Math.random(),
        image: 'https://fakeimg.pl/200x100/282828/eae0d0/?retina=1',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia odit nobis alias natus?',
        date: '17.04.2022',
        lesson_num: 0,
        title: 'Title',
        author: 0
    },
]

const CardList = () => {
    return (
        <div className="cardList">
            <div className="cardList__conatiner _container">
                { DATA.map(item => {
                    return <Card key={item.id} title={item.title} text={item.text} date={item.date} src={item.image ? item.image : 'https://fakeimg.pl/200x100/282828/eae0d0/?retina=1'}></Card>
                }) }
            </div>
        </div>
    )
}

export default CardList