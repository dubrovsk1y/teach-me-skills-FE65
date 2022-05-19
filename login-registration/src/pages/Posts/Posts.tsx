import React from "react";
import './Posts.css'
import CardList from "../../components/CardList";
import Button from "../../components/Button";

const DATA = [
    {
        id: Math.random(),
        image: 'https://pw.artfile.me/wallpaper/24-12-2012/650x366/3d-grafika-abstract-abstrakcii-ostrye-li-692215.jpg',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia odit nobis alias natus?',
        date: '10.04.2022',
        lesson_num: 0,
        title: 'Home',
        author: 0
    },
    {
        id: Math.random(),
        image: 'https://pw.artfile.me/wallpaper/11-07-2015/650x407/3d-grafika-abstrakciya--abstract-vitki-s-949768.jpg',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia odit nobis alias natus?',
        date: '01.07.2022',
        lesson_num: 0,
        title: 'My family',
        author: 0
    },
    {
        id: Math.random(),
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia odit nobis alias natus?',
        date: '12.11.2022',
        lesson_num: 0,
        title: 'Car',
        author: 0
    },
    {
        id: Math.random(),
        image: 'https://img2.goodfon.ru/wallpaper/nbig/d/b8/abstrakciya-render-fon-chernyy.jpg',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia odit nobis alias natus?',
        date: '03.04.2022',
        lesson_num: 0,
        title: 'Friends',
        author: 0
    },
    {
        id: Math.random(),
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia odit nobis alias natus?',
        date: '05.02.2022',
        lesson_num: 0,
        title: 'Work',
        author: 0
    },
    {
        id: Math.random(),
        image: 'https://instapik.ru/wp-content/uploads/2020/08/dark-background.jpg',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia odit nobis alias natus?',
        date: '11.08.2022',
        lesson_num: 0,
        title: 'Studies',
        author: 0
    },
    {
        id: Math.random(),
        image: 'https://klike.net/uploads/posts/2019-06/1561182942_2.jpg',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia odit nobis alias natus?',
        date: '29.01.2022',
        lesson_num: 0,
        title: 'Learning English',
        author: 0
    },
    {
        id: Math.random(),
        image: 'https://cdn.pixabay.com/photo/2019/09/18/21/12/dark-4487690_960_720.jpg',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia odit nobis alias natus?',
        date: '17.12.2022',
        lesson_num: 0,
        title: 'Holidays',
        author: 0
    },
]

const Posts = () => {
    return (
        <div className="posts">
            <div className="posts__container _container">
                <h1 className="posts__title">My posts</h1>
                <Button className="addPostBtn" text={'Add post'}></Button>            
                <CardList data={DATA}></CardList>
            </div>
        </div>
    )
}

export default Posts